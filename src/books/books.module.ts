import { Module } from '@nestjs/common';
import { booksController } from './books.controller';

@Module({
  imports: [],
  controllers:[booksController] ,
  providers: [],
})
export class booksModule {
  constructor(){
    console.log("books Module") 
  }
}