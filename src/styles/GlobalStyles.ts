import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family:"Rubic" ;
  src: url("/assets/fonts/Rubik-Regular.ttf");
  font-weight: 400;
}

@font-face {
  font-family:"Rubic" ;
  src: url("/assets/fonts/Rubik-Medium.ttf");
  font-weight: 500;
}

@font-face {
  font-family:"Rubic" ;
  src: url("/assets/fonts/Rubik-Italic.ttf");
  font-style: italic;
}

@font-face {
  font-family:"Rubic" ;
  src: url("/assets/Rubik-VariableFont_wght.ttf");
}



    
:root {
  /* Indigo */
  --color-brand-50: #ffea00;
  --color-brand-100: #ffd000;
  --color-brand-200: #ffb700;
  --color-brand-500: #ffaa00;
  --color-brand-600: #ffaa00;
  --color-brand-700: #ff9500;
  --color-brand-800: #ff8800;
  --color-brand-900: #ff7b00;
  --bg-brand: linear-gradient(90deg, #f9572a, #ffc905);
  
   
 --responsive-mobile-sm: 28.125em ;
 --responsive-mobile: 37.5em ;
 --responsive-tablet: 56.25em;
 --responsive-desktop: 75em;
 --responsive-desktop-lg: 112.5em;
 

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

 &,&.light-mode {
   --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;
 
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --color-theme: linear-gradient(to right, rgb(255 255 255 / 70%), rgb(255 255 255 / 70%));


  --shadow-sm: 0px 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0px 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --bg-img-desktop:var(--color-theme), url("/assets/images/pattern-background-desktop-light.svg");
  --bg-img-tablet:var(--color-theme), url("/assets/images/pattern-background-tablet-light.svg");
  --bg-img-mobile:var(--color-theme), url("/assets/images/pattern-background-mobile-light.svg");
  
}

  &.dark-mode {
    --color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;
 

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;
  
--color-theme: linear-gradient(to right, rgb(24 33 47 / 99%), rgb(24 33 47 /99%));

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--bg-img-desktop:var(--color-theme), url("/assets/images/pattern-background-desktop-dark.svg");
  --bg-img-tablet:var(--color-theme), url("/assets/images/pattern-background-tablet-dark.svg");
  --bg-img-mobile:var(--color-theme), url("/assets/images/pattern-background-mobile-dark.svg");
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Rubic";
  color: var(--color-grey-700);
   background-image:  var(--bg-img-desktop);
  object-fit: cover;
  background-repeat: no-repeat;
  

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  

}

@media screen and (min-width:37.5em){
 body {
  background-image: var(--bg-img-tablet) ;
 } 
}

@media screen and (min-width: 56.25em){
 body {
    background-image: var(--bg-img-desktop);
 }
} 


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  user-select:none;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
