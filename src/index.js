import styles from '!css-loader!postcss-loader!sass-loader!bootstrap/scss/bootstrap.scss';
import stylesIcon from '!css-loader!bootstrap-icons/font/bootstrap-icons.css'; // shadow root level
import 'bootstrap-icons/font/bootstrap-icons.css'; // document root level
import { v4 as uuidv4 } from 'uuid';
import './index.scss'; // document root level

import "tiny-slider/src/tiny-slider.scss"
import { tns } from "tiny-slider/src/tiny-slider"

// import stylesIcon from '!css-loader!postcss-loader!sass-loader!./index_.scss';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import {faSpinner } from '@fortawesome/free-solid-svg-icons';

// library.add(faSpinner);
// dom.watch();

function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">click me</button>;

    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>surpport event listener, then do something, eg: replace children </ComponentWithStyle>)
    });

    return <>{button}</>;
}

function ComponentWithStyle({ children }) {
    const id = `id_${new Date().getTime()}_${parseInt(Math.random() * 1000)}`
    return <>
        <div class={id}>{children}</div>
        <style type="text/css">{`
            .${id} {
                color: blue;
            }
        `}</style>
    </>;
}

function SourceCode() {
    return <>
    <h3>Source code:</h3>
    <pre style="background: #eee; padding: 32px;"><code>{`
function ComponnetWithEvent() {
    const button = <button style="margin-top: 30px">click me</button>;
    button.addEventListener('click', (e) => {
        button.replaceChildren(<ComponentWithStyle>surpport event listener, then do something, eg: replace children </ComponentWithStyle>)
    });
    return <>{button}</>;
}
function ComponentWithStyle({ children }) {
    const id = ${'`id_${new Date().getTime()}_${parseInt(Math.random() * 1000)}`'}
    return <>
        <div class={id}>{children}</div>
        <style type="text/css">{${'`'}
            ${'.${id} {'}
                color: blue;
            }
        ${'`'}}</style>
    </>;
}
function Content() {
    return <>
        <h1>vanilla-jsx</h1>
        <p>vanilla jsx without Vue.js or React.js</p>
        <p style="color: red">with attr, eg: style</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
    </>;
}
document.body.append(<Content />);
`}</code></pre>
    </>;
}

function Content() {
    return <>
        {/* <h1>vanilla-jsx</h1>
        <p>vanilla jsx without Vue.js or React.js</p>
        <p style="color: red">with attr, eg: style</p>
        <ComponentWithStyle>Component with style, support scoped use attr</ComponentWithStyle>
        <ComponnetWithEvent></ComponnetWithEvent>
        <SourceCode></SourceCode> */}


<h1 class="d-none ">The Robot Roundup Vintage Camper Rally Winds Down</h1>
<img src="http://pixelprowess.com/i/robots-camp.png" alt="Robots in Camp" />
<p>Chipper and cheery jokes, stories, and songs filled the air this week at the 4th Annual Robot Roundup Vintage Camper Rally. While this joke doesn't qualify as the funniest, it's the first joke I heard when I walked up to the Rally's first bonfire of the week, and was far from being the last. </p>
<p>There were serious topics on the table, too, such as the ethical dilemma of integrating robotics into a vintage camper rebuild in order to better control interior climate and overall power usage. Purists argued that doing things "the old-fashioned human way" was the only proper way to camp, and claimed that those who "destroy" the authentic-ness of a vintage camper are meanies. It was later unanimously decided that no robot in attendance—no matter what their vintage camper preference was—wanted to be a meanie. The purists reluctantly agreed with the renovators that they were "free spirited artists" and stated that there is enough room on the planet for whatever a person wants to do to their camper.</p>
<p>A growing number of robots were interested in being on the road full-time. Social media influencers Plam and Plotter, co-stars of the Travel-Worn Robots  TubeYou channel, shared their experience and tips to transitioning to life on the road. After the session, participants were asked to raise a limb to show how many of them were interested in living full-time in their camper, and nearly all said they would love to be full-timers at least part of the time.</p>
<p>In short, the 4th Annual Robot Roundup Vintage Camper Rally has been an event to write home about. In fact, I wrote several postcards to my family every day—including one that featured my favorite joke of the rally:</p>






    </>;
}

// document.body.append(<Content />);
function CreateSVG() {
    var xmlns = "http://www.w3.org/2000/svg";
    var boxWidth = 300;
    var boxHeight = 300;

    var svgElem = document.createElementNS(xmlns, "svg");
    // var svgElem = document.createElementNS(null, "svg");
    svgElem.setAttributeNS(null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
    svgElem.setAttributeNS(null, "width", boxWidth);
    svgElem.setAttributeNS(null, "height", boxHeight);
    svgElem.style.display = "block";

    var g = document.createElementNS(xmlns, "g");
    svgElem.appendChild(g);
    g.setAttributeNS(null, 'transform', 'matrix(1,0,0,-1,0,300)');

    // draw linear gradient
    var defs = document.createElementNS(xmlns, "defs");
    var grad = document.createElementNS(xmlns, "linearGradient");
    grad.setAttributeNS(null, "id", "gradient");
    grad.setAttributeNS(null, "x1", "0%");
    grad.setAttributeNS(null, "x2", "0%");
    grad.setAttributeNS(null, "y1", "100%");
    grad.setAttributeNS(null, "y2", "0%");
    var stopTop = document.createElementNS(xmlns, "stop");
    stopTop.setAttributeNS(null, "offset", "0%");
    stopTop.setAttributeNS(null, "stop-color", "#ff0000");
    grad.appendChild(stopTop);
    var stopBottom = document.createElementNS(xmlns, "stop");
    stopBottom.setAttributeNS(null, "offset", "100%");
    stopBottom.setAttributeNS(null, "stop-color", "#0000ff");
    grad.appendChild(stopBottom);
    defs.appendChild(grad);
    g.appendChild(defs);

    // draw borders
    var coords = "M 0, 0";
    coords += " l 0, 300";
    coords += " l 300, 0";
    coords += " l 0, -300";
    coords += " l -300, 0";

    var path = document.createElementNS(xmlns, "path");
    path.setAttributeNS(null, 'stroke', "#000000");
    path.setAttributeNS(null, 'stroke-width', 10);
    path.setAttributeNS(null, 'stroke-linejoin', "round");
    path.setAttributeNS(null, 'd', coords);
    path.setAttributeNS(null, 'fill', "url(#gradient)");
    path.setAttributeNS(null, 'opacity', 1.0);
    g.appendChild(path);

    return svgElem;
}

class CustomComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        

        let semiRoot = document.createElement('div');
        shadow.append(semiRoot);
        semiRoot.append(CreateSVG());
        semiRoot.insertAdjacentHTML('beforebegin', `<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="bootstrap" viewBox="0 0 118 94">
          <title>Bootstrap</title>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"></path>
        </symbol>
        <symbol id="home" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </symbol>
        <symbol id="speedometer2" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"/>
          <path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"/>
        </symbol>
        <symbol id="table" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"/>
        </symbol>
        <symbol id="people-circle" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </symbol>
        <symbol id="grid" viewBox="0 0 16 16">
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
        </symbol>
      </svg>`);
        // shadow.append(<Content />)

        semiRoot.append(<>
            <style>{styles.toString()}</style>
            <style>{stylesIcon.toString()}</style>
            <div>
                <h1><i class="bi bi-heart-fill me-2" style="color:red; font-size: .8em;"></i>Font Icon 1</h1>
                <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width=".5em" height=".5em" class="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                    <path xmlns="http://www.w3.org/2000/svg" fill="transparent" stroke="red" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                    SVG Icon</h1>
                <button type="button" class="btn btn-primary">Primary X</button>
                <div>This is styled template content.</div>

                <slot />

            {/* <svg xmlns="http://www.w3.org/2000/svg" width=".8em" height=".8em" class="bi bi-heart-fill me-2" viewBox="0 0 16 16">
                <path fill="transparent" stroke="red" fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg> */}
            
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="bi me-2" width="40" height="32"><use xmlns="http://www.w3.org/2000/svg" xlink:href="#bootstrap"/></svg>
                <span class="fs-4">Simple header</span>
            </a>
            
            </div>
        </>);

    }
    
}

if (CustomComponent['xTagName'] === undefined ){
    CustomComponent.xTagName = 'x-' + uuidv4();
    customElements.define( CustomComponent.xTagName, CustomComponent);
}

function Weka(){
    return (
        <>
    <h1> Tiny slider example</h1>
    <div class="slider-container">
        <ul class="controls" id="customize-controls" aria-label="Carousel Navigation" tabindex="0">
            <li class="prev" data-controls="prev" aria-controls="customize" tabindex="-1">
                <i class="fas fa-angle-left fa-5x"></i>
            </li>
            <li class="next" data-controls="next" aria-controls="customize" tabindex="-1">
                <i class="fas fa-angle-right fa-5x"></i>          
            </li>
        </ul>
        <div class="bawailmu-my-slider">
            <div class="slider-item">
                <div class="card">                
                    <img src="https://placeimg.com/200/150/any" alt="" />
                    <h2>Title 1</h2>
                    <p class="card_description">Loresm ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
                </div>
            </div>
            
            <div class="slider-item">
                <div class="card">                
                    <img src="https://placeimg.com/200/150/nature" alt="" />                       
                    <h2>Title 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
                </div>
            </div>
            
            <div class="slider-item">
                <div class="card">                
                    <img src="https://placeimg.com/200/150/nature/2" alt="" />
                    <h2>Title 3</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
                </div>
            </div>
            <div class="slider-item">
                <div class="card">                
                    <img src="https://placeimg.com/200/150/nature/3" alt="" />
                    <h2>Title 4</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptas!</p>
                </div>
            </div>
        </div>    
    </div>
    </>
    );
}

console.log(CustomComponent['xTagName'])
console.log(Weka['xTagName']);
document.body.append(
    <div>
        <CustomComponent><p>inner</p></CustomComponent>
        <p>outter</p>
        <Weka />
    </div>
    );


const slider = tns({
    container: '.bawailmu-my-slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false,
    mouseDrag: true,
    lazyload: true,
    controlsContainer: "#customize-controls",
    responsive: {
        640: {
            items: 2,
        },
        
        768: {
            items: 3,
        }
    }

    });
    