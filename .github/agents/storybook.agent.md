---
name: "storybook-agent"
description: "Storybook coding agent for the project."
---

# 基本

- **本番環境で利用されるコンポーネントには必ずStoryファイルを作成する**
- **定義するStoryは必要最低限に留める（過剰なStoryは避ける）**
- **あなたがStorybookを立ち上げて動作確認する必要はありません**

# Storyファイルの配置

- コンポーネントファイルと同じディレクトリに配置する（コロケーション）
- ファイル名は `<コンポーネント名>.stories.tsx` とする

```
some-component/
 ├ some-component.tsx
 ├ some-component.stories.tsx
```

# Storyファイルの記法

## Storyタイトル

- 識別子をつける
  - features/line/components/line-card/line-card.stories.tsx → `Line/LineCard`
  - features/user/components/user-card/user-card.stories.tsx → `User/UserCard`
  - components/ui/button/button.stories.tsx → `UI/Button`

## CSF 3.0に従う

```tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import { Button } from "./button"

export default {
  title: "Sample/Button",
  component: Button,
} satisfies Meta<typeof Button>

type StoryType = StoryObj<typeof Button> & {
  args: React.ComponentProps<typeof Button>
}

export const Default: StoryType = {
  args: {
    label: "Click me",
  },
}
```

## Storyの種類

### Default Story

- argsを指定してControlsで操作可能とする基本状態
  - 対象コンポーネントが複数存在する場合、適切にrender関数を使って表現する

例:

```tsx
export const Default = {
  render: ({ triggerLabel, contentLabel }: { triggerLabel: string; contentLabel: string }) => (
    <MenuContainer className="w-60">
      <MenuList>
        <Menu>
          <MenuTrigger>
            <MenuTriggerItem label={triggerLabel} trailingIcon="ArrowRightIcon" />
          </MenuTrigger>
          <MenuContent>
            <MenuItem
              label={contentLabel}
              onSelect={() => {
                alert(`${contentLabel} Clicked!!`)
              }}
            />
          </MenuContent>
        </Menu>
      </MenuList>
    </MenuContainer>
  ),
  args: {
    triggerLabel: "メニュー1",
    contentLabel: "コンテンツA",
  },
}
```

### Variation Story

- コンポーネントの異なる状態を表現するStory
- 状態の観点ごとにStoryを分ける
  - サイズ: small, medium, large など
  - バリエーション: primary, secondary, tertiary など
  - 状態: disabled, active, hover など (`pseudo-hover`クラスを使ってホバー状態を表現することも可能)
- 一つのStoryにはその観点で取りうる全てのバリエーションを含める

```tsx
export const Sizes: StoryObj<typeof IconButton> = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <IconButton icon="addIcon" size="sm" />
        <span className="text-xs">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon="addIcon" size="md" />
        <span className="text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <IconButton icon="addIcon" size="lg" />
        <span className="text-xs">Large</span>
      </div>
    </div>
  ),
}
```

### Condition Story

- 特定の条件下でのコンポーネントの振る舞いを示すStory
  - ローディング状態、エラーステート、空データなど (Loading, Error, Emptyなど)
  - タイトルやラベルの有無など (With/Without 系)

```tsx
export const WithIcon: StoryObj<typeof Button> = {
  args: {
    label: "Icon付きボタン",
    icon: "checkIcon",
  },
}
```
