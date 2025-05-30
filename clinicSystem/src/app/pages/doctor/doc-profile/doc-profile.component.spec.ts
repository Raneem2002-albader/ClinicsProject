import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocProfileComponent } from './doc-profile.component';

describe('DocProfileComponent', () => {
  let component: DocProfileComponent;
  let fixture: ComponentFixture<DocProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
