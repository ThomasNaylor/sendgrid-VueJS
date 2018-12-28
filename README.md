# sendgrid

This is a basic example of using sendgrid with vuejs and firebase.

##### requirements:

* vuejs
* vuetify
* vuex
* axios
* firebase - blaze plan or higher

files for configuration with api keys etc:
* main.js
* functions/index.js

Project uses vuejs with vuetify to build a contact form. The form sends the contents through the store.js file into a firebase realtime databse. From there a cloud function will trigger and call the sendgrid function to complete the sending of the mail.

###### happy mailing

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
