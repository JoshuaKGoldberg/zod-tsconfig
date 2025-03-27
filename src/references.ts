import { z } from "zod";

export const ReferencesSchema = z.object({
	path: z.string(),
});

export type References = z.infer<typeof ReferencesSchema>;
