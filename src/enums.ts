import { z } from "zod";

/** @deprecated */
export const ImportsNotUsedAsValuesSchema = z.enum([
	"error",
	"preserve",
	"remove",
]);

export type ImportsNotUsedAsValues = z.infer<
	typeof ImportsNotUsedAsValuesSchema
>;

export const JsxEmitSchema = z.enum([
	"none",
	"preserve",
	"react",
	"react-jsx",
	"react-jsxdev",
	"react-native",
]);

export type JsxEmit = z.infer<typeof JsxEmitSchema>;

export const ModuleKindSchema = z.enum([
	"amd",
	"AMD",
	"commonjs",
	"CommonJS",
	"es2015",
	"ES2015",
	"es2020",
	"ES2020",
	"es2022",
	"ES2022",
	"es6",
	"ES6",
	"esnext",
	"ESNext",
	"node16",
	"Node16",
	"node18",
	"Node18",
	"nodenext",
	"NodeNext",
	"none",
	"None",
	"preserve",
	"Preserve",
	"system",
	"System",
	"umd",
	"UMD",
]);

export type ModuleKind = z.infer<typeof ModuleKindSchema>;

export const ModuleResolutionKindSchema = z.enum([
	"bundler",
	"Bundler",
	"classic",
	"Classic",
	"node",
	"node",
	"Node",
	"node10",
	"Node10",
	"node16",
	"Node16",
	"NodeJs",
	"nodenext",
	"NodeNext",
]);

export type ModuleResolutionKind = z.infer<typeof ModuleResolutionKindSchema>;

export const ModuleDetectionKindSchema = z.enum(["auto", "force", "legacy"]);

export type ModuleDetectionKind = z.infer<typeof ModuleDetectionKindSchema>;

export const NewLineKindSchema = z.enum(["crlf", "lf"]);

export type NewLineKind = z.infer<typeof NewLineKindSchema>;

export const ScriptTargetSchema = z.enum([
	"es2015",
	"ES2015",
	"es2016",
	"ES2016",
	"es2017",
	"ES2017",
	"es2018",
	"ES2018",
	"es2019",
	"ES2019",
	"es2020",
	"ES2020",
	"es2021",
	"ES2021",
	"es2022",
	"ES2022",
	"es2023",
	"ES2023",
	"es2024",
	"ES2024",
	"es3",
	"ES3",
	"es5",
	"ES5",
	"esnext",
	"ESNext",
	"json",
	"JSON",
	"latest",
	"Latest",
]);

export type ScriptTarget = z.infer<typeof ScriptTargetSchema>;
