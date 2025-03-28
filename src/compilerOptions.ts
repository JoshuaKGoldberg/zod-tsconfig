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

export const CompilerOptionsSchema = z
	.object({
		allowArbitraryExtensions: z.boolean(),

		allowImportingTsExtensions: z.boolean(),

		allowJs: z.boolean(),

		allowSyntheticDefaultImports: z.boolean(),

		allowUmdGlobalAccess: z.boolean(),

		allowUnreachableCode: z.boolean(),

		allowUnusedLabels: z.boolean(),

		alwaysStrict: z.boolean(),

		baseUrl: z.string(),

		/** @deprecated */
		charset: z.string(),

		checkJs: z.boolean(),

		customConditions: z.array(z.string()),

		declaration: z.boolean(),

		declarationDir: z.string(),

		declarationMap: z.boolean(),

		disableReferencedProjectLoad: z.boolean(),

		disableSizeLimit: z.boolean(),

		disableSolutionSearching: z.boolean(),

		disableSourceOfProjectReferenceRedirect: z.boolean(),

		downlevelIteration: z.boolean(),

		emitBOM: z.boolean(),

		emitDeclarationOnly: z.boolean(),

		emitDecoratorMetadata: z.boolean(),

		erasableSyntaxOnly: z.boolean(),

		esModuleInterop: z.boolean(),

		exactOptionalPropertyTypes: z.boolean(),

		experimentalDecorators: z.boolean(),

		forceConsistentCasingInFileNames: z.boolean(),

		ignoreDeprecations: z.string(),

		importHelpers: z.boolean(),

		/** @deprecated */
		importsNotUsedAsValues: ImportsNotUsedAsValuesSchema,

		inlineSourceMap: z.boolean(),

		inlineSources: z.boolean(),

		isolatedDeclarations: z.boolean(),

		isolatedModules: z.boolean(),

		jsx: JsxEmitSchema,

		/** @deprecated */
		keyofStringsOnly: z.boolean(),

		lib: z.array(z.string()),

		libReplacement: z.boolean(),

		locale: z.string(),

		mapRoot: z.string(),

		maxNodeModuleJsDepth: z.number(),

		module: ModuleKindSchema,

		moduleDetection: ModuleDetectionKindSchema,

		moduleResolution: ModuleResolutionKindSchema,

		moduleSuffixes: z.array(z.string()),

		newLine: NewLineKindSchema,

		noCheck: z.boolean(),

		noEmit: z.boolean(),

		noEmitHelpers: z.boolean(),

		noEmitOnError: z.boolean(),

		noErrorTruncation: z.boolean(),

		noFallthroughCasesInSwitch: z.boolean(),

		noImplicitAny: z.boolean(),

		noImplicitReturns: z.boolean(),

		noImplicitThis: z.boolean(),

		/** @deprecated */
		noStrictGenericChecks: z.boolean(),

		noUnusedLocals: z.boolean(),

		noUnusedParameters: z.boolean(),

		/** @deprecated */
		assumeChangesOnlyAffectDirectDependencies: z.boolean(),

		noImplicitUseStrict: z.boolean(),

		noLib: z.boolean(),

		noPropertyAccessFromIndexSignature: z.boolean(),

		noResolve: z.boolean(),

		noUncheckedIndexedAccess: z.boolean(),

		/** @deprecated */
		noImplicitOverride: z.boolean(),

		out: z.string(),

		outDir: z.string(),

		outFile: z.string(),

		paths: z.record(z.string()),

		preserveConstEnums: z.boolean(),

		preserveSymlinks: z.boolean(),

		/** @deprecated */
		composite: z.boolean(),

		incremental: z.boolean(),

		jsxFactory: z.string(),

		jsxFragmentFactory: z.string(),

		jsxImportSource: z.string(),

		preserveValueImports: z.boolean(),

		project: z.string(),

		reactNamespace: z.string(),

		removeComments: z.boolean(),

		resolvePackageJsonExports: z.boolean(),

		resolvePackageJsonImports: z.boolean(),

		rewriteRelativeImportExtensions: z.boolean(),

		rootDir: z.string(),

		rootDirs: z.array(z.string()),

		skipDefaultLibCheck: z.boolean(),

		skipLibCheck: z.boolean(),

		sourceMap: z.boolean(),

		sourceRoot: z.string(),

		strict: z.boolean(),

		strictBindCallApply: z.boolean(),

		strictBuiltinIteratorReturn: z.boolean(),

		strictFunctionTypes: z.boolean(),

		strictNullChecks: z.boolean(),

		strictPropertyInitialization: z.boolean(),

		stripInternal: z.boolean(),

		tsBuildInfoFile: z.string(),

		/** @deprecated */
		suppressExcessPropertyErrors: z.boolean(),

		/** @deprecated */
		noUncheckedSideEffectImports: z.boolean(),

		resolveJsonModule: z.boolean(),

		suppressImplicitAnyIndexErrors: z.boolean(),

		target: ScriptTargetSchema,

		traceResolution: z.boolean(),

		typeRoots: z.array(z.string()),

		types: z.array(z.string()),

		useDefineForClassFields: z.boolean(),

		useUnknownInCatchVariables: z.boolean(),

		verbatimModuleSyntax: z.boolean(),
	})
	.partial();

export type CompilerOptions = z.infer<typeof CompilerOptionsSchema>;
