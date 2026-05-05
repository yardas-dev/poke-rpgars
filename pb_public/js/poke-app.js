import { LitElement, html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"

class PokeApp extends LitElement {
  render() {
        return html`
            <p>Barra de navegación</p>
            <p>Vista actual</p>
        `
    }
}
customElements.define("poke-app", PokeApp)
