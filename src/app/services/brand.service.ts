import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "http://localhost";
  constructor(private httpClient : HttpClient) { }

  getBrands(): Observable<listResponseModel<Brand>>{
    let newApiUrl = "https://localhost:44314/api/brands/getall";
    return this.httpClient.get<listResponseModel<Brand>>(newApiUrl);
  }
}
