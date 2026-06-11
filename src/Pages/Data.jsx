import { useState, useEffect } from 'react';
import '../styles/pages/Data.scss';

function Data() {
    const [datasets, setDatasets] = useState([]);       
    const [selectedId, setSelectedId] = useState(null); 
    const [sampleDetail, setSampleDetail] = useState(null); 
    const [loading, setLoading] = useState(true);       

    useEffect(() => {
        fetch('http://localhost:5000/api/samples')
            .then((res) => {
                if (!res.ok) throw new Error("서버 응답 오류");
                return res.json();
            })
            .then((data) => {
                setDatasets(data);
                if (data.length > 0) {
                    setSelectedId(data[0].id); 
                }
                setLoading(false)
            })
            .catch((err) => {
                console.error("샘플 목록 로드 실패:", err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (!selectedId) return;

        fetch(`http://localhost:5000/api/samples/${selectedId}`)
            .then((res) => {
                if (!res.ok) throw new Error("상세 정보 호출 오류");
                return res.json();
            })
            .then((data) => {
                setSampleDetail(data);
            })
            .catch((err) => console.error("상세 정보 로드 실패:", err));
    }, [selectedId]);

    if (loading) {
        return <div className="loading" style={{ padding: '50px', textAlign: 'center', fontSize: '20px' }}>데이터베이스에서 샘플 목록을 불러오는 중입니다...</div>;
    }

    return (
        <main className="Data">
            <section className="data-hero">
                <p className="page-label">DATA PAGE</p>
                <h1>Wi-Fi Sensing 기반 식물 생장 데이터 분석 (WiMANS 검증)</h1>
                <p className="hero-desc">
                    카메라 영상과 CSI 데이터를 이용하여 식물 상태와 신호 변화량을 확인하는 페이지입니다.
                </p>
            </section>

            <section className="data-layout">
                <aside className="dataset-panel">
                    <h2>Dataset</h2>
                    <div className="dataset-list" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                        {datasets.map((data) => (
                            <button
                                key={data.id}
                                className={`dataset-item ${selectedId === data.id ? 'active' : ''}`}
                                onClick={() => setSelectedId(data.id)}
                            >
                                <strong>ID: {data.id}</strong>
                                <span>{data.subTitle}</span>
                                <em>{selectedId === data.id ? 'Viewing' : 'Ready'}</em>
                            </button>
                        ))}
                    </div>
                </aside>

                <section className="data-content">
                    <div className="top-grid">
                        
                        {/* 01. Camera Video 영역 (실제 플레이어 탑재) */}
                        <article className="data-card">
                            <div className="card-title">
                                <span>01</span>
                                <h2>Camera Video</h2>
                            </div>
                            <div className="video-box" style={{ background: '#1e1e1e', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '260px', padding: '15px', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}>
                                {sampleDetail?.video_url ? (
                                    <video 
                                        src={sampleDetail.video_url} 
                                        controls 
                                        style={{ width: '100%', maxHeight: '180px', borderRadius: '4px' }}
                                        onError={(e) => {
                                            // 비디오 파일이 실제 static 폴더에 없을 경우 텍스트 대체
                                            e.target.style.display = 'none';
                                            document.getElementById('video-path-fallback').style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                
                                <div id="video-path-fallback" style={{ width: '100%', textAlign: 'center', display: sampleDetail?.video_url ? 'none' : 'block' }}>
                                    <span style={{ color: '#ffcc00', marginBottom: '5px', fontSize: '13px', display: 'block' }}>🎬 Matching Video Path</span>
                                    <p style={{ wordBreak: 'break-all', fontSize: '12px', fontFamily: 'monospace', color: '#00ffcc', margin: 0 }}>
                                        {sampleDetail ? sampleDetail.video_path : "사이드바에서 샘플을 선택해 주세요."}
                                    </p>
                                </div>
                            </div>
                            <p className="card-desc">
                                DB 내부 <code>video_data</code> 테이블과 연동된 실제 비디오 저장 파일 경로 및 스트리밍입니다.
                            </p>
                        </article>

                        {/* 02. CSI Visualization 영역 (실제 이미지 렌더링 탑재) */}
                        <article className="data-card">
                            <div className="card-title">
                                <span>02</span>
                                <h2>CSI Visualization</h2>
                            </div>
                            <div className="csi-box" style={{ background: '#1e1e1e', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '260px', padding: '15px', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}>
                                {sampleDetail?.heatmap_url ? (
                                    <img 
                                        src={sampleDetail.heatmap_url} 
                                        alt="CSI Heatmap"
                                        style={{ maxWidth: '100%', maxHeight: '180px', objectFit: 'contain' }}
                                        onError={(e) => {
                                            // 이미지 파일이 실제 static 폴더에 없을 경우 텍스트 대체
                                            e.target.style.display = 'none';
                                            document.getElementById('csi-path-fallback').style.display = 'block';
                                        }}
                                    />
                                ) : null}

                                <div id="csi-path-fallback" style={{ width: '100%', textAlign: 'center', display: sampleDetail?.heatmap_url ? 'none' : 'block' }}>
                                    <span style={{ color: '#ffcc00', marginBottom: '5px', fontSize: '13px', display: 'block' }}>📡 Matching CSI Path (.npy)</span>
                                    <p style={{ wordBreak: 'break-all', fontSize: '12px', fontFamily: 'monospace', color: '#00ffcc', margin: 0 }}>
                                        {sampleDetail ? sampleDetail.amp_npy_path : "사이드바에서 샘플을 선택해 주세요."}
                                    </p>
                                </div>
                            </div>
                            <p className="card-desc">
                                DB 내부 <code>csi_data</code> 테이블과 연동된 진우혁 팀원의 앰플리튜브 전처리 이미지 시각화입니다.
                            </p>
                        </article>
                    </div>

                    {/* 03. 데이터 정보 요약 */}
                    <article className="data-card summary-card" style={{ marginTop: '20px' }}>
                        <h2>선택된 샘플 메타데이터 요약</h2>
                        {sampleDetail ? (
                            <div className="metadata-summary-content" style={{ lineHeight: '2.0', fontSize: '14px', padding: '10px' }}>
                                🔹 <strong>현재 Target ID:</strong> <span style={{ color: '#007bff', fontWeight: 'bold' }}>{sampleDetail.sample_id}</span> <br />
                                🏢 <strong>실험 환경 (Environment):</strong> {sampleDetail.environment} <br />
                                📡 <strong>주파수 대역 (WiFi Band):</strong> {sampleDetail.wifi_band} <br />
                                👥 <strong>측정 인원수 (Number of Users):</strong> {sampleDetail.number_of_users} 명 <br />
                                🏃‍♂️ <strong>User 1 행동:</strong> {sampleDetail.user_1_activity} | 🏃‍♀️ <strong>User 2 행동:</strong> {sampleDetail.user_2_activity}
                            </div>
                        ) : (
                            <p>데이터를 로딩 중이거나 선택된 내역이 없습니다.</p>
                        )}
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Data;
