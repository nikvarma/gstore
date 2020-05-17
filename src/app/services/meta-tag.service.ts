import { Injectable } from '@angular/core';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private metaTag: Meta, private title: Title) { }

  getTitle(): string {
    return this.title.getTitle();
  }

  setTitle(title: string): void {
    this.title.setTitle(title);
  }

  setMetaTag(tag: MetaDefinition): void {
    this.metaTag.addTag(tag);
  }

  setMetaTags(tags: MetaDefinition[]): void {
    this.metaTag.addTags(tags);
  }

  updateMetaTag(tag: MetaDefinition): void {
    this.metaTag.updateTag(tag);
  }

  removeMetaTag(attr: string): void {
    this.metaTag.removeTag(attr);
  }
}
