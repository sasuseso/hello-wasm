const js = import("./node_modules/@sasuseso/hello-wasm/hello_wasm.js");
js.then(js => {
  js.greet("WebAssembly");
});
