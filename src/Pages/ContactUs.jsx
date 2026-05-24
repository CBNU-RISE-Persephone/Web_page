import '../styles/pages/ContactUs.scss'

function ContactUs(){
    return(
        <main className='ContactUsPage'>

        <div className="headBox">
            <h3>Contact Us</h3>
        </div>

        <form className="contactForm">
            <div className='topInputGroup'>
                <div className='formField'>
                    <label for='name'>Name</label>
                    <input id='name' type='text' placeholder='Please enter your name'></input>
                </div>
                <div className='formField'>
                    <label for='email'>E-mail</label>
                    <input id='email' type='email' placeholder='Please enter email'></input>
                </div>
            </div>
            <div className='formField contentsField'>
                <label for='contents'>Contents</label>
                <textarea id='contents' placeholder='Contents...'></textarea>
            </div>

            <button type='submit' className='sendBtn'>Send</button>
        </form>

        </main>
    );
}

export default ContactUs;