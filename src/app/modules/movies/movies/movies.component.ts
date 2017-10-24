import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  page = 1;
  totalPages: number;
  totalResults: number;
  movies = [];
  years = [];
  
  year = new Date().getFullYear() - 1;
  order = 'popularity.desc';

  defaultOverview = 'Não temos uma sinopse em Português do Brasil. Você pode ajudar a ampliar o nosso banco de dados adicionando uma.';
  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.getMovies(this.page, this.year, this.order);
    this.getYears();
  }

  getMovies(page: number, year: number, order: string) {
    this.service.get(page, year, this.order)
      .subscribe(result => {
        this.page = result.page;
        this.totalPages = result.total_pages;
        this.totalResults = result.total_results;
        this.movies = result.results;
      });
  }

  getYears() {
    for (let year = new Date().getFullYear(); year >= 1900; year--) {
      this.years.push(year);
    }
  }

  onChangeYear(event) {
    this.page = 1;
    this.getMovies(this.page, event.target.value, this.order);
  }

  onChangeOrder(event) {
    this.page = 1;
    this.getMovies(this.page, this.year, event.target.value);
  }

  onPreviewPage() {
    this.getMovies(--this.page, this.year, this.order);
  }

  onNextPage() {
    this.getMovies(++this.page, this.year, this.order);
  }

}
