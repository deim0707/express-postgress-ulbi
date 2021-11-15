//здесь конфигурируем базу данных
// при помощи poll будем управлять БД

const Pool = require('pg').Pool;
// с помощью этого инстанса делаем запросы к БД
const pool = new Pool({
    user: "dmitrijparsin", // из под какого пользователя подключаемся к БД
    password: "root", // пароль указанный при установке СУБД
    host: "localhost",
    port: 5432, // обычно такой порт по умолчанию при установке СУБД (?)
    database: "node_postgres", // название базы данных
});

module.exports = pool; 