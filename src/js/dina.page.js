/********************************************
 *                                          *
 *   Welcome to my personal Portfolio       *
 *                                          *
 *          please feel free                *
 *                                          *
 *          to look around                  *
 *                                          *
 *                                          *
 *******************************************/

import portfolio from '../css/portfolio.css';
import portfolioMobile from '../css/portfolio.mobile.css';
import MainText from './components/main.text';
import Animation from './services/animation';
import CartesianCoordinates from './services/utils/cartesian.coordinates';
import Functions from './services/utils/functions';
import Timing from './services/utils/timing';

let page = 0;
const FIRST_PAGE_MAX = 200;
const SECOND_PAGE_MAX = 400;
let delta = 0;

document.addEventListener('readystatechange', e => {
    if (document.readyState == 'complete') {
        appendText();
        smooth();
    }
        
});

function appendText() {

    let typeWriterAnimation = new Animation({
        element: document.getElementById('r-ot-grid'),
        animation: Functions.typeWriter,
        component: new MainText(),
        duration: 10000
    });
    typeWriterAnimation.setTiming(Timing.linear);
    typeWriterAnimation.animate();
}

function smooth() {

    let setVisibility = (delta) => {
        let firstVisibility = delta < FIRST_PAGE_MAX ? 'visible' : 'hidden';
        let secondVisibility = delta > FIRST_PAGE_MAX ? 'visible' : 'hidden';
        document.getElementById('r-ot-grid').style.visibility = firstVisibility;
        document.getElementById('about-me').style.visibility = firstVisibility;
        document.getElementById('second-page').style.visibility = secondVisibility;

        if (delta < FIRST_PAGE_MAX) {
            animatableProgr.forEach(e => {
                e.animateProgressively(delta > FIRST_PAGE_MAX ? 1 : delta / FIRST_PAGE_MAX);
            });
        } 
    } 

    let animatableProgr = [
        new Animation({
            element: document.getElementById('l-ot-grid'),
            destination: new
                CartesianCoordinates(-2,
                    -2),
            animation: Functions.moveLinearToLeft
        }),
        new Animation({
            element: document.getElementById('about-me'),
            animation: Functions.fade
        }),
        new Animation({
            element: document.getElementById('photo-frame'),
            destination: new CartesianCoordinates(5, 5),
            animation: Functions.reduce,
            style: {
                height: 15,
                width: 15
            }
        }),
        new Animation({
            element: document.getElementById('photo-container'),
            destination: new CartesianCoordinates(5, 5),
            animation: Functions.reduce,
            style: {
                height: 15,
                width: 15
            }
        }),
        new Animation({
            element: document.getElementById('my-photo'),
            destination: new CartesianCoordinates(5, 5),
            animation: Functions.reduceHeight,
            style: {
                height: 15,
            }
        }),
        new Animation({
            element: document.getElementById('r-ot-grid'),
            destination: new CartesianCoordinates(50, 50),
            animation: Functions.moveLinearToTop
        }),
        new Animation({
            element: document.getElementById('r-ot-grid'),
            animation: Functions.fade,
        })
    ];

    let wheelCallback = (event) => {
        delta -= delta - event.wheelDeltaY >= 0 ? event.wheelDeltaY : delta;
        setVisibility(delta);
    };

    document.addEventListener('wheel', wheelCallback);
    setVisibility(0);

}
