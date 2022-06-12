import GenericService from "./GenericService";
import { toast } from "react-toastify";

class UserLoginService extends GenericService {
    constructor() {
        super();
    }

    login = (email,password) => new Promise((resolve,reject) => {
        this.post("users/login", {email,password})
        .then((token) => {
            localStorage.setItem("token",token);
            resolve(token);
        })
        .catch((err) => {
            reject(err);
        });
    });

    register = (fullName,contactNumber,email,password) => new Promise((resolve,reject) => {
        this.post("users/register", {fullName,contactNumber,email,password})
        .then((dataToReturn) => {
            resolve(dataToReturn);
            console.log(dataToReturn);
        })
        .catch((err) => {
            reject();
            console.log(err);
            toast.error(err.response.data, {
                closeOnClick: true,
                pauseOnHover: true,
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        });
    });
    
    logout = () => {
        localStorage.removeItem("token");
    }; 

    isLoggedIn = () => {
        return localStorage.getItem("token") ? true : false;
    };
}

let userLoginService = new UserLoginService;
export default userLoginService;