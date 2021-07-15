import { Modal } from 'bootstrap';
function Fields(){
    return<>
    </>
}

// Example POST method implementation:
async function postData(url = '', data = {}) {
  
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

function RegisForm(){
    return<>                
        <form class="container-md rounded-3 px-md-5 px-sm-1" ref={(elem) => {
            elem.addEventListener('submit', (event) => {
                event.preventDefault();
                const data = new FormData(event.target);
                const valueFullName = data.get('exampleFormControlInput1x');
                console.log(valueFullName);

                if(valueFullName === ""){
                    let myModal = new Modal(
                        document.getElementById("modalFormFailed"),
                        {}    
                    );
                    myModal.show();
                    return;
                }
                let dataRequest = {
                    full_name : valueFullName,
                    gender : "Pria", 
                    email : "merdeka@satu.com", 
                    phone_number: "088111111111111", 
                    major : "IPA", 
                    birth_place : "Bogor", 
                    birth_date : "12-12-2005", 
                    residence_address : "Jalan Merdeka Satu Bogor", 
                    motivation : "Elite"
                }

                postData('http://192.168.10.102:3000/recruits', dataRequest)
                .then(data => {
                    console.log(JSON.stringify(data)); // JSON data parsed by `data.json()` call
                    //berhasil
                    let myModal = new Modal(
                        document.getElementById("modalSuccess"),
                        {}    
                    );
                    myModal.show();
                })
                .catch(error => { 
                    console.log('request failed', error); 
                    //gagal
                    let myModal = new Modal(
                        document.getElementById("modalFailed"),
                        {}    
                    );
                    myModal.show();

                });
                
            });
        }}>
            <div class="fs-4 p-sm-4 text-center text-wrap">
                <h4>Open Recruitment </h4>
                <h5>Anggota jRTC 3.0</h5>
                <div class="fw-bolder fst-italic text-danger">
                    <p class="fs-6">"Tidak akan pernah ada pemungutan biaya apapun seperti uang kas ataupun pembelian alat alat robotik"</p>
                </div>                
                <Success />
                <Failed />
                <FailedForm />
            </div>
            <div class="row px-sm-5">    
                <div class="col">            
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput1x" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control shadow-none" name="exampleFormControlInput1x" id="exampleFormControlInput1x" placeholder="Nama Lengkap" />
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>                                                                                                                          
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput2" class="form-label">Nomer Telepon</label>
                            <input type="text" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="08*********" />
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Jurusan</label>
                            <select class="form-select shadow-none" aria-label="Default select example">                        
                                <option value="1">IPA</option>
                                <option value="2">IPS</option>
                                <option value="3">AGAMA</option>
                            </select>      
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput2" class="form-label">Tempat Lahir</label>
                            <input type="text" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="Kota" /> 
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Tanggal Lahir</label>
                            <input type="date" class="form-control shadow-none" id="exampleFormControlInput1" placeholder="MM/DD/YYYY" value="1970-30-12" />                            
                        </div>
                    </div>                                                                              
                    <div class="my-md-2">                
                        <label for="exampleFormControlTextarea1" class="form-label">Alamat Domisili</label>
                        <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3"></textarea>                                        
                    </div>      
                    <div class="my-md-2">
                        <label for="exampleFormControlTextarea1" class="form-label">Motivasi Mendaftar JRTC</label>
                        <textarea class="form-control shadow-none" id="exampleFormControlTextarea1" rows="3"></textarea>  
                    </div>
                </div>
            </div>      
            <div class="ms-sm-5 mt-3">
                <button type="submit" class="btn btn-secondary">Submit</button>
            </div>        
            <br></br>                  
        </form>                                                                        
    </>
}

function Success(){
    return<>
    {/* <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Registrasi Berhasil!!</strong> Anda terdaftar sebagai calon anggota jRTC 3.0
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div> */}
    <div id="modalSuccess" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Success</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p><strong>Registrasi Berhasil!!</strong> Anda terdaftar sebagai calon anggota jRTC 3.0</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
}

function FailedForm(){
    return<>
    <div id="modalFormFailed" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Failed!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p><strong>Data tidak lengkap,</strong> Pastikan semua data terisi.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
}

function Failed(){
    return<>
    <div id="modalFailed" class="modal fade" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Failed!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p><strong>Registrasi Gagal</strong>, Silahkan coba kembali</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
}

function Main(){
    return<>
    <div class="py-4 bg-transparent">
        <RegisForm />        
    </div>    
    </>
}

export default Main;