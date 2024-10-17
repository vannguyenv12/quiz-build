import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { SignInUserDto } from './dto/signin-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signUp(user: CreateUserDto): Promise<{
        accessToken: string;
    }>;
    signIn(user: SignInUserDto): Promise<{
        accessToken: string;
    }>;
}
