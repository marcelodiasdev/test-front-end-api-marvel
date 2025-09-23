export interface CharacterCollectionItem {
  name: string;
  resourceURI: string;
}

export interface CharacterCollection {
  available: number;
  collectionURI: string;
  items: CharacterCollectionItem[];
  returned: number;
}

export interface CharacterFull {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };

  comics: CharacterCollection;
  series: CharacterCollection;
  stories: CharacterCollection;
  events: CharacterCollection;
}
