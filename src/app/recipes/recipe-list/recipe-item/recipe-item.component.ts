import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Input('recipeElement') recipe: {name: string, description: string, imagePath: string};
  @Input() recipe: Recipe; //Este 'recipe' é o [recipe] em recipe-list.component.html
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(event){
    // console.log(event.target);
    this.recipeSelected.emit();
  }

}
