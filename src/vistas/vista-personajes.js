import { html } from "lit"
import { ComponenteBase } from "../componentes/componente-base"

class VistaPersonajes extends ComponenteBase {
    render() {
        return html`
            <p class="title">Personajes</p>
        `
    }
}
customElements.define("vista-personajes", VistaPersonajes)
