# TypeScript Learning Reference

This repository is a small TypeScript practice workspace used to explore core language features, type safety, and object-oriented patterns. Each lesson is stored as a TypeScript source file, and the generated JavaScript and declaration output is included so you can compare the source with the compiled result.

## Repository Structure

| Path | Focus |
| --- | --- |
| `script.ts` | Primitive and reference types, tuples, enums, `unknown`, `void`, `null`, and `never` |
| `script2.ts` | Type inference and explicit type annotations |
| `script3.ts` | Interfaces, optional properties, interface extension, declaration merging, type aliases, and intersections |
| `functions/intro.ts` | Callback functions, optional and default parameters, and rest parameters |
| `classes/script4.ts` | Class basics, constructors, parameter properties, and access modifiers |
| `classes/access_modfier.ts` | `public`, `private`, and `protected` access control |
| `classes/getter_setters.ts` | Getters and setters |
| `classes/static_members.ts` | Static class members |
| `classes/abstract_classes.ts` | Abstract classes and abstract methods |
| `classes/readonly.ts` | `readonly` properties |
| `classes/parameter_properties.ts` | Constructor parameter properties |

## Topics Covered

- Basic TypeScript types and values
- Type inference and explicit annotations
- Objects, arrays, tuples, and enums
- `any`, `unknown`, `void`, `null`, `undefined`, and `never`
- Interfaces and interface extension
- Type aliases and intersections
- Declaration merging
- Function types and callbacks
- Optional, default, and rest parameters
- Classes and object-oriented programming
- Constructors and parameter properties
- Access modifiers (`public`, `private`, `protected`)
- `readonly` properties
- Getters and setters
- Static members
- Abstract classes

## Prerequisites

- Node.js
- TypeScript CLI (`tsc`)

Install TypeScript globally:

```bash
npm install --global typescript
```

Check the installation:

```bash
tsc --version
```

## Compile the Project

Compile the root-level lessons and the functions lesson:

```bash
tsc --project tsconfig.json
```

Compile the class-based lesson set:

```bash
tsc --project classes/tsconfig.json
```

To type-check without emitting files, add `--noEmit`:

```bash
tsc --project tsconfig.json --noEmit
```

## Notes

- The generated `.js`, `.d.ts`, and `.map` files are kept in the repository for reference.
- The `classes` folder has its own `tsconfig.json` because it is treated as a separate lesson area.
- This project is intended for learning and experimentation rather than production use.
