import { Btn } from '../kit/Btn/Btn';
import flag from '../../img/ukraine-flag.png';
import layout from '../../styles/layout.module.scss';
import s from './banner.module.scss';
import { SocialLine } from '../SocialLine/SocialLine';

export const Banner = () => {
  return (
    <>
      <div className={`${s.banner} ${layout.layout}`}>
        <img className={s.banner__img} src={flag} alt="" />
        <div className={s.banner__textWrap}>
          <h1 className={s.banner__title}>Дуже важлива справа у дуже нелегкий час</h1>
          <p className={s.descSection}>
            Робота фонду будується на простих людських цінностях, які спрямовані на підтримку та розвиток відкритого українського суспільства, та інвестицій в
            майбутнє України. Засновники Фонду - це звичайні підприємці та волонтери з міста Запоріжжя, небайдужі до чужої біди, проблем суспільства та Держави.
          </p>
          <Btn title="детальніше" nameClass="btn"></Btn>
        </div>
      </div>
      <SocialLine></SocialLine>
    </>
  );
};