import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  appID = '8ac39ec8';
  appKey = '312c94bdbdc5cfbe75a18c111b20ecb3';

  constructor(private http: HttpClient) { }

  getNutritions(value) { 
    console.log('this is in service.......',value);
    return this.http.get('https://api.nutritionix.com/v1_1/search/' +value +'?results=0:1&fields=*&appId=' + this.appID + '&appKey=' +this.appKey);
  }
}

// app id : 8ac39ec8
// app key: 97ad7be4b61c2f38d21930b099036d8c
// https://api.nutritionix.com/v1_1/search/Chicken?results=0:1&fields=*&appId=8ac39ec8&appKey=312c94bdbdc5cfbe75a18c111b20ecb3