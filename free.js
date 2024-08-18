<script>
function createListItem(imageSrc, altText, location, title, iconSrc, linkHref) {
    const listItem = document.createElement('div');
    listItem.className = 'list-item';

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = altText;
    figure.appendChild(img);

    const listText = document.createElement('div');
    listText.className = 'list-text';

    const textContent = document.createElement('div');
    textContent.className = 'text-content';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    
    const locationIcon = document.createElement('img');
    locationIcon.src = './images/icon/map-marker.svg';
    locationIcon.alt = '';
    
    const locationText = document.createElement('p');
    locationText.textContent = location;
    
    titleDiv.appendChild(locationIcon);
    titleDiv.appendChild(locationText);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    
    const h2 = document.createElement('h2');
    h2.textContent = title;
    
    contentDiv.appendChild(h2);

    textContent.appendChild(titleDiv);
    textContent.appendChild(contentDiv);

    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    
    const iconLink = document.createElement('a');
    iconLink.href = linkHref;
    
    const iconImg = document.createElement('img');
    iconImg.src = iconSrc;
    iconImg.alt = '';
    
    iconLink.appendChild(iconImg);
    iconDiv.appendChild(iconLink);

    listText.appendChild(textContent);
    listText.appendChild(iconDiv);

    listItem.appendChild(figure);
    listItem.appendChild(listText);

    return listItem;
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const newListItem = createListItem(
        './images/free/freecompress-pexels-eko-cahyono-102048560-9831406.jpg', // Image src
        'Free Image',       // Alt text
        '大阪',             // Location
        '黑門市場',        // Title
        './images/icon/circle btn (1).svg', // Icon src
        '#'                // Link href
    );

    container.appendChild(newListItem);
});
</script>
