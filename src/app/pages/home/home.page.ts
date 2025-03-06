import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  standalone:false,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  categories: string[] = [];
  cartCount: number = 0;
  searchTerm: string = '';

  constructor(
    private httpService: HttpService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.httpService.getCategories().subscribe(data => this.categories = data);

    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(p => p.category === category);
  }

  searchProducts() {
    this.filteredProducts = this.products.filter(p => 
      p.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  goToProduct(id: number) {
    console.log('Navegando a producto con ID:', id);  // 👈 Verifica que el ID es correcto
    this.router.navigate(['/product', id]);  // 👈 Asegúrate de que el path es 'product' y no 'products'
  }
  
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
