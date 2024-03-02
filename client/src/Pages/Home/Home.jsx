import React from 'react'
import './Home.css'


export default function Home() {
   return (
      <div className="HomePage">
         <div class="hero_area">

            <div class="hero_bg_box">
               <img src="./public/images/hero-bg.png" alt="" />
            </div>

            <section class="slider_section ">
               <div id="customCarousel1" class="carousel slide" data-ride="carousel">
                  <div class="carousel-inner">
                     <div class="carousel-item active">
                        <div class="container ">
                           <div class="row">
                              <div class="col-md-7">
                                 <div class="detail-box">
                                    <h1>
                                       We Provide Best Healthcare
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div class="btn-box">
                                       <a href="" class="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item ">
                        <div class="container ">
                           <div class="row">
                              <div class="col-md-7">
                                 <div class="detail-box">
                                    <h1>
                                       We Provide Best Healthcare
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div class="btn-box">
                                       <a href="" class="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="carousel-item">
                        <div class="container ">
                           <div class="row">
                              <div class="col-md-7">
                                 <div class="detail-box">
                                    <h1>
                                       We Provide Best Healthcare
                                    </h1>
                                    <p>
                                       Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                    </p>
                                    <div class="btn-box">
                                       <a href="" class="btn1">
                                          Read More
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <ol class="carousel-indicators">
                     <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
                     <li data-target="#customCarousel1" data-slide-to="1"></li>
                     <li data-target="#customCarousel1" data-slide-to="2"></li>
                  </ol>
               </div>

            </section>

         </div>
         {/* Doctor section */}


         <section class="department_section layout_padding">
            <div class="department_container">
               <div class="container ">
                  <div class="heading_container heading_center">
                     <h2>
                        Our Departments
                     </h2>
                     <p>
                        Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
                     </p>
                  </div>
                  <div class="row">
                     <div class="col-md-3">
                        <div class="box ">
                           <div class="img-box">
                              <img src="./public/images/s1.png" alt="" />
                           </div>
                           <div class="detail-box">
                              <h5>
                                 Cardiology
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="box ">
                           <div class="img-box">
                              <img src="./public/images/s2.png" alt="" />
                           </div>
                           <div class="detail-box">
                              <h5>
                                 Diagnosis
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="box ">
                           <div class="img-box">
                              <img src="./public/images/s3.png" alt="" />
                           </div>
                           <div class="detail-box">
                              <h5>
                                 Surgery
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3">
                        <div class="box ">
                           <div class="img-box">
                              <img src="./public/images/s4.png" alt="" />
                           </div>
                           <div class="detail-box">
                              <h5>
                                 First Aid
                              </h5>
                              <p>
                                 fact that a reader will be distracted by the readable page when looking at its layout.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="btn-box">
                     <a href="">
                        View All
                     </a>
                  </div>
               </div>
            </div>
         </section>

         {/* about section */}

         <section class="about_section layout_margin-bottom">
            <div class="container  ">
               <div class="row">
                  <div class="col-md-6 ">
                     <div class="img-box">
                        <img src="./public/images/about-img.jpg" alt="" />
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="detail-box">
                        <div class="heading_container">
                           <h2>
                              About <span>Us</span>
                           </h2>
                        </div>
                        <p>
                           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                           in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                           are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                           the middle of text. All
                        </p>
                        <a href="">
                           Read More
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </section>

{/* Doctors */}


<section class="doctor_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Our Doctors
        </h2>
        <p class="col-md-10 mx-auto px-0">
          Incilint sapiente illo quo praesentium officiis laudantium nostrum, ad adipisci cupiditate sit, quisquam aliquid. Officiis laudantium fuga ad voluptas aspernatur error fugiat quos facilis saepe quas fugit, beatae id quisquam.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="./public/images/d1.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <div class="social_box">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Elina Josh
              </h5>
              <h6 class="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="./public/images/d2.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <div class="social_box">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Adam View
              </h5>
              <h6 class="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="./public/images/d3.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <div class="social_box">
                <a href="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-youtube" aria-hidden="true"></i>
                </a>
                <a href="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <h5>
                Mia Mike
              </h5>
              <h6 class="">
                Doctor
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View All
        </a>
      </div>
    </div>
  </section>


      </div>
   )
}
