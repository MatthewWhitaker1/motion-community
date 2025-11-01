"use client";

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';

const Waveform = ({ audio }) => {
    const containerRef = useRef();
    const waveSurferRef = useRef({
        isPlaying: () => false,
    });
    const [ isPlaying, toggleIsPlaying ] = useState(false);

    useEffect(() => {
        console.log('Initializing WaveSurfer with audio:', audio);
        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            responsive: true,
            barWidth: 2,
            barHeight: 10,
            cursorWidth: 0
        });
        
        waveSurfer.load(audio);
        waveSurfer.on('ready', () => {
            console.log('WaveSurfer ready');
            waveSurferRef.current = waveSurfer;
        });

        return () => {
            console.log('Cleaning up WaveSurfer instance');
            waveSurfer.destroy();
        };
    }, [audio]);

    return (
        <WaveSurferWrap>
            <button
                onClick={() => {
                    waveSurferRef.current.playPause();
                    toggleIsPlaying(waveSurferRef.current.isPlaying());
                }}
                type="button"
            >
                {isPlaying ? <FaPauseCircle size="3em" /> : <FaPlayCircle size="3em" />}
            </button>
            <div ref={containerRef} />
        </WaveSurferWrap>
    );
};

Waveform.propTypes = {
    audio: PropTypes.string.isRequired,
};

const WaveSurferWrap = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;
  max-width: 500px; // Add max-width constraint
  width: 100%;      // Make it responsive
  margin: 0 auto;   // Center the container
  gap: 1rem;        // Add space between play button and waveform

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    background-color: white;
  }

  & > div {         // Target the waveform container
    width: 100%;
    min-width: 200px;
  }
`;

export default Waveform;