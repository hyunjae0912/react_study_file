// 해당 api의 surl 주소: /api/1 또는 /api/2 또는 /api/aa


// request: 사용자가 요청을 담은 객체
// response: 응답데이터를 만드는 객체
function handler(req, res){
    console.log(    req.query);
    res.status(200).json({id:req.query.id});   
}

export default handler;