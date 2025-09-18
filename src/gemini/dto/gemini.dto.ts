import { ApiProperty } from '@nestjs/swagger';

export class Dto {
  @ApiProperty()
  file: {
    type: 'string',
    format: 'binary',
  };

  // @ApiProperty()
  // description?: string;
}

export class DescriptionDto {
  @ApiProperty()
  description: string;
}
