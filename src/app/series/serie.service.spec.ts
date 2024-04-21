import { TestBed, async, inject } from '@angular/core/testing';
import { SerieService } from './serie.service';
import { HttpClientModule } from "@angular/common/http";

describe('SerieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SerieService]
    });
  });

  it('should be created', inject([SerieService], (service: SerieService) => {
    expect(service).toBeTruthy();
  }));
});
