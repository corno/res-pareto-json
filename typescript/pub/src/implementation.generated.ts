import { API } from "./api.generated"
import { $$ as icreateJSONConverter } from "./implementations/createJSONConverter.native"

export const $api: API = {
    'createJSONConverter': icreateJSONConverter,
}