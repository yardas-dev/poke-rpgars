import { LitElement, css } from "lit"

const estilos = css`
    @import url('https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css');
`

export class ComponenteBase extends LitElement {
    static styles = [estilos]
}
