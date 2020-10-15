import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
     };

    return (
        <div className="home">
            <div className="home__container">
            {/* <video  loop autoPlay muted className="home__image">
                <source src="../public/Video/battlefield-trailer.mp4" type="video/mp4" />
            </video> */}
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg" 
                alt="" 
            />

            <div className="home__row">
                <Product 
                    id="23890172"
                    title="Kroser Laptop Backpack 17.3 Inch Business Backpack School Rucksack Large Waterproof Travel Backpack Daypack with USB and RFID Pockets for Men/College / Men/Women Black Multiple Way"
                    price={33.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/8136AnqWLEL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id="83012348"
                    title="Gemlux Electric Stand Blender - Mixer, Smoothie Maker, Shaker, Blender, Crusher - For Cream, Cocktail, Shake, Soup etc. - Robust Stainless Steel Blade - Portable & for Worktop BL-430B"
                    price={38.90}
                    image="https://images-na.ssl-images-amazon.com/images/I/71dj98%2B8ENL._AC_SL1500_.jpg"
                    rating={3}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="83120012"
                    title="Tommy Hilfiger Elevated Nylon Mini Cross Bag, Men's"
                    price={63.36}
                    image="https://images-na.ssl-images-amazon.com/images/I/91UO3sBXBNL._AC_UX575_.jpg"
                    rating={5}
                />
                <Product 
                    id="02319834"
                    title="Mario Kart 8 Deluxe [Nintendo Switch]"
                    price={48.49}
                    image="https://images-na.ssl-images-amazon.com/images/I/810W2KFm6FL._SY445_.jpg"
                    rating={5}
                />
                <Product 
                    id="12434091"
                    title="Wacom Intuos Pen Tablet Compatible with Windows and Mac small"
                    price={56.84}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IwBFfRlVL._AC_SL1000_.jpg"
                    rating={5}
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3219837"
                    title="Grundig Vision Fire TV Edition [Energy Class A]"
                    price={233.94}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ntH9DQ7LL._AC_SL1000_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__ad"></div>
            <div className="home__row">
                <Product 
                    id="3241430"
                    title="VBIGER Handschuhe Touchscreen Unisex Fahrhandschuhe Winterhandschuhe Anti-Rutsch Sporthandschuhe Wasserabweisend Trainingshandschuhe Warme für Radfahren Laufen & Reiten"
                    price={11.89}
                    image="https://images-na.ssl-images-amazon.com/images/I/61-yhVja1GL._AC_UL1005_.jpg"
                    rating={5}
                />
                <Product 
                    id="342109384"
                    title="Burei Men’s Watches, Ultra Thin, Black, Minimalist Quartz with Date Display"
                    price={23.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71sr-wRLPgL._AC_UX679_.jpg"
                    rating={4}
                />
                <Product 
                    id="09213841"
                    title="AmazonBasics head strap for GoPro action camera"
                    price={8.93}
                    image="https://images-na.ssl-images-amazon.com/images/I/710ERU80dXL._AC_SL1500_.jpg"
                    rating={5}
                />
                <Product
                    id="39810213"
                    title="Stanbow Reading Lamp Book Clamp, Touch Switch, Clamp Lamp, USB Rechargeable, 9 LEDs With 3 Colour Temperatures, 360° Flexible Eye Protection, Mini Dimmable Clamp Light"
                    price={9.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Vy0n7PCnL._AC_SL1500_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="4312893"
                    title="Official Playstation Stripes T-Shirt"
                    price={25.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51BW8XRF1gL._AC_UL1000_.jpg"
                    rating={5}
                />
                <Product 
                    id="768539120"
                    title="Posture Corrector for Men and Women - Upper Back Stretcher with Adjustable, Breathable Collarbone Support - Effective for Neck, Back and Shoulder Pain - Lumbar Support (Unisex)"
                    price={11.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71jMHuSrUUL._AC_SL1500_.jpg"
                    rating={4}
                />
            </div>
            <div className="home__adContainer">
                <div className="home__adLeft"></div>
                <div className="home__adRight"></div>
            </div>
            <div className="home__row">
                <Product 
                    id="83271094"
                    title="Movian Inari"
                    price={143.66}
                    image="https://images-na.ssl-images-amazon.com/images/I/61S7F6fLNGL._AC_SX679_.jpg"
                    rating={3}
                />
                <Product 
                    id="99124312"
                    title="QUMOX 2X Wireless Joystick Gamepad Pro Controller for Nintendo Wii U And Cable Black"
                    price={38.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/516ON%2BIicgL._AC_.jpg"
                    rating={5}
                />
                <Product
                    id="09213841"
                    title="GiroSmart HoverKart Go Kart Seat Scooter Extension for 6.5-10 Inch / 16.5 25.4 cm Self Balance Scooter"
                    price={58.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51g7JnH-GfL._AC_SL1010_.jpg"
                    rating={4}
                />
            </div>
            <div onClick={scrollTop} className="footer__backToTop">
            <p>Back to the top</p>
        </div>
        </div>
    </div>
    )
}

export default Home;
//https://images-eu.ssl-images-amazon.com/images/G/31/AmazonDevices/LEEN/GW_Hero/Main_Desktop_1500x600_DS._CB404300086_.jpg