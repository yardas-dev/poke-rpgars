import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "../components/componente-base.js"

export class VistaPersonajes extends ComponenteBase {
    render() {
        return html`<p class="title">Personajes</p>`
    }
}
customElements.define("vista-personajes", VistaPersonajes)
