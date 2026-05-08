import { LitElement } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"

export class ComponenteBase extends LitElement {
    createRenderRoot() {
        return this
    }

    _normalizarMayus(texto) {
        return texto[0].toUpperCase() + texto.slice(1)
    }

    _obtenerRutaArchivo(registro, propiedad) {
        return "/api/files/" +
            `${registro.collectionId}/` +
            `${registro.id}/` +
            registro[propiedad]
    }
}
