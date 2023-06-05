import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  result = '';
  getAction(item: any) {
    this.result += item;
  }
  equal() {
    this.result = eval(this.result).toFixed(1);
  }
  reset() {
    this.result = '';
  }
}
