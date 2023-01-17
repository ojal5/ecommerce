import { useEffect } from "react";
import { Fragment } from "react";
import{Box,styled} from '@mui/material';
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';
//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from  './Slide';
import MidSlide  from "./MidSlide";
import MidSection from './MidSection';

const Componnt=styled(Box)`
        padding:10px;
        background:#F2F2F2;
`
const Home=() =>{

       const {products} = useSelector(state => state.getProducts)                     //useSelector is used to fetch values
         console.log(products);                                                       //const {products} = getProducts; <= Object Destructuring method
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())      //getProducts is an API
    },[dispatch])

    return(
        <Fragment>
             <NavBar/>
             <Componnt>
                <Banner/>
                <MidSlide products={products} title="Deal of The Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals On Accessories" timer={false}/>

             </Componnt>
        </Fragment>
       
    )
}

export default Home;