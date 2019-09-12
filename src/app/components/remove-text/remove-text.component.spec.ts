import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTextComponent } from './remove-text.component';

describe('RemoveTextComponent', () => {
  let component: RemoveTextComponent;
  let fixture: ComponentFixture<RemoveTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
