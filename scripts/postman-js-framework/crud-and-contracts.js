// ----------------------------------------------------------
// [Блок]: Core CRUD & Contract Testing (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Core CRUD & Contract Testing (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Functional Positive Testing (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Functional Positive Testing (test)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: starships (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: starships (test)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: Получить список всех звездолетов (test)
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


// ----------------------------------------------------------
// [Блок]: Получить список доступных звездолетов (test)
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
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: Получить информацию о звездолете (test)
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

pm.test("ID корабля в ответе совпадает с ID в запросе", function () {
    const requestedId = pm.variables.get('newShipId');
    const responseJson = pm.response.json();
    pm.expect(parseInt(responseJson.id)).to.eql(parseInt(requestedId));

});



// ----------------------------------------------------------
// [Блок]: Получить информацию о текущей загрузке звездолета (test)
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
// [Блок]: Обновить данные звездолета (test)
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


pm.test("ID корабля в ответе совпадает с ID в запросе", function () {
    const requestedId = pm.variables.get('newShipId');
    pm.expect(parseInt(responseJson.id)).to.eql(parseInt(requestedId));
});

const putResponseData = responseJson; 
const requestStatus = pm.variables.get('myRandomStatus2');

pm.test("Значение статуса в теле запроса соответствует значению статуса в теле ответа", function () {
    pm.expect(putResponseData).to.have.property('status');
    pm.expect(putResponseData.status).to.eql(requestStatus);
});


// ----------------------------------------------------------
// [Блок]: Обновить данные звездолета (prerequest)
// ----------------------------------------------------------



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

pm.test("Ответ содержит JSON", function () {
    pm.response.to.be.withBody; 
    pm.response.to.be.json;     
});

const jsonData = pm.response.json();
const requestStatus = pm.variables.get('myRandomStatus');
pm.test("Значение статуса в теле запроса соответствует значению статуса в теле ответа", function () {
    pm.expect(jsonData).to.have.property('status');
    pm.expect(jsonData.status).to.eql(requestStatus);
});

// ----------------------------------------------------------
// [Блок]: Получить список всех грузов на складе (test)
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
// [Блок]: Получить список всех грузов (test)
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
// [Блок]: Обновить данные груза (test)
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


// ----------------------------------------------------------
// [Блок]: Получить историю погрузок (test)
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
// [Блок]: Изменить статус погрузки (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: Изменить статус погрузки (test)
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

const myResponseBody = pm.response.json();
const requestStatus = pm.variables.get('myRandomStatus3');

pm.test("Значение статуса в теле запроса соответствует значению статуса в теле ответа", function () {
    pm.expect(myResponseBody).to.have.property('status');
    pm.expect(myResponseBody.status).to.eql(requestStatus);
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
// [Блок]: Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newCargoId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
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

pm.environment.unset("newShipId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});



// ----------------------------------------------------------
// [Блок]: 401_Получить список доступных звездолетов (test)
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
// [Блок]: 422_Получить информацию о текущей загрузке звездолета_Validation Error (test)
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
// [Блок]: 422_Изменить статус звездолета_Validation Error (test)
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
                "type": ["string", "number"] // Позволяет string или integer/float
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});


// ----------------------------------------------------------
// [Блок]: 400_Создать новый звездолет_Ошибка валидации (test)
// ----------------------------------------------------------

pm.test("Status code is 400 Bad Request if name is exist  ", function () {
    pm.response.to.have.status(400);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Проверка значения JSON в ответе", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.detail).to.eql("Звездолет с таким именем уже существует");
});

// ----------------------------------------------------------
// [Блок]: 422_Создать новый звездолет_Validation Error (test)
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
// [Блок]: 404_Получить информацию о звездолете_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });



// ----------------------------------------------------------
// [Блок]: 422_Получить информацию о звездолете_Validation Error (test)
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
// [Блок]: 404_Обновить данные звездолета_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });

pm.test("Обьект отсутствует в кэше", function () {
    pm.expect(pm.response.headers.get('x-cache')).to.eql('MISS');
    pm.expect(pm.response.headers.get('x-cache-hits')).to.eql('0');
});

// ----------------------------------------------------------
// [Блок]: 400_Обновить данные звездолета_Oшибка Валидации (test)
// ----------------------------------------------------------
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body contains 'Звездолет с таким именем уже существует'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет с таким именем уже существует");
    });

