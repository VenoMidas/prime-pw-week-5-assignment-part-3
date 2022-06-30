console.log('***** Music Collection *****')

// for album collection
const collection = [];
// to test logic with an empty array
const emptyCollection = [];
// to test logic with only 1 item in array
const sadCollection = [{title: 'test title', artist: 'test artist', year: 2022}];

/**
 * Add a new album to the collection
 * 
 * @param {string} title - is for the title of the album
 * @param {string} artist - is for the name of the artist
 * @param {number} yearPublished - is for the year the album was published
 * 
 * @returns - the newAlbum object
 */
function addToCollection(title, artist, yearPublished) {
    const newAlbum = {
        title: title,
        artist: artist,
        year: yearPublished,
    };
    collection.push(newAlbum);
    return newAlbum;
};

// console.log(addToCollection('test title', 'test artist', 2022));

// wanted at least one 'self titled' album
console.log('Added to collection', addToCollection('Foo Fighters', 'Foo Fighters', 1995));
// another album by the same artist
console.log('Added to collection', addToCollection('Wasting Light', 'Foo Fighters', 2011));
// how about an album with the same year
console.log('Added to collection', addToCollection('Endgame', 'Rise Against', 2011));
// more Foo Fighters! RIP Taylor Hawkins
console.log('Added to collection', addToCollection('One by One', 'Foo Fighters', 2002));
// album 5
console.log('Added to collection', addToCollection('Dear Agony', 'Breaking Benjamin', 2009));
// album 6
console.log('Added to collection', addToCollection('Joe\'s Garage', 'Frank Zappa', 1987));

// instructions say console.log, I made a table instead
// console.log(collection);
console.table(collection);

/**
 * Logs the number of albums and each albums information
 * 
 * @param {Object[]} albumCollection - is for an album collection to log
 */
function showCollection(albumCollection) {
    // wanted logic for single or plural albums in collection
    if(albumCollection.length === 0 || albumCollection.length > 1) {
        console.log('There are', albumCollection.length, 'albums in this collection');
    } else if(albumCollection.length === 1) {
        console.log('There is', albumCollection.length, 'album in this collection')
    } for(let album of albumCollection) {
        // did this a couple ways
        console.log(`${album.title} by ${album.artist}, published in ${album.year}`)
        // console.log(album.title, 'by', album.artist + ', published in', album.year + '.');
    };
};

showCollection(collection);
// tested with and empty array and a single item array
// showCollection(emptyCollection);
// showCollection(sadCollection);