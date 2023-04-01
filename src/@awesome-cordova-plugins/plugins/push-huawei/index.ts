
import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'PushHuawei',
  plugin: 'cordova-plugin-huawei-push', // npm package name, example: cordova-plugin-camera
  pluginRef: 'huaweiPush', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/waitaction/cordova-plugin-huawei-push', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PushHuawei extends AwesomeCordovaNativePlugin {

  @Cordova()
  register(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
