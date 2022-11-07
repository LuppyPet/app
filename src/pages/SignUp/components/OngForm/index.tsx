import { Control, UseFormRegister } from 'react-hook-form'
import { Input } from '../../../../components/Input'

import { Briefcase, Star } from 'phosphor-react'
import { SignUpFormInputsProps, TypeOfAnimals } from '../..'
import { InputSelect } from '../../../../components/InputSelect'

interface OngFormProps {
  register: UseFormRegister<SignUpFormInputsProps>
  control: Control<any>
}

export function OngForm({ register, control }: OngFormProps): JSX.Element {
  return (
    <>
      <Input
        label="Nome da ONG"
        icon={<Star size={24} weight="thin" />}
        {...register('organization', { required: true })}
      ></Input>

      <Input
        label="CNPJ"
        icon={<Briefcase size={24} weight="thin" />}
        {...register('document', { required: true })}
      ></Input>

      <InputSelect
        label="Quem você ajuda?"
        color="#F56076"
        isMulti
        defaultValue={'0'}
        options={[
          {
            label: 'Gatos',
            value: TypeOfAnimals.CATS,
          },
          {
            label: 'Cachorros',
            value: TypeOfAnimals.DOGS,
          },
          {
            label: 'Outros',
            value: TypeOfAnimals.OTHERS,
          },
        ]}
        control={control}
        name="help"
      ></InputSelect>
    </>
  )
}
