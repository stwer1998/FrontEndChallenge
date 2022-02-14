const loader = document.getElementById('loader');
const content = document.getElementById('content');
const errormsg = document.getElementById('error-msg');
const errorContainer = document.getElementById('errorContainer');

async function getAlbums() {
    return await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
        .then(x => x.json())
        .then(x => x.feed.entry.map(entry => new Album(entry)));
}

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

class Albums {
    constructor(albums) {
        let self = this;
        self.filter = ko.observable("");
        self.albums = ko.dependentObservable(function () {
            const filter = self.filter();
            return ko.utils.arrayFilter(albums, function (album) {
                return filter ? album.filter(filter) : true;
            });
        }, self).extend({ throttle: 800 });//wait type
    }
}

async function Init() {
    try {
        loaderOn();
        let albums = await getAlbums();
        let viewModel = new Albums(albums);
        ko.applyBindings(viewModel);
        loaderOff();
    }
    catch (error) {
        console.log(error);
        errorMsg();
    }
}

function errorMsg(errorMsg = 'Please refresh this page there was an error!') {
    content.style.display = 'none';
    loader.style.display = 'none';
    errorContainer.style.display = 'flex';
    errormsg.innerText = errorMsg;
}

function loaderOn() {
    content.style.display = 'none';
    loader.style.display = 'flex';
}

function loaderOff() {
    content.style.display = 'block';
    loader.style.display = 'none';
}

Init();