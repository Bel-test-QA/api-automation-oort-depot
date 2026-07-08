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

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('name');
    pm.expect(responseJson).to.have.property('capacity');
    pm.expect(responseJson).to.have.property('range');
    pm.expect(responseJson).to.have.property('volume');
    pm.expect(responseJson).to.have.property('status');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.capacity).to.be.a('number');
    pm.expect(responseJson.range).to.be.a('number');
    pm.expect(responseJson.volume).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
});

pm.test("Поле 'name' валидно и соответствует отправленному значению", function () {
    pm.expect(responseJson.name.length).to.be.at.least(2);
    pm.expect(responseJson.name.length).to.be.at.most(100);

    if (requestBody.name !== undefined) {
        pm.expect(responseJson.name).to.equal(requestBody.name);
    }
});

pm.test("Поля 'capacity', 'range' и 'volume' валидны", function () {
    pm.expect(responseJson.capacity).to.be.at.least(0);
    pm.expect(responseJson.capacity).to.be.at.most(1000000);

    pm.expect(responseJson.range).to.be.at.least(0);
    pm.expect(responseJson.range).to.be.at.most(10000000);

    pm.expect(responseJson.volume).to.be.at.least(0);
    pm.expect(responseJson.volume).to.be.at.most(1000000);

    if (requestBody.capacity !== undefined) {
        pm.expect(responseJson.capacity).to.equal(requestBody.capacity);
    }

    if (requestBody.range !== undefined) {
        pm.expect(responseJson.range).to.equal(requestBody.range);
    }

    if (requestBody.volume !== undefined) {
        pm.expect(responseJson.volume).to.equal(requestBody.volume);
    }
});

pm.test("Ответ содержит уникальный ID", function () {
    pm.expect(responseJson.id).to.exist;
    pm.expect(responseJson.id).to.be.greaterThan(0);
});

pm.test("Поле 'status' валидно", function () {
    const validStatuses = ["available", "maintenance", "in_flight", "loading"];
    pm.expect(validStatuses).to.include(responseJson.status);

    if (requestBody.status !== undefined) {
        pm.expect(responseJson.status).to.equal(requestBody.status);
    }
});

pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.collectionVariables.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 422|200_VULN_WAF(SQL Injection, SQLi)_Получить список всех грузов на складе_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Validation Error", function () {
    pm.response.to.have.status(422);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});



var schema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": ["string", "number"] 
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});

// ----------------------------------------------------------
// [Блок]: 422|200_VULN_WAF(SQL Injection, SQLi)_Получить информацию о звездолете_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Validation Error", function () {
    pm.response.to.have.status(422);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

var schema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": ["string", "number"] 
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});

// ----------------------------------------------------------
// [Блок]: 422|200_VULN_WAF(SQL Injection, SQLi)_Получить информацию о текущей загрузке звездолета (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Validation Error", function () {
    pm.response.to.have.status(422);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});



var schema = {
    "type": "object",
    "properties": {
        "items": {
            "type": "array",
            "items": {
                "type": ["string", "number"] 
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});




// ----------------------------------------------------------
// [Блок]: 204_Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 204_Удалить звездолет (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newShipId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});



// ----------------------------------------------------------
// [Блок]: Создать новый звездолет_User_A (test)
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

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('name');
    pm.expect(responseJson).to.have.property('capacity');
    pm.expect(responseJson).to.have.property('range');
    pm.expect(responseJson).to.have.property('volume');
    pm.expect(responseJson).to.have.property('status');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.capacity).to.be.a('number');
    pm.expect(responseJson.range).to.be.a('number');
    pm.expect(responseJson.volume).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
});

pm.test("Поле 'name' валидно и соответствует отправленному значению", function () {
    pm.expect(responseJson.name.length).to.be.at.least(2);
    pm.expect(responseJson.name.length).to.be.at.most(100);

    if (requestBody.name !== undefined) {
        pm.expect(responseJson.name).to.equal(requestBody.name);
    }
});

