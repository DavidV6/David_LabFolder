package com.labforward.notebook;

import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(NotebookController.class)
@AutoConfigureRestDocs(outputDir = "target/snippets")
public class NotebookTests {

	@Autowired
	private MockMvc mockMvc;
	
	@MockBean
	NotebookDAO notebookDaoMock;
	
	@BeforeEach
	public void setUp() throws SQLException {
		Mockito.when(notebookDaoMock.findAll()).thenReturn(findAllMock());
	}
	
	@Test
	public void getNotebooks() throws Exception {
		this.mockMvc.perform(get("/notebooks"))
		.andDo(print())
		.andExpect(status().isOk())
		.andExpect(content().contentType(MediaType.APPLICATION_JSON))
		.andDo(document("NotebookController"));
	}
	
	@TestConfiguration	
	static class TestConfig {
		@Bean
		public NotebookBean notebookBean() {
			return new NotebookBean();
		}
	}
	
	private List<NotebookBase> findAllMock() {
		List<NotebookBase> ret = new ArrayList<NotebookBase>();
		ret.add(new Notebook(UUID.randomUUID(), "David", "Test Notebook 1"));
		ret.add(new Notebook(UUID.randomUUID(), "TestUser", "Test Notebook 2"));
		return ret;
	}

}
