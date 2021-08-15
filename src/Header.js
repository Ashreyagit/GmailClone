import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppIcon from "@material-ui/icons/Apps";
import NotificationsIcon from '@material-ui/icons/Notifications';

import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {logout} from "./features/userSlice";
import {auth} from "./firebase";

function Header(){
    const user = useSelector(selectUser);
    const dispatch =useDispatch();
    const signOut = () =>{
      auth.signOut().then(()=>{
      dispatch(logout())
      })
    };
    return (
    <div className="header">
           <div className="header_left">
             <IconButton>
                 <MenuIcon />
             </IconButton>
             <img src="https://cellphones.com.vn/sforum/wp-content/uploads/2020/10/newgmaillogo.0.jpg"/>
           </div>

           <div className="header_middle">
               <SearchIcon />
               <input placeholder="Search mail" type="text"/>
               <ArrowDropDownIcon className="header_inputCaret" />
           </div>

           <div className="header_right">
               <IconButton>
                   <AppIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoURL}/>
           </div>
    </div>
    );

    }

export default Header;


        