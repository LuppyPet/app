import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LuppyLogo from '../../assets/LuppyLogo'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { LeftLoginContainer } from '../../components/LeftLoginContainer'
import { api } from '../../services/api'
import {
  // BottomText,
  ForgotMyPasswordText,
  HomeContainer,
  LoginSide,
  RegisterNowText,
  TwoColoredText,
} from './styles'

interface IFormInputs {
  username: string
  password: string
}

export function Home(): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0)

  const { register, handleSubmit, resetField } = useForm<IFormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    shouldFocusError: true,
    shouldUseNativeValidation: true,
    criteriaMode: 'all',
  })

  const numberOfPages = 3

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentPage(currentPage < numberOfPages - 1 ? currentPage + 1 : 0),
      10000,
    )
    return () => {
      clearInterval(interval)
    }
  }, [currentPage, numberOfPages, setCurrentPage])


  const navigate = useNavigate()

  const onSubmit = async ({ username, password }: IFormInputs) => {
    try {

      console.log('data')

      const response = await api.post("/sessions", {
        email: username,
        password
      })

      console.log(response.data)

      resetField('password')
      resetField('username')



      if (response.status === 200) {

        navigate('/dashboard')
        toast.success("Login efetuado com sucesso")
      }

    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
      toast.error("Ocorreu um erro ao efetuar login, cheque suas informações")

    }
  }

  const subLogoText = 'Lorem ipsum dolor situm nobilis'

  return (
    <HomeContainer>
      <LeftLoginContainer
        title={'Lorem MC gorila'}
        subTitle={'Lorem ipsum dolor sit amet'}
        currentPage={currentPage}
        numberOfBalls={numberOfPages}
        setCurrentPage={setCurrentPage}
      />
      <LoginSide onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="luppyLogo">
            <LuppyLogo />
          </div>
          <TwoColoredText>
            <h1 className="firstHalf">
              {subLogoText.slice(0, Math.round(subLogoText.length / 2))}
            </h1>
            <h1 className="secondHalf">
              {subLogoText.slice(
                Math.round(subLogoText.length / 2),
                subLogoText.length,
              )}
            </h1>
          </TwoColoredText>
          <Input
            registerField={{
              ...register('username', {
                maxLength: 50,
                minLength: 5,
                required: true,
              }),
            }}
            name="username"
            label="E-mail"
          />
          <Input
            registerField={{
              ...register('password', {
                maxLength: 50,
                minLength: 5,
                required: true,
              }),
            }}
            name="password"
            label="Senha"
            type="password"
          />
          <ForgotMyPasswordText>Esqueci minha senha!</ForgotMyPasswordText>
          <Button isPink type="submit">Login</Button>
        </div>
        <RegisterNowText isPink>
          <span>Ainda não é cadastrado?</span>
          <button className="blue">Comece agora</button>
        </RegisterNowText>
      </LoginSide>
    </HomeContainer>
  )
}
