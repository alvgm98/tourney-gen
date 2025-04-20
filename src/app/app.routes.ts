import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LeagueComponent } from './pages/league/league.component';
import { TournamentComponent } from './pages/tournament/tournament.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'league', component: LeagueComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: '**', redirectTo: 'app', pathMatch: 'full' }
];
