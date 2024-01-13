import "@mercuryworkshop/alicejs";
function App() {
    this.counter = 0;
    return (h("div", null,
        h("button", { "on:click": () => this.counter++ },
            " Click me! ",
            h(, null),
            "button>",
            h("p", null, this.counter),
            h(, null),
            "div> ); } window.addEventListener(\"load\", () => ",
            document.body.appendChild(h(App, null)),
            "; });")));
}
//# sourceMappingURL=main.js.map