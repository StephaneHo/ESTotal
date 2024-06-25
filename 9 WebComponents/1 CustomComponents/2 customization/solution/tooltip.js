class ToolTip extends HTMLElement {
  constructor() {
    super();
    // NOT HERE
    /*  const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = "Click me";
    this.appendChild(tooltipIcon); */
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = "Click me";
    this.appendChild(tooltipIcon);
  }
}
customElements.define("matmut-tooltip", ToolTip);
