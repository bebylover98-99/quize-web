import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.css'],
})
export class Pricing {
  @Input()
  plan1Feature31: string = 'Feature text goes here'
  @Input()
  plan2Feature11: string = 'Feature text goes here'
  @Input()
  plan1Feature11: string = 'Feature text goes here'
  @Input()
  plan1Feature1: string = 'Warm-up round with 3 questions'
  @Input()
  plan2Price1: string = '$299/yr'
  @Input()
  plan2Feature31: string = 'Feature text goes here'
  @Input()
  plan1Yearly1: string = 'or $20 monthly'
  @Input()
  plan3Feature31: string = 'Feature text goes here'
  @Input()
  plan3Feature4: string = 'Feature text goes here'
  @Input()
  plan3: string = 'Enterprise plan'
  @Input()
  plan1Yearly: string = '$99.99'
  @Input()
  plan3Feature5: string = 'Feature text goes here'
  @Input()
  plan11: string = 'Basic plan'
  @Input()
  plan1Action: string = 'Upgrade Now'
  @Input()
  plan2Price: string = '$19.99'
  @Input()
  plan3Feature3: string = 'Customizable quiz options'
  @Input()
  plan2: string = 'Business plan'
  @Input()
  plan31: string = 'Enterprise plan'
  @Input()
  plan3Feature21: string = 'Feature text goes here'
  @Input()
  heading1: string = 'Pricing plan'
  @Input()
  plan3Feature51: string = 'Feature text goes here'
  @Input()
  plan2Yearly1: string = 'or $29 monthly'
  @Input()
  plan3Feature1: string = 'Exclusive access to all quiz features'
  @Input()
  plan2Action: string = 'Upgrade Now'
  @Input()
  plan2Yearly: string = '$199.99'
  @Input()
  plan3Price: string = '$29.99'
  @Input()
  plan3Action1: string = 'Get started'
  @Input()
  plan2Feature2: string = 'Requires 8 correct answers to proceed'
  @Input()
  plan1Feature3: string = 'Final round with 50 questions'
  @Input()
  plan2Action1: string = 'Get started'
  @Input()
  plan3Feature11: string = 'Feature text goes here'
  @Input()
  content2: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  @Input()
  plan2Feature21: string = 'Feature text goes here'
  @Input()
  plan3Feature41: string = 'Feature text goes here'
  @Input()
  plan1Action1: string = 'Get started'
  @Input()
  plan1Price1: string = '$200/yr'
  @Input()
  plan3Feature2: string = 'Priority support for quiz inquiries'
  @Input()
  content1: string = 'Choose the perfect plan for you'
  @Input()
  plan3Yearly: string = '$299.99'
  @Input()
  plan2Feature41: string = 'Feature text goes here'
  @Input()
  plan2Feature4: string = 'Feature text goes here'
  @Input()
  plan2Feature3: string = 'Access to all quiz rounds'
  @Input()
  plan1Feature2: string = 'Requires 2 correct answers to proceed'
  @Input()
  plan3Action: string = 'Upgrade Now'
  @Input()
  plan2Feature1: string = 'Challenge round with 10 questions'
  @Input()
  plan1Price: string = '$9.99'
  @Input()
  plan1: string = 'Basic plan'
  @Input()
  plan1Feature21: string = 'Feature text goes here'
  @Input()
  plan3Yearly1: string = 'or $49 monthly'
  @Input()
  plan21: string = 'Business plan'
  @Input()
  plan3Price1: string = '$499/yr'
  isMonthly: boolean = true
  constructor() {}
}
