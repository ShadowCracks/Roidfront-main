import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityPicsGalleryComponent } from './community-pics-gallery.component';

describe('CommunityPicsGalleryComponent', () => {
  let component: CommunityPicsGalleryComponent;
  let fixture: ComponentFixture<CommunityPicsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityPicsGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityPicsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
