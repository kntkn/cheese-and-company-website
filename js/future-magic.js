// Future Magic JavaScript - 魔法のようなインタラクティブエフェクト
// Harry Potter 動く新聞のような未来的インタラクション

class FutureMagic {
    constructor() {
        this.isLoaded = false;
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.mousePos = { x: 0, y: 0 };
        this.init();
    }

    init() {
        this.waitForDOM(() => {
            this.setupCanvas();
            this.initParticles();
            this.initAnimations();
            this.initInteractions();
            this.startAnimationLoop();
            this.isLoaded = true;
        });
    }

    waitForDOM(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }

    // パーティクルフィールドのセットアップ
    setupCanvas() {
        // 既存のcanvasがあるかチェック
        this.canvas = document.getElementById('particles-canvas');
        if (!this.canvas) {
            this.canvas = document.createElement('canvas');
            this.canvas.id = 'particles-canvas';
            this.canvas.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 1;
            `;
            document.body.appendChild(this.canvas);
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    // 控えめなパーティクルシステム初期化
    initParticles() {
        const particleCount = Math.min(50, window.innerWidth * 0.05); // 大幅に削減
        this.particles = [];

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1,
                color: this.getRandomMagicColor(),
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    getRandomMagicColor() {
        const colors = ['#7209b7', '#00d4ff', '#ff6b35', '#7209b7', '#00d4ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // アニメーション初期化
    initAnimations() {
        // テキストカスケード効果
        this.initTextCascade();
        
        // データストリーム効果
        this.initDataStreams();
        
        // クリスタルボール効果
        this.initCrystalBalls();
        
        // 革命カード hover 効果
        this.initRevolutionCards();
        
        // AI プロセス可視化
        this.initAIProcessVisualization();
        
        // ナビゲーション魔法効果
        this.initNavigationMagic();
    }

    initTextCascade() {
        const cascadeElements = document.querySelectorAll('.text-cascade, .text-cascade-delay, .text-cascade-delay-2');
        
        cascadeElements.forEach((element, index) => {
            // 初期状態を設定
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                
                // 魔法的グリッチ効果
                this.addGlitchEffect(element);
            }, index * 300 + 500);
        });
    }

    addGlitchEffect(element) {
        const magicWords = element.querySelectorAll('.magic-word, .highlight-word, .future-word');
        
        magicWords.forEach(word => {
            word.addEventListener('mouseenter', () => {
                word.classList.add('glitch-text');
                setTimeout(() => {
                    word.classList.remove('glitch-text');
                }, 800);
            });
        });
    }

    initDataStreams() {
        const streamsContainer = document.querySelector('.data-streams');
        if (!streamsContainer) return;

        for (let i = 0; i < 8; i++) {
            const stream = document.createElement('div');
            stream.className = 'data-stream';
            stream.style.cssText = `
                position: absolute;
                width: 2px;
                height: 100px;
                background: linear-gradient(to bottom, transparent, #00d4ff, transparent);
                left: ${Math.random() * 100}%;
                animation: dataFlow ${3 + Math.random() * 4}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            streamsContainer.appendChild(stream);
        }
    }

    initCrystalBalls() {
        const crystalBalls = document.querySelectorAll('.crystal-ball');
        
        crystalBalls.forEach((ball, index) => {
            // 浮遊アニメーション
            ball.style.animationDelay = `${index * 0.5}s`;
            
            // ホバー時のインタラクティブ効果
            ball.addEventListener('mouseenter', () => {
                this.createMagicBurst(ball);
            });
        });
    }

    createMagicBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 12; i++) {
            const burst = document.createElement('div');
            burst.className = 'magic-burst';
            burst.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: radial-gradient(circle, #7209b7, #00d4ff);
                border-radius: 50%;
                left: ${centerX}px;
                top: ${centerY}px;
                pointer-events: none;
                z-index: 1000;
                animation: burstOut 0.8s ease-out forwards;
                transform-origin: center;
                --angle: ${i * 30}deg;
            `;
            document.body.appendChild(burst);
            
            setTimeout(() => burst.remove(), 800);
        }
    }

    initRevolutionCards() {
        const cards = document.querySelectorAll('.revolution-card');
        
        cards.forEach((card, index) => {
            // エントランスアニメーション
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px) rotateX(15deg)';
            
            setTimeout(() => {
                card.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) rotateX(0)';
            }, index * 200 + 1000);
            
            // ホバー効果
            card.addEventListener('mouseenter', () => {
                this.activateCardMagic(card);
            });
            
            card.addEventListener('mouseleave', () => {
                this.deactivateCardMagic(card);
            });
        });
    }

    activateCardMagic(card) {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 20px 40px rgba(114, 9, 183, 0.3), 0 0 30px rgba(0, 212, 255, 0.2)';
        
        // パーティクル効果
        const particles = card.querySelectorAll('.card-particle');
        particles.forEach(particle => {
            particle.style.opacity = '1';
        });
    }

    deactivateCardMagic(card) {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 10px 20px rgba(114, 9, 183, 0.1)';
        
        const particles = card.querySelectorAll('.card-particle');
        particles.forEach(particle => {
            particle.style.opacity = '0';
        });
    }

    initAIProcessVisualization() {
        const brainScan = document.querySelector('.brain-scan');
        const creationChamber = document.querySelector('.creation-chamber');
        const portal = document.querySelector('.portal');
        
        if (brainScan) {
            this.animateBrainScan(brainScan);
        }
        
        if (creationChamber) {
            this.animateCreationChamber(creationChamber);
        }
        
        if (portal) {
            this.animatePortal(portal);
        }
    }

    animateBrainScan(element) {
        // スキャンライン効果
        const scanLine = document.createElement('div');
        scanLine.className = 'scan-line';
        scanLine.style.cssText = `
            position: absolute;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00d4ff, transparent);
            top: 0;
            left: 0;
            animation: scanningLine 3s ease-in-out infinite;
        `;
        element.appendChild(scanLine);
    }

    animateCreationChamber(element) {
        // エネルギー波効果
        for (let i = 0; i < 3; i++) {
            const energyWave = document.createElement('div');
            energyWave.className = 'energy-wave';
            energyWave.style.cssText = `
                position: absolute;
                width: 80%;
                height: 80%;
                border: 2px solid rgba(114, 9, 183, 0.3);
                border-radius: 50%;
                top: 10%;
                left: 10%;
                animation: energyPulse ${2 + i * 0.5}s ease-in-out infinite;
                animation-delay: ${i * 0.3}s;
            `;
            element.appendChild(energyWave);
        }
    }

    animatePortal(element) {
        // スパイラル効果
        const spiral = document.createElement('div');
        spiral.className = 'portal-spiral';
        spiral.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: conic-gradient(from 0deg, transparent, #7209b7, transparent);
            border-radius: 50%;
            animation: spiralRotation 4s linear infinite;
        `;
        element.appendChild(spiral);
    }

