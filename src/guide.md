# Guide to install packages for new vue3/vite project

## Installing Sass

``` 
yarn add -D sass 
```

## Installing Tailwind css

in order to install tailwind css in your project do as [here](https://tailwindcss.com/docs/guides/vite)

## Changing App.vue component to Main.vue

the reason behind this decision is that if the user want to build a layout named application it doesn't make the code reader confused.

## Installing Prettier

``` 
yarn add -D -E prettier 
```

## Installing EsLint

At this moment the version of eslint should be 8.22.0 because of some errors and issues.

``` 
yarn add -D -E eslint
```

```
yarn add -D eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/eslint-config-typescript
```

add the eslintPlugin to plugins list in vite.config.ts

```
... plugins: [vue(), eslintPlugin()],
```

you can find more in the following links:

[Link N.O.1](https://miyauchi.dev/posts/vite-vue3-typescript/)

[Link N.O.2](https://jivancic.com/posts/vue-vite-typescript-eslint.html)

[Link N.O.3](https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/)

## Installing Vuex / Pinia

```
yarn add pinia
```

create a folder named **store** and create a file named index.ts; in index.ts initialize the store using **createPinia** and refrence it to main.ts file.

## Installing Vue Router

```
yarn add vue-router@4
```

After installing this make a config file with type RouterOptions, and then import that config object into router and create router using **createRouter**.

## Installing Vue-press

```
yarn create vuepress-site
```

## Installing storybook

```
npx storybook init -p
```

## Installing Lodash

```
yarn add lodash
```
