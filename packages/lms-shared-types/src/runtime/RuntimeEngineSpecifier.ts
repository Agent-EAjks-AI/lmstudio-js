import { z } from "zod";

export interface RuntimeEngineSpecifier {
  name: string;
  version: string;
}

export interface RuntimeEngineCapabilities extends RuntimeEngineSpecifier {
  displayAlias: string;
  fullAlias: string;
  supportedModelFormats: string[];
  selectedForModelFormats: string[];
}

export const runtimeEngineSpecifierSchema = z.object({
  name: z.string(),
  version: z.string(),
});

export const runtimeEngineCapabilitiesSchema = runtimeEngineSpecifierSchema.extend({
  displayAlias: z.string(),
  fullAlias: z.string(),
  supportedModelFormats: z.array(z.string()),
  selectedForModelFormats: z.array(z.string()),
});
