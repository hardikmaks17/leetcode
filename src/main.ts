// This function takes an object and attaches each of its properties to the window object.
function exposeToWindow(obj: Record<string, any>) {
  Object.entries(obj).forEach(([key, value]) => {
    (window as any)[key] = value;
  });
}

// 1. Automatically import all .ts files in the src directory.
// 'eager: true' ensures they are loaded and run immediately.
const modules = import.meta.glob("./**/*.ts", { eager: true });

// 2. Iterate over each imported module.
for (const path in modules) {
  const module: any = modules[path];
  // 3. Expose the exports from each module to the window.
  exposeToWindow(module);
}

console.log(`✅ Loaded and exposed ${Object.keys(modules).length} modules.`);
