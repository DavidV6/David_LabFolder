package com.labforward.notebook;

import java.util.Date;
import java.util.UUID;

public interface NotebookBase {

	UUID getId();
	String getUserName();
	String getNoteBookName();
	Date getDateUpdated();
	
}