pm.test("Поля 'capacity', 'range' и 'volume' валидны", function () {
    pm.expect(responseJson.capacity).to.be.at.least(0);
    pm.expect(responseJson.capacity).to.be.at.most(1000000);

    pm.expect(responseJson.range).to.be.at.least(0);
    pm.expect(responseJson.range).to.be.at.most(10000000);

    pm.expect(responseJson.volume).to.be.at.least(0);
    pm.expect(responseJson.volume).to.be.at.most(1000000);

    if (requestBody.capacity !== undefined) {
        pm.expect(responseJson.capacity).to.equal(requestBody.capacity);
    }

    if (requestBody.range !== undefined) {
        pm.expect(responseJson.range).to.equal(requestBody.range);
    }

    if (requestBody.volume !== undefined) {
        pm.expect(responseJson.volume).to.equal(requestBody.volume);
    }
});

pm.test("Ответ содержит уникальный ID", function () {
    pm.expect(responseJson.id).to.exist;
    pm.expect(responseJson.id).to.be.greaterThan(0);
});

pm.test("Поле 'status' валидно", function () {
    const validStatuses = ["available", "maintenance", "in_flight", "loading"];
    pm.expect(validStatuses).to.include(responseJson.status);

    if (requestBody.status !== undefined) {
        pm.expect(responseJson.status).to.equal(requestBody.status);
    }
});

pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: Изменить статус звездолета_User_B (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Изменить статус звездолета_User_B (test)
// ----------------------------------------------------------
pm.test("Security: BOLA Update - Юзер Б не должен иметь права менять данные Юзера А", function () {
    if (pm.response.code === 200) {
        pm.expect.fail("УЯЗВИМОСТЬ: Юзер Б успешно модифицировал чужой корабль!");
    } else {
        pm.expect(pm.response.code).to.be.oneOf([403, 404]);
    }
});


// ----------------------------------------------------------
// [Блок]: Удалить звездолет_User_B (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет_User_B (test)
// ----------------------------------------------------------
pm.test("Security: BOLA Check - Юзер Б не должен иметь доступа к объекту Юзера А", function () {
   
    if (pm.response.code === 200 || pm.response.code === 204) {
        pm.expect.fail("КРИТИЧЕСКАЯ УЯЗВИМОСТЬ: BOLA! Объект удален чужим токеном.");
    } else {
        pm.expect(pm.response.code).to.be.oneOf([403, 404]);
    }
});

pm.environment.unset("newShipId");

// ----------------------------------------------------------
// [Блок]: Добавить новый груз на склад_User_A (test)
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

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('name');
    pm.expect(responseJson).to.have.property('quantity');
    pm.expect(responseJson).to.have.property('weight');
    pm.expect(responseJson).to.have.property('volume');
    

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.quantity).to.be.a('number');
    pm.expect(responseJson.weight).to.be.a('number');
    pm.expect(responseJson.volume).to.be.a('number');
});

pm.test("Поле 'name' валидно и соответствует отправленному значению", function () {
    pm.expect(responseJson.name.length).to.be.at.least(2);
    pm.expect(responseJson.name.length).to.be.at.most(100);

    if (requestBody.name !== undefined) {
        pm.expect(responseJson.name).to.equal(requestBody.name);
    }
});

pm.test("Поля 'quantity', 'weight' и 'volume' валидны", function () {
    pm.expect(responseJson.quantity).to.be.at.least(0);
    pm.expect(responseJson.quantity).to.be.at.most(1000000);

    pm.expect(responseJson.weight).to.be.at.least(0);
    pm.expect(responseJson.weight).to.be.at.most(1000);

    pm.expect(responseJson.volume).to.be.at.least(0);
    pm.expect(responseJson.volume).to.be.at.most(1000);
    
    if (requestBody.quantity !== undefined) {
        pm.expect(responseJson.quantity).to.equal(requestBody.quantity);
    }

    if (requestBody.weight !== undefined) {
        pm.expect(responseJson.weight).to.equal(requestBody.weight);
    }

    if (requestBody.volume !== undefined) {
        pm.expect(responseJson.volume).to.equal(requestBody.volume);
    }
});

