'use client'
import { useParams } from 'next/navigation'
import React from 'react'


// 이 파일은 프론트 파일이라는 표시

const id = () => {
    // url 주소에 있는 파라미터 추출
    // /sub/1/sub/2에서 1과2라는 id파라미터로 처리됨

    const params = useParams();
    console.log(params.id);
  return (
    <div>
        <h1>/app/sub/[id]/page.js</h1>
        <a href='/'>/app/apge.js</a>
        <p>paramid : {params.id}</p> 
    </div>
  )
}

export default id