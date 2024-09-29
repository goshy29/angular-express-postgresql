import { Component, DestroyRef, inject } from '@angular/core';
import { UserFormComponent } from "../../ui-elements/user-form/user-form.component";
import { Router } from '@angular/router';
import { BlogsService } from '../blog-content/blogs.service';
import { Blog } from '../blog-content/blog.model';

@Component({
  selector: 'app-share-content',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './share-content.component.html',
  styleUrl: './share-content.component.css'
})
export class ShareContentComponent {
  private blogService = inject(BlogsService);

  private destroyRef = inject(DestroyRef);

  errorMessage = '';

  constructor(private router: Router) {}

  handlerShareRecipe(shareRecipeData: any) {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split("T")[0];

    const newBlog: Blog = {
      id: '',
      title: shareRecipeData.title,
      username: shareRecipeData.username,
      email: shareRecipeData.email,
      date: formattedDate,
      recipe: shareRecipeData.recipe
    };

    const subscription =  this.blogService.createBlog(newBlog)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/blog']);
        },
        error: (error: Error) => {
          this.errorMessage = error.message;
        }
    });

    this.destroyRef.onDestroy(() => {subscription.unsubscribe()});
  }
}