pm.test("Ответ содержит уникальный ID", function () {
    pm.expect(responseJson.id).to.exist;
    pm.expect(responseJson.id).to.be.greaterThan(0);
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
// [Блок]: Обновить данные груза_User_B (test)
// ----------------------------------------------------------
pm.test("Security: BOLA Update - Юзер Б не должен иметь права менять данные Юзера А", function () {
    if (pm.response.code === 200) {
        pm.expect.fail("УЯЗВИМОСТЬ: Юзер Б успешно модифицировал чужой груз!");
    } else {
        pm.expect(pm.response.code).to.be.oneOf([403, 404]);
    }
});


// ----------------------------------------------------------
// [Блок]: Удалить груз_User_B (test)
// ----------------------------------------------------------

pm.test("Security: BOLA Check - Юзер Б не должен иметь доступа к объекту Юзера А", function () {
   
    if (pm.response.code === 200 || pm.response.code === 204) {
        pm.expect.fail("КРИТИЧЕСКАЯ УЯЗВИМОСТЬ: BOLA! Объект удален чужим токеном.");
    } else {
        pm.expect(pm.response.code).to.be.oneOf([403, 404]);
    }
});
pm.environment.unset("newCargoId");

// ----------------------------------------------------------
// [Блок]: Broken Authentication Check (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Broken Authentication Check (test)
// ----------------------------------------------------------
pm.test("Status code is 401 Unauthorized", function () {
    pm.response.to.have.status(401);
});

pm.test("Тело ответа не пустое", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.be.withBody; 
    pm.response.to.be.json;     
});


pm.test("Response body contains 'Not authenticated'", function () {
    pm.expect(pm.response.text()).to.include("Not authenticated");
});

pm.test("Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});

// ----------------------------------------------------------
// [Блок]: 401_Создать новый звездолет_No Auth (test)
// ----------------------------------------------------------


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

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('name');
    pm.expect(responseJson).to.have.property('capacity');
    pm.expect(responseJson).to.have.property('range');
    pm.expect(responseJson).to.have.property('volume');
    pm.expect(responseJson).to.have.property('status');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.name).to.be.a('string');
    pm.expect(responseJson.capacity).to.be.a('number');
    pm.expect(responseJson.range).to.be.a('number');
    pm.expect(responseJson.volume).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
});

pm.test("Поле 'name' валидно и соответствует отправленному значению", function () {
    pm.expect(responseJson.name.length).to.be.at.least(2);
    pm.expect(responseJson.name.length).to.be.at.most(100);

    if (requestBody.name !== undefined) {
        pm.expect(responseJson.name).to.equal(requestBody.name);
    }
});

pm.test("Поля 'capacity', 'range' и 'volume' валидны", function () {
    pm.expect(responseJson.capacity).to.be.at.least(0);
    pm.expect(responseJson.capacity).to.be.at.most(1000000);

    pm.expect(responseJson.range).to.be.at.least(0);
    pm.expect(responseJson.range).to.be.at.most(10000000);

    pm.expect(responseJson.volume).to.be.at.least(0);
    pm.expect(responseJson.volume).to.be.at.most(1000000);

    if (requestBody.capacity !== undefined) {
        pm.expect(responseJson.capacity).to.equal(requestBody.capacity);
    }

    if (requestBody.range !== undefined) {
        pm.expect(responseJson.range).to.equal(requestBody.range);
    }

    if (requestBody.volume !== undefined) {
        pm.expect(responseJson.volume).to.equal(requestBody.volume);
    }
});

pm.test("Ответ содержит уникальный ID", function () {
    pm.expect(responseJson.id).to.exist;
    pm.expect(responseJson.id).to.be.greaterThan(0);
});

