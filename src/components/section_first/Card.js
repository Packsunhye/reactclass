import React from 'react'

function Card({attr}) {
  return (
    <section id="cardType" className={`card_wrap ${attr[0]} ${attr[1]} ${attr[2]} `}>
        <h2>해파리가 흘러갑니다 - ଳ</h2>
        <p>흔들흔들 , 사람들이 일상에 치이는 것처럼 해파리도 물살에 치여 움직인답니다.</p>
        
        <div className={`card_inner ${attr[3]}`}>
            <article className="card">
                <figure className="card_header">
                    <img src="../assets/img/card_bg01.jpg" alt="고양이가 가만히 있을 때" />
                </figure>
                <div className="card_body">
                    <h3 className="tit">넙적한 해파리</h3>
                    <p className="desc">넙적한 상산이 작은 촉수들과 어울려 바다에서 흔들립니다. 파란색 해파리를 멍하게 바라보다 보면 어느샌가 시간이 엄청 지나가있어요, 그렇지만 빠져들게 되지 않나요?</p>
                    <a href="/" className="btn">
                        더 자세히 보기 
                        <span aria-hidden="true">
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article className="card">
                <figure className="card_header">
                    <img src="../assets/img/card_bg02.jpg" alt="고양이가 자고 있을 때" />
                </figure>
                <div className="card_body">
                    <h3 className="tit">조그마한 해파리</h3>
                    <p className="desc">바쁜듯 열심히 구완을 흩날리고 있지만 사실은 해파리는 흘러가고 있답니다. 하루에 할일이 지나다니는 것 뿐이라니 부러워요 저도 요 조그마한 해파리 처럼 가만히 즐기고 싶다.</p>
                    <a href="/" className="btn">
                        더 자세히 보기
                        <span aria-hidden="true"> 
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
            <article className="card">
                <figure className="card_header">
                    <img src="../assets/img/card_bg03.jpg" alt="고양이 사진이 너무 잘찍혔을 때" />
                </figure>
                <div className="card_body">
                    <h3 className="tit">풍선같은 해파리</h3>
                    <p className="desc">보자마자 풍선같은 생김새에 웃음이 나와요. 후 바람을 부르면 하늘로 올라같 것 같습니다. 사실은 바다가 제 2의 하늘이 아닐까요? 높이 높이 올라가렴 작은 풍선 해파리야</p>
                    <a href="/" className="btn">
                        더 자세히 보기
                        <span aria-hidden="true">
                            <svg width="65" height="8" viewBox="0 0 65 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Card