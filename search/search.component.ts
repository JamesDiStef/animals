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
  result!: Animal[];

  url = "http://localhost:3000/animals";

  searchService: SearchService = inject(SearchService);

  constructor() {}

  async go() {
    await this.searchService
      .getAnimalBySpecies("" + this.applyForm.get("species")?.value)
      .then((animal: Animal[] | undefined) => {
        if (animal) this.result = animal;
        this.isSelected = true;
      });
    console.log(this.result);
    if (this.result) console.log(this.result[0].description);

    this.applyForm.get("species")?.value;
  }
}
