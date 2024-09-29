import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  @Output() close = new EventEmitter<void>();
}
