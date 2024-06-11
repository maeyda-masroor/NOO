import { Link } from "react-router-dom";
function Navbar(){
    return <div>
         <header class="site-navbar site-navbar-target bg-secondary shadow" role="banner">

<div class="container">
  <div class="row align-items-center position-relative">
    

    <div class="site-logo">
      <a href="index.html" class="text-white">Fundraiser</a>
    </div>


    <nav class="site-navigation text-left ml-auto " role="navigation">
      <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
        <li class="active"><a href="index.html" class="nav-link">Home</a></li>
        <li><Link to="/ourprogram" class="nav-link">Our Program</Link></li>
        <li><a href="causes.html" class="nav-link">Our Causes</a></li>
        <li><a href="blog.html" class="nav-link">Blog</a></li>
        <li><a href="contact.html" class="nav-link">Contact</a></li>
        <li><Link to = "/makeAnAppointment" class="nav-link">Make An Appointment</Link></li>
        <li><button><a href="donate.html">Donate</a></button></li>
      </ul>
    </nav>


    <div class="ml-auto toggle-button d-inline-block d-lg-none"><a href="#" class="site-menu-toggle py-5 js-menu-toggle text-white"><span class="icon-menu h3 text-white"></span></a></div>

    

  </div>
</div>

</header>

    </div>
}
export default Navbar;