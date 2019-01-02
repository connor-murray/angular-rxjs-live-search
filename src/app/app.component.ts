import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {CarService} from './car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('carSearch') searchInput: ElementRef;
  carSearch$: Observable<any>;

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carSearch$ = fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query: string) => query ? this.carService.getCars(query) : of([]))
    );
  }
}
