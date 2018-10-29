/* SystemJS module definition */
/// <reference path="../node_modules/@types/node/index.d.ts" />
/// <reference types="@types/node" />
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
/**
 * Window对象全局注册
 */
declare var window: Window;
interface Window {
  process: any;
  require: any;
  global: any;
  __dirname: string;
}