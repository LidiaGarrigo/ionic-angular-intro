import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NbaChampionsPage } from './nba-champions.page';

describe('NbaChampionsPage', () => {
  let component: NbaChampionsPage;
  let fixture: ComponentFixture<NbaChampionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NbaChampionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NbaChampionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
