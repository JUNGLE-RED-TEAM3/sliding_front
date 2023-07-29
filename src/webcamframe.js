import React,{ usestate,useCallback, useEffect, useRef } from 'react';
import './webcamframe.css';

const WebcamFrame = () => {
    return (
    <div> 
        <div className='Header'>
            <h1>SLIDING</h1>
            <div className='NavBar'>
                <div className='NavTimer'>타이머</div>
                <div className='NavScore1'>점수1</div>
                <div className='NavScore2'>점수2</div>
            </div>
        </div>
        <div className='MainBox'>
            <div className='WebcamBoxForPuzzle'>퍼즐</div>
            <div className='WebcamBoxForDalgona'>달고나</div>
        </div>
    </div>
    );
};

export default WebcamFrame;
