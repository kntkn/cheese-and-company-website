# 推奨コマンド

## 開発・テスト
```bash
# ローカル開発サーバー起動
python3 -m http.server 8000
# アクセス: http://localhost:8000

# ブラウザでの動作確認
open http://localhost:8000
```

## デプロイ
```bash
# GitHub Pagesへの自動デプロイ
git add .
git commit -m "Update: [変更内容]"
git push origin main

# 公開URL確認
# https://kntkn.github.io/cheese-and-company-website/
```

## カスタムドメイン（オプション）
```bash
# CNAMEファイル作成
echo "your-domain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

## 品質チェック
```bash
# HTML構文チェック
# https://validator.w3.org/

# PageSpeed Insights
# https://pagespeed.web.dev/

# アクセシビリティチェック
# WAVE: https://wave.webaim.org/
```

## macOS特有のコマンド
```bash
# ファイル検索
find . -name "*.html" -o -name "*.css" -o -name "*.js"

# ディレクトリサイズ確認
du -sh *

# ファイル権限確認
ls -la

# Spotlight検索の除外
touch .metadata_never_index
```