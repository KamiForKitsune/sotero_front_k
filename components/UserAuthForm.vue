<template>
 <div id="app">
  <v-app :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }"  id="inspire">
    <v-container>
      <v-layout wrap>
        <v-flex sm12 md6 offset-md3>
          <v-card elevation="4" light tag="section">
            <v-card-title>
              <v-layout align-center justify-space-between>
                <h3 class="headline">
                  {{ platformName }}
                </h3>
                <v-flex>
                  <v-img :alt="platformName" class="ml-3" contain height="48px" position="center right" src="..\banner1.jpg"></v-img>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>Ingresa con tu usuario y contraseña: </p>
              <v-form>
                <v-text-field
                              outline
                              label="Username"
                              type="text"
                              v-model="userInfo.nombre"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              v-model="userInfo.contrasena"></v-text-field>
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions :class="{ 'pa-3': $vuetify.breakpoint.smAndUp }">
              <v-btn color="info" text>
                Forgot password?
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="info" :large="$vuetify.breakpoint.smAndUp"
              @click="loginUser">
                <v-icon left>lock</v-icon>
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm12 md6 offset-md3>
          <v-layout align-center justify-space-between>
            <p class="caption my-3">
              <a href="#">Privacy Policy</a>
              |
              <a href="#">Terms of Service</a>
            </p>
            <p class="caption my-3">Powered by <a href="#">VeryMelon</a></p>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>

</template>

<script>
import validations from "../utils/validations";

export default {
  
  props:["submitForm", "buttonText","platformName"],
  data() {
    return {
        valid:false,
        showPassword:false,
        hasName:false,
        userInfo: {
            nombre: '',
            contrasena: ''
        },
        ...validations
    }
  },
  methods: {
        async loginUser() {
          try {
            
          // alert('Tengo que acordarme: ',this.userInfo)
          this.$auth.loginWith('local',{
            data: this.userInfo
          })
          } catch (error) {
            console.log('Ha ocurrido un error: ',error);
          }
    }
  }
}
</script>