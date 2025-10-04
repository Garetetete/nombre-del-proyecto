import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeaderComponent } from '../../components/side-menu/side-menu-header/side-menu-header.component';
import { SideMenuOptionsComponent } from '../../components/side-menu/side-menu-options/side-menu-options.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true, // Asumimos que es standalone si usas 'imports:' así
  imports: [
    RouterOutlet, // 👈 Se lista la CLASE de TypeScript, no la etiqueta HTML.
    SideMenuHeaderComponent,
    SideMenuOptionsComponent
  ],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
