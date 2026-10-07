import { z } from "zod";

export const PluginImportSchema = z.looseObject({
	name: z.string().optional(),
});

export type PluginImport = z.infer<typeof PluginImportSchema>;
