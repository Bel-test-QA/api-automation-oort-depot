const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'starship-warehouse-app',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'warehouse-monitoring-group' });

const runConsumer = async () => {
  await consumer.connect();
  console.log('👁 Consumer запущен и слушает топик starship-loading-events...');

  await consumer.subscribe({ topic: 'starship-loading-events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const rawData = message.value.toString();
      const parsedData = JSON.parse(rawData);
      
      console.log('\n📥 [Kafka Message Received] -------');
      console.log(`Топик: ${topic}`);
      console.log(`ID Погрузки: ${parsedData.id}`);
      console.log(`Звездолет (ID): ${parsedData.starship_id}`);
      console.log(`Груз (ID): ${parsedData.cargo_id}`);
      console.log(`Количество: ${parsedData.quantity}`);
      console.log(`Статус операции: ${parsedData.status}`);
      console.log(`Дата создания: ${parsedData.created_at}`);
      console.log('-----------------------------------\n');
    },
  });
};

runConsumer().catch(console.error);
