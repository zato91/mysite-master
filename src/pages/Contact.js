import React  from 'react';
import Form from '../components/Form.js'



const Contact =()=>{
     
    return(<>
        <h1 style={{textAlign:"center"}}>Contact</h1>
        <h3 style={{textAlign:"center", marginBottom:"-2%"}}>"XXXXXX"</h3>
        <h3 style={{textAlign:"center"}}>-XX@?</h3>
        <div id="contact-container">
            <div id="contact-let" >
                <div >
                    <h3>Reaching out to me</h3>
                    <p>minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo,
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo </p>

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
        </>
    )
}


export default Contact;