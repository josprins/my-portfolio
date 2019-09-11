import React from 'react';
import Navigation from './Navigation'

class Contact extends React.Component {
    state = {
        email: {
            recipient: '',
            sender: '',
            subject: 'e-mail from website',
            text: ''
        }
    }



    render() {
        const { email } = this.state;
        return (
            <div className="main-contact">
                <Navigation />
                <div className="container-div">
                    <h1>Contact</h1>
                    <p>JCO.PRINS@GMAIL.COM</p>
                    <form>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input value={email.sender} type="text" id="lname" name="lastname" placeholder="Your last name.."
                                    onChange={e => this.setState({ email: {...email, sender: e.target.value} })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="lname">Email</label>
                            </div>
                            <div className="col-75">
                                <input value={email.recipant} type="email" id="lname" name="lastname" placeholder="Your email address.."
                                    onChange={e => this.setState({ email: {...email, recipient: e.target.value} })}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="subject">Message</label>
                            </div>
                            <div className="col-75">
                                <textarea value={email.text} id="subject" name="subject" placeholder="Write something.."
                                    onChange={e => this.setState({ email: {...email, text: e.target.value} })}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <input className="submit-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
           
        );
    }
    
};

export default Contact;