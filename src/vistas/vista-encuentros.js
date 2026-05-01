import { html } from "lit"
import { ComponenteBase } from "./componentes/componente-base"

class VistaEncuentros extends ComponenteBase {
    render() {
        return html`
            <p class="title">Encuentros</p>
        `
    }
}
customElements.define("vista-encuentros", VistaEncuentros)
