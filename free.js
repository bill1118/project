function createListItem(imageSrc, location, title, iconSrc) {
    // 創建外部 div 容器
    const listItem = document.createElement('div');
    listItem.className = 'list-item';

    // 創建 figure 和 img 元素
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '';  // 可以根據需要設置 alt 屬性
    figure.appendChild(img);

    // 創建 list-text div 容器
    const listText = document.createElement('div');
    listText.className = 'list-text';

    // 創建 text-content div 容器
    const textContent = document.createElement('div');
    textContent.className = 'text-content';

    // 創建 title div 和裡面的 img 和 p 元素
    const titleDiv = document.createElement('div');
    titleDiv.className = 'title';
    const titleImg = document.createElement('img');
    titleImg.src = './images/icon/map-marker.svg';
    titleImg.alt = '';  // 可以根據需要設置 alt 屬性
    const locationText = document.createElement('p');
    locationText.textContent = location;
    titleDiv.appendChild(titleImg);
    titleDiv.appendChild(locationText);

    // 創建 content div 和裡面的 h2 元素
    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    const h2 = document.createElement('h2');
    h2.textContent = title;
    contentDiv.appendChild(h2);

    // 將 title 和 content 添加到 text-content
    textContent.appendChild(titleDiv);
    textContent.appendChild(contentDiv);

    // 創建 icon div 和裡面的 a 和 img 元素
    const iconDiv = document.createElement('div');
    iconDiv.className = 'icon';
    const link = document.createElement('a');
    link.href = '#';  // 可以根據需要設置 href 屬性
    const iconImg = document.createElement('img');
    iconImg.src = iconSrc;
    iconImg.alt = '';  // 可以根據需要設置 alt 屬性
    link.appendChild(iconImg);
    iconDiv.appendChild(link);

    // 將 text-content 和 icon 添加到 list-text
    listText.appendChild(textContent);
    listText.appendChild(iconDiv);

    // 將 figure 和 list-text 添加到 list-item
    listItem.appendChild(figure);
    listItem.appendChild(listText);

    // 返回完整的 list-item 元素
    return listItem;
}

// // 使用範例
// const container = document.getElementById('your-container-id'); // 指定父容器
// const newListItem = createListItem(
//     './images/free/freecompress-pexels-eko-cahyono-102048560-9831406.jpg', 
//     '大阪', 
//     '黑們市場', 
//     './images/icon/circle btn (1).svg'
// );

// 將生成的元素添加到指定的父容器中
container.appendChild(newListItem);
