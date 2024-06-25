class ToolTip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this.attachShadow({ mode: "open" });
    const template = document.getElementById("tooltip-template");
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this._tooltipText = this.getAttribute("text"); // see the name of the attribute in <matmut-tooltip>
    const tooltipIcon = this.shadowRoot.querySelector("span");
    tooltipIcon.addEventListener("mouseenter", this._showTooltip.bind(this));
    tooltipIcon.addEventListener("mouseleave", this._hideTooltip.bind(this));
    this.shadowRoot.appendChild(tooltipIcon);
    this.style.position = "relative";
  }

  _showTooltip() {
    this._tooltipContainer = document.createElement("div");
    this._tooltipContainer.textContent = this._tooltipText;
    this._tooltipContainer.style.backgroundColor = "blue";
    this._tooltipContainer.style.color = "white";
    this._tooltipContainer.style.position = "absolute";
    this._tooltipContainer.style.zIndex = 100;
    this.shadowRoot.appendChild(this._tooltipContainer);
  }

  _hideTooltip() {
    this.shadowRoot.removeChild(this._tooltipContainer);
  }
}
customElements.define("matmut-tooltip", ToolTip);
