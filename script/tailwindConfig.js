tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Pretendard', 'sans-serif'],     // 기본 폰트
                eng: ['Geist', 'sans-serif'],            // 영문 전용
                mono: ['Geist Mono', 'monospace'],       // 코드용
            },
            colors: {
                // '클래스이름': '색상코드'
                'code': '#90a1b9',
                'code-blue': '#4fc1ff', 
                'code-lblue': '#8cd9fe', 
                'code-dblue': '#569cd6',
                'code-green': '#579955',
                'code-lgreen': '#b5cea8',
                'code-pink': '#da70d6',
                'code-yellow': '#ffd700',
                'code-lyellow': '#dcdcaa',
                'code-brown': '#ce9178',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(135deg, transparent 40%, #f3f4f6 10%, #f3f4f6 50%, transparent 50%, transparent 90%, #f3f4f6 60%, #f3f4f6)",
            },
            backgroundSize: {
                'grid-size': '12px 12px',
            },
            gridTemplateColumns: {
                'main-layout': '1fr min(1500px, calc(100% - 70px)) 1fr',
            },
            boxShadow: {
                'inset-ring-white/10': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
                'inset-ring-white/5': 'inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
            },
        }
    },
}