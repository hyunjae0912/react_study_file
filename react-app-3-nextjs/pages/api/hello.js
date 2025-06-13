// 해당 api 주소는 /api/hello

// 이체 프론트엔드와 백엔드를 연동하기

function handler(req, res){
    res.status(200).json({name:'둘리'});
}

export default handler;