import { LitElement, html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./components/componente-base.js"
import "./components/barra-navegacion.js"

class PokeApp extends ComponenteBase {
    render() {
        return html`
            <barra-navegacion></barra-navegacion>
            <p class="title">Vista actual</p>
            <p>Contenido…</p>
        `
    }
}
customElements.define("poke-app", PokeApp)
