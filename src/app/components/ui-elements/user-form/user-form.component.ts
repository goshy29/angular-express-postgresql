import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  @Output() onShareRecipe = new EventEmitter<any>(); 

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    recipe: new FormControl('', [Validators.required]),
  });

  errorMessage = '';

  onSubmit() {
    if (this.form.invalid) {
      this.errorMessage = 'All fields must be filled with valid data.';
      return;
    }

    const shareRecipeData = {
      title: this.form.value.title,
      username: this.form.value.name,
      email: this.form.value.email,
      recipe: this.form.value.recipe,
    };

    this.onShareRecipe.emit(shareRecipeData);
  }
}
