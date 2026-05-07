import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./componente-base.js"

export class BarraNavegacion extends ComponenteBase {
    obtenerClaseItem(ruta) {
        return ruta === window.location.pathname ? "is-tab is-active" : ""
    }

    render() {
        const items = [
            { ruta: "/", texto: "Personajes" },
            { ruta: "/equipos", texto: "Equipos" },
            { ruta: "/combates", texto: "Combates" },
            { ruta: "/encuentros", texto: "Encuentros" },
            { ruta: "/pokedex", texto: "Pokédex" },
        ]

        return html`
            <nav class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        Imagen aún no disponible
                    </a>

                    <a role="button" class="navbar-burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-start">
                        ${
                            items.map(
                                item => html`
                                    <a
                                        class="navbar-item ${this.obtenerClaseItem(item.ruta)}"
                                        href=${item.ruta}
                                    >
                                        ${item.texto}
                                    </a>
                                `
                            )
                        }
                </div>
            </nav>
        `
    }
}
customElements.define("barra-navegacion", BarraNavegacion)
