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
 * @param {object[]} tracks - is for an array of tracks with name and duration properties
 * 
 * @returns - the newAlbum object
 */
function addToCollection(title, artist, yearPublished, tracks) {
    const newAlbum = {
        title: title,
        artist: artist,
        year: yearPublished,
        tracks: tracks,
    };
    collection.push(newAlbum);
    return newAlbum;
};

// console.log(addToCollection('test title', 'test artist', 2022));

// wanted at least one 'self titled' album
console.log('Added to collection', addToCollection('Foo Fighters', 'Foo Fighters', 1995, [{name: 'This Is a Call', duration: 3.53},{name: 'I\'ll Stick Around', duration: 3.53},{name: 'Big Me', duration: 2.12},{name: 'Alone + Easy Target', duration: 4.05},{name:'Good Grief', duration: 4.01},{name:'Floaty',duration:4.30},{name:'Weenie Beenie', duration:2.45},{name:'Oh, George', duration:3.00},{name:'For All the Cows', duration:3.30},{name:'X-Static', duration:4.13},{name:'Wattershed', duration:2.15},{name:'Exhausted', duration:5.47}]));
// another album by the same artist
console.log('Added to collection', addToCollection('Wasting Light', 'Foo Fighters', 2011, [{name:'Bridge Burning', duration:4.46},{name:'Rope',duration:4.19},{name:'Dear Rosemary',duration:4.26},{name:'White Limo',duration:3.22},{name:'Arlandria',duration:4.28},{name:'These Days',duration:4.58},{name:'Back & Forth',duration:3.52},{name:'A Matter of Time',duration:4.36},{name:'Miss the Misery',duration:4.33},{name:'I Should Have Known',duration:4.15},{name:'Walk',duration:4.15}]));
// how about an album with the same year
console.log('Added to collection', addToCollection('Endgame', 'Rise Against', 2011,[{name:'Architects',duration:3.42},{name:'Help Is on the Way',duration:3.57},{name:'Make It Stop (September\'s Children',duration:3.54},{name:'Disparity by Design',duration:3.48},{name:'Satellite',duration:3.58},{name:'Midnight Hands',duration:4.17},{name:'Survivor Guilt',duration:3.59},{name:'Broken Mirrors',duration:3.54},{name:'Wait for Me',duration:3.39},{name:'A Gentlemen\'s Coup',duration:3.46},{name:'This Is Letting Go', duration:3.41},{name:'Endgame',duration:3.24}]));
// more Foo Fighters! RIP Taylor Hawkins
console.log('Added to collection', addToCollection('One by One', 'Foo Fighters', 2002,[{name:'All My Life',duration:4.23},{name:'Low',duration:4.28},{name:'Have It All',duration:4.57},{name:'Times Like These',duration:4.26},{name:'Disenchanted Lullaby',duration:4.33},{name:'Tired of You',duration:5.11},{name:'Halo',duration:5.06},{name:'Lonely as You',duration:4.37},{name:'Overdrive',duration:4.30},{name:'Burn Away',duration:4.58},{name:'Come Back',duration:7.49}]));
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

/**
 * Search an album collection for specific artist
 * 
 * @param {string} artist - is for the artist you are looking for
 * @param {object[]} albumCollection - is for the collection to look through
 * 
 * @returns an array of found albums
 */
function findByArtist(artist, albumCollection) {
    const foundArtist = [];
    for(let album of albumCollection) {
        if (artist === album.artist) {
            foundArtist.push(album);
        }
    } 
    return foundArtist;
}

// search for multiple
console.log('Looking for \'Foo Fighters\'', findByArtist('Foo Fighters', collection));
// search for single
console.log('Looking for \'Rise Against\'', findByArtist('Rise Against', collection));
// search for something that doesnt exist in the collection
console.log('looking for \'Stone Temple Pilots\'', findByArtist('Stone Temple Pilots', collection));

/**
 * Search for an object in an album collection
 * 
 * @param {Object[]} albumCollection - is for the collection to search in
 * @param {Object} object - is for an object to search for
 * 
 * @returns an array with the matching album, if object is empty or undefined returns albumCollection
 */
function search(albumCollection, object) {
    const foundAll = [];
    // object.length doesn't work, neither does if object === {}
    // object.keys() returns the object properties as an array
    // which we can use .length on. an empty object would be 0
    if (object === undefined || Object.keys(object).length === 0) {
        return albumCollection;
    }
    for (let album of albumCollection) {
        if(object.artist === album.artist && object.year === album.year) {
            foundAll.push(album);
        } 
    }
    return foundAll;
}

// return items in the collection that match ALL search criteria
console.log('Looking in the album collection for Foo Fighters albums from 1995', search(collection, {artist: 'Foo Fighters', year: 1995}));
// return empty array if no results are found
console.log('Looking in the album collection for Foo Fighters albums from 1996', search(collection, {artist: 'Foo Fighters', year: 1996}));
// return collection searching for undefined object
console.log('Looking for an undefined object', search(collection));
// return collection searching for empty object;
console.log('Looking for an empty object', search(collection, {}))
