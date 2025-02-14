<template>
  <div class="thq-section-padding">
    <div class="testimonial-max-width thq-section-max-width">
      <div class="testimonial-container10">
        <h2 class="thq-heading-2">{{ heading1 }}</h2>
        <span class="testimonial-text11 thq-body-small">{{ content1 }}</span>
      </div>
      <div class="thq-grid-2">
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card1">
              <div class="testimonial-container12">
                <img
                  :alt="author1Alt"
                  :src="author1Src"
                  class="testimonial-image1"
                />
                <div class="testimonial-container13">
                  <strong class="thq-body-large">{{ author1Name }}</strong>
                  <span class="thq-body-small">{{ author1Position }}</span>
                </div>
              </div>
              <span class="testimonial-text14 thq-body-small">{{ review1 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card2">
              <div class="testimonial-container14">
                <img
                  :alt="author2Alt"
                  :src="author2Src"
                  class="testimonial-image2"
                />
                <div class="testimonial-container15">
                  <strong class="thq-body-large">{{ author2Name }}</strong>
                  <span class="thq-body-small">{{ author2Position }}</span>
                </div>
              </div>
              <span class="testimonial-text17 thq-body-small">{{ review2 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card3">
              <div class="testimonial-container16">
                <img
                  :alt="author3Alt"
                  :src="author3Src"
                  class="testimonial-image3"
                />
                <div class="testimonial-container17">
                  <strong class="thq-body-large">{{ author3Name }}</strong>
                  <span class="thq-body-small">{{ author3Position }}</span>
                </div>
              </div>
              <span class="testimonial-text20 thq-body-small">{{ review3 }}</span>
            </div>
          </div>
        </div>
        <div class="thq-animated-card-bg-2">
          <div class="thq-animated-card-bg-1">
            <div data-animated="true" class="thq-card testimonial-card4">
              <div class="testimonial-container18">
                <img
                  :alt="author4Alt"
                  :src="author4Src"
                  class="testimonial-image4"
                />
                <div class="testimonial-container19">
                  <strong class="thq-body-large">{{ author4Name }}</strong>
                  <span class="thq-body-small">{{ author4Position }}</span>
                </div>
              </div>
              <span class="testimonial-text23 thq-body-small">{{ review4 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Testimonial',
  props: {
    author4Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1526762204623-2d89f4ab1a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwN3w&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author4Name: {
      type: String,
      default: 'Sarah Lee',
    },
    author3Name: {
      type: String,
      default: 'David Johnson',
    },
    review4: {
      type: String,
      default:
        'The final round was intense with so many questions, but it was incredibly rewarding to complete it successfully.',
    },
    author1Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1658027076409-edf5df5c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwNXw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    heading1: {
      type: String,
      default: 'Testimonials',
    },
    author2Alt: {
      type: String,
      default: 'Image of Jane Smith',
    },
    content1: {
      type: String,
      default:
        'Read what our users have to say about their experience with our quiz website.',
    },
    author1Name: {
      type: String,
      default: 'John Doe',
    },
    review1: {
      type: String,
      default:
        "I love the variety of questions and the challenging rounds. It's a great way to test my knowledge!",
    },
    author1Position: {
      type: String,
      default: 'Software Engineer',
    },
    author1Alt: {
      type: String,
      default: 'Image of John Doe',
    },
    author2Name: {
      type: String,
      default: 'Jane Smith',
    },
    author3Position: {
      type: String,
      default: 'Student',
    },
    author3Alt: {
      type: String,
      default: 'Image of David Johnson',
    },
    review3: {
      type: String,
      default:
        'The challenge round really pushed me to think quickly and critically. It was a thrilling experience!',
    },
    review2: {
      type: String,
      default:
        'The warm-up round was a nice way to ease into the quiz. The questions were engaging and fun.',
    },
    author2Position: {
      type: String,
      default: 'Teacher',
    },
    author2Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwOHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author4Position: {
      type: String,
      default: 'Marketing Manager',
    },
    author3Src: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1610568781018-995405522539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgxMHw&ixlib=rb-4.0.3&q=80&w=1080',
    },
    author4Alt: {
      type: String,
      default: 'Image of Sarah Lee',
    },
  },
}
</script>

<style scoped>
.testimonial-max-width {
  display: flex;
  align-items: center;
  flex-direction: column;
}
 
.testimonial-container10 {
  gap: var(--dl-space-space-unit);
  display: flex;
  max-width: 600px;
  align-items: center;
  margin-bottom: var(--dl-space-space-fourunits);
  flex-direction: column;
}
 
.testimonial-text11 {
  text-align: center;
}
 
.testimonial-container12 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image1 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container13 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text14 {
  text-align: left;
}
 
.testimonial-container14 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image2 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container15 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text17 {
  text-align: left;
}
 
.testimonial-container16 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image3 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container17 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text20 {
  text-align: left;
}
 
.testimonial-container18 {
  gap: var(--dl-space-space-unit);
  display: flex;
  align-self: flex-start;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
 
.testimonial-image4 {
  width: var(--dl-size-size-small);
  height: var(--dl-size-size-small);
  object-fit: cover;
  border-radius: var(--dl-radius-radius-round);
}
 
.testimonial-container19 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
 
.testimonial-text23 {
  text-align: left;
}
 
@media(max-width: 991px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-threeunits);
  }
}
 
@media(max-width: 767px) {
  .testimonial-container10 {
    margin-bottom: var(--dl-space-space-oneandhalfunits);
  }
  .testimonial-card1 {
    width: 100%;
  }
  .testimonial-card2 {
    width: 100%;
  }
  .testimonial-card3 {
    width: 100%;
  }
  .testimonial-card4 {
    width: 100%;
  }
}
</style>
