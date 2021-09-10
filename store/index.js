export const mutations = {
    LOGOUT_USER(state){
        state.currentUser = {}
        window.localStorage.currentUser = JSON.stringify({});

    },
    SET_CURRENT_USER(state, user){
        state.currentUser = user;
        window.localStorage.currentUser = JSON.stringify(user);
    }
}



    export const actions ={

        async loadUsers({commit}){
            let response = await axios.get('/users');
            let users = response.data.data.users;
            commit('SET_USERS', users.map(u => u.attributes.name));

            let user =Json.parse(window.localStorage.currentUser())
            commit('SET_CURRENT_USER')
        },
        async loadCurrentUser({commit}){
            let user =Json.parse(window.localStorage.currentUser())
            commit('SET_CURRENT_USER')
        },

        logoutUser({commit}){
            commit('LOGOUT_USER');
        },
        async loginUser({commit},loginInfo){
            try {
                // Esto hay que verlo senor kevin y señora cristina
                const ip = process.env.baseUrl
                let response = await axios.post(ip+'/auth',loginInfo)
                let user = response.data.data.attributes;
                commit('SET_CURRENT_USER',user);
            } catch (error) {
                return {error: "Nombre de usuario o contraseña es incorrecto"}
                
            }
        },
        async registerUser({commit},registrationInfo) {
            try {
                let response = await axios.post(ip+'/users',registrationInfo)
                let user =  response.data.data.attributes;

                commit('SET_CURRENT_USER',user)
                return user;

            }catch{
                return {error: " :( Ocurrio un error. Porfavor intenta nuevamente!"}

            }
        }

        // async loadUsers({commit}){


        // }

    }