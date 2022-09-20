import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import EmployeesTable from "./components/EmployeesTable";
import Container from "@mui/material/Container";
import { EMPLOYEES_DATA } from "./data/employees";

function App() {
  const [employees, setEmployees] = useState(EMPLOYEES_DATA);

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Container>
        <EmployeesTable
          onDeleteEmployee={handleDeleteEmployee}
          employees={employees}
        />
      </Container>
    </>
  );
}

export default App;
