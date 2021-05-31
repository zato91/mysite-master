import React  from 'react';
import Form from '../components/Form.js'



const Contact =()=>{
     
    return(
    <div id="contact-main">
        <div>
            <h1 >Contact</h1>
            <h3 >"XXXXXX"</h3>
            <h3>-XX@?</h3>
        </div>
        <div id="contact-container">
            <div id="contact-let" >
                <div >
                    <h3>Reaching out to me</h3>
                    <p>minim veniam, quis nostrud exercitation ullamco laboris,
                    ullamco laboris nisi ut aliquip ex ea commodo </p>
                    <p>minim veniam, 
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>
                    <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,
                    minim veniam, quis nostrud exercitation ullamco laboris nisi utliquip ex ea commodo </p>

                </div>
                <div>
                   <h2>Contact Information</h2>
                    <h4>XXXXXXXX</h4>
                    <h4>XXXXX</h4>
                    <h4>XXXXX-908</h4>
                    <h4>XXXXX@gmail.com</h4>
                </div>

            </div>
                <div id="contact-right" >
                    <Form/>
                </div>

        </div>
    </div>
    )
}


export default Contact;