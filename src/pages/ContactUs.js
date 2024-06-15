import GoogleMap from '../component/GoogleMap';
function Contactus(){
    return <div>
       <div class="site-section">
      <div class="container">
        <div class ="row">
          <GoogleMap/>
        </div>
        <div class="site-section">
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <form action="#" method="post">
              <div class="form-group row">
                <div class="col-md-6 mb-4 mb-lg-0">
                  <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="First name"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <input type="text" class="form-control" placeholder="Email address"/>
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-12">
                  <textarea name="" id="" class="form-control" placeholder="Write your message." cols="30" rows="10"></textarea>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-md-6 mr-auto">
                  <input type="submit" class="btn btn-block btn-primary text-white py-3 px-5 rounded-0" value="Send Message"/>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-cursive mb-4">Contact Info</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                  <span class="d-block text-muted small text-uppercase font-weight-bold">Address:</span>
                  <span>NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700</span></li>
                <li class="d-block mb-3"><span class="d-block text-muted small text-uppercase font-weight-bold">Phone:</span><span>coming soon .. </span></li>
                <li class="d-block mb-3"><span class="d-block text-muted small text-uppercase font-weight-bold">Email:</span><span>coming soon..</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

     </div>
    </div>
}
export default Contactus;