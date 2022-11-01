import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import Select, {
  StylesConfig,
  ThemeConfig,
  OptionsOrGroups,
  GroupBase,
} from 'react-select'
import { InputSelectContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>
  name: string
  label: string
  color: '#F56076' | '#23B6E7'
  options: OptionsOrGroups<unknown, GroupBase<unknown>>
  isMulti?: boolean
}

export function InputSelect({
  control,
  name,
  label,
  color,
  options,
  type = 'text',
  isMulti = false,
}: InputProps): JSX.Element {
  const theme: ThemeConfig = (theme) => ({
    ...theme,
    borderRadius: 8,
    colors: {
      ...theme.colors,
      primary: color,
      primary25: '#F6798C',
      primary50: '#F78D9D',
      primary75: '#F8A0AD',
    },
  })
  const colorStyles: StylesConfig = {
    control: (styles, state) => ({
      ...styles,
      minHeight: 48,
      border: state.isFocused ? '2px solid #000' : '1px solid #d3d4d9',
      borderColor: state.isFocused ? '#000' : '#D3D4D9',
      '&:hover': {
        borderColor: 'none',
      },
      boxShadow: 'none',
    }),
  }

  return (
    <InputSelectContainer>
      <label htmlFor="">{label}</label>
      <Controller
        render={({ field: { name, onBlur, onChange, ref, value } }) => (
          <Select
            ref={ref}
            styles={colorStyles}
            theme={theme}
            options={options}
            isMulti={isMulti}
            onChange={(event) => {
              if (Array.isArray(event)) {
                onChange(event.map((item) => item.value))
              } else {
                // @ts-ignore
                onChange(event.value)
              }
            }}
            onBlur={onBlur}
            defaultValue={options[0]}
            name={name}
            // @ts-ignore
            value={options.find((item) => item.value === value)}
          />
        )}
        name={name}
        control={control}
      ></Controller>
    </InputSelectContainer>
  )
}
