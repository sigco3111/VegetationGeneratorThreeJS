// ============================================================================
//  한국어 / English i18n — UI 문자열만 노출, 식별자는 절대 건드리지 않음
// ============================================================================

const KO = {
  // ---- 앱 / 메타 ----
  appTitle: '🌿 식물 생성기 <span>three.js WebGPU</span>',
  fatalStart: '렌더러 시작 실패: ',

  // ---- GUI 최상위 ----
  guiTitle: '식물 생성기',
  generator: '생성기',

  // ---- Ivy 폴더 ----
  folderModel: '모델',
  folderDrawing: '그리기',
  folderIvyShape: '아이비 형태 (실시간)',
  folderIvyLeaves: '아이비 잎 (실시간)',
  folderFlowers: '꽃 (F 키로 브러시)',

  // ---- Tree 폴더 ----
  folderTrunk: '줄기와 가지 (실시간)',
  folderCanopy: '캐노피 (실시간)',
  folderVines: '늘어지는 덩굴 (실시간)',
  folderFigs: '무화과 (F 키로 브러시)',
  folderInteract: '상호작용 (실시간)',

  // ---- 공유 폴더 ----
  folderWind: '바람 (실시간)',
  folderLook: '모양 (실시간)',
  folderGrowth: '성장 애니메이션',

  // ---- 모델 ----
  modelPreset: '프리셋',
  loadGlb: 'Load .glb…',
  modelScale: '모델 스케일 (아이비 초기화)',

  // ---- 그리기 ----
  drawModeKey: '그리기 모드 (D)',
  undoLast: '마지막 아이비 실행 취소',
  clearAllIvy: '모든 아이비 지우기',

  // ---- Ivy 형태 ----
  stemRadius: '줄기 반경',
  branchesPerUnit: '단위당 가지 수',
  branchLength: '가지 길이',
  wildness: '야생성',
  overgrow: '스트로크 너머 자람',

  // ---- Ivy 잎 ----
  density: '밀도',
  size: '크기',

  // ---- 꽃 ----
  budSites: '꽃봉오리 / 단위',
  brushRadius: '브러시 반경',
  bloomAll: '🌼 모두 피우기',
  resetBlooms: '꽃 재설정',

  // ---- 줄기와 가지 ----
  trunkHeight: '줄기 높이',
  trunkGirth: '줄기 둘레',
  buttress: '버트레스 뿌리',
  mainLimbs: '주요 가지',
  limbLength: '가지 길이',
  crownSpread: '왕관 펼침',
  gnarl: '뒤틀림',
  forkGenerations: '분기 세대',

  // ---- 캐노피 ----
  clumpSize: '덩어리 크기',
  sprigsPerClump: '덩어리당 잔가지',
  sprigSize: '잔가지 크기',
  leafHue: '색조 (가을 ↔ 녹색)',

  // ---- 늘어지는 덩굴 ----
  vineCount: '수',
  vineLength: '길이',

  // ---- 무화과 ----
  figsPerTwig: '잔가지당 무화과',
  figSize: '크기',
  ripenAll: '🍈 모두 익히기',
  resetFigs: '무화과 재설정',

  // ---- 상호작용 ----
  pushForce: '밀기 힘',

  // ---- 바람 ----
  windStrength: '강도',
  windSpeed: '속도',
  windDirection: '방향 (°)',

  // ---- 모양 ----
  qualityStyle: '스타일',
  seed: '시드',
  randomSeed: '🎲 무작위 시드',

  // ---- 성장 애니메이션 ----
  growthSpeed: '속도 (Redraw 필요)',
  redraw: '▶ 다시 그리기 (성장 재생)',

  // ---- 모드 라벨 (modeBtn) ----
  modeDraw: '그리기 모드',
  modeFlower: '꽃 브러시',
  modeFig: '무화과 브러시',
  modeInteract: '상호작용 모드',
  modeOrbit: '궤도 모드',

  // ---- HUD 메시지 ----
  hudDrawHovering: '<b>지금 드래그</b>하여 표면을 따라 아이비 경로를 그리세요 — 손을 떼면 자랍니다.',
  hudDrawIdle: '모델 위로 이동한 다음 <b>드래그</b>하여 아이비 경로를 그리세요. <b>D</b>로 궤도, <b>F</b>로 꽃 피우기.',
  hudOrbit: '<b>궤도 모드</b> — 드래그로 회전, 스크롤로 줌, 우클릭 드래그로 팬. <b>D</b>로 아이비 그리기, <b>F</b>로 꽃 피우기.',
  hudFlower: '<b>꽃 브러시</b> — 아이비 위로 호버하면 꽃봉오리가 피어납니다. 평소처럼 드래그로 궤도. <b>F</b>로 브러시 끄기.',
  hudFig: '<b>무화과 브러시</b> — 잔가지 위로 호버하면 녹색 무화과가 부풀어 적색으로 익어갑니다. 평소처럼 드래그로 궤도. <b>F</b>로 브러시 끄기.',
  hudInteract: '<b>상호작용 모드</b> — 커서를 가지나 잎 위로 스치면 빗겨가고, 지나간 뒤 다시 돌아옵니다. 평소처럼 드래그로 궤도. <b>D</b>로 끄기, <b>F</b>로 무화과 익히기.',
  hudTreeOrbit: '<b>궤도 모드</b> — 드래그로 회전, 스크롤로 줌. <b>D</b>로 트리 빗어내기, <b>F</b>로 무화과 익히기. <b>▶ Redraw</b>로 성장 재생.',
  hudRenderer: '렌더러',
  rendererWebGPU: 'WebGPU',
  rendererWebGL2: 'WebGL2 (폴백)',
};

