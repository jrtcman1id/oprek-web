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
                const value = data.get('exampleFormControlInput1x');
                console.log(value);

                let dataRequest = {
                    full_name : "Merdelka Satu",
                    gender : "Pria", 
                    email : "merdeka@satu.com", 
                    phone_number: "088111111111111", 
                    major : "IPA", 
                    birth_place : "Bogor", 
                    birth_date : "12-12-2005", 
                    residence_address : "Jalan Merdeka Satu Bogor", 
                    motivation : "Elite"
                }

                postData('http://localhost:3000/recruits', dataRequest)
                .then(data => {
                    console.log(JSON.stringify(data)); // JSON data parsed by `data.json()` call
                })
                .catch(error => { console.log('request failed', error); });;
            });
        }}>
            <div class="fs-4 p-sm-4 text-center text-wrap">
                <h4>Open Recruitment </h4>
                <h5>Anggota jRTC 3.0</h5>
                <div class="fw-bolder fst-italic text-danger">
                    <p class="fs-6">"Tidak akan pernah ada pemungutan biaya apapun seperti uang kas ataupun pembelian alat alat robotik"</p>
                </div>                
            </div>
            <div class="row px-sm-5">    
                <div class="col">            
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput1x" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control" name="exampleFormControlInput1x" id="exampleFormControlInput1x" placeholder="Nama Lengkap" />
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                    </div>                                                                                                                          
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput2" class="form-label">Nomer Telepon</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="08*********" />
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Jurusan</label>
                            <select class="form-select" aria-label="Default select example">                        
                                <option value="1">IPA</option>
                                <option value="2">IPS</option>
                                <option value="3">AGAMA</option>
                            </select>      
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput2" class="form-label">Tempat Lahir</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Kota" /> 
                        </div>
                        <div class="w-100">
                            <label for="exampleFormControlInput1" class="form-label">Tanggal Lahir</label>
                            <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="MM/DD/YYYY" value="1970-30-12" />                            
                        </div>
                    </div>                                                                              
                    <div class="my-md-2">                
                        <label for="exampleFormControlTextarea1" class="form-label">Alamat Domisili</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>                                        
                    </div>      
                    <div class="my-md-2">
                        <label for="exampleFormControlTextarea1" class="form-label">Motivasi Mendaftar JRTC</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>  
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

function Main(){
    return<>
    <div class="py-4 bg-transparent">
        <RegisForm />        
    </div>    
    </>
}

export default Main;