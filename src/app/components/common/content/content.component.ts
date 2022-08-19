import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import timeSince from 'src/app/common/timeSince';
import { news } from 'src/app/common/tmp';
import { SeoService } from 'src/app/core/seo.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  news: any;

  newss = news;
  content: any;

  latestNews: any = [];

  constructor(
    private seo: SeoService,
    private common: CommonService,
    private route: ActivatedRoute,
    private zone: NgZone,
    private change: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.change.detectChanges();

    const slug = this.route.snapshot.paramMap.get('slug');

    this.common.getContent(slug).subscribe((res) => {
      if (res && res[0]) {
        this.zone.run(() => {
          this.content = res[0];

          this.seo.setTitle(res[0].title);
          this.seo.setDescription(res[0].description);
          this.seo.setKeywords(res[0].keyword[0]);
          this.seo.setImage(res[0].image.light);
          this.seo.setPublished(res[0].publishDate);
          this.seo.setUrl(res[0].slug);
          this.scrollToTop();
        });
      }
    });

    this.getNewsLatest();
  }

  scrollToTop() {
    if (this.seo.isBrowser) {
      const scrollTop: any = document.getElementById('top');
      if (scrollTop) {
        scrollTop.scrollIntoView({
          behavior: 'smooth',
        });
      }

      // setTimeout(() => {
      //   const scrollTop: any = document.getElementById('top');
      //   scrollTop.scrollIntoView({
      //     behavior: 'smooth',
      //     block: 'start',
      //     inline: 'nearest',
      //   });
      //   // window.scroll({
      //   //   top: 0,
      //   //   left: 0,
      //   //   behavior: 'smooth',
      //   // });
      // }, 100);
      // window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  redirectTo(slug: string) {
    // this.router
    //   .navigateByUrl('/cc', { skipLocationChange: true })
    //   .then(() => this.router.navigate([slug]));

    window.location.replace(slug);
  }

  createAt(date: any) {
    const c = timeSince(new Date(date));
    return c;
  }

  getNewsLatest(): void {
    this.common.getNews('latest').subscribe((res) => {
      if (res && res.length !== 0) {
        this.latestNews = res;
      }
    });
  }
}
