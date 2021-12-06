import React,{useState,useEffect} from 'react';
import '../styles/Register.css';
import {useFormik} from 'formik';
import axios from 'axios';

const AddDoctor = (props) => {
    
   
   
    const formik = useFormik({
           initialValues:{
              education_level:'',
              specialization:'',
              information:'',
               },
           onSubmit:values => {
               console.log(values)
   
                
               axios.post ('http://127.0.0.1:5000/api/profile/9', values)
                 .then((response) => {
                   console.log("Sucess:",response.data)
                   
                   
               }).catch((err)=>{
                   console.log(err)
               })
           },
           validate:values => {
               let errors = {}
               if(!values.education_level){
                   errors.education_level = "Required*"
               }
               if(!values.information){
                   errors.information= "Required*"
               }
               if(!values.specialization){
                errors.specialization= "Required*"
            }
              
            
                return errors
                
                
           }
       })
      const finalChange = (event) =>{
       formik.setFieldValue("file", event.currentTarget.files[0]);
     }
       
       return ( 
          <div className="form-container">
              <h2>Add your Doctor Profile</h2>
   
           <form className="registration-form" onSubmit={formik.handleSubmit} >
          <fieldset>
          <legend>Doctor</legend>
        
         
   
            <label className="form-label" htmlFor="education_level">Education level</label>
         
          <input className="form-item" type="text " id="education_level" name="education_level" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.education_level}  />
          {formik.touched.education_level && formik.errors.education_level?<div className="error">{formik.errors.education_level}</div>:null}
        
        <label className="form-label" htmlFor="specialization">Speciaization</label>
          <input className="form-item" type="text " id="specialization" name="specialization" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.speciaization} />
          {formik.touched.speciaization && formik.errors.speciaization?<div className="error">{formik.errors.speciaization}</div>:null}

          <label className="form-label" htmlFor="information">Information</label>
          <input className="form-item" type="text " id="information" name="information" 
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.information} />
          {formik.touched.information && formik.errors.information?<div className="error">{formik.errors.information}</div>:null}
   
        
      
        <input type="submit" className="btn-submit" value="Add Profile" />
      
          </fieldset>
         </form>
          </div>
        
       
        );
}
 
export default  AddDoctor;