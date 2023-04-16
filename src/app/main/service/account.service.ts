import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../models/account';
import { BehaviorSubject,Observable, map } from 'rxjs';

@Injectable()

export class AccountService {

    private userSubject: BehaviorSubject<Login> | undefined;
    public user:Observable<Login> | undefined;
    localStorage:Storage|undefined;

    constructor(private http:HttpClient){
        // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        //this.user = this.userSubject.asObservable();
    }



        login(loginInfo:Login){

            //  const httpOptions={
            //     headers:new HttpHeaders({"Content-Type":"application/json"}),
            //     observe:"response" as "response",
            //  };

             debugger;
             return this.http.post<Login>(`http://rlapi.mindwavetech.com:4041/api/user_login`,
                loginInfo)
                .pipe(map(data=>{
                    this.localStorage?.setItem('userInfo',JSON.stringify(data));
                    this.userSubject?.next(data);
                    return data;
                }));
        }
}
