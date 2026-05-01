import { LitElement } from "lit"

export class ComponenteBase extends LitElement {
    createRenderRoot() {
        return this
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
}