// ----------------------------------------------------------
// [Блок]: 422_Обновить данные звездолета_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Not Found", function () {
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
// [Блок]: 422_Удалить звездолет_Validation Error (test)
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
// [Блок]: 404_Удалить звездолет_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });


 

// ----------------------------------------------------------
// [Блок]: 400_Удалить звездолет_Ошибка Валидации (test)
// ----------------------------------------------------------
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body contains 'Нельзя удалить звездолет в процессе погрузки или в полете'", function () {
    pm.expect(pm.response.text()).to.include("Нельзя удалить звездолет в процессе погрузки или в полете");
    });

// ----------------------------------------------------------
// [Блок]: 422_Получить список всех грузов на складе_Validation Error (test)
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
// [Блок]: 422_Отменить погрузку_Validation Error (test)
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
// [Блок]: 422_Создать новую погрузку_Validation Error (test)
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
                "type": ["string", "number"] // Позволяет string или integer/float
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});

// ----------------------------------------------------------
// [Блок]: 404_Создать новую погрузку_Ресурс/звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });

pm.test("Обьект отсутствует в кэше", function () {
    pm.expect(pm.response.headers.get('x-cache')).to.eql('MISS');
    pm.expect(pm.response.headers.get('x-cache-hits')).to.eql('0');
});

// ----------------------------------------------------------
// [Блок]: 400_Создать новую погрузку_Ошибка Валидации (test)
// ----------------------------------------------------------
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body contains 'Превышена грузоподъемность звездолета'", function () {
    pm.expect(pm.response.text()).to.include("Превышен объем грузового отсека");

});

// ----------------------------------------------------------
// [Блок]: 422_Добавить новый груз на склад_Validation Error (test)
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
                "type": ["string", "number"] // Позволяет string или integer/float
            }
        }
    }
};
pm.test("Схема ответа валидна", function () {
    pm.response.to.have.jsonSchema(schema);
});

// ----------------------------------------------------------
// [Блок]: 422_Получить список всех грузов_Validation Error (test)
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
// [Блок]: 400_Обновить данные груза_Ошибка Валидации (test)
// ----------------------------------------------------------
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body contains 'Груз с таким названием уже существует'", function () {
    pm.expect(pm.response.text()).to.include("Груз с таким названием уже существует");
    });

pm.test("Name корабля в ответе не совпадает с Name в запросе", function () {
    const requestedName = pm.variables.get('newCargoName');
    const responseJson = pm.response.json();
    pm.expect(responseJson.name).not.to.eql(requestedName);

});

// ----------------------------------------------------------
// [Блок]: 422_Обновить данные груза_Validation Error (test)
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
// [Блок]: 404_Обновить данные груза_Груз не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Груз не найден'", function () {
    pm.expect(pm.response.text()).to.include("Груз не найден");
    });


// ----------------------------------------------------------
// [Блок]: 422_Удалить груз_Validation Error (test)
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
// [Блок]: 400_Удалить груз_Ошибка Валидации (test)
// ----------------------------------------------------------
pm.test("Status code is 400 Bad Request", function () {
    pm.response.to.have.status(400);
});

pm.test("Response body contains 'Нельзя удалить груз, который используется'", function () {
    pm.expect(pm.response.text()).to.include("Нельзя удалить груз, который используется");
    });

// ----------------------------------------------------------
// [Блок]: 404_Удалить груз_Груз не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Груз не найден'", function () {
    pm.expect(pm.response.text()).to.include("Груз не найден");
    });



// ----------------------------------------------------------
// [Блок]: 422_Получить историю погрузок_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Not Found", function () {
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
// [Блок]: 422_Изменить статус погрузки_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Not Found", function () {
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
// [Блок]: CRUD Positive Testing (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: CRUD Positive Testing (test)
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



