import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcaComponent } from './ica.component';

describe('IcaComponent', () => {
  let component: IcaComponent;
  let fixture: ComponentFixture<IcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
