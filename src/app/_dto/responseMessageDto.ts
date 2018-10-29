/**
 *统一响应实体
 *
 * @export
 * @interface ResponseMessageDto
 */
export interface ResponseMessageDto {
    /**
     * 数据
     */
    Data?: any;
    /**
     * 消息
     */
    Message?: string;
    /**
     * 编码
     */
    ErrorCode?: string;
    /**
     * 是否成功
     */
    IsSuccess?: boolean;
    /**
     * 状态码
     */
    Status?: number;
}