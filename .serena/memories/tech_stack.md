# 技術スタック

## フロントエンド
- **HTML/CSS/JavaScript**: 純粋な静的サイト（フレームワーク不使用）
- **レスポンシブデザイン**: Mobile-first approach
- **アニメーション**: CSS + Intersection Observer API

## ファイル構成
```
├── index.html          # メインLP
├── privacy.html        # プライバシーポリシー
├── contact.html        # 会社情報・特商法
├── css/
│   ├── main.css        # 基本スタイル
│   ├── responsive.css  # レスポンシブ
│   ├── animations.css  # アニメーション
│   ├── future-*.css    # その他バリエーション
│   └── professional-*.css # プロフェッショナル版
├── js/
│   ├── main.js         # メインJavaScript
│   ├── professional.js # プロフェッショナル版
│   └── future-magic.js # 将来版
└── images/             # 画像ファイル
```

## SEO・パフォーマンス
- 構造化データ（JSON-LD）
- OGP・Twitter Card対応
- Core Web Vitals最適化
- Google Analytics連携