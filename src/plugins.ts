import { z } from "zod";

export const PluginImportSchema = z.looseObject({
	name: z.string(),
});

export type PluginImport = z.infer<typeof PluginImportSchema>;
