package com.labforward.notebook;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class NotebookController {
	
	@Autowired
	private NotebookBean notebookBean;
	
	@RequestMapping(value = "/notebooks", method=RequestMethod.GET)
	public List<NotebookBase> getAllNoteBooks() {
		return notebookBean.listOfNotebooks();
	}
	
	@RequestMapping(value = "/notebook", method=RequestMethod.GET)
	public Notebook findNotebookById(@RequestParam String id) {
		return notebookBean.findNotebookById(UUID.fromString(id));
	}
	
	@RequestMapping(value = "/notebook/search", method=RequestMethod.GET)
	public SearchObject searchNotebook(@RequestParam String idNotebook, @RequestParam String searchWord) {
		return notebookBean.searchWords(UUID.fromString(idNotebook), searchWord);
	}

}
