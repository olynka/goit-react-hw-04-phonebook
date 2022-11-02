import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Forms,Label,Input  } from './filterStyled';

const filterInputId = nanoid(4);

export default function Filter({value, onChange}) {
    return (
        <Forms>
            <Label htmlFor={filterInputId}>Find contact by name
                <Input 
                    type="text"
                    name="findByName"
                    id={filterInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    value={value}
                    onChange={onChange}
                />
            </Label>
        </Forms>
    );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};