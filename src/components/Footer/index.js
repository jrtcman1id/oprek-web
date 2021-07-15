function SmFooter(){
    return <>
    <div class="d-block d-md-none">
        <div class="container">
            <div class="row">
                <div class="col">   
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light">Contact us: <i class="bi bi-whatsapp mx-1"></i><i class="bi bi-telegram"></i></a>
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light">0817111331 (Balqis) </a>
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light">081318676303 (Hamdi)</a>
                </div>
                <div class="col">   
                    <div class="text-center">
                        <div class="me-auto text-center">
                            <div class="d-inline-block text-header">Kunjungi Sosial Media </div> <br></br>
                            <a href="https://www.youtube.com/channel/UCfya5Km5iQcTNnGnsdKljdg" class="ms-1 d-inline-block link-light"><i class="bi bi-youtube mx-1"></i></a>
                            <a href="https://twitter.com/jrtcman1id" class="d-inline-block link-light"><i class="bi bi-twitter mx-1"></i></a>
                            <a href="https://www.instagram.com/p/CODEiwcrtMR/" class="d-inline-block link-light"><i class="bi bi-instagram mx-1"></i></a>
                            <a href="#" class="d-inline-block link-light"><i class="bi bi-facebook mx-1"></i></a>
                            <a href="#" class="d-inline-block link-light"><i class="bi bi-github mx-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}

function MdFooter(){
    return<>
    <div class="d-none d-md-block">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center my-2">   
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light">Contact us : </a><br></br>                    
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light"><i class="bi bi-whatsapp mx-1"></i><i class="bi bi-telegram me-2"></i>0817111331 (Balqis) </a><br></br>
                    <a href="https://web.whatsapp.com/" class="text-decoration-none text-header link-light ms-3"><i class="bi bi-whatsapp mx-1"></i><i class="bi bi-telegram me-2"></i>081318676303 (Hamdi)</a>                    
                </div>            
            </div>
        </div>
    </div>
    </>
}


function Main(){
    return<>
    <div class="bg-dark w-100">
        <SmFooter />
        <MdFooter />
    </div>    
    </>
}

export default Main;