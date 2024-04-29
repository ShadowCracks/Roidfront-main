import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GET_COMMON_NAMES } from '@app/modules/common-names/common-names.actions';
import { CommonNameDto } from '@app/modules/common-names/common-names.classes';
import { commonNamesList } from '@app/modules/common-names/common-names.selectors';
import { ManufacturerDto } from '@app/modules/manufacturers/manufacturer.classes';
import { GET_MANUFACTURERS } from '@app/modules/manufacturers/manufacturers.actions';
import { manufacturersList } from '@app/modules/manufacturers/manufacturers.selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss'
})
export class SearchFilterComponent implements OnInit{
  commonNames$: Observable<CommonNameDto[]>;
  manufacturers$: Observable<ManufacturerDto[]>;
  constructor(private readonly store: Store) {
    this.commonNames$ = store.select(commonNamesList);
    this.manufacturers$ = store.select(manufacturersList);
  }

  ngOnInit(): void {
    this.store.dispatch(GET_COMMON_NAMES());
    this.store.dispatch(GET_MANUFACTURERS());
  }
}
