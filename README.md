Games Workshop
----------------------------

[![Quality Gate Status](https://sonar.josdem.io/api/project_badges/measure?project=com.jos.dem.games%3Agames-workshop&metric=alert_status)](https://sonar.josdem.io/dashboard?id=com.jos.dem.games%3Agames-workshop)

This project contains some fun [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) games using [Mocha Testing Framework](https://mochajs.org/) along with [Thymeleaf](https://www.thymeleaf.org/) and having [Spring Webflux](https://docs.spring.io/spring-framework/docs/current/reference/html/web-reactive.html) as backend.

#### To run the project

```bash
gradle bootRun
```

#### To run tests

```bash
gradle test
```

#### To run tests with Jacoco and Sonarqube

```bash
gradle jacocoTestReport sonarqube test
```

#### To run JavaScript tests

```bash
cd ${PROJECT_HOME}/src/main/resources/static/js
npm install
npm test
```

In order to execute previous commands you should have installed:

- [NPM](https://www.npmjs.com/)
- [NVM](https://github.com/nvm-sh/nvm)
- [NodeJS](https://nodejs.org/en/)

#### Website

https://games.josdem.io/

#### Read this as reference

* https://josdem.io/techtalk/spring/spring_webflux_thymeleaf/
* https://josdem.io/techtalk/spring/spring_webflux_basics/
