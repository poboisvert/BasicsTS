"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (res) {
    //
    var todo = res.data; // Use the interface
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    // Injection
    LogTodo(id, title, completed);
});
var LogTodo = function (id, title, completed) {
    console.log("CALLBACK: This is " + id + " with " + title + " and " + completed);
};
