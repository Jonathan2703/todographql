import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoInput, UpdateTodoInput, StatusArgs } from './dto';
import { AggregationsType } from './types/aggregations.type';

@Resolver(()=>Todo)
export class TodoResolver {

    constructor(
        private readonly todoService: TodoService
    ) {}
    
    @Query(()=> [Todo], {name: 'todos'})
    findAll(
        @Args() statusArgs: StatusArgs
    ): Todo[] {
        return this.todoService.findAll(statusArgs);
    }

    @Query(()=> Todo, {name: 'todo'})
    findOne(
        @Args('id', {type: () => Int}) id: number
    ) {
        return this.todoService.findOne(id);
    }
    
    @Mutation(()=> Todo, {name: 'createTodo'})
    createTodo(
        @Args('createTodoInput') createTodoInput:CreateTodoInput
    ) {
        return this.todoService.create(createTodoInput);
    }

    @Mutation(()=> Todo, {name: 'updateTodo'})
    updateTodo(
        @Args('updateTodoInput') updateTodoInput:UpdateTodoInput
    ) {
        return this,this.todoService.update(updateTodoInput.id, updateTodoInput)
    }


    @Mutation(() => Boolean)
    deleteTodo(
        @Args('id', {type: () => Int}) id: number
    ) {
        return this.todoService.delete(id);
    }

    //Aggregations
    @Query(()=> Int, {name: 'totalTodos'})
    totalTodos() {
        return this.todoService.totalTodos;
    }

    //completedTodos
    @Query(()=> Int, {name: 'completedTodos'})
    completedTodos() {
        return this.todoService.completedTodos;
    }
    //pendingTodos
    @Query(()=> Int, {name: 'pendingTodos'})
    pendingTodos() {
        return this.todoService.pendingTodos;
    }

    @Query (()=> AggregationsType)
    aggregactions(): AggregationsType {
        return {
            completed: this.todoService.completedTodos,
            pending: this.todoService.pendingTodos,
            total: this.todoService.totalTodos,
            totalTodosCompleted: this.todoService.totalTodos        }
    }
}
