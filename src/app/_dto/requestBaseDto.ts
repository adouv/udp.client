/**
 *统一请求实体
 *
 * @export
 * @interface RequestBaseDto
 */
export interface RequestBaseDto {
    /**
     * 时间戳
     */
    TimesTamp?: string;
    /**
     * mac
     */
    Mac?: string;
    /**
     * ip
     */
    Ip?: string;
    /**
     * 签名
     */
    Sign?: string;
    /**
     * 版本
     */
    Version?: string;
    /**
     * 当前请求客户端的Token
     */
    Token?: string;
    /**
     * 数据验证是否成功
     */
    IsValid?: boolean;
}