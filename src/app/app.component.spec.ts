  import { TestBed, async } from '@angular/core/testing';
  import { AppComponent } from './app.component';
  import { PuzzleComponent } from './puzzle/puzzle.component';
  import { ReactiveFormsModule } from '@angular/forms';

  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          PuzzleComponent
        ],
        imports:[ReactiveFormsModule],
      }).compileComponents();
    }));


    it('should create the app', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    });
  });
