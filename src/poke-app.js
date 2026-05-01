import { html } from "lit"
import { Routes } from "@lit-labs/router"

import { ComponenteBase } from "./componentes/componente-base"
import "./componentes/barra-navegacion"

import "./vistas/vista-personajes"
import "./vistas/vista-equipos"
import "./vistas/vista-combates"
import "./vistas/vista-encuentros"
import "./vistas/vista-pokedex"

class PokéApp extends ComponenteBase {
    static get properties() {
        return {
            rutaActual: { type: String }
        }
    }

    constructor() {
        super()
        this._rutas = new Routes(this, [
            { path: "/", render: () => html`<vista-personajes></vista-personajes>` },
            { path: "/equipos", render: () => html`<vista-equipos></vista-equipos>` },
            { path: "/combates", render: () => html`<vista-combates></vista-combates>` },
            { path: "/encuentros", render: () => html`<vista-encuentros></vista-encuentros>` },
            { path: "/pokedex", render: () => html`<vista-pokedex></vista-pokedex>` },
        ])
        this.rutaActual = window.location.pathname
    }

    connectedCallback() {
        super.connectedCallback()
        this._rutas.goto(window.location.pathname)
        this.addEventListener("navegar", (ev) => {
            const ruta = ev.detail.nombre
            this.rutaActual = ruta
            history.pushState({}, "", ruta)
            this._rutas.goto(ruta)
        })
    }

    render() {
        return html`
            <barra-navegacion .rutaActual=${this.rutaActual}></barra-navegacion>

            <main class="section">
                ${this._rutas.outlet()}
            </main>
        `
    }
}
customElements.define("poke-app", PokéApp)
