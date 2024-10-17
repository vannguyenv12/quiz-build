import mongoose, { HydratedDocument } from 'mongoose';
import { Quiz } from 'src/quiz/schemas/quiz.schema';
import { User } from 'src/user/schemas/user.schema';
export type ParticipationDocument = HydratedDocument<Participation>;
export declare class Participation {
    user: User;
    quiz: Quiz;
    startedAt: Date;
    finishedAt: Date;
}
export declare const ParticipationSchema: mongoose.Schema<Participation, mongoose.Model<Participation, any, any, any, mongoose.Document<unknown, any, Participation> & Participation & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Participation, mongoose.Document<unknown, {}, mongoose.FlatRecord<Participation>> & mongoose.FlatRecord<Participation> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
