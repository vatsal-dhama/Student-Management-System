package esd.academiaa.dto;

import esd.academia.model.Faculty;

public class FacultyDTO{
	private long faculty_id;
	private String firstname;
	private String lastname;
	private String email;
	private String photourl;
	private String title;
	public FacultyDTO() {
		super();
	}
	public FacultyDTO(Faculty fac) {
		super();
		this.firstname = fac.getFirstname();
		this.lastname = fac.getLastname();
		this.email = fac.getEmail();
		this.photourl = fac.getPhotourl();
		this.title = fac.getTitle();
	}
	public long getFaculty_id() {
		return faculty_id;
	}
	public void setFaculty_id(long faculty_id) {
		this.faculty_id = faculty_id;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhotourl() {
		return photourl;
	}
	public void setPhotourl(String photourl) {
		this.photourl = photourl;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	@Override
	public String toString() {
		return "FacultyDTO [faculty_id=" + faculty_id + ", firstname=" + firstname + ", lastname=" + lastname
				+ ", email=" + email + ", photourl=" + photourl + ", title=" + title + "]";
	}
}
