﻿function post (){
    console.log("イベント発火")
    const form = document.getElementById("form")
    form.addEventListener("submit",(e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const XHR = new XMLHttpRequest();
        XHR.open("POST","posts", true);
        XHR.responseType = "json";
        XHR.send(formData)
    })
  };

window.addEventListener('turbo:load', post);