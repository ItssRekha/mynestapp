import { Controller, Get ,Req,Post,HttpCode, HttpStatus} from "@nestjs/common"
import { Request } from "express"

@Controller('/users')
export class userController {
    @Get('/profile')
    getprofile(@Req() req :Request){   
        console.log(req.params)          //object return
        return{
             name :"Rekha"
        } 
        
    }

    @Post('/profile')
    @HttpCode(HttpStatus.NO_CONTENT)    
    addprofile(){   
        return "hiiiiiii"
    }


    }
   

