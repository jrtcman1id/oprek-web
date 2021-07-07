import styles from '!css-loader!postcss-loader!sass-loader!bootstrap/scss/bootstrap.scss';
import stylesIcon from '!css-loader!bootstrap-icons/font/bootstrap-icons.css'; // shadow root level
import 'bootstrap-icons/font/bootstrap-icons.css'; // document root level

// import stylesIcon from '!css-loader!postcss-loader!sass-loader!./index_.scss';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import {faSpinner } from '@fortawesome/free-solid-svg-icons';

// library.add(faSpinner);
// dom.watch();

class CustomComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.append(<>
            <style>{styles.toString()}</style>
            <style>{stylesIcon.toString()}</style>
            <div>
                <h1><i class="bi bi-heart-fill me-2" style="color:red; font-size: .8em;"></i>Font Icon</h1>
                <h1>
                <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" width=".8em" height=".8em" class="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                    <path fill="transparent" stroke="red" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                    SVG Icon</h1>
                <button type="button" class="btn btn-primary">Primary X</button>
                <div>This is styled template content.</div>

                <slot />
            </div>
        </>);
    }
}

customElements.define('custom-component', CustomComponent);
document.body.append(<>
    <custom-component><h1><i class="bi-alarm"></i>Alarm222</h1></custom-component>
    <div>This is not styled.</div>
</>);

