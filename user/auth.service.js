"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("./user.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signUp(user) {
        const { name, email, password } = user;
        const userByEmail = await this.userService.findOneByEmail(email);
        if (userByEmail)
            throw new common_1.BadRequestException('Email already in used');
        const hashedPassword = await bcrypt.hash(password, 8);
        const userCreated = await this.userService.create({
            name,
            email,
            password: hashedPassword,
        });
        const payload = {
            id: userCreated._id,
            name: userCreated.name,
            email: userCreated.email,
            role: userCreated.role,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken };
    }
    async signIn(user) {
        const { email, password } = user;
        const userByEmail = await this.userService.findOneByEmail(email);
        if (!userByEmail)
            throw new common_1.BadRequestException('Invalid Credentials');
        const isMatchPassword = await bcrypt.compare(password, userByEmail.password);
        if (!isMatchPassword)
            throw new common_1.BadRequestException('Invalid Credentials');
        const payload = {
            id: userByEmail._id,
            name: userByEmail.name,
            email: userByEmail.email,
            role: userByEmail.role,
        };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map