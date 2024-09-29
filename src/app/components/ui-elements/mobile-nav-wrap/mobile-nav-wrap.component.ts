import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-nav-wrap',
  standalone: true,
  imports: [],
  templateUrl: './mobile-nav-wrap.component.html',
  styleUrl: './mobile-nav-wrap.component.css'
})
export class MobileNavWrapComponent {
  @Output() closeMobileNav = new EventEmitter<void>();
}
