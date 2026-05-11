const projectData = [
  {
    href: "https://pie-suhee.github.io/portfolio/bcd/",
    img: "./img/thumbnail/bcd.png",
    alt: "bcd 코퍼레이션 썸네일"
  },
  {
    href: "http://pfsb.co.kr/",
    img: "./img/thumbnail/pfsb.png",
    alt: "피플퍼스트 썸네일"
  },
  {
    href: "https://pie-suhee.github.io/portfolio/frisbee/",
    img: "./img/thumbnail/frisbee.png",
    alt: "프리스비 썸네일"
  },
  {
    href: "https://oco-seven.vercel.app/",
    img: "./img/thumbnail/oco.png",
    alt: "oco 썸네일"
  },
  {
    href: "https://2025pj-reactshop.vercel.app/",
    img: "./img/thumbnail/reactshop.png",
    alt: "react shop 썸네일"
  },
  {
    href: "https://pium.vercel.app/member/home",
    img: "./img/thumbnail/pium.png",
    alt: "피움 썸네일"
  }
];

const skillData = [
  {
    href: "https://motion-jet.vercel.app/hoverevent",
    img: "./img/thumbnail/hoverevent.png",
    alt: "호버이벤트 썸네일"
  },
  {
    href: "https://motion-jet.vercel.app/scrollevent2",
    img: "./img/thumbnail/scrollevent2.png",
    alt: "스크롤이벤트 썸네일"
  },
  {
    href: "https://motion-jet.vercel.app/scrollevent",
    img: "./img/thumbnail/scrollevent.png",
    alt: "스크롤이벤트 썸네일"
  },
  {
    href: "https://pie-suhee.github.io/portfolio/function/dragndrop",
    img: "./img/thumbnail/dragndrop.png",
    alt: "드래그앤드롭 썸네일"
  },
  {
    href: "https://pie-suhee.github.io/portfolio/boot/4_calendar&datepicker/",
    img: "./img/thumbnail/datepicker.png",
    alt: "날짜 선택 썸네일"
  },
  {
    href: "https://pie-suhee.github.io/portfolio/boot/3_star-rating/",
    img: "./img/thumbnail/starrating.png",
    alt: "별점 썸네일"
  },
  {
    href: "https://pie-suhee.github.io/portfolio/boot/2_analog-clock/",
    img: "./img/thumbnail/analogclock.png",
    alt: "아날로그 시계 썸네일"
  }
];

const skillList = document.getElementById("skill-list");
const projectList = document.getElementById("project-list");

// 공통 렌더링 함수
function renderList(element, data) {
  element.innerHTML = data.map(item => `
    <li class="relative">
      <img src="${item.img}" alt="${item.alt}">
      <div class="overlay absolute flex justify-center items-center w-full h-full bg-[#030711]/45 top-0 left-0 z-[10]">
        <a href="${item.href}" class="flex justify-center items-center gap-1 p-2 bg-white rounded-3xl" target="_blank">
          <p>사이트 이동</p>
          <p class="pt-[2px]">↗</p>
        </a>
      </div>
    </li>
  `).join("");
}

// 호출
renderList(projectList, projectData);
renderList(skillList, skillData);
