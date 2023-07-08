import { useState } from "react";
import "./App.css";
import Employee from "./components/Employee";
import data from "./components/dataFile/data";
import AddEmployee from "./components/AddEmployee";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [employees, setEmployees] = useState(data);

  let newEmployee = (id, newName, newPosition) => {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        //The ...employee serves as grabbing all employee elements/data e.g. img: item.img and so on
        return { ...employee, name: newName, position: newPosition };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  const addEmployee = (name, position, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      position: position,
      image: img,
    };
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div className="App container">
      <header className="flex flex-wrap justify-center gap-4 mt-10">
        {employees.map((item) => {
          return (
            <Employee
              name={item.name}
              position={item.position}
              img={item.image}
              newEmployee={newEmployee}
              // key={uuidv4()}
              key={item.id}
              id={item.id}
            />
          );
        })}
      </header>

      <AddEmployee newEmployee={addEmployee} />
    </div>
  );
}

export default App;
