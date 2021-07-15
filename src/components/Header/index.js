import Img from '../../Logo.png';

function ButtonSosmed(){
    return <>
        <div class="me-auto text-center">
            <div class="d-inline-block text-header">Kunjungi Sosial Media </div> <br></br>
            <a href="https://www.youtube.com/channel/UCfya5Km5iQcTNnGnsdKljdg" class="ms-1 d-inline-block link-light"><i class="bi bi-youtube mx-1"></i></a>
            <a href="https://twitter.com/jrtcman1id" class="d-inline-block link-light"><i class="bi bi-twitter mx-1"></i></a>
            <a href="https://www.instagram.com/jrtcman1id/" class="d-inline-block link-light"><i class="bi bi-instagram mx-1"></i></a>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-facebook mx-1"></i></a>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-github mx-1"></i></a>
        </div>
    </>
}

function LeftHeaderBottom(){
    return <>
        <div class="text-center mx-5 my-1">
        <img src={Img} class="img-fluid" alt="..." />
        </div>
    </>
}

function CenterHeaderBottom(){
    return <>
        
        <div class="text-center text-uppercase">
            <h5>jazari robotics and technology club</h5>
        </div>
    </>
}

function RegisterIn(){
    return<>        
        <div class="d-flex">
            <div class="d-inline-block border-right text-header"><a href="#" class="link-light text-decoration-none">Login</a></div>
            <div class="d-inline-block text-header"><a href="#" class="link-light text-decoration-none">Register</a></div>
        </div>
    </>
}

function RegisterOut(){
    return<>
        <div class="container">
            <div></div>
        </div>
    </>
}

function HeaderBottom(){
    return <>        
            <div class="row">
                <div class="col-3">
                    <LeftHeaderBottom />
                </div>
                <div class="col align-self-center">
                    <CenterHeaderBottom />
                </div>
                <div class="col-3 align-self-center">                    
                    <ButtonSosmed />
                </div>
            </div>
    </>
}

function HeaderBottomSm(){
    return <>        
            <div class="row">                
                <div class="col align-self-center my-2">
                    <CenterHeaderBottom />
                </div>                
            </div>
    </>
}

function Header() {
    return <>

        <header class="d-none text-white sticky-top jrtc-bg-dark d-md-block">
            <div class="container">
                <div class="container">
                    {/* <HeaderTop /> */}
                    <HeaderBottom />                    
                </div>
                
                {/* <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo />
                    <NavBar />
                    <Search />
                    <ButtonRegister />
                </div> */}
            </div>
        </header>        
        <header class="d-block text-white sticky-top bg-secondary d-md-none">
            <div class="container">
                <div class="container">
                    {/* <HeaderTop /> */}
                    <HeaderBottomSm />                    
                </div>
                
                {/* <div class=" d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Logo />
                    <NavBar />
                    <Search />
                    <ButtonRegister />
                </div> */}
            </div>
        </header>
    </>;
}


export default Header;