import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  action2: string = 'about.html'
  @Input()
  link3: string = 'Rules'
  @Input()
  link1: string = 'Home'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  action1: string = 'index.html'
  @Input()
  link2: string = 'About'
  @Input()
  logoAlt: string = 'Quiz Logo'
  @Input()
  link5: string = 'Link5'
  @Input()
  link4: string = 'Contact'
  constructor() {}
}
