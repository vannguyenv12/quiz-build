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
exports.QuestionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const question_schema_1 = require("./schemas/question.schema");
const mongoose_2 = require("mongoose");
const quiz_service_1 = require("../quiz/quiz.service");
let QuestionService = class QuestionService {
    constructor(questionModel, quizService) {
        this.questionModel = questionModel;
        this.quizService = quizService;
    }
    async create(createQuestionDto) {
        const createdQuestion = new this.questionModel(createQuestionDto);
        const quiz = await this.quizService.findOne(`${createdQuestion.quiz}`);
        await this.quizService.pushQuestion(quiz, createdQuestion);
        return createdQuestion.save();
    }
    async uploadImage(body, fileName) {
        const question = await this.findOne(body.id);
        question.image = fileName;
        await question.save();
    }
    findAll() {
        return this.questionModel.find({ isDeleted: false });
    }
    async findOne(id) {
        const question = await this.questionModel.findById(id, {
            isDeleted: false,
        });
        if (!question)
            throw new common_1.NotFoundException(`Not found question with id: ${id}`);
        return question;
    }
    async update(id, updateQuestionDto) {
        const question = await this.findOne(id);
        question.text = updateQuestionDto.text;
        question.answerType = updateQuestionDto.answerType;
        return question.save();
    }
    async remove(id) {
        const question = await this.findOne(id);
        console.log('check question', question);
        question.isDeleted = true;
        await question.save();
        return { message: 'Delete question successfully!' };
    }
};
QuestionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(question_schema_1.Question.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        quiz_service_1.QuizService])
], QuestionService);
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.service.js.map