import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"

export type CconvertJSON = ($d: {
    readonly 'convert': glo.FConvert
}) => glo.FConvertJSON

export type API = {
    convertJSON: CconvertJSON
}