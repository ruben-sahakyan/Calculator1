import './oneBoard.scss';
import { useContext, useEffect, useState } from 'react';
import { dataContext } from '../../UseContext';



export default () => {
    const { dataField } = useContext(dataContext);
    const baseSquareWidth = 3630;
    const baseSquareHeight = 1830;
    return (
        <>
        <div className='one-board' style={{aspectRatio: `1/${baseSquareHeight/baseSquareWidth}`}}>
            {dataField.map((item) => {
                return (
                    <>
                    <div key={item.id} className='one-container' style={{width: `${item.containerWidth*100/baseSquareWidth}%`,
                    height: `${item.containerHeight*100/baseSquareHeight}%`}}>
                        {[...Array(item.itemsCount)].map(() => {
                            return (
                                <>
                                <div className='one-item' style={{height: `${item.itemHeight*100/item.containerHeight}%`,
                                width: `${item.itemWidth*100/item.containerWidth}%`}}></div>
                                </>
                            );
                        })}
                    </div>
                    </>
                );
            })}
        </div>
        </>
    );
}
