import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../service/spoonacular.service';

@Component({
  selector: 'app-detailrecipe',
  templateUrl: './detailrecipe.page.html',
  styleUrls: ['./detailrecipe.page.scss'],
})
export class DetailrecipePage implements OnInit {

  detailRecipe: any[] = [];

  constructor(private spoonacularService: SpoonacularService) { }

  ngOnInit() {
    this.fetchDetailRecipe(715415);
  }

  fetchDetailRecipe(id: number) {
    if (id) {
      console.log(id)
      this.spoonacularService.getDetailRecipe(id).subscribe((data: any) => {
          this.detailRecipe = data;
          console.log('data', this.detailRecipe);
        }, (err: Error) => {
          console.error('Error fetching recipe information:', err)
        });
    } else {
      console.log('err')
    }
  }

}
