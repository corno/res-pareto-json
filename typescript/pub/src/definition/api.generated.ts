import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export type createJSONConverter = ($d: {
    readonly 'convert': g_this.F.Convert
}) => g_this.F.ConvertJSON

export type API = {
    createJSONConverter: createJSONConverter
}