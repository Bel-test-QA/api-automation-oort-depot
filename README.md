
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
├── .github/workflows/                       # CI/CD (GitHub Actions)
│   └── postman-tests.yml                    # Сценарий автоматического запуска тестов в GitHub Actions
├── collections/                             # Экспортированные коллекции Postman
│   └── ultimate_api.postman_collection.json
├── environments/                            # Файлы окружений Postman
│   └── qa_postman_environment.json
├── specifications/                          # BDD-сценарии (Gherkin)
│   ├── crud.feature                         # СRUD тесты (User Stories: US006-US013)
│   ├── integration.feature                  # Тесты взаимодействия модулей (User Stories: US-014)
│   └── end-to-end.feature                   # Сквозные бизнес-сценарии (User Stories: US-015)
├── docs/                                    # Сопроводительная документация
│   ├── qa-audit-insights.md                 # Аналитический аудит API (Security, OWASP Top 10)
│   ├── bug-reports.md                       # Логи багов Jira со скриншотами
│   ├── performance-testing.md               # ВЫДЕЛЕННЫЙ БЛОК: нагрузочное тестирование
│   └── index.html                           # Интерактивный Newman Summary report (GitHub Pages)
├── scripts/                                 # Папка исполняемых скриптов и примеров кода
│   ├── stress-test.ps1                      # [Windows] Скрипт параллельного запуска 10 визуальных окон
│   ├── stress-test.sh                       # [macOS/Linux] Скрипт параллельного запуска 10 фоновых потоков
│   └── postman-js-framework/                # Примеры чистого JavaScript-кода (Chai.js) для код-ревью
│       ├── crud-and-contracts.js            # Тесты CRUD-операций и контрактных проверок
│       ├── integration-and-e2e.js           # Интеграционные сценарии и сквозные бизнес-тесты
│       ├── security-owasp-audit.js          # Тестирование безопасности (BOLA, SQLi, OWASP Top 10)
│       ├── network-transport-checks.js      # Проверки сетевого и транспортного уровней
│       └── performance-and-ratelimits.js    # Проверка лимитов, нагрузочное и стресс-тестирование
├── .gitignore                               # Список файлов и папок, скрытых от отправки на GitHub 
├── package.json                             # Конфигурация Node.js и скрипты запуска всего фреймворка
└── README.md                                # Главный путеводитель по проекту

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
  
---

## 🛸 Quick Start & User Guide
<h6>Выберите наиболее удобный для вас способ ознакомления с проектом в зависимости от вашей роли и доступного времени.</h6>

### 🌐 Быстрый просмотр (без установки Git)
<h6>Подходит для рекрутеров и менеджеров.</h6>

**Интерактивная документация:** Чтобы изучить структуру запросов прямо в браузере.
* Перейти в публичное рабочее пространство [Postman Public Workspace](https://www.postman.com/bel-test-qa-1996072/api-automation-framework-security-audit-stress-logic-oort-depot)
* Открыть [Postman Web Documentation](https://documenter.getpostman.com/view/51804164/2sBXwsNAZ7)

> [!IMPORTANT]
> **Эталонный отчет о тестировании (GitHub Pages):**
> 
> Так как публичная тестовая песочница (тестовый стенд) периодически обновляется сторонними пользователями, статические тестовые данные имеют свойство устаревать, что может приводить к ложноположительным результатам (False Positive):
   * [Открыть интерактивный 🗲 HTML-отчет Newman](https://bel-test-qa.github.io/api-automation-oort-depot/).
   * [Ознакомиться с экспертными выводами 🗲 QA Audit: Summary & Critical Insights](./docs/qa-audit-insights.md).
   
---

### 🐙 Полное клонирование проекта (через Git)
<h6>Подходит для технических специалистов и QA-команды</h6>

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/Bel-test-QA/api-automation-oort-depot.git
   cd api-automation-oort-depot
   ```
2. **Установите [Node.js](https://nodejs.org/en) v18+**, если она еще не установлена на вашем ПК.
3. **Установите Newman** (консольный раннер Postman) и репортер для красивых отчетов:
   ```bash
   npm install -g newman
   npm install -g newman-reporter-htmlextra
   ```

4. **Запустите тесты одной командой:**

   * **Обычный HTML-отчет (через htmlextra)**
     ```bash
     npm run test
     ```
     *После окончания прогона в корне проекта появится папка `newman/` с локальным HTML-отчетом.*
     
      *Полная команда:*
    ```bash
    newman run collections/ultimate_api.postman_collection.json -e environments/qa_postman_environment.json -r cli,htmlextra`
    ```
  
   * **Продвинутый отчет Allure Report**
     Для этого у вас на ПК должен быть установлен Allure CLI (`brew install allure` на Mac или `scoop install allure` на Win).
     Запустите сбор результатов, а затем откройте отчет:
     ```bash
     npm run test:allure
     npm run allure:open
     ```
     В браузере автоматически откроется интерактивный Allure-отчет.


---

### 🔄 Запуск через CI/CD в 1 клик
<h6>Подходит для DevOps и Automation QA</h6>

1. Перейдите на вкладку **Actions** в верхней панели этого репозитория.
2. В левом меню выберите рабочий процесс **Automated Postman Tests**.
3. Нажмите на появившуюся справа кнопку **Run workflow** 🟢 (выберите ветку `main` и подтвердите запуск).
4. Пайплайн развернет виртуальную машину на Ubuntu, установит зависимости и выполнит команду Newman.

**После завершения прогона в самом низу страницы запуска в секции **Artifacts** будут доступны для скачивания два архива со свежими отчетами:**
* `postman-html-report` — интерактивный HTML-отчет (htmlextra).
* `allure-report` — продвинутый отчет Allure Report с графиками и аналитикой.

---

##  Дополнительные материалы проекта

Чтобы не загромождать кодовую базу, важная аналитическая и тестовая документация вынесена в отдельные файлы:
* 🕵️‍♂️ [QA Audit: Summary & Critical Insights](./docs/qa-audit-insights.md) — критический анализ архитектуры API, обнаруженные узкие места и рекомендации по улучшению безопасности.
* 🐛 [Jira Bug Reports](./docs/bug-reports.md) — симуляция баг-трекера Jira. Содержит подробные карточки дефектов (Steps to Reproduce, Expected/Actual), найденных в ходе автоматизации, со скриншотами.
* 📐 [BDD Сценарии (Gherkin)](./specifications) — примеры тест-дизайна для CRUD (позитивные/негативные кейсы) и Integration/E2E цепочек, на основе которых писались скрипты в Postman.









