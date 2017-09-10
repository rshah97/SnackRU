import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalorieTrackerComponent } from './calorie-tracker/calorie-tracker.component';
import {MealTrackerComponent} from './meal-tracker/meal-tracker.component';
import {AnalyticsComponent} from './analytics/analytics.component';
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'calorie-tracker'
    },
    {
        path: 'calorie-tracker',
        pathMatch: 'full',
        component: CalorieTrackerComponent
    },
    {
        path: 'meal-tracker',
        pathMatch: 'full',
        component: MealTrackerComponent
    },
    {
        path: 'analytics',
        pathMatch: 'full',
        component: AnalyticsComponent

    },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModudle { }