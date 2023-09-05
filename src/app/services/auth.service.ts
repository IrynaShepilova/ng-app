import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_HOST} from "./constants";
import {API_PORT} from "./constants";
import {Observable} from "rxjs";
import { IUserLogin } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor( private  http: HttpClient ) { }

    private url: string = API_HOST + ':' + API_PORT + '/user';
    private token!: string;

    public loginUser( user: IUserLogin ):Observable<any> {
        const options = { headers: { skip: "true" } }
        return this.http.post(this.url + '/login', user, options);
    }

    public createUser(user: IUserLogin): Observable<any>{
        const options = { headers: {skip:"true" } }
        return this.http.post(this.url + '/create', user, options);
    }

    public saveToken(token: string){
        localStorage.setItem('token', token);
        this.token = token;
    }

    public getToken(){
        return this.token = localStorage.getItem('token')! ;
    }

    public clearToken() {
        localStorage.removeItem('token');
    }

}
