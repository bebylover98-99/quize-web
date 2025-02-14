import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author4Src:
    'https://images.unsplash.com/photo-1526762204623-2d89f4ab1a09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: 'Sarah Lee',
  author3Name: 'David Johnson',
  review4:
    'The final round was intense with so many questions, but it was incredibly rewarding to complete it successfully.',
  author1Src:
    'https://images.unsplash.com/photo-1658027076409-edf5df5c1d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author2Alt: 'Image of Jane Smith',
  content1:
    'Read what our users have to say about their experience with our quiz website.',
  author1Name: 'John Doe',
  review1:
    "I love the variety of questions and the challenging rounds. It's a great way to test my knowledge!",
  author1Position: 'Software Engineer',
  author1Alt: 'Image of John Doe',
  author2Name: 'Jane Smith',
  author3Position: 'Student',
  author3Alt: 'Image of David Johnson',
  review3:
    'The challenge round really pushed me to think quickly and critically. It was a thrilling experience!',
  review2:
    'The warm-up round was a nice way to ease into the quiz. The questions were engaging and fun.',
  author2Position: 'Teacher',
  author2Src:
    'https://images.unsplash.com/photo-1486663845017-3eedaa78617f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgwOHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Marketing Manager',
  author3Src:
    'https://images.unsplash.com/photo-1610568781018-995405522539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczOTQ2NjgxMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Lee',
}

Testimonial.propTypes = {
  author4Src: PropTypes.string,
  author4Name: PropTypes.string,
  author3Name: PropTypes.string,
  review4: PropTypes.string,
  author1Src: PropTypes.string,
  heading1: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  review1: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author3Position: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.string,
  review2: PropTypes.string,
  author2Position: PropTypes.string,
  author2Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
}

export default Testimonial
