import React from "react";

const bannerinfo = {
  blind: "배너 영역",
  title: "해파리 사이트",
  desc: "해파리들이 얼마나 아름다운지 알리는 사이트",
  link: "/",
  linkDesc: "어떠신가요?",
  small: "배너 유형 01",
};

function Banner({ attr }) {
  return (
    <section id="bannerType" className={`banner__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">{bannerinfo.blind}</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerinfo.title}</h3>
        <p className="desc">
          {bannerinfo.desc}
          <a href={`${bannerinfo.link}`} title="해파리 보러가기">
            {bannerinfo.linkDesc}
          </a>
        </p>
        <span className="small">{bannerinfo.small}</span>
      </div>
    </section>
  );
}

export default Banner;
