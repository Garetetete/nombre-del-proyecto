export interface GiphyResponse {
    data: []
}

export interface GiphyItem {
    id: string;
    title: string;
    images: GiphyItemImage
}

export interface GiphyItemImage{
    original: GyphyItemImageOriginal
}

export interface GyphyItemImageOriginal{
    url: string
}
