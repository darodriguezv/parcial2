export class Anime {
    id:number;
    name:string;
    description: string;
    rating: string;
    episode:number;
    categorie: string;
    img: string;
    studio: string;
    
    constructor(
        id:number,
        name:string,
        description: string,
        rating: string,
        episode:number,
        categorie: string,
        img: string,
        studio: string
    ){
        this.id = id;
        this.categorie = categorie;
        this. description = description;
        this.name = name;
        this.rating = rating;
        this.episode = episode;
        this.img = img
        this.studio = studio
    }


}
