import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"

export type CcreateJSONConverter = ($d: {
    readonly 'convert': gglo.FConvert
}) => gglo.FConvertJSON

export type API = {
    createJSONConverter: CcreateJSONConverter
}