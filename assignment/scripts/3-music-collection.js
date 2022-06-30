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