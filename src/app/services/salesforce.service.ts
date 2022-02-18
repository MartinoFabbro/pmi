import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesforceService {

  url = 'https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';

  constructor(private http: HttpClient) {
  }

  sendForm(obj: any): Promise<any>{
    const headers = new HttpHeaders()
      .append('Access-Control-Allow-Origin', '*');
    return this.http.post(this.url, obj, {headers}).toPromise();
  }
}
