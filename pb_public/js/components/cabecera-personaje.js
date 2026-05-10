import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "../components/componente-base.js"

class CabeceraPersonaje extends ComponenteBase {
    static get properties() {
        return {
            registro: { type: Object },
        }
    }

    constructor() {
        super()
        this.registro = {}
    }

    connectedCallback() {
        super.connectedCallback()
    }

    render() {
        return html`
            <header
                class="card-header has-background-${this.registro.color}-soft"
            >
                <figure class="image is-96x96 m-4">
                    <img
                        src=${this.registro.icono}
                        alt="Imagen no disponible"
                    />
                </figure>

                <p class="my-auto">
                    <strong class="is-size-4">
                        ${this.registro.nombre}
                    </strong>
                    <br />
                    <small>
                        ${this.registro.ocupacion}
                    </small>
                    <br />
                    <small>
                        ${this.registro.concepto}
                    </small>
                    <br />
                    <small class="has-text-${this.registro.color}-invert">
                        ${this.registro.edad} años,
                        naturaleza ${this.registro.naturaleza.nombre}
                    </small>
                </p>

                <button class="card-header-icon">
                    <span class="icon">
                        <i class="fa-solid fa-angle-down"></i>
                    </span>
                </button>
            </header>
        `
    }
}
customElements.define("cabecera-personaje", CabeceraPersonaje)