    initNavigationMagic() {
        const navItems = document.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.createNavMagic(item);
            });
        });
    }

    createNavMagic(navItem) {
        const rect = navItem.getBoundingClientRect();
        
        // 魔法のトレイル効果
        for (let i = 0; i < 5; i++) {
            const trail = document.createElement('div');
            trail.className = 'nav-magic-trail';
            trail.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: radial-gradient(circle, #7209b7, transparent);
                border-radius: 50%;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                pointer-events: none;
                z-index: 1000;
                animation: magicTrail 1s ease-out forwards;
            `;
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 1000);
        }
    }

    // インタラクション初期化
    initInteractions() {
        // マウス追跡
        document.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
        });
        
        // スクロール効果
        this.initScrollEffects();
        
        // フォーム魔法効果
        this.initFormMagic();
    }

    initScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('magic-reveal');
                }
            });
        }, observerOptions);
        
        // アニメーション対象要素を監視
        const animateElements = document.querySelectorAll('.revolution-card, .crystal-ball, .benefit-satellite');
        animateElements.forEach(el => observer.observe(el));
    }

    initFormMagic() {
        const formInputs = document.querySelectorAll('.magic-input');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                this.activateInputMagic(input);
            });
            
            input.addEventListener('blur', () => {
                this.deactivateInputMagic(input);
            });
        });
        
        const magicButtons = document.querySelectorAll('.magic-button');
        magicButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                this.createButtonMagic(e.target);
            });
        });
    }

    activateInputMagic(input) {
        const rect = input.getBoundingClientRect();
        input.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.5)';
        input.style.borderColor = '#00d4ff';
        
        // 入力フィールド周りにパーティクル効果
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: #00d4ff;
                border-radius: 50%;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + rect.height + 5}px;
                pointer-events: none;
                z-index: 1000;
                animation: inputMagic 1.5s ease-out forwards;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1500);
        }
    }

    deactivateInputMagic(input) {
        input.style.boxShadow = '0 0 10px rgba(114, 9, 183, 0.2)';
        input.style.borderColor = 'rgba(114, 9, 183, 0.3)';
    }

    createButtonMagic(button) {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // リップル効果
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, rgba(114, 9, 183, 0.6), transparent);
            border-radius: 50%;
            left: ${centerX - 5}px;
            top: ${centerY - 5}px;
            pointer-events: none;
            z-index: 1000;
            animation: buttonRipple 0.6s ease-out forwards;
        `;
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }

    // メインアニメーションループ
    startAnimationLoop() {
        this.animateParticles();
        requestAnimationFrame(() => this.startAnimationLoop());
    }

    animateParticles() {
        if (!this.ctx) return;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // パーティクルの位置更新
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // パルス効果
            particle.pulse += 0.02;
            const pulseFactor = Math.sin(particle.pulse) * 0.5 + 0.5;
            
            // 画面端での反射
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            // マウスとの相互作用
            const dx = this.mousePos.x - particle.x;
            const dy = this.mousePos.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += (dx / distance) * force * 0.01;
                particle.vy += (dy / distance) * force * 0.01;
            }
            
            // パーティクルを描画
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity * pulseFactor;
            this.ctx.fillStyle = particle.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size * (0.5 + pulseFactor), 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();
            
            // 速度の減衰
            particle.vx *= 0.995;
            particle.vy *= 0.995;
        });
    }
}

