import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gifs } from '../../services/gifs';

// Definimos el array de URLs fuera de la clase para mantenerlo limpio,
// simulando los datos que obtendrías de un servicio.
const imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];

@Component({
    selector: 'app-treding-page',
    imports: [GifList],
    templateUrl: './treding-page.html',
    styles: ``
})
export default class TredingPage {
    gifService = inject(Gifs);

    public get gifs() {

        return imageUrls; 
    }
}