import { LitElement } from "lit"
import PocketBase from "pocketbase"

const ORIGEN = "http://localhost:8090"

export class ComponenteBase extends LitElement {
    createRenderRoot() {
        return this
    }

    static get properties() {
        return {
            naturalezas: { type: Array },
            rangos: { type: Array },
            personajes: { type: Array },
        }
    }

    constructor() {
        super()
        this.naturalezas = []
        this.rangos = []
        this.personajes = []
    }

    async connectedCallback() {
        super.connectedCallback()

        const pb = new PocketBase(ORIGEN)

        const naturalezas = await pb.collection("naturalezas").getFullList()
        const rangos = await pb.collection("rangos").getFullList()
        const personajes = await pb.collection("personajes").getFullList()

        this.naturalezas = naturalezas.map(naturaleza => ({
            id: naturaleza.id,
            nombre: naturaleza.nombre,
        }))
        this.rangos = rangos.map(rango => ({
            id: rango.id,
            icono: this._obtenerRutaArchivo(rango, "icono"),
            nombre: rango.nombre,
        }))
        this.personajes = personajes.map(personaje => ({
            icono: this._obtenerRutaArchivo(personaje, "icono"),
            nombre: personaje.nombre,
            sexo: personaje.sexo,
            rol: personaje.rol,
            ocupacion: personaje.ocupacion,
            concepto: personaje.concepto,
            edad: personaje.edad,
            naturaleza: this.naturalezas.find(
                naturaleza => naturaleza.id === personaje.naturaleza
            ),
            rango: this.rangos.find(rango => rango.id === personaje.rango),
        }))
    }

    _capturarEnlace(ev) {
        if (ev.defaultPrevented) return
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return

        const ruta = ev.currentTarget.getAttribute("href")
        if (! ruta) return

        const url = new URL(ruta, window.location.origin)
        if (url.origin !== window.location.origin) return

        ev.preventDefault()
        this.dispatchEvent(new CustomEvent("navegar", {
            detail: { nombre: url.pathname },
            bubbles: true,
            composed: true
        }))
    }

    _normalizarMayús(texto) {
        return texto[0].toUpperCase() + texto.slice(1)
    }

    _obtenerRutaArchivo(registro, propiedad) {
        return `${ORIGEN}/api/files/` +
            `${registro.collectionId}/` +
            `${registro.id}/` +
            registro[propiedad]
    }
}
