import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-item',
  standalone: true,
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() date: string = '';
  @Input() recipe: string = '';

  constructor(private router: Router) {}

  handlerShowDetails() {
    this.router.navigate(["/blog", this.id]);
  }
}
