"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateParticipationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_participation_dto_1 = require("./create-participation.dto");
class UpdateParticipationDto extends (0, mapped_types_1.PartialType)(create_participation_dto_1.CreateParticipationDto) {
}
exports.UpdateParticipationDto = UpdateParticipationDto;
//# sourceMappingURL=update-participation.dto.js.map