import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FConvert = <GPType>($: T.JSONValue<GPType>,) => T.Result<GPType>

export type FConvertJSON = <GPType>($: gcommon.T.String,) => T.PossibleResult<GPType>