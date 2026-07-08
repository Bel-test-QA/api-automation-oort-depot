// ----------------------------------------------------------
// [Блок]: Rate Limiting Check (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Rate Limiting Check (test)
// ----------------------------------------------------------
pm.test("Status code is 429 (Too Many Requests)", function () {
    pm.response.to.have.status(429);
});



// ----------------------------------------------------------
// [Блок]: 429_Создать новый звездолет (test)
// ----------------------------------------------------------
let responseJson;
try {
    responseJson = pm.response.json();
} catch (e) {
    responseJson = {};
}

// Читаем счётчик из Окружения
if (!pm.environment.has("iteration_counter")) {
    pm.environment.set("iteration_counter", 1);
}

let currentIter = parseInt(pm.environment.get("iteration_counter"));

// Тест на статус (динамический)
if (currentIter <= 20) {
    pm.test(`Итерация ${currentIter}: Успешное создание`, function () {
        pm.expect(pm.response.code).to.be.oneOf([200, 201]);
        
        // Сохраняем ID только при успешном создании в Окружение
        pm.expect(responseJson.id).to.exist;
        pm.environment.set("newShipId", String(responseJson.id));
    });
} else {
    pm.test(`Итерация ${currentIter}: Ожидаемый Rate Limit (429)`, function () {
        pm.response.to.have.status(429);
    });
}




// ----------------------------------------------------------
// [Блок]: 429_Создать новый звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 429_Удалить звездолет (test)
// ----------------------------------------------------------
let currentIter = parseInt(pm.environment.get("iteration_counter"));
console.log(`<<< Итерация №${currentIter} | DEL запрос`);

if (currentIter <= 20) {
    pm.test(`Итерация ${currentIter}: Удаление (204)`, function () {
        pm.response.to.have.status(204);
    });
    pm.environment.set("newShipId", ""); // Просто зануляем, не стирая ячейку
} else {
    pm.test(`Итерация ${currentIter}: Ожидаем 429 на удаление`, function () {
        pm.response.to.have.status(429);
    });
}

if (currentIter < 30) {
    pm.environment.set("iteration_counter", currentIter + 1);
    postman.setNextRequest("429_Создать новый звездолет"); 
} else {
    pm.environment.set("iteration_counter", 1);
    console.log("Цикл Rate Limit завершен. Идем дальше.");
    postman.setNextRequest(null); 
}


// ----------------------------------------------------------
// [Блок]: 429_Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Performance Testing (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Performance Testing (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Создать новый звездолет (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}

pm.test("Status code is 201 Created", function () {
    pm.response.to.have.status(201);
});

pm.test("Время ответа меньше 3 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.enviroment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: Изменить статус звездолета (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Изменить статус звездолета (test)
// ----------------------------------------------------------
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Тело ответа не пустое", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});


pm.test("Время ответа меньше 2 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// ----------------------------------------------------------
// [Блок]: Добавить новый груз на склад (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}

pm.test("Status code is 201 Created", function () {
    pm.response.to.have.status(201);
});

pm.test("Время ответа меньше 3 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.test("Сохраняем ID созданного груза в переменную newCargoId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.enviroment.set("newCargoId", String(responseJson.id));
});

pm.test("Сохраняем Name созданного груза в переменную newCargoName", function () {
    pm.expect(responseJson.name).to.exist;
    pm.environment.set("newCargoName", String(responseJson.name));
});

// ----------------------------------------------------------
// [Блок]: Создать новую погрузку (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}

pm.test("Status code is 201 Created", function () {
    pm.response.to.have.status(201);
});

pm.test("Время ответа меньше 5 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});

pm.test("Сохраняем ID созданной погрузки в переменную newShipmentId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.enviroment.set("newShipmentId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: Изменить статус погрузки (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: Изменить статус погрузки (test)
// ----------------------------------------------------------
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Время ответа меньше 5 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});


// ----------------------------------------------------------
// [Блок]: Отменить погрузку (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Время ответа меньше 5 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(5000);
});

// ----------------------------------------------------------
// [Блок]: Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.test("Время ответа меньше 3 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.enviroment.unset("newCargoId");
pm.enviroment.unset("newCargoName");



// ----------------------------------------------------------
// [Блок]: Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});


pm.test("Время ответа меньше 3 секунд", function () {
    pm.expect(pm.response.responseTime).to.be.below(3000);
});

pm.environment.unset("newShipId");

