

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.32198d59.js","_app/immutable/chunks/scheduler.2c72f06e.js","_app/immutable/chunks/index.d3a2f505.js","_app/immutable/chunks/stores.b37ca69a.js","_app/immutable/chunks/index.531e6357.js","_app/immutable/chunks/copy.65aa4a8b.js"];
export const stylesheets = [];
export const fonts = [];
