import React from 'react'
import './style.css'

function Events() {
    const Eventslist = [
        {
            title: 'Event Title',
            img: 'https://picsum.photos/1000/1000',
            date: 'Mon, Nov 22nd 2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!',
            time: '6:00 AM',
            color: 'blue'
        },
        {
            title: 'Event Title',
            img: 'https://picsum.photos/501/500',
            date: 'Mon, Nov 22nd 2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!',
            time: '9:00 AM',
            color: ' red'
        },
        {
            title: 'Event Title',
            img: 'https://picsum.photos/500/501',
            date: 'Mon, Nov 22nd 2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!',
            time: '12:00 PM',
            color: 'green'
        },
        {
            title: 'Event Title',
            img: 'https://picsum.photos/501/501',
            date: 'Mon, Nov 22nd 2021',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!',
            time: '2:00 PM',
            color: 'yellow'
        }
    ]
    return (
        <section className="dark">
            <div className="container py-4">
                <h1 className="h1 text-center" id="pageHeaderTitle">Upcoming Events</h1>
                {Eventslist.map((item, index) => (
                    <article className={"postcard dark " + item.color} key={index}>
                        <span className="postcard__img_link" >
                            <img className="postcard__img" src={item.img} alt="event pic" />
                        </span>
                        <div className="postcard__text">
                            <h1 className={"postcard__title " + item.color}>{item.title}</h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2020-05-25 12:00:00">
                                    <i className="fas fa-calendar-alt me-2"></i>{item.date}
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{item.desc}</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item"><i className="fas fa-clock me-2"></i>{item.time}</li>
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Events
