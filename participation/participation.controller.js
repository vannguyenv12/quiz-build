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
exports.ParticipationController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../user/decorators/current-user.decorator");
const auth_guard_1 = require("../user/guards/auth.guard");
const create_participation_dto_1 = require("./dto/create-participation.dto");
const update_participation_dto_1 = require("./dto/update-participation.dto");
const participation_service_1 = require("./participation.service");
let ParticipationController = class ParticipationController {
    constructor(participationService) {
        this.participationService = participationService;
    }
    async create(createParticipationDto, currentUser) {
        const data = await this.participationService.create(createParticipationDto, currentUser);
        return { message: 'Join a quiz successfully', data };
    }
    findAll() {
        return this.participationService.findAll();
    }
    findOne(id) {
        return this.participationService.findOne(+id);
    }
    update(id, updateParticipationDto) {
        return this.participationService.update(+id, updateParticipationDto);
    }
    remove(id) {
        return this.participationService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participation_dto_1.CreateParticipationDto, Object]),
    __metadata("design:returntype", Promise)
], ParticipationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_participation_dto_1.UpdateParticipationDto]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParticipationController.prototype, "remove", null);
ParticipationController = __decorate([
    (0, common_1.Controller)('api/v1/participations'),
    __metadata("design:paramtypes", [participation_service_1.ParticipationService])
], ParticipationController);
exports.ParticipationController = ParticipationController;
//# sourceMappingURL=participation.controller.js.map