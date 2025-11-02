"use client"

import { useState } from 'react'
import { UploadButton } from './buttons/UploadButton'
import Waveform from './Waveform';

export function AudioUpload() {
  const [uploading, setUploading] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return

    try {
        console.log('Uploading file...');
      setUploading(true)
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('file', file)

    //   const apiEndpoint = 'https://61dbd520w3.execute-api.eu-west-1.amazonaws.com';
      const endpoint = 'https://61dbd520w3.execute-api.eu-west-1.amazonaws.com/dev/api/upload'
      const fetchParams: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: formData
      }
      console.log('Sending request to:', endpoint);
      console.log('Request parameters:', fetchParams);
      const response = await fetch(endpoint, fetchParams)

      if (!response.ok) {
        throw new Error('Upload failed')
      }

      const data = await response.json()
      setAudioUrl(data.url)
    } catch (error) {
      console.error('Error uploading file:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <input
        type="file"
        id="audio-upload"
        accept="audio/*"
        className="justify-center mb-4"
        onChange={handleUpload}
      />
      <label htmlFor="audio-upload">
        <UploadButton />
      </label>
      
      {audioUrl && (
        <div className="mt-4">
          <Waveform audio={audioUrl} />
        </div>
      )}
    </div>
  )
}