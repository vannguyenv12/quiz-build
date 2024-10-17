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
exports.ResultService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const answer_schemas_1 = require("../answer/schemas/answer.schemas");
const participation_schema_1 = require("../participation/schemas/participation.schema");
const question_schema_1 = require("../question/schemas/question.schema");
const result_schema_1 = require("./schemas/result.schema");
let ResultService = class ResultService {
    constructor(resultModel, answerModel, questionModel, participationModel) {
        this.resultModel = resultModel;
        this.answerModel = answerModel;
        this.questionModel = questionModel;
        this.participationModel = participationModel;
    }
    async create(createResultDtos, currentUser) {
        for (const createResultDto of createResultDtos) {
            const participation = await this.participationModel.findById(createResultDto.participation);
            if (!participation)
                throw new common_1.NotFoundException(`Not found participation with id ${createResultDto.participation}`);
            const isCorrects = [];
            for (const answer of createResultDto.selectedAnswers) {
                const answerEntity = await this.answerModel.findById(answer);
                if (!answerEntity) {
                    throw new common_1.NotFoundException(`Not found answer with ID: ${answer}`);
                }
                isCorrects.push(answerEntity.isCorrect);
            }
            const createdResult = new this.resultModel(Object.assign(Object.assign({}, createResultDto), { isCorrect: isCorrects, user: currentUser.id }));
            await createdResult.save();
        }
        return { message: 'Submit successfully' };
    }
    findAll() {
        return `This action returns all result`;
    }
    findOne(id) {
        return `This action returns a #${id} result`;
    }
    update(id, updateResultDto) {
        return `This action updates a #${id} result`;
    }
    remove(id) {
        return `This action removes a #${id} result`;
    }
};
ResultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(1, (0, mongoose_1.InjectModel)(answer_schemas_1.Answer.name)),
    __param(2, (0, mongoose_1.InjectModel)(question_schema_1.Question.name)),
    __param(3, (0, mongoose_1.InjectModel)(participation_schema_1.Participation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ResultService);
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map