// src/pages/videos/VideoPlayer.jsx
import React from "react";
import { useParams } from "react-router-dom";

const videoData = {
    video1: {
        title: "Gen-AI BDD & Test Data Generator – Demo",
        url: "https://exavalu.sharepoint.com/sites/ExavaluPractices-QualityEngineering2/_layouts/15/stream.aspx?id=%2Fsites%2FExavaluPractices%2DQualityEngineering2%2FShared%20Documents%2FSolution%20Assets%2FGen%20AI%2FBDD%20and%20Test%20Data%20Generator%20Demo%2Emp4&nav=eyJwbGF5YmFja09wdGlvbnMiOnt9LCJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbE1vZGUiOiJtaXMiLCJyZWZlcnJhbFZpZXciOiJwb3N0cm9sbC1jb3B5bGluayIsInJlZmVycmFsUGxheWJhY2tTZXNzaW9uSWQiOiI5ZWE1MGM0MS1hODUyLTQ2MzItYThlMi02NGMwZDZkMzlkYWUifX0&ct=1752133248994&or=Teams%2DHL&ga=1&LOF=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E46b405bb%2D115a%2D49c8%2Da273%2Da1b054dc641b",
    },
    video2: {
        title: "Gen-AI Defect Pattern Analysis – Demo",
        url: "https://exavalu.sharepoint.com/sites/ExavaluPractices-QualityEngineering2/_layouts/15/stream.aspx?id=%2Fsites%2FExavaluPractices%2DQualityEngineering2%2FShared%20Documents%2FSolution%20Assets%2FGen%20AI%2FDefect%20Pattern%20Analysis%5FV0%2E2%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ec8782042%2Dc5fe%2D4d6c%2D8740%2D3d3979d2075a&ga=1",
    },
    video3: {
        title: "Gen-AI GUnit - Demo",
        url: "https://exavalu.sharepoint.com/sites/Exavalu-KnowledgeRepositoryKREP/_layouts/15/stream.aspx?id=%2Fsites%2FExavalu%2DKnowledgeRepositoryKREP%2FShared%20Documents%2FGeneral%2FGuidewire%2FSoftwares%2FGen%5FAI%5FGUnits%2FRecording%2FGenAi%5FGunit%5FDemo%5Fv02%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E5c3d3121%2D27b1%2D4bb7%2Da0f8%2De2d9f15ce7fb&ga=1",
    },

};

const VideoPlayer = () => {
    const { videoKey } = useParams();
    const video = videoData[videoKey];

    if (!video) return <h1>Video not found</h1>;

    return (
        <div style={{ padding: 20 }}>
            <h1>{video.title}</h1>
            <iframe
                width="800"
                height="450"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
