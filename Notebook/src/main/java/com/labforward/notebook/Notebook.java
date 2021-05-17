package com.labforward.notebook;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "NOTEBOOK")
public class Notebook implements NotebookBase {

	@Id
	private UUID id;
	private String userName;
	private String noteBookName;
	private String text;
	@Temporal(TemporalType.DATE)
	private Date dateUpdated;
	
	public Notebook() {
		super();
	}
	
	public Notebook(UUID id, String userName, String noteBookName) {
		super();
		this.id = id;
		this.userName = userName;
		this.noteBookName = noteBookName;
	}

	public Notebook(UUID id, String userName, String noteBookName, String text, Date dateUpdated) {
		super();
		this.id = id;
		this.userName = userName;
		this.noteBookName = noteBookName;
		this.text = text;
		this.dateUpdated = dateUpdated;
	}

	public UUID getId() {
		return id;
	}

	public void setId(UUID id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getNoteBookName() {
		return noteBookName;
	}

	public void setNoteBookName(String noteBookName) {
		this.noteBookName = noteBookName;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public Date getDateUpdated() {
		return dateUpdated;
	}

	public void setDateUpdated(Date dateUpdated) {
		this.dateUpdated = dateUpdated;
	}

	@Override
	public String toString() {
		return "Notebook [id=" + id + ", userName=" + userName + ", noteBookName=" + noteBookName + ", text=" + text
				+ ", dateUpdated=" + dateUpdated + "]";
	}
	
}
