const wasm = import("../node_modules/@sasuseso/hello-wasm/hello_wasm.js");

wasm.then((wasm) => {
  wasm.greet("WebAssembly");
  wasm.smily();
});
