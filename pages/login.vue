<template>
  <v-container>
    <UserAuthForm buttonText="Login" :submitForm="loginUser"/>
  </v-container>
</template>

<script>
import UserAuthForm from '../components/UserAuthForm'
export default {
  component: {
    UserAuthForm},



  computed:{
    

  },
  methods: {
    loginUser(loginInfo) {
      this.$auth.loginWith('local',{
        data: loginInfo
      })
    }
  }
}
</script>

<style>

</style>