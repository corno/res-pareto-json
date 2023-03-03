import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gthis from "./glossary"

export type CcreateJSONConverter = ($d: {
    readonly 'convert': gthis.FConvert
}) => gthis.FConvertJSON

export type API = {
    createJSONConverter: CcreateJSONConverter
}