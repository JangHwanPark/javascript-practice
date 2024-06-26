const root = document.querySelector('.root');

/* create btn */
const btn_one = document.createElement("button");
const one_span = document.createElement("span");
one_span.innerText = "Hello JavaScript";
btn_one.className = "btn-one"
root.appendChild(btn_one);
btn_one.appendChild(one_span);