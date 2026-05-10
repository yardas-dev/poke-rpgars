import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./componente-base.js"

class BarraNavegacion extends ComponenteBase {
    static properties = {
        menuEstaActivo: { type: Boolean },
    }

    obtenerClaseItem(ruta) {
        return ruta === window.location.pathname ? "is-tab is-active" : ""
    }

    alternarMenu() {
        this.menuEstaActivo = ! this.menuEstaActivo
    }

    render() {
        const items = [
            { ruta: "/", texto: "Personajes" },
            { ruta: "/equipos", texto: "Equipos" },
            { ruta: "/combates", texto: "Combates" },
            { ruta: "/encuentros", texto: "Encuentros" },
            { ruta: "/pokedex", texto: "Pokédex" },
        ]

        let claseIsActive = this.menuEstaActivo ? "is-active" : ""

        return html`
            <nav class="navbar">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <figure class="image is-48x48">
                            <img
                                src="/images/portada.jpeg"
                                alt="Imagen no disponible"
                            />
                        </figure>
                        <span>Poké RPGARS</span>
                    </a>

                    <a
                        role="button"
                        class="navbar-burger ${claseIsActive}"
                        @click=${this.alternarMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-menu ${claseIsActive}">
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
