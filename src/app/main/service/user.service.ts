import { Injectable } from "@angular/core";
import { HttpHandler,HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { environment } from "src/environments/environment";
import { map } from "rxjs";

@Injectable()

export class UserService{

constructor(private http:HttpClient,
            private userInfo:User){
}

getUserDetails(userId:number,appId:string){
    debugger;
            this.http.get<User>(`${environment.apiUrl}/api/get_total_agents_data`)
            .pipe(map(data=>{
                this.userInfo=data;
                return data
            }));
}

    
}