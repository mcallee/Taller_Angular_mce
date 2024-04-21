import { Component, OnInit } from '@angular/core';
import { Serie } from './serie.model';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
})
export class SeriesListComponent implements OnInit {

  series: Serie[] = [];
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.getSerieList();
  }

  getSerieList(): void {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    let totalSeasons = 0;
    this.series.forEach(serie => {
      totalSeasons += serie.seasons;
    });
    this.averageSeasons = totalSeasons / this.series.length;
  }
}
