package esd.academiaa.dto;

import esd.academia.model.Faculty;

public class CourseDTO {
	
	private long course_id;
	private String courseCode;
	private String courseName;
	private String description;
	private int credits;
	private int capacity;
	private Faculty facultyId;
	public CourseDTO() {
		super();
	}
	public long getCourse_id() {
		return course_id;
	}
	public void setCourse_id(long course_id) {
		this.course_id = course_id;
	}
	public String getCourseCode() {
		return courseCode;
	}
	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}
	public String getCourseName() {
		return courseName;
	}
	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public int getCredits() {
		return credits;
	}
	public void setCredits(int credits) {
		this.credits = credits;
	}
	public int getCapacity() {
		return capacity;
	}
	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}
	public Faculty getFacultyId() {
		return facultyId;
	}
	public void setFacultyId(Faculty facultyId) {
		this.facultyId = facultyId;
	}

}
