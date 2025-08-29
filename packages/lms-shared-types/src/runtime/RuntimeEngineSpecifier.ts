import { z } from "zod";

export interface RuntimeEngineSpecifier {
  name: string;
  version: string;
  supportedModelFormats: string[];
  selectedForModelFormats: string[];
}

export const runtimeEngineSpecifierSchema = z.object({
  name: z.string(),
  version: z.string(),
  supportedModelFormats: z.array(z.string()),
  selectedForModelFormats: z.array(z.string()),
});
