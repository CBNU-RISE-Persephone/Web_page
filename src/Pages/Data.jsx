import { useState, useEffect, useRef } from 'react';
import '../styles/pages/Data.scss';

const API_BASE_URL = 'https://api.demeter-persephone.cloud';

function getMediaUrl(path) {
    if (!path) return '';
    return new URL(path, API_BASE_URL).toString();
}

function Data() {
    const videoRef = useRef(null);
    const [datasets, setDatasets] = useState([]);       
    const [selectedId, setSelectedId] = useState(null); 
    const [sampleDetail, setSampleDetail] = useState(null); 
    const [loading, setLoading] = useState(true);       
    const [videoError, setVideoError] = useState(false);
    const [heatmapError, setHeatmapError] = useState(false);
    const [videoReady, setVideoReady] = useState(false);
    const [heatmapReady, setHeatmapReady] = useState(false);
    const [syncedPlayback, setSyncedPlayback] = useState(false);
    const [heatmapSrc, setHeatmapSrc] = useState('');

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/samples`)
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

        setSampleDetail(null);
        setVideoError(false);
        setHeatmapError(false);
        setVideoReady(false);
        setHeatmapReady(false);
        setSyncedPlayback(false);
        setHeatmapSrc('');

        fetch(`${API_BASE_URL}/api/samples/${selectedId}`)
            .then((res) => {
                if (!res.ok) throw new Error("상세 정보 호출 오류");
                return res.json();
            })
            .then((data) => {
                setSampleDetail(data);
            })
            .catch((err) => console.error("상세 정보 로드 실패:", err));
    }, [selectedId]);

    useEffect(() => {
        if (!sampleDetail?.heatmap_url) return;

        const baseHeatmapUrl = getMediaUrl(sampleDetail.heatmap_url);
        const syncHeatmapUrl = `${baseHeatmapUrl}${baseHeatmapUrl.includes('?') ? '&' : '?'}sync=${Date.now()}`;
        const image = new Image();

        image.onload = () => {
            setHeatmapSrc(syncHeatmapUrl);
            setHeatmapReady(true);
        };
        image.onerror = () => {
            setHeatmapError(true);
            setHeatmapReady(false);
        };
        image.src = syncHeatmapUrl;

        return () => {
            image.onload = null;
            image.onerror = null;
        };
    }, [sampleDetail]);

    useEffect(() => {
        if (!videoReady || !heatmapReady || !videoRef.current) return;

        const video = videoRef.current;
        video.pause();
        video.currentTime = 0;
        setSyncedPlayback(true);

        requestAnimationFrame(() => {
            video.play().catch((err) => {
                console.error("동기화 재생 시작 실패:", err);
            });
        });
    }, [videoReady, heatmapReady]);

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
                        
                        
                        <article className="data-card">
                            <div className="card-title">
                                <span>01</span>
                                <h2>Camera Video</h2>
                            </div>
                            <div className="video-box" style={{ position: 'relative', background: '#1e1e1e', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '260px', padding: '15px', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}>
                                {sampleDetail?.video_url && !videoError ? (
                                    <video 
                                        ref={videoRef}
                                        src={getMediaUrl(sampleDetail.video_url)}
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px', visibility: syncedPlayback ? 'visible' : 'hidden' }}
                                        onCanPlayThrough={() => {
                                            setVideoReady(true);
                                        }}
                                        onLoadedData={() => {
                                            setVideoReady(true);
                                        }}
                                        onError={() => {
                                            setVideoError(true);
                                        }}
                                    />
                                ) : null}
                                
                                {sampleDetail?.video_url && sampleDetail?.heatmap_url && !videoError && !heatmapError && !syncedPlayback ? (
                                    <span style={{ position: 'absolute', color: '#ffcc00', fontSize: '13px' }}>동기화 준비 중...</span>
                                ) : null}

                                <div id="video-path-fallback" style={{ width: '100%', textAlign: 'center', display: sampleDetail?.video_url && !videoError ? 'none' : 'block' }}>
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


                        <article className="data-card">
                            <div className="card-title">
                                <span>02</span>
                                <h2>CSI Visualization</h2>
                            </div>
                            <div className="csi-box" style={{ position: 'relative', background: '#1e1e1e', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '260px', padding: '15px', color: '#fff', border: '1px solid #333', borderRadius: '6px' }}>
                                {sampleDetail?.heatmap_url && heatmapSrc && !heatmapError ? (
                                    <img 
                                        src={heatmapSrc}
                                        alt="CSI Heatmap"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain', visibility: syncedPlayback ? 'visible' : 'hidden' }}
                                        onError={() => {
                                            setHeatmapError(true);
                                        }}
                                    />
                                ) : null}

                                {sampleDetail?.video_url && sampleDetail?.heatmap_url && !videoError && !heatmapError && !syncedPlayback ? (
                                    <span style={{ position: 'absolute', color: '#ffcc00', fontSize: '13px' }}>동기화 준비 중...</span>
                                ) : null}

                                <div id="csi-path-fallback" style={{ width: '100%', textAlign: 'center', display: sampleDetail?.heatmap_url && !heatmapError ? 'none' : 'block' }}>
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

                    

                    <article className="data-card summary-card" style={{ marginTop: '20px' }}>
                        <h2>WiMANS 데이터 해석 가이드</h2>
                        <p>
                            좌측의 Camera Video는 실제 카메라로 촬영된 관찰 장면이며, 우측의 CSI Visualization은
                            같은 구간에서 Wi-Fi 신호가 어떻게 변화했는지를 시각화한 결과입니다.
                        </p>
                        <p>
                            CSI 화면에서 색의 변화는 신호 진폭의 변화를 의미합니다. 영상 속 움직임이나 환경 변화가 커질수록
                            Heatmap에서도 시간에 따른 패턴 변화가 더 뚜렷하게 나타나므로, 두 데이터를 함께 비교하며 해석할 수 있습니다.
                        </p>
                        <div className="csi-legend" aria-label="CSI amplitude color legend">
                            <span>낮은 진폭</span>
                            <div className="legend-bar" />
                            <span>높은 진폭</span>
                        </div>
                        <br />
                        <p>
                            영상에서 움직임이 많이 감지될수록 Wi-Fi 신호에도 더 큰 변화가 발생하며,
                            CSI 시각화 화면에서는 색 패턴이 흔들리거나 급격히 바뀌는 형태로 나타납니다.
                        </p>
                        <p>
                            현재 화면은 WiMANS 샘플 데이터를 기반으로 구성되어 있으며, 이후 PERSEPHONE 자체 실험이 진행되면
                            실제 수집 데이터에 맞춰 영상과 CSI 시각화 결과를 업데이트할 예정입니다.
                        </p>
                    </article>
                </section>
            </section>
        </main>
    );
}

export default Data;
