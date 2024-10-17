import { Model } from 'mongoose';
import { Answer } from 'src/answer/schemas/answer.schemas';
import { Participation } from 'src/participation/schemas/participation.schema';
import { Question } from 'src/question/schemas/question.schema';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
import { Result } from './schemas/result.schema';
export declare class ResultService {
    private resultModel;
    private answerModel;
    private questionModel;
    private participationModel;
    constructor(resultModel: Model<Result>, answerModel: Model<Answer>, questionModel: Model<Question>, participationModel: Model<Participation>);
    create(createResultDtos: CreateResultDto[], currentUser: any): Promise<{
        message: string;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateResultDto: UpdateResultDto): string;
    remove(id: number): string;
}
