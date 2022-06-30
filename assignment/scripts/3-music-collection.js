console.log('***** Music Collection *****')

const collection = [];


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

console.table(collection);