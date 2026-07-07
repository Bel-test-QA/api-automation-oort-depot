# Скрипт параллельного запуска 10 окон Newman для стресс-тестирования
1..10 | ForEach-Object { 
    Start-Process cmd -ArgumentList "/c newman run collections/ultimate_api.postman_collection.json -e environments/qa_postman_environment.json --iteration-count 100" 
}
