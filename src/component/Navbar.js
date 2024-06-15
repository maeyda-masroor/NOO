import { Link } from "react-router-dom";
import ReactWhatsapp from 'react-whatsapp';
import {FormattedMessage} from "react-intl";
function Navbar(){
    return <div>
         <header class="site-navbar site-navbar-target bg-secondary shadow" role="banner">
<div class="container">
  <div class="row align-items-center position-relative">
    <div class="site-logo">
      <Link to="/" class="text-white"><img src="./images/1.png" width={100} height={100}/></Link>
    </div>
    <nav class="site-navigation text-left ml-auto " role="navigation">
      <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
        <li class="active"><Link to="/about" class="nav-link">About Us</Link></li>
        <li><Link to = '/ourteam' class="nav-link">Our Board Of Trustees</Link></li>
        <li><Link to = '/ourteam' class="nav-link">Our Team</Link></li>
        <li><Link to="/ourprogram" class="nav-link">Our Program</Link></li>
        <li><Link to = '/faq' class="nav-link">FAQ's</Link></li>
        <li><Link to = "/our" class="nav-link">Acheivement</Link></li>
        <li><Link to ="/contact" class="nav-link">Contact</Link></li>
        <li><Link to = "/makeAnAppointment" class="nav-link">Make An Appointment</Link></li>
        <li><button class="nav-link"><Link to="/donateNow">Donate</Link></button></li>
        <li><ReactWhatsapp class="nav-link"style={{backgroundColor:'#25d366',color:'#fff'}}number="1-212-736-5000">Whatsapp</ReactWhatsapp></li>
         </ul>
    </nav>
    <div class="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" class="site-menu-toggle py-5 js-menu-toggle text-white"><span class="icon-menu h3 text-white"></span></a></div>
  </div>
</div>

</header>

    </div>
}
export default Navbar;