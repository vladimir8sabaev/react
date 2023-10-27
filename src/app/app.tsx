// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employee-list/employee-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

export function App() {
  const data: {
    name: string;
    salary: number;
    increase: boolean;
    id: number;
  }[] = [
    { name: 'Mary', salary: 800, increase: true, id: 1 },
    { name: 'John', salary: 300, increase: false, id: 2 },
    { name: 'Alex', salary: 1200, increase: true, id: 3 },
  ];

  return (
    <div className={styles.app}>
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
