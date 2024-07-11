import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {

  private apiUrl = 'https://api.spoonacular.com/recipes';
  private apiKey = '14174d97daa34675b9fc5a0a65133df8';

  constructor(private http: HttpClient) { }

  getRecipes(offset: number, limit: number): Observable<any> {
    const url = `${this.apiUrl}/complexSearch?apiKey=${this.apiKey}&offset=${offset}&number=${limit}`;
    console.log(url);

    return this.http.get(url).pipe(
      map((response: any) => response.results)
    );
  }

  getDetailRecipe(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/information?apiKey=${this.apiKey}`;

    return this.http.get(url).pipe(
      map((response: any) => response)
    );
  }
}
