
## 💎 Project 1: API Automation Framework: Security Audit, Stress & Logic | Oort Depot

Комплексный инженерный фреймворк автотестов для системы управления складом (WMS), сфокусированный на бизнес-логике, безопасности и отказоустойчивости.

##  ☑️ Project Goal
<h6>Тестирование бизнес-логики, валидация контрактов API, проверка отказоустойчивости и поиск критических уязвимостей.</h6>

## **Interactive API Docs:** [**Postman Publish Documentation 🔹 Ultimate API Quality Gate | Oort Depot**](https://documenter.getpostman.com/view/51804164/2sBXwsNAZ7)
<h6>Просмотр коллекции в живом веб-интерфейсе Postman без импорта файлов.</h6>

![Uploading giphy.gif…](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHY2ZHhjemNhNmc5bWZtOGRwOWdsOTd0MTcwZXFicjFkbWplZnB5diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SZPSgFFbSTFEn6dTHh/giphy.gif)

## **Interactive Workspace:** [**Postman Workspace 🔹 API Automation Framework: Security Audit, Stress & Logic | Oort Depot**](https://www.postman.com/bel-test-qa-1996072/api-automation-framework-security-audit-stress-logic-oort-depot)
<h6>Просмотр и тестирование фреймворка в публичном рабочем пространстве.</h6>.

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
│   ├── bug-reports/                         # Баг-репорты Jira со скриншотами (BUG-001.md - BUG-009.md)
│       └── images/                          # Скриншоты фиксации багов (bug-001.png - bug-009.png)
│   ├── performance-testing.md               # Нагрузочное и стресс-тестирование
│   └── index.html                           # Интерактивный Newman Summary report (GitHub Pages)
├── scripts/                                 # Папка исполняемых скриптов и примеров кода
│   ├── stress-test.ps1                      # [Windows] Скрипт параллельного запуска 10 визуальных окон
│   ├── stress-test.sh                       # [macOS/Linux] Скрипт параллельного запуска 10 фоновых потоков
│   ├── producer.js                          # JS-скрипт отправки событий погрузки звездолетов в топик Apache Kafka
│   ├── consumer.js                          # JS-скрипт перехвата и валидации структуры сообщений из брокера Kafka
│   └── postman-js-framework/                # Примеры JavaScript-кода (Chai.js)
│       ├── crud-and-contracts.js            # Тесты CRUD-операций и контрактных проверок
│       ├── integration-and-e2e.js           # Интеграционные сценарии и сквозные бизнес-тесты
│       ├── security-owasp-audit.js          # Тестирование безопасности (BOLA, SQLi, OWASP Top 10)
│       ├── network-transport-checks.js      # Проверки сетевого и транспортного уровней
│       └── performance-and-ratelimits.js    # Проверка лимитов, нагрузочное и стресс-тестирование
├── .gitignore                               # Список файлов и папок, скрытых от отправки на GitHub 
├── infrastructure.yaml                      # Манифест Kubernetes Deployment для развертывания Apache Kafka, Elasticsearch и Kibana
├── Dockerfile                               # Инструкция сборки изолированного Docker-образа (Node.js/Newman)
├── job.yaml                                 # Манифест Kubernetes Job для запуска автотестов в кластере
├── package.json                             # Конфигурация Node.js и скрипты запуска всего фреймворка
└── README.md                                # Главный путеводитель по проекту

