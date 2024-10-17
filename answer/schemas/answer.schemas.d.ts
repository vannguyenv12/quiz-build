import mongoose, { HydratedDocument } from 'mongoose';
import { Question } from 'src/question/schemas/question.schema';
export type AnswerDocument = HydratedDocument<Answer>;
export declare class Answer {
    text: string;
    isCorrect: boolean;
    question: Question;
}
export declare const AnswerSchema: mongoose.Schema<Answer, mongoose.Model<Answer, any, any, any, mongoose.Document<unknown, any, Answer> & Answer & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Answer, mongoose.Document<unknown, {}, mongoose.FlatRecord<Answer>> & mongoose.FlatRecord<Answer> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
