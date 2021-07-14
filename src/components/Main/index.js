function Fields(){
    return<>
    </>
}

function RegisForm(){
    return<>                
        <div class="container-md rounded-3 px-md-5 px-sm-1">
            <div class="fs-4 p-sm-4 text-center"><a>Registrasi</a></div>
            <div class="row px-sm-5">    
                <div class="col">            
                    <div class="d-flex flex-column flex-md-row my-md-2">
                        <div class="w-100 pe-md-3">
                            <label for="exampleFormControlInput2" class="form-label">Nama Lengkap</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Nama Lengkap" style="background-color: blue; opacity: 0.1;" />
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
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tanggal lahir" />
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
        </div>                                                                        
    </>
}

function Test(){
    return<>
    <div class="container-sm bg-primary">100% wide until small breakpoint</div>
    <div class="container-md bg-secondary">100% wide until medium breakpoint</div>
    <div class="container-lg bg-warning">100% wide until large breakpoint</div>
    <div class="container-xl bg-danger">100% wide until extra large breakpoint</div>
    <div class="container-xxl bg-success">100% wide until extra extra large breakpoint</div>
    </>
}

function Main(){
    return<>
    <div class="py-4 bg-transparent">
        <RegisForm />
        <Test />
    </div>    
    </>
}

export default Main;