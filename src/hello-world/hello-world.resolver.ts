import { Resolver, Query, Float, Int, Args } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query(() => String, { description: 'Hola Mundo es lo que retorna', name: 'hello' })
    helloWorld(): string {
        return 'Hola Mundo!';
    }

    @Query(() => Float, {name: 'randomNumber'})
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, {name: 'randomFromZeroTo', description: 'Genera un numero aleatorio entre 0 y el numero que se le pase como parametro'})
    getRandomFromZeroTo(
        @Args('to', {nullable:true ,type: () => Int}) to: number = 6
    ):number {
        //genera un numero aleatorio entre 0 y 10
        return Math.floor(Math.random() * to);
    }
}
