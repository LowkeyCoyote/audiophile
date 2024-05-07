 export function getImageURL(name : string){
    console.log(import.meta.url)
     return new URL(`@assets/shared/product/${name}/image-category-page-preview-desktop.jpg`, import.meta.url).href
}


