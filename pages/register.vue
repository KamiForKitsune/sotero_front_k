<template>
  <v-container>
    <h1>Login </h1>

    <UserAuthForm buttonText="Register" :submitForm="registerUser" />
  </v-container>
</template>

<script>
  import axios from "axios"
  import UserAuthForm from '../components/UserAuthForm';
  export default {
     components: {
        UserAuthForm
        },

    methods: {
        async registerUser(registrationinfo) {
          await axios.post('/users', registrationinfo)
          this.$auth.loginWith('local',{
            data:registrationinfo
          })
        }
    }
    
  }
</script>
