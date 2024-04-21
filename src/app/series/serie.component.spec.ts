import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SeriesListComponent } from './series-list.component';
import { SerieService } from './serie.service';
import { Serie } from './serie.model';
import { Observable, of } from 'rxjs';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;
  let debug: DebugElement;
  let serieService: SerieService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [SeriesListComponent],
      providers: [SerieService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    serieService = TestBed.inject(SerieService);

    // Mock de datos de series
    const series: Serie[] = [
      new Serie(1, 'Breaking Bad', 'AMC', 5, 'Description 1', 'https://www.example.com', 'https://i.imgur.com/example1.jpg'),
      new Serie(2, 'Orange Is the New Black', 'Netflix', 6, 'Description 2', 'https://www.example.com', 'https://i.imgur.com/example2.jpg')
    ];

    spyOn(serieService, 'getSeries').and.returnValue(of(series));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display series in a table', () => {
    const tableRows = debug.queryAll(By.css('tbody tr'));
    expect(tableRows.length).toBe(2);
  });

  it('should display average seasons', () => {
    const averageSeasonsText = debug.query(By.css('p')).nativeElement.textContent;
    expect(averageSeasonsText).toContain('Promedio de temporadas de todas las series:');
  });
});
