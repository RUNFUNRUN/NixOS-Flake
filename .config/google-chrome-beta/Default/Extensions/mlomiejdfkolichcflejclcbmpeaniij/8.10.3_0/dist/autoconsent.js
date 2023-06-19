typeof browser<"u"&&(chrome=browser),(()=>{var G1={86782:(S,H,s)=>{var e={"./card.js":43730,"./header.js":58489};function f(M){var d=l(M);return s(d)}function l(M){if(!s.o(e,M)){var d=new Error("Cannot find module '"+M+"'");throw d.code="MODULE_NOT_FOUND",d}return e[M]}f.keys=function(){return Object.keys(e)},f.resolve=l,S.exports=f,f.id=86782},72782:(S,H,s)=>{var e={"./confirm.js":44915,"./home.js":18589,"./main.js":57269};function f(M){var d=l(M);return s(d)}function l(M){if(!s.o(e,M)){var d=new Error("Cannot find module '"+M+"'");throw d.code="MODULE_NOT_FOUND",d}return e[M]}f.keys=function(){return Object.keys(e)},f.resolve=l,S.exports=f,f.id=72782},23998:(S,H,s)=>{var e={"./action.js":49111,"./button.js":69092,"./icon.js":29810,"./line.js":38191,"./onboarding-state.js":62788,"./text.js":86561,"./tooltip.js":89247,"./tracker-wheel.js":62254};function f(M){var d=l(M);return s(d)}function l(M){if(!s.o(e,M)){var d=new Error("Cannot find module '"+M+"'");throw d.code="MODULE_NOT_FOUND",d}return e[M]}f.keys=function(){return Object.keys(e)},f.resolve=l,S.exports=f,f.id=23998},43730:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={render:()=>e.dy`
      <template layout="column">
        <slot></slot>
      </template>
    `.css`
      :host {
        background: white;
        border-radius: 16px;
      }
    `}},58489:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={render:()=>e.dy`
    <template layout="row center">
      <ui-text
        type="display-2xs"
        color="primary-500"
        layout="row gap items:center margin"
      >
        <ui-icon name="ghosty" layout="block width:16px height:16px"></ui-icon>
        Never-Consent
      </ui-text>
    </template>
  `.css`
    :host {
      background: rgba(0, 174, 240, 0.15);
    }
    
    ui-text {
      background: white;
      border-radius: 16px;
      padding: 4px 10px;
    }
  `}},44915:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>w});var e=s(77540),f=s(72020),l=s(67132),M=s(9300);function d(h){(0,e.WI)(h,"closeiframe",{bubbles:!0,detail:{reload:h.enabled}})}const w={enabled:!1,content:({enabled:h})=>f.dy`
    <template layout="column margin:3 gap:4">
      <div layout="column items:center gap margin:0:5">
        <ui-text type="display-s" layout="block:center">
          ${h?l.WI`Never-Consent is Enabled`:l.WI`Never-Consent is Disabled`}
        </ui-text>
        <ui-text layout="block:center">
          ${l.WI.html`You can always change these settings in the&nbsp;<strong>Ghostery control panel</strong>.`}
        </ui-text>
      </div>
      <div layout="grid:2 gap:2">
        <ui-button type="outline" size="small">
          <a href="${M.Z.backUrl()}">Back</a>
        </ui-button>
        <ui-button type="primary" size="small">
          <button onclick="${d}">OK</button>
        </ui-button>
      </div>
    </template>
  `}},18589:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>h});var e=s(77540),f=s(9300),l=s(72020),M=s(44915);const d=new URLSearchParams(window.location.search).get("default");function w(g){return L=>{(0,e.WI)(L,g,{bubbles:!0,detail:{all:L.scope==="all"}})}}const h={[f.Z.connect]:{stack:[M.default]},scope:d==="all"?"all":"selected",content:({scope:g})=>l.dy`
    <template layout="column margin:3 gap:4">
      <div layout="column items:center gap">
        <ui-text type="display-s" layout="block:center">
          TIRED OF COOKIE POPUPS?
        </ui-text>
        <ui-text layout="block:center">
          Let Ghostery be your complete privacy advocate and reject all popups
          and tracking for you, or do it yourself!
        </ui-text>
      </div>
      <div layout="column items:center gap">
        <ui-text type="display-2xs"> Enable Never-Consent? </ui-text>
        <ui-text>Apply optimal privacy settings:</ui-text>
        <div layout="column gap:0.5">
          <label layout="row items:center gap">
            <input
              type="radio"
              name="scope"
              value="selected"
              onchange="${l.dy.set("scope")}"
              checked="${g==="selected"}"
              layout="margin:0"
              style="accent-color: var(--ui-color-primary-700)"
            />
            <ui-text>on this website</ui-text>
          </label>
          <label layout="row items:center gap">
            <input
              type="radio"
              name="scope"
              value="all"
              onchange="${l.dy.set("scope")}"
              checked="${g==="all"}"
              layout="margin:0"
              style="accent-color: var(--ui-color-primary-700)"
            />
            <ui-text>on all websites</ui-text>
          </label>
        </div>
      </div>
      <div layout="grid:2 gap:2">
        <ui-button type="outline" size="small">
          <a
            href="${f.Z.url(M.default,{enabled:!1})}"
            onclick="${w("disable")}"
          >
            No
          </a>
        </ui-button>
        <ui-button type="primary" size="small">
          <a
            href="${f.Z.url(M.default,{enabled:!0})}"
            onclick="${w("enable")}"
          >
            Yes
          </a>
        </ui-button>
      </div>
    </template>
  `}},57269:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>h});var e=s(77540),f=s(9300),l=s(72020),M=s(67132),d=s(18589);function w(g,L){(0,e.WI)(g,"close",{detail:{reload:L.detail.reload}}),g.parentElement.removeChild(g)}const h={tag:"ui-autoconsent",stack:(0,f.Z)([d.default]),categories:{get:(g,L=[])=>L,set:(g,L)=>L||[]},content:({stack:g,categories:L})=>l.dy`
    <template layout="grid::min|1|min">
      <ui-autoconsent-card oncloseiframe="${w}">
        <ui-autoconsent-header></ui-autoconsent-header>
        ${g}
      </ui-autoconsent-card>
      ${f.Z.active(d.default)&&l.dy`
        <ui-autoconsent-card layout="margin:top:0.5">
          <section layout="row margin:2 gap:2">
            <div layout="area:1:2">
              <ui-tracker-wheel
                categories="${L}"
                layout="size:8"
              ></ui-tracker-wheel>
            </div>
            <div layout="column grow shrink gap">
              <ui-text type="label-m">
                ${M.WI.html`Trackers detected by Ghostery on this
                website:&nbsp;${L.length}`}
              </ui-text>
              <ui-text type="body-s">
                By using Never-Consent you let website owners know that you’re
                against tracking!
                <a
                  href="https://www.ghostery.com/blog/never-consent-by-ghostery-new-feature-removing-annoying-cookie-pop-ups-automates-interaction-with-consent-dialogs"
                  target="_blank"
                >
                  Learn more
                </a>
              </ui-text>
            </div>
          </section>
        </ui-autoconsent-card>
      `}
    </template>
  `}},49111:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={render:()=>e.dy`
    <template layout="contents">
      <slot></slot>
    </template>
  `.css`
    ::slotted(*) {
      transition: opacity 0.2s, color 0.2s, background-color 0.2s, border-color 0.2s;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }
    
    ::slotted(*:focus:not(:focus-visible)) {
      outline: none;
    }
  
    ::slotted(*:active) {
      opacity: 0.6;
    }

    ::slotted(button) {
      appearance: none;
      border: none;
      background: none;
      padding: 0;
      margin: 0;
      cursor: pointer;
    }
  `}},69092:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={type:"primary",size:"",disabled:!1,render:({size:l})=>e.dy`<slot></slot>`.css`
      :host {
        box-sizing: border-box;
        display: grid;
        grid: 1fr / 1fr;
        height: 48px;
        border-radius: 24px;
        white-space: nowrap;
        transition: opacity 0.2s, color 0.2s, background-color 0.2s, border-color 0.2s;
        font: var(--ui-font-button-${l==="small"?"s":"m"});
        text-transform: uppercase;
      }

      :host([type="primary"]) {
        color: var(--ui-color-white);
        background: var(--ui-color-primary-500);
        --ui-button-hover-color: var(--ui-color-white);
        --ui-button-hover-background: var(--ui-color-primary-700);
      }

      :host([type="success"]) {
        color: var(--ui-color-white);
        background: var(--ui-color-success-500);
        --ui-button-hover-color: var(--ui-color-white);
        --ui-button-hover-background: var(--ui-color-success-700);
      }

      :host([type="transparent"]) {
        --ui-button-hover-color: var(--ui-color-primary-500);
        --ui-button-hover-background: var(--ui-color-primary-100);
      }

      :host([type="outline"]) {
        color: var(--ui-color-gray-700);
        background: var(--ui-color-white);
        border: 1px solid var(--ui-color-gray-200);
        --ui-button-hover-color: var(--ui-color-primary-500);
        --ui-button-hover-border: var(--ui-color-primary-500);
        --ui-button-hover-background: var(--ui-color-white);
      }

      :host([type="outline-error"]) {
        color: var(--ui-color-error-400);
        background: var(--ui-color-white);
        border: 1px solid var(--ui-color-gray-200);
        --ui-button-hover-color: var(--ui-color-error-500);
        --ui-button-hover-border: var(--ui-color-error-500);
        --ui-button-hover-background: var(--ui-color-white);
      }

      @media (hover: hover) and (pointer: fine) { 
        :host(:hover), :host(:focus-within) {
          color: var(--ui-button-hover-color);
          border-color: var(--ui-button-hover-border);
          background: var(--ui-button-hover-background);
        }
      }

      :host(:active) {
        opacity: 0.6;
      }

      :host([size="small"]) {
        height: 40px;
      }

      :host([disabled]) {
        background: var(--ui-color-gray-200);
        color: var(--ui-color-gray-400);
        border-color: var(--ui-color-gray-200);
        pointer-events: none;
      }

      :host([disabled]:focus-within) {
        visibility: hidden;
      }

      ::slotted(*) {
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        gap: 8px;
        cursor: pointer;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        place-items: center;
        appearance: none;
        border: none;
        padding: 0px 24px;
        margin: 0;
        background: none;
        color: inherit;
        font: inherit;
        text-transform: inherit;
        text-decoration: none;
        border-radius: 24px;
      }

      ::slotted(*:focus-visible) {
        outline: 6px solid rgba(0, 174, 240, 0.15);
      }

      :host([size="small"]) ::slotted(*) {
        padding: 0px 12px;
      }
   `}},29810:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={name:"",color:"",render:({name:M,color:d})=>e.dy`
    <template layout="block">${l[M]||""}</template>
  `.css`
    :host {
      ${d?`color: var(--ui-color-${d});`:""}
    }

    svg {
      display: block;
      width: inherit;
      height: inherit;
    }
   `},l={"arrow-right":e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,"arrow-down":e.dy`
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.10651 8.78147C6.24852 8.65129 6.47876 8.65129 6.62077 8.78147L10 11.8791L13.3792 8.78147C13.5212 8.65129 13.7515 8.65129 13.8935 8.78147C14.0355 8.91164 14.0355 9.1227 13.8935 9.25287L10.2571 12.5862C10.1151 12.7164 9.88488 12.7164 9.74287 12.5862L6.10651 9.25287C5.9645 9.1227 5.9645 8.91164 6.10651 8.78147Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,alert:e.dy`
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_4366_65557)">
        <path d="M10.0002 19.3337C15.1548 19.3337 19.3335 15.1549 19.3335 10.0003C19.3335 4.84566 15.1548 0.666992 10.0002 0.666992C4.84554 0.666992 0.66687 4.84567 0.66687 10.0003C0.66687 15.1549 4.84554 19.3337 10.0002 19.3337Z" fill="currentColor" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.0002 6.66699V10.0003M10.0002 13.3337H10.0086" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_4366_65557">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  `,"alert-info":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00065 10.6667V8.00001M8.00065 5.33334H8.00732M14.6673 8.00001C14.6673 11.6819 11.6825 14.6667 8.00065 14.6667C4.31875 14.6667 1.33398 11.6819 1.33398 8.00001C1.33398 4.31811 4.31875 1.33334 8.00065 1.33334C11.6825 1.33334 14.6673 4.31811 14.6673 8.00001Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,ghosty:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7C13 9.76142 10.7614 12 8 12C5.23859 12 3 9.76142 3 7C3 4.23859 5.23859 2 8 2C10.7614 2 13 4.23859 13 7Z" fill="#FFFFFE"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6041 13.2868C13.9406 11.761 13.8264 10.4682 13.8085 9.9602V5.78079C13.8085 2.58804 11.2074 0 7.99899 0C4.79019 0 2.18898 2.58804 2.18898 5.78079V10.0206C2.16419 10.5671 2.03381 11.8204 1.39588 13.2868C0.53845 15.2572 1.24806 15.0223 1.88366 14.8603C2.51917 14.6988 3.93848 14.0659 4.38187 14.8455C4.82508 15.6248 5.19483 16.3016 6.22953 15.8603C7.26432 15.4192 7.75192 15.2722 7.89966 15.2722H8.10064C8.2482 15.2722 8.73598 15.4192 9.77068 15.8603C10.8054 16.3016 11.1749 15.6248 11.6184 14.8455C12.0616 14.0659 13.4809 14.6988 14.1165 14.8603C14.7522 15.0223 15.4614 15.2572 14.6041 13.2868ZM6.20572 3.15214C6.83148 3.15214 7.33877 3.95083 7.33877 4.9364C7.33877 5.92188 6.83148 6.72084 6.20572 6.72084C5.57996 6.72084 5.07259 5.92188 5.07259 4.9364C5.07259 3.95083 5.57996 3.15214 6.20572 3.15214ZM7.99898 10.2839C6.62004 10.2839 5.45925 8.93357 5.10946 7.43105C5.78506 8.3552 6.82782 8.94911 7.99898 8.94911C9.17006 8.94911 10.2127 8.3552 10.8884 7.43105C10.5386 8.93357 9.37766 10.2839 7.99898 10.2839ZM9.79224 6.72084C9.16603 6.72084 8.65892 5.92188 8.65892 4.9364C8.65892 3.95083 9.16603 3.15214 9.79224 3.15214C10.4184 3.15214 10.9253 3.95083 10.9253 4.9364C10.9253 5.92188 10.4184 6.72084 9.79224 6.72084Z" fill="currentColor"/>
    </svg>
  `,logo:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 10.5C19.5 14.6421 16.1421 18 12 18C7.85788 18 4.5 14.6421 4.5 10.5C4.5 6.35788 7.85788 3 12 3C16.1421 3 19.5 6.35788 19.5 10.5Z" fill="#FFFFFE"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9062 19.9302C20.9109 17.6415 20.7395 15.7022 20.7128 14.9403V8.67118C20.7128 3.88205 16.8111 0 11.9985 0C7.18528 0 3.28347 3.88205 3.28347 8.67118V15.0309C3.24629 15.8507 3.05072 17.7306 2.09383 19.9302C0.807675 22.8858 1.87209 22.5335 2.82549 22.2904C3.77876 22.0482 5.90772 21.0989 6.57281 22.2683C7.23763 23.4372 7.79225 24.4523 9.3443 23.7904C10.8965 23.1288 11.6279 22.9083 11.8495 22.9083H12.151C12.3723 22.9083 13.104 23.1288 14.656 23.7904C16.2081 24.4523 16.7624 23.4372 17.4276 22.2683C18.0925 21.0989 20.2213 22.0482 21.1748 22.2904C22.1282 22.5335 23.1921 22.8858 21.9062 19.9302ZM9.30859 4.72821C10.2472 4.72821 11.0082 5.92624 11.0082 7.4046C11.0082 8.88282 10.2472 10.0813 9.30859 10.0813C8.36995 10.0813 7.60888 8.88282 7.60888 7.4046C7.60888 5.92624 8.36995 4.72821 9.30859 4.72821ZM11.9985 15.4259C9.93006 15.4259 8.18888 13.4004 7.66419 11.1466C8.6776 12.5328 10.2417 13.4237 11.9985 13.4237C13.7551 13.4237 15.3191 12.5328 16.3326 11.1466C15.8079 13.4004 14.0665 15.4259 11.9985 15.4259ZM14.6884 10.0813C13.749 10.0813 12.9884 8.88282 12.9884 7.4046C12.9884 5.92624 13.749 4.72821 14.6884 4.72821C15.6275 4.72821 16.3879 5.92624 16.3879 7.4046C16.3879 8.88282 15.6275 10.0813 14.6884 10.0813Z" fill="#00AEF0"/>
    </svg>
  `,"logo-full":e.dy`
    <svg width="163" height="48" viewBox="0 0 163 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4369 39.8603C39.4158 35.283 39.0678 31.4045 39.0135 29.8806V17.3424C39.0135 7.76411 31.0908 0 21.3182 0C11.5445 0 3.62151 7.76411 3.62151 17.3424V30.0619C3.54601 31.7013 3.14889 35.4613 1.20582 39.8603C-1.40583 45.7716 0.755557 45.067 2.69154 44.5808C4.62725 44.0965 8.95031 42.1978 10.3008 44.5366C11.6508 46.8744 12.777 48.9047 15.9286 47.5808C19.0805 46.2576 20.5657 45.8166 21.0157 45.8166H21.6278C22.0773 45.8166 23.563 46.2576 26.7146 47.5808C29.8662 48.9047 30.9919 46.8744 32.3427 44.5366C33.6926 42.1978 38.0154 44.0965 39.9517 44.5808C41.8877 45.067 44.048 45.7716 41.4369 39.8603ZM15.8561 9.45641C17.7621 9.45641 19.3073 11.8525 19.3073 14.8092C19.3073 17.7656 17.7621 20.1625 15.8561 20.1625C13.9501 20.1625 12.4047 17.7656 12.4047 14.8092C12.4047 11.8525 13.9501 9.45641 15.8561 9.45641ZM21.3182 30.8518C17.1181 30.8518 13.5824 26.8007 12.517 22.2931C14.5748 25.0656 17.7509 26.8473 21.3182 26.8473C24.8852 26.8473 28.061 25.0656 30.1191 22.2931C29.0537 26.8007 25.5175 30.8518 21.3182 30.8518ZM26.7803 20.1625C24.8729 20.1625 23.3283 17.7656 23.3283 14.8092C23.3283 11.8525 24.8729 9.45641 26.7803 9.45641C28.6874 9.45641 30.2314 11.8525 30.2314 14.8092C30.2314 17.7656 28.6874 20.1625 26.7803 20.1625Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M76.3028 15.4233C76.3028 11.4156 78.4576 9.125 82.4007 9.125C86.3449 9.125 88.4987 11.4156 88.4987 15.4233V28.4491C88.4987 32.4568 86.3449 34.748 82.4007 34.748C78.4576 34.748 76.3028 32.4568 76.3028 28.4491V15.4233ZM80.3192 28.6999C80.3192 30.4892 81.1238 31.1695 82.4008 31.1695C83.6793 31.1695 84.4818 30.4892 84.4818 28.6999V15.1725C84.4818 13.3834 83.6793 12.7034 82.4008 12.7034C81.1238 12.7034 80.3192 13.3834 80.3192 15.1725V28.6999ZM58.4472 20.5049H52.8238V24.0838H54.6496V28.6999C54.6496 30.4892 53.847 31.1336 52.5687 31.1336C51.2901 31.1336 50.4869 30.4892 50.4869 28.6999V15.1725C50.4869 13.384 51.2901 12.7042 52.5687 12.7042C53.847 12.7042 54.6496 13.384 54.6496 15.1725V17.8569H58.4472V15.4233C58.4472 11.4147 56.4019 9.12553 52.4583 9.12553C48.5152 9.12553 46.4707 11.4147 46.4707 15.4233V28.4491C46.4707 32.4568 48.5152 34.7474 52.4583 34.7474C56.4019 34.7474 58.4472 32.4568 58.4472 28.4491V20.5049ZM61.0406 34.4607H65.0567V23.7251H69.6202V34.4607H73.7102V9.41199H69.6202V20.147H65.0567V9.41199H61.0406V34.4607ZM102.412 15.4244C102.412 11.4164 100.404 9.12553 96.4967 9.12553C92.5888 9.12553 90.5811 11.4164 90.5811 15.4244C90.5811 19.2951 92.878 21.3547 94.9868 23.2457C96.7765 24.8505 98.4308 26.3339 98.4308 28.6999C98.4308 30.4887 97.6281 31.133 96.3506 31.133C95.0729 31.133 94.2688 30.4887 94.2688 28.6999V26.9108H90.4712V28.4497C90.4712 32.4582 92.5171 34.7474 96.4596 34.7474C100.404 34.7474 102.448 32.4582 102.448 28.4497C102.448 24.5778 100.15 22.5176 98.0407 20.6263C96.2507 19.0215 94.5964 17.5383 94.5964 15.1731C94.5964 13.384 95.328 12.7042 96.6049 12.7042C97.8838 12.7042 98.6148 13.384 98.6148 15.1731V16.2107H102.412V15.4244ZM103.27 9.41085H115.684V12.9904H111.487V34.4606H107.469V12.9904H103.27V9.41085ZM127.278 19.9685H121.764V12.9907H128.702V9.41199H117.749V34.4621H128.702V30.8828H121.764V23.5466H127.278V19.9685ZM139.584 34.4607L139.572 34.4235C139.36 33.8005 139.219 33.3828 139.219 31.384V27.4472C139.219 25.1212 138.416 24.2624 136.589 24.2624H135.203V34.4607H131.186V9.41199H137.248C141.41 9.41199 143.201 11.3087 143.201 15.1736V17.1418C143.201 19.7172 142.36 21.3999 140.571 22.2223C142.578 23.0451 143.236 24.9421 143.236 27.5543V31.4192C143.236 32.6362 143.272 33.531 143.673 34.4607H139.584ZM135.203 12.9905V20.6834H136.773C138.271 20.6834 139.182 20.0402 139.182 18.0355V15.5662C139.182 13.7768 138.562 12.9905 137.139 12.9905H135.203ZM144.185 9.41199L149.261 26.1591V34.4607H153.278V26.1591L158.354 9.41199H154.519L151.453 20.8276L148.384 9.41199H144.185Z" fill="currentColor" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M160.693 9.39453C161.533 9.39453 162.171 10.0187 162.171 10.8857C162.171 11.7513 161.533 12.3771 160.693 12.3771C159.851 12.3771 159.211 11.7513 159.211 10.8857C159.211 10.0187 159.851 9.39453 160.693 9.39453ZM160.693 12.085C161.363 12.085 161.865 11.5815 161.865 10.8857C161.865 10.1901 161.363 9.68508 160.693 9.68508C160.02 9.68508 159.519 10.1901 159.519 10.8857C159.519 11.5815 160.02 12.085 160.693 12.085ZM160.905 11.7759C160.883 11.7227 160.874 11.6933 160.874 11.5265V11.3352C160.874 11.1436 160.807 11.0773 160.658 11.0773H160.548V11.7759H160.225V9.99417H160.717C161.049 9.99417 161.199 10.1487 161.199 10.4611V10.4981C161.199 10.7105 161.129 10.8446 160.976 10.9102C161.142 10.9767 161.199 11.1269 161.199 11.3401V11.5311C161.199 11.6271 161.202 11.7015 161.236 11.7759H160.905ZM160.548 10.2861V10.7851H160.678C160.799 10.7851 160.874 10.7353 160.874 10.5731V10.4981C160.874 10.3526 160.823 10.2861 160.7 10.2861H160.548Z" fill="currentColor" />
    </svg>
  `,ads:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66634 8.74367L3.71611 12.9427C3.74563 13.0608 3.76039 13.1199 3.77785 13.1714C3.94845 13.6751 4.40202 14.0292 4.93202 14.0726C4.98627 14.077 5.04714 14.077 5.16887 14.077C5.3213 14.077 5.39752 14.077 5.46173 14.0708C6.09634 14.0092 6.59857 13.507 6.66011 12.8724C6.66634 12.8082 6.66634 12.7319 6.66634 12.5795V3.07701M12.333 8.41033C13.6217 8.41033 14.6663 7.36567 14.6663 6.07701C14.6663 4.78834 13.6217 3.74367 12.333 3.74367M6.83301 3.07701H4.33301C2.67615 3.07701 1.33301 4.42015 1.33301 6.07701C1.33301 7.73387 2.67615 9.077 4.33301 9.077H6.83301C8.01061 9.077 9.45114 9.70827 10.5625 10.3141C11.2109 10.6675 11.5351 10.8443 11.7474 10.8183C11.9443 10.7941 12.0931 10.7057 12.2085 10.5444C12.333 10.3705 12.333 10.0223 12.333 9.32613V2.82787C12.333 2.13167 12.333 1.78357 12.2085 1.6096C12.0931 1.44827 11.9443 1.35987 11.7474 1.33576C11.5351 1.30975 11.2109 1.48647 10.5625 1.83991C9.45114 2.44575 8.01061 3.07701 6.83301 3.07701Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,autoconsent:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 7.5V10M8 12.5V12.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3 3L13 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 1L11 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="1" y="5" width="14" height="10" rx="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,block:e.dy`
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.78659 3.28666L13.2133 12.7133M1.83325 5.68182V10.3182C1.83325 10.4812 1.83325 10.5627 1.85167 10.6395C1.86801 10.7075 1.89494 10.7725 1.93149 10.8322C1.97272 10.8995 2.03037 10.9571 2.14567 11.0724L5.4275 14.3543C5.5428 14.4695 5.60045 14.5272 5.66773 14.5684C5.72738 14.605 5.7924 14.6319 5.86043 14.6483C5.93716 14.6667 6.01869 14.6667 6.18175 14.6667H10.8181C10.9811 14.6667 11.0627 14.6667 11.1394 14.6483C11.2075 14.6319 11.2725 14.605 11.3321 14.5684C11.3994 14.5272 11.4571 14.4695 11.5723 14.3543L14.8542 11.0724C14.9695 10.9571 15.0271 10.8995 15.0683 10.8322C15.1049 10.7725 15.1319 10.7075 15.1482 10.6395C15.1666 10.5627 15.1666 10.4812 15.1666 10.3182V5.68182C15.1666 5.51876 15.1666 5.43723 15.1482 5.36051C15.1319 5.29248 15.1049 5.22745 15.0683 5.16781C15.0271 5.10053 14.9695 5.04287 14.8542 4.92757L11.5723 1.64575C11.4571 1.53045 11.3994 1.47279 11.3321 1.43157C11.2725 1.39501 11.2075 1.36808 11.1394 1.35175C11.0627 1.33333 10.9811 1.33333 10.8181 1.33333H6.18175C6.01869 1.33333 5.93716 1.33333 5.86043 1.35175C5.7924 1.36808 5.72738 1.39501 5.66773 1.43157C5.60045 1.47279 5.5428 1.53045 5.4275 1.64575L2.14567 4.92757C2.03037 5.04287 1.97272 5.10053 1.93149 5.16781C1.89494 5.22745 1.86801 5.29248 1.85167 5.36051C1.83325 5.43723 1.83325 5.51876 1.83325 5.68182Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-advertising":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66732 8.74342L3.71708 12.9425C3.7466 13.0606 3.76136 13.1196 3.77883 13.1712C3.94943 13.6748 4.403 14.029 4.933 14.0724C4.98725 14.0768 5.04812 14.0768 5.16984 14.0768C5.32228 14.0768 5.3985 14.0768 5.4627 14.0706C6.09732 14.009 6.59954 13.5068 6.66109 12.8722C6.66732 12.808 6.66732 12.7317 6.66732 12.5793V3.07676M12.334 8.41009C13.6227 8.41009 14.6673 7.36542 14.6673 6.07676C14.6673 4.7881 13.6227 3.74343 12.334 3.74343M6.83398 3.07676H4.33398C2.67713 3.07676 1.33398 4.41991 1.33398 6.07676C1.33398 7.73362 2.67713 9.07676 4.33398 9.07676H6.83398C8.01158 9.07676 9.45212 9.70802 10.5635 10.3139C11.2119 10.6673 11.536 10.844 11.7484 10.818C11.9452 10.7939 12.0941 10.7055 12.2095 10.5442C12.334 10.3702 12.334 10.0221 12.334 9.32589V2.82762C12.334 2.13143 12.334 1.78333 12.2095 1.60936C12.0941 1.44803 11.9452 1.35963 11.7484 1.33552C11.536 1.30951 11.2119 1.48623 10.5635 1.83967C9.45212 2.4455 8.01158 3.07676 6.83398 3.07676Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-site_analytics":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14H3.06667C2.6933 14 2.50661 14 2.36401 13.9273C2.23857 13.8634 2.13658 13.7615 2.07266 13.636C2 13.4934 2 13.3067 2 12.9333V2M14 4.66667L10.3771 8.28953C10.2451 8.42153 10.1791 8.48753 10.103 8.51227C10.0361 8.53407 9.96393 8.53407 9.897 8.51227C9.82087 8.48753 9.75487 8.42153 9.62287 8.28953L8.37713 7.0438C8.24513 6.9118 8.17913 6.8458 8.103 6.82107C8.03607 6.79927 7.96393 6.79927 7.897 6.82107C7.82087 6.8458 7.75487 6.9118 7.62287 7.0438L4.66667 10M14 4.66667H11.3333M14 4.66667V7.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-consent":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33268 1.51294V4.26663C9.33268 4.64 9.33268 4.82669 9.40535 4.96929C9.46928 5.09473 9.57122 5.19672 9.69668 5.26064C9.83928 5.3333 10.0259 5.3333 10.3993 5.3333H13.153M5.99935 10.6666L7.33268 11.9999L10.3327 8.99992M9.33268 1.33325H5.86602C4.74591 1.33325 4.18586 1.33325 3.75804 1.55124C3.38171 1.74299 3.07575 2.04895 2.884 2.42527C2.66602 2.85309 2.66602 3.41315 2.66602 4.53325V11.4666C2.66602 12.5867 2.66602 13.1467 2.884 13.5746C3.07575 13.9509 3.38171 14.2569 3.75804 14.4486C4.18586 14.6666 4.74591 14.6666 5.86602 14.6666H10.1327C11.2528 14.6666 11.8128 14.6666 12.2407 14.4486C12.617 14.2569 12.9229 13.9509 13.1147 13.5746C13.3327 13.1467 13.3327 12.5867 13.3327 11.4666V5.33325L9.33268 1.33325Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-essential":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33268 7.33301H5.33268M6.66602 9.99967H5.33268M10.666 4.66634H5.33268M13.3327 4.53301V11.4663C13.3327 12.5865 13.3327 13.1465 13.1147 13.5743C12.9229 13.9507 12.617 14.2566 12.2407 14.4483C11.8128 14.6663 11.2528 14.6663 10.1327 14.6663H5.86602C4.74591 14.6663 4.18586 14.6663 3.75804 14.4483C3.38171 14.2566 3.07575 13.9507 2.884 13.5743C2.66602 13.1465 2.66602 12.5865 2.66602 11.4663V4.53301C2.66602 3.4129 2.66602 2.85285 2.884 2.42503C3.07575 2.0487 3.38171 1.74274 3.75804 1.55099C4.18586 1.33301 4.74591 1.33301 5.86602 1.33301H10.1327C11.2528 1.33301 11.8128 1.33301 12.2407 1.55099C12.617 1.74274 12.9229 2.0487 13.1147 2.42503C13.3327 2.85285 13.3327 3.4129 13.3327 4.53301Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-hosting":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.00065 3.99992H4.00732M4.00065 11.9999H4.00732M3.46732 6.66658H12.534C13.2807 6.66658 13.6541 6.66659 13.9393 6.52126C14.1902 6.39343 14.3942 6.18946 14.522 5.93857C14.6673 5.65336 14.6673 5.27999 14.6673 4.53325V3.46659C14.6673 2.71985 14.6673 2.34648 14.522 2.06127C14.3942 1.81038 14.1902 1.60641 13.9393 1.47858C13.6541 1.33325 13.2807 1.33325 12.534 1.33325H3.46732C2.72058 1.33325 2.34721 1.33325 2.062 1.47858C1.81111 1.60641 1.60714 1.81038 1.47931 2.06127C1.33398 2.34648 1.33398 2.71985 1.33398 3.46659V4.53325C1.33398 5.27999 1.33398 5.65336 1.47931 5.93857C1.60714 6.18946 1.81111 6.39343 2.062 6.52126C2.34721 6.66659 2.72058 6.66658 3.46732 6.66658ZM3.46732 14.6666H12.534C13.2807 14.6666 13.6541 14.6666 13.9393 14.5213C14.1902 14.3935 14.3942 14.1895 14.522 13.9386C14.6673 13.6534 14.6673 13.28 14.6673 12.5333V11.4666C14.6673 10.7199 14.6673 10.3465 14.522 10.0613C14.3942 9.81038 14.1902 9.60639 13.9393 9.47859C13.6541 9.33325 13.2807 9.33325 12.534 9.33325H3.46732C2.72058 9.33325 2.34721 9.33325 2.062 9.47859C1.81111 9.60639 1.60714 9.81038 1.47931 10.0613C1.33398 10.3465 1.33398 10.7199 1.33398 11.4666V12.5333C1.33398 13.28 1.33398 13.6534 1.47931 13.9386C1.60714 14.1895 1.81111 14.3935 2.062 14.5213C2.34721 14.6666 2.72058 14.6666 3.46732 14.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-customer_interaction":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.00065 2.33301V1.33301M3.37442 3.37345L2.66732 2.66634M3.37442 8.66634L2.66732 9.37347M8.66732 3.37345L9.37445 2.66634M2.33398 5.99967H1.33398M10.577 10.7927L8.91578 13.8777C8.72605 14.2301 8.63112 14.4063 8.51698 14.4509C8.41792 14.4896 8.30632 14.4787 8.21665 14.4215C8.11325 14.3557 8.05438 14.1644 7.93652 13.7819L5.63078 6.29651C5.53452 5.98401 5.48638 5.82776 5.52511 5.72223C5.55884 5.63031 5.63128 5.55787 5.7232 5.52414C5.82874 5.48541 5.98498 5.53354 6.29748 5.6298L13.7828 7.93554C14.1653 8.05341 14.3566 8.11234 14.4225 8.21567C14.4797 8.30541 14.4905 8.41694 14.4519 8.51601C14.4073 8.63021 14.231 8.72507 13.8786 8.91487L10.7937 10.576C10.7413 10.6042 10.7151 10.6183 10.6923 10.6364C10.6719 10.6525 10.6535 10.6709 10.6374 10.6913C10.6193 10.7141 10.6052 10.7403 10.577 10.7927Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-unidentified":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.66732 4.66667L7.92365 3.17928C7.70958 2.7512 7.60258 2.53715 7.44292 2.38077C7.30172 2.24249 7.13152 2.13731 6.94472 2.07287C6.73345 2 6.49412 2 6.01551 2H3.46732C2.72058 2 2.34721 2 2.062 2.14533C1.81111 2.27315 1.60714 2.47713 1.47931 2.72801C1.33398 3.01323 1.33398 3.3866 1.33398 4.13333V4.66667M6.56738 7.8348C6.68485 7.50093 6.91672 7.21933 7.22185 7.04C7.52705 6.8606 7.88585 6.79507 8.23472 6.85493C8.58358 6.91473 8.90005 7.09613 9.12798 7.36693C9.35598 7.63773 9.48072 7.98047 9.48018 8.33447C9.48018 9.33373 7.98132 9.83333 7.98132 9.83333M8.00065 11.8333H8.00732M1.33398 4.66667H11.4673C12.5875 4.66667 13.1475 4.66667 13.5753 4.88465C13.9516 5.0764 14.2576 5.38236 14.4493 5.75869C14.6673 6.18651 14.6673 6.74653 14.6673 7.86667V10.8C14.6673 11.9201 14.6673 12.4801 14.4493 12.908C14.2576 13.2843 13.9516 13.5903 13.5753 13.782C13.1475 14 12.5875 14 11.4673 14H4.53398C3.41388 14 2.85382 14 2.426 13.782C2.04968 13.5903 1.74372 13.2843 1.55197 12.908C1.33398 12.4801 1.33398 11.9201 1.33398 10.8V4.66667Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-audio_video_player":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.33398 5.97691C6.33398 5.65872 6.33398 5.49963 6.40048 5.41081C6.45842 5.3334 6.54712 5.28498 6.64357 5.27809C6.75425 5.27019 6.88805 5.35621 7.15572 5.52828L10.3028 7.55142C10.5351 7.70069 10.6512 7.77535 10.6913 7.87029C10.7263 7.95322 10.7263 8.04682 10.6913 8.12975C10.6512 8.22469 10.5351 8.29935 10.3028 8.44862L7.15572 10.4718C6.88805 10.6438 6.75425 10.7299 6.64357 10.722C6.54712 10.7151 6.45842 10.6666 6.40048 10.5892C6.33398 10.5004 6.33398 10.3414 6.33398 10.0232V5.97691Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1 5.2C1 4.07989 1 3.51984 1.25432 3.09202C1.47802 2.71569 1.83498 2.40973 2.27402 2.21799C2.77315 2 3.42654 2 4.73333 2H11.2667C12.5735 2 13.2268 2 13.726 2.21799C14.1651 2.40973 14.522 2.71569 14.7457 3.09202C15 3.51984 15 4.07989 15 5.2V10.8C15 11.9201 15 12.4801 14.7457 12.908C14.522 13.2843 14.1651 13.5903 13.726 13.782C13.2268 14 12.5735 14 11.2667 14H4.73333C3.42654 14 2.77315 14 2.27402 13.782C1.83498 13.5903 1.47802 13.2843 1.25432 12.908C1 12.4801 1 11.9201 1 10.8V5.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-cdn":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00065 1.33325C9.66818 3.15882 10.6159 5.52794 10.6673 7.99992C10.6159 10.4719 9.66818 12.841 8.00065 14.6666M8.00065 1.33325C6.33313 3.15882 5.38548 5.52794 5.33398 7.99992C5.38548 10.4719 6.33313 12.841 8.00065 14.6666M8.00065 1.33325C4.31875 1.33325 1.33398 4.31802 1.33398 7.99992C1.33398 11.6818 4.31875 14.6666 8.00065 14.6666M8.00065 1.33325C11.6825 1.33325 14.6673 4.31802 14.6673 7.99992C14.6673 11.6818 11.6825 14.6666 8.00065 14.6666M1.66733 5.99992H14.334M1.66732 9.99992H14.334" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-comments":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.06356 7.48578C4.02212 7.21872 4.00062 6.94518 4.00062 6.66658C4.00062 3.72107 6.40415 1.33325 9.36905 1.33325C12.3339 1.33325 14.7375 3.72107 14.7375 6.66658C14.7375 7.33198 14.6148 7.96892 14.3908 8.55625C14.3442 8.67825 14.3209 8.73925 14.3104 8.78685C14.2999 8.83405 14.2958 8.86725 14.2947 8.91558C14.2936 8.96432 14.3002 9.01805 14.3135 9.12545L14.5818 11.3056C14.6109 11.5416 14.6254 11.6596 14.5861 11.7454C14.5517 11.8206 14.4906 11.8803 14.4147 11.9129C14.328 11.9502 14.2104 11.9329 13.9751 11.8985L11.8517 11.5872C11.7407 11.5709 11.6853 11.5628 11.6348 11.5631C11.5849 11.5634 11.5503 11.5671 11.5014 11.5773C11.452 11.5877 11.3889 11.6114 11.2627 11.6587C10.6738 11.8793 10.0356 11.9999 9.36905 11.9999C9.09025 11.9999 8.81645 11.9788 8.54912 11.9381M5.08837 14.6666C7.06498 14.6666 8.66732 13.025 8.66732 10.9999C8.66732 8.97485 7.06498 7.33325 5.08837 7.33325C3.11177 7.33325 1.50942 8.97485 1.50942 10.9999C1.50942 11.407 1.57417 11.7985 1.69368 12.1644C1.7442 12.3191 1.76946 12.3964 1.77776 12.4492C1.78641 12.5044 1.78792 12.5353 1.7847 12.5911C1.78162 12.6445 1.76826 12.7048 1.74154 12.8255L1.33398 14.6666L3.33052 14.3939C3.4395 14.3791 3.49398 14.3716 3.54156 14.3719C3.59166 14.3723 3.61826 14.375 3.66739 14.3848C3.71405 14.3941 3.78342 14.4185 3.92216 14.4675C4.28771 14.5965 4.68006 14.6666 5.08837 14.6666Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-email":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.334 12.0001L9.90538 8.00008M6.09589 8.00008L1.66734 12.0001M1.33398 4.66675L6.77725 8.47701C7.21805 8.78561 7.43845 8.93988 7.67818 8.99961C7.88992 9.05241 8.11138 9.05241 8.32312 8.99961C8.56285 8.93988 8.78325 8.78561 9.22405 8.47701L14.6673 4.66675M4.53398 13.3334H11.4673C12.5875 13.3334 13.1475 13.3334 13.5753 13.1154C13.9516 12.9237 14.2576 12.6177 14.4493 12.2414C14.6673 11.8135 14.6673 11.2535 14.6673 10.1334V5.86675C14.6673 4.74664 14.6673 4.18659 14.4493 3.75877C14.2576 3.38244 13.9516 3.07648 13.5753 2.88473C13.1475 2.66675 12.5875 2.66675 11.4673 2.66675H4.53398C3.41388 2.66675 2.85382 2.66675 2.426 2.88473C2.04968 3.07648 1.74372 3.38244 1.55197 3.75877C1.33398 4.18659 1.33398 4.74664 1.33398 5.86675V10.1334C1.33398 11.2535 1.33398 11.8135 1.55197 12.2414C1.74372 12.6177 2.04968 12.9237 2.426 13.1154C2.85382 13.3334 3.41388 13.3334 4.53398 13.3334Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-extensions":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.00065 3.00004C5.00065 2.07957 5.74684 1.33337 6.66732 1.33337C7.58778 1.33337 8.33398 2.07957 8.33398 3.00004V4.00004H9.00065C9.93252 4.00004 10.3985 4.00004 10.7661 4.15228C11.2561 4.35527 11.6455 4.74462 11.8484 5.23467C12.0007 5.60221 12.0007 6.06816 12.0007 7.00004H13.0007C13.9211 7.00004 14.6673 7.74624 14.6673 8.66671C14.6673 9.58717 13.9211 10.3334 13.0007 10.3334H12.0007V11.4667C12.0007 12.5868 12.0007 13.1468 11.7827 13.5747C11.5909 13.951 11.285 14.257 10.9087 14.4487C10.4808 14.6667 9.92078 14.6667 8.80065 14.6667H8.33398V13.5C8.33398 12.6716 7.66238 12 6.83398 12C6.00556 12 5.33398 12.6716 5.33398 13.5V14.6667H4.53398C3.41388 14.6667 2.85382 14.6667 2.426 14.4487C2.04968 14.257 1.74372 13.951 1.55197 13.5747C1.33398 13.1468 1.33398 12.5868 1.33398 11.4667V10.3334H2.33398C3.25446 10.3334 4.00065 9.58717 4.00065 8.66671C4.00065 7.74624 3.25446 7.00004 2.33398 7.00004H1.33398C1.33398 6.06816 1.33398 5.60221 1.48622 5.23467C1.68921 4.74462 2.07856 4.35527 2.56862 4.15228C2.93616 4.00004 3.4021 4.00004 4.33398 4.00004H5.00065V3.00004Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-misc":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 8H5.00667M8 8H8.00667M11 8H11.0067M5.33333 8C5.33333 8.18407 5.18409 8.33333 5 8.33333C4.81591 8.33333 4.66667 8.18407 4.66667 8C4.66667 7.81593 4.81591 7.66667 5 7.66667C5.18409 7.66667 5.33333 7.81593 5.33333 8ZM8.33333 8C8.33333 8.18407 8.18407 8.33333 8 8.33333C7.81593 8.33333 7.66667 8.18407 7.66667 8C7.66667 7.81593 7.81593 7.66667 8 7.66667C8.18407 7.66667 8.33333 7.81593 8.33333 8ZM11.3333 8C11.3333 8.18407 11.1841 8.33333 11 8.33333C10.8159 8.33333 10.6667 8.18407 10.6667 8C10.6667 7.81593 10.8159 7.66667 11 7.66667C11.1841 7.66667 11.3333 7.81593 11.3333 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-pornvertising":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33398 6.2V9.8C1.33398 10.9201 1.33398 11.4801 1.55197 11.908C1.74372 12.2843 2.04968 12.5903 2.426 12.782C2.85382 13 3.41388 13 4.53398 13H11.4673C12.5875 13 13.1474 13 13.5753 12.782C13.9516 12.5903 14.2576 12.2843 14.4493 11.908C14.6673 11.4801 14.6673 10.9201 14.6673 9.8V6.2C14.6673 5.07989 14.6673 4.51985 14.4493 4.09202C14.2576 3.71569 13.9516 3.40973 13.5753 3.21799C13.1474 3 12.5875 3 11.4673 3H4.53398C3.41388 3 2.85382 3 2.426 3.21799C2.04968 3.40973 1.74372 3.71569 1.55197 4.09202C1.33398 4.51984 1.33398 5.07989 1.33398 6.2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.5 7L5.3 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.10156 7L8.90156 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.6992 7L12.4992 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.30078 7L3.50078 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.89844 7L7.09844 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12.5 7L10.7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-social_media":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.66667 8.33333C5.66667 8.33333 6.54167 9.33333 8 9.33333C9.45833 9.33333 10.3333 8.33333 10.3333 8.33333M9.83333 5H9.84M6.16667 5H6.17333M4.66667 12V13.557C4.66667 13.9123 4.66667 14.0899 4.73949 14.1811C4.80281 14.2604 4.89885 14.3066 5.00036 14.3065C5.11709 14.3063 5.25578 14.1954 5.53317 13.9735L7.12347 12.7012C7.44833 12.4413 7.6108 12.3114 7.79167 12.219C7.95213 12.137 8.12293 12.0771 8.29947 12.0409C8.49847 12 8.70647 12 9.12247 12H10.8C11.9201 12 12.4801 12 12.908 11.782C13.2843 11.5903 13.5903 11.2843 13.782 10.908C14 10.4801 14 9.92013 14 8.8V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4801 2 11.9201 2 10.8 2H5.2C4.07989 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V9.33333C2 9.95333 2 10.2633 2.06815 10.5177C2.25308 11.2078 2.79218 11.7469 3.48236 11.9319C3.73669 12 4.04669 12 4.66667 12ZM10.1667 5C10.1667 5.18409 10.0174 5.33333 9.83333 5.33333C9.64927 5.33333 9.5 5.18409 9.5 5C9.5 4.81591 9.64927 4.66667 9.83333 4.66667C10.0174 4.66667 10.1667 4.81591 10.1667 5ZM6.5 5C6.5 5.18409 6.35076 5.33333 6.16667 5.33333C5.98257 5.33333 5.83333 5.18409 5.83333 5C5.83333 4.81591 5.98257 4.66667 6.16667 4.66667C6.35076 4.66667 6.5 4.81591 6.5 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"category-telemetry":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.00065" cy="8.00004" r="6.66667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.66602 8.66667H4.66602L5.99935 7L7.99935 11L10.3327 5L11.9993 8.66667H14.3327" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,chart:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00065 1.33325C8.87612 1.33325 9.74305 1.50569 10.5519 1.84073C11.3607 2.17575 12.0957 2.66682 12.7147 3.28587C13.3338 3.90493 13.8249 4.63986 14.1599 5.4487C14.4949 6.25754 14.6673 7.12445 14.6673 7.99992M8.00065 1.33325V7.99992M8.00065 1.33325C4.31875 1.33325 1.33398 4.31802 1.33398 7.99992C1.33398 11.6818 4.31875 14.6666 8.00065 14.6666C11.6825 14.6666 14.6673 11.6819 14.6673 7.99992M8.00065 1.33325C11.6825 1.33325 14.6673 4.31803 14.6673 7.99992M14.6673 7.99992H8.00065M14.6673 7.99992C14.6673 9.05198 14.4183 10.0891 13.9407 11.0265C13.4631 11.9639 12.7704 12.775 11.9192 13.3934L8.00065 7.99992" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,check:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3337 4L6.00033 11.3333L2.66699 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,close:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,copy:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33398 5.33301V3.46634C5.33398 2.71961 5.33398 2.34623 5.47931 2.06102C5.60714 1.81013 5.81111 1.60616 6.062 1.47833C6.34721 1.33301 6.72058 1.33301 7.46732 1.33301H12.534C13.2807 1.33301 13.6541 1.33301 13.9393 1.47833C14.1902 1.60616 14.3942 1.81013 14.522 2.06102C14.6673 2.34623 14.6673 2.71961 14.6673 3.46634V8.53301C14.6673 9.27974 14.6673 9.65314 14.522 9.93834C14.3942 10.1892 14.1902 10.3932 13.9393 10.521C13.6541 10.6663 13.2807 10.6663 12.534 10.6663H10.6673M3.46732 14.6663H8.53398C9.28072 14.6663 9.65412 14.6663 9.93932 14.521C10.1902 14.3932 10.3942 14.1892 10.522 13.9383C10.6673 13.6531 10.6673 13.2797 10.6673 12.533V7.46634C10.6673 6.71961 10.6673 6.34623 10.522 6.06102C10.3942 5.81013 10.1902 5.60616 9.93932 5.47833C9.65412 5.33301 9.28072 5.33301 8.53398 5.33301H3.46732C2.72058 5.33301 2.34721 5.33301 2.062 5.47833C1.81111 5.60616 1.60714 5.81013 1.47931 6.06102C1.33398 6.34623 1.33398 6.71961 1.33398 7.46634V12.533C1.33398 13.2797 1.33398 13.6531 1.47931 13.9383C1.60714 14.1892 1.81111 14.3932 2.062 14.521C2.34721 14.6663 2.72058 14.6663 3.46732 14.6663Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"extension-chrome":e.dy`
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10.748H19.5V6.74805C19.5 5.64404 18.604 4.74805 17.5 4.74805H13.5V3.24805C13.5 1.86707 12.381 0.748047 11 0.748047C9.61899 0.748047 8.5 1.86707 8.5 3.24805V4.74805H4.5C3.396 4.74805 2.51001 5.64404 2.51001 6.74805L2.50699 10.548H4C5.491 10.548 6.70001 11.757 6.70001 13.248C6.70001 14.7391 5.491 15.9481 4 15.9481H2.50299L2.5 19.748C2.5 20.8521 3.396 21.748 4.5 21.748H8.29999V20.248C8.29999 18.757 9.509 17.548 11 17.548C12.491 17.548 13.7 18.757 13.7 20.248V21.748H17.5C18.604 21.748 19.5 20.8521 19.5 19.748V15.748H21C22.381 15.748 23.5 14.629 23.5 13.248C23.5 11.8671 22.381 10.748 21 10.748Z" fill="currentColor"/>
    </svg>
  `,"extension-firefox":e.dy`
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_4388_64152" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 3.68555C8.5 1.78707 10.039 0.248047 11.9375 0.248047C13.836 0.248047 15.375 1.78707 15.375 3.68555V5.74805H18.125C19.6438 5.74805 20.875 6.97926 20.875 8.49805V19.498C20.875 21.0168 19.6438 22.248 18.125 22.248H5.75C4.23122 22.248 3 21.0168 3 19.498V15.373H6.4375C7.57659 15.373 8.5 14.4496 8.5 13.3105C8.5 12.1715 7.57659 11.248 6.4375 11.248H3V8.49805C3 6.97926 4.23122 5.74805 5.75 5.74805H8.5V3.68555Z"/>
      </mask>
      <path d="M15.375 5.74805H13.375V7.74805H15.375V5.74805ZM3 15.373V13.373H1V15.373H3ZM3 11.248H1V13.248H3V11.248ZM8.5 5.74805V7.74805H10.5V5.74805H8.5ZM11.9375 -1.75195C8.93445 -1.75195 6.5 0.682499 6.5 3.68555H10.5C10.5 2.89164 11.1436 2.24805 11.9375 2.24805V-1.75195ZM17.375 3.68555C17.375 0.682499 14.9405 -1.75195 11.9375 -1.75195V2.24805C12.7314 2.24805 13.375 2.89164 13.375 3.68555H17.375ZM17.375 5.74805V3.68555H13.375V5.74805H17.375ZM18.125 3.74805H15.375V7.74805H18.125V3.74805ZM22.875 8.49805C22.875 5.87469 20.7484 3.74805 18.125 3.74805V7.74805C18.5392 7.74805 18.875 8.08383 18.875 8.49805H22.875ZM22.875 19.498V8.49805H18.875V19.498H22.875ZM18.125 24.248C20.7484 24.248 22.875 22.1214 22.875 19.498H18.875C18.875 19.9123 18.5392 20.248 18.125 20.248V24.248ZM5.75 24.248H18.125V20.248H5.75V24.248ZM1 19.498C1 22.1214 3.12665 24.248 5.75 24.248V20.248C5.33579 20.248 5 19.9123 5 19.498H1ZM1 15.373V19.498H5V15.373H1ZM6.4375 13.373H3V17.373H6.4375V13.373ZM6.5 13.3105C6.5 13.3229 6.4979 13.3296 6.49591 13.3343C6.49336 13.3403 6.4888 13.3476 6.48169 13.3547C6.47459 13.3618 6.46724 13.3664 6.46121 13.369C6.45652 13.3709 6.44982 13.373 6.4375 13.373V17.373C8.68116 17.373 10.5 15.5542 10.5 13.3105H6.5ZM6.4375 13.248C6.44982 13.248 6.45652 13.2502 6.46121 13.2521C6.46724 13.2547 6.47459 13.2592 6.48169 13.2664C6.4888 13.2735 6.49336 13.2808 6.49591 13.2868C6.4979 13.2915 6.5 13.2982 6.5 13.3105H10.5C10.5 11.0669 8.68116 9.24805 6.4375 9.24805V13.248ZM3 13.248H6.4375V9.24805H3V13.248ZM1 8.49805V11.248H5V8.49805H1ZM5.75 3.74805C3.12665 3.74805 1 5.87469 1 8.49805H5C5 8.08383 5.33579 7.74805 5.75 7.74805V3.74805ZM8.5 3.74805H5.75V7.74805H8.5V3.74805ZM6.5 3.68555V5.74805H10.5V3.68555H6.5Z" fill="currentColor" mask="url(#path-1-inside-1_4388_64152)"/>
    </svg>
  `,"extension-edge":e.dy`
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1_4388_64267" fill="white">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 3.99805C10.25 2.47926 11.4812 1.24805 13 1.24805C14.5188 1.24805 15.75 2.47926 15.75 3.99805H19.875C20.6344 3.99805 21.25 4.61366 21.25 5.37305V10.873H19.505C18.7456 10.873 18.13 11.4887 18.13 12.248C18.13 13.0074 18.7456 13.623 19.505 13.623H21.25V19.123C21.25 19.8824 20.6344 20.498 19.875 20.498H15.75C15.75 22.0168 14.5188 23.248 13 23.248C11.4812 23.248 10.25 22.0168 10.25 20.498H6.125C5.36561 20.498 4.75 19.8824 4.75 19.123V14.998C3.23122 14.998 2 13.7668 2 12.248C2 10.7293 3.23122 9.49805 4.75 9.49805V5.37305C4.75 4.61366 5.36561 3.99805 6.125 3.99805H10.25Z"/>
      </mask>
      <path d="M10.25 3.99805V5.49805H11.75V3.99805H10.25ZM15.75 3.99805H14.25V5.49805H15.75V3.99805ZM21.25 10.873V12.373H22.75V10.873H21.25ZM21.25 13.623H22.75V12.123H21.25V13.623ZM15.75 20.498V18.998H14.25V20.498H15.75ZM10.25 20.498H11.75V18.998H10.25V20.498ZM4.75 14.998H6.25V13.498H4.75V14.998ZM4.75 9.49805V10.998H6.25V9.49805H4.75ZM13 -0.251953C10.6528 -0.251953 8.75 1.65084 8.75 3.99805H11.75C11.75 3.30769 12.3096 2.74805 13 2.74805V-0.251953ZM17.25 3.99805C17.25 1.65084 15.3472 -0.251953 13 -0.251953V2.74805C13.6904 2.74805 14.25 3.30769 14.25 3.99805H17.25ZM19.875 2.49805H15.75V5.49805H19.875V2.49805ZM22.75 5.37305C22.75 3.78523 21.4628 2.49805 19.875 2.49805V5.49805C19.806 5.49805 19.75 5.44208 19.75 5.37305H22.75ZM22.75 10.873V5.37305H19.75V10.873H22.75ZM19.505 12.373H21.25V9.37305H19.505V12.373ZM19.63 12.248C19.63 12.3171 19.574 12.373 19.505 12.373V9.37305C17.9172 9.37305 16.63 10.6602 16.63 12.248H19.63ZM19.505 12.123C19.574 12.123 19.63 12.179 19.63 12.248H16.63C16.63 13.8359 17.9172 15.123 19.505 15.123V12.123ZM21.25 12.123H19.505V15.123H21.25V12.123ZM22.75 19.123V13.623H19.75V19.123H22.75ZM19.875 21.998C21.4628 21.998 22.75 20.7109 22.75 19.123H19.75C19.75 19.054 19.806 18.998 19.875 18.998V21.998ZM15.75 21.998H19.875V18.998H15.75V21.998ZM13 24.748C15.3472 24.748 17.25 22.8453 17.25 20.498H14.25C14.25 21.1884 13.6904 21.748 13 21.748V24.748ZM8.75 20.498C8.75 22.8453 10.6528 24.748 13 24.748V21.748C12.3096 21.748 11.75 21.1884 11.75 20.498H8.75ZM6.125 21.998H10.25V18.998H6.125V21.998ZM3.25 19.123C3.25 20.7109 4.53718 21.998 6.125 21.998V18.998C6.19404 18.998 6.25 19.054 6.25 19.123H3.25ZM3.25 14.998V19.123H6.25V14.998H3.25ZM0.5 12.248C0.5 14.5953 2.40279 16.498 4.75 16.498V13.498C4.05964 13.498 3.5 12.9384 3.5 12.248H0.5ZM4.75 7.99805C2.40279 7.99805 0.5 9.90084 0.5 12.248H3.5C3.5 11.5577 4.05964 10.998 4.75 10.998V7.99805ZM3.25 5.37305V9.49805H6.25V5.37305H3.25ZM6.125 2.49805C4.53718 2.49805 3.25 3.78523 3.25 5.37305H6.25C6.25 5.44208 6.19404 5.49805 6.125 5.49805V2.49805ZM10.25 2.49805H6.125V5.49805H10.25V2.49805Z" fill="currentColor" mask="url(#path-1-inside-1_4388_64267)"/>
    </svg>
  `,"extension-opera":e.dy`
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.5 7.52637L12 12.2486M12 12.2486L3.49997 7.52637M12 12.2486V21.7486M21 16.3071V8.19007C21 7.84743 21 7.67611 20.9495 7.52331C20.9049 7.38813 20.8318 7.26405 20.7354 7.15936C20.6263 7.04102 20.4766 6.95782 20.177 6.79142L12.777 2.68031C12.4934 2.52275 12.3516 2.44397 12.2015 2.41308C12.0685 2.38575 11.9315 2.38575 11.7986 2.41308C11.6484 2.44397 11.5066 2.52275 11.223 2.68031L3.82297 6.79142C3.52345 6.95782 3.37369 7.04102 3.26463 7.15936C3.16816 7.26405 3.09515 7.38813 3.05048 7.52331C3 7.67611 3 7.84743 3 8.19007V16.3071C3 16.6498 3 16.8211 3.05048 16.9739C3.09515 17.1091 3.16816 17.2332 3.26463 17.3378C3.37369 17.4562 3.52345 17.5394 3.82297 17.7058L11.223 21.8169C11.5066 21.9745 11.6484 22.0532 11.7986 22.0841C11.9315 22.1115 12.0685 22.1115 12.2015 22.0841C12.3516 22.0532 12.4934 21.9745 12.777 21.8169L20.177 17.7058C20.4766 17.5394 20.6263 17.4562 20.7354 17.3378C20.8318 17.2332 20.9049 17.1091 20.9495 16.9739C21 16.8211 21 16.6498 21 16.3071Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,globe:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33398 7.99967H14.6673M1.33398 7.99967C1.33398 11.6815 4.31875 14.6663 8.00065 14.6663M1.33398 7.99967C1.33398 4.31777 4.31875 1.33301 8.00065 1.33301M14.6673 7.99967C14.6673 11.6815 11.6825 14.6663 8.00065 14.6663M14.6673 7.99967C14.6673 4.31777 11.6825 1.33301 8.00065 1.33301M8.00065 1.33301C9.66818 3.15857 10.6159 5.52769 10.6673 7.99967C10.6159 10.4717 9.66818 12.8407 8.00065 14.6663M8.00065 1.33301C6.33313 3.15857 5.38548 5.52769 5.33398 7.99967C5.38548 10.4717 6.33313 12.8407 8.00065 14.6663" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,heart:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,info:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00065 10.6663V7.99967M8.00065 5.33301H8.00732M14.6673 7.99967C14.6673 11.6815 11.6825 14.6663 8.00065 14.6663C4.31875 14.6663 1.33398 11.6815 1.33398 7.99967C1.33398 4.31777 4.31875 1.33301 8.00065 1.33301C11.6825 1.33301 14.6673 4.31777 14.6673 7.99967Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"info-menu":e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 14V10.5M12 7H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,help:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,mail:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.33398 4.66699L6.77725 8.47726C7.21805 8.78586 7.43845 8.94013 7.67818 8.99986C7.88992 9.05266 8.11138 9.05266 8.32312 8.99986C8.56285 8.94013 8.78325 8.78586 9.22405 8.47726L14.6673 4.66699M4.53398 13.3337H11.4673C12.5875 13.3337 13.1475 13.3337 13.5753 13.1157C13.9516 12.9239 14.2576 12.618 14.4493 12.2417C14.6673 11.8138 14.6673 11.2538 14.6673 10.1337V5.86699C14.6673 4.74689 14.6673 4.18683 14.4493 3.75901C14.2576 3.38269 13.9516 3.07673 13.5753 2.88498C13.1475 2.66699 12.5875 2.66699 11.4673 2.66699H4.53398C3.41388 2.66699 2.85382 2.66699 2.426 2.88498C2.04968 3.07673 1.74372 3.38269 1.55197 3.75901C1.33398 4.18683 1.33398 4.74689 1.33398 5.86699V10.1337C1.33398 11.2538 1.33398 11.8138 1.55197 12.2417C1.74372 12.618 2.04968 12.9239 2.426 13.1157C2.85382 13.3337 3.41388 13.3337 4.53398 13.3337Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,menu:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,list:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 7.99992H6M14 3.99992H6M14 11.9999H6M3.33333 7.99992C3.33333 8.36812 3.03485 8.66658 2.66667 8.66658C2.29848 8.66658 2 8.36812 2 7.99992C2 7.63172 2.29848 7.33325 2.66667 7.33325C3.03485 7.33325 3.33333 7.63172 3.33333 7.99992ZM3.33333 3.99992C3.33333 4.36811 3.03485 4.66659 2.66667 4.66659C2.29848 4.66659 2 4.36811 2 3.99992C2 3.63173 2.29848 3.33325 2.66667 3.33325C3.03485 3.33325 3.33333 3.63173 3.33333 3.99992ZM3.33333 11.9999C3.33333 12.3681 3.03485 12.6666 2.66667 12.6666C2.29848 12.6666 2 12.3681 2 11.9999C2 11.6317 2.29848 11.3333 2.66667 11.3333C3.03485 11.3333 3.33333 11.6317 3.33333 11.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"onboarding-adblocking":e.dy`
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.66667 17.4868L7.7662 25.885C7.82524 26.1211 7.85476 26.2392 7.88969 26.3423C8.23089 27.3496 9.13803 28.0579 10.198 28.1447C10.3065 28.1535 10.4283 28.1535 10.6717 28.1535C10.9766 28.1535 11.129 28.1535 11.2574 28.1411C12.5267 28.0179 13.5311 27.0135 13.6542 25.7443C13.6667 25.6159 13.6667 25.4634 13.6667 25.1586V6.15353M25 16.8202C27.5773 16.8202 29.6667 14.7308 29.6667 12.1535C29.6667 9.57619 27.5773 7.48686 25 7.48686M14 6.15353H9C5.68629 6.15353 3 8.83982 3 12.1535C3 15.4672 5.68629 18.1535 9 18.1535H14C16.3552 18.1535 19.2363 19.416 21.4591 20.6278C22.7557 21.3346 23.4041 21.688 23.8288 21.636C24.2225 21.5878 24.5203 21.411 24.7511 21.0883C25 20.7404 25 20.0442 25 18.6518V5.65525C25 4.26286 25 3.56666 24.7511 3.21871C24.5203 2.89606 24.2225 2.71926 23.8288 2.67103C23.4041 2.61902 22.7557 2.97246 21.4591 3.67934C19.2363 4.89101 16.3552 6.15353 14 6.15353Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"onboarding-anti-tracking":e.dy`
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9997 15.3339L14.6663 18.0005L20.6663 12.0005M26.6663 16.0005C26.6663 22.5451 19.5277 27.3051 16.9303 28.8203C16.6351 28.9925 16.4875 29.0787 16.2793 29.1233C16.1175 29.158 15.8818 29.158 15.7201 29.1233C15.5118 29.0787 15.3642 28.9925 15.069 28.8203C12.4716 27.3051 5.33301 22.5451 5.33301 16.0005V9.62395C5.33301 8.55794 5.33301 8.02492 5.50735 7.56675C5.66137 7.162 5.91165 6.80086 6.23655 6.51452C6.60434 6.1904 7.10341 6.00326 8.10154 5.62895L15.2506 2.94804C15.5278 2.8441 15.6663 2.79212 15.809 2.77152C15.9354 2.75324 16.0639 2.75324 16.1903 2.77152C16.333 2.79212 16.4715 2.8441 16.7487 2.94804L23.8978 5.62895C24.8959 6.00326 25.395 6.1904 25.7627 6.51452C26.0877 6.80086 26.3379 7.162 26.4919 7.56675C26.6663 8.02492 26.6663 8.55794 26.6663 9.62395V16.0005Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"onboarding-never-consent":e.dy`
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6667 15V20M16.6667 25V25.02" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.66675 6L26.6667 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.6667 2L22.6667 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="2.66675" y="10" width="28" height="20" rx="1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,pause:e.dy`
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.83398 9.99992V5.99992M10.1673 9.99992V5.99992M15.1673 7.99992C15.1673 11.6818 12.1825 14.6666 8.50065 14.6666C4.81875 14.6666 1.83398 11.6818 1.83398 7.99992C1.83398 4.31802 4.81875 1.33325 8.50065 1.33325C12.1825 1.33325 15.1673 4.31802 15.1673 7.99992Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,privacy:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3327 6.33301V4.53301C13.3327 3.4129 13.3327 2.85285 13.1147 2.42503C12.9229 2.0487 12.617 1.74274 12.2407 1.55099C11.8128 1.33301 11.2528 1.33301 10.1327 1.33301H5.86602C4.74591 1.33301 4.18586 1.33301 3.75804 1.55099C3.38171 1.74274 3.07575 2.0487 2.884 2.42503C2.66602 2.85285 2.66602 3.4129 2.66602 4.53301V11.4663C2.66602 12.5865 2.66602 13.1465 2.884 13.5743C3.07575 13.9507 3.38171 14.2566 3.75804 14.4483C4.18586 14.6663 4.74591 14.6663 5.86602 14.6663H9.33268M9.33268 7.33301H5.33268M6.66602 9.99967H5.33268M10.666 4.66634H5.33268M10.9993 10.0011C11.1168 9.66727 11.3487 9.38567 11.6538 9.20634C11.959 9.02694 12.3178 8.96141 12.6667 9.02127C13.0155 9.08107 13.332 9.26247 13.5599 9.53327C13.7879 9.80407 13.9127 10.1468 13.9121 10.5008C13.9121 11.5001 12.4133 11.9997 12.4133 11.9997M12.4326 13.9997H12.4393" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,tracking:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.33333 2H5.2C4.07989 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V5.33333M5.33333 14H5.2C4.07989 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4801 2 11.9201 2 10.8V10.6667M14 5.33333V5.2C14 4.07989 14 3.51984 13.782 3.09202C13.5903 2.71569 13.2843 2.40973 12.908 2.21799C12.4801 2 11.9201 2 10.8 2H10.6667M14 10.6667V10.8C14 11.9201 14 12.4801 13.782 12.908C13.5903 13.2843 13.2843 13.5903 12.908 13.782C12.4801 14 11.9201 14 10.8 14H10.6667M2 8H2.00667M5 8H5.00667M11 8H11.0067M8 8H8.00667M14 8H14.0067" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,triangle:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.9998 9.00023V13.0002M11.9998 17.0002H12.0098M10.6151 3.89195L2.39019 18.0985C1.93398 18.8865 1.70588 19.2805 1.73959 19.6039C1.769 19.8859 1.91677 20.1422 2.14613 20.309C2.40908 20.5002 2.86435 20.5002 3.77487 20.5002H20.2246C21.1352 20.5002 21.5904 20.5002 21.8534 20.309C22.0827 20.1422 22.2305 19.8859 22.2599 19.6039C22.2936 19.2805 22.0655 18.8865 21.6093 18.0985L13.3844 3.89195C12.9299 3.10678 12.7026 2.7142 12.4061 2.58235C12.1474 2.46734 11.8521 2.46734 11.5935 2.58235C11.2969 2.7142 11.0696 3.10679 10.6151 3.89195Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,refresh:e.dy`
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5007 6.66667C14.5007 6.66667 13.164 4.84548 12.0781 3.75883C10.9922 2.67218 9.49158 2 7.83398 2C4.52028 2 1.83398 4.68629 1.83398 8C1.83398 11.3137 4.52028 14 7.83398 14C10.5694 14 12.8773 12.1695 13.5995 9.66667M14.5007 6.66667V2.66667M14.5007 6.66667H10.5007" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,send:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.4995 13.5002L20.9995 3.00017M10.6271 13.8282L13.2552 20.5862C13.4867 21.1816 13.6025 21.4792 13.7693 21.5661C13.9139 21.6415 14.0862 21.6416 14.2308 21.5664C14.3977 21.4797 14.5139 21.1822 14.7461 20.5871L21.3364 3.69937C21.5461 3.16219 21.6509 2.8936 21.5935 2.72197C21.5437 2.57292 21.4268 2.45595 21.2777 2.40616C21.1061 2.34883 20.8375 2.45364 20.3003 2.66327L3.41258 9.25361C2.8175 9.48584 2.51997 9.60195 2.43326 9.76885C2.35809 9.91354 2.35819 10.0858 2.43353 10.2304C2.52043 10.3972 2.81811 10.5129 3.41345 10.7445L10.1715 13.3726C10.2923 13.4196 10.3527 13.4431 10.4036 13.4794C10.4487 13.5115 10.4881 13.551 10.5203 13.5961C10.5566 13.6469 10.5801 13.7074 10.6271 13.8282Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,settings:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,shield:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.3327 8.00026C13.3327 11.2725 9.76335 13.6525 8.46468 14.4101C8.31708 14.4963 8.24328 14.5393 8.13915 14.5617C8.05828 14.579 7.94042 14.579 7.85955 14.5617C7.75542 14.5393 7.68162 14.4963 7.53402 14.4101C6.23532 13.6525 2.66602 11.2725 2.66602 8.00026V4.81197C2.66602 4.27897 2.66602 4.01246 2.75319 3.78337C2.8302 3.581 2.95534 3.40043 3.11779 3.25726C3.30168 3.0952 3.55122 3.00163 4.05028 2.81447L7.62482 1.47402C7.76342 1.42205 7.83268 1.39606 7.90402 1.38576C7.96722 1.37662 8.03148 1.37662 8.09468 1.38576C8.16602 1.39606 8.23528 1.42205 8.37388 1.47402L11.9484 2.81447C12.4475 3.00163 12.697 3.0952 12.8809 3.25726C13.0433 3.40043 13.1685 3.581 13.2455 3.78337C13.3327 4.01246 13.3327 4.27897 13.3327 4.81197V8.00026Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,"shield-menu":e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `,user:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,whotracksme:e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.33268 7.33325H5.33268M6.66602 9.99992H5.33268M10.666 4.66659H5.33268M13.3327 6.99992V4.53325C13.3327 3.41315 13.3327 2.85309 13.1147 2.42527C12.9229 2.04895 12.617 1.74299 12.2407 1.55124C11.8128 1.33325 11.2528 1.33325 10.1327 1.33325H5.86602C4.74591 1.33325 4.18586 1.33325 3.75804 1.55124C3.38171 1.74299 3.07575 2.04895 2.884 2.42527C2.66602 2.85309 2.66602 3.41315 2.66602 4.53325V11.4666C2.66602 12.5867 2.66602 13.1467 2.884 13.5746C3.07575 13.9509 3.38171 14.2569 3.75804 14.4486C4.18586 14.6666 4.74591 14.6666 5.86602 14.6666H7.66602M14.666 14.6666L13.666 13.6666M14.3327 11.9999C14.3327 13.2886 13.288 14.3333 11.9993 14.3333C10.7107 14.3333 9.66602 13.2886 9.66602 11.9999C9.66602 10.7113 10.7107 9.66658 11.9993 9.66658C13.288 9.66658 14.3327 10.7113 14.3327 11.9999Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,trash:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,slogan:e.dy`
    <svg id="slogan" width="117" height="40" viewBox="0 0 117 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="2" height="40" fill="currentColor" />
      <path d="M13.2422 15.2969L15.0625 5.625H16.2656L16.625 7.125L14.6719 17H13.3672L13.2422 15.2969ZM12.6172 5.625L14.0859 15.3203L13.8359 17H12.3984L10.3594 5.625H12.6172ZM17.9453 15.2812L19.4062 5.625H21.6562L19.6328 17H18.1875L17.9453 15.2812ZM16.9609 5.625L18.7969 15.3516L18.6484 17H17.3438L15.3984 7.10938L15.7656 5.625H16.9609ZM29.4453 15.1094V17H24.5V15.1094H29.4453ZM25.2109 5.625V17H22.9219V5.625H25.2109ZM28.7812 10.2344V12.0703H24.5V10.2344H28.7812ZM29.4297 5.625V7.52344H24.5V5.625H29.4297ZM35.2812 5.625H37.2891L39.6094 13.4062L41.9219 5.625H43.6953L40.4609 17H38.75L35.2812 5.625ZM34.4688 5.625H36.3828L36.6797 13.125V17H34.4688V5.625ZM42.8203 5.625H44.7422V17H42.5391V13.125L42.8203 5.625ZM50.8672 7.65625L48.4219 17H46.0078L49.5625 5.625H51.0703L50.8672 7.65625ZM52.7969 17L50.3359 7.65625L50.1094 5.625H51.6406L55.2266 17H52.7969ZM52.8828 12.7578V14.6562H47.75V12.7578H52.8828ZM58.6016 5.625V17H56.3125V5.625H58.6016ZM64.25 5.625L60.5625 11.2734L58.3047 14.0859L57.8672 11.7969L59.3281 9.35938L61.4688 5.625H64.25ZM61.6094 17L59.125 11.7734L60.8047 10.2891L64.3047 17H61.6094ZM71.6953 15.1094V17H66.75V15.1094H71.6953ZM67.4609 5.625V17H65.1719V5.625H67.4609ZM71.0312 10.2344V12.0703H66.75V10.2344H71.0312ZM71.6797 5.625V7.52344H66.75V5.625H71.6797ZM14.7969 28.9922H12.4688V27.0938H14.7969C15.1198 27.0938 15.3828 27.0208 15.5859 26.875C15.7943 26.7292 15.9453 26.5286 16.0391 26.2734C16.1328 26.013 16.1797 25.7214 16.1797 25.3984C16.1797 25.0703 16.1302 24.7656 16.0312 24.4844C15.9375 24.1979 15.7891 23.9661 15.5859 23.7891C15.388 23.612 15.125 23.5234 14.7969 23.5234H13.2031V33H10.9219V21.625H14.7969C15.5625 21.625 16.2214 21.7865 16.7734 22.1094C17.3255 22.4323 17.7474 22.8776 18.0391 23.4453C18.3359 24.0078 18.4844 24.6536 18.4844 25.3828C18.4844 26.1172 18.3359 26.7552 18.0391 27.2969C17.7474 27.8333 17.3255 28.25 16.7734 28.5469C16.2214 28.8438 15.5625 28.9922 14.7969 28.9922ZM20.0234 21.625H23.6719C24.4323 21.625 25.0807 21.7552 25.6172 22.0156C26.1536 22.276 26.5651 22.6615 26.8516 23.1719C27.138 23.6823 27.2812 24.3125 27.2812 25.0625C27.2812 25.6771 27.1979 26.2031 27.0312 26.6406C26.8646 27.0729 26.6276 27.4349 26.3203 27.7266C26.013 28.013 25.6458 28.2422 25.2188 28.4141L24.5234 28.8281H21.5625L21.5547 26.9297H23.6094C23.9219 26.9297 24.1797 26.862 24.3828 26.7266C24.5911 26.5859 24.7448 26.3906 24.8438 26.1406C24.9479 25.8854 25 25.5885 25 25.25C25 24.8906 24.9531 24.5833 24.8594 24.3281C24.7708 24.0677 24.6276 23.8698 24.4297 23.7344C24.237 23.5938 23.9844 23.5234 23.6719 23.5234H22.3125V33H20.0234V21.625ZM25.1875 33L23.1016 27.9297L25.5 27.9219L27.6328 32.8906V33H25.1875ZM31.25 21.625V33H28.9766V21.625H31.25ZM36.7422 30.5703L38.8984 21.625H41.3672L38.0703 33H36.4062L36.7422 30.5703ZM34.8984 21.625L37.0469 30.5703L37.3984 33H35.7266L32.4531 21.625H34.8984ZM45.9766 23.6562L43.5312 33H41.1172L44.6719 21.625H46.1797L45.9766 23.6562ZM47.9062 33L45.4453 23.6562L45.2188 21.625H46.75L50.3359 33H47.9062ZM47.9922 28.7578V30.6562H42.8594V28.7578H47.9922ZM56.6719 29.2109H58.9453C58.9141 30.0651 58.7422 30.7865 58.4297 31.375C58.1172 31.9583 57.6719 32.401 57.0938 32.7031C56.5208 33.0052 55.8281 33.1562 55.0156 33.1562C54.3854 33.1562 53.8255 33.0521 53.3359 32.8438C52.8464 32.6302 52.4297 32.3177 52.0859 31.9062C51.7422 31.4948 51.4818 30.987 51.3047 30.3828C51.1328 29.7734 51.0469 29.0729 51.0469 28.2812V26.3516C51.0469 25.5599 51.138 24.8594 51.3203 24.25C51.5078 23.6406 51.7734 23.1302 52.1172 22.7188C52.4661 22.3021 52.8854 21.9896 53.375 21.7812C53.8698 21.5677 54.4271 21.4609 55.0469 21.4609C55.875 21.4609 56.5677 21.6172 57.125 21.9297C57.6823 22.2422 58.112 22.6979 58.4141 23.2969C58.7214 23.8906 58.9062 24.6172 58.9688 25.4766H56.6875C56.6719 24.9349 56.6094 24.5104 56.5 24.2031C56.3958 23.8906 56.2292 23.6719 56 23.5469C55.7708 23.4167 55.4531 23.3516 55.0469 23.3516C54.7448 23.3516 54.4844 23.4062 54.2656 23.5156C54.0469 23.6198 53.8672 23.7891 53.7266 24.0234C53.5859 24.2578 53.4818 24.5651 53.4141 24.9453C53.3516 25.3255 53.3203 25.7891 53.3203 26.3359V28.2812C53.3203 28.8177 53.349 29.276 53.4062 29.6562C53.4635 30.0312 53.5547 30.3385 53.6797 30.5781C53.8047 30.8177 53.974 30.9922 54.1875 31.1016C54.4062 31.2109 54.6823 31.2656 55.0156 31.2656C55.401 31.2656 55.7109 31.2083 55.9453 31.0938C56.1849 30.9792 56.362 30.7734 56.4766 30.4766C56.5911 30.1797 56.6562 29.7578 56.6719 29.2109ZM62.0625 21.625L63.7969 26.75L65.5156 21.625H68.0078L64.9453 28.8672V33H62.6406V28.8672L59.5781 21.625H62.0625ZM79.2734 31.1094V33H74.3281V31.1094H79.2734ZM75.0391 21.625V33H72.75V21.625H75.0391ZM78.6094 26.2344V28.0703H74.3281V26.2344H78.6094ZM79.2578 21.625V23.5234H74.3281V21.625H79.2578ZM84.7266 23.6562L82.2812 33H79.8672L83.4219 21.625H84.9297L84.7266 23.6562ZM86.6562 33L84.1953 23.6562L83.9688 21.625H85.5L89.0859 33H86.6562ZM86.7422 28.7578V30.6562H81.6094V28.7578H86.7422ZM94.9844 30.0078C94.9844 29.8047 94.9661 29.6198 94.9297 29.4531C94.8932 29.2865 94.8151 29.1328 94.6953 28.9922C94.5807 28.8516 94.4115 28.7109 94.1875 28.5703C93.9688 28.4297 93.6823 28.2839 93.3281 28.1328C92.9062 27.9557 92.4974 27.7682 92.1016 27.5703C91.7057 27.3672 91.349 27.1328 91.0312 26.8672C90.7135 26.6016 90.4609 26.2891 90.2734 25.9297C90.0911 25.5651 90 25.138 90 24.6484C90 24.1693 90.0859 23.7344 90.2578 23.3438C90.4349 22.9531 90.6849 22.6198 91.0078 22.3438C91.3307 22.0625 91.7083 21.8464 92.1406 21.6953C92.5781 21.5443 93.0651 21.4688 93.6016 21.4688C94.3307 21.4688 94.9609 21.6198 95.4922 21.9219C96.0286 22.224 96.4427 22.638 96.7344 23.1641C97.0312 23.6901 97.1797 24.2943 97.1797 24.9766H94.8984C94.8984 24.6536 94.8516 24.3698 94.7578 24.125C94.6693 23.875 94.526 23.6797 94.3281 23.5391C94.1302 23.3984 93.875 23.3281 93.5625 23.3281C93.2708 23.3281 93.0286 23.388 92.8359 23.5078C92.6484 23.6224 92.5078 23.7812 92.4141 23.9844C92.3255 24.1823 92.2812 24.4062 92.2812 24.6562C92.2812 24.8438 92.3255 25.013 92.4141 25.1641C92.5078 25.3099 92.6354 25.4427 92.7969 25.5625C92.9583 25.6771 93.1484 25.7891 93.3672 25.8984C93.5911 26.0078 93.8359 26.1146 94.1016 26.2188C94.6172 26.4219 95.0729 26.6458 95.4688 26.8906C95.8646 27.1302 96.1953 27.401 96.4609 27.7031C96.7266 28 96.9271 28.3359 97.0625 28.7109C97.1979 29.0859 97.2656 29.513 97.2656 29.9922C97.2656 30.4661 97.1823 30.8984 97.0156 31.2891C96.8542 31.6745 96.6172 32.0078 96.3047 32.2891C95.9922 32.5651 95.6146 32.7786 95.1719 32.9297C94.7344 33.0807 94.2448 33.1562 93.7031 33.1562C93.1771 33.1562 92.6797 33.0833 92.2109 32.9375C91.7422 32.7865 91.3281 32.5599 90.9688 32.2578C90.6146 31.9505 90.3359 31.5625 90.1328 31.0938C89.9297 30.6198 89.8281 30.0599 89.8281 29.4141H92.1172C92.1172 29.7578 92.151 30.0521 92.2188 30.2969C92.2865 30.5365 92.3906 30.7292 92.5312 30.875C92.6719 31.0156 92.8438 31.1224 93.0469 31.1953C93.2552 31.263 93.4922 31.2969 93.7578 31.2969C94.0599 31.2969 94.2995 31.2396 94.4766 31.125C94.6589 31.0104 94.7891 30.8568 94.8672 30.6641C94.9453 30.4714 94.9844 30.2526 94.9844 30.0078ZM100.5 21.625L102.234 26.75L103.953 21.625H106.445L103.383 28.8672V33H101.078V28.8672L98.0156 21.625H100.5ZM105.773 31.8828C105.773 31.5391 105.888 31.2526 106.117 31.0234C106.346 30.7891 106.656 30.6719 107.047 30.6719C107.438 30.6719 107.747 30.7891 107.977 31.0234C108.206 31.2526 108.32 31.5391 108.32 31.8828C108.32 32.2266 108.206 32.513 107.977 32.7422C107.747 32.9714 107.438 33.0859 107.047 33.0859C106.656 33.0859 106.346 32.9714 106.117 32.7422C105.888 32.513 105.773 32.2266 105.773 31.8828Z" fill="currentColor" />
    </svg>
  `,search:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21L15.0001 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,warning:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6.75C12.4142 6.75 12.75 7.08579 12.75 7.5V12.75C12.75 13.1642 12.4142 13.5 12 13.5C11.5858 13.5 11.25 13.1642 11.25 12.75V7.5C11.25 7.08579 11.5858 6.75 12 6.75Z" fill="currentColor"/>
      <path d="M13.125 16.125C13.125 16.7463 12.6213 17.25 12 17.25C11.3787 17.25 10.875 16.7463 10.875 16.125C10.875 15.5037 11.3787 15 12 15C12.6213 15 13.125 15.5037 13.125 16.125Z" fill="currentColor"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12ZM12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75Z" fill="currentColor"/>
    </svg>
  `,wtm:e.dy`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6V12.5H1.5V4.5H22.5V19.5H1.5V16.5H2.5V18V18.5H3H21H21.5V18V6V5.5H21H3H2.5V6Z" fill="black" stroke="currentColor"/>
    </svg>
  `,"zoom-in":e.dy`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 13L9.66672 9.66667M10.7778 6.88889C10.7778 9.03667 9.03667 10.7778 6.88889 10.7778C4.74112 10.7778 3 9.03667 3 6.88889C3 4.74112 4.74112 3 6.88889 3C9.03667 3 10.7778 4.74112 10.7778 6.88889Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `}},38191:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={color:"gray-200",render:({color:l})=>e.dy`
    <template layout="block height:1px shrink:0"></template>
  `.css`
    :host {
      background: var(--ui-color-${l});
    }
  `}},62788:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={disabled:!1,href:"",render:({disabled:l,href:M})=>e.dy`
    <template
      layout="column content:center relative"
      layout[disabled]="height::120px"
    >
      ${l&&e.dy`
        <section
          id="disabled"
          layout="column center gap:2 margin absolute inset layer:1"
        >
          <ui-text type="label-m" color="error-500" layout="block:center">
            <ui-icon name="warning" layout="block inline"></ui-icon><br />
            Additional Permissions Required
          </ui-text>
          <ui-text class="button" type="label-m" color="white">
            Enable Ghostery
          </ui-text>
          <a layout="absolute inset layer:3" href="${M}" target="_blank"></a>
        </section>
      `}
      <div id="content"><slot></slot></div>
    </template>
  `.css`

    :host([disabled]) {
      border: 1px dashed var(--ui-color-error-500);
      border-radius: 4px;
    }

    :host([disabled])::before {
      z-index: 1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      backdrop-filter: blur(1px);
      background: rgba(255, 243, 238, 0.8);
    }

    ui-text.button {
      background: #00AEF0;
      border-radius: 2px;
      padding: 8px 12px;
    }

    :host([disabled]) #content {
      z-index: 0;
    }
  `}},86561:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>f});var e=s(72020);const f={type:"body-m",mobileType:"",color:"",ellipsis:!1,underline:!1,render:({type:l,mobileType:M,color:d})=>e.dy`<slot></slot>`.css`
    :host {
      display: block;
      font: var(--ui-font-${M||l});
      color: var(--ui-text-color, inherit);
    }

    ${M?`
          @media screen and (min-width: 768px) {
            :host { font: var(--ui-font-${l}); }
          }
        `:""}

    :host([type^="display"]), 
    :host([type^="headline"]),
    :host([type^="label"]) {
      color: var(--ui-text-color-heading, var(--ui-color-gray-800));
    }

    :host([color]) {
      --ui-text-color: var(--ui-color-${d});
      --ui-text-color-anchor: var(--ui-color-${d});
      --ui-text-color-heading: var(--ui-color-${d});
    }

    :host([type^="display"]), :host([type^="button"]) {
      text-transform: uppercase;
    }

    :host([type^="button"]) ::slotted(*) {
      text-decoration: none;
    }

    :host([ellipsis]) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    ::slotted(ui-text) {
      display: inline;
    }

    ::slotted(*) {
      color: inherit;
    }

    ::slotted(a) { transition: color 0.2s, opacity 0.2s; text-decoration: none; -webkit-tap-highlight-color: transparent; }
    ::slotted(a:hover, a:focus-visible) { color: var(--ui-text-color-anchor, inherit); }

    @media (hover: hover) and (pointer: fine) {
      ::slotted(a:hover) { color: var(--ui-text-color-anchor, inherit) }
      :host([underline]) ::slotted(a:hover) { text-decoration: underline; }
    }

    ::slotted(a:active) { opacity: 0.6; }
    ::slotted(a:not([href])) { opacity: 0.6; pointer-events: none; }

    :host([type^="body"]) ::slotted(a) { font-weight: 500; }
  `}},89247:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>M});var e=s(72020);const f=new WeakMap;let l=null;const M={autohide:2,wrap:!1,show:{value:!1,connect:d=>()=>clearTimeout(f.get(d)),observe:(d,w)=>{const h=d.render().querySelector("#tooltip");if(h.hidden=!w,h.style.transform="",w){l&&l!==d&&(l.show=!1),l=d;const{left:g,width:L}=h.getBoundingClientRect(),$=g+L+8-window.innerWidth,b=g-8;$>0?h.style.transform=`translateX(calc(-50% - ${$}px)`:b<0&&(h.style.transform=`translateX(calc(-50% + ${Math.abs(b)}px)`),d.autohide&&f.set(d,setTimeout(()=>{d.show=!1},d.autohide*1e3))}else clearTimeout(f.get(d))}},render:()=>e.dy`
    <template layout="contents">
      <div
        ontouchstart="${e.dy.set("show",!0)}"
        onmouseenter="${e.dy.set("show",!0)}"
        onmouseleave="${e.dy.set("show",!1)}"
        layout="block relative"
      >
        <slot></slot>
        <div
          id="tooltip"
          layout="absolute bottom:full left:50% layer:90"
          hidden
        >
          <ui-text
            type="label-s"
            layout="block:center margin:bottom:0.5 padding:0.5:1"
          >
            <slot name="content"></slot>
          </ui-text>
        </div>
      </div>
    </template>
  `.css`
    #tooltip {
      pointer-events: none;
      transform: translateX(-50%);
    }

    #tooltip ui-text {
      background: var(--ui-color-white);
      border: 0.5px solid var(--ui-color-gray-300);
      box-shadow: 0px 4px 12px rgba(32, 44, 68, 0.2);
      border-radius: 4px;
      white-space: nowrap;  
    }

    :host([wrap]) #tooltip ui-text {
      white-space: normal;
    }
  `}},62254:(S,H,s)=>{"use strict";s.r(H),s.d(H,{default:()=>w});var e=s(72020),f=s(4182),l=s(56570);function M(h,g){const{clientX:L,clientY:$}=g,{left:b,top:z}=h.getBoundingClientRect(),e1=L-b,O=$-z;h.tooltip.style.left=`${e1}px`,h.tooltip.style.top=`${O}px`}function d(h){return(g,L)=>L===h?g+1:g}const w={categories:void 0,data:({categories:h=[]})=>{if(!h.length)return[["",{value:100,offset:0}]];const g=h.reduce((O,_)=>{const u=O.get(_)||0;return O.set(_,u+1),O},new Map);let L=h.length;const $=4,b=[];g.forEach((O,_)=>{O/L<=$/100&&b.push(_)});const z=L/(100/$-b.length);b.forEach(O=>{const _=g.get(O);g.set(O,z),L+=z-_});let e1=0;return g.forEach((O,_)=>{O=Math.max(O/L*100-$,0),g.set(_,{value:O,offset:e1}),e1+=(O+$)*360/100}),[...g.entries()]},current:"",tooltip:({render:h})=>h().querySelector("ui-tooltip"),render:({categories:h,data:g,current:L})=>e.dy`
    <template layout="grid relative">
      <ui-tooltip
        layout="block absolute top left padding:top:0.5"
        show="${L}"
      >
        <span slot="content"
          >${l.b[L]}:
          ${h.reduce(d(L),0)}</span
        >
      </ui-tooltip>
      <svg viewBox="0 0 36 36" onmousemove="${M}">
        ${g.map(([$,{value:b,offset:z}])=>e.YP`
              <path
                class="${{empty:!$}}"
                stroke-dasharray="${b}, ${100-b}"
                transform="rotate(${z}, 18, 18)"
                stroke="${(0,f.W9)($)}"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                onmouseenter="${e.dy.set("current",$)}"
                onmouseleave="${e.dy.set("current","")}"
              />
          `)}
        <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle">
          ${h&&h.length}
        </text>
      </svg>
    </template>
  `.css`
    path {
      fill: none;
      stroke-width: 3;
      stroke-linecap: round;
      transition: all 0.5s ease-out;
    }

    path.empty {
      transition: none;
    }

    text {
      color: var(--ui-color-gray-900);
      font-family: var(--ui-font-family-label);
      font-size: 12px;
      font-weight: 600;
    }
   `}},9664:(S,H,s)=>{"use strict";var e=s(67132);typeof chrome=="object"&&chrome.i18n&&(0,e.NC)(chrome.i18n.getMessage.bind(chrome.i18n),{format:"chrome.i18n"})},4182:(S,H,s)=>{"use strict";s.d(H,{W9:()=>M});const e={advertising:"#CB55CD",site_analytics:"#87D7EF",consent:"#556FCD",essential:"#FC9734",hosting:"#8459A5",customer_interaction:"#EF671E",unidentified:"#818181",audio_video_player:"#4ECB4E",cdn:"#4ECBA1",comments:"#4EA1CB",email:"#4E4ECB",extensions:"#A14ECB",misc:"#CB4EA1",pornvertising:"#CB4E4E",social_media:"#CBA14E",telemetry:"#A1CB4E"},f=null,l=w=>e[w]?w:"unidentified",M=w=>e[l(w)],d=(w=h=>h)=>(h,g)=>{const L=l(w(h)),$=l(w(g));return f.indexOf(L)-f.indexOf($)}},56570:(S,H,s)=>{"use strict";s.d(H,{b:()=>l});var e=s(67132),f=s(9664);const l={advertising:e.WI`Advertising | Tracker category name`,site_analytics:e.WI`Site Analytics | Tracker category name`,consent:e.WI`Consent Management | Tracker category name - includes trackers used for cookie consent management, allowing websites different levels of tracking user activity`,essential:e.WI`Essential | Tracker category name`,hosting:e.WI`Hosting | Tracker category name`,customer_interaction:e.WI`Customer Interaction | Tracker category name`,unidentified:e.WI`Unidentified | Tracker category name`,audio_video_player:e.WI`Audio/Video Player | Tracker category name`,cdn:e.WI`CDN | Tracker category name`,comments:e.WI`Comments | Tracker category name`,email:e.WI`Email | Tracker category name`,extensions:e.WI`Extensions | Tracker category name`,misc:e.WI`Miscellaneous | Tracker category name`,pornvertising:e.WI`Adult Advertising | Tracker category name`,social_media:e.WI`Social Media | Tracker category name`,telemetry:e.WI`Telemetry | Tracker category name`}},96806:(S,H,s)=>{"use strict";s.d(H,{N7:()=>$,NE:()=>_,U2:()=>g,t8:()=>L,z6:()=>O});var e=s(17337);const f=new WeakMap,l=new Set;function M(u){const V=new Set,E=V.values();for(;u;){if(u.resolved=!1,u.deps){for(const n of u.deps)n.contexts.delete(u);u.deps.clear()}if(u.contexts)for(const n of u.contexts)l.has(n)||(V.add(n),u.contexts.delete(n));u.observe&&e.I(u.observe),u=E.next().value}}function d(u,V){let E=f.get(u);E||(E=new Map,f.set(u,E));let n=E.get(V);return n||(n={key:V,target:u,value:void 0,lastValue:void 0,resolved:!1,contexts:void 0,deps:void 0,observe:void 0},E.set(V,n)),n}function w(u){const V=f.get(u);return V?[...V.values()]:[]}let h=null;function g(u,V,E){const n=d(u,V);if(h&&(n.contexts||(n.contexts=new Set),h.deps||(h.deps=new Set),n.contexts.add(h),h.deps.add(n)),n.resolved)return n.value;const p=h;try{if(l.has(n))throw Error(`Circular get invocation is forbidden: '${V}'`);h=n,l.add(n),n.value=E(u,n.value),n.resolved=!0,h=p,l.delete(n)}catch(c){throw h=p,l.delete(n),h&&(h.deps.delete(n),n.contexts.delete(h)),c}return n.value}function L(u,V,E,n){const p=d(u,V),c=E(u,n,p.value);c!==p.value&&(p.value=c,M(p))}function $(u,V,E,n){const p=d(u,V);p.observe=()=>{const c=g(u,V,E);c!==p.lastValue&&(n(u,c,p.lastValue),p.lastValue=c)};try{p.observe()}catch(c){console.error(c)}return()=>{e.Z(p.observe),p.observe=void 0,p.lastValue=void 0}}const b=new Set;function z(u){b.size||setTimeout(()=>{for(const V of b)if(!V.contexts||V.contexts.size===0){if(V.deps)for(const n of V.deps)n.contexts.delete(V);f.get(V.target).delete(V.key)}b.clear()}),b.add(u)}function e1(u,V){M(u),V.clearValue&&(u.value=void 0,u.lastValue=void 0),V.deleteEntry&&z(u)}function O(u,V,E={}){const n=d(u,V);e1(n,E)}function _(u,V={}){const E=f.get(u);if(E)for(const n of E.values())e1(n,V)}},90384:(S,H,s)=>{"use strict";s.d(H,{A:()=>h,Z:()=>O});var e=s(80004),f=s(96806),l=s(17337),M=s(77540),d=s(43945),w=s(13436);const h=new WeakMap,g=new WeakMap;function L(_,u){if(u){const p=h.get(u);if(_===p)return u;for(const c of Object.keys(p))delete u.prototype[c]}else u=class extends e.Z.HTMLElement{connectedCallback(){for(const c of u.settable){if(!hasOwnProperty.call(this,c))continue;const j=this[c];delete this[c],this[c]=j}const p=new Set;g.set(this,p),l.I(()=>{if(p===g.get(this)){for(const c of u.connects)p.add(c(this));for(const c of u.observers)p.add(c(this))}})}disconnectedCallback(){const p=g.get(this);for(const c of p)c&&c();g.delete(this),f.NE(this)}};h.set(u,Object.freeze(_));const V=new Set,E=new Set,n=new Set;for(const p of Object.keys(_)){if(p==="tag")continue;let c=_[p];const j=typeof c;if(j==="function")p==="render"?c=(0,d.Z)(c,!0):p==="content"?c=(0,d.Z)(c):c={get:c};else if(j!=="object"||c===null)c={value:c};else if(c.set){if(hasOwnProperty.call(c,"value"))throw TypeError(`Invalid property descriptor for '${p}' property - it must not have 'value' and 'set' properties at the same time.`);const Q=(0,M.Dk)(p),n1=c.get||((f1,J)=>J);c.get=(f1,J)=>(J===void 0&&(J=c.set(f1,f1.getAttribute(Q)||J)),n1(f1,J))}if(hasOwnProperty.call(c,"value"))c=(0,w.Z)(p,c);else if(!c.get)throw TypeError(`Invalid descriptor for '${p}' property - it must contain 'value' or 'get' option`);c.set&&n.add(p),Object.defineProperty(u.prototype,p,{get:function(){return f.U2(this,p,c.get)},set:c.set&&function(n1){f.t8(this,p,c.set,n1)},enumerable:!0,configurable:!0}),c.connect&&V.add(Q=>c.connect(Q,p,()=>{f.z6(Q,p)})),c.observe&&E.add(Q=>f.N7(Q,p,c.get,c.observe))}return u.connects=V,u.observers=E,u.settable=n,u}const $=new Map;function b(_){$.size||M.gX.then(()=>{(0,M.N7)(e.Z.document.body,u=>{if($.has(u.constructor)){const V=$.get(u.constructor),E=h.get(u.constructor);u.disconnectedCallback();for(const n of Object.keys(E)){const p=typeof E[n],c=p!=="object"&&p!=="function"&&E[n]!==V[n];c&&u.removeAttribute((0,M.Dk)(n)),f.z6(u,n,{clearValue:c})}u.connectedCallback()}}),$.clear()}),$.set(_,h.get(_))}function z(_){if(!_.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const u=e.Z.customElements.get(_.tag);if(u){if(h.get(u))return b(u),L(_,u),_;throw TypeError(`Custom element with '${_.tag}' tag name already defined outside of the hybrids context`)}return e.Z.customElements.define(_.tag,L(_)),_}function e1(_,u={}){const{root:V="",prefix:E}=u,n=Object.keys(_);if(n.length===0)return _;for(const p of n){const c=_[p];if(!c.tag){const j=(0,M.Dk)([].concat(V).reduce((Q,n1)=>Q.replace(n1,""),p).replace(/^[./]+/,"").replace(/\//g,"-").replace(/\.[a-zA-Z]+$/,""));c.tag=E?`${E}-${j}`:j}z(c)}return _}const O=Object.freeze(Object.assign(z,{compile:_=>L(_),from:e1}))},17337:(S,H,s)=>{"use strict";s.d(H,{I:()=>l,Z:()=>M});var e=s(77540);const f=new Set;function l(w){f.size||e.gX.then(d),f.add(w)}function M(w){f.delete(w)}function d(){for(const w of f)try{w()}catch(h){console.error(h)}f.clear()}},80004:(S,H,s)=>{"use strict";s.d(H,{Z:()=>f});function e(l){return l=Object.create(l),"HTMLElement"in l||Object.defineProperty(l,"HTMLElement",{value:class{constructor(){throw Error("Current context does not support defining custom elements")}}}),"document"in l||Object.defineProperty(l,"document",{value:{importNode:()=>{throw Error("Current context does not support importing nodes")}}}),l}const f=typeof window=="object"?window:e(globalThis)},67132:(S,H,s)=>{"use strict";s.d(H,{NC:()=>O,U2:()=>z,WI:()=>V,eL:()=>L});var e=s(58768),f=s(80004),l=s(77540),M=s(72020);const d=new Map,w=new Map;let h=null;const g=(()=>{let E;try{E=f.Z.navigator.languages||[f.Z.navigator.language]}catch{E=[]}return E.reduce((n,p)=>{const c=p.split("-")[0];return n.add(p),p!==c&&n.add(c),n},new Set)})();function L(){return h!==null||d.size}function $(){g.delete("default"),d.clear(),w.clear(),h=null}const b=new Map;function z(E,n,p=[]){E=E.trim().replace(/\s+/g," "),n=n.trim();const c=`${E} | ${n}`;let j=w.get(c);if(!j){if(d.size)for(const Q of g){const n1=d.get(Q);if(n1&&(j=n1[c]||n1[E],j)){if(j=j.message,typeof j=="object"){let f1=b.get(Q);f1||(f1=new Intl.PluralRules(Q),b.set(Q,f1));const J=j;j=H1=>H1===0&&J.zero||J[f1.select(H1)]||J.other||""}break}}j||(h&&(j=h(E,n)),j||(j=E,(d.size||h)&&l.$H&&console.warn(`Missing translation: "${E}"${n?` [${n}]`:""}`))),w.set(c,j)}return typeof j=="function"?j(p[0]):j}function e1(E){return E.replace("$","@").replace(/[^a-zA-Z0-9_@]/g,"_").toLowerCase()}function O(E,n){switch(typeof E){case"function":{if((n||{}).format==="chrome.i18n"){const c=new Map;h=(j,Q)=>{j=Q?`${j} | ${Q}`:j;let n1=c.get(j);return n1||(n1=e1(j),c.set(j,n1)),E(n1,Q)}}else h=E;break}case"string":{if(!n||typeof n!="object")throw TypeError("Messages must be an object");E==="default"&&g.add("default");const p=d.get(E)||{};d.set(E,{...p,...n});break}default:throw TypeError("The first argument must be a string or a function")}}Object.defineProperty(O,"languages",{get:()=>Array.from(g)});function _(E,n){let p="";for(const[Q,n1]of E.entries())p+=Q?`\${${Q-1}}${n1}`:n1;const[c,,j=""]=p.split("|");return z(c,j,n)}const u=/\$\{(\d+)\}/g;function V(E,...n){return _(E,n).replace(u,(p,c)=>n[c])}V.html=function(n,...p){const c=_(n,p);return(0,M.MY)(c.replace(u,(j,Q)=>(0,e.ph)(Q)),p,!1,!0)},V.svg=function(n,...p){const c=_(n,p);return(0,M.MY)(c.replace(u,(j,Q)=>(0,e.ph)(Q)),p,!0,!0)}},43945:(S,H,s)=>{"use strict";s.d(H,{Z:()=>e});function e(f,l){return{get:l?M=>{const d=f(M),w=M.shadowRoot||M.attachShadow({mode:"open",delegatesFocus:f.delegatesFocus||!1});return()=>(d(M,w),w)}:M=>{const d=f(M);return()=>(d(M,M),M)},observe(M,d){d()}}}},9300:(S,H,s)=>{"use strict";s.d(H,{Z:()=>D1});var e=s(80004),f=s(96806),l=s(77540),M=s(90384);const d=Symbol("router.connect"),w=new WeakMap,h=new WeakMap,g=new WeakMap,L=new WeakMap;let $=null;const b=new Set;let z=!1;function e1(i=!0){z=!!i}const O=new WeakMap,_=new WeakMap;function u(i){const m=e.Z.document.activeElement;_.set(i,$.contains(m)&&m);const C=new Map;for(const v of[e.Z.document.documentElement,e.Z.document.body])C.set(v,{left:v.scrollLeft,top:v.scrollTop});(0,l.N7)(i,v=>{(v.scrollLeft||v.scrollTop)&&C.set(v,{left:v.scrollLeft,top:v.scrollTop})}),O.set(i,C)}function V(i){if(i.tabIndex===-1){const m=i.style.outline;i.tabIndex=0,i.style.outline="none",i.addEventListener("blur",()=>{i.removeAttribute("tabindex"),i.style.outline=m},{once:!0})}i.focus({preventScroll:!0})}function E(i){const m=e.Z.document.activeElement;l.gX.then(()=>{V(_.get(i)||($.contains(m)?m:$));const C=O.get(i);if(C){const v=w.get(i),k=e.Z.history.state.find(B=>B.id===v.id),T=k&&k.params.scrollToTop;for(const[B,{left:D,top:A}]of C)B.scrollLeft=T?0:D,B.scrollTop=T?0:A;O.delete(i)}else for(const v of[e.Z.document.documentElement,e.Z.document.body])v.scrollLeft=0,v.scrollTop=0;setTimeout(()=>{e.Z.history.scrollRestoration="auto"},0)})}function n(i){return i===!0?1:i||""}const p=["scrollToTop"];function c(i,m){const[C,v=""]=i.split("?"),Z=v?v.split(","):[],k=C.replace(/^\//,"").split("/"),T=k.reduce((B,D)=>{if(D.startsWith(":")){const A=D.slice(1);if(Z.includes(A))throw Error(`The '${A}' already used in search params`);if(B.includes(A))throw Error(`The '${A}' already used in pathname`);B.push(A)}return B},[]);return{browserUrl:i,pathnameParams:T,paramsKeys:[...Z,...T],url(B,D=!1){let A="";for(let N of k){if(N.startsWith(":")){const R=N.slice(1);if(!hasOwnProperty.call(B,R))throw Error(`The '${R}' parameter must be defined for <${m}>`);N=n(B[R])}A+=`/${N}`}const W=new URL(A,e.Z.location.origin);for(const N of Object.keys(B))T.includes(N)||D&&(p.includes(N)||!Z.includes(N))||W.searchParams.append(N,n(B[N]));return W},match(B){const D={},A=B.pathname.replace(/^\//,"").split("/");if(A.length!==k.length)return null;for(let W=0;W<A.length;W+=1){const N=A[W],R=k[W];if(R.startsWith(":")){const c1=R.slice(1);D[c1]=N}else if(N!==R)return null}for(const[W,N]of B.searchParams)D[W]=N;return D}}}function j(i,m){return i.stack.some(C=>C===m?!0:j(C,m))}function Q(i){i.browserUrl&&b.add(i);for(const m of i.stack)Q(m)}function n1(i,m,C=null,v=null){return typeof i=="function"&&(i=i()),i=[].concat(i),i.map(Z=>{const k=w.get(Z);if(k&&j(k,C))throw Error(`<${k.id}> cannot be in the stack of <${C.id}>, as it is an ancestor in the stack tree`);return H1(Z,m,C,v)})}function f1(i,m){const C=Object.values(i).map(v=>L.get(v)).filter(v=>v);if(C.length){if(C.length>1)throw TypeError(`<${m.id}> must contain at most one nested router, found: ${C.length}`);if(m.dialog)throw TypeError(`Nested routers are not supported in dialogs. Remove the router property definition from <${m.id}>`);if(m.browserUrl)throw TypeError(`A view with nested router must not have the url option. Remove the url option from <${m.id}>`)}return C[0]}function J(i){const m=e.Z.customElements.get(i);return w.get(m)}function H1(i,m,C,v){const Z=i.tag;let k=J(Z);if(k&&k.hybrids!==i&&(k=null),k)k.parent=C,k.nestedParent=v;else{const B=e.Z.customElements.get(Z);if(!B||M.A.get(B)!==i)throw Error(`<${Z}> view must be defined by 'define()' function before it can be used in router factory`);let D=null;const A={dialog:!1,guard:!1,multiple:!1,replace:!1,...i[d]},{connects:W}=B;A.dialog&&W.add(I=>{const t1=d1=>{d1.key==="Escape"&&(d1.stopPropagation(),e.Z.history.go(-1))},q=d1=>{!I.contains(d1.target)&&d1.target!==I&&V(I)},s1=$;return s1.addEventListener("focusin",q),s1.addEventListener("focusout",q),I.addEventListener("keydown",t1),V(I),()=>{s1.removeEventListener("focusin",q),s1.removeEventListener("focusout",q),I.removeEventListener("keydown",t1)}});const N=[];for(const I of Object.keys(B.prototype))Object.getOwnPropertyDescriptor(B.prototype,I).set&&N.push(I);if(A.url){if(A.dialog)throw Error(`The 'url' option is not supported for dialogs - remove it from <${Z}>`);if(typeof A.url!="string")throw TypeError(`The 'url' option in <${Z}> must be a string: ${typeof A.url}`);D=c(A.url,Z);for(const I of D.paramsKeys){const t1=Object.getOwnPropertyDescriptor(B.prototype,I);if(!t1||!t1.set)throw Error(`'${I}' parameter from the url is not ${t1?"writable":"defined"} in <${Z}>`)}}const R=N.filter(I=>!m.params.includes(I)&&!p.includes(I)),c1=D?R.filter(I=>!D.pathnameParams.includes(I)):R;W.add(I=>f.N7(I,d,t1=>{const q={};for(const s1 of R){const d1=n(t1[s1]).toString();q[s1]=d1!==void 0&&t1[s1]!==i[s1]?String(d1):void 0}return q},(t1,q,s1)=>{if(!s1)return;const d1=e.Z.history.state;let h1=d1[0];for(;h1.id!==Z&&h1.nested;)h1=h1.nested;q={...h1.params,...q};for(const A1 of c1)q[A1]===void 0&&delete q[A1];e.Z.history.replaceState([k.getEntry(q),...d1.slice(1)],"",D?k.url(q,!0):"")}));let g1;if(A.guard&&(g1=()=>{try{return A.guard()}catch(I){return console.error(I),!1}}),k={id:Z,hybrids:i,dialog:A.dialog,multiple:A.multiple,replace:A.replace,guard:g1,parent:C,nestedParent:v,nestedRoots:void 0,parentsWithGuards:void 0,stack:[],...D||{url(I){const t1=new URL("",e.Z.location.origin);for(const q of Object.keys(I))t1.searchParams.append(q,n(I[q]));return new URL(`${m.url}#@${Z}${t1.search}`,e.Z.location.origin)},match(I){const t1={};for(const[q,s1]of I.searchParams)(N.includes(q)||p.includes(q))&&(t1[q]=s1);return t1}},create(){const I=new B;return w.set(I,k),I},getEntry(I={},t1){let q={};for(const h1 of Object.keys(I))N.includes(h1)&&(q[h1]=I[h1]);const s1={id:Z,params:q,...t1},d1=k.parentsWithGuards.find(h1=>!h1.guard());if(d1)return d1.getEntry(I,{from:s1});if(k.guard&&k.guard())return{...k.stack[0].getEntry(I)};if(k.nestedParent)return k.nestedParent.getEntry(I,{nested:s1});for(const h1 of p)hasOwnProperty.call(I,h1)&&(s1.params[h1]=I[h1]);return s1}},w.set(i,k),w.set(B,k),C&&!C.stack.includes(k)&&C.stack.push(k),A.stack){if(A.dialog)throw Error(`The 'stack' option is not supported for dialogs - remove it from <${Z}>`);n1(A.stack,m,k,v)}}for(C||Q(k),k.parentsWithGuards=[];C;)C.guard&&k.parentsWithGuards.unshift(C),C=C.parent;const T=f1(i,k);return T&&(k.nestedRoots=n1(T.views,{...m,...T},k,k),k.stack=k.stack.concat(k.nestedRoots)),k}function B1(i,m={}){const C=w.get(i);return C?C.url(m):""}function _1(i){const m={};for(;i;)Object.assign(m,i.params),i=i.nested;return m}function S1({nested:i=!1,scrollToTop:m=!1}={}){const C=e.Z.history.state;if(!C)return"";if(C.length>1){const k=C[0];let T=1,B=C[T];if(i)for(;B.nested;)B=B.nested;else for(;k.id===B.id&&T<C.length-1;)T+=1,B=C[T];const D=_1(C[T]);return m?D.scrollToTop=!0:delete D.scrollToTop,J(B.id).url(D)}let v=C[0];if(i)for(;v.nested;)v=v.nested;let Z=J(v.id).parent;if(Z){for(;Z&&Z.guard;)Z=Z.parent;if(Z)return Z.url(_1(C[0]))}return""}function P1(i={}){const m=e.Z.history.state;if(!m)return"";const C=m[0];if(C.from)return J(C.from.id).url({...C.from.params,...i});const v=J(C.id);return v.stack[0]?v.stack[0].url(i):""}function W1(i){const m=e.Z.history.state;if(!m)return"";let C=m[0];for(;C.nested;)C=C.nested;return J(C.id).url({...C.params,...i})}function N1(i,{stack:m=!1}={}){const C=e.Z.history.state;return C?(i=[].concat(i),i.some(v=>{const Z=w.get(v);if(!Z)throw TypeError(`Provided view is not connected to the router: ${v}`);let k=C[0];for(;k;){const T=J(k.id);if(T===Z||m&&j(Z,T))return!0;k=k.nested}return!1})):!1}function L1(i){let m;const[C,v]=i.hash.split("?");if(C&&C.match(/^#@.+-.+/)&&(m=J(C.split("@")[1]),i=new URL(`?${v}`,e.Z.location.origin)),!m){for(const Z of b){const k=Z.match(i);if(k)return Z.getEntry(k)}return null}return m.getEntry(m.match(i))}function y1(i){if(i.defaultPrevented)return;let m;if(i.type==="click"){if(i.ctrlKey||i.metaKey)return;const C=i.composedPath().find(v=>v instanceof e.Z.HTMLAnchorElement);C&&(m=new URL(C.href,e.Z.location.origin))}else m=new URL(i.target.action,e.Z.location.origin);if(m&&m.origin===e.Z.location.origin){const C=L1(m);C&&(i.preventDefault(),(0,l.WI)($,"navigate",{bubbles:!0,detail:{entry:C,url:m}}))}}let k1;function R1(i,m){i.preventDefault(),k1=m;const C=i.composedPath(),v={type:i.type,ctrlKey:i.ctrlKey,metaKey:i.metaKey,target:i.target,defaultPrevented:!1,preventDefault:()=>{},composedPath:()=>C};return m.then(()=>{m===k1&&(y1(v),k1=null)})}function T1(i,m,C){let v=g.get(i);const Z=[];for(const[D,A]of m.entries())(D===0||m[D-1].id!==A.id||J(A.id).multiple)&&Z.push(A);const k=v.length-Z.length;v=Z.map((D,A)=>{const W=v[A+k],N=J(D.id);let R;if(W){const c1=w.get(W);if(N.id!==c1.id||A===0&&N.replace)return N.create();R=W}else R=N.create();return R}),g.set(i,v);const T=v[0],B=h.get(T);for(const[D,A]of Object.entries(m[0].params))D in T&&(T[D]=A);for(const D of C.params)D in T&&(T[D]=i[D]);return B&&B(),v}function I1(i){const m=[];for(let[Z,k]of e.Z.history.state.entries()){let T=0;for(;k;)m[T]=m[T]||[],m[T][Z]=k,k=k.nested,T+=1}let C=0,v=0;for(;i;){const Z=J(i.id);let k=C;for(;k<m[v].length;k+=1){const T=m[v][k];if(Z.dialog)return T.id!==i.id?-1:C;if(T.id===i.id)if(Z.multiple){if(Z.pathnameParams&&Z.pathnameParams.every(D=>i.params[D]===T.params[D])||Object.entries(i.params).every(([D,A])=>T.params[D]===A)){C=k;break}}else{C=k;break}const B=J(T.id);if(j(B,Z)){if(Z.multiple&&m[v][0].id===i.id){C-=1;break}if(k>0){C=k-1;break}else return B.guard?0:-1}}k===m[v].length&&(C=m[v].length-1),i=i.nested,v+=1}return C}function V1(i,m){const C=e.Z.document.documentElement;if(!i){C.removeAttribute("router-transition");return}const{dialog:v}=w.get(i[0].constructor),Z=v&&"dialog"||m.length&&(i.length>m.length&&"forward"||i.length<m.length&&"backward"||i[0]!==m[0]&&"replace")||"";C.setAttribute("router-transition",Z)}function U1(i,m,C){function v(){const W=g.get(i),N=T1(i,e.Z.history.state,C);C.transition&&V1(N,W),m();const R=N[0];w.get(R).dialog||E(R)}function Z(W,N,R){const c1=e.Z.history.state,g1=e.Z.history.state[W],I=W<c1.length-1&&c1.length>2?1:0;W+=I,g1&&N.id===g1.id&&(N={...g1,...N});const t1=q=>{q&&(e.Z.removeEventListener("popstate",t1),e.Z.addEventListener("popstate",v));const s1=I?"pushState":"replaceState",d1=[N,...c1.slice(W+(I?0:1))];e.Z.history[s1](d1,"",R),v()};W?(e.Z.removeEventListener("popstate",v),e.Z.addEventListener("popstate",t1),e.Z.history.go(-W)):t1()}function k(W){const N=e.Z.history.state;let R=W;for(;R.nested;)R=R.nested;const c1=J(R.id),g1=c1.browserUrl?c1.url(R.params,!0):C.url,I=I1(W);if(I>-1)Z(I,W,g1);else{let t1=g.get(i);u(t1[0]),e.Z.history.scrollRestoration="manual",e.Z.history.pushState([W,...N],"",g1),v()}}function T(W){k(W.detail.entry)}if($)throw Error(`An element with root router already connected to the document: <${$.tagName.toLowerCase()}>`);let B;try{B=n1(C.views,C),$=i,h.set(i,v)}catch(W){throw console.error(`Error while connecting router in <${i.tagName.toLowerCase()}>:`),W}const D=e.Z.history.state,A=new URL(e.Z.location.href);if(D){const W=g.get(i);let N;for(N=D.length-1;N>=0;N-=1){let R=D[N];for(;R;){const c1=J(R.id);if(!c1||c1.dialog&&W.length===0||!B.includes(c1)&&!B.some(g1=>j(g1,c1)))break;R=R.nested}if(R)break}if(N>-1){const R=D[N+1];Z(D.length-N-1,R||B[0].getEntry(D[0].params),C.url)}else{let R=D[0];for(;R.nested;)R=R.nested;const g1=J(R.id).getEntry(R.params);k(g1)}}else{const W=L1(A)||B[0].getEntry();e.Z.history.replaceState([W],"",C.url),v()}return e.Z.addEventListener("popstate",v),i.addEventListener("click",y1),i.addEventListener("submit",y1),i.addEventListener("navigate",T),()=>{e.Z.removeEventListener("popstate",v),i.removeEventListener("click",y1),i.removeEventListener("submit",y1),i.removeEventListener("navigate",T),V1(null),b.clear(),$=null;const W=e.Z.history.state&&e.Z.history.state.length;W>1&&(e.Z.history.go(1-W),e.Z.history.replaceState(D,"",A))}}function $1(i,m,C){const v=w.get(i);function Z(){return e.Z.history.state.map(T=>{for(;T;){if(T.id===v.id)return T.nested;T=T.nested}return T}).filter(T=>T)}function k(){T1(i,Z(),C),m()}if(!Z()[0]){const T=e.Z.history.state;e.Z.history.replaceState([v.nestedRoots[0].getEntry(T[0].params),...T.slice(1)],"")}k(),h.set(i,k)}function j1(i,m){m={url:e.Z.location.href.replace(/#.*$/,""),params:[],...m,views:i};const C={get:v=>{const Z=g.get(v)||[];return Z.slice(0,Z.findIndex(k=>!w.get(k).dialog)+1).reverse()},connect:(v,Z,k)=>{for(const T of m.params)if(!(T in v))throw Error(`Property '${T}' for global parameters is not defined in <${v.tagName.toLowerCase()}>`);return g.has(v)||g.set(v,[]),w.has(v)?$1(v,k,m):U1(v,k,m)},observe:z&&((v,Z,k)=>{const T=Z.length-1,B=Z[T];if(k&&B===k[T])return;let D=w.get(v),A=e.Z.history.state[0],W=0;for(;D;)W+=1,A=A.nested,D=D.nestedParent;console.groupCollapsed(`[${v.tagName.toLowerCase()}]: navigated to <${A.id}> ($$${W})`);for(const[N,R]of Object.entries(A.params))console.log(`%c${N}:`,"font-weight: bold",R);console.groupEnd(),e.Z[`$$${W}`]=B})};return L.set(C,m),C}const D1=Object.freeze(Object.assign(j1,{connect:d,debug:e1,url:B1,backUrl:S1,guardUrl:P1,currentUrl:W1,resolve:R1,active:N1}))},72020:(S,H,s)=>{"use strict";s.d(H,{MY:()=>K1,dy:()=>X1,YP:()=>Y1});var e={};s.r(e),s.d(e,{resolve:()=>B,set:()=>N,transition:()=>c1});var f={};s.r(f),s.d(f,{css:()=>t1,key:()=>g1,style:()=>I,use:()=>q});var l=s(80004),M=s(77540),d=s(67132);const w=!!(l.Z.document&&l.Z.document.adoptedStyleSheets),h=/^\d+$/,g={block:(o,t)=>({display:"block","text-align":t}),inline:({display:o})=>({display:`inline${o?`-${o}`:""}`}),contents:{display:"contents"},hidden:{display:"none"},...["row","row-reverse","column","column-reverse"].reduce((o,t)=>(o[t]=(r,a="nowrap")=>({display:"flex","flex-flow":`${t} ${a}`}),o),{}),grow:(o,t=1)=>({"flex-grow":t}),shrink:(o,t=1)=>({"flex-shrink":t}),basis:(o,t)=>({"flex-basis":b(t)}),order:(o,t=0)=>({order:t}),grid:(o,t="1",r="",a="",x="")=>({display:"grid",...["columns","rows"].reduce((y,P)=>{const F=P==="columns"?t:r;return y[`grid-template-${P}`]=F&&F.split("|").map(i1=>i1.match(h)?`repeat(${i1}, minmax(0, 1fr))`:b(i1)).join(" "),y},{}),"grid-auto-flow":`${a} ${x&&"dense"}`}),area:(o,t="",r="")=>({"grid-column":t.match(h)?`span ${t}`:t,"grid-row":r.match(h)?`span ${r}`:r}),gap:(o,t=1,r="")=>({"column-gap":b(t),"row-gap":b(r||t)}),items:(o,t="start",r="")=>({"place-items":`${t} ${r}`}),content:(o,t="start",r="")=>({"place-content":`${t} ${r}`}),self:(o,t="start",r="")=>({"place-self":`${t} ${r}`}),center:{"place-items":"center","place-content":"center"},size:(o,t,r=t)=>({width:b(t),height:b(r),"box-sizing":"border-box"}),width:(o,t,r,a)=>({width:b(t),"min-width":b(r),"max-width":b(a),"box-sizing":"border-box"}),height:(o,t,r,a)=>({height:b(t),"min-height":b(r),"max-height":b(a),"box-sizing":"border-box"}),ratio:(o,t)=>({"aspect-ratio":t}),overflow:(o,t="hidden",r="")=>{const a=r?`-${t}`:"",x=r||t;return{[`overflow${a}`]:x,...x==="scroll"?{"flex-grow":o["flex-grow"]||1,"flex-basis":0,"overscroll-behavior":"contain","--webkit-overflow-scrolling":"touch"}:{}}},margin:(o,t="1",r,a,x)=>t.match(/top|bottom|left|right/)?{[`margin-${t}`]:b(r||"1")}:{margin:`${b(t)} ${b(r)} ${b(a)} ${b(x)}`},padding:(o,t="1",r,a,x)=>t.match(/top|bottom|left|right/)?{[`padding-${t}`]:b(r||"1")}:{padding:`${b(t)} ${b(r)} ${b(a)} ${b(x)}`},absolute:{position:"absolute"},relative:{position:"relative"},fixed:{position:"fixed"},sticky:{position:"sticky"},static:{position:"static"},inset:(o,t=0)=>{const r=b(t);return{top:r,right:r,bottom:r,left:r}},top:(o,t=0)=>({top:b(t)}),bottom:(o,t=0)=>({bottom:b(t)}),left:(o,t=0)=>({left:b(t)}),right:(o,t=0)=>({right:b(t)}),layer:(o,t=1)=>({"z-index":t}),"":(o,t,...r)=>{if(r.length<2)throw new Error("Generic rule '::' requires at least two arguments, eg.: ::[property]:[name]");return{[r[r.length-2]]:`var(--${r.join("-")})`}},view:(o,t)=>({"view-transition-name":t})},L={min:"min-content",max:"max-content",fit:"fit-content",full:"100%"},$={portrait:"orientation: portrait",landscape:"orientation: landscape"};function b(o){return o=L[o]||o,/^-?\d+(\.\d+)*$/.test(String(o))?`${o*8}px`:o||""}let z;function e1(){if(z)return z;if(w)z=new l.Z.CSSStyleSheet;else{const o=l.Z.document.createElement("style");o.appendChild(l.Z.document.createTextNode("")),l.Z.document.head.appendChild(o),z=o.sheet}return z.insertRule(":host([hidden]) { display: none; }"),z}const O=new WeakMap;let _=new WeakSet;function u(o){const t=o.getRootNode();if(_.has(t))return;const r=e1();if(w)t.adoptedStyleSheets=[...t.adoptedStyleSheets,r];else{if(t===l.Z.document)return;let a=O.get(t);a||(a=l.Z.document.createElement("style"),t.appendChild(a),O.set(t,a));let x="";for(let y=0;y<r.cssRules.length;y++)x+=r.cssRules[y].cssText;a.textContent=x}_.add(t)}const V=new Map;function E(o,t,r,a){let x=V.get(o);x||(x=`l-${Math.random().toString(36).substr(2,5)}`,V.set(o,x)),w||(_=new WeakSet);const y=e1(),[P,F=""]=t.split("@"),i1=Object.entries(r.replace(/\s+/g," ").trim().split(" ").reduce((X,U)=>{const[r1,...M1]=U.split(":"),K=g[r1];if(!K)throw TypeError(`Unsupported layout rule: '${r1}'`);return Object.assign(X,typeof K=="function"?K(X,...M1.map(Y=>Y.match(/--.*/)?`var(${Y})`:Y)):K)},{})).reduce((X,[U,r1])=>r1!==void 0&&r1!==""?X+`${U}: ${r1};`:X,""),p1=F.split(":").reduce((X,U)=>U===""?X:X+` and (${$[U]||`min-width: ${U}`})`,"@media screen");if(a){const X=`:host(.${x}-s${P})`,U=`:where(.${x}-c${P})`;[X,U].forEach(r1=>{y.insertRule(F?`${p1} { ${r1} { ${i1} } }`:`${r1} { ${i1} }`,y.cssRules.length-1)})}else{const X=`.${x}${P}`;y.insertRule(F?`${p1} { ${X} { ${i1} } }`:`${X} { ${i1} }`,y.cssRules.length-1)}return x}var n=s(58768);const p=new WeakMap;function c(o,t){const r=(0,n.xZ)(o),a=r.startNode,x=(0,n.cc)(r.endNode);t.parentNode.insertBefore(o,t.nextSibling);let y=o,P=a;for(;P;){const F=P.nextSibling;y.parentNode.insertBefore(P,y.nextSibling),y=P,P=F!==x.nextSibling&&F}}function j(o,t,r,a,x){let y=p.get(t);const P=r.map((X,U)=>({id:hasOwnProperty.call(X,"id")?X.id:U,value:X,placeholder:null,available:!0}));if(p.set(t,P),y){const X=new Set;for(const U of P)X.add(U.id);y=y.filter(U=>X.has(U.id)?!0:((0,n.CK)(U.placeholder),U.placeholder.parentNode.removeChild(U.placeholder),!1))}let F=t;const i1=r.length-1,p1=(0,n.xZ)(t);for(let X=0;X<P.length;X+=1){const U=P[X];let r1;if(y){for(let M1=0;M1<y.length;M1+=1)if(y[M1].available&&y[M1].id===U.id){r1=y[M1];break}}r1?(r1.available=!1,U.placeholder=r1.placeholder,U.placeholder.previousSibling!==F&&c(U.placeholder,F),r1.value!==U.value&&a(o,U.placeholder,U.value,r1.value,x)):(U.placeholder=l.Z.document.createTextNode(""),F.parentNode.insertBefore(U.placeholder,F.nextSibling),a(o,U.placeholder,U.value,void 0,x)),F=(0,n.cc)((0,n.xZ)(U.placeholder,{}).endNode||U.placeholder),X===0&&(p1.startNode=U.placeholder),X===i1&&(p1.endNode=F)}if(y)for(const X of y)X.available&&((0,n.CK)(X.placeholder),X.placeholder.parentNode.removeChild(X.placeholder))}function Q(o,t,r){(0,n.CK)(t);const a=(0,n.xZ)(t);a.startNode=a.endNode=r,t.parentNode.insertBefore(r,t.nextSibling)}function n1(o){const t=typeof o;if(t==="object"){if(Array.isArray(o))return"array";if(o instanceof l.Z.Node)return"node"}return t}function f1(o,t,r,a,x){const y=n1(r),P=n1(a);switch(P!=="undefined"&&y!==P&&(y!=="function"&&(0,n.CK)(t),P==="array"?p.delete(t):P!=="node"&&P!=="function"&&(t.textContent="")),y){case"array":j(o,t,r,f1,x);break;case"node":Q(o,t,r);break;case"function":x&&(r.useLayout=!0),r(o,t);break;default:t.textContent=y==="number"||r?r:""}}const J=new WeakMap;function H1(o){return(t,r,a,x)=>{if(x){const y=J.get(r);r.removeEventListener(o,y.get(x),x.options!==void 0?x.options:!1)}if(a){if(typeof a!="function")throw Error(`Event listener must be a function: ${typeof a}`);let y=J.get(r);y||(y=new WeakMap,J.set(r,y));const P=a.bind(null,t);y.set(a,P),r.addEventListener(o,P,a.options!==void 0?a.options:!1)}}}function B1(o,t=new Set){if(Array.isArray(o))for(const r of o)r&&t.add(r);else if(o!==null&&typeof o=="object")for(const[r,a]of Object.entries(o))r&&a&&t.add(r);else o&&t.add(o);return t}const _1=new WeakMap;function S1(o,t,r){const a=_1.get(t)||new Set,x=B1(r);_1.set(t,x);for(const y of x)t.classList.add(y),a.delete(y);for(const y of a)t.classList.remove(y)}const P1=new WeakMap;function W1(o,t,r){if(r===null||typeof r!="object")throw TypeError(`Style value must be an object in ${(0,M.r4)(t)}:`,r);const a=P1.get(t)||new Map,x=new Map;for(const y of Object.keys(r)){const P=(0,M.Dk)(y),F=r[y];!F&&F!==0?t.style.removeProperty(P):t.style.setProperty(P,F),x.set(P,F),a.delete(P)}for(const y of a.keys())t.style[y]="";P1.set(t,x)}function N1(o,t,r){if(t.substr(0,2)==="on"){const a=t.substr(2);return H1(a)}switch(o){case"class":return S1;case"style":return W1;default:{let a=!1;return(x,y,P)=>{if(a=a||!r&&!(y instanceof l.Z.SVGElement)&&t in y,a)y[t]=P;else if(P===!1||P===void 0||P===null)y.removeAttribute(o);else{const F=P===!0?"":String(P);y.setAttribute(o,F)}}}}}const L1=(0,n.ph)("(\\d+)"),y1=new RegExp(`^${L1}$`),k1=new RegExp(L1,"g"),R1=/^[^A-Za-z]+$/;function T1(o){let t=o[0],r=!1;for(let a=1;a<o.length;a+=1)r=r||o[a-1].match(/<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/),t+=(r?`<!--${(0,n.ph)(a-1)}-->`:(0,n.ph)(a-1))+o[a],r=r&&!o[a].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);return t}function I1(o){return o.replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop()}function V1(o){return l.Z.document.createTreeWalker(o,l.Z.NodeFilter.SHOW_ELEMENT|l.Z.NodeFilter.SHOW_TEXT|l.Z.NodeFilter.SHOW_COMMENT,null,!1)}function U1(o,t=0){o=o.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"");let r=o.indexOf(`
`);if(r>-1){let a=0-t-2;for(r+=1;o[r]===" "&&r<o.length;r+=1)a+=1;return o.replace(/\n +/g,x=>x.substr(0,Math.max(x.length-a,1)))}return o}function $1(o,t){const r=(0,n.ph)(t);return`${U1(o).split(`
`).filter(x=>x).map(x=>{const y=x.indexOf(r);return y>-1?`| ${x}
--${"-".repeat(y)}${"^".repeat(6)}`:`| ${x}`}).join(`
`).replace(k1,"${...}")}`}const j1=new Map,D1=new WeakMap;function i(o,t){const r=D1.get(o);if(!r&&!t)return;const a=t&&t.map(y=>{let P=y;return P instanceof l.Z.CSSStyleSheet||(P=j1.get(y),P||(P=new l.Z.CSSStyleSheet,P.replaceSync(y),j1.set(y,P))),P});let x;if(r){if(a&&a.length===r.length&&a.every((y,P)=>y===r[P]))return;x=o.adoptedStyleSheets.filter(y=>!r.includes(y))}a&&(x=(x||o.adoptedStyleSheets).concat(a)),o.adoptedStyleSheets=x,D1.set(o,a)}const m=new WeakMap;function C(o,t){let r=m.get(o);if(t){(!r||r.parentNode!==o)&&(r=l.Z.document.createElement("style"),m.set(o,r),o=(0,n.cc)(o),o.nodeType===l.Z.Node.TEXT_NODE?o.parentNode.insertBefore(r,o.nextSibling):o.appendChild(r));const a=[...t].join(`
/*------*/
`);r.textContent!==a&&(r.textContent=a)}else r&&(r.parentNode.removeChild(r),m.set(o,null))}const v=new WeakMap;function Z(o,t){let r=v.get(o);r||(r=o.adoptedStyleSheets?i:C,v.set(o,r)),r(o,t)}function k(o,t,r,a){let x=l.Z.document.createElement("template");const y={},P=r?o:T1(o);if(x.innerHTML=t?`<svg>${P}</svg>`:P,t){const K=x.content.firstChild;x.content.removeChild(K);for(const Y of Array.from(K.childNodes))x.content.appendChild(Y)}let F;const i1=x.content.children[0];if(i1 instanceof l.Z.HTMLTemplateElement){for(const K of Array.from(i1.attributes)){const Y=K.value.trim();if(Y&&K.name.startsWith("layout")){if(Y.match(k1))throw Error("Layout attribute cannot contain expressions");F=E(i1,K.name.substr(6),Y,!0)}}if(F!==void 0&&x.content.children.length>1)throw Error("Template, which uses layout system must have only the '<template>' root element");a=F||i1.hasAttribute("layout"),x=i1}const p1=V1(x.content),X=[];let U=0,r1=null;for(;p1.nextNode();){let K=p1.currentNode;if(r1&&!r1.contains(K)&&(r1=null),K.nodeType===l.Z.Node.COMMENT_NODE&&y1.test(K.textContent)&&(K.parentNode.insertBefore(l.Z.document.createTextNode(K.textContent),K.nextSibling),p1.nextNode(),K.parentNode.removeChild(K),K=p1.currentNode),K.nodeType===l.Z.Node.TEXT_NODE){let Y=K.textContent;const l1=Y.match(y1);if(l1)K.textContent="",y[l1[1]]=[U,f1];else{if((0,d.eL)()&&!r&&!r1&&!Y.match(/^\s*$/)){let u1;const G=Y.trim(),o1=G.replace(/\s+/g," ").replace(k1,(a1,C1)=>(C1=Number(C1),u1===void 0&&(u1=C1),`\${${C1-u1}}`));if(!o1.match(R1)){let a1=K.previousSibling&&K.previousSibling.nodeType===l.Z.Node.COMMENT_NODE?K.previousSibling:"";a1&&(a1.parentNode.removeChild(a1),U-=1,a1=(a1.textContent.split("|")[1]||"").trim().replace(/\s+/g," "));const C1=(0,d.U2)(o1,a1).replace(/\${(\d+)}/g,(E1,b1)=>(0,n.ph)(Number(b1)+u1));Y=Y.replace(G,C1),K.textContent=Y}}const w1=Y.match(k1);if(w1){let u1=K;w1.reduce((G,o1)=>{const[a1,C1]=G.pop().split(o1);return a1&&G.push(a1),G.push(o1),C1&&G.push(C1),G},[Y]).forEach((G,o1)=>{o1===0?u1.textContent=G:(u1=u1.parentNode.insertBefore(l.Z.document.createTextNode(G),u1.nextSibling),p1.currentNode=u1,U+=1);const a1=u1.textContent.match(y1);a1&&(u1.textContent="",y[a1[1]]=[U,f1])})}}}else if(K.nodeType===l.Z.Node.ELEMENT_NODE){if(!r1&&(K.getAttribute("translate")==="no"||K.tagName.toLowerCase()==="script"||K.tagName.toLowerCase()==="style")&&(r1=K),M.$H){const Y=K.tagName.toLowerCase();Y.match(/.+-.+/)&&!l.Z.customElements.get(Y)&&!X.includes(Y)&&X.push(Y)}for(const Y of Array.from(K.attributes)){const l1=Y.value.trim(),w1=Y.name;if(a&&w1.startsWith("layout")&&l1){if(l1.match(k1))throw Error("Layout attribute cannot contain expressions");const G=E(K,w1.substr(6),l1);K.removeAttribute(w1),K.classList.add(G);continue}const u1=l1.match(y1);if(u1){const G=I1(o[u1[1]]);y[u1[1]]=[U,N1(w1,G,t)],K.removeAttribute(Y.name)}else{const G=l1.match(k1);if(G){const o1=`attr__${w1}`;for(const[a1,C1]of G.entries()){const[,E1]=C1.match(y1);let b1=!1;y[E1]=[U,(Z1,v1,x1)=>{const O1=(0,n.xZ)(v1);O1[o1]=(O1[o1]||l1).replace(C1,x1==null?"":x1),(G.length===1||a1+1===G.length)&&(b1=b1||!t&&!(v1 instanceof l.Z.SVGElement)&&w1 in v1,b1?v1[w1]=O1[o1]:v1.setAttribute(w1,O1[o1]),O1[o1]=void 0)}]}Y.value=""}}}}U+=1}M.$H&&X.length&&console.warn(`Not defined ${X.map(K=>`<${K}>`).join(", ")} element${X.length>1?"s":""} found in the template:
${$1(P,-1)}`);const M1=Object.keys(y);return function(Y,l1,w1,{styleSheets:u1}){let G=(0,n.xZ)(l1);if(x!==G.template){const o1=l.Z.document.importNode(x.content,!0),a1=V1(o1),C1=[];let E1=0,b1=0,Z1=y[M1[b1]];for(;a1.nextNode();){const v1=a1.currentNode;for(;Z1&&Z1[0]===E1;)C1.push({index:M1[b1],node:v1,fn:Z1[1]}),b1+=1,Z1=y[M1[b1]];E1+=1}if(G.hostLayout&&Y.classList.remove(G.hostLayout),(0,n.CK)(l1),G=(0,n.xZ)(l1),G.template=x,G.markers=C1,l1.nodeType===l.Z.Node.TEXT_NODE){C(l1),G.startNode=o1.childNodes[0],G.endNode=o1.childNodes[o1.childNodes.length-1];let v1=l1,x1=o1.childNodes[0];for(;x1;)l1.parentNode.insertBefore(x1,v1.nextSibling),v1=x1,x1=o1.childNodes[0]}else{if(a){const v1=`${F}-${Y===l1?"c":"s"}`;Y.classList.add(v1),G.hostLayout=v1}l1.appendChild(o1)}a&&u(l1)}Z(l1,u1);for(const o1 of G.markers){const a1=w1[o1.index],C1=G.prevArgs&&G.prevArgs[o1.index];if(!(G.prevArgs&&a1===C1))try{o1.fn(Y,o1.node,a1,C1,a)}catch(E1){throw console.error(`Error while updating template expression in ${(0,M.r4)(Y)}:
${$1(P,o1.index)}`),E1}}G.prevArgs=w1}}const T=new WeakMap;function B(o,t,r=200){return function a(x,y){const P=a.useLayout;let F;t&&(F=setTimeout(()=>{F=void 0,f1(x,y,t,void 0,P)},r)),T.set(y,o),o.then(i1=>{F&&clearTimeout(F),T.get(y)===o&&(f1(x,y,i1,t&&!F?t:void 0,P),T.set(y,null))})}}function D({target:o,detail:t},r){let a;switch(o.type){case"radio":case"checkbox":a=o.checked&&o.value;break;case"file":a=o.files;break;default:a=t&&hasOwnProperty.call(t,"value")?t.value:o.value}r(a)}function A(o,t){return o.split(".").reverse().reduce((r,a)=>r?{[a]:r}:{[a]:t},null)}const W=new Map;function N(o,t){if(!o)throw Error(`The first argument must be a property name or an object instance: ${o}`);if(typeof o=="object"){if(t===void 0)throw Error("For model instance property the second argument must be defined");const a=M.Qz.get(o);if(!a)throw Error("Provided object must be a model instance of the store");return t===null?()=>{a.set(o,null)}:(x,y)=>{D(y,P=>{a.set(o,A(t,P))})}}if(arguments.length===2)return a=>{a[o]=t};let r=W.get(o);return r||(r=(a,x)=>{D(x,y=>{a[o]=y})},W.set(o,r)),r}let R;const c1=l.Z.document&&l.Z.document.startViewTransition!==void 0&&function(t){return function r(a,x){if(R){console.warn(`${(0,M.r4)(a)}: view transition already started in ${(0,M.r4)(R)}`),t(a,x);return}t.useLayout=r.useLayout,R=a,l.Z.document.startViewTransition(()=>(t(a,x),M.gX.then(()=>{R=void 0})))}}||(o=>o);function g1(o){return this.id=o,this}function I(...o){return this.styleSheets=this.styleSheets||[],this.styleSheets.push(...o),this}function t1(o,...t){this.styleSheets=this.styleSheets||[];let r=o[0];for(let a=1;a<o.length;a++)r+=(t[a-1]!==void 0?t[a-1]:"")+o[a];return this.styleSheets.push(r),this}function q(o){return this.plugins=this.plugins||[],this.plugins.push(o),this}const s1=(0,n.ph)(),d1=(0,n.ph)("svg"),h1=(0,n.ph)("msg"),A1=(0,n.ph)("layout"),F1=new Map;function K1(o,t,r,a){function x(y,P=y){let F=a?o+h1:o.join(s1);r&&(F+=d1);const i1=x.useLayout;i1&&(F+=A1);let p1=F1.get(F);p1||(p1=k(o,r,a,i1),F1.set(F,p1)),x.plugins?x.plugins.reduce((X,U)=>U(X),()=>p1(y,P,t,x))(y,P):p1(y,P,t,x)}return Object.assign(x,f)}function X1(o,...t){return K1(o,t,!1,!1)}function Y1(o,...t){return K1(o,t,!0,!1)}Object.freeze(Object.assign(X1,e))},58768:(S,H,s)=>{"use strict";s.d(H,{CK:()=>d,cc:()=>M,ph:()=>h,xZ:()=>l});var e=s(80004);const f=new WeakMap;function l(g){let L=f.get(g);return L||(f.set(g,L={}),L)}function M(g){let L;for(;g&&(L=l(g))&&L.endNode;)g=L.endNode;return g}function d(g){if(g.nodeType===e.Z.Node.TEXT_NODE){const L=f.get(g);if(L&&L.startNode){const $=M(L.endNode);let b=L.startNode;const z=$.nextSibling;for(;b;){const e1=b.nextSibling;b.parentNode.removeChild(b),b=e1!==z&&e1}f.set(g,{})}}else{let L=g.childNodes[0];for(;L;)g.removeChild(L),L=g.childNodes[0];f.set(g,{})}}const w=Date.now(),h=(g=0)=>`H-${w}-${g}`},77540:(S,H,s)=>{"use strict";s.d(H,{$H:()=>L,Dk:()=>l,N7:()=>w,Qz:()=>g,WI:()=>M,gX:()=>h,r4:()=>d});var e=s(80004);const f=new Map;function l($){let b=f.get($);return b===void 0&&(b=$.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),f.set($,b)),b}function M($,b,z={}){return $.dispatchEvent(new e.Z.CustomEvent(b,{bubbles:!1,...z}))}function d($){return`<${String($.tagName).toLowerCase()}>`}function w($,b){$.nodeType===e.Z.Node.ELEMENT_NODE&&(b($),$.shadowRoot&&w($.shadowRoot,b));const z=e.Z.document.createTreeWalker($,e.Z.NodeFilter.SHOW_ELEMENT,null,!1);for(;z.nextNode();){const e1=z.currentNode;b(e1),e1.shadowRoot&&w(e1.shadowRoot,b)}}const h=Promise.resolve(),g=new WeakMap,L=w.name==="walkInShadow"},13436:(S,H,s)=>{"use strict";s.d(H,{Z:()=>M});var e=s(77540);const f={string:(d,w,h)=>{const g=w?String(w):"";return g?d.setAttribute(h,g):d.removeAttribute(h),g},number:(d,w,h)=>{const g=Number(w);return d.setAttribute(h,g),g},boolean:(d,w,h)=>{const g=Boolean(w);return g?d.setAttribute(h,""):d.removeAttribute(h),g},undefined:(d,w,h)=>{const g=typeof w,L=g!=="undefined"&&f[g];return L?L(d,w,h):(d.hasAttribute(h)&&d.removeAttribute(h),w)}},l={string:(d,w)=>d.getAttribute(w),number:(d,w)=>Number(d.getAttribute(w))||0,boolean:(d,w)=>d.hasAttribute(w),undefined:(d,w)=>d.getAttribute(w)};function M(d,w){const h=typeof w.value,g=f[h],L=l[h];if(!g)throw TypeError(`Invalid default value for '${d}' property - it must be a string, number, boolean or undefined: ${h}`);const $=(0,e.Dk)(d);return{get:(b,z)=>z===void 0?L(b,$)||w.value:z,set:(b,z)=>g(b,z,$),connect:h!=="undefined"?(b,z,e1)=>(!b.hasAttribute($)&&b[z]===w.value&&(b[z]=g(b,w.value,$)),w.connect&&w.connect(b,z,e1)):w.connect,observe:w.observe}}}},z1={};function m1(S){var H=z1[S];if(H!==void 0)return H.exports;var s=z1[S]={exports:{}};return G1[S](s,s.exports,m1),s.exports}m1.d=(S,H)=>{for(var s in H)m1.o(H,s)&&!m1.o(S,s)&&Object.defineProperty(S,s,{enumerable:!0,get:H[s]})},m1.o=(S,H)=>Object.prototype.hasOwnProperty.call(S,H),m1.r=S=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(S,"__esModule",{value:!0})};var Q1={};(()=>{"use strict";var S=m1(90384),H=m1(96806),s=m1(77540);const e=new WeakMap,f=new WeakMap;function l(O,_){const u=f.get(O);if(u===_)return;const V=S.Z.compile(_);f.set(O,_),e.has(O)&&e.get(O)(),e.set(O,()=>{V.prototype.disconnectedCallback.call(O);for(const[n]of E)delete O[n];e.delete(O)});const E=Object.entries(Object.getOwnPropertyDescriptors(V.prototype));V.prototype.connectedCallback.call(O);for(const[n,p]of E)if(!(n==="constructor"||n==="connectedCallback"||n==="disconnectedCallback")&&(Object.defineProperty(O,n,{...p,configurable:!0}),u)){const c=typeof _[n],j=c!=="object"&&c!=="function"&&_[n]!==u[n];j&&O.removeAttribute((0,s.Dk)(n)),(0,H.z6)(O,n,{clearValue:j})}}var M=m1(72020),d=m1(9664);S.Z.from(function(){const O=[],_=[];var u=function(){const V=m1(23998),E={};return V.keys().forEach(function(n){const p="./components/"+n.replace("./","");!O.includes(p)&&!_.includes(p)&&(_.push(p),E[p]=function(){const c=V(n);return Object.prototype.toString.call(c)==="[object Module]",c.default}())}),E}();return Object.assign(u)}(),{prefix:"ui",root:"components"}),S.Z.from(function(){const O=[],_=[];var u=function(){const E=m1(86782),n={};return E.keys().forEach(function(p){const c="./components/"+p.replace("./","");!O.includes(c)&&!_.includes(c)&&(_.push(c),n[c]=function(){const j=E(p);return Object.prototype.toString.call(j)==="[object Module]",j.default}())}),n}(),V=function(){const E=m1(72782),n={};return E.keys().forEach(function(p){const c="./views/"+p.replace("./","");!O.includes(c)&&!_.includes(c)&&(_.push(c),n[c]=function(){const j=E(p);return Object.prototype.toString.call(j)==="[object Module]",j.default}())}),n}();return Object.assign(u,V)}(),{prefix:"ui-autoconsent",root:["components"]});function w(O){const _=document.createElement("ghostery-iframe-wrapper"),u=_.attachShadow({mode:"closed"}),V=document.createElement("template");V.innerHTML=`
    <iframe src="${O}" frameborder="0"></iframe>
    <style>
      :host {
        all: initial;
        display: flex !important;
        align-items: flex-end;
        position: fixed;
        top: 10px;
        right: 10px;
        left: 10px;
        bottom: 10px;
        z-index: 2147483647;
        pointer-events: none;
      }

      iframe {
        display: block;
        flex-grow: 1;
        width: min(100%, 440px);
        pointer-events: auto;
        box-shadow: 30px 60px 160px rgba(0, 0, 0, 0.4);
        border-radius: 16px;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.13) 0%, rgba(0, 0, 0, 0.27) 100%);
        opacity: 0;
        transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(20px);
      }

      iframe.active {
        opacity: 1;
        transform: translateY(0);
      }

      @media screen and (min-width: 640px) {
        :host {
          justify-content: flex-end;
          align-items: start;
        }

        iframe {
          flex-grow: 0;
          transform: translateY(-20px);
        }
      }
    </style>
  `,u.appendChild(V.content),document.documentElement.appendChild(_);const E=u.querySelector("iframe");setTimeout(()=>{E.classList.add("active")},100),window.addEventListener("message",n=>{var p;switch((p=n.data)==null?void 0:p.type){case"ghostery-resize-iframe":E.style.width=n.data.width+"px",E.style.height=n.data.height+"px";break;case"ghostery-close-iframe":n.data.reload?window.location.reload():setTimeout(()=>_.parentElement.removeChild(_),0);break;default:break}})}function h(O=!1){window.parent.postMessage({type:"ghostery-close-iframe",reload:O},"*")}function g({width:O,height:_}={}){O&&(document.body.style.width=O+"px"),_&&(document.body.style.height=_+"px"),new ResizeObserver(()=>{window.parent.postMessage({type:"ghostery-resize-iframe",width:document.body.clientWidth,height:document.body.clientHeight},"*")}).observe(document.body,{box:"border-box"})}const L=new URLSearchParams(window.location.search).get("host");g();async function $(O,_){const{all:u}=_.detail;chrome.runtime.sendMessage({name:"enable",origin:"autoconsent",message:{url:u?void 0:L}})}async function b(O,_){const{all:u}=_.detail;chrome.runtime.sendMessage({name:"disable",origin:"autoconsent",message:{url:u?void 0:L}})}function z(O,_){h(_.detail.reload)}async function e1(){const O=await new Promise(n=>{chrome.runtime.sendMessage({name:"getTabInfo"},n)}),{summary:_}=await new Promise(n=>{chrome.runtime.sendMessage({name:"getPanelData",message:{view:"panel",tabId:O.id}},n)}),{antiTracking:u,adBlock:V}=await new Promise(n=>{chrome.runtime.sendMessage({name:"getCommonModuleData",message:{tabId:O.id}},n)}),E=_.categories.reduce((n,p)=>{for(let c=0;c<p.num_total;c+=1)n.push(p.id);return n},[]);for(let n=0;n<V.unidentifiedTrackerCount;n+=1)E.push("unknown");for(let n=0;n<u.trackerCount;n+=1)E.push("advertising");return E}l(document.body,{categories:{value:void 0,connect:(O,_)=>{let u;const V=async()=>{O[_]=await e1(),u=setTimeout(V,1e3)};return u=setTimeout(V,1e3),()=>clearTimeout(u)}},content:({categories:O})=>M.dy`
		<ui-autoconsent
			categories="${O}"
			onenable="${$}"
			ondisable="${b}"
			onclose="${z}"
		></ui-autoconsent>
	`})})()})();

//# sourceMappingURL=autoconsent.js.map