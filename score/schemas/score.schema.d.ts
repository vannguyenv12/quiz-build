import mongoose, { HydratedDocument } from 'mongoose';
import { Participation } from 'src/participation/schemas/participation.schema';
import { User } from 'src/user/schemas/user.schema';
export type ScoreDocument = HydratedDocument<Score>;
export declare class Score {
    participation: Participation;
    user: User;
    score: number;
    totalScore: number;
    createdAt: Date;
}
export declare const ScoreSchema: mongoose.Schema<Score, mongoose.Model<Score, any, any, any, mongoose.Document<unknown, any, Score> & Score & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Score, mongoose.Document<unknown, {}, mongoose.FlatRecord<Score>> & mongoose.FlatRecord<Score> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
