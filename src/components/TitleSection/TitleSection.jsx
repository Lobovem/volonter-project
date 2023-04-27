import s from './TitleSection.module.scss';

export const TitleSection = (props) => {
  const { title } = props;
  return <h2 className={s.titleSection}>{title}</h2>;
};