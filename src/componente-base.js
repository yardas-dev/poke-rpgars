import { LitElement, css, unsafeCSS } from "lit"
import bulma from "bulma/css/bulma.css?inline"

export class ComponenteBase extends LitElement {
    static styles = [
        css`${unsafeCSS(bulma)}`
    ]
}
