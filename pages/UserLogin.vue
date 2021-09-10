<template>
    <div>
        <v-form>
        <v-text-field v-model="loginInfo.nombre" label ="Nombre de usuario"
        :rules="[required('nombre')]"
        /> 
        <v-form-field v-model="loginInfo.contrasena"
            label="Contraseña"
            :type="showPassword ? 'text' : 'contrasena'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            counter = true
            :rules="[required('password'),minLength('password',6)]"
            />
        </v-form>
        <UserAuthForm :submitForm="loginUser"/>
    </div>
</template>

<script>
// import validations from '@/utils/validations'
import UserAuthForm from '../components/UserAuthForm';
export default {
    components:{
        UserAuthForm
    },
    
    methods: {
        async loginUser(loginInfo) {
            let response = await this.$store.dispatch('loginUser', loginInfo);
            if(user.error) {
                alert(user.error)

            }else{
                alert('Usted se ha logeado')
            }
        }

    }
}
</script>