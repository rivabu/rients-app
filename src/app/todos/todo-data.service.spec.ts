/* tslint:disable:no-unused-variable */

import {TestBed, inject} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {TodoApiService} from "./todo-api.service";
import {ApiMockService} from "../api-mock.service";

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodoDataService,
        {
          provide: TodoApiService,
          useClass: ApiMockService
        }
      ]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

});
