import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../service/spoonacular.service';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


// export class FavoritePage implements OnInit {

//   recipes: [] = [];

//   constructor(private spoonacular: SpoonacularService) { }

//   ngOnInit() {
//   }

//   fetchRecipeDetail() {
//     let id: number = 0;

//     this.spoonacular.getDetailRecipe(id)
//     .subscribe((data: any) => {
//       this.recipes = data;
//     }, (error: Error) => {
//       console.error('Error fetching recipes:', error);
//     });
//   }

// }

// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-recipe',
//   templateUrl: './recipe.page.html',
//   styleUrls: ['./recipe.page.scss'],
// })
// export class RecipePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-favorite',
//   templateUrl: './favorite.page.html',
//   styleUrls: ['./favorite.page.scss'],
// })
// export class FavoritePageModule implements OnInit {

//   favoriteItems = [
//     {
//       icon: 'path/to/icon1.png', // Replace with the actual path to the icon
//       name: 'Little creatures-Club Street',
//       location: '527B Esta Underpass',
//       rating: 4.8,
//       reviews: 195
//     },
//     {
//       icon: 'path/to/icon2.png', // Replace with the actual path to the icon
//       name: 'Yanti Nasi Padang',
//       location: '527B Esta Underpass',
//       rating: 5,
//       reviews: 250
//     },
//     {
//       icon: 'path/to/icon3.png', // Replace with the actual path to the icon
//       name: 'Tiong Bahru Bakery',
//       location: '527B Esta Underpass',
//       rating: 4.5,
//       reviews: 150
//     }
//   ];

//   constructor() { }

//   ngOnInit() { }

// }
