
/**
 * 存储辅助器
 */

import { sys } from "cc";
import { FYStorageHelperBase } from "./FYStorageHelperBase";

export class DefaultStorageHelper extends FYStorageHelperBase {
    /**
     * 数据数量
     */
    public get count(): number {
        return sys.localStorage.length;
    }
    /**
     * 加载
     */
    public load(): boolean {
        return true;
    }
    /**
     * 保存
     */
    public save(): boolean {
        return true;
    }
    /**
     * 设置数值
     * @param key 关键字
     * @param value 数据
     */
    public setNumber(key: string, value: number) {
        sys.localStorage.setItem(key, value.toString());
    }
    /**
     * 获取数值
     * @param key 关键字
     * @param defaultValue 默认值
     */
    public getNumber(key: string, defaultValue?: number): number {
        let value = sys.localStorage.getItem(key);
        if (!value) {
            return defaultValue;
        }

        return Number(value);
    }
    /**
     * 设置字符串
     * @param key 关键字
     * @param value 数据
     */
    public setString(key: string, value: string) {
        sys.localStorage.setItem(key, value);
    }
    /**
     * 获取字符串
     * @param key 关键字
     * @param defaultValue 默认值
     */
    public getString(key: string, defaultValue?: string): string {
        let value = sys.localStorage.getItem(key);
        if (!value) {
            return defaultValue;
        }
        return value;
    }
    /**
     * 获取对象
     * @param key 关键字
     */
    public setObject(key: string, value: Object) {
        if (!value) {
            return;
        }

        sys.localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * 获取对象
     * @param key 关键字
     * @param defaultValue 默认值
     */
    public getObject(key: string, defaultValue?: Object): Object {
        let value = sys.localStorage.getItem(key);
        if (!value) {
            return defaultValue;
        }

        return JSON.parse(value);
    }
    /**
     * 移除
     * @param key 关键字
     */
    public remove(key: string) {
        sys.localStorage.removeItem(key);
    }
    /**
     * 清空
     */
    public clear() {
        sys.localStorage.clear();
    }
}