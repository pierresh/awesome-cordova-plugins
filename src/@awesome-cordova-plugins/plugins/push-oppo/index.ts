import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'PushOppo',
  plugin: 'cordova-plugin-oppo-push', // npm package name, example: cordova-plugin-camera
  pluginRef: 'oppoPush', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: 'https://github.com/waitaction/cordova-plugin-oppo-push', // OPTIONAL install command, in case the plugin requires variables
  installVariables: ['APP_KEY', 'APP_SECRET'], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PushOppo extends AwesomeCordovaNativePlugin {

  @Cordova()
  register(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
