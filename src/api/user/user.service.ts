import { Injectable } from "@nestjs/common";

@Injectable({})
export class UserService {
    signup() {
        // save the new user in the db
        return {msg: 'I am signed up'};
    }

    login() {
        return {msg: 'I am login in'};
    }
}