import { UserService } from "./user.service";
import { Body, Controller, Post} from "@nestjs/common";
import { Request } from "express";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signup')
    signup(@Body() dto: any) {
        console.log(dto,);
        return this.userService.signup();
    }

    @Post('login')
    login() {
        return this.userService.login();
    }
}