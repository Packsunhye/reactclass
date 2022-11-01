import React from 'react'

function Text({attr}) {
  return (
    <section id="textType" className={`text__wrap ${attr[0]} ${attr[1]} ${attr[2]} `}>
        <span>텍스트 유형 01</span>
        <h2 className="mb70">해파리의 신기한 이야기들</h2>
        <div className={`text__inner ${attr[3]}`}>
            <div className="text t1">
                <h3 className="text__title">말랑해보인다.</h3>
                <p className="text__desc">자주 이야기 하지만, 말랑해보이지 않나요? 돌고래의 놀이감이 되는 이유가 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t2">
                <h3 className="text__title">보는 것 만으로 즐겁다.</h3>
                <p className="text__desc">흔들리는 것 만으로도 마치 마리모를 보는 것과 같이 마음의 평화를 얻을 수 있어요.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t3">
                <h3 className="text__title">온도에 따라 나타난다.</h3>
                <p className="text__desc">보통 따뜻할 때에 나타나지만, 깊은 심해속에서도 살 수 있으니 차가운 물에 등장하는 아이도 있답니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t4">
                <h3 className="text__title">혼자서 증식이 가능하다</h3>
                <p className="text__desc">놀랍게도 갈라진다면 세포분열을 통해 재생하여 증식해 별개의 해파리가 된답니다. 놀랍지 않나요?</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t5">
                <h3 className="text__title">영원히 사는 종이 있다.</h3>
                <p className="text__desc">'작은보호탑 해파리'는 생존에 부적절한 환경이 되면 몸을 뒤집어 세포 분열을 통해 어린 상태로 되돌아간대요</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
            <div className="text t6">
                <h3 className="text__title">스스로 빛을 낼 수 있다.</h3>
                <p className="text__desc">어두운 심해에서 먹이를 유혹하거나, 천적에게 위협을 가하기 위해 빛을 낼 수 있습니다.</p>
                <a className="text_btn" href="/">더보기</a>
            </div>
        </div>
    </section> 
  )
}

export default Text