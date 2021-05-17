package com.labforward.notebook;

import java.util.List;

public class SearchObject {
	
	private Long numberOfWords;
	private List<String> similarWords;
	
	public SearchObject() {
		super();
	}

	public SearchObject(Long numberOfWords, List<String> similarWords) {
		super();
		this.numberOfWords = numberOfWords;
		this.similarWords = similarWords;
	}

	public Long getNumberOfWords() {
		return numberOfWords;
	}

	public void setNumberOfWords(Long numberOfWords) {
		this.numberOfWords = numberOfWords;
	}

	public List<String> getSimilarWords() {
		return similarWords;
	}

	public void setSimilarWords(List<String> similarWords) {
		this.similarWords = similarWords;
	}

	@Override
	public String toString() {
		return "SearchObject [numberOfWords=" + numberOfWords + ", similarWords=" + similarWords + "]";
	}

}
