import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css'],
})
export class Contact {
  @Input()
  content4: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  phone1: string = '+123-456-7890'
  @Input()
  content5: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  heading1: string = 'Contact Us'
  @Input()
  content2: string = 'Get in touch with us today!'
  @Input()
  content3: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.'
  @Input()
  email1: string = 'info@quizwebsite.com'
  @Input()
  address1: string = '123 Quiz Street, Cityville, Country'
  @Input()
  content1: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  constructor() {}
}