pm.test("Поле 'status' валидно", function () {
    const validStatuses = ["available", "maintenance", "in_flight", "loading"];
    pm.expect(validStatuses).to.include(responseJson.status);

    if (requestBody.status !== undefined) {
        pm.expect(responseJson.status).to.equal(requestBody.status);
    }
});

pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 401_Получить информацию о звездолете (test)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: 401_Изменить статус звездолета (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Изменить статус звездолета (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Добавить новый груз на склад (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}


pm.test("Сохраняем ID созданного груза в переменную newCargoId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newCargoId", String(responseJson.id));
});

pm.test("Сохраняем Name созданного груза в переменную newCargoName", function () {
    pm.expect(responseJson.name).to.exist;
    pm.environment.set("newCargoName", String(responseJson.name));
});

// ----------------------------------------------------------
// [Блок]: 401_Получить список всех грузов (test)
// ----------------------------------------------------------
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Тело ответа не пустое", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.be.withBody; 
    pm.response.to.be.json;     
});

pm.test("Ответ содержит массив объектов", function () {
    pm.expect(pm.response.json()).to.be.an('array');
    });

pm.test("Каждый объект в массиве содержит необходимые поля", function () {
    const jsonData = pm.response.json();

    function allObjectsHaveRequiredFields(array) {
        return array.every(obj => {
            return obj.hasOwnProperty("name") &&
                obj.hasOwnProperty("quantity") &&
                obj.hasOwnProperty("weight") &&
                obj.hasOwnProperty("volume") &&
                obj.hasOwnProperty("id");
        });
    }

    pm.expect(jsonData).to.satisfy(allObjectsHaveRequiredFields);
});


pm.test("Data Types: Каждый груз в массиве имеет корректные типы данных", function () {
    const jsonData = pm.response.json();

    jsonData.forEach((cargo, index) => {
        pm.expect(cargo.id, `Ошибка в грузе №${index} (ID)`).to.be.a("number");
        pm.expect(cargo.name, `Ошибка в грузе №${index} (Name)`).to.be.a("string");
        pm.expect(cargo.quantity, `Ошибка в грузе №${index} (quantity)`).to.be.a("number");
        pm.expect(cargo.weight, `Ошибка в грузе №${index} (weight)`).to.be.a("number");
        pm.expect(cargo.volume, `Ошибка в грузе №${index} (volume)`).to.be.a("number");
    });
});

pm.test("Параметры skip и limit корректны", function () {
    var skip = pm.request.url.query.get("skip");
    var limit = pm.request.url.query.get("limit");
    
    pm.expect(skip).to.eql("0");
    pm.expect(limit).to.eql("100");
});

pm.test("Количество возвращенных элементов <= 100", function () {
    var jsonData = pm.response.json();

    pm.expect(jsonData.length).to.be.at.most(100);
});

// ----------------------------------------------------------
// [Блок]: 401_Обновить данные груза (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Создать новую погрузку (test)
// ----------------------------------------------------------
const responseJson = pm.response.json();
let requestBody = {};

try {
    requestBody = JSON.parse(pm.variables.replaceIn(pm.request.body.raw || '{}'));
} catch (e) {
    requestBody = {};
}


