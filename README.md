<div align="center">

  <h1>Simple React boilerplate</h1>
  <p>
    Very simple React app boilerplate built with Vite and TypeScript
  </p>
  <img src="https://user-images.githubusercontent.com/17384858/186645040-05c5ef03-37b5-4310-8da8-9b4964ed6495.gif" />
  </div>

# Table of Contents

- [About the Project](#star2-about-the-project)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation Commands](#gear-installation)

<!-- About the Project -->

### :star2: About the Project

- Improve building your faster React application by using TypeScript at first place and bootstrap by Vite.

### :space_invader: Tech Stacks

- This starter uses following libraries:
  - [Vite](https://vitejs.dev/): Next Generation Frontend Tooling. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
  - [React](https://reactjs.org/): A powerful JavaScript library for building user interfaces.
  - [TypeScript](https://www.typescriptlang.org/): TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
  - [React Router](https://reactrouter.com/): Declarative routing for React apps at any scale.
  - [Jest](https://jestjs.io/): Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
  - [React Testing Library](https://github.com/testing-library/react-testing-library): A powerful testing React library.

<!-- Getting Started -->

### :toolbox: Getting Started

<!-- Prerequisites -->

### :bangbang: Prerequisites

- Node v16.0.0 (or higher)
  - Install NodeJs here: https://nodejs.org/en/

### :gear: Installation Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `npm install`           | Installs dependencies                            |
| `npm start`             | Starts local dev server at `localhost:3000`      |
| `npm run build`         | Build your production site to `./dist/`          |
| `npm run preview`       | Preview your build locally, before deploying     |
| `npm run test`          | Testing your application                         |
| `npm run test:coverage` | Testing your application and get Coverage report |
| `npm run lint`          | Detect code format error                         |
| `npm run lint:fix`      | Detect and fix code format error                 |

##### Noted:

- You should grant permission to `.husky` if pre-commit not working on your local:

```bash
$ chmod ug+x ./husky/*
```
