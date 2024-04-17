export class Book{
    constructor(title, originalTitle, description, pages, image){
        this.title = title;
        this.originalTitle = originalTitle;
        this.description = description;
        this.pages = pages;
        this.image = image;
    }

    getTitle() {
        return this.title;
    }

    getOriginalTitle() {
        return this.originalTitle;
    }

    getDescription() {
        return this.description;
    }

    getPages() {
        return this.pages;
    }

    getImage() {
        return this.image;
    }
}
