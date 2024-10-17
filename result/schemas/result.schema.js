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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultSchema = exports.Result = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const participation_schema_1 = require("../../participation/schemas/participation.schema");
const question_schema_1 = require("../../question/schemas/question.schema");
const user_schema_1 = require("../../user/schemas/user.schema");
let Result = class Result {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Participation' }),
    __metadata("design:type", participation_schema_1.Participation)
], Result.prototype, "participation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Result.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Question' }),
    __metadata("design:type", question_schema_1.Question)
], Result.prototype, "question", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.default.Schema.Types.ObjectId, ref: 'Answer' }] }),
    __metadata("design:type", Array)
], Result.prototype, "selectedAnswers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [false] }),
    __metadata("design:type", Array)
], Result.prototype, "isCorrect", void 0);
Result = __decorate([
    (0, mongoose_1.Schema)()
], Result);
exports.Result = Result;
exports.ResultSchema = mongoose_1.SchemaFactory.createForClass(Result);
//# sourceMappingURL=result.schema.js.map