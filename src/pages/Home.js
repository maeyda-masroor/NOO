import DonateBox from '../component/DonateBox';
import Header from "../component/Header";
import BelowHeader from "../component/BelowHeader";
import OurLatestCause from '../component/OurLatestCause';
function Home(){
    return <div>
        <Header/>
        <BelowHeader/>
        <DonateBox/>
        <OurLatestCause/>
    </div>
}
export default Home;