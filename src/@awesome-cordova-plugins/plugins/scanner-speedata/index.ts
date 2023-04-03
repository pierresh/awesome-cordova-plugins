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
  pluginName: 'ScannerSpeedata',
  plugin: 'com.speedata.cordova.plugin.scanner',
  pluginRef: 'scanner',
  repo: 'git+ssh://dev.valueapex.com/srv/git/cordova-plugins/speedata_scanner.git',
  install: '',
  installVariables: [],
  platforms: ['Android'],
})
@Injectable()
export class ScannerSpeedata extends AwesomeCordovaNativePlugin {
  /**
   * 函数原型 startScan: function (successCallback, errorCallback)
   * 功能描述 开始扫描（单次）
   * 参数描述
   * successCallback 开始扫描成功回调
   * errorCallback 开始扫描失败回调
   */
  @Cordova()
  startScan(): Promise<'success'> {
    return;
  }

  /**
   * 函数原型 stopScan: function (successCallback, errorCallback)
   * 功能描述 停止扫描
   * 参数描述
   * successCallback 停止扫描成功回调
   * errorCallback 停止扫描失败回调
   */
  @Cordova()
  stopScan(): Promise<'success'> {
    return;
  }

  /**
   * 函数原型 repeatScan: function (successCallback, errorCallback)
   * 功能描述 打开自动扫描（连续扫描）
   * 参数描述
   * successCallback 打开自动扫描成功回调
   * errorCallback 打开自动扫描失败回调
   */
  @Cordova()
  repeatScan(): Promise<'success'> {
    return;
  }

  /**
   * 函数原型 cancelRepeat: function (successCallback, errorCallback)
   * 功能描述 关闭自动扫描（退出连续扫描状态）
   * 参数描述
   * successCallback 关闭自动扫描成功回调
   * errorCallback 关闭自动扫描失败回调
   */
  @Cordova()
  cancelRepeat(): Promise<any> {
    return;
  }

  /**
   * 函数原型 getScanbarcode: function (successCallback, errorCallback)
   * 功能描述 获取扫描结果
   * 参数描述
   * successCallback 获取扫描结果成功回调
   * errorCallback 获取扫描结果失败回调
   * sendData 一组string字符串，最新的扫描结果
   */
  @Cordova()
  getScanbarcode(): Promise<any> {
    return;
  }

  /**
   * 函数原型 getScanResult: function (successCallback, errorCallback)
   * 功能描述 自动获取扫描结果，不触发success
   * 参数描述 successCallback 获取扫描结果成功回调
   * errorCallback 获取扫描结果失败回调
   * sendData 一组string字符串，最新的扫描结果
   */
  @Cordova()
  getScanResult(): Promise<string> {
    return;
  }
}
