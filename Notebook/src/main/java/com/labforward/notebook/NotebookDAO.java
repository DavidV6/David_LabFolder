package com.labforward.notebook;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface NotebookDAO extends Repository<Notebook, Long> {
	
	@Query("select nb from Notebook nb")
	public List<Notebook> getListNoteBooks();
	
	@Query("select nb.text from Notebook nb where nb.id = ?1")
	public String getTextNotebook(Long idNotebook);
	
}
