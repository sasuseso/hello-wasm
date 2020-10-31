const wasm = import("../node_modules/@sasuseso/hello-wasm/hello_wasm.js");

wasm.then((wasm) => {
  wasm.greet("WebAssembly");
<<<<<<< HEAD
  wasm.smily();
=======
>>>>>>> 580d6e13374ce6df1ce2c07a5cefd51bc7413bff
});
