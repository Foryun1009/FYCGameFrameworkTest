
import { _decorator, Asset } from 'cc';
import { FYComponent } from '../Base/FYComponent';
import { FYEntry } from '../Base/FYEntry';
import { FYEnum } from '../Define/FYEnum';
import { FYResourceModule } from './FYResourceModule';
const { ccclass, menu } = _decorator;

/**
 * 资源组件
 */

@ccclass('FYResourceComponent')
@menu('FY/FYResourceComponent')
export class FYResourceComponent extends FYComponent {

    private _resource: FYResourceModule;
    /** 资源模块 */
    public get resource(): FYResourceModule {
        if (!this._resource) {
            this._resource = FYEntry.getModule(FYResourceModule);
        }

        return this._resource
    }

    onLoad() {
        super.onLoad();
    }

    /**
     * 根据资源名获取资源路径
     * @param resourceName 资源名
     * @returns 
     */
    public async getResourcePath(resourceName: string): Promise<string> {
        return await this.resource.getResourcePath(resourceName);
    }

    /**
     * 根据路径加载资源
     * @param path 资源路径
     * @returns 
     */
    public async loadPath<T extends Asset>(path: string): Promise<T> {
        return this.resource.loadPath<T>(path);
    }

    /**
     * 根据资源名加载资源
     * @param name 资源名
     * @param cacheType 是否需要缓存，资源缓存类型
     * @param extendPath 扩展路径，有些资源里面还有子资源，例如图片里面有spriteFrame和texture
     * @returns 
     */
    public async load<T extends Asset>(name: string, cacheType: FYEnum.ResourceCacheType = FYEnum.ResourceCacheType.None, extendPath?: string): Promise<T> {
        return this.resource.load<T>(name, cacheType, extendPath);
    }

    /**
     * 预加载资源
     * @param nameList 预加载资源名列表
     */
    public async preload(nameList: Array<string>) {
        this.resource.preload(nameList);
    }

    public async release<T extends Asset>(name: string, extendPath?: string) {
        this.resource.release<T>(name, extendPath);
    }
}