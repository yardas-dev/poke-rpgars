import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "./componente-base.js"

class CajaInformativa extends ComponenteBase {
    static get properties() {
        return {
            titulo: { type: String },
            texto: { type: String },
        }
    }

    constructor() {
        super()
        this.titulo, this.texto = ""
    }

    render() {
        return html`
            <div class="box">
                <p class="title is-5">
                    ${this.titulo}
                </p>

                <p class="subtitle is-6">
                    ${this.texto}
                </p>
            </div>
        `
    }
}
customElements.define("caja-informativa", CajaInformativa)
