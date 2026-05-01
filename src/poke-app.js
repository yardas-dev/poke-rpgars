import { html } from "lit"
import { Routes } from "@lit-labs/router"

import { ComponenteBase } from "./componentes/componente-base"
import "./barra-navegacion"
import "./vista-personajes"
import "./vista-equipos"
import "./vistas/vista-combates"
import "./vista-encuentros"
import "./vista-pokedex"

class PokéApp extends ComponenteBase {
    constructor() {
        super()
        this._rutas = new Routes(this, [
            { path: "/", render: () => html`<vista-personajes></vista-personajes>` },
            { path: "/equipos", render: () => html`<vista-equipos></vista-equipos>` },
            { path: "/combates", render: () => html`<vista-combates></vista-combates>` },
            { path: "/encuentros", render: () => html`<vista-encuentros></vista-encuentros>` },
            { path: "/pokedex", render: () => html`<vista-pokedex></vista-pokedex>` },
        ])
    }

    connectedCallback() {
        super.connectedCallback()
        this._rutas.goto(window.location.pathname)
        this.addEventListener("navegar", (ev) => {
            const ruta = ev.detail.nombre
            history.pushState({}, '', ruta)
            this._rutas.goto(ruta)
        })
    }

    render() {
        return html`
            <barra-navegacion></barra-navegacion>

            <main class="section">
                ${this._rutas.outlet()}
            </main>
        `
    }
}
customElements.define("poke-app", PokéApp)
