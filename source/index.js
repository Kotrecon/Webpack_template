"use strict";

import "../styles/style.css";
//import "../styles/style.scss";

const getTodos = () => import(/* webpackChunkName: "postsAPI" */ "./api");

console.log("barrfghfghfghfgra");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  getTodos().then(({ fetchTodos }) => {
    fetchTodos().then((resp) => console.log(resp));
  });
});
