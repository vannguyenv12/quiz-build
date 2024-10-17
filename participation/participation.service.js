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
exports.ParticipationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const participation_schema_1 = require("./schemas/participation.schema");
let ParticipationService = class ParticipationService {
    constructor(participationModel) {
        this.participationModel = participationModel;
    }
    create(createParticipationDto, currentUser) {
        const minute = createParticipationDto.finishedAt * 1000 * 60;
        const finishedAt = new Date(Date.now() + minute);
        const createdParticipation = new this.participationModel(Object.assign(Object.assign({}, createParticipationDto), { user: currentUser.id, finishedAt: finishedAt }));
        return createdParticipation.save();
    }
    findAll() {
        return `This action returns all participation`;
    }
    findOne(id) {
        return `This action returns a #${id} participation`;
    }
    update(id, updateParticipationDto) {
        return `This action updates a #${id} participation`;
    }
    remove(id) {
        return `This action removes a #${id} participation`;
    }
};
ParticipationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(participation_schema_1.Participation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ParticipationService);
exports.ParticipationService = ParticipationService;
//# sourceMappingURL=participation.service.js.map