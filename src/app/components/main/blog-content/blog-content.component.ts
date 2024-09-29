import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Blog } from './blog.model';
import { BlogsService } from './blogs.service';
import { BlogsListComponent } from "./blogs-list/blogs-list.component";

@Component({
  selector: 'app-blog-content',
  standalone: true,
  imports: [BlogsListComponent],
  templateUrl: './blog-content.component.html',
  styleUrl: './blog-content.component.css'
})
export class BlogContentComponent implements OnInit {
  blogs: Blog[] = [];

  errorMessage = '';

  private blogService = inject(BlogsService);

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.blogService.getAllBlogs()
      .subscribe({
        next: (blogs: Blog[]) => {
          this.blogs = blogs;
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        }
      });

      this.destroyRef.onDestroy(() => {subscription.unsubscribe()});
  }
}
