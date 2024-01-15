export const calculate = ({width, height, quantity}) => {
    // base square width and height
    const baseSquareWidth = 3630;
    const baseSquareHeight = 1830;
    // item width, height, qunatity
    const itemWidth = Number(width);
    const itemHeight = Number(height);
    const itemsQuantity = Number(quantity);

    const containerWidth = Math.floor(baseSquareWidth/itemWidth)*itemWidth;
    const containerHeight = Math.floor(baseSquareHeight/itemHeight)*itemHeight;
    const maxQuantity = containerWidth/itemWidth * containerHeight/itemHeight; // max qani hat itemsa texavorvum.

    const baseRectangleQuantity = Math.ceil(itemsQuantity/maxQuantity);
    const itemsContainerList = [];
    let count = itemsQuantity;
    for(let i=0; i<baseRectangleQuantity; ++i) {
        if(count > maxQuantity) {
            itemsContainerList.push({
                id: Math.floor(Math.random() * 10000000),
                itemsCount: maxQuantity,
                containerWidth,
                containerHeight,
                itemWidth,
                itemHeight,
            });
            count -= maxQuantity;
        } else {
            itemsContainerList.push({
                id: Math.floor(Math.random() * 10000000),
                itemsCount: count,
                containerWidth: Math.floor(baseSquareWidth/itemWidth) > count ? count*itemWidth : Math.floor(baseSquareWidth/itemWidth)*itemWidth,
                containerHeight: Math.ceil(count/Math.floor(baseSquareWidth/itemWidth))*itemHeight,
                itemWidth,
                itemHeight,
            })
        }
    }
    return itemsContainerList;
};

