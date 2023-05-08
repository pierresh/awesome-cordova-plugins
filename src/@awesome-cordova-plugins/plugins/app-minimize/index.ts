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

/**
 * @name App Minimize
 */
@Plugin({
  pluginName: 'AppMinimize',
  plugin: 'cordova-plugin-appminimize',
  pluginRef: 'window.plugins.appMinimize',
  repo: 'https://github.com/tomloprod/cordova-plugin-appminimize',
  install: '',
  installVariables: [],
  platforms: ['Android'],
})
@Injectable()
export class AppMinimize extends AwesomeCordovaNativePlugin {
  @Cordova()
  minimize(): Promise<void> {
    return;
  }
}
