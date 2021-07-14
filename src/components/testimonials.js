import react from "react";



class Testimonials extends react.Component
{

    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        return (
          <div >
            <div className="testimonials">
              <h2>testimonials</h2>
            </div>
            <div id="quote">
              <div class="boxcontainer">
                <div class="bigbox">
                  <div>
                    <div class="box box_1">
                      <p>
                        The experience with Sweet Farm has just been a "WOW" to
                        me. The team is highly professional and provide good
                        after sale services. The locations are perfect and I
                        will recommend them to my friends and family also.
                      </p>
                      <h2>Jatin Wadhwa</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div>
                    <div class="box box_2">
                      <p>
                        The experience with Sweet Farm has just been a "WOW" to
                        me. The team is highly professional and provide good
                        after sale services. The locations are perfect and I
                        will recommend them to my friends and family also.
                      </p>
                      <h2>John Cena</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                  <div>
                    <div class="box box_3">
                      <p>
                        The experience with Sweet Farm has just been a "WOW" to
                        me. The team is highly professional and provide good
                        after sale services. The locations are perfect and I
                        will recommend them to my friends and family also.
                      </p>
                      <h2>Rajesh Khana</h2>
                    </div>
                    <div class="bg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
        
    }


}

export default Testimonials;