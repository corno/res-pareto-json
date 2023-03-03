import * as pd from 'pareto-core-data'

import {
    null_,
    array,
    string,
    reference,
    boolean,
    typeReference,
    dictionary, group, member, taggedUnion, types, func, data, interfaceReference, inf, method, type, number, glossaryParameter, optional, computed
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: mglossary.T.Glossary<string> = {
    'parameters': d({
        "Type": null,
    }),
    'types': d({
        "PossibleResult": type(optional(glossaryParameter("Type"))),
        "Result": type(glossaryParameter("Type")),
        "JSONValue": type(group({
            "object": member(computed(dictionary(reference("JSONValue")))),
            "array": member(computed(array(reference("JSONValue")))),
            "string": member(computed(string())),
            "number": member(computed(number())),
            "boolean": member(computed(boolean())),
            "isNull": member(boolean()),
        }))
    }),
    'interfaces': d({
    }),
    'functions': d({
        "ConvertJSON": func(typeReference("common", "String"), null, null, data(typeReference("PossibleResult"), false)),
        "Convert": func(typeReference("JSONValue"), null, null, data(typeReference("Result"), false))
    }),
}