import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./componente-base.js"

class CajaInformativaRango extends ComponenteBase {
    static get properties() {
        return {
            registro: { type: Object },
        }
    }

    constructor() {
        super()
        this.registro = {}
    }

    render() {
        return html`
            <div class="box">
                <div class="media">
                    <figure class="media-left">
                        <p class="image is-48x48">
                            <img
                                src=${this.registro.icono}
                                alt="Imagen no disponible"
                            />
                        </p>
                    </figure>

                    <div class="media-content my-auto">
                        <p class="title is-5">
                            Rango
                        </p>

                        <p class="subtitle is-6">
                            ${this._normalizarMayus(this.registro.nombre)}
                        </p>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define("caja-informativa-rango", CajaInformativaRango)
