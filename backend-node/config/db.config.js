module.exports = {
    HOST : 'localhost',
    USER: 'root',
    PASSWORD : 'Naman@393',
    DB:'loginwala',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}