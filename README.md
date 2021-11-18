# どこでも麻雀卓
<div align="center"><a href="https://www.youtube.com/watch?v=FmputuHSra0">
<img src="http://img.youtube.com/vi/FmputuHSra0/0.jpg" alt="デモ動画" title="タイトル"></a>
</div>

## 製品概要
### 背景(製品開発のきっかけ、課題等）

学生の間で麻雀は広く親しまれているゲームです。
コロナ期間中では対面で遊ぶことが困難であり、「雀魂」等のオンライン対戦が可能であるスマホアプリが大流行しました。
コロナが沈静化し、友達と対面で集まる機会が増え、それに伴って対面で友達とスマホアプリを使って対戦するケースが増加しました。

私達はこのようなスマホアプリを用いた対面でのプレイにおいて、一体感が大きく損なわれているという部分に課題があると考えました。

スマホアプリは離れた場所でのオンラインプレイが想定されているため、自分の画面で機能が完結しています。
よってオフラインでせっかく集まっているにも関わらず、プレイヤーは自分のスマホ画面だけを眺めています。


例えばボードゲームやポーカーのように一つの盤面をシェアすることこそがオフラインの醍醐味でありこれによって場に一体感、臨場感が生まれ、それらがプレイヤーの満足感につながっていると私達は考えています。

![image](https://user-images.githubusercontent.com/15964431/139481384-938bc061-1c34-4725-a3af-66dc5812533c.png)


### 製品説明（具体的な製品の説明）
私達のアプリケーションでは，公開情報である河などの盤面をタブレット上で、プレイヤー個人の情報である手牌をスマホ上に表示することで、アプリの手軽さとオフラインの一体感のいいとこ取りを可能とします。麻雀の複雑なルールをそのまま実装できなかったため，簡素化したルールを実装している．

どこでも麻雀卓
http://mahjongtaku.com

### 特長1

#### 1. 手牌画面と盤面画面を分岐しているので、実際の麻雀卓を囲んでいる感覚を味わえる。
#### 2. アナログの麻雀を持ち運ぶのは大変だが，タブレットとスマホは容易に持ち運べる
#### 3. Webアプリなのでインストールの必要がない

### 解決出来ること
オフラインで友達と麻雀をする際に，アナログな麻雀

### 今後の展望
- 現状できていない基本機能の実装
    - 点数計算
    - 次の局への遷移

### 注力したこと（こだわり等）

- よりユーザが気軽に遊べるようにWebベースでの実現にこだわった。
- メンバーの勉強も兼ねてReact HooksやTypeScirptといったモダンな技術を使用している。
- Dockerでバックエンド、フロントエンドを簡単に構築できるようにした。

## 開発技術

### 活用した技術

#### フレームワーク・ライブラリ・モジュール

- フロントエンドアプリケーション
    - React
    - React Hooks
    - Redux Toolkit
    - SCSS
    - Material UI
    - React Hook Form
    - Socket.io
    - TypeScript

- バックエンドアプリケーション
    - Socket.io
    - node.js
    - express
    - [syanten](https://www.npmjs.com/package/syanten?activeTab=readme)

- インフラ
    - Docker/Docker-compose
    - AWS
    - terraform
    - Github Actions

#### デバイス
- タブレット（盤面表示用）
- スマートフォン4つ（手牌表示用）

### 独自技術
- 麻雀の複雑なルールの一部をReactベースで実装した
- 麻雀の複雑なゲーム画面をReactで実装した

#### ハッカソンで開発した独自機能・技術

- [タブレット側のゲーム画面](https://github.com/jphacks/B_2106/tree/main/frontend/src/pages/GameHost)を実装することが特に大変だった
- 特に力を入れた部分をファイルリンク、または commit_id を記載してください。
