import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features2',
  templateUrl: 'features2.component.html',
  styleUrls: ['features2.component.css'],
})
export class Features2 {
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature2Description: string =
    'Enjoy the thrill of multiple rounds in our quiz website. Test your knowledge and skills in different levels of difficulty.'
  @Input()
  feature1Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.'
  @Input()
  feature3ImgAlt: string = 'image'
  @Input()
  feature1ImgAlt: string = 'feature 1'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Title: string = 'Multiple Rounds of Quizzes'
  @Input()
  feature3Title: string = 'Feature #3'
  @Input()
  feature1Title: string = 'Feature #1'
  @Input()
  feature2ImgAlt: string = 'Multiple Rounds of Quizzes Image Alt Text'
  activeTab: number = 0
  constructor() {}
}
