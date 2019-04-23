import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriesListDisplayComponent } from './repositories-list-display.component';

describe('RepositoriesListDisplayComponent', () => {
  let component: RepositoriesListDisplayComponent;
  let fixture: ComponentFixture<RepositoriesListDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriesListDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesListDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
