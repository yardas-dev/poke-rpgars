import { html } from "lit"
import { ComponenteBase } from "../componentes/componente-base"

class VistaEquipos extends ComponenteBase {
    render() {
        return html`
            <p class="title">Equipos</p>
        `
    }
}
customElements.define("vista-equipos", VistaEquipos)
