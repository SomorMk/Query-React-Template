import React from 'react'
import '../CommonSection/CommonSection.css'

function CommonSection2() {
  return (
    <section id="com_section">
        <div className="container">
            <div className="row com_sec_inner">
                <div className="col-lg-6 col-md-7">
                    <div className="com_sec_text">
                        <h6>INDONESIAN CULTURE</h6>
                        <h2>Our culture here is very friendly to people</h2>
                        <p>known for his politeness, manners and gentleness. This becomes a characteristic when they
                            mingle with other tribes and become basic traits that are passed down by their ancestors.
                        </p>
                        <a href="#">read more</a>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 offset-lg-1">
                    <div className="com_sec_image">
                        <img src="images/com_sec_2.jpg" alt="Common Section Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CommonSection2