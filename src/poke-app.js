import { html } from "lit"
import { ComponenteBase } from "./componente-base"

class PokeApp extends ComponenteBase {
    render() {
        return html`
        <main>
            <p class="title">Aventura en la región de Sinnoh</p>
            <p class="subtitle is-2">Por YardasDev</p>
        </main>
        `
    }
}
customElements.define("poke-app", PokeApp)
