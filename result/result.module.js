"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultModule = void 0;
const common_1 = require("@nestjs/common");
const result_service_1 = require("./result.service");
const result_controller_1 = require("./result.controller");
const mongoose_1 = require("@nestjs/mongoose");
const result_schema_1 = require("./schemas/result.schema");
const answer_schemas_1 = require("../answer/schemas/answer.schemas");
const question_schema_1 = require("../question/schemas/question.schema");
const participation_schema_1 = require("../participation/schemas/participation.schema");
let ResultModule = class ResultModule {
};
ResultModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: answer_schemas_1.Answer.name, schema: answer_schemas_1.AnswerSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: question_schema_1.Question.name, schema: question_schema_1.QuestionSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: participation_schema_1.Participation.name, schema: participation_schema_1.ParticipationSchema },
            ]),
        ],
        controllers: [result_controller_1.ResultController],
        providers: [result_service_1.ResultService],
    })
], ResultModule);
exports.ResultModule = ResultModule;
//# sourceMappingURL=result.module.js.map