# 🧱 Нагрузочное и Стресс-тестирование (Performance & Stress Testing)

В проекте реализовано два независимых подхода к тестированию производительности API: встроенный инструмент Postman Performance и кастомные инженерные скрипты автоматизации.

## 1. Встроенное нагрузочное тестирование (Postman Performance)
Используется непосредственно внутри интерфейса Postman для замера Latency (задержек) конкретных критически важных эндпоинтов и проверки их соответствия **SLA (Service Level Agreement)**.

### ⚙️ Профиль базовой нагрузки:
* **Load Profile:** Fixed (Постоянная нагрузка)
* **Virtual Users:** 10 одновременных пользователей
* **Test Duration:** 1 минута
* **Критерии успеха (Метрики):** Average Latency `is less then` 3000 ms.

*Подробная инструкция по ручному запуску этого профиля внутри **Postman***: [Performance Testing](https://www.postman.com/bel-test-qa-1996072/api-automation-framework-security-audit-stress-logic-oort-depot/folder/46upf7m/ultimate-api-quality-gate-oort-depot?action=share&creator=51804164&active-environment=51804164-40b20e69-ba89-4ed1-84e1-9819229903cf)

## 2. Имитация стресс-нагрузки и проверка Rate Limiting (CLI Скрипты)
Для проверки стабильности сервера при массовом спаме запросов, удержания соединений (`ECONNRESET`) и корректности выдачи ошибки `429 Too Many Requests` разработаны автоматические скрипты параллельного запуска.

Они имитируют многопоточную нагрузку, запуская 10 независимых потоков Newman CLI одновременно:
* **Для Windows (PowerShell):** [`scripts/stress-test.ps1`](./scripts/stress-test.ps1) — запускает тесты в 10 отдельных визуальных окнах.
* **Для Linux/macOS (Bash):** [`scripts/stress-test.sh`](./scripts/stress-test.sh) — запускает 10 параллельных фоновых потоков в терминале.

Запуск локально одной командой под вашу операционную систему:

* **Для Windows:**
  ```bash
  npm run test:stress:win
  ```
* **Для macOS / Linux:**
  ```bash
  npm run test:stress:mac
  ```


