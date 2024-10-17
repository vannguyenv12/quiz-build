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
import { Participation } from 'src/participation/schemas/participation.schema';
import { Quiz } from 'src/quiz/schemas/quiz.schema';
import { Result } from 'src/result/schemas/result.schema';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { Score } from './schemas/score.schema';
export declare class ScoreService {
    private scoreModel;
    private resultModel;
    private quizModel;
    private participationModel;
    constructor(scoreModel: Model<Score>, resultModel: Model<Result>, quizModel: Model<Quiz>, participationModel: Model<Participation>);
    create(createScoreDto: CreateScoreDto, currentUser: any): Promise<import("mongoose").Document<unknown, {}, Score> & Score & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>;
    markZeroScore(createScoreDto: CreateScoreDto, currentUser: any): Promise<void>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Score> & Score & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Score> & Score & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Score, "find", {}>;
    findMyScores(currentUser: any): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Score> & Score & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    })[], import("mongoose").Document<unknown, {}, Score> & Score & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, {}, Score, "find", {}>;
    findOne(id: number): string;
    update(id: number, updateScoreDto: UpdateScoreDto): string;
    remove(id: number): string;
}