pm.test("Сохраняем ID созданного звездолета в переменную newShipId", function () {
    pm.expect(responseJson.id).to.exist;
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: Создать новый звездолет (prerequest)
// ----------------------------------------------------------




// ----------------------------------------------------------
// [Блок]: Получить информацию о звездолете (test)
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

pm.test("ID корабля в ответе совпадает с ID в запросе", function () {
    const requestedId = pm.variables.get('newShipId');
    const responseJson = pm.response.json();
    pm.expect(parseInt(responseJson.id)).to.eql(parseInt(requestedId));

});



// ----------------------------------------------------------
// [Блок]: Обновить данные звездолета (test)
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

pm.test("ID корабля в ответе совпадает с ID в запросе", function () {
    const requestedId = pm.variables.get('newShipId');
    pm.expect(parseInt(responseJson.id)).to.eql(parseInt(requestedId));
});

const putResponseData = responseJson; 
const requestStatus = pm.variables.get('myRandomStatus2');

pm.test("Значение статуса в теле запроса соответствует значению статуса в теле ответа", function () {
    pm.expect(putResponseData).to.have.property('status');
    pm.expect(putResponseData.status).to.eql(requestStatus);
});


// ----------------------------------------------------------
// [Блок]: Обновить данные звездолета (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newShipId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
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
// [Блок]: Получить список всех грузов (test)
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
// [Блок]: Обновить данные груза (test)
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


// ----------------------------------------------------------
// [Блок]: Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newCargoId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});




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
    pm.environment.set("newShipId", String(responseJson.id));
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
// [Блок]: Получить историю погрузок (test)
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
// [Блок]: Изменить статус погрузки (prerequest)
// ----------------------------------------------------------



// ----------------------------------------------------------
// [Блок]: Изменить статус погрузки (test)
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

const myResponseBody = pm.response.json();
const requestStatus = pm.variables.get('myRandomStatus3');
pm.test("Значение статуса в теле запроса соответствует значению статуса в теле ответа", function () {
    pm.expect(myResponseBody).to.have.property('status');
    pm.expect(myResponseBody.status).to.eql(requestStatus);
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
// [Блок]: Удалить звездолет (prerequest)
// ----------------------------------------------------------


// ----------------------------------------------------------
// [Блок]: Удалить звездолет (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newShipId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});



// ----------------------------------------------------------
// [Блок]: Удалить груз (test)
// ----------------------------------------------------------
pm.test("Status code is 204", function () {
    pm.response.to.have.status(204);
});

pm.environment.unset("newCargoId");

pm.test("Тело ответа не содержит данных", function () {
    pm.response.to.not.be.withBody;
});




// ----------------------------------------------------------
// [Блок]: 400_Создать новый звездолет_Ошибка валидации (test)
// ----------------------------------------------------------

pm.test("Status code is 400 Bad Request if name is exist  ", function () {
    pm.response.to.have.status(400);
});

pm.test("Ответ содержит JSON", function () {
    pm.response.to.have.body;
    pm.response.to.be.json;
});

pm.test("Проверка значения JSON в ответе", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.detail).to.eql("Звездолет с таким именем уже существует");
});

// ----------------------------------------------------------
// [Блок]: 404_Получить информацию о звездолете_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });



// ----------------------------------------------------------
// [Блок]: 404_Обновить данные звездолета_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
    });



// ----------------------------------------------------------
// [Блок]: 404_Удалить звездолет_Звездолет не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Звездолет не найден'", function () {
    pm.expect(pm.response.text()).to.include("Звездолет не найден");
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
    pm.environment.set("newShipId", String(responseJson.id));
});

// ----------------------------------------------------------
// [Блок]: 422_Обновить данные звездолета_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Not Found", function () {
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
// [Блок]: 200_Получить информацию о звездолете (test)
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

pm.test("ID корабля в ответе совпадает с ID в запросе", function () {
    const requestedId = pm.variables.get('newShipId');
    const responseJson = pm.response.json();
    pm.expect(parseInt(responseJson.id)).to.eql(parseInt(requestedId));

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
// [Блок]: 422_Добавить новый груз на склад_Validation Error (test)
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
// [Блок]: 404_Обновить данные груза_Груз не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Груз не найден'", function () {
    pm.expect(pm.response.text()).to.include("Груз не найден");
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

// ----------------------------------------------------------
// [Блок]: 404_Удалить груз_Груз не найден (test)
// ----------------------------------------------------------
pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response body contains 'Груз не найден'", function () {
    pm.expect(pm.response.text()).to.include("Груз не найден");
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
    pm.environment.set("newCargoId", String(responseJson.id));
});

pm.test("Сохраняем Name созданного груза в переменную newCargoName", function () {
    pm.expect(responseJson.name).to.exist;
    pm.environment.set("newCargoName", String(responseJson.name));
});

// ----------------------------------------------------------
// [Блок]: 422_Обновить данные груза_Validation Error (test)
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
// [Блок]: 422_Изменить статус погрузки_Validation Error (test)
// ----------------------------------------------------------
pm.test("Status code is 422 Not Found", function () {
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