```

## 🧠 Tech Stack
<p align="left"> <img src="https://img.shields.io/badge/-Postman-282C34?style=plastic&logo=postman&logoColor=FF6C37"/> <img src="https://img.shields.io/badge/-JavaScript-282C34?style=plastic&logo=javascript&logoColor=F7DF1E"/> <img src="https://img.shields.io/badge/-NPM-282C34?style=plastic&logo=NPM&logoColor=CB3837"/> <img src="https://img.shields.io/badge/-Node.js-282C34?style=plastic&logo=nodedotjs&logoColor=5FA04E"/> <img src="https://img.shields.io/badge/-NewmanCLI-FF6C37?style=plastic&logo&color=282C34"/> <img src="https://img.shields.io/badge/-GitHubActions-282C34?style=plastic&logo=githubactions&logoColor=2088FF"/> <img src="https://img.shields.io/badge/-Docker-282C34?style=plastic&logo=docker&logoColor=2496ED"/> <img src="https://img.shields.io/badge/-Kubernetes-282C34?style=plastic&logo=kubernetes&logoColor=326CE5"/> <img src="https://img.shields.io/badge/-ApacheKafka-282C34?style=plastic&logo=apachekafka&logoColor=231F20"/> 
<img src="https://img.shields.io/badge/-Kibana-282C34?style=plastic&logo=kibana&logoColor=005571"/></p>

<h6>Проект представляет собой автономный API Automation Framework, построенный на базе следующего стека:</h6>

* **Postman** — среда разработки автотестов, тест-дизайна и валидации контрактов.
* **JavaScript** — написание скриптов автоматизации, включая подготовку данных (Pre-request) и проверку ответов (Tests/Assertions).
* **Newman CLI** — консольный раннер для запуска Postman-коллекций в CI/CD пайплайне (automated-tests.yml).
* **GitHub Actions** — CI/CD пайплайн для автоматического запуска регрессионного тестирования по ручному триггеру (`workflow_dispatch`).
* **Docker** — упаковка автотестов в контейнер `Dockerfile` для гарантированного запуска на любом компьютере или сервере без настройки окружения. 
* **Kubernetes (Minikube)** — запуск автотестов внутри локального K8s-кластера с помощью манифеста `job.yaml` для симуляции реальной микросервисной среды.
* **ELK Stack (Elasticsearch + Kibana)** — сбор и визуализация результатов. Тесты отправляют JSON-отчеты в Elasticsearch, а через Kibana настроены дашборды для удобного анализа упавших тестов.
* **Apache Kafka** — тестирование асинхронной логики. Скрипты `producer.js` и `consumer.js` имитируют отправку и получение событий о создании новой погрузки.


## ⚡️ Architecture & Features
* **Zero Hardcode Logic:** Все ID, токены и параметры генерируются динамически и передаются по цепочке (Chaining), исключение: папки с негативными тестами.
* **Performance:** Нагрузочное тестирование (Stress Testing) через параллельный запуск 10 инстансов Newman.
* **Security:** Базовые проверки безопасности по стандартам `OWASP API Security Top 10`, включая тесты на `SQL`-инъекции и уязвимости контроля доступа `BOLA`.
* **Reporting:** Генерация подробных визуальных HTML-отчетов через репортер htmlextra.
* **CI/CD Ready:** Полная автономность коллекции для запуска в пайплайнах.
* **Contract Testing:** Валидация структуры ответов бэкенда на соответствие эталонной схеме данных из спецификации OpenAPI (Swagger).
* **BDD подход (Gherkin):** Оформление тестовых сценариев по методологии `Given / When / Then` для улучшения читаемости структуры тестов.
* **Mocking Service:** Использование Postman Mock Server для имитации ответов бэкенда, чтобы изолировать тесты от ошибок валидации при динамической генерации данных.
* **Containerization (Docker & K8s):** Упаковка тестов в `Docker`-контейнер и настройка манифестов Kubernetes (`Job` и `Deployment`) для локального запуска автотестов и сопутствующих сервисов в `Minikube`.
* **ELK Integration**: Отправка результатов прогона Newman напрямую в базу данных Elasticsearch для последующей визуализации дашбордов в Kibana.
* **Async Events (Apache Kafka)**: Использование Node.js скриптов (`producer.js` / `consumer.js`) для проверки отправки и получения асинхронных сообщений о создании новой погрузки.


---

## 🛸 Quick Start

### 🌐 Быстрый просмотр (без установки Git)
**Интерактивная документация:** Чтобы изучить структуру запросов прямо в браузере.
* [Postman Public Workspace](https://www.postman.com/bel-test-qa-1996072/api-automation-framework-security-audit-stress-logic-oort-depot)
* [Postman Web Documentation](https://documenter.getpostman.com/view/51804164/2sBXwsNAZ7)


> [!IMPORTANT]
> **Эталонный отчет о тестировании (GitHub Pages):**
> 
> Так как публичная тестовая песочница (тестовый стенд) периодически обновляется сторонними пользователями, статические тестовые данные имеют свойство устаревать, что может приводить к ложноположительным результатам (False Positive):
   * [Открыть интерактивный 🔹 HTML-отчет Newman](https://bel-test-qa.github.io/api-automation-oort-depot/).
   * [Ознакомиться с экспертными выводами 🔹 QA Audit: Summary & Critical Insights](./docs/qa-audit-insights.md).
   
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
    newman run collections/ultimate_api.postman_collection.json -e environments/qa_postman_environment.json -r cli,htmlextra
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

### 🐳 Запуск в изолированном контейнере (Docker & Kubernetes)
<h6>Подходит для DevOps-инженеров и Automation QA, работающих с микросервисной архитектурой.</h6>

Фреймворк полностью контейнеризирован и готов к запуску в изолированном контуре локального кластера.

1. **Запустите ваш локальный Kubernetes-кластер:**
   ```bash
   minikube start
   ```

2. **Соберите Docker-образ со всеми тестами напрямую внутри Minikube:**
   ```bash
   minikube image build -t postman-tests:latest .
   ```
   *Docker автоматически установит легковесный дистрибутив Node.js, развернет Newman со всеми зависимостями и упакует внутрь ваши коллекции.*

3. **Разверните задачу в кластере Kubernetes одной командой:**
   ```bash
   kubectl apply -f job.yaml
   ```

4. **Посмотрите логи выполнения автотестов в реальном времени из контейнера:**
   ```bash
   kubectl logs -f job/postman-api-tests
   ```
   *После окончания прогона вы можете очистить память кластера командой `kubectl delete -f job.yaml`.*

---

### ☸️ Оркестрация в Kubernetes, Логирование & Очереди сообщений (ELK + Kafka)
<h6> Инфраструктурный контур для DevOps-инженеров и Automation QA, работающих с микросервисной архитектурой.</h6>

Автотесты и сервисы распределенной системы WMS (Elasticsearch, Kibana, Apache Kafka) упакованы в контейнеры и развернуты внутри локального кластера **Kubernetes (Minikube)**. 

Сетевое взаимодействие между тестами и базой данных логов настроено через внутренние сервисы `ClusterIP`. Вывод графических интерфейсов наружу осуществляется через порты `NodePort`.

**Инструкция по развертыванию контура:**

1. **Запуск локального кластера Kubernetes:**
   ```bash
   minikube start --memory=4096 --cpus=2
   ```

2. **Сборка Docker-образа автотестов внутри кэша кластера:**
   ```bash
   minikube image build -t postman-tests:latest .
   ```

3. **Развертывание базовой инфраструктуры логов и очередей (Kafka, ES, Kibana):**
   ```bash
   kubectl apply -f infrastructure.yaml
   ```

4. **Запуск автоматического тест-рана всей коллекции Newman:**
   ```bash
   kubectl apply -f job.yaml
   ```

5. **Мониторинг логов прогона всей коллекции в Kibana:**
   Получить локальный URL-адрес для входа в веб-интерфейс логирования:
   ```bash
   minikube service kibana-service --url
   ```
   *Перейдите по полученной ссылке в браузере, создайте индексный шаблон `postman-logs*`, выберите поле времени `@timestamp` и перейдите во вкладку **Discover** для анализа результатов тестов.*

6. **Тестирование асинхронных очередей погрузки склада в Apache Kafka:**
   * Пробросьте порт брокера наружу в первом терминале: `kubectl port-forward deployment/infrastructure-deployment 9092:9092`
   * Запустите фонового слушателя во втором терминале: `node scripts/consumer.js`
   * Отправьте симуляционное событие погрузки звездолета в третьем терминале: `node scripts/producer.js`

---

### 🔄 Запуск через CI/CD в 1 клик
<h6>Подходит для DevOps-инженеров и Automation QA</h6>

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
* 🧱 [Load & Stress Test Suite | Newman Ready](./docs/performance-testing.md) - содержит инструкцию по имитации стресс-нагрузки и проверки Rate Limiting (CLI Скрипты), а также по встроенному нагрузочному тестированию (Postman Load Testing)
* 🕷️ [Jira Bug Reports](./docs/bug-reports) — симуляция баг-трекера Jira. Содержит подробные карточки дефектов (Steps to Reproduce, Expected/Actual), найденных в ходе автоматизации, со скриншотами.
* 🥒 [BDD Сценарии (Gherkin)](./specifications) — примеры тест-дизайна для CRUD (позитивные/негативные кейсы) и Integration/E2E цепочек, на основе которых писались скрипты в Postman.









