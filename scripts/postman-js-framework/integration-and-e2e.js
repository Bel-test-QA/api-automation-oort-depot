// ----------------------------------------------------------
// [Блок]: Integration & End-to-End (E2E) (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Integration & End-to-End (E2E) (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: 200_Получить список доступных звездолетов (test)
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
            return obj.hasOwnProperty("id") &&
                obj.hasOwnProperty("name") &&
                obj.hasOwnProperty("capacity") &&
                obj.hasOwnProperty("range") &&
                obj.hasOwnProperty("status");
        });
    }

    pm.expect(jsonData).to.satisfy(allObjectsHaveRequiredFields);
});


pm.test("Data Types: Каждый корабль в массиве имеет корректные типы данных", function () {
    const jsonData = pm.response.json();

    jsonData.forEach((ship, index) => {
        pm.expect(ship.id, `Ошибка в корабле №${index} (ID)`).to.be.a("number");
        pm.expect(ship.name, `Ошибка в корабле №${index} (Name)`).to.be.a("string");
        pm.expect(ship.capacity, `Ошибка в корабле №${index} (Capacity)`).to.be.a("number");
        pm.expect(ship.range, `Ошибка в корабле №${index} (Range)`).to.be.a("number");
        pm.expect(ship.status, `Ошибка в корабле №${index} (Status)`).to.be.a("string");
    });
});

pm.test("Все поля 'Status' имеют значение 'Available'"), function () {
    pm.expect(response.status).to.eql('available');
    };

pm.test("Сохраняем ID первого доступного звездолета", function () {
    var responseJson = pm.response.json();                
    pm.expect(responseJson).to.be.an('array');
    pm.expect(responseJson.length).to.be.above(0);

    var firstShipId = responseJson[0].id;
    pm.environment.set("availableShipId", String(firstShipId));
});

// ----------------------------------------------------------
// [Блок]: 200_Получить список всех грузов (test)
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

pm.test("Сохраняем ID первого груза из списка", function () {
    var responseJson = pm.response.json();                
    pm.expect(responseJson).to.be.an('array');
    pm.expect(responseJson.length).to.be.above(0);

    var firstCargoId = responseJson[0].id;
    pm.environment.set("firstCargoId", String(firstCargoId));
});

// ----------------------------------------------------------
// [Блок]: 201_Создать новую погрузку (test)
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
    pm.expect(responseJson).to.have.property('starship_id');
    pm.expect(responseJson).to.have.property('cargo_id');
    pm.expect(responseJson).to.have.property('quantity');
    pm.expect(responseJson).to.have.property('status');
    pm.expect(responseJson).to.have.property('created_at');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.starship_id).to.be.a('number');
    pm.expect(responseJson.cargo_id).to.be.a('number');
    pm.expect(responseJson.quantity).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
    pm.expect(responseJson.created_at).to.be.a('string');
});

pm.test("Статус погрузки соответствует значению 'Идет погрузка'", function () {
pm.expect(responseJson.status).to.eql("loading");
});

pm.test("Сохраняем ID созданной погрузки в переменную newShipmentId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipmentId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 200_Получить информацию о текущей загрузке звездолета (test)
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

pm.test("Ответ содержит объект", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an("object");
});

pm.test("Тело ответа содержит обязательные поля верного типа данных", function () {
    const responseJson = pm.response.json();

    pm.expect(responseJson).to.have.property("starship_name");
    pm.expect(responseJson).to.have.property("total_capacity");
    pm.expect(responseJson).to.have.property("total_volume");
    pm.expect(responseJson).to.have.property("current_weight");
    pm.expect(responseJson).to.have.property("current_volume");
    pm.expect(responseJson).to.have.property("available_weight");
    pm.expect(responseJson).to.have.property("available_volume");
    pm.expect(responseJson).to.have.property("loaded_cargo");

    pm.expect(responseJson.starship_name).to.be.a("string");
    pm.expect(responseJson.total_capacity).to.be.a("number");
    pm.expect(responseJson.total_volume).to.be.a("number");
    pm.expect(responseJson.current_weight).to.be.a("number");
    pm.expect(responseJson.current_volume).to.be.a("number");
    pm.expect(responseJson.available_weight).to.be.a("number");
    pm.expect(responseJson.available_volume).to.be.a("number");
    pm.expect(responseJson.loaded_cargo).to.be.an("array");
});


// ----------------------------------------------------------
// [Блок]: 200_Отменить погрузку (test)
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
pm.test("Тело ответа не пустое", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.be.withBody; 
    pm.response.to.be.json;     
});


pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('starship_id');
    pm.expect(responseJson).to.have.property('cargo_id');
    pm.expect(responseJson).to.have.property('quantity');
    pm.expect(responseJson).to.have.property('status');
    pm.expect(responseJson).to.have.property('created_at');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.starship_id).to.be.a('number');
    pm.expect(responseJson.cargo_id).to.be.a('number');
    pm.expect(responseJson.quantity).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
    pm.expect(responseJson.created_at).to.be.a('string');
});

pm.test("Статус погрузки соответствует значению 'Погрузка отменена'", function () {
pm.expect(responseJson.status).to.eql("cancelled");
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
    pm.collectionVariables.set("newCargoId", String(responseJson.id));
});

pm.test("Сохраняем Name созданного груза в переменную newCargoName", function () {
    pm.expect(responseJson.name).to.exist;
    pm.collectionVariables.set("newCargoName", String(responseJson.name));
});

// ----------------------------------------------------------
// [Блок]: 201_Создать новую погрузку (test)
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
    pm.expect(responseJson).to.have.property('starship_id');
    pm.expect(responseJson).to.have.property('cargo_id');
    pm.expect(responseJson).to.have.property('quantity');
    pm.expect(responseJson).to.have.property('status');
    pm.expect(responseJson).to.have.property('created_at');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.starship_id).to.be.a('number');
    pm.expect(responseJson.cargo_id).to.be.a('number');
    pm.expect(responseJson.quantity).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
    pm.expect(responseJson.created_at).to.be.a('string');
});

pm.test("Статус погрузки соответствует значению 'Идет погрузка'", function () {
pm.expect(responseJson.status).to.eql("loading");
});

pm.test("Сохраняем ID созданной погрузки в переменную newShipmentId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.collectionVariables.set("newShipmentId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 200_Получить историю погрузок (test)
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

pm.test("Каждый объект в массиве содержит ключи key_0 и key_1", function () {
    pm.response.json().forEach(function (item) {
     pm.expect(item).to.have.property('key_0');
     pm.expect(item).to.have.property('key_1');
     });
     });


// ----------------------------------------------------------
// [Блок]: 200_Получить информацию о текущей загрузке звездолета (test)
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

pm.test("Ответ содержит объект", function () {
    const responseJson = pm.response.json();
    pm.expect(responseJson).to.be.an("object");
});

pm.test("Тело ответа содержит обязательные поля верного типа данных", function () {
    const responseJson = pm.response.json();

    pm.expect(responseJson).to.have.property("starship_name");
    pm.expect(responseJson).to.have.property("total_capacity");
    pm.expect(responseJson).to.have.property("total_volume");
    pm.expect(responseJson).to.have.property("current_weight");
    pm.expect(responseJson).to.have.property("current_volume");
    pm.expect(responseJson).to.have.property("available_weight");
    pm.expect(responseJson).to.have.property("available_volume");
    pm.expect(responseJson).to.have.property("loaded_cargo");

    pm.expect(responseJson.starship_name).to.be.a("string");
    pm.expect(responseJson.total_capacity).to.be.a("number");
    pm.expect(responseJson.total_volume).to.be.a("number");
    pm.expect(responseJson.current_weight).to.be.a("number");
    pm.expect(responseJson.current_volume).to.be.a("number");
    pm.expect(responseJson.available_weight).to.be.a("number");
    pm.expect(responseJson.available_volume).to.be.a("number");
    pm.expect(responseJson.loaded_cargo).to.be.an("array");
});

// ----------------------------------------------------------
// [Блок]: 200_Отменить погрузку (test)
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
pm.test("Тело ответа не пустое", function () {
    pm.expect(pm.response.text().length).to.be.above(0);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.be.withBody; 
    pm.response.to.be.json;     
});


pm.test("Ответ содержит обязательные поля корректных типов", function () {
    pm.expect(responseJson).to.be.an('object');
    pm.expect(responseJson).to.have.property('id');
    pm.expect(responseJson).to.have.property('starship_id');
    pm.expect(responseJson).to.have.property('cargo_id');
    pm.expect(responseJson).to.have.property('quantity');
    pm.expect(responseJson).to.have.property('status');
    pm.expect(responseJson).to.have.property('created_at');

    pm.expect(responseJson.id).to.be.a('number');
    pm.expect(responseJson.starship_id).to.be.a('number');
    pm.expect(responseJson.cargo_id).to.be.a('number');
    pm.expect(responseJson.quantity).to.be.a('number');
    pm.expect(responseJson.status).to.be.a('string');
    pm.expect(responseJson.created_at).to.be.a('string');
});

pm.test("Статус погрузки соответствует значению 'Погрузка отменена'", function () {
pm.expect(responseJson.status).to.eql("cancelled");
});


// ----------------------------------------------------------
// [Блок]: 204_Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newCargoId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
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



