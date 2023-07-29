---
layout: layouts/base.html
title: Essential Express Js Packages and what they do
description: Express Js with batteries included for REST API development.
date: 2023-07-28
href: https://kashaan-m.github.io/blog/run-python-script-from-inside-nodejs.html
image: https://i.imgur.com/0iPY7je.png
tags: ['post']
---

<h1 style="font-family:Verdana,sans-serif">{{title}}</h1>

Express Js is a minimalist and highly customizable web server. In this post we are going to discuss some packages for REST API development with Express.

<br>

### cors

```js
npm i cors
```

Browsers strictly enforce the same-origin policy. This is a security mechanism. But sometimes when we have our backend and frontend on separate servers(or different ports) then this same-origin policy prevents our backend and frontend from communicating with each other.

In this scenario, **cors** allows us to specify how cross-origin resource sharing can be accomplished between our frontend and backend.

<br>

### dotenv

```js
npm i dotenv
```

This is a well known package. This makes it easier to specify environment variables. App Developers usually store their app secrets such as API keys, Database connection details, session secrets and other secrets in a `.env` file. This package populates the `process.env` object with the environment variables specified by the developer.

<br>

### helmet

```js
npm i helmet
```

Making your app secure for the web is hard. This package helps you setup request headers with pretty good configuration right out of the box.

<br>

### express-async-errors

```js
npm i express-async-errors
```

This package helps you with catching asynchronous errors and handling exceptions.By using this package, you don't have to repeatedly catch every exception in each controller function. Instead, you can `require` this package in your server.js/app.js file and this package will forward the error/exception to the error-handling middlewares which you setup in your server.js/app.js file.

<br>

### express-session

```js
npm i express-session
```

This package is used for creating sessions. It creates and serves an encoded cookie to the user with only the session id stored on the cookie. The cookie is configured to be `http-only` cookie by default and hence cannot be accessed with JavaScript on the client side. Any information we want to store on the cookie gets stored on the server.

By default this package uses the _memoryStore_ for storing data.It means that the session data is stored in the server memory.This is not ideal for production and hence we need to configure this package to use our database for storing session data.

<br>

Many packages are available for this purpose.For example, for postgreSQL we can use **connect-pg-simple** or **connect-session-sequelize**.

<br>

### Passport Js

```js
npm i passport
```

This package is used for User Authentication and Authorization. It works hand in hand with express-session and makes it easier to retrieve session data for a user.With this package we can write session data as well.

This package requires a _strategy_ to be defined for User Authentication/Authorization purposes.

There are various strategies already available on **npm** for example, username/password, Sign in With Google, Sign in with Facebook etc. All we need to do is install the package for the required strategy. For example, for the username/password strategy we need to install the `passport-local` package. We can customize the business logic for this as well.

<br>

### Joi

```js
npm i joi
```

This package is used for validation. With Joi we define a schema and validate the user's input against that schema. We can also use another validation package alongside Joi; For example the `validator` package.

Validation helps us protect our business logic from malicious inputs.It also protects against unwanted database lookups.

<br>

### mocha && chai

```js
npm i mocha chai
```

These packages are used for unit-testing purposes.

<br>

<br>

### Express File Upload

```js
npm i express-fileupload
```

This package is used for uploading files to the server.

<br>

### xss-clean

```js
npm i xss-clean
```

This is an express middleware which escapes JavaScript in `req.body`, `req.params`, `req.query` and thus preventing possible Cross-Site Scripting attacks from malicious user(s).

<br>

### bcryptjs

```js
npm i bcryptjs
```

This package makes encrypting users' passwords super easy.It also contains methods for comparing encrypted passwords.

<br>

### nodemon

This package is used for continuously running our express server during development

<br>

## Some other packages and tools

<br>

These packages are database-specific.

For mongodb, developers usually use the `mongoose` ODM package and the `mongo-sanitize` package (or similar for sanitizing user input(s)).

For postgreSQL, developers usually use `pg` along with an ORM such as `sequelize` , prisma etc.

**Note:** In case of using SQL database, it is necessary to sanitize user input.ORMs are generally good at sanitization.For example, `sequelize` escapes user-provided data for us and uses [parameterized queries](`https://node-postgres.com/features/queries#Parameterized%20query) which prevents SQL injection attacks(in most cases).

We can validate the user-provided data as an additional guard against SQL injection attacks.

For sending emails we can use `sib-api-v3-sdk` package.

Testing Alternative: `Postman` desktop software

<br>

<hr>

<br>

These are the essential packages needed to build a REST API with Express Js.

Thanks for reading. What other packages are you using ? Please share them so we can benefit :)
