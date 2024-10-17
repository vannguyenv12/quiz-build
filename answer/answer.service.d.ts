/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
/// <reference types="mongoose-paginate-v2" />
import { Model } from 'mongoose';
import { QuestionService } from 'src/question/question.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { UpdateAnswerDto } from './dto/update-answer.dto';
import { Answer } from './schemas/answer.schemas';
export declare class AnswerService {
    private answerModel;
    private questionService;
    constructor(answerModel: Model<Answer>, questionService: QuestionService);
    create(createAnswerDto: CreateAnswerDto): Promise<import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Answer, "find", {}>;
    findByQuestion(questionId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Answer, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Answer> & Answer & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    update(id: string, updateAnswerDto: UpdateAnswerDto): Promise<string>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
