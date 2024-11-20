import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = '0'; // string because input will always emit string values, though later it gets converted
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '0';
  enteredDuration = '10';

  onSubmit() {
    this.calculate.emit({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration
    })
  }
}
