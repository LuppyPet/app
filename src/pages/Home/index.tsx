import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import LuppyLogo from '../../assets/LuppyLogo'
import { Input } from '../../components/Input'
import { LeftLoginContainer } from '../../components/LeftLoginContainer'
import { HomeContainer, LoginSide, TwoColoredText } from './styles'

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

  const onSubmit = async ({ username, password }: IFormInputs) => {
    try {
      console.log(username, password, 'login')
      resetField('password')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
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
        <LuppyLogo />
        <TwoColoredText>
          <div className="firstHalf">
            {subLogoText.slice(0, Math.round(subLogoText.length / 2))}
          </div>
          <div className="secondHalf">
            {subLogoText.slice(
              Math.round(subLogoText.length / 2),
              subLogoText.length,
            )}
          </div>
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
      </LoginSide>
    </HomeContainer>
  )
}
