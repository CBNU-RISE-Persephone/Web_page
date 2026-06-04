import { useState } from 'react';
import '../styles/pages/Data.scss';

function Data() {
    const datasets = [
        {
            id: 1,
            title: 'Sample Data 01',
            subTitle: 'Camera + CSI'
        },
        {
            id: 2,
            title: 'Sample Data 02',
            subTitle: 'CSI Visualization'
        },
        {
            id: 3,
            title: 'Sample Data 03',
            subTitle: 'Graph Analysis'
        },
        {
            id: 4,
            title: 'Wimans Dataset',
            subTitle: 'Reference'
        }
    ];

    const [selectedData, setSelectedData] = useState(datasets[0]);

    return (
        <main className="Data">
            <section className="data-hero">
                <p className="page-label">DATA PAGE</p>
                <h1>Wi-Fi Sensing 기반 식물 생장 데이터 분석</h1>
                <p className="hero-desc">
                    카메라 영상과 CSI 데이터를 이용하여 식물 상태와 신호 변화량을 확인하는 페이지입니다.
                </p>
            </section>

            <section className="data-layout">
                <aside className="dataset-panel">
                    <h2>Dataset</h2>

                    <div className="dataset-list">
                        {datasets.map((data) => (
                            <button
                                key={data.id}
                                className={`dataset-item ${
                                    selectedData.id === data.id ? 'active' : ''
                                }`}
                                onClick={() => setSelectedData(data)}
                            >
                                <strong>{data.title}</strong>
                                <span>{data.subTitle}</span>
                                <em>{selectedData.id === data.id ? 'Using' : 'Ready'}</em>
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="data-content">
                    <div className="top-grid">
                        <article className="data-card">
                            <div className="card-title">
                                <span>01</span>
                                <h2>Camera Video</h2>
                            </div>

                            <div className="video-box">
                                {/* 여따 영상 */}
                            </div>

                            <p className="card-desc">
                                실제 촬영된 카메라 영상입니다.
                            </p>
                        </article>

                        <article className="data-card">
                            <div className="card-title">
                                <span>02</span>
                                <h2>CSI Visualization</h2>
                            </div>

                            <div className="csi-box">
                                {/* 여따가 csi */}
                            </div>

                            <p className="card-desc">
                                시각화된 CSI 데이터입니다.
                            </p>
                        </article>
                    </div>

                    <article className="data-card graph-card">
                        <div className="card-title">
                            <span>03</span>
                            <h2>Data Graph</h2>
                        </div>

                        <div className="graph-area">
                            {/* 여따 그래프 */}
                        </div>

                        <p className="card-desc">
                            선택한 데이터의 CSI 변화량을 간단한 그래프로 표현한 영역입니다.
                        </p>
                    </article>

                    <article className="data-card summary-card">
                        <h2>데이터 설명</h2>
                        <p>
                            이 페이지는 카메라 영상과 Wi-Fi CSI 데이터를 함께 확인하기 위한
                            시각화 페이지입니다. 좌측의 데이터 목록을 선택하면 영상 영역,
                            CSI 시각화 영역, 그래프 값이 변경됩니다.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Data;