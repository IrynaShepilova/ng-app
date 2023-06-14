import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_HOST} from "./constants";
import {API_PORT} from "./constants";
import {Observable} from "rxjs";
import { IUserLogin } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    constructor( private  http: HttpClient ) { }

    private url: string = API_HOST + ':' + API_PORT + '/user';

    public loginUser( user: IUserLogin ):Observable<any> {
        return this.http.post(this.url + '/login', user);
    }

    public createUser(user: IUserLogin): Observable<any>{
        return this.http.post(this.url + '/create', user);
    }

    public saveToken(token: string){
        console.log('token', token);
    }

}
