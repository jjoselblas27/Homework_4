import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonPage } from './pokemon.page';

const routes: Routes = [
  {
    path: '',
    component: PokemonPage
  },
  {
    path: 'view/:id',
    loadChildren: () => import('./view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'delete/:id',
    loadChildren: () => import('./delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonPageRoutingModule {}
