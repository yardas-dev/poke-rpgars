import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "../components/componente-base.js"
import "./cabecera-personaje.js"
import "./caja-informativa-rango.js"
import "./caja-informativa.js"

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
                    <div class="columns is-multiline is-desktop">
                        <div class="column is-half-desktop">
                            <caja-informativa-rango
                                .registro=${this.personaje.rango}
                            ></caja-informativa-rango>
                        </div>

                        <div class="column is-half-desktop">
                            <caja-informativa
                                titulo="Salud"
                                texto="
                                    ${
                                        this.personaje.saludActual
                                    }/${
                                        this.personaje.saludMax
                                    }
                                "
                            ></caja-informativa>
                        </div>

                        <div class="column is-half-desktop">
                            <caja-informativa
                                titulo="Confianza"
                                texto="
                                    ${
                                        this.personaje.confianzaActual
                                    }/${
                                        this.personaje.naturaleza.confianza_max
                                    }
                                "
                            ></caja-informativa>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("ficha-personaje", FichaPersonaje)
