import { Component } from '@angular/core';
import { SelectedAnimalComponent } from '../selected-animal/selected-animal.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SelectedAnimalComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  isSelected = false;
}
