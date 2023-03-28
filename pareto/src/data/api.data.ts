import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction, sFunctionReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createJSONConverter": algorithm(sfunction("this", {}, "ConvertJSON"), dependent(null, {
            "convert": sFunctionReference("this", {}, "Convert"),
        }, {})),
    }),
}