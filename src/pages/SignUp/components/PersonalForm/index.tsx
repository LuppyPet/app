import { UseFormRegister } from 'react-hook-form'
import { Input } from '../../../../components/Input'

import { Envelope, IdentificationBadge } from 'phosphor-react'
import { SignUpFormInputsProps } from '../..'
import { InputPassword } from '../../../../components/InputPassword'

interface PersonalFormProps {
  register: UseFormRegister<SignUpFormInputsProps>
}

export function PersonalForm({ register }: PersonalFormProps): JSX.Element {
  return (
    <>
      <Input
        label="Qual é o seu nome?"
        icon={<IdentificationBadge size={24} weight="thin" />}
        {...register('name', { required: true })}
      ></Input>

      <Input
        label="Seu melhor e-mail"
        icon={<Envelope size={24} weight="thin" />}
        {...register('email', { required: true })}
      ></Input>

      <InputPassword
        label="Uma senha bem segura"
        hasForgotPasswordButton={false}
        {...register('password', { required: true })}
      ></InputPassword>
    </>
  )
}
