import { Directive, ElementRef, Renderer2, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
      
   }

  ngOnInit(): void {
    console.log("yoyoyo");
    //(document.querySelector("#navbarr") as HTMLElement).style.opacity = "0.5";
  }
  ngAfterViewInit() {
    setTimeout(()=>{
      (document.querySelector("#navbarr") as HTMLElement).style.opacity = "0";
    }, 1000);
}


}
