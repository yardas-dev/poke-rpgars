import { html } from "lit"
import { ComponenteBase } from "./componente-base"

class FichaPersonaje extends ComponenteBase {
    static get properties() {
        return {
            personaje: { type: Object },
            color: { type: String },
        }
    }

    constructor() {
        super()
        this.color = ""
    }

    connectedCallback() {
        super.connectedCallback()
        this.color = this.personaje.sexo === "mujer" ? "danger" : "info"
    }

    render() {
        return html`
            <div class="card">
                <header class="card-header has-background-${this.color}-soft">
                    <figure class="image is-96x96 m-4">
                        <img
                            src=${this.personaje.icono}
                            alt="Imagen no disponible"
                        />
                    </figure>

                    <p class="my-auto">
                        <strong class="is-size-4">
                            ${this.personaje.nombre}
                        </strong>
                        <br />
                        <small>
                            ${this.personaje.ocupacion}
                        </small>
                        <br />
                        <small>
                            ${this.personaje.concepto}
                        </small>
                        <br />
                        <small class="has-text-${this.color}-invert">
                            ${this.personaje.edad} años, naturaleza ${this.personaje.naturaleza?.nombre}
                        </small>
                    </p>

                    <button class="card-header-icon">
                        <span class="icon">
                            <i class="fa-solid fa-angle-down"></i>
                        </span>
                    </button>
                </header>

                <div class="card-content">
                    <div class="box">
                        <div class="media">
                            <figure class="media-left">
                                <p class="image is-48x48">
                                    <img
                                        src=${this.personaje.rango?.icono}
                                        alt="Imagen no disponible"
                                    />
                                </p>
                            </figure>
                            <div class="media-content my-auto">
                                <p class="title is-5">
                                    Rango
                                </p>
                                <p class="subtitle is-6">
                                    ${
                                        this._normalizarMayús(
                                            this.personaje.rango?.nombre
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                       
                    </div>
                    <p>Contenido en desarrollo...</p>
                </div>
            </div>
        `
    }
}
customElements.define("ficha-personaje", FichaPersonaje)
