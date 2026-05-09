import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.26.8/dist/pocketbase.es.mjs"

const SALUD_BASE_HUMANO = 4

class GestorColecciones extends EventTarget {
    constructor() {
        super()
        this.personajes = []
    }

    async descargar() {
        const conexion = new PocketBase("http://localhost:8090")
        const [personajes, naturalezas, rangos] = await Promise.all([
            conexion.collection("personajes").getFullList(),
            conexion.collection("naturalezas").getFullList(),
            conexion.collection("rangos").getFullList(),
        ])

        personajes.forEach(personaje => {
            personaje.icono = this._obtenerRutaArchivo(personaje, "icono")

            personaje.naturaleza = naturalezas.find(
                naturaleza => naturaleza.id === personaje.naturaleza
            )

            personaje.rango = rangos.find(rango => rango.id === personaje.rango)
            personaje.rango.icono = this._obtenerRutaArchivo(
                personaje.rango, "icono"
            )

            personaje.saludMax = SALUD_BASE_HUMANO + personaje.vitalidad
        })

        this.personajes = personajes
        this.dispatchEvent(new Event("descargaTerminada"))
    }

    _obtenerRutaArchivo(registro, propiedad) {
        return "/api/files/" +
            `${registro.collectionId}/` +
            `${registro.id}/` +
            registro[propiedad]
    }
}

export const colecciones = new GestorColecciones()
