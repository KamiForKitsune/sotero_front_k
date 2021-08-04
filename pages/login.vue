<template>
    <v-app>
        <v-content>
         <v-container fluid fill-height @keyup.enter="login()">
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              prepend-icon="person"
                              name="login"
                              label="Login"
                              type="text"
                              v-model="log.usr"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              prepend-icon="lock"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="log.passwd"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Iniciar!</v-btn>
                     </v-card-actions>
                  </v-card>
                  <v-alert type="error" :value="error">
                        usuario o contraseña incorrector
                  </v-alert>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
    </v-app>
</template>


<script>
export default {

     data: () => ({
         log:{
             usr:null,
             passwd:null,
         },
         error = false
     }),
     computed: {
      loginStatus: function (){
        try {
          var estado = this.$store.state.login.loginStatus

          if(estado){
            this.$router.push('/fichaA')
          }
        } catch (error) {
          console.log(error)
        }
      }
    },

     methods:{
         login: async function (){
             try {
                 await this.$auth.loginWith('local', {
                     data: this.log
                 }).then(console.log("We are logged in"))

             } catch (error) {
                 console.log("error al iniciar sesion",error);
                 this.error = true
                 
             }

         }
     
     }

}
</script>