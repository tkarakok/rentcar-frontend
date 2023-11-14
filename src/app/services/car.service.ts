import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService{

  apiUrl = "https://localhost:44314/api/";
  constructor(private httpClient : HttpClient) { }

  getCars(): Observable<listResponseModel<Car>>{
    let newApiUrl = "https://localhost:44314/api/cars/getall";
    return this.httpClient.get<listResponseModel<Car>>(newApiUrl);
  }
}
