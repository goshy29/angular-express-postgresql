import { Component } from '@angular/core';
import { CakesContentComponent } from "../../components/main/cakes-content/cakes-content.component";

@Component({
  selector: 'app-cakes',
  standalone: true,
  imports: [CakesContentComponent],
  templateUrl: './cakes.component.html',
  styleUrl: './cakes.component.css'
})
export class CakesComponent {

}
