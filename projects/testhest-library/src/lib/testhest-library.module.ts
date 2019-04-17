import {NgModule} from '@angular/core';

import {TesthestLibraryComponent} from './testhest-library.component';
import {TesthestBannerComponent} from './testhest-banner/testhest-banner.component';

@NgModule({
    declarations: [TesthestLibraryComponent, TesthestBannerComponent],
    imports: [],
    exports: [TesthestLibraryComponent, TesthestBannerComponent]
})
export class TesthestLibraryModule {
}