// 追加のCSS アニメーション (JavaScript経由で注入)
const additionalStyles = `
@keyframes dataFlow {
    0% { transform: translateY(-100px); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}

@keyframes burstOut {
    0% { 
        transform: scale(0) rotate(var(--angle));
        opacity: 1;
    }
    100% { 
        transform: scale(4) rotate(calc(var(--angle) + 180deg)) translateX(50px);
        opacity: 0;
    }
}

@keyframes scanningLine {
    0%, 100% { 
        top: 0;
        opacity: 0;
    }
    50% { 
        top: 50%;
        opacity: 1;
    }
    100% { 
        top: 100%;
        opacity: 0;
    }
}

@keyframes energyPulse {
    0% {
        transform: scale(0.8);
        opacity: 0.8;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.4;
    }
    100% {
        transform: scale(1.3);
        opacity: 0;
    }
}

@keyframes spiralRotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes magicTrail {
    0% { 
        transform: scale(0);
        opacity: 1;
    }
    50% { 
        transform: scale(1);
        opacity: 0.8;
    }
    100% { 
        transform: scale(0) translateY(-20px);
        opacity: 0;
    }
}

@keyframes inputMagic {
    0% { 
        transform: translateY(0);
        opacity: 1;
    }
    100% { 
        transform: translateY(-30px);
        opacity: 0;
    }
}

@keyframes buttonRipple {
    0% { 
        transform: scale(1);
        opacity: 0.6;
    }
    100% { 
        transform: scale(20);
        opacity: 0;
    }
}

.magic-reveal {
    animation: magicReveal 1s ease-out forwards;
}

@keyframes magicReveal {
    0% {
        opacity: 0;
        transform: translateY(50px) rotateX(15deg);
    }
    100% {
        opacity: 1;
        transform: translateY(0) rotateX(0);
    }
}
`;

// スタイルを注入
function injectStyles() {
    const styleElement = document.createElement('style');
    styleElement.textContent = additionalStyles;
    document.head.appendChild(styleElement);
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    injectStyles();
    window.futureMagic = new FutureMagic();
});

// レスポンシブ対応とパフォーマンス最適化
window.addEventListener('resize', () => {
    if (window.futureMagic && window.futureMagic.isLoaded) {
        // パーティクル数を画面サイズに応じて調整
        const newParticleCount = Math.min(150, window.innerWidth * 0.1);
        if (window.futureMagic.particles.length !== newParticleCount) {
            window.futureMagic.initParticles();
        }
    }
});

// パフォーマンスモニタリング
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`🪄 Future Magic loaded in ${loadTime}ms`);
        }, 0);
    });
}