import { Link } from "react-router-dom";
function TopNavbar(){
    return <div>
        <div class="bg-primary py-3 top-bar shadow d-none d-md-block">
        <div class="container">
          <div class="row">
            <div class="col-md-6 text-md-left pl-0">
              <Link to="/scholarshipForm" class=" pr-3 pl-0">Scholarship Forms</Link>
              <Link to="/Meeting" class="p-3">Meeting</Link>
              <Link to="/New_Stories" class="p-3">News And Stories</Link>
              <Link to="/theimpact" class="p-3">The Impact</Link>
            </div>
            <div class="col-md-6 text-md-right">
              <a href="#" class="p-3"><span class="icon-twitter"></span></a>
              <a href="#" class="p-3"><span class="icon-facebook"></span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
}
export default TopNavbar;