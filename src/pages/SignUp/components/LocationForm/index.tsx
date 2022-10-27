import { InputSelect } from '../../../../components/InputSelect'

export function LocationForm(): JSX.Element {
  return (
    <>
      <InputSelect
        label="Eu sou..."
        color="#F56076"
        options={[
          {
            label: 'Um tutor responsável',
            value: '0',
          },
          {
            label: 'Uma ONG inovadora',
            value: '1',
          },
          {
            label: 'Um veterinário sensato',
            value: '2',
          },
        ]}
      ></InputSelect>

      <InputSelect
        label="Moro no estado de..."
        color="#F56076"
        options={[
          {
            label: 'São Paulo',
            value: '0',
          },
          {
            label: 'Rio de Janeiro',
            value: '1',
          },
          {
            label: 'Paraná',
            value: '2',
          },
        ]}
      ></InputSelect>

      <InputSelect
        label="Na cidade de..."
        color="#F56076"
        options={[
          {
            label: 'Sorocaba',
            value: '0',
          },
          {
            label: 'Curitiba',
            value: '1',
          },
          {
            label: 'Rio de Janeiro',
            value: '2',
          },
        ]}
      ></InputSelect>
    </>
  )
}
