import { Component, OnInit } from '@angular/core';
import { ProductList, WeightUnit, VegStatus } from 'src/app/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productCategory: Array<{}>;
  productList: Array<ProductList>;
  constructor() {
    this.productList = [];
    this.productCategory = new Array<{}>();
   }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.productCategory.push({
      id: "1",
      title: "Fruits & Vegetables",
      subtitle: "150 Items",
      image: "assets/product-icons/1.jpg"
    });
    this.productCategory.push({
      id: "2",
      title: "Grocery & Staples",
      subtitle: "95 Items",
      image: "assets/product-icons/2.jpg"
    });
    this.productCategory.push({
      id: "3",
      title: "Beverages",
      subtitle: "65 Items",
      image: "assets/product-icons/5.jpg"
    });
    this.productCategory.push({
      id: "4",
      title: "Home & Kitchen",
      subtitle: "965 Items",
      image: "assets/product-icons/4.jpg"
    });
    this.productCategory.push({
      id: "5",
      title: "Furnishing & Home Needs",
      subtitle: "125 Items",
      image: "assets/product-icons/3.jpg"
    });
    this.productCategory.push({
      id: "6",
      title: "Household Needs",
      subtitle: "325 Items",
      image: "assets/product-icons/6.jpg"
    });
    this.productCategory.push({
      id: "7",
      title: "Personal Care",
      subtitle: "156 Items",
      image: "assets/product-icons/7.jpg"
    });
    this.productCategory.push({
      id: "8",
      title: "Breakfast & Dairy",
      subtitle: "857 Items",
      image: "assets/product-icons/8.jpg"
    });
    this.productCategory.push({
      id: "9",
      title: "Biscuits, Snacks & Chocolates",
      subtitle: "48 Items",
      image: "assets/product-icons/9.jpg"
    });
    this.productCategory.push({
      id: "10",
      title: "Noodles, Sauces & Instant Food",
      subtitle: "156 Items",
      image: "assets/product-icons/10.jpg"
    });
    this.productCategory.push({
      id: "11",
      title: "Pet Care",
      subtitle: "568 Items",
      image: "assets/product-icons/11.jpg"
    });
    this.productCategory.push({
      id: "12",
      title: "Meats, Frozen & Seafood",
      subtitle: "156 Items",
      image: "assets/product-icons/12.jpg"
    });

    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "1",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "2",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.NonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "3",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.VegNonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "4",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "5",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "6",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.NonVeg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
    this.productList.push({
      actualPrice: 450.99,
      currencyType: 'IN',
      discountInPer: 50,
      id: "7",
      images: [],
      weight: 500,
      productSrc: "Site Record",
      subCategory: 'fresh-fruits',
      title: "Product Title Here",
      subTitle: "Product Sub Title Here",
      vegStatus: VegStatus.Veg.toString(),
      thumbnail: "assets/product-images/1.jpg",
      weightUnit: WeightUnit.Gm.toString().toLocaleLowerCase()
    });
  }

  showProductDetail(product: any): void {

  }
}
