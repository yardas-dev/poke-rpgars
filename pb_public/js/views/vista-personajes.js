import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { cargar } from "../lib/pocketbase.js"
import { ComponenteBase } from "../components/componente-base.js"
import "../components/ficha-personaje.js"

export class VistaPersonajes extends ComponenteBase {
    static get properties() {
        return {
            personajes: { type: Array }
        }
    }

    constructor() {
        super()
        this.personajes = []
    }

    async connectedCallback() {
        super.connectedCallback()
        this.personajes = await this._traerPersonajes()
    }

    async _traerPersonajes() {
        const pb = cargar()
        const personajes = await pb.collection("personajes").getFullList()
        const naturalezas = await pb.collection("naturalezas").getFullList()
        const rangos = await pb.collection("rangos").getFullList()

        personajes.forEach(personaje => {
            personaje.icono = this._obtenerRutaArchivo(personaje, "icono")
            personaje.naturaleza = naturalezas.find(
                naturaleza => naturaleza.id === personaje.naturaleza
            )
            personaje.rango = rangos.find(rango => rango.id === personaje.rango)
            personaje.rango.icono = this._obtenerRutaArchivo(
                personaje.rango, "icono"
            )
        })

        return personajes
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
