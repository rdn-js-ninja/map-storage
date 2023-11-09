import { RuleSetRule } from "webpack";

import { getJsRule } from "./jsRule";
import { getTsRule } from "./tsRule";

export const initRules = (): Array<RuleSetRule> => {
    return [getJsRule(), getTsRule()];
};
