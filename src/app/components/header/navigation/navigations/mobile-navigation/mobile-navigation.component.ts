import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-navigation',
  standalone: true,
  imports: [],
  templateUrl: './mobile-navigation.component.html',
  styleUrl: './mobile-navigation.component.css'
})
export class MobileNavigationComponent {
  @Output() close = new EventEmitter<void>();
}
