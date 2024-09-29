import { Component } from '@angular/core';
import { BlogContentComponent } from "../../components/main/blog-content/blog-content.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogContentComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
