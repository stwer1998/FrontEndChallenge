/* eslint-disable @typescript-eslint/no-unused-expressions */
export class Album {
  image: string;
  name: string;
  link: string;
  artist: string;
  category: string;
  price: number;
  id: number;
  title: string;
  release: Date;
  artistLink: string;
  categotyLink: string;
  amountSongs: number;
  rights: string;

  constructor(album: any) {
    this.image = album["im:image"][2].label;
    this.name = album["im:name"].label;
    this.title = album.title.label;
    this.link = album.link.attributes.href;
    this.artist = album["im:artist"].label;
    this.artistLink = album["im:artist"]?.attributes?.href;
    this.category = album.category.attributes.term;
    this.categotyLink = album.category.attributes.scheme;
    this.price = Number(
      album["im:price"].label.substring(1, album["im:price"].label.length)
    );
    this.id = Number(album.id.attributes["im:id"]);
    this.release = new Date(album["im:releaseDate"].label);
    this.amountSongs = Number(album["im:itemCount"].label);
    this.rights = album.rights.label;
  }

  filter(params: string): boolean {
    return this.title.toLowerCase().indexOf(params.trim().toLowerCase()) >= 0;
  }
}
