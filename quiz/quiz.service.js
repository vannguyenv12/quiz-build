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
exports.QuizService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const quiz_schema_1 = require("./schemas/quiz.schema");
let QuizService = class QuizService {
    constructor(quizModel) {
        this.quizModel = quizModel;
    }
    create(createQuizDto) {
        const quizCreated = new this.quizModel(createQuizDto);
        return quizCreated.save();
    }
    pushQuestion(quiz, createdQuestion) {
        if (!quiz)
            throw new common_1.NotFoundException('Not found quiz');
        quiz.questions.push(createdQuestion);
        return quiz.save();
    }
    findAll(page, limit) {
        const options = {
            lean: true,
            limit: limit ? limit : 5,
            page: page ? page : 1,
            select: '-__v',
        };
        return this.quizModel.paginate({ isDeleted: false }, options);
    }
    findOne(id) {
        return this.quizModel
            .findById(id)
            .populate({ path: 'questions', match: { isDeleted: false } });
    }
    async update(id, updateQuizDto) {
        const quiz = await this.quizModel.findById(id, { isDeleted: false });
        if (!quiz)
            throw new common_1.NotFoundException(`Quiz ${id} not found`);
        quiz.title = updateQuizDto.title;
        if (updateQuizDto.description) {
            quiz.description = updateQuizDto.description;
        }
        return quiz.save();
    }
    async remove(id) {
        const quiz = await this.quizModel.findById(id);
        if (!quiz)
            throw new common_1.NotFoundException(`Quiz ${id} not found`);
        quiz.isDeleted = true;
        quiz.save();
        return { message: 'Delete quiz successfully!' };
    }
};
QuizService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(quiz_schema_1.Quiz.name)),
    __metadata("design:paramtypes", [Object])
], QuizService);
exports.QuizService = QuizService;
//# sourceMappingURL=quiz.service.js.map