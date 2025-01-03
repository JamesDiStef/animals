import { Component } from "@angular/core";
import { SelectedAnimalComponent } from "../selected-animal/selected-animal.component";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-search",
  standalone: true,
  imports: [SelectedAnimalComponent, ReactiveFormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  isSelected = false;
  applyForm = new FormGroup({
    species: new FormControl(""),
  });

  go() {
    console.log(this.applyForm.get("species")?.value);
    this.isSelected = true;
  }
}
