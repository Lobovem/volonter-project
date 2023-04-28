import { SliderSecond } from '../Sliders/SliderSecond/SliderSecond';
import { TitleSection } from '../TitleSection/TitleSection';
import s from './OurResult.module.scss';

export const OurResult = () => {
  return (
    <div>
      <TitleSection title="Наші результати"></TitleSection>
      <SliderSecond></SliderSecond>
    </div>
  );
};