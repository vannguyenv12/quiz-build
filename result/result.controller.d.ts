import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { UpdateResultDto } from './dto/update-result.dto';
export declare class ResultController {
    private readonly resultService;
    constructor(resultService: ResultService);
    create(createResultDto: CreateResultDto[], currentUser: any): Promise<{
        message: string;
        data: Promise<{
            message: string;
        }>;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateResultDto: UpdateResultDto): string;
    remove(id: string): string;
}