const EN = {
  appTitle: '🌿 Vegetation Generator <span>three.js WebGPU</span>',
  fatalStart: 'Failed to start the renderer: ',

  guiTitle: 'Vegetation Generator',
  generator: 'Generator',

  folderModel: 'Model',
  folderDrawing: 'Drawing',
  folderIvyShape: 'Ivy shape (live)',
  folderIvyLeaves: 'Ivy leaves (live)',
  folderFlowers: 'Flowers (F to brush)',

  folderTrunk: 'Trunk & limbs (live)',
  folderCanopy: 'Canopy (live)',
  folderVines: 'Hanging vines (live)',
  folderFigs: 'Figs (F to brush)',
  folderInteract: 'Interaction (live)',

  folderWind: 'Wind (live)',
  folderLook: 'Look (live)',
  folderGrowth: 'Growth animation',

  modelPreset: 'Preset',
  loadGlb: 'Load .glb…',
  modelScale: 'Model scale (clears ivy)',

  drawModeKey: 'Draw mode (D)',
  undoLast: 'Undo last ivy',
  clearAllIvy: 'Clear all ivy',

  stemRadius: 'Stem radius',
  branchesPerUnit: 'Branches / unit',
  branchLength: 'Branch length',
  wildness: 'Wildness',
  overgrow: 'Overgrow past stroke',

  density: 'Density',
  size: 'Size',

  budSites: 'Bud sites / unit',
  brushRadius: 'Brush radius',
  bloomAll: '🌼 Bloom all',
  resetBlooms: 'Reset blooms',

  trunkHeight: 'Trunk height',
  trunkGirth: 'Trunk girth',
  buttress: 'Buttress roots',
  mainLimbs: 'Main limbs',
  limbLength: 'Limb length',
  crownSpread: 'Crown spread',
  gnarl: 'Gnarl',
  forkGenerations: 'Fork generations',

  clumpSize: 'Clump size',
  sprigsPerClump: 'Sprigs per clump',
  sprigSize: 'Sprig size',
  leafHue: 'Hue (autumn ↔ green)',

  vineCount: 'Count',
  vineLength: 'Length',

  figsPerTwig: 'Figs per twig',
  figSize: 'Size',
  ripenAll: '🍈 Ripen all',
  resetFigs: 'Reset figs',

  pushForce: 'Push force',

  windStrength: 'Strength',
  windSpeed: 'Speed',
  windDirection: 'Direction (°)',

  qualityStyle: 'Style',
  seed: 'Seed',
  randomSeed: '🎲 Random seed',

  growthSpeed: 'Speed (needs Redraw)',
  redraw: '▶ Redraw (replay growth)',

  modeDraw: 'Draw mode',
  modeFlower: 'Flower brush',
  modeFig: 'Fig brush',
  modeInteract: 'Interact mode',
  modeOrbit: 'Orbit mode',

  hudDrawHovering: '<b>Drag now</b> to paint an ivy path along the surface — it grows when you let go.',
  hudDrawIdle: 'Move over the model, then <b>drag</b> to paint an ivy path. Press <b>D</b> to orbit, <b>F</b> to bloom flowers.',
  hudOrbit: '<b>Orbit mode</b> — drag to rotate, scroll to zoom, right-drag to pan. Press <b>D</b> to draw ivy, <b>F</b> to bloom its flowers.',
  hudFlower: '<b>Flower brush</b> — hover over the ivy and watch the buds pop into bloom. Drag to orbit as usual. Press <b>F</b> to put the brush away.',
  hudFig: '<b>Fig brush</b> — hover the twigs and watch the green figs swell and ripen red. Drag to orbit as usual. Press <b>F</b> to put the brush away.',
  hudInteract: '<b>Interact mode</b> — sweep the cursor through branches or leaves to brush them aside; they spring back behind you. Drag to orbit as usual. Press <b>D</b> to switch off, <b>F</b> to ripen figs.',
  hudTreeOrbit: '<b>Orbit mode</b> — drag to rotate, scroll to zoom. Press <b>D</b> to brush the tree around, <b>F</b> to ripen its figs. <b>▶ Redraw</b> replays the growth.',
  hudRenderer: 'Renderer',
  rendererWebGPU: 'WebGPU',
  rendererWebGL2: 'WebGL2 (fallback)',
};

let current = KO;

export function setLanguage(lang: 'ko' | 'en'): void {
  current = lang === 'en' ? EN : KO;
}

export function t(key: string): string {
  const v = (current as Record<string, string>)[key];
  if (v !== undefined) return v;
  const e = (EN as Record<string, string>)[key];
  if (e !== undefined) return e;
  return key;
}

export const L = {
  KO,
  EN,
  current: () => current,
};
