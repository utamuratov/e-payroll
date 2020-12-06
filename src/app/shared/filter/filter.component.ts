import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STATUSES } from 'src/app/models/_data';
import { Search } from './search.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  /**
   *
   */
  statuses = STATUSES;

  /**
   *
   */
  @Input() search: Search = new Search();

  /**
   *
   */
  @Output() searchChanged: EventEmitter<Search> = new EventEmitter<Search>();

  /**
   *
   */
  constructor() {}

  /**
   *
   */
  ngOnInit() {}

  /**
   *
   */
  filter() {
    this.searchChanged.emit(this.search);
  }
}
