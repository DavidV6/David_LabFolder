package com.labforward.notebook;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class NotebookBean {
	
	@Autowired
	private NotebookDAO notebookDAO;

	public List<NotebookBase> listOfNotebooks() {
		return notebookDAO.findAll();
	}
	
	public Notebook findNotebookById(UUID id) {
		return notebookDAO.findById(id).get(0);
	}
	
	public SearchObject searchWords(UUID id, String searchWord) {
		Long numberOfWords = this.numberOfWords(id, searchWord);
		List<String> similarWords = this.similarWords(id, searchWord);
				
		return new SearchObject(numberOfWords, similarWords);
	}
	
	private Long numberOfWords(UUID idNotebook, String searchWord) {
		String text = notebookDAO.getTextNotebook(idNotebook);
		
		String searchText = " " + text + " ";		
		Pattern pattern = Pattern.compile("\\b"+ searchWord +"\\b");
		Matcher matcher = pattern.matcher(searchText);

		Long count = 0l;
		while(matcher.find()) {
			count += 1;
		}
		
		return count;
	}
	
	private List<String> similarWords(UUID idNotebook, String searchWord) {
		String text = notebookDAO.getTextNotebook(idNotebook);
		
		String searchText = " " + text + " ";		
		Pattern pattern = Pattern.compile("\\b([a-zA-Z0-9]"+ searchWord + "|" + searchWord + "[a-zA-Z0-9])\\b");
		Matcher matcher = pattern.matcher(searchText);

		List<String> listMatches = new ArrayList<String>();
		while(matcher.find()) {
			if(!listMatches.contains(matcher.group())) {
				listMatches.add(matcher.group());	
			}
		}
		
		return listMatches;
	}

}
