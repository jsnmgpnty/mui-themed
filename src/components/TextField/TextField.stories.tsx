/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Icon } from '../Icon';
import { TextMd } from '../Text';
import { TextField, TextFieldProps } from './index';

export default {
  title: 'TextField',
  argTypes: {
    multiline: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    subLabel: {
      control: 'text',
    },
    leadLabel: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    withStartIcon: {
      control: 'boolean',
    },
    withEndIcon: {
      control: 'boolean',
    },
    withDropdown: {
      control: 'boolean',
    },
    selectListPosition: {
      control: { type: 'select' },
      options: ['start', 'end'],
    },
  },
};

export function Default(
  props: TextFieldProps & {
    withStartIcon?: boolean;
    withEndIcon?: boolean;
    withDropdown?: boolean;
    selectListPosition?: 'start' | 'end';
  }
) {
  const [value, setValue] = useState('');
  const [selectedItem, setSelectedItem] = useState('ABC');
  const [tProps, setTProps] = useState<TextFieldProps>(props);

  useEffect(() => {
    const tempProps: TextFieldProps = {
      ...props,
      selectListPosition: props.selectListPosition,
      selectItems: props.withDropdown
        ? [
            { label: 'ABC', value: 'ABC' },
            { label: 'XYZ', value: 'XYZ' },
          ]
        : undefined,
    };
    tempProps.InputProps = {
      startAdornment: props.withStartIcon ? (
        <Icon
          icon="general.activity"
          color="supportive_offBlack_opacity.supportive_offBlack_opacity_60"
        />
      ) : null,
      endAdornment: props.withEndIcon ? (
        <Icon
          icon="general.help-circle"
          color="supportive_offBlack_opacity.supportive_offBlack_opacity_60"
        />
      ) : null,
    };
    setTProps(tempProps);
  }, [
    props.withEndIcon,
    props.withStartIcon,
    props.multiline,
    props.label,
    props.subLabel,
    props.error,
    props.withDropdown,
    props.selectListPosition,
    props.leadLabel,
  ]);

  const handleSelectedItemChanged = (v: string) => {
    setSelectedItem(v);
  };

  const handleValueChanged = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e?.target?.value ?? '');
  };

  const getTextWithDropdownValue = () => {
    return props.selectListPosition === 'start'
      ? `${selectedItem} ${value}`
      : `${value} ${selectedItem}`;
  };

  return (
    <Box width={300}>
      <Box mb={2}>
        {props.multiline ? (
          <TextField
            {...tProps}
            onChange={handleValueChanged}
            value={value}
            multiline
            rows={4}
            selectedItem={selectedItem}
            onItemSelect={handleSelectedItemChanged}
          />
        ) : (
          <TextField
            {...tProps}
            onChange={handleValueChanged}
            value={value}
            selectedItem={selectedItem}
            onItemSelect={handleSelectedItemChanged}
          />
        )}
      </Box>
      {((props.withDropdown && !!selectedItem && !!value) ||
        (!props.withDropdown && !!value)) && (
        <Box mb={2}>
          <TextMd bold>Current Value</TextMd>
          <TextMd>
            {props.withDropdown ? getTextWithDropdownValue() : `${value}`}
          </TextMd>
        </Box>
      )}
    </Box>
  );
}
