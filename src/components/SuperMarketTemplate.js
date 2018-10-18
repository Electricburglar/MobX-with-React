import React from 'react';
import styled from 'styled-components';

const SuperMarketTemplate = ({items, basket, total}) => {
    return (
        <SuperMarket>
            <ItemsWrapper>
                <Title>상품</Title>
                {items}
            </ItemsWrapper>
            <BasketWrapper>
                <Title>장바구니</Title>
                {basket}
                {total}
            </BasketWrapper>
        </SuperMarket>
    );
}

const SuperMarket = styled.div`
    width: 786px;
    display: flex;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
`
const Title = styled.h2`
    margin-top: 0;
`

const ItemsWrapper = styled.div`
    background: #f8f9fa;
    padding: 1rem;
    flex: 1;
`

const BasketWrapper = styled.div`
    padding: 1rem;
    flex: 1;
`

export default SuperMarketTemplate;