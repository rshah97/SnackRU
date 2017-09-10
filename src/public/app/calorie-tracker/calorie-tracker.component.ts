import { Component, OnInit } from '@angular/core';

interface SnackRecord {
  calories: number;
  carbs: number;
  count: number;
  fats: number;
  name: string;
  protein: number;
  totalCalories: number;
}

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.scss']
})
export class CalorieTrackerComponent implements OnInit {

  private snackList: SnackRecord[];

  constructor() {
    this.snackList = [
      {
        calories: 100,
        carbs: 22,
        count: 1,
        fats: 0,
        name: "Pretzel",
        protein: 2,
        totalCalories: 100,
      },
      {
        calories: 100,
        carbs: 17,
        count: 1,
        fats: 3.5,
        name: "Granola Bar",
        protein: 1,
        totalCalories: 100,
      }
    ];
  }

  ngOnInit() {
  }

  getTotalCalories() {
    let sum = 0; 
    this.snackList.forEach((snack: SnackRecord) => {
      sum += snack.totalCalories;
    });
    return sum;

  }

}
