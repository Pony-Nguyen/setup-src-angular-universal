import { Component, OnInit } from '@angular/core';
import timeSince from 'src/app/common/timeSince';
import { news } from 'src/app/common/tmp';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-body-bottom',
  templateUrl: './body-bottom.component.html',
  styleUrls: ['./body-bottom.component.scss'],
})
export class BodyBottomComponent implements OnInit {
  news = news;

  cryptoNews: any = [];
  constructor(private common: CommonService) {}

  ngOnInit(): void {
    this.getNewsCrypto();
  }

  createAt(date: any) {
    const c = timeSince(new Date(date));
    return c;
  }

  redirectTo(slug: string) {
    window.location.replace(slug);
  }

  getNewsCrypto(): void {
    // cointoken

    this.common.getNews('cointoken').subscribe((res) => {
      if (res && res.length !== 0) {
        this.cryptoNews = res;
      }
    });
  }
}
