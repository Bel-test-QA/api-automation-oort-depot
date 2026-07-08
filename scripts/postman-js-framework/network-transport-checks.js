// ----------------------------------------------------------
// [Блок]: Network & Transport Layer Check (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Network & Transport Layer Check (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: starships (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: starships (test)
// ----------------------------------------------------------
pm.collectionVariables.clear(); 


// ----------------------------------------------------------
// [Блок]: 301_Получить список всех звездолетов (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});


// ----------------------------------------------------------
// [Блок]: 301_Получить список доступных звездолетов (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Создать новый звездолет (test)
// ----------------------------------------------------------

pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});



// ----------------------------------------------------------
// [Блок]: 201_Создать новый звездолет (test)
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


pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 301_Получить информацию о звездолете (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Получить информацию о текущей загрузке звездолета (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Обновить данные звездолета (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});


// ----------------------------------------------------------
// [Блок]: 301_Обновить данные звездолета (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: 301_Изменить статус звездолета (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 301_Изменить статус звездолета (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Получить список всех грузов на складе (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Получить список всех грузов (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
 
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Добавить новый груз на склад (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 201_Добавить новый груз на склад (test)
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

pm.test("Сохраняем ID созданного груза в переменную newCargoId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newCargoId", String(responseJson.id));
});

pm.test("Сохраняем Name созданного груза в переменную newCargoName", function () {
    pm.expect(responseJson.name).to.exist;
    pm.environment.set("newCargoName", String(responseJson.name));
});

// ----------------------------------------------------------
// [Блок]: 301_Обновить данные груза (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Получить историю погрузок (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: 301_Создать новую погрузку (test)
// ----------------------------------------------------------
pm.test("Отказ в обслуживании по незащищенному HTTP", function () {
    pm.expect(pm.response.code).to.not.equal(200);
});

pm.test("Проверка на редирект или ошибку безопасности", function () {
    const secureCodes = [301, 302, 307, 308, 403, 400];
    pm.expect(secureCodes).to.include(pm.response.code);
    
    if ([301, 302, 307, 308].includes(pm.response.code)) {
        pm.expect(pm.response.headers.get("Location")).to.include("https://");
    }
});

// ----------------------------------------------------------
// [Блок]: Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});

pm.environment.unset("newCargoId");



// ----------------------------------------------------------
// [Блок]: Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});



pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});

pm.environment.unset("newShipId");

