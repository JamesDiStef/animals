import { Component, inject } from "@angular/core";
import { SelectedAnimalComponent } from "../selected-animal/selected-animal.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Animal, SearchService } from "./search.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [SelectedAnimalComponent, ReactiveFormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
  providers: [HttpClient],
})
export class SearchComponent {
  isSelected = false;
  applyForm = new FormGroup({
    species: new FormControl(""),
  });

  query: string = "abb";
  results: any[] = [];

  url = "http://localhost:3000/animals";

  searchService: SearchService = inject(SearchService);

  constructor() {}

  async go() {
    this.searchService.getAllAnimals().then((animals: Animal[]) => {
      this.results = animals;
    });
    console.log(this.results);
    this.isSelected = true;
  }
}
