
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as mtest from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub"

export const $$: api.CgetTestSet = () => {
    const builder = ps.createUnsafeDictionaryBuilder<mtest.T.TestElement>()

    type Foo = number

    const result = pub.$a.convertJSON({
        'convert': ($) => {
            return $.number()
        }
    })(`42`)

    if (result[0] === true) {
        pd.logDebugMessage(`>>>>${result[1]}`)
    }


    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}