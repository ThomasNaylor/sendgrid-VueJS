<template>
  <v-app>
    </v-toolbar>

    <v-content>
      <ContactForm/>
    </v-content>
  </v-app>
</template>

<script>
import ContactForm from './components/ContactForm'

export default {
  name: 'App',
  components: {
    ContactForm
  },
  data () {
    return {
      //
    }
  }
}
</script>
