import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModudle } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import { MealTrackerComponent } from './meal-tracker/meal-tracker.component';
import { AnalyticsComponent } from './analytics/analytics.component';

import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    CalorieTrackerComponent,
    MealTrackerComponent,
    AnalyticsComponent
  ],
  imports: [
    AppRoutingModudle,
    BrowserModule
  ],
  providers: [ InventoryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
