---
model: GPT-4.1
name: "component-agent"
description: "コンポーネントを作成するエージェント"
tools: ["read/problems", "read/readFile", "edit/createDirectory", "edit/createFile", "edit/editFiles", "search"]
handoffs:
  - label: Make Story
    agent: storybook-agent
    prompt: Storyを更新してください。存在しなければ新しく作成してください
    send: true
---

# コンポーネントを作成するエージェント

## 基本

- React 19, Next.js 16, tailwindcss 4を使用する
- コンポーネントと関連するファイルは同じディレクトリに配置する（コロケーション）
- ファイル名はケバブケースとする

```
some-component/
 ├ some-component.tsx
 ├ some-component.widget.tsx
 ├ some-component.container.tsx
```

## コンポーネント

- コンポーネントは関数で定義する
- Propsの型を`type`で定義する。ただし、Propsはexportしてはいけない
- tailwindcssを利用し、color, spacing, typographyなどはデザイントークンを使用する

```tsx
type Props = {
  /* ボタンのラベル */
  label: string
  /* クリック時のハンドラ */
  onClick: () => void
}

export function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      {label}
    </button>
  )
}
```

## Containerコンポーネント

- データフェッチやServer Actionを持つ場合にのみ作成する
- Containerコンポーネントは`<コンポーネント名>.container.tsx`と命名する

```tsx
import { Button } from "./button"

export function ButtonContainer() {
  const { data } = fetchSomeData()
  const { label } = data

  return <Button label={label} onClick={() => alert("Button Clicked")} />
}
```
