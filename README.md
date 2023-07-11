<h1>Clean architecture with Node.js and Express.js</h1>

<h3>Inspiration</h3>

<p>This project's main purpose is to show how to seperate the layers of backend in order to develop a clean architecture. The project is still in WIP and if you have some ideas to make it cool, you are welcome to <a href='https://github.com/zayniddindev/clean-architecture/fork'>fork</a> and  <a href='https://github.com/zayniddindev/clean-architecture/pulls'>open</a> a new PR!</p>

<h3>Structure</h3>

```lua
src ---- |
        common --- |
                 ds.js - Common Data Source (MySQL, MongoDB)
                 event.js - Event Emitter used throughout the project
                 model.js - Base model class

        config --- |
                 index.js - Env variables

        user   --- |
                 application - Handlers (business logic goes here);
                 domain - Domain entities (models, exceptions, types, events);
                 infra - Infrastructure (presentation, persistence)
```

<h3>How to run?</h3>

```bash
$ yarn install
```

```bash
$ yarn start
```
