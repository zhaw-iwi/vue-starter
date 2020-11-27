# Infections Front-End
Sample application for Web Engineering and Information Management.

## Vue CLI installation

Install the Vue CLI on your computer. This only needs to be done once.

1. Open a terminal and install the Vue-CLI:
   ```
   npm install -g @vue/cli
   ```

2. Install the Vue-CLI service addon:
   ```
   npm install -g @vue/cli @vue/cli-service-global
   ```

## Project setup

The following steps are necessary to set up the project. This only needs to be done once per project.

1. Open the folder 'infections-fe' in Visual Studio Code (File -> Open Folder...)

2. Install all project dependencies. Open a terminal and run:
   ```
   npm install
   ```

### Development server

Open a terminal an run the following command to start the development server:
```
npm run serve
```

### Build the project

Open a terminal an run the following command to build the project:
```
npm run build
```

The output will be written to the folder 'dist'. You can then copy the content of this folder to the 'public' folder of your Spring Boot application

### Advanced configuration

* Lints and fixes files

  ```
  npm run lint
  ```

* Customize configuration
   
  See [Configuration Reference](https://cli.vuejs.org/config/).
