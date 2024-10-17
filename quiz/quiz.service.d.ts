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
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './schemas/quiz.schema';
import { PaginateModel } from 'mongoose';
export declare class QuizService {
    private quizModel;
    constructor(quizModel: PaginateModel<Quiz>);
    create(createQuizDto: CreateQuizDto): Promise<import("mongoose").Document<unknown, {}, Quiz> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    pushQuestion(quiz: any, createdQuestion: any): any;
    findAll(page: number, limit: number): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {}, Quiz> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Quiz> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Document<unknown, {}, Quiz> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Quiz, "findOne", {}>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<import("mongoose").Document<unknown, {}, Quiz> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
