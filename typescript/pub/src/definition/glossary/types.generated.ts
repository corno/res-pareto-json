import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace T {
    
    export namespace JSONValue {
        
        export namespace array {
            
            export namespace C {
                
                export type A<GType> = T.JSONValue<GType>
            }
            
            export type C<GType> = pt.Array<T.JSONValue<GType>>
        }
        
        export type array<GType> = () => pt.Array<T.JSONValue<GType>>
        
        export namespace _lboolean {
            
            export type C<GType> = boolean
        }
        
        export type _lboolean<GType> = () => boolean
        
        export type isNull<GType> = boolean
        
        export namespace _lnumber {
            
            export type C<GType> = number
        }
        
        export type _lnumber<GType> = () => number
        
        export namespace _lobject {
            
            export namespace C {
                
                export type D<GType> = T.JSONValue<GType>
            }
            
            export type C<GType> = pt.Dictionary<T.JSONValue<GType>>
        }
        
        export type _lobject<GType> = () => pt.Dictionary<T.JSONValue<GType>>
        
        export namespace _lstring {
            
            export type C<GType> = string
        }
        
        export type _lstring<GType> = () => string
    }
    
    export type JSONValue<GType> = {
        readonly 'array': () => pt.Array<T.JSONValue<GType>>
        readonly 'boolean': () => boolean
        readonly 'isNull': boolean
        readonly 'number': () => number
        readonly 'object': () => pt.Dictionary<T.JSONValue<GType>>
        readonly 'string': () => string
    }
    
    export namespace PossibleResult {
        
        export type O<GType> = GType
    }
    
    export type PossibleResult<GType> = [ false ] | [ true, GType]
    
    export type Result<GType> = GType
}