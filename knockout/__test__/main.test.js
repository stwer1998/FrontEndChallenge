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

const responce = {
    "feed": {
        "author": { "name": { "label": "iTunes Store" }, "uri": { "label": "http://www.apple.com/itunes/" } }, "entry": [
            {
                "im:name": { "label": "Encanto (Original Motion Picture Soundtrack)" }, "im:image": [
                    { "label": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/55x55bb.png", "attributes": { "height": "55" } },
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/60x60bb.png", "attributes": { "height": "60" } },
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/170x170bb.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "44" }, "im:price": { "label": "$7.99", "attributes": { "amount": "7.99", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2021 Walt Disney Records" }, "title": { "label": "Encanto (Original Motion Picture Soundtrack) - Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532?uo=2" } }, "id": { "label": "https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532?uo=2", "attributes": { "im:id": "1594677532" } }, "im:artist": { "label": "Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow", "attributes": { "href": "https://music.apple.com/us/artist/lin-manuel-miranda/329027198?uo=2" } }, "category": { "attributes": { "im:id": "1166", "term": "Musicals", "scheme": "https://music.apple.com/us/genre/music-soundtrack-musicals/id1166?uo=2", "label": "Musicals" } }, "im:releaseDate": { "label": "2021-11-19T00:00:00-07:00", "attributes": { "label": "November 19, 2021" } }
            },
            {
                "im:name": { "label": "Control" }, "im:image": [
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/ed/b0/20/edb02000-b77f-22f4-6b7f-c46f62d4517c/00602547592361.rgb.jpg/55x55bb.png", "attributes": { "height": "55" } },
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ed/b0/20/edb02000-b77f-22f4-6b7f-c46f62d4517c/00602547592361.rgb.jpg/60x60bb.png", "attributes": { "height": "60" } },
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/ed/b0/20/edb02000-b77f-22f4-6b7f-c46f62d4517c/00602547592361.rgb.jpg/170x170bb.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "9" }, "im:price": { "label": "$4.99", "attributes": { "amount": "4.99", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2015 A&M Records" }, "title": { "label": "Control - Janet Jackson" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://music.apple.com/us/album/control/1440831636?uo=2" } }, "id": { "label": "https://music.apple.com/us/album/control/1440831636?uo=2", "attributes": { "im:id": "1440831636" } }, "im:artist": { "label": "Janet Jackson", "attributes": { "href": "https://music.apple.com/us/artist/janet-jackson/1272779?uo=2" } }, "category": { "attributes": { "im:id": "14", "term": "Pop", "scheme": "https://music.apple.com/us/genre/music-pop/id14?uo=2", "label": "Pop" } }, "im:releaseDate": { "label": "1986-02-04T00:00:00-07:00", "attributes": { "label": "February 4, 1986" } }
            },
            {
                "im:name": { "label": "Worship in the Word (Live)" }, "im:image": [
                    { "label": "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/ee/8e/5b/ee8e5b71-3ad3-00bc-9e5c-490d4b035fa8/638865212643.jpg/55x55bb.png", "attributes": { "height": "55" } },
                    { "label": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/ee/8e/5b/ee8e5b71-3ad3-00bc-9e5c-490d4b035fa8/638865212643.jpg/60x60bb.png", "attributes": { "height": "60" } },
                    { "label": "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/ee/8e/5b/ee8e5b71-3ad3-00bc-9e5c-490d4b035fa8/638865212643.jpg/170x170bb.png", "attributes": { "height": "170" } }], "im:itemCount": { "label": "10" }, "im:price": { "label": "$9.90", "attributes": { "amount": "9.90", "currency": "USD" } }, "im:contentType": { "im:contentType": { "attributes": { "term": "Album", "label": "Album" } }, "attributes": { "term": "Music", "label": "Music" } }, "rights": { "label": "℗ 2022 The Worship Initiative" }, "title": { "label": "Worship in the Word (Live) - Shane & Shane & Kingdom Kids" }, "link": { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://music.apple.com/us/album/worship-in-the-word-live/1596606739?uo=2" } }, "id": { "label": "https://music.apple.com/us/album/worship-in-the-word-live/1596606739?uo=2", "attributes": { "im:id": "1596606739" } }, "im:artist": { "label": "Shane & Shane & Kingdom Kids", "attributes": { "href": "https://music.apple.com/us/artist/shane-shane/15773765?uo=2" } }, "category": { "attributes": { "im:id": "1094", "term": "CCM", "scheme": "https://music.apple.com/us/genre/music-christian-ccm/id1094?uo=2", "label": "CCM" } }, "im:releaseDate": { "label": "2022-01-28T00:00:00-07:00", "attributes": { "label": "January 28, 2022" } }
            }], "updated": { "label": "2022-01-31T21:10:28-07:00" }, "rights": { "label": "Copyright 2008 Apple Inc." }, "title": { "label": "iTunes Store: Top Albums" }, "icon": { "label": "http://itunes.apple.com/favicon.ico" }, "link": [
                { "attributes": { "rel": "alternate", "type": "text/html", "href": "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=1&popId=11" } },
                { "attributes": { "rel": "self", "href": "https://mzstoreservices-int-st.itunes.apple.com/us/rss/topalbums/limit=100/json" } }], "id": { "label": "https://mzstoreservices-int-st.itunes.apple.com/us/rss/topalbums/limit=100/json" }
    }
};

test('Check constructor', ()=>{

    const album = new Album(responce.feed.entry[0]);
    album.artist = 'Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow';
    album.images = 'https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/94/4d/9a/944d9a8d-0549-f537-5706-5b083bd84a7d/21UM1IM38949.rgb.jpg/170x170bb.png';
    album.name = 'Encanto (Original Motion Picture Soundtrack)';
    album.link = 'https://music.apple.com/us/album/encanto-original-motion-picture-soundtrack/1594677532?uo=2';
    album.category = 'Musicals';
    album.price = '$7.99';
    album.title = 'Encanto (Original Motion Picture Soundtrack) - Lin-Manuel Miranda, Germaine Franco, Stephanie Beatriz, Olga Merediz & Jessica Darrow';
    album.filterProperty = `${album.title} ${album.category}`.toLocaleLowerCase();

    expect(()=>{responce.feed.entry.map(x=>new Album(x))}).not.toThrow();
    expect(new Album(responce.feed.entry[0])).toEqual(album);
    expect(new Album(responce.feed.entry[1])).not.toEqual(album);
});

test('Check filter', ()=>{
    const albums = responce.feed.entry.map(x=>new Album(x));
    expect(albums.filter(x=>x.filter(albums[0].title))).toEqual([albums[0]])
    expect(albums.filter(x=>x.filter('not album text'))).toEqual([])
})