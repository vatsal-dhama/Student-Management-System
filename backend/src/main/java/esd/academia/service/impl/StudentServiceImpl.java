package esd.academia.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import esd.academia.model.Student;
import esd.academia.repository.StudentRepository;
import esd.academia.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
	
	private StudentRepository studentRepo;

	public StudentServiceImpl(StudentRepository studentRepo) {
		super();
		this.studentRepo = studentRepo;
	}

	@Override
	public Student saveStudent(Student student) {
		return studentRepo.save(student);
	}

	@Override
	public List<Student> getStudents() {
		return studentRepo.findAll();
	}

	@Override
	public Optional<Student> getStudentById(long id) {
		return studentRepo.findById(id);
	}

	@Override
	public Student updateStudentById(long id, Student student) {
		Student retrievedStudent = null;
		Optional<Student> stud = studentRepo.findById(id);
		if(stud.isPresent()) {
			retrievedStudent = studentRepo.save(student);
		}
		return retrievedStudent;
	}

}
