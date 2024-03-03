import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FetchDoctorbyId } from '../../Redux/Slice/Doctor.slice';

export default function DoctorProfilepage() {
    const dispatch = useDispatch()
    // const { Doctor: { Doctor } } = useSelector((state) => ({ ...state.Doctor }));
    const { Doctor} = useSelector((state) => ({ ...state.Doctor }));

    const {_id} = useParams()
    useEffect(()=>{
        dispatch(FetchDoctorbyId({_id}))
    },[])
    return (
        <div className="Doctor-Profile">
            <div class="home-screen container-fluid">
                <div class="home-cover">

                    <div class="container">
                        <div class="row home-detail">
                            <div class="col-md-5 animated bounceInLeft hom-img">
                                <img src="./public/images/name.png" alt="" />
                            </div>
                            <div class="col-md-7 animated bounceInRight homexp">
                                <h5>Hello I'm</h5>
                                <h2>{Doctor?.name}</h2><br />
                                <span>Professional <a> {Doctor?.speciliest}</a> </span>
                                <p>
                                    { Doctor?.bio}
                                </p>

                                <ul class="socil-icon">
                                    <li>
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-pinterest-p"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-dribbble"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fab fa-behance"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="about_us" class="about-us container-fluid">
                <div class="container">
                    <div class="session-title row">
                        <h2>About Me</h2>
                        <p>{Doctor?.bio}</p>
                        <div class="heading-line"></div>
                    </div>
                    <div class="about-row row">
                        <div class="image-col col-md-4">
                            <img src="./public/images/about.png" alt="" />
                            {/* <button class="btn btn-primary"><i class="fas fa-download"></i> Download</button> */}
                        </div>
                        <div class="detail-col col-md-8">
                            <h2>{Doctor?.name}</h2>
                            <h6></h6>
                            <p>{Doctor?.bio}</p>
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <div class="info-list">
                                        <ul>
                                            <li><span>Birthday:</span>05. 09.1987</li>
                                            <li><span>City:</span>{Doctor?.address}</li>
                                            <li><span>Study:</span>{Doctor?.study}</li>
                                            <li><span>Website:</span>{Doctor?.website}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="info-list">
                                        <ul>
                                            <li><span>Age:</span>{Doctor?.age} Years</li>
                                            <li><span>Degree:</span>{Doctor?.degree}</li>
                                            <li><span>Mail:</span>{Doctor?.email}</li>
                                            <li><span>Phone:</span>{Doctor?.phone}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>



                    </div>
                </div>

            </div>

            {/* <div id="services" class="services container-fluid">
                <div class="container">
                    <div class="session-title row">
                        <h2>Servcies I Provide</h2>
                        <p>There are many variations of passages of Lorem Ipsum available Lorem Ipsum available but the majority</p>
                        <div class="heading-line"></div>
                    </div>
                    <div class="services-row row">
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="far fa-file-image"></i>
                                <h4>Graphic Design</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="fas fa-desktop"></i>
                                <h4>Web Development</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="fas fa-bullhorn"></i>
                                <h4>Digital Marketing</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="fab fa-uikit"></i>
                                <h4>UI/UX Design</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="fas fa-suitcase"></i>
                                <h4>Business Analysis</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4 seric-div">
                            <div class="service-card">
                                <i class="fas fa-mobile-alt"></i>
                                <h4>Mobile App Development</h4>
                                <p>Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <section id="testimonial" class="customer-serv">
                <div class="container">
                    <div class="row session-title">
                        <h2>Happy Customers</h2>

                    </div>

                    <div class="row ro-clo">
                        <div data-anijs="if: scroll, on: window, do: bounceInLeft animated, before: scrollReveal" class="col-12  col-md-6 col-lg-4">
                            <div class="shado-2 card-b">
                                <p>Classic Aqua water purify is good.Because its cure our purify that is called  health and gives good life. I suggest classic aqua for its best purify of water</p>
                            </div>
                            <div class="cust-det row">
                                <div class="col-sm-3 col-3 img-circl">
                                    <img alt="" src="./public/images/testimonial/member-01.jpg" />
                                </div>
                                <div class="col-sm-5 col-5 an-mtc no-padding">
                                    <b>Sarath Ali</b>
                                    <p>(Sales Agent)</p>
                                </div>
                                <div class="col-sm-4 col-4 star-par">
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-12  col-md-6 col-lg-4">
                            <div class="shado-2 card-b">
                                <p> have use this product at my home last 1 and half year of this. This product quality is good.Its good quality product for use it can improve water Quality.
                                </p>
                            </div>
                            <div class="cust-det row">
                                <div class="col-sm-3 col-3 img-circl">
                                    <img alt="" src="./public/images/testimonial/member-02.jpg" />
                                </div>
                                <div class="col-sm-5 col-5 an-mtc no-padding">
                                    <b>Binny Aderson</b>
                                    <p>(Sales Agent)</p>
                                </div>
                                <div class="col-sm-4  col-4 star-par">
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div data-anijs="if: scroll, on: window, do: bounceInRight animated, before: scrollReveal" class="col-12  col-md-6 col-lg-4">
                            <div class="shado-2 card-b">
                                <p>Very essensial product.it is clean and helthy water is mutually most important so that acqa is fufil its quality.our life now a days very tressful and restless</p>
                            </div>
                            <div class="cust-det row">
                                <div class="col-sm-3 col-3 img-circl">
                                    <img alt="" src="public/images/testimonial/member-03.jpg" />
                                </div>
                                <div class="col-sm-5 col-5 an-mtc no-padding">
                                    <b>Arjun Samluel</b>
                                    <p>(Sales Agent)</p>
                                </div>
                                <div class="col-sm-4 col-4 star-par">
                                    <ul class="stars">
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                        <li><i class="fa fa-star"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}
