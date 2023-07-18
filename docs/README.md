# エンジニアリングラダー
ispecのエンジニアのキャリアパスを表すモデル

キャリアレベルは以下のような遷移をする

```mermaid
flowchart TD
    D1[Developer 1] --> D2[Developer 2]
    D2 --> TL1[Tech Lead 1]
    TL1 --> TL2[Tech Lead 2]
    D2 --> EM1[Engineering Manager 1]
    EM1 --> EM2[Engineering Manager 2]
```

# 評価項目

| List       |
|------------|
| Technology |
| System     |
| People     |
| Process    |
| Influence  |

## Technology
技術への知見やスキルセット

| Level | Description                                                                |
|-------|----------------------------------------------------------------------------|
| 1     | 選定された技術をキャッチアップして自ら使えるようになる                     |
| 2     | 1 つ以上の技術領域に詳しく、その領域について率先してキャッチアップをできる |
| 3     | 新しい技術を調査・実証し、チームに導入できる                               |
| 4     | システムの技術スタック全体について深い知識を持っている                     |
| 5     | 社の技術全体について深い知識を持っている                                   |

## System
システムへのオーナーシップレベル

| Level | Description                                                                  |
|-------|------------------------------------------------------------------------------|
| 1     | 既存の設計の上で新機能やバグ修正を行える                                     |
| 2     | システムの技術的負債を削減しながら、中規模から大規模の機能を設計・実装できる |
| 3     | システムが正常に運用されることに対して責任を持つことができる                 |
| 4     | 中長期的な要件見据えたとくてアーキテクチャの改善ができる                     |
| 5     | システムの技術的な優位性をリードし、システムの正常な稼働を維持できる         |

## People
チームとチームメンバーとの関係性

| Level | Description                                                                                                  |
|-------|--------------------------------------------------------------------------------------------------------------|
| 1     | チームのサポートを受けながら、学び改善できる                                                                 |
| 2     | 他のチームメンバーを積極的にサポートできる                                                                   |
| 3     | 他のチームメンバーを指導しキャリアアップに貢献できる                                                         |
| 4     | メンバー個人だけでなく、チーム全体に対して効果的なフィードバックを提供できる                                 |
| 5     | チームメンバーのキャリア、要望、パフォーマンス、エンゲージメントに対してポジティブな影響を与えることができる |

## Process
開発プロセスへの関与度合い

| Level | Description                                                            |
|-------|------------------------------------------------------------------------|
| 1     | チームプロセスに従って開発を進められる                                 |
| 2     | チームのプロセスへの深い理解を持っている                               |
| 3     | チームのプロセスの課題を発見し、改善できる                             |
| 4     | フィードバックからプロセス自体のを改善ができる                         |
| 5     | チームの成熟度に適したプロセスを定義し、俊敏性と規律のバランスをとれる |

## Influence
影響範囲

| Level | Description                                    |
|-------|------------------------------------------------|
| 1     | 関わった機能とそれに関係する人に影響力を持てる |
| 2     | チーム全体に影響を与えられる                   |
| 3     | 複数のチームに今日を与えられる                 |
| 4     | 技術組織全体に影響を与えられる                 |
| 5     | 会社全体に影響を与えられる                     |

# キャリアレベル
## Developer
エンジニアとして実際にコーディングを行うロール。
技術への深い理解が求められる。

### Developer 1 (D1)

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'Developer1',data:[1,1,1,1,1],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                            |
|-----------|-------|--------------------------------------------------------|
| Tech      | 1     | 選定された技術をキャッチアップして自ら使えるようになる |
| System    | 1     | 既存の設計の上で新機能やバグ修正を行える               |
| People    | 1     | チームのサポートを受けながら、学び改善できる           |
| Process   | 1     | チームプロセスに従って開発を進められる                 |
| Influence | 1     | 関わった機能とそれに関係する人に影響力を持てる         |


