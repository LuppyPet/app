import { forwardRef, InputHTMLAttributes } from 'react'
import Select, {
  Props,
  StylesConfig,
  ThemeConfig,
  OptionsOrGroups,
  GroupBase,
} from 'react-select'
import { InputSelectContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  color: '#F56076' | '#23B6E7'
  options: OptionsOrGroups<unknown, GroupBase<unknown>>
  isMulti?: boolean
}

export const InputSelect = forwardRef<Props, InputProps>(function InputSelect(
  { label, color, options, type = 'text', isMulti = false, ...rest },
  ref,
): JSX.Element {
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
      <Select
        //  @ts-ignore
        ref={ref}
        styles={colorStyles}
        theme={theme}
        options={options}
        isMulti={isMulti}
        {...rest}
      />
    </InputSelectContainer>
  )
})
