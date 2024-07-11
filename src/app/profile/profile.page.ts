import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../service/spoonacular.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private spoonacular: SpoonacularService) { }

  ngOnInit() {
  }

}
