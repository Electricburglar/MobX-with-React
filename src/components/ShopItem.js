import React from 'react';
import styled from 'styled-components';

const ShopItem = ({name, price, onPut}) => {
    return (
        <ShopItemTemplate onClick={() => onPut(name, price)}>
            <Title>
                {name}
            </Title>
            <Price>
                {price}
            </Price>
        </ShopItemTemplate>
    );
}

const ShopItemTemplate = styled.div`
    background: white;
    border: 1px solid #495057;
    padding: 0.5rem;
    border-radius: 2px;
    cursor: pointer;
`

const Title = styled.h4`
    margin-top: 0;
    margin-bottom: 1rem;
`

const Price = styled.div`
    background: #495057;
    color: white;
    margin-top: 1rem;
`

export default ShopItem;