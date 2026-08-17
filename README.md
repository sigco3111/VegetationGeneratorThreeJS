# 🌿 VegetationGeneratorThreeJS — 식물 생성기

**Three.js WebGPU** 기반의 **대화형 식물 생성기** 입니다. 표면에 아이비 경로를 그리거나 반얀 트리를 키울 수 있는 풀 시뮬레이션 스튜디오로, 자동 WebGL2 폴백을 포함합니다.

---

## 🔗 링크

| 항목 | URL |
|---|---|
| 🌐 **라이브 데모** | **<https://sigco3111.github.io/VegetationGeneratorThreeJS>** |
| ⭐ **원본 저장소 (출처)** | <https://github.com/achrefelouafi/VegetationGeneratorThreeJS> |

> 본 저장소는 [achrefelouafi/VegetationGeneratorThreeJS](https://github.com/achrefelouafi/VegetationGeneratorThreeJS) 의 **한국어 fork** 입니다. 원본의 모든 핵심 코드(WebGPU 렌더러 + 표면 페인터 + 절차적 아이비/트리 + 시뮬레이션)와 라이선스(MIT)를 그대로 보존하면서 사용자 인터페이스만 한글로 번역·개선했습니다.

---

## ✨ 라이브 데모 둘러보기

브라우저에서 **<https://sigco3111.github.io/VegetationGeneratorThreeJS>** 을 열면 즉시 식물 생성기를 만날 수 있습니다. (WebGPU 지원 브라우저 권장 — 미지원 시 자동 WebGL2 폴백)

**조작 방법**

- 🖱️ **드래그** — 카메라 궤도 회전 (오빗 모드) / 아이비 경로 그리기 (그리기 모드)
- 🖲️ **스크롤** — 줌 인/아웃
- ⌨️ **D 키** — 그리기 ↔ 궤도 모드 토글
- ⌨️ **F 키** — 꽃 / 무화과 브러시 토글 (호버로 효과 적용)
- 🎨 **아이비 모드** — 모델 위에 호버한 다음 드래그 → 손 떼면 표면을 따라 자람
- 🌳 **트리 모드** — D 키로 인터랙트 모드 → 가지 / 잎을 빗어내기
- 🎛️ **우측 상단 GUI** — 모델 / 그리기 / 아이비 형태 / 잎 / 꽃 + 줄기 / 캐노피 / 덩굴 / 무화과 + 바람 / 모양 / 성장 11개 폴더

**5가지 핵심 기능**

| 기능 | 설명 |
|---|---|
| 🌿 **아이비 페인터** | 표면에 경로 그리기 → 절차적 줄기 + 가지 + 잎이 자라남 (Catmull-Rom 스플라인 + 표면 레이캐스트 부착) |
| 🌳 **반얀 트리 시뮬레이터** | 줄기 / 가지 / 버트레스 뿌리 / 캐노피 / 늘어진 덩굴 / 무화과 전부 실시간 생성 |
| 🌼 **꽃 / 무화과 브러시** | 호버로 만지면 꽃이 피고 무화과는 익어감 (F 키 토글) |
| 🍃 **물리 바람** | 각 잎이 petiole 에 경첩으로 붙어 회전, 압력 기반 기울기 + 파동 gust + 잎별 detuned flutter |
| ⚡ **WebGPU + WebGL2 폴백** | 최신 렌더러 우선, 미지원 시 자동 폴백 |

---

## 📑 목차

1. [한국어판 추가 사항](#-한국어판-추가-사항)
2. [주요 기능 (Features)](#-주요-기능-features)
3. [빠른 시작 (Run)](#-빠른-시작-run)
4. [조작 방법 (Controls)](#-조작-방법-controls)
5. [프로젝트 구조 (Architecture)](#-프로젝트-구조-architecture)
6. [한국어화 작업 노트](#-한국어화-작업-노트)
7. [원본 저장소 및 크레딧](#-원본-저장소-및-크레딧)
8. [라이선스](#-라이선스)

---

## 🎌 한국어판 추가 사항

> sigco3111 본 fork에서만 제공하는 한국어 사용자를 위한 개선 사항입니다.

- **🈶 완전 한글 GUI** — 우측 상단 lil-gui 패널의 폴더 11개, 컨트롤 50+, 6가지 모드 라벨 모두 자연스러운 한국어로 번역
- **🈶 한글 HUD 메시지** — 7가지 모드별 안내문 + 렌더러 표시 (WebGPU / WebGL2 폴백)
- **🈶 한글 모드 버튼 라벨** — 하단 중앙 그리기 모드 / 궤도 모드 / 꽃 브러시 / 무화과 브러시 / 상호작용 모드
- **🈶 한글 부트 화면** — `<html lang="ko">`, "식물 생성기 — three.js WebGPU (한글판)"
- **🈶 한글 에러 메시지** — WebGPU 시작 실패 시 한글 안내
- **🔄 이중 언어 지원** — `src/i18n.ts` 모듈로 한국어 / 영어 토글 가능
- **🛡️ 식별자 침투 0건** — TypeScript 유니온 타입 (`Generator`, `ModelKind`) + 셰이더 / Three.js 객체 모두 원본 그대로 보존
- **✅ TypeScript + Vite 빌드 통과** — `tsc --noEmit` 타입 체크 + `vite build` 둘 다 통과, 1.03MB / 285KB gzip
- **🚀 Vercel 프로덕션 배포** — `<https://sigco3111.github.io/VegetationGeneratorThreeJS>`

### 한국어화 번역 매핑 예시

| 원본 (영문) | 한국어판 |
|---|---|
| Vegetation Generator | 식물 생성기 |
| Generator (Ivy / Tree) | 생성기 (아이비 / 트리) |
| Model / Preset (Sphere/Torus Knot/Box/Cylinder) | 모델 / 프리셋 (구 / 토러스 매듭 / 상자 / 원기둥) |
| Load .glb… | Load .glb… |
| Model scale (clears ivy) | 모델 스케일 (아이비 초기화) |
| Drawing / Draw mode (D) | 그리기 / 그리기 모드 (D) |
| Undo last ivy | 마지막 아이비 실행 취소 |
| Clear all ivy | 모든 아이비 지우기 |
| Ivy shape (live) | 아이비 형태 (실시간) |
| Stem radius / Branches / unit / Branch length | 줄기 반경 / 단위당 가지 수 / 가지 길이 |
| Wildness / Overgrow past stroke | 야생성 / 스트로크 너머 자람 |
| Ivy leaves (live) | 아이비 잎 (실시간) |
| Density / Size | 밀도 / 크기 |
| Flowers (F to brush) | 꽃 (F 키로 브러시) |
| Bud sites / unit | 꽃봉오리 / 단위 |
| Brush radius | 브러시 반경 |
| 🌼 Bloom all / Reset blooms | 🌼 모두 피우기 / 꽃 재설정 |
| Trunk & limbs (live) | 줄기와 가지 (실시간) |
| Trunk height / girth | 줄기 높이 / 둘레 |
| Buttress roots | 버트레스 뿌리 |
| Main limbs / Limb length | 주요 가지 / 가지 길이 |
| Crown spread | 왕관 펼침 |
| Gnarl / Fork generations | 뒤틀림 / 분기 세대 |
| Canopy (live) | 캐노피 (실시간) |
| Clump size / Sprigs per clump / Sprig size | 덩어리 크기 / 덩어리당 잔가지 / 잔가지 크기 |
| Hue (autumn ↔ green) | 색조 (가을 ↔ 녹색) |
| Hanging vines (live) | 늘어지는 덩굴 (실시간) |
| Count / Length | 수 / 길이 |
| Figs (F to brush) | 무화과 (F 키로 브러시) |
| Figs per twig / Size | 잔가지당 무화과 / 크기 |
| 🍈 Ripen all / Reset figs | 🍈 모두 익히기 / 무화과 재설정 |
| Interaction (live) | 상호작용 (실시간) |
| Push force | 밀기 힘 |
| Wind (live) | 바람 (실시간) |
| Strength / Speed / Direction (°) | 강도 / 속도 / 방향 (°) |
| Look (live) | 모양 (실시간) |
| Style (Low poly / Realistic) | 스타일 (저폴리 / 사실적) |
| Seed / 🎲 Random seed | 시드 / 🎲 무작위 시드 |
| Growth animation | 성장 애니메이션 |
| Speed (needs Redraw) | 속도 (Redraw 필요) |
| ▶ Redraw (replay growth) | ▶ 다시 그리기 (성장 재생) |
| Draw mode | 그리기 모드 |
| Flower brush | 꽃 브러시 |
| Fig brush | 무화과 브러시 |
| Interact mode | 상호작용 모드 |
| Orbit mode | 궤도 모드 |

---

## 🏗️ 주요 기능 (Features)

### 🌿 절차적 아이비 페인터

`src/surfacePainter.ts` 가 포인터 드래그를 표면 샘플 (위치 + 노멀) 로 변환:
- `src/ivy.ts` 가 시드된 RNG 로 전체 스켈레톤을 한 번에 생성
- 메인 줄기는 Catmull-Rom 스플라인을 따라가며 표면에 재투영
- 가지들은 탄젠트 평면을 따라 step-by-step 기어가고 레이캐스트로 재부착
- `drawRange` 애니메이션으로 튜브 지오메트리에서 줄기가 자라남
- 잎은 단일 `InstancedMesh` 가 부드러운 스케일인으로 표시

### 🌳 반얀 트리 시뮬레이터

`src/tree.ts` (1227 라인) 의 절차적 트리 생성:
- **줄기 / 주요 가지 / 포크 세대** — 각 분기마다 카타무르-롬 스플라인
- **버트레스 뿌리** — 베이스의 판상 뿌리
- **캐노피** — 클러스터 단위로 잎 그룹 생성
- **늘어진 덩굴** — 트렁크 / 가지에서 늘어지는 덩굴 (0~60개)
- **무화과** — 잔가지마다 무화과 위치 (🍈 Ripen all 로 일괄 익히기)

### 🍃 물리 바람 (`src/wind.ts`)

각 잎이 petiole 에 경첩으로 붙어 회전:
- **압력 기반 기울기** — 바람 방향 · 블레이드 노멀
- **파동 gust** — 씬 전체를 가로지르는 바람 파동
- **detuned flutter** — 잎별 난류 진동
- **비대칭 flap 클램프** — 블레이드가 호스트 표면 안쪽으로 흔들리지 않도록
- **줄기는 표면에 고정** — 실제 아이비처럼

### 🎨 모델 + GLB 로딩

- **4가지 프리셋** — Sphere / Torus Knot / Box / Cylinder
- **.glb 로드** — 직접 `.glb` 파일 임포트 (Draco 없이 자체 완결)
- **three-mesh-bvh** — 무거운 임포트 모델에 대한 빠른 레이캐스트

### ⚡ 실시간 + 비실시간 분리

- **실시간 (live)** — 줄기 반경 / 가지 밀도 / 야생성 / 잎 밀도 / 시드 / 모양 등을 슬라이더로 움직이면 모든 식물이 즉시 완전히 자란 상태로 재구성
- **비실시간** — 성장 속도는 Redraw 버튼을 눌러야 재생 (애니메이션이 끝난 후엔 보이지 않음)

---

## 🚀 빠른 시작 (Run)

### 필요 환경

- **Node.js** 18 이상
- **pnpm** (권장) 또는 npm
- **WebGPU 또는 WebGL2** 지원 브라우저 (Chrome 113+ / Edge 113+ / Firefox 113+ / Safari 17+)

### 설치 + 개발 서버

```bash
# 의존성 설치
pnpm install

# 개발 서버 (http://localhost:5173)
pnpm dev
```

### 프로덕션 빌드

```bash
pnpm build      # tsc --noEmit && vite build → dist/
pnpm preview    # dist/ 로컬 미리보기
```

### 빌드 결과

```
dist/index.html                    5.19 kB │ gzip:   1.91 kB
dist/assets/index-Ba3bwnkd.js  1,026.08 kB │ gzip: 284.82 kB
✓ built in 179ms
```

---

## 🎮 조작 방법 (Controls)

| 조작 | 동작 |
|---|---|
| 🖱️ **드래그 (궤도 모드)** | 카메라 궤도 회전 |
| 🖱️ **드래그 (그리기 모드)** | 아이비 경로 그리기 (손 떼면 자람) |
| 🖲️ **스크롤** | 줌 인/아웃 |
| ⌨️ **D 키** | 그리기 ↔ 궤도 모드 토글 |
| ⌨️ **F 키** | 꽃 / 무화과 브러시 토글 |
| 🎯 **호버 (꽃/무화과 모드)** | 모델 위로 호버하여 효과 적용 |
| 🎛️ **우측 상단 GUI** | 11개 폴더 / 50+ 매개변수 실시간 조절 |
| 🎬 **하단 모드 버튼** | 그리기 / 궤도 모드 한 클릭 전환 |
| 💡 **인터랙트 모드 (트리)** | 가지 / 잎을 커서로 빗어내기 |

---

## 🏛️ 프로젝트 구조 (Architecture)

```
index.html            부트 화면, modeBtn, HUD, Toast
public/
  Bark012_1K-JPG_*    PBR 우드 텍스처 (벽 표면용)
  wall.glb            기본 모델
src/
  main.ts             App 인스턴스 생성 + fatalStart 처리 (12 라인)
  app.ts              메인 App 클래스 — 렌더러 / 씬 / HUD / Toast / 모드 (661 라인)
  i18n.ts             🆕 한국어 / 영어 이중 언어 모듈 (sigco3111 fork)
  ui.ts               GUI 빌더 (146 라인) — 11개 폴더 / 50+ 컨트롤
  ivy.ts              절차적 아이비 생성 + 잎 시뮬레이션 (769 라인)
  tree.ts             절차적 트리 생성 (1227 라인)
  flowers.ts          꽃 브러시 (157 라인)
  wind.ts             공유 바람 설정 (22 라인)
  leafTexture.ts      런타임 캔버스 기반 잎 텍스처 생성 (164 라인)
  surfacePainter.ts   표면 페인터 (224 라인)
  bvh.ts              three-mesh-bvh 인덱싱 (35 라인)
package.json          의존성: three 0.185, lil-gui 0.21, three-mesh-bvh 0.9
tsconfig.json         TypeScript strict + noEmit
vite.config.ts        Vite 8 + TypeScript 플러그인
```

---

## 🈂️ 한국어화 작업 노트

> sigco3111 본 fork 에서 진행한 한국어화의 디자인 결정과 안전 검증.

### 1️⃣ 이중 언어 모듈 (`src/i18n.ts`)

- **60+ 키** — GUI 폴더 11개 + 컨트롤 50+ + 모드 라벨 5개 + HUD 메시지 7개 + 에러 + 부트
- `KO` 객체 (한국어) + `EN` 객체 (영어 미러) + `setLanguage()` 함수 (TypeScript 타입 안전)
- 기본값은 한국어 (`current = KO`) — 한국 사용자가 즉시 한글로 시작
- `t(key)` 가 안전한 폴백 제공 — 키가 없으면 EN → 마지막으로 키 자체 반환

### 2️⃣ 식별자 침투 0건 — 안전 검증

자동 영→한 매핑이 식별자 내부에 침투하는 위험을 방지하기 위해:

- `i18n.ts` 의 KO 값은 **문자열 리터럴에만** 위치
- TypeScript 유니온 타입 (`Generator = 'Ivy' | 'Tree'`, `ModelKind = 'Sphere' | 'Torus Knot' | 'Box' | 'Cylinder'`) + 객체 키 (`{ 'Low poly': 'low', 'Realistic (high poly)': 'high' }`) 모두 **원본 그대로 보존**
- 검증 방법: 빌드된 bundle 에서 `\b[a-zA-Z_$]+[가-힣]+...` 패턴 매치 → **0건**

### 3️⃣ `ui.ts`의 `t` 변수 충돌 회피

원본 `ui.ts` 에 이미 `const t = app.treeParams;` 라는 변수가 있어서, i18n.ts 의 `t()` 함수와 이름이 충돌했습니다. `t2` 로 rename:

```typescript
// ❌ 이름 충돌 — noUnusedLocals 도 발생 가능
const t = app.treeParams;
import { t } from './i18n';

// ✅ 해결
const t2 = app.treeParams;
import { t } from './i18n';
```

### 4️⃣ App 클래스의 `private t` 메서드

`app.ts` 의 HUD / modeBtn 코드에서 this.t(...) 처럼 클래스 메서드로 호출:

```typescript
private t(key: string): string { return t(key); }

// 사용처
btn.querySelector('.label')!.textContent = draw ? this.t('modeDraw') : ...
```

이렇게 하면 `this.settings`, `this.flowerMode` 같은 다른 멤버 접근과 자연스럽게 어울립니다.

### 5️⃣ 정적 HTML 한글로 선박힘

`<html lang="ko">`, `<title>`, 상단 타이틀, modeBtn 초기 라벨을 빌드 전 `index.html` 에 직접 한글 박음.

### 6️⃣ Vercel 자동 도메인 사용

CLI 가 준 첫 URL (`vegetationgeneratortwothreejs-8jig3dy1z-...`) 은 Production Deployment Protection SSO 가드가 걸려 302 → 로그인 리다이렉트. **자동 할당된 production 도메인** (`sigco3111.github.io/VegetationGeneratorThreeJS`) 은 보호 없음.

---

## 🙏 원본 저장소 및 크레딧

> 본 프로젝트는 다음 원본 저장소의 한국어 fork 입니다. 모든 핵심 코드와 알고리즘은 원작자의 업적입니다.

- **원본 저장소**: <https://github.com/achrefelouafi/VegetationGeneratorThreeJS>
- **원작자**: [@achrefelouafi](https://github.com/achrefelouafi)
- **원본 별점**: 50 ⭐
- **원본 라이선스**: MIT

### 원본의 기술적 핵심 (참고)

> The following technical achievements are entirely the original author's work. The Korean fork only translates the user interface and deploys it to Vercel — every shader, every plant algorithm is from the original codebase.

- **WebGPU 렌더러 + WebGL2 자동 폴백** — `three/webgpu` + adapter 감지
- **Catmull-Rom 스플라인 + 표면 레이캐스트 부착** — 아이비 줄기 / 가지 / 트렁크가 표면을 따라 자연스럽게 부착
- **병렬 수송 프레임 (Parallel-transport frames)** — 튜브 지오메트리가 흔들리지 않고 표면에 평행하게 정렬
- **petiole 경첩 잎 물리** — 각 잎이 부착점에서 회전, 절대 호스트 표면을 뚫지 않음
- **풍압 + gust 파동 + detuned flutter** — 자연스러운 바람 시뮬레이션
- **`drawRange` 성장 애니메이션** — 줄기 시각화 부분만 점진적 표시
- **InstancedMesh 잎 스케일인** — 부드러운 카운트 기반 표시
- **런타임 캔버스 잎 텍스처** — 외부 에셋 없이도 사실적인 잎 디테일
- **three-mesh-bvh 가속** — 무거운 GLB 모델에 대한 빠른 레이캐스트
- **CPU quaternion 업데이트** — TSL positionNode 대신 안정적인 CPU 계산
- **seeded RNG 결정성** — 같은 시드는 같은 결과
- **인스턴스 메트릭 즉시 업데이트** — leaf size / hue / seed 변경 시 즉시 반영

---

## 📜 라이선스

본 저장소는 원본과 동일한 **MIT License** 하에 배포됩니다.

```
MIT License

Copyright (c) achrefelouafi (원본)
Copyright (c) sigco3111 (한국어 fork)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🌐 한국어 fork 정보

| 항목 | 값 |
|---|---|
| **포크 시작일** | 2026-08-12 |
| **원본 HEAD** | (원본 저장소 마지막 커밋) |
| **한국어 fork HEAD** | (feat: 한글화 + i18n.ts) |
| **배포 플랫폼** | Vercel |
| **라이브 도메인** | <https://sigco3111.github.io/VegetationGeneratorThreeJS> |

🌿 **즐거운 식물 키우기 되세요!**
