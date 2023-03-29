import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace D {
    
    export type createJSONConverter = {
        readonly 'convert': g_this.SYNC.A.F.Convert
    }
}

export namespace A {
    
    export type createJSONConverter = ($d: D.createJSONConverter, ) => g_this.SYNC.A.F.ConvertJSON
}

export type API = {
    readonly 'createJSONConverter': A.createJSONConverter
}