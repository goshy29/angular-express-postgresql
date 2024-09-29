import { Component, Input } from '@angular/core';
import { CakeItemComponent } from '../cake-item/cake-item.component';
import { Cake } from '../cake.model';

@Component({
  selector: 'app-cakes-list',
  standalone: true,
  imports: [CakeItemComponent],
  templateUrl: './cakes-list.component.html',
  styleUrl: './cakes-list.component.css'
})
export class CakesListComponent {
  @Input() cakes: Cake[] = [];
}
