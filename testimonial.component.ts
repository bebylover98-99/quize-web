import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-testimonial',
  templateUrl: 'testimonial.component.html',
  styleUrls: ['testimonial.component.css'],
})
export class Testimonial {
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1526762204623-2d89f4ab1a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author4Name: string = 'Sarah Lee'
  @Input()
  author3Name: string = 'David Johnson'
  @Input()
  review4: string =
    'The final round was intense with so many questions, but it was incredibly rewarding to complete it successfully.'
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1658027076409-edf5df5c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Testimonials'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  @Input()
  content1: string =
    'Read what our users have to say about their experience with our quiz website.'
  @Input()
  author1Name: string = 'John Doe'
  @Input()
  review1: string =
    "I love the variety of questions and the challenging rounds. It's a great way to test my knowledge!"
  @Input()
  author1Position: string = 'Software Engineer'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author2Name: string = 'Jane Smith'
  @Input()
  author3Position: string = 'Student'
  @Input()
  author3Alt: string = 'Image of David Johnson'
  @Input()
  review3: string =
    'The challenge round really pushed me to think quickly and critically. It was a thrilling experience!'
  @Input()
  review2: string =
    'The warm-up round was a nice way to ease into the quiz. The questions were engaging and fun.'
  @Input()
  author2Position: string = 'Teacher'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author4Position: string = 'Marketing Manager'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1610568781018-995405522539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgxMHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author4Alt: string = 'Image of Sarah Lee'
  constructor() {}
}
