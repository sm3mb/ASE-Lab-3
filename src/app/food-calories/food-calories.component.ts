import { NutritionService } from './../services/nutrition.service';
import { Component, OnInit } from '@angular/core';

declare const responsiveVoice: any;

@Component({
  selector: 'app-food-calories',
  templateUrl: './food-calories.component.html',
  styleUrls: ['./food-calories.component.scss']
})
export class FoodCaloriesComponent implements OnInit {

  apiData: any;

  constructor(private nutriService: NutritionService) { }

  ngOnInit() {

  }

  getCalories(value) {
    this.nutriService.getNutritions(value).subscribe(data => {
        if (data) {
          this.apiData = data;
          console.log('Api result..............', this.apiData);
          let voice = 'Search word is '+value+' and contains ' +this.apiData.hits[0].fields.nf_calories +' calories per serving weight '+this.apiData.hits[0].fields.nf_serving_weight_grams+' grams.';
          responsiveVoice.speak(voice);
        }
      });
  }

}
