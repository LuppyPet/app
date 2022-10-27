import { SignUpContainer, SignUpLeftSide, SignUpRightSide } from './styles'

import dogWalking from '../../assets/dog-walking.svg'
import luppyImage from '../../assets/luppy.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PersonalForm } from './components/PersonalForm'

export interface SignUpFormInputsProps {
  type: 'user' | 'ong'
  state: string
  city: string
  ong: string
  cnpj: string
  animals: string[]
  name: string
  email: string
  password: string
}

export function SignUp(): JSX.Element {
  const navigate = useNavigate()

  const { register } = useForm<SignUpFormInputsProps>({
    shouldFocusError: true,
    shouldUseNativeValidation: true,
    criteriaMode: 'all',
  })
  return (
    <SignUpContainer>
      <SignUpLeftSide>
        <img src={dogWalking} alt="Man walking with a dog" />
        <div>
          <h1>Lorem ipsum dp</h1>
          <p>Lorem ipsum dolor sit amete testando o tamanho</p>
        </div>
      </SignUpLeftSide>
      <SignUpRightSide>
        <div>
          <img src={luppyImage} alt="Luppy" />
          <h1>
            <strong>Seus pets </strong>
            <strong>mais seguros</strong>
          </h1>
          <form>
            <PersonalForm register={register}></PersonalForm>

            <Button type="submit" color="secondary">
              Avançar
            </Button>
          </form>
        </div>

        <p>
          Já possui conta?{' '}
          <button type="button" onClick={() => navigate('/')}>
            {'Faça login :)'}
          </button>
        </p>
      </SignUpRightSide>
    </SignUpContainer>
  )
}
