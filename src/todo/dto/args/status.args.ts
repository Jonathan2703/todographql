import { Field, ArgsType} from '@nestjs/graphql';
import { IsOptional, IsBoolean } from 'class-validator';

@ArgsType()
export class StatusArgs{
    @Field(()=>Boolean , {nullable: true})
    @IsOptional()
    @IsBoolean()
    status?: boolean;
}