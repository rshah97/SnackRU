import { Injectable } from '@angular/core';

interface Snack {
  calories: number;
  carbs: number;
  count: number; // how much remaining
  fats: number;
  name: string;
  protein: number;
}

@Injectable()
export class InventoryService {

  private inventory: Snack[];

  constructor() {
    this.inventory = [
      {
        calories: 100,
        carbs: 22,
        count: 13,
        fats: 0,
        name: "Pretzel",
        protein: 2
      },
      {
        calories: 100,
        carbs: 17,
        count: 61,
        fats: 3.5,
        name: "Granola Bar",
        protein: 1
      }
    ];
  }

  getAllSnacks() {
    return this.inventory;
  }

}
