module.exports =  {
    "type": "postgres",
    "host": "dumbo.db.elephantsql.com",
    "port": 5432,
    "username": "lgmbmxih",
    "password": "4pY4VeACxkXo2wgglD48gARdV0vYtTZ9",
    "database": "lgmbmxih",
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