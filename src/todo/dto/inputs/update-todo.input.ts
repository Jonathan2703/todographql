import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsBoolean, IsInt, Min } from "class-validator";

@InputType()
export class UpdateTodoInput {
    @Field(() => Int)
    @IsInt()
    @Min(1)
    id: number


    @Field(() => String, {description: 'Description of the todo', nullable: true})
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @IsOptional()
    description?: string;

    @Field(() => Boolean, {description: 'Done status of the todo', nullable: true})
    @IsOptional()
    @IsBoolean()
    done?: boolean;
}