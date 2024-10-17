"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnswerModule = void 0;
const common_1 = require("@nestjs/common");
const answer_service_1 = require("./answer.service");
const answer_controller_1 = require("./answer.controller");
const mongoose_1 = require("@nestjs/mongoose");
const answer_schemas_1 = require("./schemas/answer.schemas");
const question_module_1 = require("../question/question.module");
const question_service_1 = require("../question/question.service");
const question_schema_1 = require("../question/schemas/question.schema");
const quiz_schema_1 = require("../quiz/schemas/quiz.schema");
const quiz_module_1 = require("../quiz/quiz.module");
const quiz_service_1 = require("../quiz/quiz.service");
let AnswerModule = class AnswerModule {
};
AnswerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: answer_schemas_1.Answer.name, schema: answer_schemas_1.AnswerSchema },
                { name: question_schema_1.Question.name, schema: question_schema_1.QuestionSchema },
                { name: quiz_schema_1.Quiz.name, schema: quiz_schema_1.QuizSchema },
            ]),
            question_module_1.QuestionModule,
            quiz_module_1.QuizModule,
        ],
        controllers: [answer_controller_1.AnswerController],
        providers: [answer_service_1.AnswerService, question_service_1.QuestionService, quiz_service_1.QuizService],
    })
], AnswerModule);
exports.AnswerModule = AnswerModule;
//# sourceMappingURL=answer.module.js.map