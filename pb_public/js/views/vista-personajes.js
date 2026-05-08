import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { base } from "../lib/base.js"
import { ComponenteBase } from "../components/componente-base.js"
import "../components/ficha-personaje.js"

export class VistaPersonajes extends ComponenteBase {
    static get properties() {
        return {
            personajes: { type: Array },
        }
    }

    constructor() {
        super()
        this.personajes = []
    }

    connectedCallback() {
        super.connectedCallback()
        base.addEventListener("acabar", this.ejectutarAlAcabar)
    }

    disconnectedCallback() {
        base.removeEventListener("acabar", this.ejectutarAlAcabar)
        super.disconnectedCallback()
    }

    ejectutarAlAcabar = () => {
        this.personajes = base.personajes
    }

    render() {
        return html`
            <p class="title">
                Personajes
            </p>

            <div class="columns">
                ${
                    this.personajes.filter(
                        personaje => personaje.rol === "jugador"
                    ).map(
                        personaje => html`
                            <div class="column">
                                <ficha-personaje
                                    .personaje=${personaje}
                                ></ficha-personaje>
                            </div>
                        `
                    )
                }
            </div>
        `
    }
}
customElements.define("vista-personajes", VistaPersonajes)
