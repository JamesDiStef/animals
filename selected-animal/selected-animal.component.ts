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
  @Input() animal!: Animal | undefined;

  constructor() {}

  ngOnInit() {
    if (this.animal) console.log(this.animal.description);
  }
}
