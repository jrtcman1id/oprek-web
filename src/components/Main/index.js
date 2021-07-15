import { Modal } from 'bootstrap';
// import Img1 from './Robot transparant.png';
import Img from '../../Logo.png';

function MiddleLogoMain(){
    return <>
        <div class="text-center mx-5 my-1">
        <img src={Img} class="img-fluid" alt="..." />
        </div>
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
                const fullName = data.get('fullName');
                console.log(fullName);
                const gender = data.get('gender');
                console.log(gender);
                const email = data.get('email');
                console.log(email);
                const nomer = data.get('nomer');
                console.log(nomer);
                const jurusan = data.get("jurusan");
                console.log(jurusan);
                const tempatLahir = data.get('tempatLahir');
                console.log(tempatLahir);
                const tanggalLahir = data.get('tanggalLahir');
                console.log(tanggalLahir);
                const alamat = data.get('alamat');
                console.log(alamat);
                const motivasi = data.get('motivasi');
                console.log(motivasi);


                if(fullName === ""){
                    let myModal = new Modal(
                        document.getElementById("modalFormFailed"),
                        {}    
                    );
                    myModal.show();
                    return;
                }
                let dataRequest = {
                    full_name : fullName,
                    gender : gender, 
                    email : email, 
                    phone_number: nomer, 
                    major : jurusan, 
                    birth_place : tempatLahir, 
                    birth_date : tanggalLahir, 
                    residence_address : alamat, 
                    motivation : motivasi
                }

                postData('http://oprec.jrtc.man1.id/api/recruits', dataRequest)
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
                <h3>Open Recruitment </h3>
                <h5>Anggota jRTC 3.0</h5>

                <div class="d-block d-md-none">
                    <MiddleLogoMain />
                </div>

                {/* <img src={Img1} class="img-fluid jrtc-w-10 border-none ms-2"></img> */}
                <div class="fw-bolder fst-italic text-danger">                    
                    <p class="fs-6"><strong class="text-uppercase fs-5">Pendaftaran tanggal 16-30 juli 2021</strong><br></br>"Tidak akan pernah ada pemungutan biaya apapun seperti uang kas ataupun pembelian alat alat robotik"</p>
                </div>                
                <Success />
                <Failed />
                <FailedForm />
            </div>
            <div class="row px-sm-5">    
                <div class="col">            
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="fullName" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control shadow-none" name="fullName" id="fullName" placeholder="Nama Lengkap" />
                        </div>
                        <div class="w-100">                            
                            <label for="gender" class="form-label">Jenis Kelamin</label>
                            <select class="form-select shadow-none" name="gender" id="gender" aria-label="Default select example">                        
                                <option value="Laki-laki">Laki-laki</option>
                                <option value="Perempuan">Perempuan</option>                                
                            </select>
                        </div>
                    </div>                                                                                                                          
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            
                            <label for="nomer" class="form-label">Nomer Telepon</label>
                            <input type="text" class="form-control shadow-none" name="nomer" id="nomer" placeholder="08*********" />
                        </div>
                        <div class="w-100">
                            <label for="jurusan" class="form-label">Jurusan</label>
                            <select class="form-select shadow-none" name="jurusan" id="jurusan" aria-label="Default select example">                        
                                <option value="IPA">IPA</option>
                                <option value="IPS">IPS</option>
                                <option value="AGAMA">AGAMA</option>
                            </select>      
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="tempatLahir" class="form-label">Tempat Lahir</label>
                            <input type="text" class="form-control shadow-none" name="tempatLahir" id="tempatLahir" placeholder="Kota" /> 
                        </div>
                        <div class="w-100">
                            <label for="tanggalLahir" class="form-label">Tanggal Lahir</label>
                            <input type="date" class="form-control shadow-none" name="tanggalLahir" id="tanggalLahir" placeholder="MM/DD/YYYY" value="1970-30-12" />                            
                        </div>
                    </div>     
                    <div class="my-md-2">                        
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control shadow-none" name="email" id="email" placeholder="name@example.com" />
                    </div>                                                                         
                    <div class="my-md-2">                
                        <label for="alamat" class="form-label">Alamat Domisili</label>
                        <textarea class="form-control shadow-none" name="alamat" id="alamat" rows="3"></textarea>                                        
                    </div>      
                    <div class="my-md-2">
                        <label for="motivasi" class="form-label">Motivasi Mendaftar JRTC</label>
                        <textarea class="form-control shadow-none" name="motivasi" id="motivasi" rows="3"></textarea>                          
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
            <div class="modal-header bg-success text-light">
                <h5 class="modal-title">Success</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body jrtc-bg-dark text-light">
                <p><strong>Registrasi Berhasil!!</strong> Anda terdaftar sebagai calon anggota jRTC 3.0</p>
            </div>
            <div class="modal-footer jrtc-bg-blue">
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
            <div class="modal-header bg-danger text-light">
                <h5 class="modal-title ">Failed!!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body jrtc-bg-dark text-light">
                <p><strong>Data tidak lengkap,</strong> Pastikan semua data terisi.</p>
            </div>
            <div class="modal-footer jrtc-bg-blue">
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
            <div class="modal-header bg-danger text-light">
                <h5 class="modal-title">Failed!!!</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body jrtc-bg-dark text-light">
                <p><strong>Registrasi Gagal</strong>, Silahkan coba kembali</p>
            </div>
            <div class="modal-footer jrtc-bg-blue">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
    </div>
    </>
}

function Main(){
    return<>
    <div class="py-4 jrtc-bg-blue">
        <RegisForm />        
    </div>    
    </>
}

export default Main;