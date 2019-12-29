import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PuzzleComponent } from "./puzzle.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("PuzzleComponent", () => {
  let component: PuzzleComponent;
  let fixture: ComponentFixture<PuzzleComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PuzzleComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("is puzzle-component defined", () => {
    expect(component).toBeDefined();
  });

  it("is form valid when empty", () => {
    const inputString = component.assignmentForm.controls["inputString"];
    inputString.setValue("32+44*-");
    expect(component.assignmentForm.valid).toBeTruthy();
  });
  it("test fails when extra operators in input", () => {
    const inputString = component.puzzleSolving("32+45*--");
    expect(inputString).toBeFalsy();
  });
  it("test fails when less operators in input", () => {
    const inputString = component.puzzleSolving("32+45*");
    expect(inputString).toBeFalsy();
  });

  it("input '32+44*-' passes", () => {
    const inputString = component.puzzleSolving("32+44*-");
    expect(parseInt(inputString)).toEqual(-11);
  });
  it("input '32+' passes", () => {
    const inputString = component.puzzleSolving("32+");
    expect(parseInt(inputString)).toEqual(5);
  });
  it("input '52* passes", () => {
    const inputString = component.puzzleSolving("52*");
    expect(parseInt(inputString)).toEqual(10);
  });
  it("input '52- passes", () => {
    const inputString = component.puzzleSolving("52-");
    expect(parseInt(inputString)).toEqual(3);
  });
  it("input '25-' passes", () => {
    const inputString = component.puzzleSolving("25-");
    expect(parseInt(inputString)).toEqual(-3);
  });
  it("input '512+4*3-+' passes", () => {
    const inputString = component.puzzleSolving("512+4*3-+");
    expect(parseInt(inputString)).toEqual(14);
  });
  it("input '52/' passes", () => {
    const inputString= component.puzzleSolving("52/");
    expect(parseFloat(inputString)).toEqual(2.5);
  });

  
});
