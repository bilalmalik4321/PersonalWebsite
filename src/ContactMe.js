import React from "react";

const ContactMe = () =>(
    <div>
        <h2>Contact Me</h2>
        
            <p className="AboutMe">
                Leave me an email, whether its for just some chit chat or a project; love to have people reach out.
            </p>
            <div className="buttonHolder-contact">
            <a className="contact-anchor" href = "mailto:bilalmalik4321@gmail.com?subject = Feedback&body = Message">
                <button className="Button" >
                    <span> Email me</span>
                </button>
                
            </a>
            </div>
    </div>
);

export default ContactMe;