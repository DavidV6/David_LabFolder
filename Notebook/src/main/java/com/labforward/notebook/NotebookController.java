package com.labforward.notebook;

import java.util.List;
import java.util.UUID;

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
	public List<NotebookBase> getAllNoteBooks() {
		return notebookBean.listOfNotebooks();
	}
	
	@GetMapping("/notebook")
	public Notebook findNotebookById(@RequestParam String id) {
		return notebookBean.findNotebookById(UUID.fromString(id));
	}
	
	@GetMapping("/notebook/search")
	public SearchObject searchNotebook(@RequestParam String idNotebook, @RequestParam String searchWord) {
		return notebookBean.searchWords(UUID.fromString(idNotebook), searchWord);
	}

}
