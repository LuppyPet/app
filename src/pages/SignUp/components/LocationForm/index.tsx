import { useEffect, useState } from 'react'
import { Control, UseFormWatch } from 'react-hook-form'
import { SignUpFormInputsProps } from '../..'
import { InputSelect } from '../../../../components/InputSelect'
import { api } from '../../../../services/api'

interface StatesProps {
  id: string
  namePt: string
}

interface CitiesProps {
  id: string
  namePt: string
  stateId: string
}

interface LocationFormProps {
  control: Control<any>
  watch: UseFormWatch<SignUpFormInputsProps>
}

export function LocationForm({
  control,
  watch,
}: LocationFormProps): JSX.Element {
  const [cities, setCities] = useState([
    { label: 'Selecione uma cidade', value: '0' },
  ])
  const [states, setStates] = useState([
    { label: 'Selecione um estado', value: '0' },
  ])

  const selectedState = watch('state')

  useEffect(() => {
    async function getStates() {
      const statesResponse = await api.get<StatesProps[]>('/location/states')

      const statesMapped = statesResponse.data.map((state) => ({
        label: state.namePt,
        value: state.id,
      }))

      setStates([...states, ...statesMapped])
    }

    getStates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    async function getCities() {
      const citiesResponse = await api.get<CitiesProps[]>('/location/cities')

      const citiesMapped = citiesResponse.data
        .filter((city) => city.stateId === selectedState)
        .map((city) => ({
          label: city.namePt,
          value: city.id,
        }))

      setCities([
        { label: 'Selecione uma cidade', value: '0' },
        ...citiesMapped,
      ])
    }

    if (selectedState !== undefined) {
      getCities()
    }
  }, [states, selectedState])

  return (
    <>
      <InputSelect
        label="Eu sou..."
        color="#F56076"
        options={[
          {
            label: 'Um tutor responsável',
            value: 'user',
          },
          {
            label: 'Uma ONG inovadora',
            value: 'ong',
          },
          {
            label: 'Um veterinário sensato',
            value: 'vet',
          },
        ]}
        control={control}
        name="type"
      ></InputSelect>

      <InputSelect
        label="Moro no estado de..."
        color="#F56076"
        options={states}
        control={control}
        name="state"
      ></InputSelect>

      <InputSelect
        label="Na cidade de..."
        color="#F56076"
        options={cities}
        control={control}
        name="city"
      ></InputSelect>
    </>
  )
}
