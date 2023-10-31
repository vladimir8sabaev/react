import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employee-list.scss';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((item) => {
    return (
      <EmployeesListItem
        onDelete={() => onDelete(item.id)}
        key={item.id}
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        rise={item.rise}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        onToggleRise={() => {
          onToggleRise(item.id);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
