import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace JSONValue {
        
        export namespace array {
            
            export namespace C {
                
                export type A<GPType> = T.JSONValue<GPType>
            }
            
            export type C<GPType> = pt.Array<T.JSONValue<GPType>>
        }
        
        export type array<GPType> = () => pt.Array<T.JSONValue<GPType>>
        
        export namespace _lboolean {
            
            export type C<GPType> = boolean
        }
        
        export type _lboolean<GPType> = () => boolean
        
        export type isNull<GPType> = boolean
        
        export namespace _lnumber {
            
            export type C<GPType> = number
        }
        
        export type _lnumber<GPType> = () => number
        
        export namespace _lobject {
            
            export namespace C {
                
                export type D<GPType> = T.JSONValue<GPType>
            }
            
            export type C<GPType> = pt.Dictionary<T.JSONValue<GPType>>
        }
        
        export type _lobject<GPType> = () => pt.Dictionary<T.JSONValue<GPType>>
        
        export namespace _lstring {
            
            export type C<GPType> = string
        }
        
        export type _lstring<GPType> = () => string
    }
    
    export type JSONValue<GPType> = {
        readonly 'array': () => pt.Array<T.JSONValue<GPType>>
        readonly 'boolean': () => boolean
        readonly 'isNull': boolean
        readonly 'number': () => number
        readonly 'object': () => pt.Dictionary<T.JSONValue<GPType>>
        readonly 'string': () => string
    }
    
    export namespace PossibleResult {
        
        export type O<GPType> = GPType
    }
    
    export type PossibleResult<GPType> = [ false ] | [ true, GPType]
    
    export type Result<GPType> = GPType
}