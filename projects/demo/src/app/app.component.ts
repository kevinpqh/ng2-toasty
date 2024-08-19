import { Component } from '@angular/core';
import { ToastData, ToastOptions, ToastyConfig, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) { 
    // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
    // Possible values: default, bootstrap, material
    // this.toastyConfig.theme = 'material';
}
  addToast() {
    // Just add default Toast with title only
    this.toastyService.default('Hi there');
    // Or create the instance of ToastOptions
    var toastOptions:ToastOptions = {
        title: "My title",
        msg: "The message",
        showClose: true,
        timeout: 5000,
        theme: 'default',
        onAdd: (toast:ToastData) => {
            console.log('Toast ' + toast.id + ' has been added!');
        },
        onRemove: function(toast:ToastData) {
            console.log('Toast ' + toast.id + ' has been removed!');
        }
    };
    // Add see all possible types in one shot
    this.toastyService.info(toastOptions);
    this.toastyService.success(toastOptions);
    this.toastyService.wait(toastOptions);
    this.toastyService.error(toastOptions);
    this.toastyService.warning(toastOptions);
}
}
