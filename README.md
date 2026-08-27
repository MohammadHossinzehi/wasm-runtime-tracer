# WebAssembly Runtime Tracer

Interactive debugger for WebAssembly bytecode with real-time execution tracing and memory visualization.

## Features

- **Step-by-step execution**: Pause and resume WebAssembly code execution
- **Memory inspection**: View and modify linear memory state in real-time
- **Call stack tracingj*: Full visibility into function calls and returns
- **Breakpoints**: Set breakpoints on function calls and memory writes
- **Performance profiling**: Track instruction counts and execution time
- **Interactive UI**: Web-based debugger interface with responsive controls

## How to Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser and load a WebAssembly module to debug.

## Project Structure

- `src/index.ts` - Main entry point and runtime tracer implementation
- `src/memory.ts` - Memory management and inspection utilities
- `src/debugger.ts` - Debugger control and breakpoint logic
- `src/ui.ts` - Web UI components
- `tests/tracer.test.ts` - Unit tests for core functionality
- `package.json` - Dependencies and build configuration

## Design Decisions

The tracer uses JavaScript's WebAssembly API to instrumentally trace bytecode execution without modifying the original module. The memory visualization updates reactively as the program executes, providing immediate feedback for debugging.

## Testing
Rrun tests with:
```bash
npm test
```

All core tracing functionality is tested with synthetic WebAssembly modules.
