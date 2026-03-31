import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/+esm';

// Your code
var names = ["Jai", "Prakash", "JP"];

function greet(name) {
return html`<simple-greeting name="${name}"></simple-greeting>`;
}

function greet_all(names) {
return html`${names.map(name => greet(name))}`;  // map returns array of templates
}

render(greet_all(names), document.getElementById('container'));  // render needs (template, container)

