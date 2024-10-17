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
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
export declare class ScoreController {
    private readonly scoreService;
    constructor(scoreService: ScoreService);
    create(createScoreDto: CreateScoreDto, CurrentUser: any): Promise<{
        message: string;
        data: import("mongoose").Document<unknown, {}, import("./schemas/score.schema").Score> & import("./schemas/score.schema").Score & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        };
    }>;
    markZero(createScoreDto: CreateScoreDto, CurrentUser: any): Promise<void>;
    findAll(): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/score.schema").Score> & import("./schemas/score.schema").Score & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
    }>;
    findMy(user: any): Promise<{
        message: string;
        data: (import("mongoose").Document<unknown, {}, import("./schemas/score.schema").Score> & import("./schemas/score.schema").Score & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        })[];
    }>;
    findOne(id: string): string;
    update(id: string, updateScoreDto: UpdateScoreDto): string;
    remove(id: string): string;
}
