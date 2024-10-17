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
exports.ScoreController = void 0;
const common_1 = require("@nestjs/common");
const score_service_1 = require("./score.service");
const create_score_dto_1 = require("./dto/create-score.dto");
const update_score_dto_1 = require("./dto/update-score.dto");
const authz_guard_1 = require("../user/guards/authz.guard");
const current_user_decorator_1 = require("../user/decorators/current-user.decorator");
let ScoreController = class ScoreController {
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    async create(createScoreDto, CurrentUser) {
        const data = await this.scoreService.create(createScoreDto, CurrentUser);
        return { message: 'Scoring successfully', data };
    }
    async markZero(createScoreDto, CurrentUser) {
        await this.scoreService.markZeroScore(createScoreDto, CurrentUser);
    }
    async findAll() {
        const data = await this.scoreService.findAll();
        return { message: 'Get all scores', data };
    }
    async findMy(user) {
        const data = await this.scoreService.findMyScores(user);
        return { message: 'Get all scores', data };
    }
    findOne(id) {
        return this.scoreService.findOne(+id);
    }
    update(id, updateScoreDto) {
        return this.scoreService.update(+id, updateScoreDto);
    }
    remove(id) {
        return this.scoreService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_score_dto_1.CreateScoreDto, Object]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/zero'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_score_dto_1.CreateScoreDto, Object]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "markZero", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(authz_guard_1.AuthzGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/me'),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScoreController.prototype, "findMy", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_score_dto_1.UpdateScoreDto]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ScoreController.prototype, "remove", null);
ScoreController = __decorate([
    (0, common_1.Controller)('api/v1/scores'),
    __metadata("design:paramtypes", [score_service_1.ScoreService])
], ScoreController);
exports.ScoreController = ScoreController;
//# sourceMappingURL=score.controller.js.map