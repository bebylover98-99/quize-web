import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Contact } from './contact/contact.component'
import { Navbar } from './navbar/navbar.component'
import { Pricing } from './pricing/pricing.component'
import { Footer } from './footer/footer.component'
import { Features2 } from './features2/features2.component'
import { CTA } from './cta/cta.component'
import { Hero } from './hero/hero.component'
import { Testimonial } from './testimonial/testimonial.component'
import { Steps } from './steps/steps.component'
import { Features1 } from './features1/features1.component'

@NgModule({
  declarations: [
    Contact,
    Navbar,
    Pricing,
    Footer,
    Features2,
    CTA,
    Hero,
    Testimonial,
    Steps,
    Features1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    Contact,
    Navbar,
    Pricing,
    Footer,
    Features2,
    CTA,
    Hero,
    Testimonial,
    Steps,
    Features1,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
