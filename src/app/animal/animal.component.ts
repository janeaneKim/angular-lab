import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

import { ANIMALS } from '../mock-animals';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedAnimal?: Animal;
  onSelect(animal:Animal):void{
    this.selectedAnimal = animal;
  }

  animals = ANIMALS;

}
