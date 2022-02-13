class Album {
    constructor(album) {
        this.images = album['im:image'][2].label,
            this.name = album["im:name"].label,
            this.link = album.link.attributes.href,
            this.artist = album['im:artist'].label,
            this.category = album.category.attributes.term,
            this.price = album['im:price'].label,
            this.title = album.title.label,
            this.filterProperty = `${album.title.label} ${album.category.attributes.term}`.toLocaleLowerCase()
    }

    filter(filterValue) {
        return this.filterProperty.indexOf(filterValue.trim().toLowerCase()) >= 0;
    }
}

async function getAlbums() {
    return await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(x => x.json())
        .then(x => x.feed.entry.map(entry => new Album(entry)));
}

let albums;

async function Init(){
    albums = await getAlbums();
}

const fetchWaitTime = 5000;


describe("knockout e2e test", () => {
    beforeEach(() => {
      cy.visit("../index.html");
      Init();
      cy.wait(fetchWaitTime);
    });

    it("check fetch and count albums", ()=>{
        cy.get(".albums__album")
        .should("have.length", albums.length)
    })

    it("check content (title)", ()=>{
        cy.get(".album__title")
        .each((item)=>{
            return albums.filter(x=>x.filter(item.text()))
        })
    })

    it("check search", ()=>{
        cy.get(".search").type("pop");
        cy.wait(1000);
        cy.get(".albums__album")
        .should("have.length", albums.filter(x=>x.filter("pop")).length)
        cy.get(".search").clear();
        cy.wait(1000);
        cy.get(".albums__album")
        .should("have.length", albums.length)
        cy.get(".search").type("rock");
        cy.wait(1000);
        cy.get(".albums__album")
        .should("have.length", albums.filter(x=>x.filter("rock")).length)
        cy.get(".search").clear();
    })
});
  