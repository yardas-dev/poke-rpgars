import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "../components/componente-base.js"
import "./cabecera-personaje.js"
import "./caja-visualizacion-rango.js"

class FichaPersonaje extends ComponenteBase {
    static get properties() {
        return {
            personaje: { type: Object },
        }
    }

    constructor() {
        super()
        this.personaje = {}
    }

    render() {
        return html`
            <div class="card">
                <cabecera-personaje
                    .registro=${this.personaje}
                ></cabecera-personaje>

                <div class="card-content">
                    <caja-visualizacion-rango
                        .registro=${this.personaje.rango}
                    ></caja-visualizacion-rango>

                    <p>Contenido en desarrollo...</p>
                </div>
            </div>
        `
    }
}
customElements.define("ficha-personaje", FichaPersonaje)
