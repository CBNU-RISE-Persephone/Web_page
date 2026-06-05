import '../styles/components/ContactUs.scss';

function ContactUs() {
    return (
        <section className="ContactUs">
            <div className="contact-header">
                <p className="section-label">CONTACT</p>
                <h2>문의하기</h2>
                <p>
                    프로젝트에 대한 문의사항이나 의견을 남겨주세요.
                </p>
            </div>

            <form className="contact-form">
                <div className="input-row">
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Please enter your name"
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Please enter email"
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="contents">Contents</label>
                    <textarea
                        id="contents"
                        placeholder="Contents..."
                    ></textarea>
                </div>

                <button type="submit" className="send-btn">
                    Send
                </button>
            </form>
        </section>
    );
}

export default ContactUs;