# Web app Challenge: GitHub user search

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer 
preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![320-dark](./public/screenshot_dark_320.png)
![320-light](./public/screenshot_light_320.png)

![375-dark](./public/screenshot_dark_375.png)
![375-light](./public/screenshot_light_375.png)

![768-dark](./public/screenshot_dark_768.png)
![768-light](./public/screenshot_light_768.png)

![1440-dark](./public/screenshot_dark_1440.png)
![1440-light](./public/screenshot_light_1440.png)

### Links

- Solution URL: [github-users-cmode01](https://github.com/jhnemogap/github-users-cmode01)
- Live Site URL: [DEVFINDER live demo](https://github-users-cmode01.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- CSS custom properties, Flexbox, CSS Grid
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/docs/handbook/react.html) - 
TypeScript is JavaScript with syntax for types.

- [Sass](https://sass-lang.com/) - For styles using 
[scss modules](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css)

- [ESlint](https://eslint.org/) - Find and fix problems in your JavaScript styles code

- [Prettier](https://prettier.io/) - An opinionated code formatter

- [husky](https://www.npmjs.com/package/husky) +
[lint-staged](https://github.com/okonet/lint-staged) +
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) - 
Superpowers when performing particular git actions

- [Node Version Manager](https://github.com/nvm-sh/nvm) - `nvm` allows you to quickly 
install and use different versions of node via the command line. Its installation 
is prior to and separate from the project. If you do not have this, it is recommended 
to install the local version of node.js indicated by the `.nvmrc` file


### What I learned

This section summarizes some main learnings while working on this project.

> "Whenever you start a project, no matter how small, it's good to consider 
the time you'll spend setting it up and preparing it before you start troubleshooting."
>
> by Jorge Nemogá

#### Probando SCSS module en la carpeta page de Next.js

Es posible reproducir los nombres de páginas dinámicas a los archivos de 
estilos de las mismas y de igual forma alojarlas en la carpeta de `pages`, sin afectar 
la lógica del framework next.js.

```bash
[username].module.scss
[username].tsx
```

#### SASS vs. CSS para el cambio del tema entre oscuro y claro

Al intentar implementar el cambio de tema entre claro y oscuro, pude constatar 
que actualmente el uso de preprocesadores css va perdiendo terreno ante el progreso 
gradual del mismo CSS nativo; algo muy similar a lo que le sucede a JQuery y 
el JavaScript actual.

Las diferentes formas que encontre para hacer el cambio de colores dinámicamente usando 
SASS era en general muy rebuscada o con varios pasos que al final implican la dificultad de 
mantenimiento. Mientras que al usar el modo nativo de CSS con variables ancladas al `:root` o 
un contenedor general (_en el proyecto se manejó sobre `body`_) se hace fácil el mantenimiento y 
uso del mismo. En su contra es que hay que entender las instancias reales en las que se aplican 
las variables de CSS y las de SASS, pues no es posible juntarlas para que trabajen de forma dinámica.

Por lo anterior los referentes del tema oscuro / claro quedan en dominio de las variables CSS nativas. 

```scss
// files _vars.scss
@mixin lightTheme {
  --text-color-primary: #4b6a9b;
  --text-color-secondary: #2b3442;
  --btn-theme-color-hover: #222731;
  --bg-color-primary: #fefefe;
  --bg-color-secondary: #f6f8ff;
  --action-color-primary: #0079ff;
  --action-color-secondary: #697c9a;
  --action-color-primary-hover: #60abff;
  --box-shadow-primary: 0 16px 30px -10px #4660bb33;
}

@mixin darkTheme {
  --text-color-primary: #ffffff;
  --text-color-secondary: var(--text-color-primary);
  --btn-theme-color-hover: #90a4d4;
  --bg-color-primary: #1e2a47;
  --bg-color-secondary: #141d2f;
  --action-color-primary: #0079ff;
  --action-color-secondary: #ffffffc0;
  --action-color-primary-hover: #60abff;
  --box-shadow-primary: _;
}

...

// Apply themes depende of one property [data-theme]
// file globals.scss
@use "./src/styles/vars";
...
body {
  @include vars.lightTheme;
  ...
  &[data-theme="light"] {
    @include vars.lightTheme;
  }
  &[data-theme="dark"] {
    @include vars.darkTheme;
  }
}

...

// other file example
.container {
  color: var(--text-color-secondary);
}
```

Estos fueron algunos de las páginas que me ayudaron a probar diferentes formas y 
tomar una decisión para la implementación del cambio del tema de colores.

- [Coding a CSS Theme Switcher – a Multitude of Web Dev Options](https://joshuatz.com/posts/2019/coding-a-css-theme-switcher-a-multitude-of-web-dev-options/): 
por mucho el mejor recurso para revisar posibles soluciones, sin perder la claridad de la información. 
y de dudoso resultado.
- Otros recursos visitados para no sesgarse por un solo recurso: 
[Theming in SASS](https://medium.com/@sroskelley/theming-in-sass-67b8c0265e3f) and 
[Dark Mode Switcher Using CSS Variables in LESS, SASS, or Vanilla CSS](https://medium.com/swlh/dark-mode-using-css-variables-cf065a7fa133)


#### CSS Grid have a bug on iOS and MacOS

A un componente donde su contenedor general era un formulario se le aplica un estilo con `grid`, 
casualmente al estar trabajando con Chrome o probando en Mozilla Firefox sobre un MacOS 
no se presenta el error, por lo que se podría dar por hecho que funciona bien; igualmente 
podrías revisar en varios navegadores web en android y todo trabaja perfecto. Pero más lejos 
de la realidad pues al revisar en el navegador web Safari en MacOS o en cualquier navegador en un iOS 
vas a notar que [no se comporta a lo esperado](https://discourse.webflow.com/t/css-grid-erratic-on-ios/161919).

Este es un bug que se presenta al tener código similar al siguiente:

```jsx
<form className="elemento-con-grid">
  ...
</form>
```

Y la forma de solucionarlo es tan simple como agregar un contenedor padre único para 
esa sección donde está fallando el grid.

```jsx
<div>
  <form className="elemento-con-grid">
    ...
  </form>
</div>
```

#### TypeScript para un proyecto tan pequeño vale la pena?

La respuesta en general es: **No lo vale**.

Dado que la intención de un challenge como estos es probar el conocimiento o 
capacidad resolutiva, también es el espacio para practicar o probar nuevas tecnologías; 
entonces usar `TypeScript` es una buena oportunidad.

Además, si consideramos que se plantea como un proyecto "real" o suposición que va a 
escalar usar TS conviene ser implementado desde el inicio si hay espacio, tiempo y 
conocimiento base; refetenre a esto último una configuración recomendad con un proyecto al inicio 
o donde no se tiene una experiencia fuerte con TS, es desactivar la verificación estricta del 
archivo `tsconfig` (`"strict": false`).

Ahora si tomamos en consideración que es una tendencia tener _tipado_ o algo similar en 
javascript, las opciones más completas son `Flow` o `TypeScript`. Siendo de esta forma 
la opción siempre debería ser `TypeScript` y solo en casos donde no aplique se usará otra 
tecnología o métodos.


#### Tener muchas configuraciones iniciales es un overkill

Las configuraciones pueden ir cambiando con el tiempo, además se pueden ir agregando 
a medida que el equipo las discuta y se lleguen a los debidos acuerdos de uso. Puede que al inicio 
golpe un poco el trabajo individual de cada miembro, pero aseguras un estándar de código 
visualmente y trazabilidad del mismo. Todo esto conlleva a que el tiempo de _code reviews_ 
se use más temas de mayor profundidad que el típico 
"deberías usar punto y coma..., porque no organizas el código como lo hago yo...", o evitar 
la frustración entre diferentes desarrolladores hacia detalles de código o los mensajes del commit
de sus contrapartes.

> "Having code quality control settings (eg ESlint, Prettier, Git comments and others) 
> might seem like a lot for early projects; but if it is expected to scale and 
> that several members work on the same code, it will have been a good decision 
> in the medium and long term."
> 
> Jorge Nemogá


#### Git Flow

Lo primero es tener una rama `main/master`, luego del primero o primeros _commits_ es bueno
generar la rama `develop` donde será nuestro punto de partida y llegada para cada issue. De 
manera que la rama principal `main` será usada para recibir solo los cambios ya aceptados que 
se deberían desplegar como `stable release`.

Entonces cada vez que se necesita alguna implementación se debe crear primero el issue, 
para así crea la rama de trabajo que debe salir siempre del la rama `develop`. El nombre de 
la nueva rama inicia con el número del issue y seguida de una descripción simple.

```bash
24-fix-searchbar-style-ios-grid
```

Luego de que se termina el trabajo en la rama correspondiente se realiza el Pull Request (PR en GitHub) 
o Merge Request (MR en GitLab) hacia `develop`. En este punto, se presenta tres modos de fusionar 
la rama según la conveniencia:

- Merge and commit (_lo llamaremos simplemente `merge`_)
- Squash and commit (_lo simplificamos a llamarlo como `squash`_)
- Rebase and commit (y para este modo `rebase`)

1. Siempre que se cree el PR, activar el modo de borrar la rama luego de la fusión.
De esta forma mantenemos limpio nuestro repositorio de ramas viejas que ya fueron integradas. 
Y para no perder la trazabilidad del trabajo y poder continuar sin miedo a borrar esas ramas.
Es que se propone las siguientes condiciones de fusión.

2. El modo de `rebase` es la última opción a usar; dado que modifica el 
historial de la rama en la que se genera la inclusión de los cambios. 
En este proyecto se usó en los dos primeros commit como parte de las pruebas, 
pero no se recomienda su uso bajo casi ninguna circunstancia y sólo en casos 
muy especiales será la forma correcta.

3. Por lo anterior, ahora sólo hablaremos de `squash` y `merge` como las opciones a usar.

4. Si el PR contiene un solo commit, la forma siempre debería ser usando
`squash`. Esto dado que `merge` agrega el _commit_ desarrollado, pero va a generar otro 
commit para la fusión como punto de llegada mas no agrega valor en este caso.

5. Cuando se tienen dos o más _commits_ que se desean fusionar, aquí lo que realmente 
interesa saber es si queremos o es relevante dejar el rastro de cada commit al mezclar 
las ramas. Dicho esto, si es relevante tener cada commit en el historial de `develop` 
entonces usamos `merge` en caso contrario usamos `squash`.

6. Finalmente, cuando la fusión es de `develop` hacia la rama principal (`main/master`) 
siempre debe usarse `merge`, esto para mantener el historial conectado 
entre ambas ramas y así sea más fácil conocer cuáles son los puntos de despliegue o 
_release_; en general serán los commits extra creados por el comando de `merge and commit`.


### Continued development

Use this section to outline areas that you want to continue focusing on in future 
projects. These could be concepts you're still not completely comfortable with 
or techniques you found useful that you want to refine and perfect.

1. Patrones de diseño más comunes. Y ver su aplicación en el lenguaje que 
actualmente es mi favorito y de mayor experiencia `javascript`. 
2. Otras tecnologías paralelas a las usadas en este proyecto para tener mayores posibilidades 
y criterio de selección ante nuevos desafíos. Ejemplo, Vue.js, Nuxt.js, TS y JS usando clases otras.
3. Desarrollo de aplicaciones móviles ya sea con Ionic, Flutter, Electron, React Native 
o hasta código nativo con Kotlin o Swift.


### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/) - It is for me the essential 
documentation of HTML, CSS and JavaScript (and more). On many occasions, by rereading a 
concept that I already know, I can reinforce it or learn something new.

- [W3Schools](https://www.w3schools.com/) - It may not be as flashy as MDN but in many 
cases it is very useful because its explanations are based on direct and quick examples.

- [CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) +
[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - 
comprehensive guide to CSS flexbox and Grid layout. 
When the concern is about CSS flexbox or Grid, this is the most important resource that is used. 

- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/) -
Cheatsheets for experienced React developers getting started with TypeScript.
Especially since it contains various details applied to function components and hooks.

- [Esencial image editor](https://ezgif.com/)
- [Smart WebP, PNG and JPEG compression](https://tinypng.com/)


## Author

- Name: Jorge Humberto Nemogá Pinzón
- Linkedin - [jhnemogap](https://www.linkedin.com/in/jhnemogap)


## How does the project run on the local machine?

1. You must first have node.js installed, and more specifically the version 
described in the `.nvmrc` file.

2. Clone de repository, example by the SSH mode:
```shell
git clone git@github.com:jhnemogap/github-users-cmode01.git
```

3. Now, install the package (`yarn` must be previously installed as a global tool):
```shell
yarn install
```

4. Finally, try to run the project:
```shell
yarn dev
```

This command really run the `next dev`, it starts the application in 
development mode with hot-code reloading, error reporting, and more. 
The application will start at `http://localhost:3000` by default. 
You  will see the similar messages in the console:

```
yarn run v1.22.17
$ next dev
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully in 2.9s (188 modules)

```
