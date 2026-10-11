const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'starship-warehouse-app',
  brokers: ['localhost:9092'] // мост до Кубера
});

const producer = kafka.producer();

const sendLoadEvent = async () => {
  await producer.connect();
  console.log('🚀 Producer подключился к Kafka!');

  // Симулируем ответ бэкенда при успешной погрузке (201 Created)
  const realPostmanPayload = {
    id: Math.floor(Math.random() * 1000) + 1, // Динамический ID погрузки
    starship_id: "starship-" + Math.floor(Math.random() * 100), // Имитируем {{newShipId}}
    cargo_id: "cargo-" + Math.floor(Math.random() * 500),    // Имитируем {{newCargoId}}
    quantity: 111, //  количество из Body
    status: "loading", //  статус из ответа
    created_at: new Date().toISOString() // Время операции
  };

  await producer.send({
    topic: 'starship-loading-events',
    messages: [
      { value: JSON.stringify(realPostmanPayload) }
    ],
  });

  console.log('📦 В очередь Кафки отправлен лог новой погрузки:', realPostmanPayload);
  await producer.disconnect();
};

sendLoadEvent().catch(console.error);
