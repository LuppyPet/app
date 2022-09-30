import { Ball, BallContainer } from './styles'

interface ICarouselPagination {
  currentPage: Number
  setCurrentPage: Function
  numberOfBalls: Number
}

export const CarouselPagination: React.FC<ICarouselPagination> = ({
  currentPage,
  setCurrentPage,
  numberOfBalls,
}): JSX.Element => {
  const ballsToRender = Array.from(Array(numberOfBalls).keys())
  return (
    <>
      <BallContainer>
        {ballsToRender.map((i) => (
          <Ball
            key={i}
            isChosen={i === currentPage}
            onClick={() => setCurrentPage(i)}
          />
        ))}
      </BallContainer>
    </>
  )
}
