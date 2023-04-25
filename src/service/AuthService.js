import {http} from "./HttpAxios"

export default{
    loginConLaravel(datos){
        return http().post("/v1/auth/login", datos)
    },
    registro(){

    },
    perfil(){
        return http().get("/v1/auth/perfil")
    }
}