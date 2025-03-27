import { z } from "zod";

import { CompilerOptionsSchema } from "./compilerOptions.js";
import { ReferencesSchema } from "./references.js";

export const TSConfigSchema = z.object({
	compilerOptions: CompilerOptionsSchema.optional(),
	exclude: z.array(z.string()).optional(),
	extends: z.union([z.string(), z.array(z.string())]).optional(),
	files: z.array(z.string()).optional(),
	include: z.array(z.string()).optional(),
	references: ReferencesSchema.optional(),
});

export type TSConfig = z.infer<typeof TSConfigSchema>;
