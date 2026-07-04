## 🌀 Project 2: API Automation Framework: Security Audit, Stress & Logic | Oort Depot
<h6>Продвинутый инженерный фреймворк автотестов для системы управления складом (WMS), сфокусированный на бизнес-логике, безопасности и отказоустойчивости.

### 🎯 Project Goal
<h6>Глубокий аудит бизнес-логики, контрактных обязательств API и устойчивости системы к взлому и перегрузкам.</h6>

📖 **Интерактивная документация:** [Посмотреть **Postman Publish Documentation**](https://documenter.getpostman.com/view/51804164/2sBXwsNAZ7)

https://www.loom.com/share/bca026426d9246d7b66fce290f61fa38


---
### ⚙️ Repository Structure

```text
├── .github/workflows/          # CI/CD (GitHub Actions)
│   └── postman-tests.yml
├── collections/                # Экспортированные коллекции Postman
│   └── ultimate_api.postman_collection.json
├── environments/               # Файлы окружений Postman
│   └── qa_postman_environment.json
├── specifications/             # BDD-сценарии (Gherkin)
│   ├── crud.feature            # СRUD тесты (Positive/Negative)
│   ├── integration.feature     # Тесты взаимодействия модулей
│   └── end-to-end.feature      # Сквозные бизнес-сценарии (E2E)
├── docs/                       # Сопроводительная документация
│   ├── qa-audit-insights.md    # Аналитический аудит API (Security, OWASP Top 10)
│   ├── bug-reports.md          # Логи багов Jira со скриншотами
│   ├── performance-testing.md  # ВЫДЕЛЕННЫЙ БЛОК: нагрузочное тестирование
│   └── static-reports/         # Идеальные эталонные отчеты
│       ├── perfect-newman.html 
│       └── allure-report.zip   
└── README.md                   # Главный путеводитель по проекту
```

### ⚡️ Architecture & Features
* **Zero Hardcode Logic:** Полное отсутствие статических данных. Все ID, токены и параметры генерируются динамически и передаются по цепочке (Chaining).
* **Performance:** Нагрузочное тестирование (Stress Testing) через параллельный запуск 10 инстансов Newman.
* **Security & SQLi:** Тестирование по стандартам `OWASP API Security Top 10`, включая проверку на SQL-инъекции.
* **Smart Scripting:** Использование циклов `forEach` для глубокой валидации массивов данных и типов (Schema Validation).
* **Reporting:** Генерация кастомных HTML-дашбордов с глубокой аналитикой через htmlextra.
* **CI/CD Ready:** Полная автономность коллекции для запуска в пайплайнах.
* **Design-First approach support:** Фреймворк адаптирован для работы со спецификациями OpenAPI `SPECS`. Это позволяет проводить Contract Testing на соответствие эталонной схеме данных.
* **BDD подход (Gherkin):** Сценарии написаны как исполняемые спецификации (`Given / When / Then`), что делает их прозрачными для бизнеса и готовыми к миграции на Cucumber/SpecFlow.
* **Mocking Service:** Использование Postman Mock Server для симуляции сложных логистических сценариев.



### 🛠 Tech Stack
<h6>Проект представляет собой автономный **API Automation Framework**, построенный на базе следующего стека:</h6>
* **Postman** — среда разработки автотестов, тест-дизайна и валидации контрактов.
* **JavaScript ** — написание динамических скриптов, pre-request сценариев, кастомных ассертов и цепочек авторизации (Chaining).
* **Newman CLI** — консольный раннер для запуска коллекций в изолированном окружении [postman-tests.yml].
* **GitHub Actions** — CI/CD пайплайн для автоматического запуска регрессионного тестирования при пушах [postman-tests.yml, postman-tests.yml].













