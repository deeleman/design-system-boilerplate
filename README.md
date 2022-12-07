# :bowtie: Design System Boilerplate

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

A starter project for building a Design System library on top of [Stencil](https://stenciljs.com/), [Storybook](https://storybook.js.org/) and the [Figma Design Tokens plugin](https://github.com/lukasoppermann/design-tokens). Additionally, the project comes with built-in support for [Emotion](https://emotion.sh/), should you want to manage dynamic CSS through a CSS-in-JS strategy.


Stencil can also be used for building entire apps. For that, use the [stencil-app-starter](https://github.com/ionic-team/stencil-app-starter) instead.

**Please note:** This project was originally intended as a support resource for the [Design Systems for Interactive Applications](https://harbour.space/front-end-development/courses/design-systems-for-interactive-applications-pablo-deeleman-782#preview) course module at [Harbour Space University](https://harbour.space/).

# :octocat: Installation

There are two ways to take advantage of this kickstart project. 
- Fork this repository. This is the preferred way.
- Clone this repository and then push it to your own remote upstream.

## Requirements

The minimum requirements for running this project, either on development or production mode, and its development scripts are `node v18.12.0`, or later versions. Probably this project will run smoothly on older versions of `node` and `npm` but we recommend using the latest [LTS versions](https://nodejs.org/).

Additionally, you will want to have the Git runtime installed in your system in order to proceed.

### Option A (preferred): Fork the repository

From the GitHub UI click on `Fork` button, select your username as _Owner_ and enter a name of your choice for the destination repository that will be created straight away.

Once the repository is successfully forked, go to your terminal window and run a git clone command pointing to the repository. Eg: if your username is `harbourspace` and you set `harbour-design-system` as your repository name, then you will want to run the following command in your Bash terminal:

```bash
git clone https://github.com/harbourspace/harbour-design-system.git
```

### Option B: Clone the repository

From your terminal window clone the Git repository by running the following command: 

```bash
git clone https://github.com/deeleman/design-system-boilerplate.git
```

**BEWARE:** Once you clone a repository like this, the remote upstream `origin` will still point to `https://github.com/deeleman/design-system-boilerplate`. You will want to change the remote upstream to another repository of your choice by hand. Please [follow these instructions](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).

## :nerd_face: Getting Started

To start building your new web component library, you will want to mode the shell prompt into the directory you just created upon cloning the repository and install all dependencies by running:

```bash
npm install
```

Then, you can start hacking new components or editing the sample `Button` component made available by running the following command:

```bash
npm start
```

The `npm start` command will bootstrap the environment in `watch` mode (so any changes made in the code will trigger a rebuild under the hood) and will spawn a browser window serving the HTML file located at `/src/index.html`. You can drop in that HTML document any reference to any web component you just create, in order to test it.

However, building and testing components like that is pretty unefficient. In order to make things easier, the project implements a more convenient command:

```bash
npm run dev
```

The `dev` command builds the entire project in first instance, and then it boostraps a Storybook instance serving all `**/*.stories.js` (or `.ts`) files found in the project filesystem. Once the Storybookminstance is available, an additional background build process is fired up in `watch` mode, so all your changes will be made immediately available by means of hot module replacement.

Last but not least, if you want to build your components for production, just run:

```bash
npm run build
```

To run the unit tests for the components (if any), run:

```bash
npm test
```

All these commands are part of the default components library project installation. Need help to better understand its purpose and logic under the hood? Check out our docs [here](https://stenciljs.com/docs/my-first-component).


### Namespacing your Design System project

Some build processes will use an internal naming token, also known as _namespace_, to properly name the output files and manage folder paths. You will want to customize such namespace token to one of your liking. For doing so please edit the `stencil.config.ts` file found at the root directory right after you clone your project and before you start editing any other files (although you can proceed with this change at a later stage):

```typescript
export const config: Config = {
  // Update the namespace value with your project name (kebab-case)
  namespace: 'design-system',
  // Etc..
  // ...
};
```

## Creating a new component

In addition to the aforementioned npm scripts, a component generator script is available from package.json as well.

In order to create a new component just run the following and a convenient CLI will prompt you through the different steps to create a new component, namely:

- Select a tag anme for the new component
- Select what files should the schematic runtime create: CSS file, unit or E2E tests...
- And that's it!

### Naming components

When creating new component tags, we recommend using a prefix, in consonance with your project namespa e, so you avoid name collisions with other web component libraries (ex: `<button />`).

Therefore, use a prefix that fits your company or any name for a group of related components. For example, following up with Harbour Space, generated web components might use the prefix `hs-`. Eg: `<hs-button />`.

### Creating a demo playground for your component in Storyboard

A generic component Storyboard template has been made available at `/src/stories/component.stories.template`. When creating a new component, just copy and paste that file into the component folder (so all files relevant to a particular component live in the same location) and rename it by replacing the `component` filename prefix by your component name and the `.template` file extension by `.ts`. Then proceed to update the stories config and template details within that file with your component API data en use cases. Next time you run `npm run dev`, those stories and docs will be featured in the UI.

### Combining StencilJS and CSS-in-JS

You can find more information and examples in [this tutorial](https://css-tricks.com/web-standards-meet-user-land-using-css-in-js-to-style-custom-elements/), although please beware that the actual moduel name is `@emotion/css` (the tutorial contents might be a bit outdated).

This project contains support for the CSS API in Emotion, hence you can benefit from programmatic styling in your components. This can be used in combination with the scoped styles in your component stylesheet, since both strategies play nice together.

## :art: Using Figma Design Tokens plugin with this project

This project implements support for reading and digesting JSON files containing Design Tokens information. You can introduce Design Tokens in your workflow by taking two different approaches:

### Compiling Design Tokens JSON files manually

The project contains a `src/design-tokens/json` folder thta already contains an example tokens JSON file. If you want to use your own file (currently the system is configured to digest just one unique file, not many), just drop your Design Tokens JSOn file in that directory and run the following command in your terminal window:

```bash
npm run transform-tokens
```

You will see then how `_variables.css` and `variables.js` files are created in the `src/design-tokens/css` and `src/design-tokens/js` respectively.

### Submitting Design Tokens information straight from Figma.

In order to do so, you will want to inatall the [Figma plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) first and configure all your different layout information via Figma _styles_.

Then go to your GitHub account and create a Personal Access Token configured for accessing `public_repo`. [More info](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). You will want to write down that token in a safe place for later use.

Go back to Figma and then in the project layout select the Design Tokens plugin menu and click on _Plugins > Design Tokens > Send design tokens to URL_. In the resulting popup enter this information:

- *Server URL*: `https://api.github.com/repos/[YOUR USERNAME]/[YOUR REPOSITORY NAME]/dispatches`. Please change `YOUR USERNAME` and `[YOUR REPOSITORY NAME]` by the corresponding values.
- *Auth type:* `(Github) token`.
- *Access token:* The token string you stored earlier.

Then click on `Save and Export` and the infofrmation will be send to the remote server. A serverless GitHub action will digest that information and will send an automateb Pull Request to the repository with the latest changes issued by the design team.

**Important:** Your Design System project must be a public repository.

## :package: Publishing your library for later use elsewhere

There are three strategies we recommend for using web components built with this library.

The first step for all three of these strategies is to [publish to NPM](https://docs.npmjs.com/getting-started/publishing-npm-packages).

### Script tag

- Put a script tag similar to this `<script type='module' src='https://unpkg.com/my-component@0.0.1/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install my-component --save`
- Put a script tag similar to this `<script type='module' src='node_modules/my-component/dist/my-component.esm.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install my-component --save`
- Add an import to the npm packages `import my-component;`
- Then you can use the element anywhere in your template, JSX, html etc
