import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickimortyService {

  baseurl = environment.Baseurl;

  constructor(private http: HttpClient) { }

  getCharacters(params: any){
    return this.http.get(`${this.baseurl}/character`,{params});
  }
}
