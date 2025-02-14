import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature2ImgAlt: string = 'image'
  @Input()
  feature1Title: string = 'Warm-up Round'
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature2Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1Description: string =
    'Get ready for the challenge with a warm-up round consisting of 3 questions.'
  @Input()
  feature2Title: string = 'Feature #2'
  @Input()
  feature1ImgAlt: string = 'Warm-up Round Image'
  activeTab: number = 0
  constructor() {}
}
