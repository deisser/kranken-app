import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { SearchRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsCardComponent } from './settings-card/settings-card.component';
import { SettingsCardItemComponent } from './settings-card/card-item/card-item.component';

@NgModule({
	imports: [ NativeScriptCommonModule, SearchRoutingModule ],
	declarations: [ SettingsComponent, SettingsCardComponent, SettingsCardItemComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class SettingsModule {}
