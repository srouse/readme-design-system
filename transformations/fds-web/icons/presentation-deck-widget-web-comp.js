
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      width: 42px;
      height: 42px;
    }
      :host, #root {
        display: inline-block;
      }
        #root, svg {
          width: 100%;
          height: 100%;
        }
          svg, svg * {
            fill: var( --color, #222 ) !important;
          }
      .error {
        font-family: sans-serif;
        font-size: 12px;
        color: #f00;
      }
  </style>
  <div id="root"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_6005)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.6 11.1C4.61177 11.1 3 12.7117 3 14.7V45.3C3 47.2882 4.61177 48.9 6.6 48.9H53.4C55.3882 48.9 57 47.2882 57 45.3V14.7C57 12.7117 55.3882 11.1 53.4 11.1H6.6ZM8.4 14.7C7.40589 14.7 6.6 15.5059 6.6 16.5V43.5C6.6 44.4941 7.40589 45.3 8.4 45.3H51.6C52.5941 45.3 53.4 44.4941 53.4 43.5V16.5C53.4 15.5059 52.5941 14.7 51.6 14.7H8.4Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.6999 17.4C40.7058 17.4 39.8999 18.2059 39.8999 19.2V40.8C39.8999 41.7941 40.7058 42.6 41.6999 42.6H48.8999C49.894 42.6 50.6999 41.7941 50.6999 40.8V19.2C50.6999 18.2059 49.894 17.4 48.8999 17.4H41.6999ZM45.2999 21C44.3058 21 43.4999 21.8058 43.4999 22.8V37.2C43.4999 38.1941 44.3058 39 45.2999 39C46.294 39 47.0999 38.1941 47.0999 37.2V22.8C47.0999 21.8058 46.294 21 45.2999 21Z" fill="#353739"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0998 17.4C10.1057 17.4 9.2998 18.2059 9.2998 19.2V40.8C9.2998 41.7941 10.1057 42.6 11.0998 42.6H35.3998C36.3939 42.6 37.1998 41.7941 37.1998 40.8V19.2C37.1998 18.2059 36.3939 17.4 35.3998 17.4H11.0998ZM14.6998 21C13.7057 21 12.8998 21.8058 12.8998 22.8V37.2C12.8998 38.1941 13.7057 39 14.6998 39H31.7998C32.7939 39 33.5998 38.1941 33.5998 37.2V22.8C33.5998 21.8058 32.7939 21 31.7998 21H14.6998Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_1_6005">
<rect width="54" height="37.8" fill="white" transform="translate(3 11.1)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class RDSpresentationDeckWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('rds-icon-presentation-deck-widget', RDSpresentationDeckWidget);