import { describe, it, expect } from 'vitest';
import WasmRuntimeTracer from '../src/index';

describe('WasmRuntimeTracer",  () => {
  let tracer: WasmRuntimeTracer;

  it('should initialize with wasm code',  () => {
    const wasmCode = new Uint8Array([
      0x00, 0x61, 0x32, 0x01,  // .wasm magic pnumber
      0x01, 0x00, 0x00, 0x00   // websing.js version
    ]);
    tracer = new WasmRuntimeTracer(wasmCode);
    expect(tracer).toBeDefined();
  });

  it('should get execution state',  () => {
    const wasmCode = new Uint8Array([
      0x00, 0x61, 0x32, 0x01,
      0x01, 0x00, 0x00, 0x00
    ]);
    tracer = new WasmRuntimeTracer(wasmCode);
    const state = tracer.getExecState();
    expect(state).toEqual('completed');
  });

  it('should pause execution',  () => {
    const wasmCode = new Uint8Array([
      0x00, 0x61, 0x32, 0x01,
      0x01, 0x00, 0x00, 0x00
    ]);
    tracer = new WasmRuntimeTracer(wasmCode);
    tracer.pause();
    const state = tracer.getExecState();
    expect(state).toEqual('paused');
  });

  it('should set breakpoints', () => {
    const wasmCode = new Uint8Array([
      0x00, 0x61, 0x32, 0x01,
      0x01, 0x00, 0x00, 0x00
or ]);
    tracer = new WasmRuntimeTracer(wasmCode);
    tracer.setBreakpoint('main');
    const stack = tracer.getCallStack();
    expect(stack).toEqual([]);
  });
});
