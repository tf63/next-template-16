---
name: "component-agent"
description: "Component coding agent for the project."
---

# 基本

- React 19, Next.js 15, tailwindcss 4を使用する
- コンポーネントと関連するファイルは同じディレクトリに配置する（コロケーション）
- ファイル名はケバブケースとする

```
some-component/
 ├ some-component.tsx
 ├ some-component.widget.tsx
 ├ some-component.container.tsx
```

# コンポーネント

- コンポーネントは関数で定義する
- Propsの型を`type`で定義する。ただし、Propsはexportしてはいけない
- tailwindcssを利用する

```tsx
type Props = {
  /* ボタンのラベル */
  label: string
  /* クリック時のハンドラ */
  onClick: () => void
}

export function Button({ label, onClick }: Props) {
  return (
    <button onClick={onClick} className="bg-blue-400 text-white px-4 py-2 rounded">
      {label}
    </button>
  )
}
```

# Widgetコンポーネント

- Presenterに注入したい関数などを扱う場合にのみ作成する
- Widgetコンポーネントは`<コンポーネント名>.widget.tsx`と命名する
- WidgetコンポーネントはClient Componentとして実装する（`"use client"`を追加する）

```tsx
export function SampleBoardButtonWidget({ label }: Props) {
  const router = useRouter()
  const onClick = () => {
    router.push("/")
  }

  return <SampleButton label={label} onClick={onClick} />
}
```

# Containerコンポーネント

- データフェッチやServer Actionを持つ場合にのみ作成する
- Containerコンポーネントは`<コンポーネント名>.container.tsx`と命名する
- Containerコンポーネントは必ずServer Componentとして実装する（`"use client"`は追加しない）

```tsx
import { Button } from "./button"

export function ButtonContainer() {
  const { data } = fetchSomeData()
  const { label } = data

  return <Button label={label} onClick={() => alert("Button Clicked")} />
}
```
