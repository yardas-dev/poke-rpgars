import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.26.8/dist/pocketbase.es.mjs"

const pb = new PocketBase("http://localhost:8090")

class Base extends EventTarget {
    constructor() {
        super()
        this.personajes = []
    }

    async arrancar() {
        const [personajes, naturalezas, rangos] = await Promise.all([
            pb.collection("personajes").getFullList(),
            pb.collection("naturalezas").getFullList(),
            pb.collection("rangos").getFullList(),
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
        })

        this.personajes = personajes
        this.dispatchEvent(new Event("acabar"))
    }

    _obtenerRutaArchivo(registro, propiedad) {
        return "/api/files/" +
            `${registro.collectionId}/` +
            `${registro.id}/` +
            registro[propiedad]
    }
}

export const base = new Base()
