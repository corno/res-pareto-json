import * as pi from 'pareto-core-internals'
import * as pt from 'pareto-core-types'

import * as api from "../api"

export const $$: api.CcreateJSONConverter = ($d) => {
    return <T>($: string) => {
        try {
            const json = JSON.parse($)

            function createJSONValue($: any, path: string) : api.T.JSONValue<T> {
                return {
                    'array': () => {
                        if ($ instanceof Array) {
                            return pi.wrapRawArray($.map(($, index) => {
                                return createJSONValue($, `${path}[${index}]`)
                            }))
                        }
                        pi.panic(`not an array: ${path}`)
                    },
                    'object': () => {
                        if (typeof $ === "object" && !($ instanceof Array)) {
                            const temp: {[key:string]:api.T.JSONValue<T>} = {}
                            Object.keys($).forEach((key) => {
                                temp[key] = createJSONValue($[key], `${path}.${key}`)
                            })
                            return pi.wrapRawDictionary($)
                        }
                        pi.panic(`not an object: ${path}`)
                    },
                    'boolean': () => {
                        if (typeof $ === "boolean") {
                            return $
                        }
                        pi.panic(`not a boolean: ${path}`)
                    },
                    'string': () => {
                        if (typeof $ === "string") {
                            return $
                        }
                        pi.panic(`not a boolean: ${path}`)
                    },
                    'number': () => {
                        if (typeof $ === "number") {
                            return $
                        }
                        pi.panic(`not a boolean: ${path}`)
                    },
                    'isNull': $ === null
                }
            }
            return [true, $d.convert<T>(createJSONValue(json, ""))]
        } catch (e) {
            return [false]
        }
    }
}