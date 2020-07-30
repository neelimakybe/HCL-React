package com.employee;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = { "*" }, methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class EmployeeController {

	@Autowired
	EmployeesRepository empRepository;

	@GetMapping("/all")
	public List<Employee> getEmployees() {

		List<Employee> employees = new ArrayList<Employee>();
		Iterable<Employee> iterable = empRepository.findAll();
		for (Employee employee : iterable) {
			employees.add(employee);
		}
		return employees;
	}

	@GetMapping("/get/ids")
	public List<Integer> getEmployeeIds() {

		List<Integer> employeeIds = new ArrayList<Integer>();
		Iterable<Employee> iterable = empRepository.findAll();
		for (Employee employee : iterable) {
			employeeIds.add(employee.getId());
		}
		return employeeIds;
	}

	@GetMapping("/get/employee/{id}")
	public Optional<Employee> getEmployee(@PathVariable Integer id) {
		return empRepository.findById(id);
	}

	@PostMapping("/add")
	public Employee saveEmployee(@RequestBody Employee employee) {

		employee = empRepository.save(employee);
		return employee;
	}

	@PutMapping("/save")
	public Employee updateEmployee(@RequestBody Employee employee) {

		employee = empRepository.save(employee);
		return employee;
	}

	@DeleteMapping("/delete/{id}")
	public Status deletePost(@PathVariable Integer id) {

		empRepository.deleteById(id);
		return new Status(true);
	}

}