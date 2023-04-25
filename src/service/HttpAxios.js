import axios from "axios";

const url_servidor = "http://127.0.0.1:8000/api";

export const http = () => {
    const token = localStorage.getItem("access_token");
    const interceptor = axios.create({
        baseURL: url_servidor,
        headers: {
            'Accept': 'aplication/json',
            'Authorization': 'Bearer' + token
        }
    });

    //Configurar e interceptar errores y redirecciones
    interceptor.interceptors.response.use(
        (response) => {
            return response
        },
        (error) =>{
            if(error.response.status === 401){
                window.location.href = "/login"
            }
            return Promise.reject(error)
        }
    )

    return interceptor;
}
