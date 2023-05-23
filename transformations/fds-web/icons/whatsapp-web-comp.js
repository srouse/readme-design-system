
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
<g clip-path="url(#clip0_209_1172)">
<path d="M46.548 13.241C42.1289 8.81133 36.2437 6.375 29.9895 6.375C17.0801 6.375 6.57539 16.8797 6.57539 29.7891C6.57539 33.9129 7.65117 37.9418 9.69727 41.4961L6.375 53.625L18.7887 50.366C22.2059 52.2328 26.0555 53.2137 29.9789 53.2137H29.9895C42.8883 53.2137 53.625 42.709 53.625 29.7996C53.625 23.5453 50.9672 17.6707 46.548 13.241ZM29.9895 49.2691C26.4879 49.2691 23.0602 48.3305 20.0754 46.5586L19.3687 46.1367L12.007 48.0668L13.9688 40.8844L13.5047 40.1461C11.5535 37.0453 10.5305 33.4699 10.5305 29.7891C10.5305 19.0629 19.2633 10.3301 30 10.3301C35.1996 10.3301 40.0828 12.3551 43.7531 16.0359C47.4234 19.7168 49.6805 24.6 49.6699 29.7996C49.6699 40.5363 40.7156 49.2691 29.9895 49.2691ZM40.6629 34.6934C40.0828 34.398 37.2035 32.9848 36.6656 32.7949C36.1277 32.5945 35.7375 32.4996 35.3473 33.0902C34.957 33.6809 33.8391 34.9887 33.491 35.3895C33.1535 35.7797 32.8055 35.8324 32.2254 35.5371C28.7871 33.818 26.5301 32.468 24.2625 28.5762C23.6613 27.5426 24.8637 27.6164 25.9816 25.3805C26.1715 24.9902 26.0766 24.6527 25.9289 24.3574C25.7812 24.0621 24.6105 21.1828 24.1254 20.0121C23.6508 18.873 23.1656 19.0313 22.807 19.0102C22.4695 18.9891 22.0793 18.9891 21.6891 18.9891C21.2988 18.9891 20.666 19.1367 20.1281 19.7168C19.5902 20.3074 18.082 21.7207 18.082 24.6C18.082 27.4793 20.1809 30.2637 20.4656 30.6539C20.7609 31.0441 24.5895 36.9504 30.4641 39.4922C34.1766 41.0953 35.632 41.2324 37.4883 40.9582C38.6168 40.7895 40.9477 39.5449 41.4328 38.1738C41.918 36.8027 41.918 35.632 41.7703 35.3895C41.6332 35.1258 41.243 34.9781 40.6629 34.6934Z" fill="#353739"/>
</g>
<defs>
<clipPath id="clip0_209_1172">
<rect width="47.25" height="54" fill="white" transform="translate(6.375 3)"/>
</clipPath>
</defs>
</svg>
</div>
`;

class RDSwhatsapp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define('rds-icon-whatsapp', RDSwhatsapp);