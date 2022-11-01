import React from "react";

function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">해파리 사이트</h3>
        <p className="desc">
          해파리들이 얼마나 아름다운지 알리는 사이트
          <a href="/" title="해파리 보러가기">
            어떠신가요?
          </a>
        </p>
        <span className="small">배너 유형 01</span>
      </div>
    </section>
  );
}

export default Banner;
