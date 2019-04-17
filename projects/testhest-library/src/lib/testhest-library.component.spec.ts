import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesthestLibraryComponent } from './testhest-library.component';

describe('TesthestLibraryComponent', () => {
  let component: TesthestLibraryComponent;
  let fixture: ComponentFixture<TesthestLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesthestLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesthestLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
