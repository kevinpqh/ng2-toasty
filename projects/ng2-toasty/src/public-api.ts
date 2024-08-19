/*
 * Public API Surface of ng2-toasty
 */

import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';

export * from './lib/toasty.service';
export * from './lib/toasty.component';
export * from './lib/toast.component';
export * from './lib/shared';

import { ToastyComponent } from './lib/toasty.component';
import { ToastComponent } from './lib/toast.component';
import { SafeHtmlPipe } from './lib/shared';
import { ToastyService, ToastyConfig, toastyServiceFactory } from './lib/toasty.service';

export let providers = [
    ToastyConfig,
    { provide: ToastyService, useFactory: toastyServiceFactory, deps: [ToastyConfig] }
];

@NgModule({
    imports: [CommonModule],
    declarations: [ToastComponent, ToastyComponent, SafeHtmlPipe],
    exports: [ ToastComponent, ToastyComponent],
    providers: providers
})
export class ToastyModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: ToastyModule,
            providers: providers
        };
    }
}