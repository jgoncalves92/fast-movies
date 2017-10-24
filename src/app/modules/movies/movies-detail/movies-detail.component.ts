import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.scss']
})
export class MoviesDetailComponent implements OnInit {

  movie: any = {};
  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit() {
    this.getMovie();
    this.getKeywords();
    this.getRecommendations();
  }

  getMovie() {
    this.route.params
      .switchMap((params: Params) => this.service.getDetail(+params['id']))
      .subscribe((movie) => {
        this.movie = movie;
        this.movie.runtimeFormated = this.formatDate(this.movie.runtime);
      });

  }

  getKeywords() {
    this.route.params
      .switchMap((params: Params) => this.service.getKeywords(+params['id']))
      .subscribe((result) => {
        this.movie.keywords = result.keywords;
      });
  }

  getRecommendations() {
    this.route.params
      .switchMap((params: Params) => this.service.getRecommendations(+params['id']))
      .subscribe((result) => {
        this.movie.recommendations = result.results;
      });
  }

  formatDate(minutes: number): string {
    if (!minutes) {
      return '';
    }

    let formated = (minutes / 60).toString().split(".")[0] + 'h' + (minutes % 60) + 'm';
    return formated;
  }

}
