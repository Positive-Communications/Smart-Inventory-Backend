module.exports =  {
    "type": "postgres",
    "host": "rogue.db.elephantsql.com",
    "port": 5432,
    "username": "lwdvzxpk",
    "password": "f7Y2R1wDbDzgyQXXgctMwU7olSaU2l2H",
    "database": "lwdvzxpk",
    "logging": false,
    "entities": [
        "dist/entity/**/*.js"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscriber/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}