import { Injectable } from '@angular/core';
import { MetaTagService as MetaTag } from '../../services/meta-tag.service';
import { commonContent } from 'src/app/dymanic-content';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  commonDescription: string = 
  "Online DDoorStore : Choose from a wide range of grocery, baby care products, personal care products, fresh fruits & vegetables online. Pay Online & Avail exclusive discounts on various products @ India's Best Online Grocery store.✔ Best Prices & Offers ✔ Cash on Delivery ✔ Easy Returns ✔ Same Day Delivery ✔ Big Discount on Selected Products";
  commonKeywords: string = 
  "Buy Grocery Online, Online Grocery, Grocery Store, Online Grocery Shopping, Online Grocery Store, Online Supermarket, Free Delivery, Great Offers, Best Prices,"
  constructor(private metaTag: MetaTag) { }

  commonMetaTag(): void {    
    this.metaTag.setMetaTag({
      name: "description",
      content: this.commonDescription
    });
    this.metaTag.setMetaTag({
      name: "keywords",
      content: this.commonKeywords
    });
    this.metaTag.setMetaTag({
      name: "author",
      content: commonContent.APP_NAME
    })
  }

  homeMetaTag(): void {
    this.metaTag.setTitle("Welcome to DDoorStore");
  }
}
