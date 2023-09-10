import React from 'react';
import Container from './Shared/Container';

const SearchResult = (props) => {
    console.log(props);
    return (
        <Container>
            <h1 className='mt-16'>hi thi is result {props.value}</h1>
        </Container>
    );
};

export default SearchResult;