import { Injectable, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Component } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {

  private viewRef: ViewContainerRef;
  constructor(private factResolver: ComponentFactoryResolver) { }

  setViewRef(viewRef: ViewContainerRef)  {
    this.viewRef = viewRef;
  }

  addComponent(compToAdd: any) {
    const factory = this.factResolver.resolveComponentFactory(compToAdd);
    const compRef = factory.create(this.viewRef.parentInjector);
      this.viewRef.insert(compRef.hostView);
  }
}
