function DonateNow(){
    return <div class="site-section bg-image overlay-primary" propsstyle="background-image: url('images/img_1.jpg');">
    <div class="container">
      <div class="row align-items-stretch">
        <div class="col-md-6">
            <h1 class="text-cursive">Bank Details</h1>
            <p class="text-cursive">BANK DETAIL OF ISHRAT HUSAIN PAKISTAN INSTITUTE OF LIVING
& LEARNING ALLIED BANK LTD<br/>
Account title......Ishrat Husain Pakistan PILL<br/>
Account Number........0010016878230010<br/>
IBAN....PK 47 ABPA0010016878230010<br/>
Branch Code.........0711<br/>
Branch Name......ABLK Block North Nazimabad Karachi</p>
        </div>
        <div class="col-md-6">
          <div class="bg-white h-100 p-4 shadow">
            <h3 class="mb-4 text-cursive">Donate Now</h3>
            <form action="#">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Name"/>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" placeholder="Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Amount in dollar"/>
              </div>
              <div class="form-group">
                <p style={{color:'red'}}>#note: you will recieve a confirmation email that you have donate an amount in dollar , The admin will have information in Spreadsheet as Saved Information</p>
              </div>
              <div class="form-group">
                <input type="submit" value="Donate Now" class="btn btn-primary"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
}
export default DonateNow;