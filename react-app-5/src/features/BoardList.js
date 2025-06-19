import React, { useContext, useEffect, useState } from 'react'
import { CustomCard, CustomContainer } from '../components/Styles'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Context } from '..';

// useNavigate: 다른 페이지로 이동하는 기능

// 가짜 데이터를 DB에 있는 데이터로 변경
// const data = [
//   { no:1, title:'1번', content:'1번입니다', writer:'둘리', regDate:'2024-11-08', modDate:'2024-11-08' },
//   { no:2, title:'2번', content:'2번입니다', writer:'또치', regDate:'2024-11-09', modDate:'2024-11-09' },
//   { no:3, title:'3번', content:'3번입니다', writer:'도우너', regDate:'2024-11-10', modDate:'2024-11-10' }
// ];

const BoardList = () => {

  // navigate함수 생성
  const navigate = useNavigate();
  let [data, setDate] = useState(null);
  const { host } = useContext(Context);

  
  // await는 async 함수 안에서만 가능 (둘이 짝궁이라 붙어있어야함)
  // api를 호출하는 함수
  // 메소드 종류
  // axios ajax fetch와 같이 api를 호출하는 함수는 비동기 함수
  // 비동기 함수를 사용할떄는 await async 키워드를 함께 사용
  const apiCall = async () => {

    // 나중에 배포를 위해 api를 바뀜 
    const respone = await axios.get(`${host}/board/list`, {
      headers: {
        Authorization : 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTAzMTc4MTUsImV4cCI6MTc1MjkwOTgxNSwic3ViIjoiYWRtaW4ifQ._cSrDU5CSnM6yHbugpAnHrmYrN-Nt407mYKRJlSIseQ'
      }
    });

    setDate(respone.data);
  }

  // API 호출 > 상태 업데이트 > 컴포넌트 리렌더링 > 다시 API 호출.. 무한루프 됨
//  apiCall();

// 이것을 해결하기위해 useEffect를 사용한다
  // api는 직접 호출하지는 않지만 빈 배열은 컴포넌트가 처음 로드될 때 한번만 실행하겠다는 의미이다.
  useEffect( () => {
    apiCall();
  }, [] );




  return (
    <CustomCard>
      <CustomContainer>
        <Row>
            <Col sm={8}>
              <h3>게시물 리스트</h3>
            </Col>
            <Col sm={4}>
              <Button variant="secondary" onClick={ ()=>{
                // 게시물등록 페이지로 이동
                navigate('/board/register');
              } } >게시물 등록</Button>
            </Col>
        </Row>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr> 
          </thead>
          <tbody>
            {
              // and문은 둘 중 하나만 있어도 not이 반환되어서 그냥 아무것도 안나옴
              data !== null && data.map( (board)=>{
                // jsx를 동적으로 생성할때는 key값을 삽입해야함
                return (
                      <tr key={board.no}>
                        {/* 상세화면 URL 예시: /board/read/1 */}
                        <td><Link to={ '/board/read/'+board.no  }>{board.no}</Link></td>
                        <td>{board.title}</td>
                        <td>{board.writer}</td>
                        <td>{board.regDate}</td>
                      </tr>
                );
              })
            }
          </tbody>
        </Table>

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList