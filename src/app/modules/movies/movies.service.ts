import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../shared/data.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  constructor(private service: DataService) { }

  get(page: number, year: number, order: string) {
    let url = '/discover/movie';

    return this.service.get(url, `&page=${page}&primary_release_year=${year}&sort_by=${order}`).map((response: Response) => {
      return response.json();
    });
  }

  getDetail(movieId: number) {
    let url = `/movie/${movieId}`;

    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getKeywords(movieId: number) {
    let url = `/movie/${movieId}/keywords`;

    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getRecommendations(movieId: number) {
    let url = `/movie/${movieId}/recommendations`;

    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
