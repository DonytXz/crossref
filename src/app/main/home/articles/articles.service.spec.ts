import { inject, TestBed } from '@angular/core/testing';

import { ArticlesService } from '../articles.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Observable, Subscription } from 'rxjs';
import { of } from 'rxjs';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    });
    service = TestBed.inject(ArticlesService);
  });

  // it('should add two numbers', () => {
  //   const mockData = {
  //     status: 'ok',
  //     'message-type': 'work-list',
  //     'message-version': '1.0.0',
  //     message: {},
  //   }; // can be anything
  //   const mockObservable = of(mockData);
  //   let result = service.getAllArticles(1, 5).subscribe((data) => {
  //     return data;
  //   });
  //   expect(result).toEqual(mockData as unknown as Subscription);
  // });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
