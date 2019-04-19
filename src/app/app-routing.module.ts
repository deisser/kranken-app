import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NSEmptyOutletComponent } from 'nativescript-angular';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/(homeTab:home/default//browseTab:browse/default//settingsTab:settings/default)',
		pathMatch: 'full'
	},

	{
		path: 'home',
		component: NSEmptyOutletComponent,
		loadChildren: '~/app/home/home.module#HomeModule',
		outlet: 'homeTab'
	},
	{
		path: 'browse',
		component: NSEmptyOutletComponent,
		loadChildren: '~/app/browse/browse.module#BrowseModule',
		outlet: 'browseTab'
	},
	{
		path: 'settings',
		component: NSEmptyOutletComponent,
		loadChildren: '~/app/settings/settings.module#SettingsModule',
		outlet: 'settingsTab'
	}
];

@NgModule({
	imports: [ NativeScriptRouterModule.forRoot(routes) ],
	exports: [ NativeScriptRouterModule ]
})
export class AppRoutingModule {}
