/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
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
 * @name Push Notifications
 * @description
 * Simple plugin of Cordova for Push Notification in iOS and Android.
 * You will be able to receive a device token using Google services (Firebase Cloud Messages) and Apple (Apple Push Notification) to send push notifications.
 */
@Plugin({
  pluginName: 'PushNotifications',
  plugin: 'cordova-plugin-push-notifications',
  pluginRef: 'window.pushNotification',
  repo: 'https://github.com/Maxim-Kolmogorov/cordova-plugin-push-notifications',
  install: '',
  installVariables: [],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class PushNotifications extends AwesomeCordovaNativePlugin {
  /**
   * @return {Promise<string>} Returns a promise that resolves the device token
   */
  @Cordova()
  registration(): Promise<string> {
    return;
  }

  /**
   * @return {Promise<any>} Returns a promise that resolves a payload
   */
  @Cordova()
  tapped(): Promise<any> {
    return;
  }
}
