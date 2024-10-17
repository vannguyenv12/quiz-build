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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
/// <reference types="mongoose-paginate-v2" />
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/quiz.schema").Quiz> & import("./schemas/quiz.schema").Quiz & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    findAll(page: number, limit: number): Promise<{
        message: string;
        data: import("mongoose").PaginateResult<import("mongoose").Document<unknown, {}, import("./schemas/quiz.schema").Quiz> & import("./schemas/quiz.schema").Quiz & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }>;
    }>;
    findOne(id: string): Promise<{
        message: string;
        totalQuestions: number;
        data: import("mongoose").Document<unknown, {}, import("./schemas/quiz.schema").Quiz> & import("./schemas/quiz.schema").Quiz & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/quiz.schema").Quiz> & import("./schemas/quiz.schema").Quiz & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
