import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';

@Plugin({
  pluginName: 'PushVivo',
  plugin: 'cordova-plugin-vivo-push', // npm package name, example: cordova-plugin-camera
  pluginRef: 'VivoPush', // the variable reference to call the plugin, example: navigator.geolocation
  repo: '', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class PushVivo extends AwesomeCordovaNativePlugin {

  @Cordova()
  register(): Promise<any> {
    return; // We add return; here to avoid any IDE / Compiler errors
  }

}
