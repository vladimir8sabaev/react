// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component } from 'react';

import AppInfo from './components/app-info/app-info';
import SearchPanel from './components/search-panel/search-panel';
import AppFilter from './components/app-filter/app-filter';
import EmployeesList from './components/employee-list/employee-list';
import EmployeesAddForm from './components/employees-add-form/employees-add-form';

import styles from './app.module.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Mary', salary: 800, increase: false, rise: false, id: 1 },
        { name: 'John', salary: 300, increase: false, rise: false, id: 2 },
        { name: 'Alex', salary: 1200, increase: false, rise: false, id: 3 },
      ],
      term: '',
      buttonState: 'all',
    };
  }

  maxId = 4;

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onEmployeeAdd = (name, salary) => {
    this.setState(({ data }) => {
      const newData = [
        ...data,
        {
          name: name,
          salary: salary,
          increase: false,
          rise: false,
          id: this.maxId,
        },
      ];
      this.maxId += 1;
      return {
        data: newData,
      };
    });
  };

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.includes(term);
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };

  onUpdateFilter = (buttonState) => {
    this.setState({ buttonState: buttonState });
  };

  filterEmployees = (buttonState, items) => {
    switch (buttonState) {
      case 'all':
        return items;
      case 'ranked up':
        return items.filter((item) => {
          return item.rise;
        });
      case 'tons of money':
        return items.filter((item) => {
          return item.salary >= 1000;
        });
    }
  };

  render() {
    const { data, term, buttonState } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.searchEmployee(data, term);
    const filteredData = this.filterEmployees(buttonState, visibleData);
    return (
      <div className={styles.app}>
        <AppInfo dataLength={employees} increaseNumber={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter
            filter={buttonState}
            onUpdateFilter={this.onUpdateFilter}
          />
        </div>

        <EmployeesList
          data={filteredData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />

        <EmployeesAddForm onEmployeeAdd={this.onEmployeeAdd} />
      </div>
    );
  }
}

export default App;
