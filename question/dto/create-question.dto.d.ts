import mongoose from 'mongoose';
export declare class CreateQuestionDto {
    text: string;
    answerType: 'single' | 'multiple';
    quiz: mongoose.Schema.Types.ObjectId;
}
