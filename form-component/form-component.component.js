const formComponentHighlightColor = "#9b2eff";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .form-component {
      position: relative;
      width: 12rem;
      margin: 1rem 0.5rem;
    }

    .form-component-label {
      display: block;
      position: absolute;
      width: 100%;
      left: 0;
      top: 0;
      pointer-events: none;
      transition: font-size 0.5s 0s, color 0.5s 0s;
    }

    .form-component-input {
      width: 100%;
      /* height: 100%; */
      padding-top: 1.5rem;
      border: none;
      border-bottom: 1px solid black;
      outline: none;
      background: none;
      padding-top: 1rem;
      padding-bottom: 0.25rem;
      transition: height 0.5s 0s, padding 0.5s 0s, border-bottom-color 0.5s 0s;
    }

    .form-component-input:focus,
    .form-component-input:valid {
      padding-top: 1.5rem;
      border-bottom-color: ${formComponentHighlightColor};
    }

    .form-component-input:focus + .form-component-label,
    .form-component-input:valid + .form-component-label {
      font-size: 0.75rem;
      color: ${formComponentHighlightColor};
    }
  </style>
  <div class="form-component">
    <input class="form-component-input" type="text" autocomplete="false" tabindex="1" required
    ><label class="form-component-label"></label>
  </div>
`;

class FormComponentInput extends HTMLElement {
   constructor() {
     //Call the parent constructor
     super();

     //Set up our shadow DOM for component-only DOM
     this.attachShadow({mode: "open"});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector(".form-component-label").innerText = this.getAttribute("name");
   }

   connectedCallback() {
     // this.shadowRoot.querySelector(".form-component").addEventListener(event, this.function);
   }

   connectedCallback() {
     // this.shadowRoot.querySelector(".form-component").removeEventListener(event, this.function);
   }
}

window.customElements.define('form-component-input', FormComponentInput);
