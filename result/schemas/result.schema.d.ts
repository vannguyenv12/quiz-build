import mongoose, { HydratedDocument } from 'mongoose';
import { Answer } from 'src/answer/schemas/answer.schemas';
import { Participation } from 'src/participation/schemas/participation.schema';
import { Question } from 'src/question/schemas/question.schema';
import { User } from 'src/user/schemas/user.schema';
export type ResultDocument = HydratedDocument<Result>;
export declare class Result {
    participation: Participation;
    user: User;
    question: Question;
    selectedAnswers: Answer[];
    isCorrect: boolean[];
}
export declare const ResultSchema: mongoose.Schema<Result, mongoose.Model<Result, any, any, any, mongoose.Document<unknown, any, Result> & Result & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Result, mongoose.Document<unknown, {}, mongoose.FlatRecord<Result>> & mongoose.FlatRecord<Result> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
