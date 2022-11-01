import React from "react";

const imageTitle = {
  title: "해파리들이 둥둥 떠다니는 모습",
  desc: "정해진 갈 길 없이 흘러가는 대로 움직이다보면 새로운 만남이 있어요.",
};

const imageText = [
  {
    title: "화려한 모습의 해파리",
    desc: "색감과 그 화려한 치마와 같은 구완들이 바다속에서 자유롭게 있어요, 만지면 돌이킬 수 없을 정도로 아프니 주의합시다.",
    className: "img1",
    btnlink: "/",
    color: "",
    btn: "자세히 보기",
  },
  {
    title: "동그란 모습의 해파리",
    desc: "콕, 찔러보아 젤리처럼 부드럽게 흐물거리는 모습을 보고싶지만 해파리 주변엔 해파리들이 가득있어요 바라보기만 합시다.",
    className: "img2",
    btnlink: "/",
    color: "yellow",
    btn: "자세히 보기",
  },
];

// function Image(props) {
//   return (
//     <section
//       id="imageType"
//       className={`image__wrap scroll ${props.attr[0]} ${props.attr[1]} `}
//     >
//       <h2>해파리들이 둥둥 떠다니는 모습</h2>
//       <p>정해진 갈 길 없이 흘러가는 대로 움직이다보면 새로운 만남이 있어요.</p>
//       <div className={`image__inner ${props.attr[2]} `}>
//         <article className="image img1">
//           <h3 className="image__title">화려한 모습의 해파리</h3>
//           <p className="image__desc">
//             색감과 그 화려한 치마와 같은 구완들이 바다속에서 자유롭게 있어요,
//             <br /> 만지면 돌이킬 수 없을 정도로 아프니 주의합시다.
//           </p>
//           <a className="image__btn" href="/" title="자세히 보기">
//             자세히 보기
//           </a>
//         </article>
//         <article className="image img2">
//           <h3 className="image__title">동그란 모습의 해파리</h3>
//           <p className="image__desc">
//             콕, 찔러보아 젤리처럼 부드럽게 흐물거리는 모습을 보고싶지만 <br />
//             해파리 주변엔 해파리들이 가득있어요 바라보기만 합시다.
//           </p>
//           <a className="image__btn yellow" href="/" title="자세히 보기">
//             자세히 보기
//           </a>
//         </article>
//       </div>
//     </section>
//   );
// }

const ImgeTextinfo = ({ title, desc, className, btn, btnlink, color }) => {
  return (
    <article className={`image ${className}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a
        className={`image__btn ${color}`}
        href={`${btnlink}`}
        title="자세히 보기"
      >
        {btn}
      </a>
    </article>
  );
};

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap scroll ${props.attr[0]} ${props.attr[1]} `}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[2]} `}>
        {imageText.map((info) => (
          <ImgeTextinfo
            key={info}
            title={info.title}
            className={info.className}
            desc={info.desc}
            btnlink={info.btnlink}
            color={info.color}
            btn={info.btn}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
