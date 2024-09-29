import { Component, Input } from '@angular/core';
import { Blog } from '../blog.model';
import { BlogItemComponent } from '../blog-item/blog-item.component';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [BlogItemComponent],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css'
})
export class BlogsListComponent {
  @Input() blogs: Blog[] = [];

  dateFormatter(date: string): string {
    const formattedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return formattedDate.toLocaleDateString("en-US", options);   
  }
}
