import { LitElement, html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./components/componente-base.js"

import "./components/barra-navegacion.js"

import "./views/vista-personajes.js"
import "./views/vista-equipos.js"
import "./views/vista-combates.js"
import "./views/vista-encuentros.js"
import "./views/vista-pokedex.js"

class PokeApp extends ComponenteBase {
    render() {
        const vistas = [
            {
                ruta: "/",
                contenido: html`<vista-personajes></vista-personajes>`
            },
            {
                ruta: "/equipos",
                contenido: html`<vista-equipos></vista-equipos>`
            },
            {
                ruta: "/combates",
                contenido: html`<vista-combates></vista-combates>`
            },
            {
                ruta: "/encuentros",
                contenido: html`<vista-encuentros></vista-encuentros>`
            },
            {
                ruta: "/pokedex",
                contenido: html`<vista-pokedex></vista-pokedex>`
            },
        ]

        const vistaActual = vistas.find(
            vista => vista.ruta === window.location.pathname
        )

        return html`
            <barra-navegacion></barra-navegacion>

            <main class="section">
                ${vistaActual.contenido}
            </main>
        `
    }
}
customElements.define("poke-app", PokeApp)
