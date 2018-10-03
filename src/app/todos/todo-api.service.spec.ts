import { TestBed, inject } from '@angular/core/testing';

import { BaseRequestOptions, Http, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import {TodoApiService} from "./todo-api.service";
import {HttpClient} from '@angular/common/http';

describe('TodoApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient, useFactory: (backend, options) => {
            return new HttpClient(options);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        MockBackend,
        BaseRequestOptions,
        TodoApiService
      ]
    });
  });

  it('should ...', inject([TodoApiService], (service: TodoApiService) => {
    expect(service).toBeTruthy();
  }));
});
