
## 🌌 Project 1: API Automation Framework: Security Audit, Stress & Logic | Oort Depot

Продвинутый инженерный фреймворк автотестов для системы управления складом (WMS), сфокусированный на бизнес-логике, безопасности и отказоустойчивости.

##  ☑️ Project Goal
<h6>Глубокий аудит бизнес-логики, контрактных обязательств API и устойчивости системы к взлому и перегрузкам.</h6>

## **Interactive API Docs:** [🗲 **Postman Publish Documentation 🗲 Ultimate API Quality Gate | Oort Depot**](https://documenter.getpostman.com/view/51804164/2sBXwsNAZ7)
<h6>Для быстрой оценки масштаба фреймворка, архитектуры папок и живого интерфейса коллекции без импорта файлов.</h6>

![Uploading giphy.gif…](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY2ZHhjemNhNmc5bWZtOGRwOWdsOTd0MTcwZXFicjFkbWplZnB5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SZPSgFFbSTFEn6dTHh/giphy.gif)

## **Interactive Workspace:** [🗲 **Postman Workspace 🗲 API Automation Framework: Security Audit, Stress & Logic | Oort Depot**](https://www.postman.com/bel-test-qa-1996072/api-automation-framework-security-audit-stress-logic-oort-depot)
<h6>Для проведения сквозного анализа архитектуры тестов и выполнения запросов в реальном времени развернуто публичное облачное пространство.</h6>.

![Uploading giphy.gif2…](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExanVubGx4ODZnZ2ZzdzN1NXJ1ZnE4Y281cGY1M3Ztcnc5ZmJ4ZThrOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/axbvhv7X8mvOCpj5fx/giphy.gif)

---

## ⚙️ Repository Structure

```text
├── .github/workflows/          # CI/CD (GitHub Actions)
│   └── postman-tests.yml
├── collections/                # Экспортированные коллекции Postman
│   └── ultimate_api.postman_collection.json
├── environments/               # Файлы окружений Postman
│   └── qa_postman_environment.json
├── specifications/             # BDD-сценарии (Gherkin)
│   ├── crud.feature            # СRUD тесты (User Stories: US006-US013)
│   ├── integration.feature     # Тесты взаимодействия модулей (User Stories: US-014)
│   └── end-to-end.feature      # Сквозные бизнес-сценарии (User Stories: US-015)
├── docs/                       # Сопроводительная документация
│   ├── qa-audit-insights.md    # Аналитический аудит API (Security, OWASP Top 10)
│   ├── bug-reports.md          # Логи багов Jira со скриншотами
│   ├── performance-testing.md  # ВЫДЕЛЕННЫЙ БЛОК: нагрузочное тестирование
│   ├── static-reports          # Идеальные эталонные отчеты
│       ├── perfect-newman.html 
│       └── allure-report.zip
│   └── images                  # Медиа-артефакты проекта
│       ├── overview.gif  
└── README.md                   # Главный путеводитель по проекту
```

## ☄️ Tech Stack
<p align="left"> <img src="https://img.shields.io/badge/-Postman-282C34?style=plastic&logo=postman&logoColor=FF6C37"/> <img src="https://img.shields.io/badge/-JavaScript-282C34?style=plastic&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/-NPM-282C34?style=plastic&logo=NPM&logoColor=CB3837"/> <img src="https://img.shields.io/badge/-Node.js-282C34?style=plastic&logo=nodedotjs&logoColor=5FA04E"/> <img src="https://img.shields.io/badge/-NewmanCLI-FF6C37?style=plastic&logo&color=282C34"/> <img src="https://img.shields.io/badge/-GitHubActions-282C34?style=plastic&logo=githubactions&logoColor=2088FF"/></p>

<h6>Проект представляет собой автономный API Automation Framework, построенный на базе следующего стека:</h6>

* **Postman** — среда разработки автотестов, тест-дизайна и валидации контрактов.
* **JavaScript** — написание динамических скриптов, pre-request сценариев, кастомных ассертов и цепочек авторизации (Chaining).
* **Newman CLI** — консольный раннер для запуска коллекций в изолированном окружении (`postman-tests.yml`).
* **GitHub Actions** — CI/CD пайплайн для автоматического запуска регрессионного тестирования при пушах (`postman-tests.yml`).


## ⚡️ Architecture & Features
* **Zero Hardcode Logic:** Полное отсутствие статических данных. Все ID, токены и параметры генерируются динамически и передаются по цепочке (Chaining).
* **Performance:** Нагрузочное тестирование (Stress Testing) через параллельный запуск 10 инстансов Newman.
* **Security & SQLi:** Тестирование по стандартам `OWASP API Security Top 10`, включая проверку на SQL-инъекции.
* **Smart Scripting:** Использование циклов `forEach` для глубокой валидации массивов данных и типов (Schema Validation).
* **Reporting:** Генерация кастомных HTML-дашбордов с глубокой аналитикой через htmlextra.
* **CI/CD Ready:** Полная автономность коллекции для запуска в пайплайнах.
* **Design-First approach support:** Фреймворк адаптирован для работы со спецификациями OpenAPI `SPECS`. Это позволяет проводить Contract Testing на соответствие эталонной схеме данных.
* **BDD подход (Gherkin):** Сценарии написаны как исполняемые спецификации (`Given / When / Then`), что делает их прозрачными для бизнеса и готовыми к миграции на Cucumber/SpecFlow.
* **Mocking Service:** Использование Postman Mock Server для симуляции сложных логистических сценариев.










