// Définir l'enum Music
// export enum Music {
//     JAZZ = "JAZZ",
//     ROCK = "ROCK"
// }
export enum Music {
    Rock = 2,
    Jazz = 4
}
// Définir la classe Musician
export class Musician {
    private _style?: Music;
    private _albums: Album[] = [];

    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        style?: Music
    ) {
        this._style = style;
    }

    // Accesseurs pour la propriété style
    get style(): Music | undefined {
        return this._style;
    }

    set style(value: Music | undefined) {
        this._style = value;
    }

    // Accesseurs pour la propriété albums
    get albums(): Album[] {
        return this._albums;
    }

    set albums(value: Album[]) {
        this._albums = value;
    }

    // Méthode pour ajouter un album
    addAlbum(album: Album) {
        this._albums.push(album);
    }

    // Méthode toString
    toString(): string {
        if (this._style) {
            return `${this.firstName} ${this.lastName} plays ${this._style}`;
        } else {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}

// Définir la classe JazzMusician qui hérite de Musician
export class JazzMusician extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age, Music.JAZZ);
    }
}

// Définir la classe RockStar qui hérite de Musician
export class RockStar extends Musician {
    constructor(firstName: string, lastName: string, age: number) {
        super(firstName, lastName, age, Music.ROCK);
    }
}



// Définir la classe Album
export class Album {
    constructor(public title: string) {}

    // Méthode toString
    toString(): string {
        return this.title;
    }
}

// Définir l'interface IMusician
export interface IMusician {
    addAlbum(album: Album): void;
}

// Définir l'interface ElementToString
export interface ElementToString {
    toString(): string;
}

// Définir la fonction display générique
export function display<T extends ElementToString>(elements: T[]): void {
    elements.forEach(element => {
        console.log(element.toString());
    });
}
