import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from './data.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class SharedService {
  constructor(private service: DataService) { }
  
    search(query) {
      let url = '/search/movie';
  
      return this.service.get(url, `&query=${query}`).map((response: Response) => {
        return response.json().results;
      });
    }

}
