import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosComponent} from './todos.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TodoDataService} from '../todo-data.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoApiService} from '../todo-api.service';
import {ApiMockService} from '../../api-mock.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent],
      providers: [
        TodoDataService,
        {
          provide: TodoApiService,
          useClass: ApiMockService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            data: Observable.create({
              todos: []
            })
          }
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
