class MyElement extends HTMLElement {
    constructor() {
        // always call super() first
        super(); 
        console.log('constructed!');
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    // attributeChangedCallback(name, oldVal, newVal) {
    attributeChangedCallback(name) {
        console.log(`Attribute: ${name} changed!`);
    }

    adoptedCallback() {
        console.log('adopted!');
    }
}

// window.customElements.define('my-element', MyElement);

export default MyElement;