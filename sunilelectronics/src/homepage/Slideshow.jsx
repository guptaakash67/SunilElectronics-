import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css'

const Slideshow = () => {
    return (
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} showStatus={false}>
            <div>
                <img src="https://tse1.mm.bing.net/th?id=OIP.rOBe9Xcs9hKx2aub29JxBQHaEo&pid=Api&P=0&h=180" alt="TV Repair" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="http://kuzyatech.com/wp-content/uploads/2012/06/DSC_2546.jpg" alt="LED Repair" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://dipelectronicslab.com/wp-content/uploads/2020/01/Lcd-led-tv-repairing-1024x671.png" alt="LCD Repair" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://i.ytimg.com/vi/envO426ryFY/maxresdefault.jpg" alt="Speaker Repair" />
                <p className="legend"></p>
            </div>
            <div>
                <img src="https://tse4.mm.bing.net/th?id=OIP.jDxcKhcHcf0uW0zo4rAnBQAAAA&pid=Api&P=0&h=180" alt="Speaker Repair" />
                <p className="legend"></p>
            </div>
        </Carousel>
    );
};

export default Slideshow;
