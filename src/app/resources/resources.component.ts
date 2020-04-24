import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  loadScripts() {
    const dynamicScripts = [
      "assets/js/bootstrap.min.js",
      "assets/js/jquery.min.js",
      "assets/js/jquery.easing.1.3.js",
      "assets/js/jquery.waypoints.min.js",
      "assets/js/jquery.flexslider-min.js",
      "assets/js/sticky-kit.min.js",
      "assets/js/owl.carousel.min.js",
      "assets/js/jquery.countTo.js",
      "assets/js/main.js",
      "assets/js/modernizr-2.6.2.min.js",
      
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('body')[0].appendChild(node);
    }
  }

  constructor() {
    this.loadScripts();
   }

  ngOnInit(): void {
  }

}
