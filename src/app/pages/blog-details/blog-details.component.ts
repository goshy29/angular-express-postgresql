import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../../components/main/blog-content/blog.model';
import { BlogsService } from '../../components/main/blog-content/blogs.service';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog | undefined;

  constructor(private route: ActivatedRoute, private title: Title, private router: Router) {}

  errorMessage = '';

  private blogService = inject(BlogsService);

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('blogId') || '';

    if (blogId) {
      const subscription = this.blogService.getBlogById(blogId)
        .subscribe({
          next: (blog: Blog) => {
            this.blog = blog;
            this.title.setTitle(this.blog.title);
          },
          error: (error: Error) => {
            this.errorMessage = error.message;
            this.title.setTitle('Blog Not Found');
          }
      });

      this.destroyRef.onDestroy(() => {subscription.unsubscribe()});
    }
  }

  handlerDeleteBlog() {
    const confirmDelete = window.confirm(`Do you want to Delete ${this.blog!.title}?`);
    if (confirmDelete) {
      const subscription = this.blogService.deleteBlog(this.blog!.id)
        .subscribe({
          next: () => {
            this.router.navigate(['/blog']);
          },
          error: (error: Error) => {
            this.errorMessage = error.message;
          }
      });

      this.destroyRef.onDestroy(() => {subscription.unsubscribe()});
    }
  } 

  dateFormatter(date: string): string {
    const formattedDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return formattedDate.toLocaleDateString("en-US", options);   
  }
}
