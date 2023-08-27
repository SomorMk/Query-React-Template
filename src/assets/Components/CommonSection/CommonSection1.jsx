import React from 'react'
import '../CommonSection/CommonSection.css'

function CommonSection() {
return (
    <section id="com_section">
        <div className="container">
            <div className="row com_sec_inner">
                <div className="col-lg-5 col-md-5 order-1 order-md-0">
                    <div className="com_sec_image">
                        <img src="images/com_sec_1.png" alt="Common Section Image" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-7 order-0 order-md-1 offset-lg-1">
                    <div className="com_sec_text">
                        <h6>EAST nUSA TENGGARA</h6>
                        <h2>Have you enjoyed your holiday?</h2>
                        <p>You will be amazed if you take part in this sailing Komodo island tour package. So it is also
                            mandatory for you, besides enjoying Komodo tourism on Komodo Island, you also have to taste
                            the marine tourism. The beautiful waters of Komodo will make you meet many travelers from
                            other countries.</p>
                        <a href="#">read more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default CommonSection