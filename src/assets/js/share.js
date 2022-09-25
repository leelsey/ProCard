// Share Button
const shareButton = document.querySelector('.share-button');
const shareDialog = document.querySelector('.share-dialog');
const closeButton = document.querySelector('.close-button');
// Share APT
shareButton.addEventListener('click', event => {
    if (navigator.share) { 
        navigator.share({
            title: 'ProCard - Virtual Business Card',
            url: 'https://github.com/leelsey/procard'
        }).then(() => {
            console.log('Shared complete!');
        })
        .catch(console.error);
        } else {
            shareDialog.classList.add('is-open');
        }
    }
);
closeButton.addEventListener('click', event => {
    shareDialog.classList.remove('is-open');
    }
);