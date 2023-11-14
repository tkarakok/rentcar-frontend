import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NaviComponent } from './components/navi/navi/navi.component';
import { CarComponent } from './components/car/car/car.component';
import { BrandComponent } from './components/brand/brand/brand.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { ColorComponent } from './components/color/color/color.component';
import { HttpClientModule } from '@angular/common/http';
import { BrandService } from './services/brand.service';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [
    BrandService,
    CarService
  ],
  imports: [
    CommonModule, 
    RouterOutlet,
    NaviComponent,
    CarComponent,
    BrandComponent,
    EmployeeComponent,
    ColorComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rentcar-frontend';
}
