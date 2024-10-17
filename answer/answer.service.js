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
exports.AnswerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const question_service_1 = require("../question/question.service");
const answer_schemas_1 = require("./schemas/answer.schemas");
let AnswerService = class AnswerService {
    constructor(answerModel, questionService) {
        this.answerModel = answerModel;
        this.questionService = questionService;
    }
    async create(createAnswerDto) {
        const question = await this.questionService.findOne(createAnswerDto.question);
        const createdAnswer = new this.answerModel(createAnswerDto);
        return createdAnswer.save();
    }
    findAll() {
        return this.answerModel.find();
    }
    findByQuestion(questionId) {
        return this.answerModel.find({ question: questionId });
    }
    async findOne(id) {
        const answer = await this.answerModel.findOne({ _id: id });
        if (!answer)
            throw new common_1.BadRequestException(`Not found answer with ID: ${id}`);
        return answer;
    }
    async update(id, updateAnswerDto) {
        const answer = await this.findOne(id);
        return `This action updates a #${id} answer`;
    }
    async remove(id) {
        await this.answerModel.findByIdAndDelete(id);
        return { message: 'Delete answer successfully!' };
    }
};
AnswerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(answer_schemas_1.Answer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        question_service_1.QuestionService])
], AnswerService);
exports.AnswerService = AnswerService;
//# sourceMappingURL=answer.service.js.map