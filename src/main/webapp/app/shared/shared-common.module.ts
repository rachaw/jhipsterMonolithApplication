import { NgModule } from '@angular/core';

import { JhipsterMonolithApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterMonolithApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterMonolithApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterMonolithApplicationSharedCommonModule {}
