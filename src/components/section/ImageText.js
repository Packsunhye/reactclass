import React from 'react'

function ImageText( {attr}) {
  return (
    <section id="imgTextType" className={`imgText__wrap scroll ${attr[0]} ${attr[1]} ${attr[2]} `}>
        <h2 className="blind">해파리의 신비한 빛깔</h2>
        <div className={`imgText__inner ${attr[3]}`}>
            <div className="imgText__txt">
                <span>jellu fisf color</span>
                <h3> 해파리의 <br />신비한 빛깔 </h3>
                <p> 빛에 따라 달라지지만, 어떠한 색깔도 잘 어울리는 모습을 보입니다.</p>
                <ul>
                    <li><a href="/">노무라입깃해파리</a></li>
                    <li><a href="/">보름달물해파리</a></li>
                    <li><a href="/">사자갈기해파리</a></li>
                    <li><a href="/">스티기오메두사</a></li>
                    <li><a href="/">숲뿌리해파리</a></li>
                    <li><a href="/">범피</a></li>
                </ul>
            </div>
            <div className="imgText__img img1">
                <a href="/">대양해파리</a>
            </div>
            <div className="imgText__img img2">
                <a href="/" className="blue">커튼원양해파리</a>
            </div>
        </div>
    </section> 
  )
}

export default ImageText