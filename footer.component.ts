import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  link5: string = 'Privacy Policy'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = '/cookies'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  @Input()
  link6: string = 'Terms and Conditions'
  @Input()
  termsLink: string = '/terms'
  @Input()
  link10: string = 'Sitemap'
  @Input()
  link7: string = 'Quiz Rules'
  @Input()
  logoAlt: string = 'Quiz Website Logo'
  @Input()
  privacyLink: string = '/privacy'
  @Input()
  link1: string = 'Home'
  @Input()
  content2: string = 'Join our newsletter for updates and promotions.'
  @Input()
  column1Title: string = 'Company'
  @Input()
  column2Title: string = 'Quick Links'
  @Input()
  link4: string = 'FAQs'
  @Input()
  link3: string = 'Contact Us'
  @Input()
  action1: string = '/subscribe'
  @Input()
  link2: string = 'About Us'
  @Input()
  content3: string = '&copy; 2023 Quiz Website. All Rights Reserved.'
  @Input()
  link9: string = 'Support'
  @Input()
  link8: string = 'Cookie Policy'
  constructor() {}
}
