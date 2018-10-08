// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { MagicEightBallComponent } from './magic-eight-ball.component';
//
// describe('MagicEightBallComponent', () => {
//   let component: MagicEightBallComponent;
//   let fixture: ComponentFixture<MagicEightBallComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ MagicEightBallComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(MagicEightBallComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
import { TestBed, async } from '@angular/core/testing';
import { MagicEightBallComponent } from './magic-eight-ball.component';
import { By } from '@angular/platform-browser';
import {MagicEightBallService} from "./magic-eight-ball.service";

describe('Component: MagicEightBall', () => {
  let fixture;
  let getHeaderEl = () => fixture.nativeElement.querySelector('h1');
  let magicEightBallResponse = 'Answer unclear';
  let magicEightBallService;
  let revealSpy;

  let clickButton = () => {
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MagicEightBallComponent
      ],
      providers: [
        MagicEightBallService
      ]
    });
    fixture = TestBed.createComponent(MagicEightBallComponent);
    const magicEightBallService: MagicEightBallService = TestBed.get(MagicEightBallService);
    revealSpy = spyOn(magicEightBallService, 'reveal').and.returnValue(magicEightBallResponse);
  }));

  afterEach(() => {
    fixture = undefined;
    magicEightBallService = undefined;
    revealSpy = undefined;
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  it('should begin with no text', async(() => {
    fixture.detectChanges();
    expect(getHeaderEl().textContent).toEqual('');
  }));

  it('should call reveal after a click', async(() => {
    clickButton();
    fixture.detectChanges();
    expect(revealSpy.calls.count()).toBe(1);
    expect(revealSpy.calls.mostRecent().returnValue).toBe(magicEightBallResponse);
    console.log(getHeaderEl().textContent);
    expect(getHeaderEl().textContent).toEqual(magicEightBallResponse);
  }));
});
