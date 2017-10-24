import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {

  private key: string = '1bf6fc151b8102455d1491037bd99007';
  private baseUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: Http) { }

  get(url: string, params?: string): Observable<Response> {
    let requestUrl = `${this.baseUrl}${url}?api_key=${this.key}&language=pt-BR`;

    if (params != null && params != undefined && params != '') {
      requestUrl += params;
    }
    
    let options: RequestOptionsArgs = {};

    return this.http.get(requestUrl, options).map(
      (res: Response) => {
        return res;
      }).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'server error');
  }

}
