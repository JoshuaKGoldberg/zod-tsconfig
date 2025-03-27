import { z } from "zod";

/** @deprecated */
export const ImportsNotUsedAsValuesSchema = z.nativeEnum({
	Error: 2,
	Preserve: 1,
	Remove: 0,
} as const);

export type ImportsNotUsedAsValues = z.infer<
	typeof ImportsNotUsedAsValuesSchema
>;

export const JsxEmitSchema = z.nativeEnum({
	None: "none",
	Preserve: "preserve",
	React: "react",
	ReactJSX: "react-jsx",
	ReactJSXDev: "react-jsxdev",
	ReactNative: "react-native",
} as const);

export type JsxEmit = z.infer<typeof JsxEmitSchema>;

export const ModuleKindSchema = z.nativeEnum({
	AMD: "amd",
	CommonJS: "commonjs",
	ES6: "es6",
	ES2015: "es2015",
	ES2020: "es2020",
	ES2022: "es2022",
	ESNext: "esnext",
	Node16: "node16",
	Node18: "node18",
	NodeNext: "nodenext",
	None: "none",
	Preserve: "preserve",
	System: "system",
	UMD: "umd",
} as const);

export type ModuleKind = z.infer<typeof ModuleKindSchema>;

export const ModuleResolutionKindSchema = z.nativeEnum({
	Classic: "classic",

	/** @deprecated Renamed to `Node10` */
	Node: "node",

	/** @deprecated Renamed to `Node10` */
	Bundler: "bundler",

	Node10: "node10",
	Node16: "node16",
	NodeJs: "node",
	NodeNext: "nodenext",
} as const);

export type ModuleResolutionKind = z.infer<typeof ModuleResolutionKindSchema>;

export const ModuleDetectionKindSchema = z.nativeEnum({
	/**
	 * Files with imports, exports and/or import.meta are considered modules
	 */
	Legacy: 1,

	/**
	 * Legacy, but also files with jsx under react-jsx or react-jsxdev and esm mode files under moduleResolution: node16+
	 */
	Auto: 2,

	/**
	 * Consider all non-declaration files modules, regardless of present syntax
	 */
	Force: 3,
} as const);

export type ModuleDetectionKind = z.infer<typeof ModuleDetectionKindSchema>;

export const NewLineKindSchema = z.nativeEnum({
	CarriageReturnLineFeed: 0,
	LineFeed: 1,
} as const);

export type NewLineKind = z.infer<typeof NewLineKindSchema>;

export const ScriptTargetSchema = z.nativeEnum({
	/** @deprecated */
	ES3: 0,
	ES5: 1,
	ES2015: 2,
	ES2016: 3,
	ES2017: 4,
	ES2018: 5,
	ES2019: 6,
	ES2020: 7,
	ES2021: 8,
	ES2022: 9,
	ES2023: 10,
	ES2024: 11,
	ESNext: 99,
	JSON: 100,
	Latest: 99,
} as const);

export type ScriptTarget = z.infer<typeof ScriptTargetSchema>;
