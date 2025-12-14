---
applyTo: "**/*"
name: "typescript-instruction"
description: "TypeScript coding style instructions for the project."
---

# 基本

- **日本語で返答する**
- **変更は必要最低限に留める**
- **他のドキュメントやコードスタイルと一貫性を保つ**
- **コメントは必要に応じて追加するが、過剰なコメントは避ける**
- **eslint-disable や @ts-ignore の使用は避ける**

# TypeScript

- `any` 型の使用は避け、可能な限り具体的な型を使用する
- `as` は極力避け、型ガードや型定義を活用する
- 不要な型注釈は避け、TypeScript の型推論を活用する

# Next.js

- Next.js App Router を使用する