pm.test("Сохраняем ID созданной погрузки в переменную newShipmentId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.enviroment.set("newShipmentId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 401_Получить историю погрузок (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Изменить статус погрузки (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: 401_Изменить статус погрузки (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Отменить погрузку (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Удалить груз (test)
// ----------------------------------------------------------
pm.environment.unset("newCargoId");

// ----------------------------------------------------------
// [Блок]: 401_Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 401_Удалить звездолет (test)
// ----------------------------------------------------------
pm.environment.unset("newShipId");

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

pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipId", String(responseJson.id));
});

pm.test("Security: Mass Assignment - запрещенные поля проигнорированы сервером", function () {
    const jsonData = pm.response.json();
    pm.response.to.have.status(201);
    
    pm.expect(jsonData).to.not.have.property("is_admin");
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

pm.test("Сохраняем ID созданного груза в переменную newCargoId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newCargoId", String(responseJson.id));
});

pm.test("Security: Mass Assignment - запрещенные поля проигнорированы сервером", function () {
    const jsonData = pm.response.json();
    pm.response.to.have.status(201);
    
    pm.expect(jsonData).to.not.have.property("is_admin");
    });

// ----------------------------------------------------------
// [Блок]: Обновить данные звездолета (test)
// ----------------------------------------------------------

pm.test("Security: Mass Assignment - запрещенные поля проигнорированы сервером", function () {
    const jsonData = pm.response.json();
    
    pm.expect(jsonData).to.not.have.property("is_admin");
    
    if (jsonData.is_admin !== undefined) {
        pm.expect(jsonData.is_admin).to.not.be.true;
    }
});


// ----------------------------------------------------------
// [Блок]: Обновить данные звездолета (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: Обновить данные груза (test)
// ----------------------------------------------------------


pm.test("Security: Mass Assignment - запрещенные поля проигнорированы сервером", function () {
    const jsonData = pm.response.json();
    
    pm.expect(jsonData).to.not.have.property("role");
    
    if (jsonData.is_admin !== undefined) {
        pm.expect(jsonData.role).not.to.eql("admin");
    }
});


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
// [Блок]: Verbose Errors Check (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Verbose Errors Check (test)
// ----------------------------------------------------------
pm.test("Status code is 400, 404 or 422", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 404, 422]);
});

pm.test("Security: Отсутствует 500 ошибка (Server Error)", function () {
    pm.response.to.not.have.status(500);
});

pm.test("Security: Сервер не выдал системных путей (C:\\, node_modules)", function () {
    const body = pm.response.text();
    pm.expect(body).to.not.include("C:\\");
    pm.expect(body).to.not.include("node_modules");
    pm.expect(body).to.not.include("stack trace");
});


// ----------------------------------------------------------
// [Блок]: Получить список всех звездолетов (test)
// ----------------------------------------------------------
pm.test("Security: Сервер ответил корректным кодом ошибки (400, 404 или 422)", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 404, 422]);
});

pm.test("Security: Сервер не выдал системных путей (C:\\, node_modules)", function () {
    const body = pm.response.text();
    pm.expect(body).to.not.include("C:\\");
    pm.expect(body).to.not.include("node_modules");
    pm.expect(body).to.not.include("stack trace");
});


// ----------------------------------------------------------
// [Блок]: Получить список доступных звездолетов (test)
// ----------------------------------------------------------
pm.test("Security: Сервер ответил корректным кодом ошибки (400, 404 или 422)", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 404, 422]);
});

pm.test("Security: Сервер не выдал системных путей (C:\\, node_modules)", function () {
    const body = pm.response.text();
    pm.expect(body).to.not.include("C:\\");
    pm.expect(body).to.not.include("node_modules");
    pm.expect(body).to.not.include("stack trace");
});


// ----------------------------------------------------------
// [Блок]: Получить список всех грузов (test)
// ----------------------------------------------------------
pm.test("Security: Сервер ответил корректным кодом ошибки (400, 404 или 422)", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 404, 422]);
});

pm.test("Security: Сервер не выдал системных путей (C:\\, node_modules)", function () {
    const body = pm.response.text();
    pm.expect(body).to.not.include("C:\\");
    pm.expect(body).to.not.include("node_modules");
    pm.expect(body).to.not.include("stack trace");
});


// ----------------------------------------------------------
// [Блок]: Получить список всех грузов на складе (test)
// ----------------------------------------------------------
pm.test("Security: Сервер ответил корректным кодом ошибки (400, 404 или 422)", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 404, 422]);
});

pm.test("Security: Сервер не выдал системных путей (C:\\, node_modules)", function () {
    const body = pm.response.text();
    pm.expect(body).to.not.include("C:\\");
    pm.expect(body).to.not.include("node_modules");
    pm.expect(body).to.not.include("stack trace");
});


