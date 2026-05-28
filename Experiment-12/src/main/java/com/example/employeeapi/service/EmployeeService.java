package com.example.employeeapi.service;

import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    public Optional<Employee> updateEmployee(int id, Employee updatedEmployee) {
        return repository.findById(id).map(existingEmployee -> {
            existingEmployee.setName(updatedEmployee.getName());
            existingEmployee.setDepartment(updatedEmployee.getDepartment());
            existingEmployee.setSalary(updatedEmployee.getSalary());
            return repository.save(existingEmployee);
        });
    }

    public boolean deleteEmployee(int id) {
        if (!repository.existsById(id)) {
            return false;
        }

        repository.deleteById(id);
        return true;
    }
}
