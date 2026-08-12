import { App } from './app';
import { t } from './i18n';

const app = new App(document.getElementById('app') as HTMLElement);

app.start().catch((err: Error) => {
  console.error(err);
  const el = document.createElement('div');
  el.className = 'fatal';
  el.textContent = t('fatalStart') + `${err.message}. ` +
    'This app needs WebGPU or WebGL2 — try a recent Chrome, Edge or Firefox.';
  document.body.appendChild(el);
});
