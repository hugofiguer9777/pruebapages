import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  body: {}
};

//const address = 'http://loadbalancerr2-131732246.us-east-2.elb.amazonaws.com/'
const address = 'http://lb-redes2-p-1962070032.us-east-2.elb.amazonaws.com'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  PostRequest(serverAddress: string, info: object): Observable<any> {
    console.log(serverAddress);
    return this.httpClient.post<any>(address + serverAddress, info, { observe: 'response' });
  }

  GetRequest(serverAddress: string): Observable<any> {
    console.log(serverAddress);
    return this.httpClient.get<any>(address + serverAddress, { observe: 'response' });
  }

  PutRequest(serverAddress: string, info: object): Observable<any> {
    console.log(serverAddress);
    return this.httpClient.put<any>(address + serverAddress, info, {observe:'response'});
  }

  DeleteRequest(serverAddress: string): Observable<any> {
    console.log(serverAddress);
    return this.httpClient.delete<any>(address + serverAddress, {observe:'response'});
  }
}
