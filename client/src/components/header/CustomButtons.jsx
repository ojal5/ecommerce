import { useState,useContext } from 'react';

import {Box,Typography,Button,styled, Badge} from "@mui/material";
import ShoppingCrtIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from "../../context/DataProvider";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
//components
import LoginDialog from "../login/LoginDialog";
import Profile from './Profile';
import CartItem from '../cart/CartItem';

const Wrapper=styled(Box)(({theme}) => ({
   display: 'flex',
   margin: '0 3% 0 auto',
   '& > *':{
    marginRight: '40px !important',
    fontSize:16,
    alignItems: 'center'
   } ,
   [theme.breakpoints.down('md')]: {
    display: 'block'
   }
}));
const Container=styled(Link)(({theme}) => ({
        display:'flex',
        textDecoration: 'none',
        color: 'inherit',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
}));

        

const LoginButton=styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`
const Text=styled(Typography)`
    font-weight:600;
    display:flex;
`
const ShoppingCIcon=styled(ShoppingCrtIcon)`
        margin-top:3px;
`
const CustomButtons=() =>{

    const [open,setOpen]=useState(false);
    const {account,setAccount} = useContext(DataContext);
    const {cartItems} = useSelector(state => state.cart);

    const openDialog=()=>{
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount}/>  :         //if account has value then show typography
                 <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>

            }

            <Text style={{marginTop:3, width:150}}>Become a Seller</Text>
            <Text style={{marginTop:3}}>More</Text>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary" >
                <ShoppingCIcon/>
                </Badge>
                <Text style={{marginTop:3 , marginLeft: 10}}>Cart</Text>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;