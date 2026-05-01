import { html } from "lit"
import { ComponenteBase } from "./componente-base"

class BarraNavegación extends ComponenteBase {
    render() {
        return html`
            <nav class="navbar">
                <div class="navbar-brand">
                    <a
                        class="navbar-item"
                        href="/"
                        @click=${this._capturarEnlace}
                    >
                        Imagen aún no disponible
                    </a>

                    <a role="button" class="navbar-burger">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-menu">
                    <div class="navbar-start">
                        <a
                            class="navbar-item"
                            href="/"
                            @click=${this._capturarEnlace}
                        >
                            Personajes
                        </a>

                        <a
                            class="navbar-item"
                            href="/equipos"
                            @click=${this._capturarEnlace}
                        >
                            Equipos
                        </a>

                        <a
                            class="navbar-item"
                            href="/combates"
                            @click=${this._capturarEnlace}
                        >
                            Combates
                        </a>

                        <a
                            class="navbar-item"
                            href="/encuentros"
                            @click=${this._capturarEnlace}
                        >
                            Encuentros
                        </a>

                        <a
                            class="navbar-item"
                            href="/pokedex"
                            @click=${this._capturarEnlace}
                        >
                            Pokédex
                        </a>
                    </div>
                </div>
            </nav>
        `
    }
}
customElements.define("barra-navegacion", BarraNavegación)
