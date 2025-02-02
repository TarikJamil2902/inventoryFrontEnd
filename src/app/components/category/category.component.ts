import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
 // Import the service

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  category: Category = { id: 0, name: '', description: '', productIds: [] };
  isEditing: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  // Get all categories
  getCategories(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  // Add a new category
  addCategory(): void {
    this.category = { id: 0, name: '', description: '', productIds: [] };  // Reset the form
    this.isEditing = true;
  }

  // Edit an existing category
  editCategory(category: Category): void {
    this.category = { ...category };  // Clone the category to prevent direct mutation
    this.isEditing = true;
  }

  // Submit the form (create or update category)
  onSubmit(): void {
    if (this.category.id === 0) {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  // Create a new category
  createCategory(): void {
    this.categoryService.createCategory(this.category).subscribe((newCategory: Category) => {
      this.categories.push(newCategory);
      this.isEditing = false;
    });
  }

  // Update an existing category
  updateCategory(): void {
    this.categoryService.updateCategory(this.category).subscribe((updatedCategory: Category) => {
      const index = this.categories.findIndex(c => c.id === updatedCategory.id);
      if (index !== -1) {
        this.categories[index] = updatedCategory;
      }
      this.isEditing = false;
    });
  }
}

// Category model definition directly inside the component
export interface Category {
  id: number;
  name: string;
  description: string;
  productIds: number[];  // List of product IDs
}