### Developer 2 (D2)

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'Developer2',data:[2,2,2,3,2],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                                                  |
|-----------|-------|------------------------------------------------------------------------------|
| Tech      | 2     | 1 つ以上の技術領域に詳しく、その領域について率先してキャッチアップをできる   |
| System    | 2     | システムの技術的負債を削減しながら、中規模から大規模の機能を設計・実装できる |
| People    | 2     | 他のチームメンバーを積極的にサポートできる                                   |
| Process   | 3     | チームのプロセスの課題を発見し、改善できる                                   |
| Influence | 2     | チーム全体に影響を与えられる                                                 |


## Tech Lead
システムのオーナーであり、アーキテクチャの決定や技術選定を行うロール。

### Tech Lead 1 (TL1)

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'TechLead1',data:[3,4,4,5,2],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                                                  |
|-----------|-------|------------------------------------------------------------------------------|
| Tech      | 3     | 新しい技術を調査・実証し、チームに導入できる                                 |
| System    | 4     | 中長期的な要件見据えたとくてアーキテクチャの改善ができる                     |
| People    | 4     | メンバー個人だけでなく、チーム全体に対して効果的なフィードバックを提供できる |
| Process   | 5     | チームの成熟度に適したプロセスを定義し、俊敏性と規律のバランスをとれる       |
| Influence | 2     | チーム全体に影響を与えられる                                                 |

### Tech Lead 2 (TL2)

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'TechLead2',data:[4,5,4,5,4],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                                                  |
|-----------|-------|------------------------------------------------------------------------------|
| Tech      | 4     | システムの技術スタック全体について深い知識を持っている                       |
| System    | 5     | システムの技術的な優位性をリードし、システムの正常な稼働を維持できる         |
| People    | 4     | メンバー個人だけでなく、チーム全体に対して効果的なフィードバックを提供できる |
| Process   | 5     | チームの成熟度に適したプロセスを定義し、俊敏性と規律のバランスをとれる       |
| Influence | 4     | 技術組織全体に影響を与えられる                                               |

## Engineering Manager
チームのマネージャーであり、採用やエンジニアの個人のアサインを行うロール。

### Engineering Manager 1

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'EngineeringManager1',data:[3,3,5,3,2],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                                                                                  |
|-----------|-------|--------------------------------------------------------------------------------------------------------------|
| Tech      | 3     | 新しい技術を調査・実証し、チームに導入できる                                                                 |
| System    | 3     | システムが正常に運用されることに対して責任を持つことができる                                                 |
| People    | 5     | チームメンバーのキャリア、要望、パフォーマンス、エンゲージメントに対してポジティブな影響を与えることができる |
| Process   | 3     | チームのプロセスの課題を発見し、改善できる                                                                   |
| Influence | 2     | チーム全体に影響を与えられる                                                                                 |

### Engineering Manager 2

<img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Tech','System','People','Process','Influence'],datasets:[{label:'EngineeringManager2',data:[3,4,5,4,2],borderWidth:1,borderColor:'rgba(75,+192,+192,+1)',backgroundColor:'rgba(75,+192,+192,+0.2)'}]},options:{scale:{ticks:{beginAtZero:true,max:5}}}}&w=500&h=300&bkg=#ffffff&f=png&v=2" >

|           | Level | Description                                                                                                  |
|-----------|-------|--------------------------------------------------------------------------------------------------------------|
| Tech      | 3     | 新しい技術を調査・実証し、チームに導入できる                                                                 |
| System    | 4     | 中長期的な要件見据えたとくてアーキテクチャの改善ができる                                                     |
| People    | 5     | チームメンバーのキャリア、要望、パフォーマンス、エンゲージメントに対してポジティブな影響を与えることができる |
| Process   | 4     | フィードバックからプロセス自体のを改善ができる                                                               |
| Influence | 2     | チーム全体に影響を与えられる                                                                                 |
