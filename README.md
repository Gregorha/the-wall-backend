# TheWall API

To run this project locally make sure you have nvm or NodeJS, postgres and run following commands:

    yarn
    yarn dev

If you wish to clean your database <strong>(this will erase your previous data)</strong> and populate with initial data, you can run:

    yarn seed

<p>

## Environment Variables

In order to run the api locally you will need to set the following properties in a .env.test file, located in projects root directory:

    SECRET=[Secret used to encrypt and decrypt sensitive data]
    EMAIL=[Email user for to be used for sending emails]
    PASSWORD=[Email password]
    EMAIL_HOST=[EMAIL SMTP HOST]
    EMAIL_PORT=[EMAIL SMTP PORT]
    PG_DATABASE=[Your local postgres database name]
    PG_USER=[Your local postgres database user]
    PG_PASS=[Your local postgres database password]

## Tests

To run test:

      yarn test

## Design pattern

Clean Architecture with the structure of the project divided between 5 layers:

 - Domain: The core of this architecture. Its the layer the define our use cases and entities. In this layer its possible to understand what the api does. 
 
 - Data: Contains all the api business logic and it only depends on the domain layer. Its the layer where we can undertand how the api handle with the domain use cases.
 
 - Infra: This layer should only depends on the data layer. Is the layer that connects with data sources. In this api is responsible to connect with postgres.

 - Presentation: This is the UI layer where is handle how the data and errors are returned from the api.
 
 - Main: This is layer the interacts with external frameworks, and puts all the other layers together, should be the only layer to depend on external frameworks.

Observation: This architecture was chosen in order to practice. For a small project like this, usually is recomended a simpler architecture.

Either Monad was used for error handling.

## Dependencies

Main dependencies:

- nodemailer
- jest
- express
- supertest
- knex

## Data Base

Postgress with knex as query builder.

## Deployment

Hosted at [Heroku](https://www.heroku.com/) on https://the-wall-tsl.herokuapp.com/api/

## Future Improvements

 - Tests: So far the project is implementing only integration tests. One of the strengths of clean architecture is the possibilty to test the code without depending on any external resource. Unit testing should be implemented in the future.
 - In memory tests: The project is using local db for integration tests, should implement in memory db in the future. This way tests would not affect local db.
 - Value objects: The project is only doing really basic and simple validation. Should implement value objects to improve validation and return more specific error messages.
 - Pagination: Messages results should have pagination options.
 - Documentation: Use sweagger to improve documentation
