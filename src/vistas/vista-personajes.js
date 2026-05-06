import { html } from "lit"

import { ComponenteBase } from "../componentes/componente-base"
import "../componentes/ficha-personaje"

class VistaPersonajes extends ComponenteBase {
    render() {
        return html`
            <p class="title">Personajes</p>

            <div class="columns">
                ${
                    this.personajes.filter(
                        personaje => personaje.rol === "jugador"
                    ).map(
                        personaje => html`
                            <div class="column">
                                <ficha-personaje .personaje=${personaje}></ficha-personaje>
                            </div>
                        `
                    )
                }
            </div>
        `
    }
}
customElements.define("vista-personajes", VistaPersonajes)
