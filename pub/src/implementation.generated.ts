import { API } from "./api"
import { $$ as icreateJSONConverter } from "./implementations/createJSONConverter.native"

export const $a: API = {
    'createJSONConverter': icreateJSONConverter,
}