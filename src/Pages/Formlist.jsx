import { useEffect, useState } from "react";
import "../styles/pages/Formlist.scss"

function Formlist(){
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const totalPages = Math.ceil(questions.length / pageSize);

    const startIndex = (currentPage - 1) * pageSize;
    const currentQuestions = questions.slice(startIndex, startIndex + pageSize);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try{
            const res = await fetch("https://api.demeter-persephone.cloud/api/questions",{
                method: "GET",
                credentials: "include",
            });

            const data = await res.json();

            if(res.ok){ setQuestions(data.questions); }
            else{ alert(data.message || "문의 목록을 불러오지 못했습니다."); }
        }
        catch(err){
            console.error("문의 목록 불러오기 실패:", err);
            alert("서버 연결 실패");
        }
        finally{ setLoading(false); }
    };

    const openDetail = (question) => { setSelectedQuestion(question); };
    const closeDetail = () => { setSelectedQuestion(null); };

    const formatDate = (dateString) => {
        if(!dateString) return "-";

        const date = new Date(dateString);

        return date.toLocaleDateString("ko-KR",{
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",

        });
    };

    if(loading){
        return(
            <section className="form-list">
                <p className="form-list__loading">문의 목록 불러오는 중..</p>
            </section>
        );
    }

    return(
        <section className="form-list">
            <div className="form-list__header">
                <h2>문의 목록</h2>
            </div>

            <div className="form-list__table-wrap">
                <table className="form-list__table">
                    <thead>
                        <tr>
                            <th className="center_text">문의 ID</th>
                            <th>이름</th>
                            <th>메일</th>
                            <th>시간</th>
                            <th className="center_text">상세</th>
                        </tr>
                    </thead>

                    <tbody>
                        {questions.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="form-list__empty">
                                    아직 문의가 없습니다.
                                </td>
                            </tr>
                        ):(
                            currentQuestions.map((question) => (
                                <tr key={question.question_id}>
                                    <td className="center_text">{question.question_id}</td>
                                    <td>{question.name}</td>
                                    <td>{question.email}</td>
                                    <td>{formatDate(question.create_at)}</td>
                                    <td className="center_text">
                                        <button
                                            type="button"
                                            className="form-list__detail-btn"
                                            onClick={() => openDetail(question)}>
                                            상세내용
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="form-list__pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            type="button"
                            className={
                                currentPage === index + 1
                                ? "form-list__page-btn form-list__page-btn--active"
                                : "form-list__page-btn"
                            }
                            onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                        </button>
                    ))}
                </div>
            )}

            {selectedQuestion && (
                <div className="form-list__modal-bg" onClick={closeDetail}>
                    <div
                        className="form-list__modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="form-list__modal-header">
                            <h3>문의 상세내용</h3>
                            <button
                                type="button"
                                className="form-list__close-btn"
                                onClick={closeDetail}
                            >×</button>
                        </div>

                        <div className="form-list__modal-info">
                            <p>
                                <strong>문의 ID</strong>
                                <span>{selectedQuestion.question_id}</span>
                            </p>

                            <p>
                                <strong>이름</strong>
                                <span>{selectedQuestion.name}</span>
                            </p>

                            <p>
                                <strong>메일</strong>
                                <span>{selectedQuestion.email}</span>
                            </p>

                            <p>
                                <strong>시간</strong>
                                <span>{formatDate(selectedQuestion.create_at)}</span>
                            </p>
                        </div>

                        <div className="form-list__content-box">
                            <strong>내용</strong>
                            <p>{selectedQuestion.contents}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );

}

export default Formlist;