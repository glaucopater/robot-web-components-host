# Reminders-web-host
A microfrontends host application build with React, TypeScript and Vite.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2bdb562-f774-4246-b599-9bb05d81eb6d/deploy-status)](https://app.netlify.com/sites/reminders-web-host/deploys)

This is a simple microfrontends architecture completely made with React and the bare minimum libraries.

At runtime the application will look for the bundle (JS and CSS) exposed by microfrontend and will embed it in the main application.  

Currently this host is consuming https://github.com/glaucopater/reminders-web-component

Setup
---
- Clone the repo
- Run yarn
- Copy .env.sample into .env
- Run yarn dev

Scripts
---
- dev: it runs the application in development mode
- build: build the application
- lint: check for linting errors

Note:
CORS should be enabled in order to let the architecture work. 
Look at the given netlify toml file if you need help.

Env Variables:
---
- VITE_REMOTE_MFE_URL: a remote microfrontend / web component url
- VITE_REMOTE_MFE_NAME: the name of the web component
