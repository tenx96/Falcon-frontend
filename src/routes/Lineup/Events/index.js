import React from 'react'
import './style.css'

function Events() {
    return (
        <section className="dark">
            <div className="container py-4">
                <h1 className="h1 text-center" id="pageHeaderTitle">Upcoming Events</h1>

                <article className="postcard dark blue">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title blue"><a href="#">Event Title</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt me-2"></i>Mon, Nov 22nd 2021
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-clock me-2"></i>55 mins.</li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark red">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title red"><a href="#">Event Title</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt me-2"></i>Mon, Nov 22nd 2021
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-clock me-2"></i>55 mins.</li>                            
                        </ul>
                    </div>
                </article>
                <article className="postcard dark green">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title green"><a href="#">Event Title</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt me-2"></i>Mon, Nov 22nd 2021
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-clock me-2"></i>55 mins.</li>
                        </ul>
                    </div>
                </article>
                <article className="postcard dark yellow">
                    <a className="postcard__img_link" href="#">
                        <img className="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
                    </a>
                    <div className="postcard__text">
                        <h1 className="postcard__title yellow"><a href="#">Event Title</a></h1>
                        <div className="postcard__subtitle small">
                            <time dateTime="2020-05-25 12:00:00">
                                <i className="fas fa-calendar-alt me-2"></i>Mon, Nov 22nd 2021
                            </time>
                        </div>
                        <div className="postcard__bar"></div>
                        <div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                        <ul className="postcard__tagbox">
                            <li className="tag__item"><i className="fas fa-clock me-2"></i>55 mins.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Events
