import { Component } from '@angular/core';
import { Cake } from './cake.model';
import { CAKES } from '../../../data/cakes';
import { CakesListComponent } from "./cakes-list/cakes-list.component";

@Component({
  selector: 'app-cakes-content',
  standalone: true,
  imports: [CakesListComponent],
  templateUrl: './cakes-content.component.html',
  styleUrl: './cakes-content.component.css'
})
export class CakesContentComponent {
  cakes: Cake[] = CAKES;
}
