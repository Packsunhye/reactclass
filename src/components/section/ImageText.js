import React from "react";

const imageText = {
  blind: "해파리의 신비한 빛깔",
  title: "jellu fisf color",
  side: "해파리의 신비한 빛깔",
  desc: "빛에 따라 달라지지만, 어떠한 색깔도 잘 어울리는 모습을 보입니다.",
  text01: "노무라입깃해파리",
  text02: "보름달물해파리",
  text03: "사자갈기해파리",
  text04: "스티기오메두사",
  text05: "숲뿌리해파리",
  text06: "범피",
};

const imageTextSide = [
  {
    className: "img1",
    link: "/",
    desc: "대양해파리",
  },
  {
    className: "img2",
    link: "/",
    desc: "커튼원양해파리",
  },
];

const ImageTextInfo = ({ className, link, desc }) => {
  return (
    <div className={`imgText__img ${className}`}>
      <a href={`${link}`}>{desc}</a>
    </div>
  );
};

function ImageText({ attr }) {
  return (
    <section
      id="imgTextType"
      className={`imgText__wrap scroll ${attr[0]} ${attr[1]} ${attr[2]} `}
    >
      <h2 className="blind">{imageText.blind}</h2>
      <div className={`imgText__inner ${attr[3]}`}>
        <div className="imgText__txt">
          <span>{imageText.title}</span>
          <h3>{imageText.side}</h3>
          <p>{imageText.desc}</p>
          <ul>
            <li>
              <a href="/">{imageText.text01}</a>
            </li>
            <li>
              <a href="/">{imageText.text02}</a>
            </li>
            <li>
              <a href="/">{imageText.text03}</a>
            </li>
            <li>
              <a href="/">{imageText.text04}</a>
            </li>
            <li>
              <a href="/">{imageText.text05}</a>
            </li>
            <li>
              <a href="/">{imageText.text06}</a>
            </li>
          </ul>
        </div>
        {imageTextSide.map((info) => (
          <ImageTextInfo
            key={info}
            className={info.className}
            link={info.link}
            desc={info.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageText;
