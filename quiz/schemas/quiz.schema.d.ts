import mongoose, { HydratedDocument } from 'mongoose';
import { Question } from 'src/question/schemas/question.schema';
export type QuizDocument = HydratedDocument<Quiz>;
export declare class Quiz {
    title: string;
    description: string;
    questions: Question[];
    isDeleted: boolean;
}
export declare const QuizSchema: mongoose.Schema<Quiz, mongoose.Model<Quiz, any, any, any, mongoose.Document<unknown, any, Quiz> & Quiz & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Quiz, mongoose.Document<unknown, {}, mongoose.FlatRecord<Quiz>> & mongoose.FlatRecord<Quiz> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
