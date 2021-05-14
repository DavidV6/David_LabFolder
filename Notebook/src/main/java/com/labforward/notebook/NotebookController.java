package com.labforward.notebook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class NotebookController {
	
	@Autowired
	private NotebookBean notebookBean;
	
	@GetMapping("/notebooks")
	public List<Notebook> getAllNoteBooks() {
		return notebookBean.listOfNotebooks();
	}
	
	@GetMapping("/notebook/words")
	public Long getWordsCount(@RequestParam Long idNotebook, @RequestParam String searchWord) {
		return notebookBean.numberOfWords(idNotebook, searchWord);
	}
	
	@GetMapping("/notebook/similarWords")
	public Long getSimilarWordsCount(@RequestParam Long idNotebook, @RequestParam String searchWord) {
		return notebookBean.numberOfSimilarWords(idNotebook, searchWord);
	}

}
