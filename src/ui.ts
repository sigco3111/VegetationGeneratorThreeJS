import GUI from 'lil-gui';
import type { App, Generator, ModelKind } from './app';
import { windSettings } from './wind';
import { t } from './i18n';

export function buildGui(app: App): GUI {
  const gui = new GUI({ title: t('guiTitle') });
  const s = app.settings;

  // Live edits snap every existing plant to fully grown so you see the change immediately.
  // Scoped so dragging an ivy slider never rebuilds the tree (and vice versa).
  const liveIvy = () => app.scheduleRegrow('instant', 'ivy');
  const liveTree = () => app.scheduleRegrow('instant', 'tree');
  const liveBoth = () => app.scheduleRegrow('instant', 'both');

  const ivyFolders: GUI[] = [];
  const treeFolders: GUI[] = [];

  gui.add(s, 'generator', ['Ivy', 'Tree'] satisfies Generator[]).name(t('generator')).onChange((g: Generator) => {
    app.setGenerator(g);
    syncFolders(g);
  });

  // ---------- ivy ----------

  const fModel = gui.addFolder(t('folderModel'));
  fModel
    .add(s, 'model', ['Sphere', 'Torus Knot', 'Box', 'Cylinder'] satisfies ModelKind[])
    .name(t('modelPreset'))
    .onChange((v: ModelKind) => app.setModel(v));
  fModel.add({ load: () => pickGlb(app) }, 'load').name(t('loadGlb'));
  // Rescaling the surface invalidates painted strokes, so this clears the ivy on change.
  fModel.add(s, 'modelScale', 0.2, 3).name(t('modelScale')).listen()
    .onChange((v: number) => app.setModelScale(v));
  ivyFolders.push(fModel);

  const fDraw = gui.addFolder(t('folderDrawing'));
  fDraw.add(s, 'drawMode').name(t('drawModeKey')).listen().onChange(() => app.applyModes());
  fDraw.add({ undo: () => app.undoLast() }, 'undo').name(t('undoLast'));
  fDraw.add({ clear: () => app.clearAll() }, 'clear').name(t('clearAllIvy'));
  ivyFolders.push(fDraw);

  const fShape = gui.addFolder(t('folderIvyShape'));
  fShape.add(s, 'stemRadius', 0.003, 0.03).name(t('stemRadius')).onChange(liveIvy);
  fShape.add(s, 'branchDensity', 0, 14, 1).name(t('branchesPerUnit')).onChange(liveIvy);
  fShape.add(s, 'branchLength', 0.1, 1.5).name(t('branchLength')).onChange(liveIvy);
  fShape.add(s, 'wander', 0, 1).name(t('wildness')).onChange(liveIvy);
  fShape.add(s, 'extend', 0, 3).name(t('overgrow')).onChange(liveIvy);
  ivyFolders.push(fShape);

  const fIvyLeaves = gui.addFolder(t('folderIvyLeaves'));
  fIvyLeaves.add(s, 'leafDensity', 0, 30).name(t('density')).onChange(liveIvy);
  // Size is a pure rescale of existing instances — instant, no regrow.
  fIvyLeaves.add(s, 'leafSize', 0.03, 0.25).name(t('size')).onChange((v: number) => app.setIvyLeafSize(v));
  ivyFolders.push(fIvyLeaves);

  // Flower sites regrow live; blooming itself happens with the F brush (hover the ivy).
  const fFlowers = gui.addFolder(t('folderFlowers'));
  fFlowers.add(s, 'flowerDensity', 0, 8).name(t('budSites')).onChange(liveIvy);
  fFlowers.add(s, 'flowerSize', 0.05, 0.3).name(t('size')).onChange((v: number) => app.setIvyFlowerSize(v));
  fFlowers.add(s, 'flowerBrush', 0.08, 0.6).name(t('brushRadius'));
  fFlowers.add({ bloom: () => app.bloomAll() }, 'bloom').name(t('bloomAll'));
  fFlowers.add({ reset: () => app.resetBlooms() }, 'reset').name(t('resetBlooms'));
  ivyFolders.push(fFlowers);

  // ---------- banyan tree ----------

  const t2 = app.treeParams;

  const fTrunk = gui.addFolder(t('folderTrunk'));
  fTrunk.add(t2, 'trunkHeight', 0.4, 2).name(t('trunkHeight')).onChange(liveTree);
  fTrunk.add(t2, 'trunkGirth', 0.08, 0.4).name(t('trunkGirth')).onChange(liveTree);
  fTrunk.add(t2, 'buttress', 0, 1).name(t('buttress')).onChange(liveTree);
  fTrunk.add(t2, 'limbs', 2, 8, 1).name(t('mainLimbs')).onChange(liveTree);
  fTrunk.add(t2, 'limbLength', 0.6, 2.4).name(t('limbLength')).onChange(liveTree);
  fTrunk.add(t2, 'spread', 0, 1).name(t('crownSpread')).onChange(liveTree);
  fTrunk.add(t2, 'gnarl', 0, 1).name(t('gnarl')).onChange(liveTree);
  fTrunk.add(t2, 'splits', 1, 3, 1).name(t('forkGenerations')).onChange(liveTree);
  treeFolders.push(fTrunk);

  const fCanopy = gui.addFolder(t('folderCanopy'));
  fCanopy.add(t2, 'clumpSize', 0.15, 0.8).name(t('clumpSize')).onChange((v: number) => app.setTreeClumpSize(v));
  fCanopy.add(t2, 'clumpDensity', 0, 140, 1).name(t('sprigsPerClump')).onChange(liveTree);
  // Size and hue update existing instances in place — instant, no regrow.
  fCanopy.add(t2, 'leafSize', 0.06, 0.35).name(t('sprigSize')).onChange((v: number) => app.setTreeLeafSize(v));
  fCanopy.add(t2, 'leafHue', 0.05, 0.35).name(t('leafHue')).onChange((v: number) => app.setTreeLeafHue(v));
  treeFolders.push(fCanopy);

  const fVines = gui.addFolder(t('folderVines'));
  fVines.add(t2, 'vineCount', 0, 60, 1).name(t('vineCount')).onChange(liveTree);
  fVines.add(t2, 'vineLength', 0.2, 2).name(t('vineLength')).onChange(liveTree);
  treeFolders.push(fVines);

  // A banyan is a ficus — its flowers ARE the figs. F-brush the twigs to ripen them.
  const fFigs = gui.addFolder(t('folderFigs'));
  fFigs.add(t2, 'figDensity', 0, 8, 1).name(t('figsPerTwig')).onChange(liveTree);
  fFigs.add(t2, 'figSize', 0.02, 0.12).name(t('figSize')).onChange((v: number) => app.setTreeFigSize(v));
  fFigs.add(s, 'flowerBrush', 0.08, 0.6).name(t('brushRadius'));
  fFigs.add({ ripen: () => app.ripenAll() }, 'ripen').name(t('ripenAll'));
  fFigs.add({ reset: () => app.resetRipe() }, 'reset').name(t('resetFigs'));
  treeFolders.push(fFigs);

  // Read at pointer-time — no regrow, acts immediately on the next push.
  const fInteract = gui.addFolder(t('folderInteract'));
  fInteract.add(s, 'pushForce', 0.1, 4).name(t('pushForce'));
  treeFolders.push(fInteract);

  // ---------- shared ----------

  // Wind is read by every plant each frame — sliders act immediately, no regrow needed.
  const fWind = gui.addFolder(t('folderWind'));
  fWind.add(windSettings, 'strength', 0, 1).name(t('windStrength'));
  fWind.add(windSettings, 'speed', 0.1, 3).name(t('windSpeed'));
  fWind.add(windSettings, 'directionDeg', 0, 360, 1).name(t('windDirection'));

  const fLook = gui.addFolder(t('folderLook'));
  fLook
    .add(s, 'quality', { 'Low poly': 'low', 'Realistic (high poly)': 'high' })
    .name(t('qualityStyle'))
    .onChange(liveBoth);
  fLook.add(s, 'seed', 0, 999, 1).name(t('seed')).listen().onChange(liveBoth);
  fLook.add({ random: () => app.randomizeSeed() }, 'random').name(t('randomSeed'));

  // Growth speed only shows when the plant animates, so it is NOT live — press Redraw to preview it.
  const fGrowth = gui.addFolder(t('folderGrowth'));
  fGrowth.add(s, 'growthSpeed', 0.1, 3).name(t('growthSpeed'));
  fGrowth.add({ redraw: () => app.scheduleRegrow('animate') }, 'redraw').name(t('redraw'));

  function syncFolders(g: Generator): void {
    for (const f of ivyFolders) (g === 'Ivy' ? f.show() : f.hide());
    for (const f of treeFolders) (g === 'Tree' ? f.show() : f.hide());
  }
  syncFolders(s.generator);

  return gui;
}

function pickGlb(app: App): void {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.glb,.gltf';
  input.onchange = () => {
    const file = input.files?.[0];
    if (file) void app.loadGlbFile(file);
  };
  input.click();
}
