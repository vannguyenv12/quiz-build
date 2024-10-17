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
exports.ScoreService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const participation_schema_1 = require("../participation/schemas/participation.schema");
const quiz_schema_1 = require("../quiz/schemas/quiz.schema");
const result_schema_1 = require("../result/schemas/result.schema");
const score_schema_1 = require("./schemas/score.schema");
let ScoreService = class ScoreService {
    constructor(scoreModel, resultModel, quizModel, participationModel) {
        this.scoreModel = scoreModel;
        this.resultModel = resultModel;
        this.quizModel = quizModel;
        this.participationModel = participationModel;
    }
    async create(createScoreDto, currentUser) {
        const participation = await this.participationModel.findById(createScoreDto.participation);
        if (!participation)
            throw new common_1.NotFoundException(`Not found participation with ID: ${participation}`);
        const results = await this.resultModel.find({
            participation: createScoreDto.participation,
        });
        console.log('check results', results);
        const quiz = await this.quizModel
            .findById(participation.quiz)
            .populate({ path: 'questions', match: { isDeleted: false } });
        console.log('check quiz', quiz);
        if (!quiz)
            throw new common_1.NotFoundException(`Not find quiz with ID: ${participation.quiz}`);
        const { questions } = quiz;
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            const result = results[i];
            if (result && result.question) {
                score += result.isCorrect.filter((c) => c === true).length;
            }
        }
        const scoreEntity = new this.scoreModel(Object.assign(Object.assign({}, createScoreDto), { user: currentUser._id, score, totalScore: questions.length }));
        return scoreEntity.save();
    }
    async markZeroScore(createScoreDto, currentUser) {
        const participation = await this.participationModel.findById(createScoreDto.participation);
        const quiz = await this.quizModel.findById(participation.quiz);
        if (!quiz)
            throw new common_1.NotFoundException(`Not find quiz with ID: ${participation.quiz}`);
        const { questions } = quiz;
        if (!participation)
            throw new common_1.NotFoundException(`Not found participation with ID: ${participation}`);
        const score = new this.scoreModel(Object.assign(Object.assign({}, createScoreDto), { user: currentUser._id, score: 0, totalScore: questions.length }));
        await score.save();
        throw new common_1.BadRequestException('Quiz has been finished! You got 0 score');
    }
    findAll() {
        return this.scoreModel.find({});
    }
    findMyScores(currentUser) {
        return this.scoreModel.find({ user: currentUser._id });
    }
    findOne(id) {
        return `This action returns a #${id} score`;
    }
    update(id, updateScoreDto) {
        return `This action updates a #${id} score`;
    }
    remove(id) {
        return `This action removes a #${id} score`;
    }
};
ScoreService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(score_schema_1.Score.name)),
    __param(1, (0, mongoose_1.InjectModel)(result_schema_1.Result.name)),
    __param(2, (0, mongoose_1.InjectModel)(quiz_schema_1.Quiz.name)),
    __param(3, (0, mongoose_1.InjectModel)(participation_schema_1.Participation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ScoreService);
exports.ScoreService = ScoreService;
//# sourceMappingURL=score.service.js.map