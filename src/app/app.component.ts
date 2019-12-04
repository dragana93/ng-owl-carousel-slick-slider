import { Component, OnInit } from "@angular/core";

export enum SCREEN_SIZE {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl"
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "Ng Owl Carousel";
  screenResolution: string = SCREEN_SIZE.LG;

  ngOnInit() {
    // the initial screen size is determined to use the appropriate images
    console.log("SIZE: " + window.innerWidth);
    let size = window.innerWidth;
    if (size < 577) {
      this.screenResolution = SCREEN_SIZE.XS;
    } else if (size < 769) {
      this.screenResolution = SCREEN_SIZE.SM;
    } else if (size < 961) {
      this.screenResolution = SCREEN_SIZE.MD;
    } else if (size < 1141) {
      this.screenResolution = SCREEN_SIZE.LG;
    } else {
      this.screenResolution = SCREEN_SIZE.XL;
    }
  }

  carouselOptions = {
    margin: 25,
    nav: true,
    navText: [
      "<div class='nav-btn far fa-angle-left prev-slide icon-size'></div>",
      "<div class='nav-btn far fa-angle-right next-slide icon-size'></div>"
    ],

    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        // image_src: SCREEN_SIZE.XS,
        onResized: () => {
          // this function is called to resize the screen
          console.log("XS size: " + window.innerWidth);
          this.screenResolution = SCREEN_SIZE.XS;
        }
      },
      576: {
        items: 1,
        nav: true,
        // image_src: SCREEN_SIZE.SM,
        onResized: () => {
          console.log("SM size: " + window.innerWidth);
          this.screenResolution = SCREEN_SIZE.SM;
        }
      },
      768: {
        items: 1,
        nav: true,
        loop: false,
        // image_src: SCREEN_SIZE.MD,
        onResized: () => {
          console.log("MD size: " + window.innerWidth);
          this.screenResolution = SCREEN_SIZE.MD;
        }
      },
      960: {
        items: 1,
        nav: true,
        loop: false,
        // image_src: SCREEN_SIZE.LG,
        onResized: () => {
          console.log("LG size: " + window.innerWidth);
          this.screenResolution = SCREEN_SIZE.LG;
        }
      },
      1140: {
        items: 1,
        nav: true,
        loop: false,
        // image_src: SCREEN_SIZE.XL,
        onResized: () => {
          console.log("XL size: " + window.innerWidth);
          this.screenResolution = SCREEN_SIZE.XL;
        }
      }
    }
  };

  banners = [
    {
      image_src: {
        xs: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg",
        sm: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg",
        md: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg",
        lg: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg",
        xl: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
      }
    },
    {
      image_src: {
        xs: "https://freakyjolly.com/demo/jquery/PreloadJS/images/6.jpg",
        sm: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg",
        md: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg",
        lg: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg",
        xl: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
      }
    }
  ];
}
