import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { SeoService } from 'src/app/core/seo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navs = [
    {
      id: 1,
      title: 'Tin tức Crypto',
    },
    // {
    //   id: 2,
    //   title: 'Học Crypto',
    // },
    // {
    //   id: 3,
    //   title: 'Kiếm tiền',
    // },
  ];
  // @ViewChild('insideElement') insideElement: any;
  blToggle: boolean = false;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {}

  showBackDrop() {
    if (this.seo.isBrowser) {
      const backDrop = document.getElementById('news-backdrop') as HTMLElement;
      if (this.blToggle) {
        this.blToggle = false;

        backDrop.classList.remove('active', 'show');
      } else {
        this.blToggle = true;

        backDrop.classList.add('active', 'show');
      }
    }
  }

  // @HostListener('click', ['$event.target'])
  // public onClick(targetElement: any): void {
  //   if (this.insideElement) {
  //     const clickedInside =
  //       this.insideElement.nativeElement.contains(targetElement);
  //     if (!clickedInside) {
  //       if (this.seo.isBrowser) {
  //         const toggler = document.getElementById(
  //           'toggler-news'
  //         ) as HTMLElement;
  //         if (toggler) {
  //           toggler.click();
  //         }

  //         const backDrop = document.getElementById(
  //           'news-backdrop'
  //         ) as HTMLElement;
  //         if (backDrop) {
  //           backDrop.classList.remove('active', 'show');
  //         }
  //       }
  //     }
  //   }
  // }

  navigateTo(): void {
    window.open('https://kampfire.app/sign-up', '_blank');
  }
}
