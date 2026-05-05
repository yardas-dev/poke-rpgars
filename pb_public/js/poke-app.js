import { LitElement, html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"

class PokeApp extends LitElement {
    render() {
        return html`
            <p>Barra de navegación</p>
            <p class="title">Vista actual</p>
            <p>Contenido…</p>
        `
    }
}
customElements.define("poke-app", PokeApp)
