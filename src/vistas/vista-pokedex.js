import { html } from "lit"
import { ComponenteBase } from "./componentes/componente-base"

class VistaPokédex extends ComponenteBase {
    render() {
        return html`
            <p class="title">Pokédex</p>
        `
    }
}
customElements.define("vista-pokedex", VistaPokédex)
