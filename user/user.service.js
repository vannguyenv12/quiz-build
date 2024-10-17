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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const bcrypt = require("bcrypt");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    create(createUserDto) {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
    async add(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 8);
        const createdUser = new this.userModel(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
        return createdUser.save();
    }
    findAll(page, limit) {
        const options = {
            lean: true,
            limit: limit ? limit : 5,
            page: page ? page : 1,
            select: '-password -__v',
        };
        return this.userModel.paginate({ isDeleted: false }, options);
    }
    async findOne(id) {
        const user = await this.userModel
            .findOne({ _id: id, isDeleted: false })
            .select('-password');
        if (!user)
            throw new common_1.NotFoundException(`User not found with ID: ${id}`);
        return user;
    }
    async findOneByEmail(email) {
        const user = await this.userModel.findOne({ email, isDeleted: false });
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        user.name = updateUserDto.name;
        await user.save();
    }
    async remove(id) {
        const user = await this.findOne(id);
        user.isDeleted = true;
        await user.save();
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map