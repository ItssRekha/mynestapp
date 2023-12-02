import { Controller, Get } from "@nestjs/common"
import { rejects } from "assert"
import { resolve } from "path"

@Controller('/books')
export class booksController {
    @Get('/findall')
    async findbooks()
    {
        return new Promise((resolve,reject)=>{
            resolve({
                hello: "songra"
            });
        }  );      
        
        
    }
    }
   

