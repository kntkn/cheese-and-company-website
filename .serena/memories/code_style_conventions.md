# コードスタイル・規約

## HTML
- セマンティックHTML構造を重視
- アクセシビリティ対応（WCAG準拠）
- 構造化データ（JSON-LD）の適切な使用

## CSS
- **BEM記法**に近い命名規則
- **カスタムプロパティ（CSS変数）**でテーマ管理
- **Mobile-first**アプローチ
- パフォーマンス重視（Critical CSS、遅延読み込み）

### 命名規則例
```css
/* セクション */
.hero, .features, .pricing, .testimonials

/* コンポーネント */
.card, .button, .form, .accordion

/* 状態 */
.is-active, .is-hidden, .is-loading
```

## JavaScript
- **ES6+**構文使用
- **関数型プログラミング**アプローチ
- **Intersection Observer API**でパフォーマンス最適化
- **デバウンス・スロットル**処理の適用

### 主要パターン
```javascript
// 初期化関数
function initComponentName() { /* ... */ }

// イベントハンドラー
function handleEventName(event) { /* ... */ }

// ユーティリティ
function debounce(func, wait) { /* ... */ }
function throttle(func, limit) { /* ... */ }
```

## ファイル分離原則
- **main.css**: デザインシステム・基本スタイル
- **responsive.css**: レスポンシブ対応
- **animations.css**: アニメーション・インタラクション
- **main.js**: 全体の初期化・ユーティリティ