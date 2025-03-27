import { z } from "zod";

import {
	ImportsNotUsedAsValuesSchema,
	JsxEmitSchema,
	ModuleDetectionKindSchema,
	ModuleKindSchema,
	ModuleResolutionKindSchema,
	NewLineKindSchema,
	ScriptTargetSchema,
} from "./enums.js";

export const CompilerOptionsSchema = z.object({
	allowArbitraryExtensions: z.boolean().optional(),

	allowImportingTsExtensions: z.boolean().optional(),

	allowJs: z.boolean().optional(),

	allowSyntheticDefaultImports: z.boolean().optional(),

	allowUmdGlobalAccess: z.boolean().optional(),

	allowUnreachableCode: z.boolean().optional(),

	allowUnusedLabels: z.boolean().optional(),

	alwaysStrict: z.boolean().optional(),

	baseUrl: z.string().optional(),

	/** @deprecated */
	charset: z.string().optional(),

	checkJs: z.boolean().optional(),

	customConditions: z.array(z.string()).optional(),

	declaration: z.boolean().optional(),

	declarationDir: z.string().optional(),

	declarationMap: z.boolean().optional(),

	disableReferencedProjectLoad: z.boolean().optional(),

	disableSizeLimit: z.boolean().optional(),

	disableSolutionSearching: z.boolean().optional(),

	disableSourceOfProjectReferenceRedirect: z.boolean().optional(),

	downlevelIteration: z.boolean().optional(),

	emitBOM: z.boolean().optional(),

	emitDeclarationOnly: z.boolean().optional(),

	emitDecoratorMetadata: z.boolean().optional(),

	erasableSyntaxOnly: z.boolean().optional(),

	esModuleInterop: z.boolean().optional(),

	exactOptionalPropertyTypes: z.boolean().optional(),

	experimentalDecorators: z.boolean().optional(),

	forceConsistentCasingInFileNames: z.boolean().optional(),

	ignoreDeprecations: z.string().optional(),

	importHelpers: z.boolean().optional(),

	/** @deprecated */
	importsNotUsedAsValues: ImportsNotUsedAsValuesSchema,

	inlineSourceMap: z.boolean().optional(),

	inlineSources: z.boolean().optional(),

	isolatedDeclarations: z.boolean().optional(),

	isolatedModules: z.boolean().optional(),

	jsx: JsxEmitSchema,

	/** @deprecated */
	keyofStringsOnly: z.boolean().optional(),

	lib: z.array(z.string()).optional(),

	libReplacement: z.boolean().optional(),

	locale: z.string().optional(),

	mapRoot: z.string().optional(),

	maxNodeModuleJsDepth: z.number().optional(),

	module: ModuleKindSchema,

	moduleDetection: ModuleDetectionKindSchema,

	moduleResolution: ModuleResolutionKindSchema,

	moduleSuffixes: z.array(z.string()).optional(),

	newLine: NewLineKindSchema,

	noCheck: z.boolean().optional(),

	noEmit: z.boolean().optional(),

	noEmitHelpers: z.boolean().optional(),

	noEmitOnError: z.boolean().optional(),

	noErrorTruncation: z.boolean().optional(),

	noFallthroughCasesInSwitch: z.boolean().optional(),

	noImplicitAny: z.boolean().optional(),

	noImplicitReturns: z.boolean().optional(),

	noImplicitThis: z.boolean().optional(),

	/** @deprecated */
	noStrictGenericChecks: z.boolean().optional(),

	noUnusedLocals: z.boolean().optional(),

	noUnusedParameters: z.boolean().optional(),

	/** @deprecated */
	assumeChangesOnlyAffectDirectDependencies: z.boolean().optional(),

	noImplicitUseStrict: z.boolean().optional(),

	noLib: z.boolean().optional(),

	noPropertyAccessFromIndexSignature: z.boolean().optional(),

	noResolve: z.boolean().optional(),

	noUncheckedIndexedAccess: z.boolean().optional(),

	/** @deprecated */
	noImplicitOverride: z.boolean().optional(),

	out: z.string().optional(),

	outDir: z.string().optional(),

	outFile: z.string().optional(),

	paths: z.record(z.string()).optional(),

	preserveConstEnums: z.boolean().optional(),

	preserveSymlinks: z.boolean().optional(),

	/** @deprecated */
	composite: z.boolean().optional(),

	incremental: z.boolean().optional(),

	jsxFactory: z.string().optional(),

	jsxFragmentFactory: z.string().optional(),

	jsxImportSource: z.string().optional(),

	preserveValueImports: z.boolean().optional(),

	project: z.string().optional(),

	reactNamespace: z.string().optional(),

	removeComments: z.boolean().optional(),

	resolvePackageJsonExports: z.boolean().optional(),

	resolvePackageJsonImports: z.boolean().optional(),

	rewriteRelativeImportExtensions: z.boolean().optional(),

	rootDir: z.string().optional(),

	rootDirs: z.array(z.string()).optional(),

	skipDefaultLibCheck: z.boolean().optional(),

	skipLibCheck: z.boolean().optional(),

	sourceMap: z.boolean().optional(),

	sourceRoot: z.string().optional(),

	strict: z.boolean().optional(),

	strictBindCallApply: z.boolean().optional(),

	strictBuiltinIteratorReturn: z.boolean().optional(),

	strictFunctionTypes: z.boolean().optional(),

	strictNullChecks: z.boolean().optional(),

	strictPropertyInitialization: z.boolean().optional(),

	stripInternal: z.boolean().optional(),

	tsBuildInfoFile: z.string().optional(),

	/** @deprecated */
	suppressExcessPropertyErrors: z.boolean().optional(),

	/** @deprecated */
	noUncheckedSideEffectImports: z.boolean().optional(),

	resolveJsonModule: z.boolean().optional(),

	suppressImplicitAnyIndexErrors: z.boolean().optional(),

	target: ScriptTargetSchema,

	traceResolution: z.boolean().optional(),

	typeRoots: z.array(z.string()).optional(),

	types: z.array(z.string()).optional(),

	useDefineForClassFields: z.boolean().optional(),

	useUnknownInCatchVariables: z.boolean().optional(),

	verbatimModuleSyntax: z.boolean().optional(),
});

export type CompilerOptions = z.infer<typeof CompilerOptionsSchema>;
