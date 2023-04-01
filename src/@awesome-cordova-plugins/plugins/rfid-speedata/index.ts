import { Injectable } from '@angular/core';
import {
  Plugin,
  Cordova,
  CordovaProperty,
  CordovaInstance,
  InstanceProperty,
  AwesomeCordovaNativePlugin,
} from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'RfidSpeedata',
  plugin: 'com.speedata.cordova.plugin.UHF', // npm package name, example: cordova-plugin-camera
  pluginRef: 'uhf', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/pierresh/CordovaPluginUHF', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'], // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class RfidSpeedata extends AwesomeCordovaNativePlugin {
  /** 初始化串口上电 */
  @Cordova()
  openDev(): Promise<'success'> {
    return;
  }

  /** 关闭串口下电 */
  @Cordova()
  closeDev(): Promise<any> {
    return;
  }

  /** 读卡 */
  @Cordova()
  readArea(tags: []): Promise<any> {
    return;
  }

  /** 拿到读取数据 */
  @Cordova()
  getReadAreaResult(): Promise<any> {
    return;
  }

  /** 开始盘点 */
  @Cordova()
  inventoryStart(): Promise<'success'> {
    return;
  }

  /** 停止盘点 */
  @Cordova()
  inventoryStop(): Promise<'success'> {
    return;
  }

  /**
   * 拿到盘点数据
   * returns: 成功回调返回json字符串 “epc”卡片epc（16进制）“rssi” 信号强度
   */
  @Cordova({
    observable: true,
    callbackOrder: 'reverse'
  })
  getInventoryResult(successCallback: Function): Observable<any> {
    return;
  }

  /** 写卡 */
  @Cordova()
  writeArea(tags: []): Promise<any> {
    return;
  }

  /** 拿到读取数据 */
  @Cordova()
  getWriteAreaResult(tags: []): Promise<any> {
    return;
  }

  /** 设置天线功率（3992模块传参0代表false 1代表true）,（旗联-FLX模块取值为19-30）其他0-30 */
  @Cordova()
  setAntennaPower(tags: []): Promise<any> {
    return;
  }

  /** 读取当前天线功率值 */
  @Cordova()
  getAntennaPower(): Promise<any> {
    return;
  }

  /** 设置频率区域 */
  @Cordova()
  setFreqRegion(tags: []): Promise<any> {
    return;
  }

  /** 获取当前频率区域 */
  @Cordova()
  getFreqRegion(): Promise<any> {
    return;
  }

  /** 选卡（掩码） */
  @Cordova()
  selectCard(tags: []): Promise<any> {
    return;
  }

  /** 设置频率区域 */
  @Cordova()
  setQueryTagGroup(tags: []): Promise<any> {
    return;
  }

  /** 获取当前频率区域 */
  @Cordova()
  getQueryTagGroup(): Promise<any> {
    return;
  }
}
