
import Gallery from 'react-photo-gallery';
const photos = [
    {
      src: 'http://example.com/example/img1.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://example.com/example/img2.jpg',
      width: 1,
      height: 1
    }
  ]; 
function Galleery(){
    return  <div class="site-section"><div class="container">
        <Gallery photos={photos} />;
        </div>
        </div>
       
}
export default Galleery;