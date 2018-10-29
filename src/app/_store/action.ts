/**
 * 行为类型定义
 */
export interface Action {
    /**
     * 行为类型
     */
    type?: string;
    /**
     * 数据载体
     */
    payload?: any;
}
