## Table of contents
- Installation
- Scripts
- Pre-commit hooks
- Routes
- Storybook
- E2E testing

## Installation
In order to get started you will need to 
- Download [Node.js 18+.](https://nodejs.org/en/download/package-manager)
- Enable corepack in your terminal `corepack enable`
- Once in the root directory of the repository, run `yarn` to install dependencies
- PS If you get stuck please follow these [guidelines](https://yarnpkg.com/getting-started/install) 

## Scripts
- #### Run the development server
    - Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
    - `yarn dev`
- #### Create a production build
    - `yarn build`
- #### Run the production build locally
    - Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
    - `yarn start`
- #### Run storybook locally
    - Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.
    - `yarn storybook`
- #### Scan source-code for linting errors or warnings
    - `yarn lint`
- #### Create a production storybook build
    - `yarn build-storybook`

## Pre-commit hooks
This repository is integrated with git commit hooks, get confidence with every commit, commits are subject due to the following process running to completion
- `yarn lint`
- `yarn build`
- `yarn build-storybook`

> PS If you would like to augment this process please see configuration file `.husky/pre-commit`


## Routes
#### "/" (SSR)
- Representing the feed page, configured to pre-render and pre-fetch data on the server on demand by means of `"@tanstack/react-query"`.
- After hydration on the client is complete queries are cached and revalidated at set stale-times
#### "/profile/[id]"
- Representing the profile page, configured to pre-render and pre-fetch data on the server on demand by means of `"@tanstack/react-query"`.
- After hydration on the client is complete queries are cached and revalidated at set stale-times
#### "/isg"  (ISG)
- Representing the feed page, configured to statically render at build time.
- After a set timestamp has expired on the server the page will re-fetch fresh data and re-render itself on the server, thanks the Next Incremental Static Generation feature
- PS ISR re-renders are request driven


### Storybook
This repository showcases a UI playground that houses its component library, to view the playground simply: 
- In your terminal run `yarn storybook`
- Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.


### Running E2E Tests
Cypress will simulate a user navigating your application, this requires your Next.js server to be running. We recommend running your tests against your production code to more closely resemble how your application will behave.

Run `yarn build` && `yarn start` to build your Next.js application, then run `yarn cypress:open` in another terminal window to start Cypress and run your E2E testing suite. 

Alternatively you can also run Cypress in headless mode by running `yarn cypress:test`


