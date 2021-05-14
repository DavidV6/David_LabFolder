package com.labforward.notebook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotebookBean {
	
	@Autowired
	private NotebookDAO notebookDAO;

	public List<Notebook> listOfNotebooks() {
		return notebookDAO.getListNoteBooks();
	}
	
	public Long numberOfWords(Long idNotebook, String searchWord) {
		String text = notebookDAO.getTextNotebook(idNotebook);
		
		Long count = 0l;
		String searchText = " " + text + " ";
		String[] words = searchText.split("\\b"+ searchWord +"\\b");
		/**
		 * Number of splits done - 1 for an extra split
		 */
		count += words.length-1;
		
		return count;
	}
	
	public Long numberOfSimilarWords(Long idNotebook, String searchWord) {
		String text = notebookDAO.getTextNotebook(idNotebook);
		
		Long wordCount = this.numberOfWords(idNotebook, searchWord);
		
		Long count = 0l;
		String searchText = " " + text + " ";
		String[] words = searchText.split("\\b([a-zA-Z0-9]?"+ searchWord +"[a-zA-Z0-9]?)\\b");
		/**
		 * Number of splits done - 1 for an extra split
		 */
		count += words.length-1;
		
		return count-wordCount;
	}

}
