

function Logo() {
    return <>
        {/* <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <div class="bg-primary" style="height: 1em; width: 1em"></div>
        </a>     */}
        <div class="">

        </div>
    </>;
}

function NavBar() {
    return <>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" class="nav-link px-2 text-secondary">Home X</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
            <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
            <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
            <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>
    </>;
}

function Search() {
    return <>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-0 d-flex position-relative p-1 bg-light rounded-pill pb-1">
            <input type="search" class="form-control form-control-dark flex-grow-1 bg-light border-0 shadow-none rounded-pill fs-6" placeholder="Search..." aria-label="Search" />
            <button type="submit" class="bg-light shadow-none border-0 rounded-pill"><i class="bi bi-search end-0 text-dark px-3 pt-1"></i></button>
        </form>
    </>;
}

function ButtonRegister() {
    return <>
        <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
        </div>
    </>;
}

function ButtonSosmed(){
    return <>
        <div class="me-auto">
            <div class="me-1 d-inline-block text-header">Kunjungi Sosial Media </div>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-youtube mx-1"></i></a>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-twitter mx-1"></i></a>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-instagram mx-1"></i></a>
            <a href="#" class="d-inline-block link-light"><i class="bi bi-file-music-fill mx-1"></i></a>
        </div>
    </>
}

function CustomerService(){
    return<>
        <div class="d-flex">
            <div class="me-2 d-inline-block"><a href="#" class="link-light text-decoration-none text-header" ><i class="bi bi-bell-fill me-1"></i>Notifikasi</a></div>
            <div class="me-3 d-inline-block"><a href="#" class="link-light text-decoration-none text-header" ><i class="bi bi-question-circle-fill me-1"></i>Bantuan</a></div>
        </div>
    </>
}
function FavoriteProduct(){
    return<>
        <div class="mx-3"><a href="#" class="text-lowercase link-light text-decoration-none text-favorite">UTBK</a></div>                        
        <div class="me-3"><a href="#" class="text-lowercase link-light text-decoration-none text-favorite">SIMAK UI</a></div>
        <div class="me-3"><a href="#" class="text-lowercase link-light text-decoration-none text-favorite">UTUL UGM</a></div>
        <div class="me-3"><a href="#" class="text-lowercase link-light text-decoration-none text-favorite">SMUP UNPAD</a></div>
        <div class="me-3"><a href="#" class="text-lowercase link-light text-decoration-none text-favorite">CPNS</a></div>
    </>
}

function LeftHeaderBottom(){
    return <>
        <div class="text-center mx-5">
            <i class="bi bi-bag-check"></i>
        </div>
    </>
}

function RightHeaderBottom(){
    return <>
        <div class="text-center mx-5">
            <i class="bi bi-cart"></i>
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

function HeaderTop(){
    return <>
        <div class="d-flex align-items-center pb-1 px-0">            
                <ButtonSosmed />            
                <CustomerService />
                <RegisterIn />                
        </div>
    </>
}
function HeaderBottom(){
    return <>        
            <div class="container d-flex justify-content-center">
                <div class="my-auto">
                    <LeftHeaderBottom />
                </div>
                <div class="flex-fill">
                    <div> 
                        <Search />      
                    </div>
                    <div class="d-flex flex-row ">                
                        <FavoriteProduct />                        
                    </div>
                </div>
                <div class="my-auto">                    
                    <RightHeaderBottom />
                </div>
            </div>
    </>
}

function Header() {
    return <>

        <header class="text-white sticky-top bawailmu-bg-main">
            <div class="container">
                <div class="container">
                    <HeaderTop />
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
        
    </>;
}


export default Header;