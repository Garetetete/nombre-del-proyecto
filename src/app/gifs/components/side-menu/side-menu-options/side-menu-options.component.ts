import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface MenuOption {
  label: string;
  sublabel: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink],
  
  templateUrl: './side-menu-options.component.html',
  styles: ``
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [

  {
  label: 'Treding',
  sublabel: 'Gifs Populares',
  icon: 'fa solid fa-chart-line',
  route: '/dashboard/treding'
  },
    {
  label: 'Search',
  sublabel: 'Buscardor gifs',
  icon: 'fa solid fa-magnifying-glass',
  route: '/dashboard/search'
  }
]
}
