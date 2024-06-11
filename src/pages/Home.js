import DonateBox from '../component/DonateBox';
import Header from "../component/Header";
import BelowHeader from "../component/BelowHeader";
import TheImpact from './TheImpact';
import CEOMessage from '../component/CEOMessage';
import OurProvenSuccess from '../component/OurProvenSuccess';
function Home(){
    return <div>
        <Header/>
        <BelowHeader/>
        <CEOMessage/>
        <DonateBox/>
        <TheImpact/>
        <OurProvenSuccess/>
    </div>
}
export default Home;