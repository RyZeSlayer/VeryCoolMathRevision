const cssCode = `
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  :root {
    --hue: 223;
    --offHue: 3;
    --onHue: 123;
    --bg: hsl(var(--hue),10%,50%);
    --fg: hsl(var(--hue),10%,10%);
    --off1: hsl(var(--offHue),90%,25%);
    --off2: hsl(var(--offHue),90%,40%);
    --off3: hsl(var(--offHue),90%,50%);
    --off4: hsl(var(--offHue),90%,65%);
    --on1: hsl(var(--onHue),90%,15%);
    --on2: hsl(var(--onHue),90%,30%);
    --on3: hsl(var(--onHue),90%,40%);
    --on4: hsl(var(--onHue),90%,55%);
    font-size: calc(60px + (90 - 60) * (100vw - 320px) / (1280 - 320));
  }
  
  body, input {
    font: 1em/1.5 sans-serif;
  }
  
  body {
    background: var(--bg);
    color: var(--fg);
    height: 100vh;
    display: grid;
    place-items: center;
  }
  
  .t {
    position: relative;
    width: 1.5em;
    height: 1.5em;
  }
  
  .t__checkbox, .t__sr, .t__svg {
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .t__checkbox, .t__svg {
    width: 100%;
    height: 100%;
  }
  
  .t__checkbox {
    background-color: var(--off2);
    border-radius: 50%;
    box-shadow:
      0 0 0 0.1em var(--off1) inset,
      0 0 0 0.2em var(--off4) inset,
      -0.3em 0.5em 0 var(--off3) inset,
      0 0.15em 0 hsla(0,0%,0%,0.2);
    filter: brightness(1);
    transition:
      background-color 0.15s linear,
      box-shadow 0.15s linear,
      filter 0.15s linear,
      transform 0.15s linear;
    -webkit-appearance: none;
    appearance: none;
  }
  
  .t__checkbox:active {
    box-shadow:
      0 0 0 0.1em var(--off1) inset,
      0 0 0 0.2em var(--off4) inset,
      -0.3em 0.5em 0 var(--off3) inset,
      0 0.05em 0 hsla(0,0%,0%,0.2);
  }
  
  .t__checkbox:active, .t__checkbox:active + .t__svg {
    transform: scale(0.9);
  }
  
  .t__checkbox:checked {
    background-color: var(--on2);
    box-shadow:
      0 0 0 0.1em var(--on1) inset,
      0 0 0 0.2em var(--on4) inset,
      -0.3em 0.5em 0 var(--on3) inset,
      0 0.15em 0 hsla(0,0%,0%,0.2);
  }
  
  .t__checkbox:checked:active {
    box-shadow:
      0 0 0 0.1em var(--on1) inset,
      0 0 0 0.2em var(--on4) inset,
      -0.3em 0.5em 0 var(--on3) inset,
      0 0.05em 0 hsla(0,0%,0%,0.2);
  }
  
  .t__checkbox:focus, .t__checkbox:hover {
    filter: brightness(1.2);
  }
  
  .t__checkbox:focus {
    outline: 0;
  }
  
  .t__sr {
    clip: rect(1px,1px,1px,1px);
    overflow: hidden;
    width: 1px;
    height: 1px;
  }
  
  .t__svg {
    pointer-events: none;
    transition: transform 0.15s linear;
  }
  
  .t__svg-bg {
    fill: hsl(var(--hue),90%,100%);
  }
  
  .t__svg-ring, .t__svg-line {
    stroke: hsl(var(--hue),90%,100%);
  }
  
  .t__svg-ring {
    stroke-dasharray: 0 5 27.7 5;
    transition:
      stroke 0.15s ease-in-out,
      stroke-dasharray 0.3s 0.25s ease-in-out;
  }
  
  .t__checkbox:checked + .t__svg .t__svg-ring {
    stroke-dasharray: 0 0 0 37.7;
    transition-delay: 0s;
  }
  
  .t__svg-line {
    stroke-dashoffset: 3;
    transition:
      stroke 0.15s linear,
      stroke-dashoffset 0.3s ease-in-out;
  }
  
  .t__svg-line:nth-of-type(1) {
    transition-delay: 0s, 0.25s;
  }
  
  .t__checkbox:checked + .t__svg .t__svg-line:nth-of-type(1) {
    stroke-dashoffset: -6;
    transition-delay: 0s;
  }
  
  .t__svg-line:nth-of-type(2) {
    stroke-dashoffset: 6;
  }
  
  .t__checkbox:checked + .t__svg .t__svg-line:nth-of-type(2) {
    stroke-dashoffset: -3;
    transition-delay: 0s, 0.25s;
  }
`;

const htmlCode = `
 <label class="t">
	<input class="t__checkbox" type="checkbox" value="on">
	<svg class="t__svg" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<ellipse class="t__svg-dot" cx="6" cy="6" rx="2" ry="1" fill="#fff" transform="rotate(-45,6,6)" />
		<circle class="t__svg-ring" cx="12" cy="12" r="6" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-dasharray="0 5 27.7 5" stroke-dashoffset="0.01" transform="rotate(-90,12,12)"/>
		<line class="t__svg-line" x1="12" y1="6" x2="12" y2="15" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-dasharray="9 9" stroke-dashoffset="3"/>
		<line class="t__svg-line" x1="12" y1="6" x2="12" y2="12" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-dasharray="6 6" stroke-dashoffset="6"/>
	</svg>
	<span class="t__sr">Power</span>
</label>
`; document.body.appendChild(htmlCode);
