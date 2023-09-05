import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {API_HOST} from "./constants";
import {API_PORT} from "./constants";
import {IUserLogin} from "../interfaces/user";
import {Observable} from "rxjs";
import {IUserProfile} from "../interfaces/profile";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient ) { }

    private url: string = API_HOST + ':' + API_PORT + '/profiles';

    public getCurrentUserProfile(): Observable<IUserProfile>{
        return this.http.get(this.url + '/currentUser' );
    }

    public update(profileData: IUserProfile): Observable<any> {
        return this.http.patch(this.url + '/update', profileData)
    }
}
