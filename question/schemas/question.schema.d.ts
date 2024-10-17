import mongoose, { HydratedDocument } from 'mongoose';
import { Quiz } from 'src/quiz/schemas/quiz.schema';
export type QuestionDocument = HydratedDocument<Question>;
export declare class Question {
    text: string;
    answerType: 'single' | 'multiple';
    image: string;
    isDeleted: boolean;
    quiz: Quiz;
}
export declare const QuestionSchema: mongoose.Schema<Question, mongoose.Model<Question, any, any, any, mongoose.Document<unknown, any, Question> & Question & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Question, mongoose.Document<unknown, {}, mongoose.FlatRecord<Question>> & mongoose.FlatRecord<Question> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
