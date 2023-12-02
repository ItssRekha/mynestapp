import { Module } from '@nestjs/common';
import { userModule } from './users/user.module';
import { booksModule } from './books/books.module';

@Module({
  imports: [],
  controllers:[userModule,booksModule] ,
  providers: [],
})
export class appModule {
  constructor(){
    console.log("App Module")
  }
}