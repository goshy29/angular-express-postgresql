import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cake-item',
  standalone: true,
  imports: [],
  templateUrl: './cake-item.component.html',
  styleUrl: './cake-item.component.css'
})
export class CakeItemComponent {
  @Input() id: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() price: string = '';
  @Input() description: string = '';

  constructor(private router: Router) {}

  handlerShowDetails() {
    this.router.navigate(["/cakes", this.id]);
  }
}
