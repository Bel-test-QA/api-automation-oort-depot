# !/usr/bin/env bash
# Ваш код на Bash
# Скрипт параллельного запуска 10 окон Newman для стресс-тестирования
for i in {1..10}
do
   newman run collections/ultimate_api.postman_collection.json -e environments/qa_postman_environment.json --iteration-count 100 &
done
wait
echo "Стресс-тест завершен!"
