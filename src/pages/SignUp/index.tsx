import { SignUpContainer, SignUpLeftSide, SignUpRightSide } from './styles'

import dogWalking from '../../assets/dog-walking.svg'
import luppyImage from '../../assets/luppy.svg'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { LocationForm } from './components/LocationForm'
import { useState } from 'react'
import { OngForm } from './components/OngForm'
import { PersonalForm } from './components/PersonalForm'
import { toast } from 'react-toastify'
import { api } from '../../services/api'

export enum TypeOfAnimals {
  // eslint-disable-next-line no-unused-vars
  CATS = 'CATS',
  // eslint-disable-next-line no-unused-vars
  DOGS = 'DOGS',
  // eslint-disable-next-line no-unused-vars
  OTHERS = 'OTHERS',
}

export interface SignUpFormInputsProps {
  type: 'user' | 'ong' | 'vet'
  state: string
  city: string
  organization: string
  document: string
  help: TypeOfAnimals[]
  name: string
  email: string
  password: string
}

const formSteps = ['Location', 'Ong', 'Personal']

export function SignUp(): JSX.Element {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(formSteps[0])

  const { register, watch, control, handleSubmit } =
    useForm<SignUpFormInputsProps>({
      shouldFocusError: true,
      shouldUseNativeValidation: true,
      criteriaMode: 'all',
    })

  const userType = watch('type')

  async function onSubmit({
    name,
    password,
    email,
    city,
    document,
    help,
    organization,
    state,
    type,
  }: SignUpFormInputsProps) {
    try {
      const response = await api.post('/user', {
        name,
        email,
        password,
        cityId: city,
        type,
        document,
        organization,
        help,
      })
      if (response.status === 200) {
        navigate('/')
        toast.success('Cadastro realizado com sucesso!')
      }
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao se cadastrar, mande um e-mail para "help@luppy.pet"',
      )
    }
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {currentStep === formSteps[0] ? (
              <LocationForm control={control} watch={watch}></LocationForm>
            ) : currentStep === formSteps[1] ? (
              <OngForm register={register} control={control}></OngForm>
            ) : (
              <PersonalForm register={register}></PersonalForm>
            )}

            <Button
              type={currentStep === formSteps[2] ? 'submit' : 'button'}
              onClick={() => {
                if (currentStep === formSteps[0]) {
                  if (userType === 'ong') {
                    setCurrentStep(formSteps[1])
                  } else {
                    setCurrentStep(formSteps[2])
                  }
                } else if (currentStep === formSteps[1]) {
                  setCurrentStep(formSteps[2])
                }
              }}
              color="secondary"
            >
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
