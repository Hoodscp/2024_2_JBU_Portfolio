import React from 'react'
import Video from 'next-video'
export default function VideoPage() {
  return (
    <div>
      <Video
        src={'/sample.mp4'} // 비디오 파일 경로
        autoPlay
        muted
        loop
      ></Video>
    </div>
  )
}
