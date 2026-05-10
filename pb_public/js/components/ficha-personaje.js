import { html } from "https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm"
import { ComponenteBase } from "../components/componente-base.js"
import "./cabecera-personaje.js"
import "./caja-informativa-rango.js"
import "./caja-informativa.js"

class FichaPersonaje extends ComponenteBase {
    static get properties() {
        return {
            personaje: { type: Object },
        }
    }

    constructor() {
        super()
        this.personaje = {}
    }

    renderizarSeccionPrincipal() {
        return html`
            <div class="columns is-multiline is-desktop">
                <div class="column is-half-desktop">
                    <caja-informativa-rango
                        .registro=${this.personaje.rango}
                    ></caja-informativa-rango>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="texto"
                        titulo="Salud"
                        valor="
                            ${
                                this.personaje.saludActual
                            }/${
                                this.personaje.saludMax
                            }
                        "
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="texto"
                        titulo="Confianza"
                        valor="
                            ${
                                this.personaje.confianzaActual
                            }/${
                                this.personaje.confianzaMax
                            }
                        "
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="texto"
                        titulo="Voluntad"
                        valor="
                            ${
                                this.personaje.voluntadActual
                            }/${
                                this.personaje.voluntadMax
                            }
                        "
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAtributos() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-5 mb-4">
                Atributos
            </p>

            <div class="columns is-multiline is-desktop">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Fuerza"
                        valor=${this.personaje.fuerza}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Destreza"
                        valor=${this.personaje.destreza}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Vitalidad"
                        valor=${this.personaje.vitalidad}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Intuición"
                        valor=${this.personaje.intuicion}
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAtributosSociales() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-5 mb-4">
                Atributos sociales
            </p>

            <div class="columns is-multiline is-desktop">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Carisma"
                        valor=${this.personaje.carisma}
                        color="fuego"
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Dureza"
                        valor=${this.personaje.dureza}
                        color="warning"
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Dulzura"
                        valor=${this.personaje.dulzura}
                        color="danger"
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Belleza"
                        valor=${this.personaje.belleza}
                        color="info"
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Ingenio"
                        valor=${this.personaje.ingenio}
                        color="success"
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAptitudesLucha() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-5 mb-4">
                Aptitudes
            </p>

            <div class="columns is-multiline is-desktop">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Pelea"
                        valor=${this.personaje.pelea}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Lanzamiento"
                        valor=${this.personaje.lanzamiento}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Evasión"
                        valor=${this.personaje.evasion}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Armas"
                        valor=${this.personaje.armas}
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAptitudesSupervivencia() {
        return html`
            <div class="columns is-multiline is-desktop mt-6">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Alerta"
                        valor=${this.personaje.alerta}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Atletismo"
                        valor=${this.personaje.atletismo}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Forraje"
                        valor=${this.personaje.forraje}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Sigilo"
                        valor=${this.personaje.sigilo}
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAptitudesSocial() {
        return html`
            <div class="columns is-multiline is-desktop mt-6">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Atractivo"
                        valor=${this.personaje.atractivo}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Etiqueta"
                        valor=${this.personaje.etiqueta}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Empatía"
                        valor=${this.personaje.empatia}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Intimidar"
                        valor=${this.personaje.intimidar}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Actuar"
                        valor=${this.personaje.actuar}
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionAptitudesSaber() {
        return html`
            <div class="columns is-multiline is-desktop mt-6">
                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Fabricar"
                        valor=${this.personaje.fabricar}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Conocimiento"
                        valor=${this.personaje.conocimiento}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Medicina"
                        valor=${this.personaje.medicina}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Ciencia"
                        valor=${this.personaje.ciencia}
                    ></caja-informativa>
                </div>

                <div class="column is-half-desktop">
                    <caja-informativa
                        tipo="puntos"
                        titulo="Minería"
                        valor=${this.personaje.mineria}
                    ></caja-informativa>
                </div>
            </div>
        `
    }

    renderizarSeccionLogros() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-5 mb-4">
                Logros
            </p>

            <caja-informativa
                tipo="logro"
                titulo="Logro 1"
                valor=${this.personaje.logro_1}
                .estaHecho=${this.personaje.logro_1_esta_hecho}
                margenY="5"
            ></caja-informativa>

            <caja-informativa
                tipo="logro"
                titulo="Logro 2"
                valor=${this.personaje.logro_2}
                .estaHecho=${this.personaje.logro_2_esta_hecho}
                margenY="5"
            ></caja-informativa>

            <caja-informativa
                tipo="logro"
                titulo="Logro 3"
                valor=${this.personaje.logro_3}
                .estaHecho=${this.personaje.logro_3_esta_hecho}
                margenY="5"
            ></caja-informativa>
        `
    }

    renderizarSeccionMedallas() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-6 mb-4">
                Estuche de medallas
            </p>

            <div class="box">
                ${
                    this.personaje.medallas.map(
                        medalla => html`
                            <img
                                width="64"
                                class=${medalla.laTiene ? '' : 'esta-difuminada'}
                                src=${medalla.icono}
                                title=${medalla.nombre}
                            />
                        `
                    )
                }
            </div>
        `
    }

    renderizarSeccionInventario() {
        let colorTitulo = `has-text-${this.personaje.color}-soft-invert`

        return html`
            <p class="subtitle ${colorTitulo} mt-6 mb-4">
                Inventario
            </p>

            <div class="box">
                En desarrollo...
            </div>
        `
    }

    render() {
        return html`
            <div class="card">
                <cabecera-personaje
                    .registro=${this.personaje}
                ></cabecera-personaje>

                <div class="card-content">
                    ${this.renderizarSeccionPrincipal()}

                    ${this.renderizarSeccionAtributos()}
                    ${this.renderizarSeccionAtributosSociales()}

                    ${this.renderizarSeccionAptitudesLucha()}
                    ${this.renderizarSeccionAptitudesSupervivencia()}
                    ${this.renderizarSeccionAptitudesSocial()}
                    ${this.renderizarSeccionAptitudesSaber()}

                    ${this.renderizarSeccionLogros()}
                    ${this.renderizarSeccionMedallas()}

                    ${this.renderizarSeccionInventario()}
                </div>
            </div>
        `
    }
}
customElements.define("ficha-personaje", FichaPersonaje)
