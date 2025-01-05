import { Component, Input } from "@angular/core";
import { Animal } from "../search/search.service";

@Component({
  selector: "selected-animal",
  standalone: true,
  imports: [],
  templateUrl: "./selected-animal.component.html",
  styleUrl: "./selected-animal.component.css",
})
export class SelectedAnimalComponent {
  @Input() animal!: Animal;

  constructor() {}

  ngOnInit() {
    console.log(this.animal);
  }
}
