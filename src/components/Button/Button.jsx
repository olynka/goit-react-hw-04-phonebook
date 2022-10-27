import PropTypes from 'prop-types';
import React from "react";
import { ButtonImg } from "./ButtonStyled";
export const Button = ({handleClick}) => {
    return(
    <ButtonImg onClick={handleClick}>Load more</ButtonImg>)
};
Button.propTypes = {
    handleClick: PropTypes.func.isRequired,
};