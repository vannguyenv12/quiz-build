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
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './schemas/question.schema';
import { Model } from 'mongoose';
import { QuizService } from 'src/quiz/quiz.service';
export declare class QuestionService {
    private questionModel;
    private quizService;
    constructor(questionModel: Model<Question>, quizService: QuizService);
    create(createQuestionDto: CreateQuestionDto): Promise<import("mongoose").Document<unknown, {}, Question> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    uploadImage(body: any, fileName: string): Promise<void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Question> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Question> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Question, "find", {}>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Question> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    update(id: string, updateQuestionDto: UpdateQuestionDto): Promise<import("mongoose").Document<unknown, {}, Question> & Question & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
