import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auto-complete-search',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  inputValue: string;
  optionGroups: AutocompleteOptionGroups[];
  constructor() { }

  ngOnInit() {
  }
  
  onChange(value: string): void {
    console.log(value);
  }
}

export interface AutocompleteOptionGroups {
  title: string;
  count?: number;
  children?: AutocompleteOptionGroups[];
}