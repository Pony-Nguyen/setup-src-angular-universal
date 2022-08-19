import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { news } from 'src/app/common/tmp';
import * as $ from 'jquery';
import { SeoService } from 'src/app/core/seo.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  news = news;

  customOptions: OwlOptions = {
    loop: false,
    margin: 16,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  // @ViewChild('owl', { static: false }) owlEl: ElementRef | undefined;

  owl: any;
  earnNews: any = [];
  constructor(
    private seo: SeoService,
    private common: CommonService,

    private router: Router
  ) {}

  ngOnInit(): void {
    // const owl = this.owlEl?.nativeElement;
    this.getNewsEarn();
  }

  getNewsEarn(): void {
    // kiemtien
    this.common.getNews('kiemtien').subscribe((res) => {
      if (res && res.length !== 0) {
        this.earnNews = res;
      }
    });
  }

  // redirectTo(slug: string) {
  //   this.router
  //     .navigateByUrl('/', { skipLocationChange: true })
  //     .then(() => this.router.navigate([slug]));
  // }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if (this.seo.isBrowser) {
      this.owl = document.getElementsByClassName('owl-stage');
      if (this.owl && this.owl[2]) {
        if (this.owl[2]) {
          this.owl[2].addEventListener(
            'mousewheel',
            (e: any) => {
              if (e.deltaY > 0) {
                const next: any = document.getElementsByClassName('owl-next');
                next[2].click();
              } else {
                const prev: any = document.getElementsByClassName('owl-prev');
                prev[2].click();
              }
              e.preventDefault();
            },
            false
          );
        }
      }
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    if (this.seo.isBrowser) {
      document.removeEventListener('mousewheel', this.owl[2]);
    }
  }
}
