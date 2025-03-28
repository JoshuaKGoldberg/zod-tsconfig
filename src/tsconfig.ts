import { z } from "zod";

import { CompilerOptionsSchema } from "./compilerOptions.js";
import { ReferencesSchema } from "./references.js";

export const TSConfigSchema = z
	.object({
		compilerOptions: CompilerOptionsSchema,
		exclude: z.array(z.string()),
		extends: z.union([z.string(), z.array(z.string())]),
		files: z.array(z.string()),
		include: z.array(z.string()),
		references: ReferencesSchema,
	})
	.optional();

export type TSConfig = z.infer<typeof TSConfigSchema>;
