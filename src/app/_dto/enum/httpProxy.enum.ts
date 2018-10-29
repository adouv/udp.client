/**
 * http代理类型
 */
export enum HttpProxy {
    /**
     * token验证
     */
    AUTHZ = "/lw-authz-server",
    /**
     * 账户
     */
    ACCOUNT = "/lw-garden-server",
    /**
     * 园区
     */
    GARDEN = "/lw-garden-server",
    /**
     * 文件
     */
    FILE = "/lw-fileserver",
    /**
     * 班级
     */
    CLASSES_LIST_SERVER = "/lw-class-interaction"
}
