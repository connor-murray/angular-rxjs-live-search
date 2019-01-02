import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars = [{id: 1, brand: 'Ferrari'}, {id: 2, brand: 'Kia'}, {id: 3, brand: 'Ford'}, {id: 4, brand: 'Audi'}, {id: 5, brand: 'Porsche'}];

  constructor() {
  }

  public getCars = query => of(this.cars.filter(car => this.isMatchingCar(car, query)))
    .pipe(
      tap(() => console.log(`Making API request with query: ${query}`)),
      delay(100)
    );

  private getCarBrand = ({brand}) => `${brand.toLowerCase()}`;

  private isMatchingCar = (car, query) => this.getCarBrand(car).startsWith(query.toLowerCase());
}
