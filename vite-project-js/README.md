# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

- entry: index.html
- dependency: package.json
- static resources: /public
- configuration: vite.config.js
- core: /src

## records & standards
- npm install vue-router@next vuex@next => router & data manage
- src
    ```bash
    ├── src
    │   ├── api            request
    │   ├── assets         static resources
    │   ├── components     
    │   ├── pages          
    │   ├── router         router config
    │   ├── store          vuex
    │   └── utils          common functions
    ```

### Error records
- Error: Cannot find module 'worker_threads'
    - node -v
    - upgrade node version / use nvm to manage node version(eg: 14)