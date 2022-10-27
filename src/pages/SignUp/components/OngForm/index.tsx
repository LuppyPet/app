import { UseFormRegister } from 'react-hook-form'
import { Input } from '../../../../components/Input'

import { Briefcase, Star } from 'phosphor-react'
import { SignUpFormInputsProps } from '../..'
import { InputSelect } from '../../../../components/InputSelect'

interface OngFormProps {
  register: UseFormRegister<SignUpFormInputsProps>
}

export function OngForm({ register }: OngFormProps): JSX.Element {
  return (
    <>
      <Input
        label="Nome da ONG"
        icon={<Star size={24} weight="thin" />}
        {...register('ong', { required: true })}
      ></Input>

      <Input
        label="CNPJ"
        icon={<Briefcase size={24} weight="thin" />}
        {...register('cnpj', { required: true })}
      ></Input>

      <InputSelect
        label="Quem você ajuda?"
        color="#F56076"
        isMulti
        options={[
          {
            label: 'Gatos',
            value: '0',
          },
          {
            label: 'Cachorros',
            value: '1',
          },
          {
            label: 'Outros',
            value: '2',
          },
        ]}
      ></InputSelect>
    </>
  )
}
