// page-controller.js
document.addEventListener("DOMContentLoaded", function() {
    // Draggable 플러그인 등록
    gsap.registerPlugin(Draggable);

    // 드래그 설정
    const targetItems = document.querySelectorAll(".draggable-item");

    if (targetItems.length > 0) {
        // 등장 애니메이션
        gsap.from(targetItems, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            ease: "power4.out"
        });

        targetItems.forEach((el) => {
            // 둥둥 떠다니는 효과
            const floating = gsap.to(el, {
                duration: "random(2, 4)",
                y: "+=20",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            Draggable.create(el, {
                type: "x,y",
                edgeResistance: 0.65,
                onPress: function() {
                    console.log("🎯 누름!");
                    floating.pause();
                    gsap.to(this.target, { scale: 1.1, duration: 0.2 });
                },
                onRelease: function() {
                    console.log("👐 뗌!");
                    // floating.play();
                    gsap.to(this.target, { scale: 1, duration: 0.2 });
                },
                onDrag: function() {
                    floating.pause();
                }
            });
        });
    } else {
        console.warn("⚠️ .draggable-item이 HTML에 없습니다.");
    }

    // header 햄버거 버튼
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('mobile-menu')
    const iconOpen = document.getElementById('icon-open')
    const iconClose = document.getElementById('icon-close')

    let isOpen = false

    gsap.set(menu, { y: -10, opacity: 0 })

    // 메뉴 닫기 함수
    function closeMenu() {
        // 메뉴 닫기
        gsap.to(menu, {
            y: -10,
            opacity: 0,
            duration: 0.25,
            ease: 'power2.in',
            onComplete: () => menu.classList.add('pointer-events-none', 'invisible')
        })

        // 아이콘 교체
        gsap.to(iconClose, { opacity: 0, rotate: 90, duration: 0.2, onComplete: () => {
            iconClose.classList.add('hidden')
            iconOpen.classList.remove('hidden')
            gsap.fromTo(iconOpen, { opacity: 0, rotate: -90 }, { opacity: 1, rotate: 0, duration: 0.2 })
        }})

        isOpen = false
    }

    btn.addEventListener('click', () => {
        isOpen = !isOpen

        if (isOpen) {
            // 메뉴 열기
            menu.classList.remove('pointer-events-none', 'invisible')
            gsap.to(menu, {
                y: 0,
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
            // 아이콘 교체
            gsap.to(iconOpen, { opacity: 0, rotate: 90, duration: 0.2, onComplete: () => {
                iconOpen.classList.add('hidden')
                iconClose.classList.remove('hidden')
                gsap.fromTo(iconClose, { opacity: 0, rotate: -90 }, { opacity: 1, rotate: 0, duration: 0.2 })
            }})
        } else {
            closeMenu()
        }
    })

    // nav 링크 클릭 시 메뉴 닫기
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => closeMenu())
    })

    // 메뉴 스크롤 이벤트
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()

            const target = document.querySelector(anchor.getAttribute('href'))
            if (!target) return

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: target, offsetY: 56 },
                ease: 'power2.inOut'
            })
        })
    })

    // 로고 스크롤 이벤트
    document.querySelector('a[href="/"]').addEventListener('click', (e) => {
        e.preventDefault()

        gsap.to(window, {
            duration: 0.8,
            scrollTo: { y: 0 },
            ease: 'power2.inOut'
        })
    })

    // 리스트 호버 이벤트
    document.querySelectorAll(".grid-li li").forEach(li => {
        const overlay = li.querySelector(".overlay");

        // 초기 상태: 숨김
        gsap.set(overlay, { autoAlpha: 0 });

        li.addEventListener("mouseenter", () => {
            gsap.to(overlay, { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
        });

        li.addEventListener("mouseleave", () => {
            gsap.to(overlay, { autoAlpha: 0, duration: 0.3, ease: "power2.out" });
        });
    });
});