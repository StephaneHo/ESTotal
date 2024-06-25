class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    // NOT HERE
    /*  const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = "Click me";
    this.appendChild(tooltipIcon); */
  }

  connectedCallback() {
    const tooltipIcon = document.createElement("span");
    tooltipIcon.textContent = "Click me";
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = "this is the tooltip content";
    this.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.removeChild(this._tooltipContainer);
  }
}
customElements.define("matmut-tooltip", ToolTip);
