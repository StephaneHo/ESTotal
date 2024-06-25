class ToolTip extends HTMLElement {
  constructor() {
    super();
    console.log("it is working !");
  }
}
customElements.define("matmut-tooltip", ToolTip);
