import styles from './app-info.module.scss';

const AppInfo = (props) => {
  const { increaseNumber, dataLength } = props;
  return (
    <div className={styles.app_info}>
      <h1>Учет сотрудников в компании гулугулу</h1>
      <h2>Общее число сотрудников: {dataLength}</h2>
      <h2>Премию получат: {increaseNumber}</h2>
    </div>
  );
};

export default AppInfo;
