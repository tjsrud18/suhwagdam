import React from 'react';
import ItemNotFoundImg from '../asset/images/item_not_found_img.png';

const ItemEmpty = () => {
    return (
        <div>
            <div style={{width: '300px', margin: '0 auto'}}>
                <img src={ItemNotFoundImg} alt="상품없음.png" style={{width: '100%', height: '100%'}}/>
            </div>
            <p style={{textAlign:'center', fontSize:'20px', color: 'gray'}}>해당 상품이 없습니다.</p>
        </div>
    );
};

export default ItemEmpty;