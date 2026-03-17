// Photo Album Functionality

let photoAlbum = [];

// Function to add a photo
function addPhoto(photo) {
    photoAlbum.push(photo);
    console.log(`Photo added: ${photo}`);
}

// Function to display photos
function displayPhotos() {
    console.log("Photo Album:");
    photoAlbum.forEach((photo, index) => {
        console.log(`${index + 1}: ${photo}`);
    });
}

// Function to delete a photo
function deletePhoto(index) {
    if (index < 0 || index >= photoAlbum.length) {
        console.log("Invalid index. Please provide a valid photo index.");
        return;
    }
    const deletedPhoto = photoAlbum.splice(index, 1);
    console.log(`Photo deleted: ${deletedPhoto}`);
}

// Example Usage
addPhoto("Vacation.jpg");
addPhoto("Birthday.jpg");
displayPhotos();
deletePhoto(0);
displayPhotos();