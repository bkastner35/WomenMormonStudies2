import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      
      width: 300,
    },
  },
};



function getStyles(method, approach, theme) {
  return {
    fontWeight:
      approach.indexOf(method) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CatagoryBox(props) {
  const options = props.options
  const theme = useTheme();
  const [approach, newApproach] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    newApproach(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  return (
    <div>
      
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-method-label">{props.name}</InputLabel>
        <Select
          labelId="age-catagory"
          id="age-catagory"
          multiple
          value={approach}
          onChange={handleChange}
          input={<OutlinedInput label="Method" />}
          MenuProps={MenuProps}
        >
          
          {props.options.map((method) => (
            <MenuItem
              key={method}
              value={props.options}
              style={getStyles(props.options, approach, theme)}
            >
              {method}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
