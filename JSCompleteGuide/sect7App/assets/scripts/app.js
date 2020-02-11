const addAssetModal = document.getElementById('add-modal');

const initAddAssetButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelAddAssetButton = addAssetModal.querySelector('.btn--passive');
const confirmAddAssetButton = cancelAddAssetButton.nextElementSibling;
const userInputs = addAssetModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const assets = [];

const updateUI = () => {
    if (assets.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
};

const deleteAssetHandler = (assetId) => {
    let assetIndex = 0; 
    for (const asset of assets) {
        if (asset.id === assetId) {
            break;
        }
        assetIndex++;
    }
    assets.splice(assetIndex, 1);
    const listRoot = document.getElementById('asset-list');
    listRoot.children[assetIndex].remove();
};

const renderNewAssetElement = (id, title, imageUrl, description, rating) => {
    const newAssetElement = document.createElement('li');
    newAssetElement.className = 'asset-element';
    newAssetElement.innerHTML = `
    <div class="asset-element__image">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="asset-element__info">
        <h2>${title}</h2>
        <h3>${description}</h3>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newAssetElement.addEventListener('click', deleteAssetHandler.bind(null, id));
    const listRoot = document.getElementById('asset-list');
    listRoot.append(newAssetElement);
};

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const toggleAssetModal = () => {
    addAssetModal.classList.toggle('visible');
    toggleBackdrop();
};

const clearAssetInput = () => {
    for (userInput of userInputs) {
        userInput.value = '';
    }
};

const cancelAddAssetHandler = () => {
    toggleAssetModal();
    clearAssetInput();
};

const addAssetHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const descriptionValue = userInputs[2].value;
    const ratingValue = userInputs[3].value;

    if (
        titleValue.trim() === '' || 
        imageUrlValue.trim() === '' || 
        descriptionValue.trim() === '' || 
        ratingValue.trim() === '' ||
        +ratingValue < 1 || 
        +ratingValue > 5
        ) {
        alert('Plase only enter values from 1 to 5.');
        return;
    }
    //New elemetn for assets 
    const newAsset = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        description: descriptionValue,
        rating: ratingValue
    };
    //Reach out to the assets(above) array and add the newAsset
    assets.push(newAsset);
    console.log(assets);
    toggleAssetModal();
    clearAssetInput();
    renderNewAssetElement(
        newAsset.id,
        newAsset.title, 
        newAsset.image, 
        newAsset.description, 
        newAsset.rating);
    updateUI();
};

const backdropClickHandler = () => {
    toggleAssetModal();
};


//Event Listeners
initAddAssetButton.addEventListener('click', toggleAssetModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddAssetButton.addEventListener('click', cancelAddAssetHandler);
confirmAddAssetButton.addEventListener('click', addAssetHandler);