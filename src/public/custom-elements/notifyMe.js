class NotifyMeElement extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['id', 'data-type'];
    }

    connectedCallback() {
        this.renderWidget();
    }

    attributeChangedCallback(name, oldValue, newValue) { 
        if ((name === 'id' || name === 'data-type') && newValue !== oldValue) {
            this.renderWidget();
        }
    }

    renderWidget() {
        this.renderSRButton();
    }

    renderSRButton() {
        const retryInterval = 1000;
        const maxRetries = 50; 
        let attempts = 0;

        const attemptBind = () => {
            attempts++;
            const iframe = this.querySelector('iframe');

            if (!iframe) {
                if (!window.SR?.Button?.renderButton) {
                    console.warn('SR Button not ready yet.');
                } else {
                    try {
                        window.SR.Button.renderButton();
                    } catch (e) {
                        console.error('Error rendering SR button:', e);
                    }
                }

                if (attempts < maxRetries) {
                    setTimeout(attemptBind, retryInterval);
                } else {
                    console.warn('Max retries reached while waiting for SR button.');
                }
            } else {
                console.log('SR button already rendered');
            }
        };

        attemptBind();
    }
}

customElements.define('notify-me', NotifyMeElement);