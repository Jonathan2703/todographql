import { InputType, Field } from "@nestjs/graphql";
import { IsString, IsNotEmpty, MaxLength } from "class-validator";

@InputType()
export class CreateTodoInput {
    @Field(() => String, {description: 'Description of the todo'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    description: string;
}