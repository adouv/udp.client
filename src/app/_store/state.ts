import { AuthRequestDto } from '../_dto/account/request/authRequest.Dto';
/**
 * 统一状态管理
 *
 * @export
 * @interface State
 */
export interface State {
    /**
     * 列表
     */
    list?: AuthRequestDto[];
}
