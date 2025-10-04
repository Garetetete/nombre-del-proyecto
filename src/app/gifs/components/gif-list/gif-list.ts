import { Component, input } from '@angular/core'; // Ya estás importando 'input'
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  selector: 'gif-list',
  // SOLUCIÓN: Quitamos 'input' de los imports. Solo importamos componentes que usaremos en el template.
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styles: ``
})
export class GifList {

  // SOLUCIÓN: Declarar la propiedad 'gifs' usando la función 'input()'.
  // El tipo esperado es un array de strings (las URLs que estás enviando desde TredingPage).
  public gifs = input<string[]>([]);
}