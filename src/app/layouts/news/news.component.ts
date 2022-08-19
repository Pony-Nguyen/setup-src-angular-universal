import { Component, HostListener, OnInit } from '@angular/core';
import { SeoService } from 'src/app/core/seo.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public scroll: boolean = false;

  constructor(private seo: SeoService) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(s: any): void {
    const sc = s.target?.scrollTop || 0;
    this.scroll = sc > 0;
  }

  hidden() {
    if (this.seo.isBrowser) {
      const toggler = document.getElementById('toggler-news') as HTMLElement;
      if (toggler) {
        toggler.click();
      }

      const backDrop = document.getElementById('news-backdrop') as HTMLElement;
      if (backDrop) {
        backDrop.classList.remove('active', 'show');
      }
    }
  }

  // scrollToTop(): void {
  //   document.getElementById('top').scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest',
  //   });
  // }
}
