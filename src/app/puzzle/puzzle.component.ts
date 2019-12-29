import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-puzzle",
  templateUrl: "./puzzle.component.html",
  styleUrls: ["./puzzle.component.css"]
})
export class PuzzleComponent implements OnInit {
  get inputString() {
    return this.assignmentForm.get("inputString");
  }
  output: any;
  constructor(private fb: FormBuilder) {}
  assignmentForm: FormGroup;
  ngOnInit() {
    this.assignmentForm = this.fb.group({
      inputString: ["", [Validators.required]]
    });
  }
  onSubmit() {
    this.puzzleSolving(this.assignmentForm.value.inputString);
    // console.log(this.output + "sub");
    this.assignmentForm.markAsUntouched();
    this.assignmentForm.reset();
  }
  puzzleSolving(string) {
    const values = string.split("");
    const array = [];
    if (string === ""){
      alert("Please enter the string");
    } else {
      for (let i of values) {
        // console.log(i);
        if (i != "+" && i != "/" && i != "*" && i != "-") {
          array.push(parseInt(i));
        } else {
          var operator = i;
          var val2 = array.pop();
          var val1 = array.pop();
          switch (operator) {
            case "+":
              array.push(val2+val1);
              break;
            case "/":
              array.push(val1/val2);
              break;
            case "*":
              array.push(val2*val1);
              break;
            case "-":
              array.push(val1-val2);
              break;
          }
        }
      }
      if (array.length === 1 && !isNaN(array[0])) {
        this.output = array;
      } else if (isNaN(array[0])) {
        alert("input must have extra/less operators");
        this.output = null;
      } else {
        alert("Input is wrong");
        this.output = null;
      }
    }
    return this.output;
  }
}
