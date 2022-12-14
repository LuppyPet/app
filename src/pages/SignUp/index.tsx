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
import { AxiosError } from 'axios'

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

  const isLocationFormValid =
    currentStep === formSteps[0] &&
    watch('state') !== undefined &&
    watch('state') !== '0' &&
    watch('city') !== undefined &&
    watch('city') !== '0'
  const isOngFormValid =
    currentStep === formSteps[1] &&
    watch('organization') !== '' &&
    watch('document') !== '' &&
    watch('help') !== undefined &&
    watch('help')?.length > 0
  const isPersonalFormValid =
    currentStep === formSteps[2] &&
    watch('name') !== '' &&
    watch('name') !== undefined &&
    watch('email') !== '' &&
    watch('email') !== undefined &&
    watch('password') !== '' &&
    watch('password') !== undefined

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
      if (
        error instanceof AxiosError &&
        error?.response?.data.code === 'already.exists'
      ) {
        toast.error('E-mail j?? cadastrado!')
      } else {
        toast.error(
          'Ocorreu um erro ao se cadastrar, mande um e-mail para "help@luppy.pet"',
        )
      }
    }
  }

  return (
    <SignUpContainer>
      <SignUpLeftSide>
        <img src={dogWalking} alt="Man walking with a dog" />
        <div>
          <h1>Prontos para um passeio?</h1>
          <p>
            O <strong>Luppy</strong> ajuda seus pets a ficarem mais seguros ao
            passear
          </p>
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
              isDisabled={
                currentStep === formSteps[0]
                  ? !isLocationFormValid
                  : currentStep === formSteps[1]
                  ? !isOngFormValid
                  : !isPersonalFormValid
              }
            >
              Avan??ar
            </Button>
          </form>
        </div>

        <p>
          J?? possui conta?{' '}
          <button type="button" onClick={() => navigate('/')}>
            {'Fa??a login :)'}
          </button>
        </p>
      </SignUpRightSide>
    </SignUpContainer>
  )
}
