import SittingLadyWithCat from '../../assets/SittingLadyWithCat'
import { CarouselPagination } from '../CarouselPagination'
import {
  InnerColoredContainer,
  SideColoredContainer,
  SideTitleStyle,
  SubtitleStyle
} from './styles'

interface ILeftLoginContainerProps {
  title: String
  subTitle: String
  currentPage: Number
  setCurrentPage: Function
  numberOfBalls: Number
}

export const LeftLoginContainer: React.FC<ILeftLoginContainerProps> = ({
  title,
  subTitle,
  currentPage,
  setCurrentPage,
  numberOfBalls,
}): JSX.Element => (
  <SideColoredContainer>
    <InnerColoredContainer>
      <SittingLadyWithCat className="sittingCat" />
      <SideTitleStyle>{title}</SideTitleStyle>
      <SubtitleStyle>{subTitle}</SubtitleStyle>
      <CarouselPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        numberOfBalls={numberOfBalls}
      ></CarouselPagination>
    </InnerColoredContainer>
  </SideColoredContainer>
)
