import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {}

export namespace F {
    
    export type Convert = <GType>($: T.JSONValue<GType>,) => T.Result<GType>
    
    export type ConvertJSON = <GType>($: g_common.T.String,) => T.PossibleResult<GType>
}