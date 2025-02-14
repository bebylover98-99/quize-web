import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps {
  @Input()
  step1Description: string =
    'Answer 2 out of 3 questions correctly to proceed to the next round.'
  @Input()
  step1Title: string = 'Warm-up Round'
  @Input()
  step4Title: string = 'Step 4'
  @Input()
  step3Description: string =
    'Answer all 50 questions correctly to win the quiz.'
  @Input()
  step2Title: string = 'Challenge Round'
  @Input()
  step3Title: string = 'Final Round'
  @Input()
  step2Description: string =
    'Answer 8 out of 10 questions correctly to advance to the final round.'
  @Input()
  step4Description: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
  constructor() {}
}
