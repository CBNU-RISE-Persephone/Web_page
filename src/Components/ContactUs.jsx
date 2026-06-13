import { useState } from 'react';
import '../styles/components/ContactUs.scss';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contents: ''
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('https://api.demeter-persephone.cloud/api/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    alert(data.error);
                    return;
                }

                alert(data.message || '문의가 전송되었습니다.');

                setFormData({
                    name: '',
                    email: '',
                    contents: ''
                });
            })
            .catch((err) => {
                console.error('문의 전송 실패:', err);
                alert('문의 전송 중 오류가 발생했습니다.');
            });
    }

    return (
        <section className="ContactUs">
            <div className="contact-header">
                <p className="section-label">CONTACT</p>
                <h2>문의하기</h2>
                <p>
                    프로젝트에 대한 문의사항이나 의견을 남겨주세요.
                </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="input-row">
                    <div className="form-field">
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Please enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Please enter email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label htmlFor="contents">Contents</label>
                    <textarea
                        id="contents"
                        name="contents"
                        placeholder="Contents..."
                        value={formData.contents}
                        onChange={handleChange}
                        required
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