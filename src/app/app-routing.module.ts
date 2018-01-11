import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GamesPageComponent } from "./components/game/games-page/games-page.component";
import { UsersComponent } from "./components/user/users-page.component";

const routes: Routes = [
	{
		path: '',
		component: UsersComponent
	},
	{
		path: 'games',
		component: GamesPageComponent
	},
	{
		path: 'games/:id',
		component: GamesPageComponent
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
