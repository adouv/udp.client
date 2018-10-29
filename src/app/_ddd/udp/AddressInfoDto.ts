/**
 * 监听UDP地址信息
 */
export interface AddressInfoDto {
    /**
     * IP地址
     */
    address: string;
    /**
     * 家庭
     */
    family: string;
    /**
     * 端口号
     */
    port: number;
    /**
     * 大小
     */
    size: number;
}
