import CheckBox from '@material-ui/core/Checkbox';
import React from 'react';
import './EmailRow.css'
import {IconButton} from "@material-ui/core";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"; 
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"; 
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectMail} from "./features/mailSlice";
function EmailRow({id,title,subject,description,time}){
    const history = useHistory();
    const dispatch = useDispatch();
    const openMail = (sel) =>{
        dispatch(
           selectMail({
              id,
              title,
              subject,
              description,
              time,
           })
        );
        history.push("/mail");
    };
    return(
        <div onClick={openMail} className="emailRow">
           <div className="emailRow_options">
                <CheckBox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            

            </div>
            <div className="emailRow_title">
               <h4> {title}</h4>
            </div>
            <div className="emailRow_message">
             <h4>{subject}
             <span className="emailRow_description"> -   {description}</span>
             
             </h4>
            </div>
            <div className="emailRow_description">
            {time}
            </div>
        </div>
    );
}

export default EmailRow;