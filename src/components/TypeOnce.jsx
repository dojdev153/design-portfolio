import React from 'react';
import useTypeOnce from '../hooks/useTypeOnce';

const TypeOnce = ({ text, speed = 70 }) => {
    const displayed = useTypeOnce(text, speed);
    return <>{displayed}</>;
};

export default TypeOnce;
