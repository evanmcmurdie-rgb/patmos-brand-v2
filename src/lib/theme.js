import fs from "node:fs";
import path from "node:path";

import { theme } from "virtual:design-system/theme";

import { brandAsset, t } from "patmos-design-system/site/theme.js";

export { brandAsset, t, theme };

export const tokens = JSON.parse(fs.readFileSync(path.join(theme.paths.dist, "tokens.json"), "utf8")).tokens;

export const byName = new Map(tokens.map((token) => [token.name, token]));

export const hexOf = (token) => token?.description?.match(/Source hex: (#[0-9A-F]+)/i)?.[1] ?? null;
