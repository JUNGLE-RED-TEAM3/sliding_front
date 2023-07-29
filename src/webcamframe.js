import React,{ usestate,useCallback, useEffect, useRef } from 'react';
import './webcamframe.css';

const WebcamFrame = () => {
    return (
    <div> 
        <h1>SLIDING</h1>
        <div className='MainBox'>
            <div className='WebcamBoxForPuzzle'></div>
            <div className='WebcamBoxForDalgona'></div>
        </div>
    </div>
    );
};

export default WebcamFrame;
