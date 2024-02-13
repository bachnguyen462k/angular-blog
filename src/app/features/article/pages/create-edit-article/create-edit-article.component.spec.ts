import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditArticleComponent } from './create-edit-article.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { from } from 'rxjs';
import { mockHttpClient, mockHttpHandler } from '../../../../shared/tests/mock-http-client';

describe('CreateEditArticleComponent', () => {
  let component: CreateEditArticleComponent;
  let fixture: ComponentFixture<CreateEditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditArticleComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {params: from([{id: 'x'}])} },
        { provide: HttpClient, useValue: mockHttpClient },
        { provide: HttpHandler, useValue: mockHttpHandler },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve an existing article per the URL parameter', () => {
    throw 'not implemented';
  });

  it('should add a tag when one is typed in', () => {
    throw 'not implemented';
  });
});
