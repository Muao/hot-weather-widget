 import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAcl]'
})
export class AclDirective implements OnInit{

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainerRef: ViewContainerRef,
  ) { }

  public ngOnInit(): void{
    const token = Boolean(localStorage.getItem('token')); // localStorage.setItem('token', true) in console
    if (token) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      return;
    }
    return this.viewContainerRef.clear();
  }
}
