import { Injectable } from '@angular/core';
import * as Nedb from 'nedb';
/**
 *neDB数据库操作类
 * @export
 * @class DatabaseService
 */
@Injectable()
export abstract class DatabaseService<M> {

  constructor() {
  }
  public Paramter: M;
  /**
    * 数据库操作类
    */
  public ne_Db: Nedb;
  /**
   * 数据库参数
   */
  public ne_Options: Nedb.DataStoreOptions = this.ne_Options || {};



  connect(filename: string): void {
    this.ne_Options.filename = '../../assets/db/' + filename;
    this.ne_Options.autoload = true;
    this.ne_Db = new Nedb(this.ne_Options);
  }

  /**
   * 插入数据
   * @param {*} model 任意对象
   */
  insert(model: any): boolean {
    let result: boolean = true;

    this.ne_Db.insert(model, (err, ret) => {

      console.log(err);

      console.log(ret);

      if (err) {
        result = false;
      }

    });

    return result;
  }
}
