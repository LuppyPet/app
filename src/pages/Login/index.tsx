import { LoginContainer, LoginLeftSide, LoginRightSide } from './styles'

import womanWithCatImage from '../../assets/woman-with-cat.svg'
import luppyImage from '../../assets/luppy.svg'
import { Input } from '../../components/Input'
import { Envelope } from 'phosphor-react'
import { InputPassword } from '../../components/InputPassword'
import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

interface FormInputsProps {
  email: string
  password: string
}

export function Login(): JSX.Element {
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<FormInputsProps>({
    shouldFocusError: true,
    shouldUseNativeValidation: true,
    criteriaMode: 'all',
  })

  async function onSubmit({ email, password }: FormInputsProps) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      if (response.status === 200) {
        navigate('/dashboard')
        toast.success('Login efetuado com sucesso')
      }
    } catch (error) {
      toast.error('Ocorreu um erro ao efetuar login, cheque suas informações')
    }
  }
  return (
    <LoginContainer>
      <LoginLeftSide>
        <img src={womanWithCatImage} alt="Woman sitting with a cat" />
        <div>
          <h1>Lorem ipsum dp</h1>
          <p>Lorem ipsum dolor sit amete testando o tamanho</p>
        </div>
      </LoginLeftSide>
      <LoginRightSide>
        <div>
          <img src={luppyImage} alt="Luppy" />
          <h1>
            <strong>Seus pets </strong>
            <strong>mais seguros</strong>
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="E-mail"
              icon={<Envelope size={24} weight="thin" />}
              {...register('email', { required: true })}
            ></Input>
            <InputPassword
              label="Senha"
              {...register('password', { required: true })}
            ></InputPassword>

            <Button type="submit">Entrar</Button>
          </form>
        </div>

        <p>
          Ainda não é cadastrado?{' '}
          <button type="button" onClick={() => navigate('/register')}>
            {'Comece agora :)'}
          </button>
        </p>
      </LoginRightSide>
    </LoginContainer>
  )
}
