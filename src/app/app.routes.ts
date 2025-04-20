import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CreateLeagueComponent } from './pages/create-league/create-league.component';
import { CreateClassicTourneyComponent } from './pages/create-classic-tourney/create-classic-tourney.component';
import { CreateSwissTourneyComponent } from './pages/create-swiss-tourney/create-swiss-tourney.component';
import { CreateGroupTourneyComponent } from './pages/create-group-tourney/create-group-tourney.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'league', component: CreateLeagueComponent },
  { path: 'classic', component: CreateClassicTourneyComponent },
  { path: 'swiss', component: CreateSwissTourneyComponent },
  { path: 'group', component: CreateGroupTourneyComponent },
  { path: '**', redirectTo: 'app', pathMatch: 'full' }
];
