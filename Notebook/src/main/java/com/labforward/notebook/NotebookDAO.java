package com.labforward.notebook;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface NotebookDAO extends Repository<Notebook, UUID> {
		
	public List<NotebookBase> findAll();
	
	public List<Notebook> findById(UUID id);
	
	public List<Notebook> findByNoteBookName(String noteBookName);
	
	
	
	@Query("select nb.text from Notebook nb where nb.id = ?1")
	public String getTextNotebook(UUID idNotebook);
	
}
