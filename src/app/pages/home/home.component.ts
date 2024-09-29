import { Component } from '@angular/core';
import { HomeContentComponent } from "../../components/main/home-content/home-content.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
