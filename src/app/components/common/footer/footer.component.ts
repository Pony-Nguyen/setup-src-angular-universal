import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  col1s = [
    {
      id: 1,
      title: 'Về chúng tôi',
    },
    {
      id: 1,
      title: 'Terms of Service',
    },
    {
      id: 1,
      title: 'Privacy Policy',
    },
    {
      id: 1,
      title: 'Liên hệ',
    },
  ];

  col2s = [
    {
      id: 1,
      icon: 'assets/svgs/Facebook - Negative.svg',
    },
    {
      id: 1,
      icon: 'assets/svgs/Twitter - Negative.svg',
    },
    {
      id: 1,
      icon: 'assets/svgs/Telegram - Negative.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
