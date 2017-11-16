import { LABEL_YES, LABEL_NO } from "../Constant"

export default class UtilHelper {

    static showYesNo(value) {
        return value ? LABEL_YES : LABEL_NO
    }
}
