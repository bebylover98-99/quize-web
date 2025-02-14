import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  content1: string =
    'Join us for an exciting quiz experience with 3 challenging rounds!'
  @Input()
  action1: string = 'Start Quiz'
  @Input()
  heading1: string = 'Ready to test your knowledge?'
  constructor() {}
}
