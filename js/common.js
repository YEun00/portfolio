document.addEventListener("DOMContentLoaded", function () {
  //===============resize================//
  let resizeTimer;

  window.addEventListener("resize", () => {
    document.body.classList.add("resizing");

    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      document.body.classList.remove("resizing");
    }, 200);
  });

  //===============Lenis================//
  const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  //work addClass
  const workItems = document.querySelectorAll("#work .result");

  workItems.forEach((item) => {
    const imgSwitch = item.querySelector(".img-swich");
    const subTit = item.querySelector(".sub-tit");
    const txts = item.querySelectorAll(".txt");

    imgSwitch.addEventListener("mouseenter", () => {
      subTit.classList.add("on");

      txts.forEach((txt) => {
        txt.classList.add("on");
      });
    });

    imgSwitch.addEventListener("mouseleave", () => {
      subTit.classList.remove("on");

      txts.forEach((txt) => {
        txt.classList.remove("on");
      });
    });
  });

  //===============cursor================//
  // const cursor = document.querySelector(".cursor");

  // let mouseX = 0;
  // let mouseY = 0;

  // let currentX = 0;
  // let currentY = 0;

  // window.addEventListener("mousemove", (e) => {
  //   mouseX = e.clientX;
  //   mouseY = e.clientY;
  // });

  // function animate() {
  //   currentX += (mouseX - currentX) * 0.1;
  //   currentY += (mouseY - currentY) * 0.1;

  //   cursor.style.left = `${currentX}px`;
  //   cursor.style.top = `${currentY}px`;

  //   requestAnimationFrame(animate);
  // }

  // animate();

  //===============cursor intro================//
  const cursor = document.querySelector(".cursor");
  const intro = document.querySelector("#home, #project");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let currentX = mouseX;
  let currentY = mouseY;

  let isInside = false;

  // 초기 숨김
  cursor.style.opacity = "0";

  // 현재 마우스 위치 저장
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const rect = intro.getBoundingClientRect();

    // 마우스가 #home 안에 있는지 체크
    isInside =
      mouseX >= rect.left &&
      mouseX <= rect.right &&
      mouseY >= rect.top &&
      mouseY <= rect.bottom;

    cursor.style.opacity = isInside ? "1" : "0";
  });

  function animate() {
    if (isInside) {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
