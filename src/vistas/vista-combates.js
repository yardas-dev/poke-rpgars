import { html } from "lit"
import { ComponenteBase } from "./componente-base"

class VistaCombates extends ComponenteBase {
    render() {
        return html`
            <p class="title">Combates</p>
        `
    }
}
customElements.define("vista-combates", VistaCombates)
