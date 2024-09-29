import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from "./navigations/main-navigation/main-navigation.component";
import { MobileNavWrapComponent } from "../../ui-elements/mobile-nav-wrap/mobile-nav-wrap.component";
import { MobileNavigationComponent } from "./navigations/mobile-navigation/mobile-navigation.component";
import { NavLinksComponent } from "./nav-links/nav-links.component";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, MainNavigationComponent, MobileNavWrapComponent, MobileNavigationComponent, NavLinksComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  isMobileNavOpen = false;

  openMobileNav() {
    this.isMobileNavOpen = true;
  }

  closeMobileNav() {
    this.isMobileNavOpen = false;
  }
}
