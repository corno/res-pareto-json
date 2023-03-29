import * as pd from 'pareto-core-data'

import {
    array, boolean, computed, dictionary, glossaryParameter, group, member, number, optional, ref, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Type": null,
    }),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "PossibleResult": type(optional(ref(glossaryParameter("Type")))),
            "Result": type(ref(glossaryParameter("Type"))),
            "JSONValue": type(group({
                "object": member(computed(dictionary(ref(typeReference("JSONValue"))))),
                "array": member(computed(array(ref(typeReference("JSONValue"))))),
                "string": member(computed(string())),
                "number": member(computed(number())),
                "boolean": member(computed(boolean())),
                "isNull": member(boolean()),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({
            // "ConvertJSON": func(typeReference("common", "String"), null, null, data(typeReference("PossibleResult"), false)),
            // "Convert": func(typeReference("JSONValue"), null, null, data(typeReference("Result"), false)),
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}