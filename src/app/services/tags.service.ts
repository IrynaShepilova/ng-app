import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { API_HOST } from "./constants";
import { API_PORT } from "./constants";
import {ITag} from "../interfaces/tag";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient ) {}

  private url:string = API_HOST + ':' + API_PORT + '/tags';

  public getTagsList(): Observable<ITag[]> {
    return this.http.get<ITag[]>(this.url);
  };

  public removeTag(tag: ITag){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {...tag},
    };
    return this.http.delete(this.url, options);
  }

  public addTag(name: string){
    const options = { name: name };
    return this.http.post(this.url, options);
  }
}
