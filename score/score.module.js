"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoreModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const participation_schema_1 = require("../participation/schemas/participation.schema");
const quiz_schema_1 = require("../quiz/schemas/quiz.schema");
const result_schema_1 = require("../result/schemas/result.schema");
const score_schema_1 = require("./schemas/score.schema");
const score_controller_1 = require("./score.controller");
const score_service_1 = require("./score.service");
let ScoreModule = class ScoreModule {
};
ScoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: score_schema_1.Score.name, schema: score_schema_1.ScoreSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: quiz_schema_1.Quiz.name, schema: quiz_schema_1.Quiz }]),
            mongoose_1.MongooseModule.forFeature([{ name: result_schema_1.Result.name, schema: result_schema_1.ResultSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: participation_schema_1.Participation.name, schema: participation_schema_1.ParticipationSchema },
            ]),
        ],
        controllers: [score_controller_1.ScoreController],
        providers: [score_service_1.ScoreService],
    })
], ScoreModule);
exports.ScoreModule = ScoreModule;
//# sourceMappingURL=score.module.js.map