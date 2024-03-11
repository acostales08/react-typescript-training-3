import { Api } from "../http";
import { UserType } from "../Type/userType";


export class HttpRequest {
    public addNewUser(props: UserType) {
        return new Api().connect().post("/user", props)
    }

    public fetchUser(){
        return new Api().connect().get('/user')
    }
} 