'use client'
import React, { useEffect, useState } from 'react'

// 이전에 만든 api를 연동하여
// 가져온 데이터를 화면에 출력

const Fetch = () => {

    const [data, setData] = useState({name:'게스트'});

    // api를 호출할 때 사용하는 js함수
    // .env에서 불러오기

    // 컴포넌트가 생성될 때 코드를 실행하는 도구
    // 타미어, api같은 비동기 함수를 호출할 때 사용
    // 두번째 인자 : 실행할 함수
    // 두번째 인자 : 실행 주기

    useEffect( () => {
        // json() 함수를 사용하여 메세지 안헤 있는 바디데이터만 추출
        // 두 번째 then에서는 앞에서 전달한 바디데이터를 출력
        fetch(process.env.NEXT_PUBLIC_API_URL+'/api/hello').then(result => result.json())
        .then(json => {
            setData(json);
            console.log(json);
        })
    }, [])


    // fetch 컴포넌트 실행 -> api 호출 -> state.update 
    // -> 다시 fetch를 불러옴 -> 다시 업데이트 (무한루프 됨)

  return (
    <>
        <h1>/app/sub/fetch/page.js</h1>
        <a href='/'>/app/page.js</a>
        <span>{data.name}</span>
    </>
  )
}

export default Fetch