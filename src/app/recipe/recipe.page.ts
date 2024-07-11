// 
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss'],
})
export class RecipePage {
  popularSearches = [
    { title: 'Pasta Salad', image: 'assets/images/pasta-salad.jpg' },
    { title: 'Fried Rice', image: 'assets/images/fried-rice.jpg' },
    { title: 'Potato Salad', image: 'assets/images/potato-salad.jpg' },
    { title: 'Japanese Recipes', image: 'assets/images/japanese-recipes.jpg' },
    { title: 'Chicken Thighs', image: 'assets/images/chicken-thighs.jpg' },
    { title: 'Potato', image: 'assets/images/potato.jpg' },
    { title: 'Breakfast', image: 'assets/images/breakfast.jpg' },
    { title: 'Mac and Cheese', image: 'assets/images/mac-and-cheese.jpg' },
    { title: 'Shrimp', image: 'assets/images/shrimp.jpg' },
    { title: 'Lasagna', image: 'assets/images/lasagna.jpg' }
  ];

  constructor() {}
}
