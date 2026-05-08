import PocketBase from "https://cdn.jsdelivr.net/npm/pocketbase@0.26.8/dist/pocketbase.es.mjs"

let modulo

export function inicializar() {
    if (! modulo) {
        modulo = new PocketBase("http://localhost:8090")
    }

    return modulo
}

export function cargar() {
    if (! modulo) {
        throw new Error("El módulo PocketBase no se ha inicializado")
    }

    return modulo
}
