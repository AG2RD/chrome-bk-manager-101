import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from '../feature/main/main.component';
import { PopupComponent } from '../feature/popup/popup.component';

const routes: Routes = [
  { path: 'popup', component: PopupComponent },
  {
    path: 'main',
    component: MainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
