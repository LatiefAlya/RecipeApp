import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../service/spoonacular.service';
import { RecipePage } from '../recipe/recipe.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  recipes: any[] = [];
  detailRecipe: any[] = [];

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit() {
    this.fetchRecipes();
  }

  fetchRecipes() {
    const offset = 0; // Adjust as needed
    const limit = 20; // Adjust as n

    this.spoonacularService.getRecipes(offset, limit)
      .subscribe((data: any) => {
        this.recipes = data;
      }, (error: Error) => {
        console.error('Error fetching recipes:', error);
      });
  }

}