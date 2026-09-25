# TypeScript Learning Reference

A small TypeScript learning repository with focused examples for the language's core type and object-oriented features. The compiled JavaScript and declaration files are checked in alongside the source so each lesson can be inspected from both sides of the compiler.

## Project Layout

| Path | Topics |
| --- | --- |
| `script.ts` | Primitive and reference types, tuples, enums, `unknown`, `void`, `null`, and `never` |
| `script2.ts` | Type inference and type annotations |
| `script3.ts` | Interfaces, optional properties, interface extension and merging, type aliases, and intersections |
| `classes/script4.ts` | Classes, constructors, parameter properties, defaults, and access modifiers |

The generated `.js`, `.d.ts`, and source map files show the compiler output for the examples. The `classes` directory has its own `tsconfig.json` because it is a separate lesson area.

## Prerequisites

- Node.js
- TypeScript (`tsc`)

Install TypeScript globally if it is not already available:

```bash
npm install --global typescript
```

Check the installation:

```bash
tsc --version
```

## Compile the Examples

Compile the root-level lessons with the root configuration:

```bash
tsc --project tsconfig.json
```

Compile the classes lesson:

```bash
tsc --project classes/tsconfig.json
```

To type-check without writing generated files, add `--noEmit` to either command.

---

## Table of Contents

- [Setup](#setup)
- [Types](#types)
- [Functions](#functions)
- [Interfaces & Type Aliases](#interfaces--type-aliases)
- [Classes](#classes)
- [Generics](#generics)
- [Utility Types](#utility-types)
- [Modules](#modules)
- [Enums](#enums)
- [Type Narrowing & Guards](#type-narrowing--guards)
- [Async / Promises](#async--promises)
- [Miscellaneous](#miscellaneous)

---

## Setup

```bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Initialize a tsconfig
tsc --init

# Compile a file
tsc file.ts

# Watch mode
tsc --watch
```

---

## Types

> _Notes go here_

---

## Functions

> _Notes go here_

---

## Interfaces & Type Aliases

> _Notes go here_

---

## Classes

> _Notes go here_

---

## Generics

> _Notes go here_

---

## Utility Types

> _Notes go here_

---

## Modules

> _Notes go here_

---

## Enums

> _Notes go here_

---

## Type Narrowing & Guards

> _Notes go here_

---

## Async / Promises

> _Notes go here_

---

## Miscellaneous

> _Notes go here_
