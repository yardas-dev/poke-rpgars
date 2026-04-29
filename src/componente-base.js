import { LitElement, css, unsafeCSS } from "lit"

export class ComponenteBase extends LitElement {
    static styles = [
        css`${unsafeCSS(`@import url('https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css');`)}`
    ]
}
