import { LitElement, html } from "lit"

class PokeApp extends LitElement {
    render() {
        return html`
        <main style="display: block">
            <p class="title">Aventura en la región de Sinnoh</p>
            <p class="subtitle is-2">Por YardasDev</p>
        </main>
        `
    }
}
customElements.define("poke-app", PokeApp)
