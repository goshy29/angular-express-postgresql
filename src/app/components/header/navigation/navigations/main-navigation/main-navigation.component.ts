import { Component, EventEmitter, Output } from '@angular/core';
import { NavLinksComponent } from "../../nav-links/nav-links.component";

@Component({
  selector: 'app-main-navigation',
  standalone: true,
  imports: [NavLinksComponent],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css'
})
export class MainNavigationComponent {
  @Output() openMobileNav = new EventEmitter<void>();
}
