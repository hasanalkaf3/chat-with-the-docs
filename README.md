<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">

<img src="readmeai/assets/logos/purple.svg" width="30%" style="position: relative; top: 0; right: 0;" alt="Project Logo"/>

# CHAT-WITH-THE-DOCS

<em></em>

<!-- BADGES -->
<img src="https://img.shields.io/github/license/hasanalkaf3/chat-with-the-docs?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
<img src="https://img.shields.io/github/last-commit/hasanalkaf3/chat-with-the-docs?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/hasanalkaf3/chat-with-the-docs?style=default&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/hasanalkaf3/chat-with-the-docs?style=default&color=0080ff" alt="repo-language-count">

<!-- default option, no dependency badges. -->

<!-- default option, no dependency badges. -->

</div>
<br>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Overview

---

## Features

| **Component**       | **Details**                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️ **Architecture** | Uses TypeScript for type safety, integrates with Pinecone for vector databases, and employs Tailwind CSS for responsive UI development. |

---

## Project Structure

```sh
└── chat-with-the-docs/
    ├── app
    │   ├── api
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── content
    │   └── learn
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── postcss.config.mjs
    ├── public
    │   ├── file.svg
    │   ├── globe.svg
    │   ├── next.svg
    │   ├── vercel.svg
    │   └── window.svg
    ├── scripts
    │   └── ingest.js
    └── tsconfig.json
```

### Project Index

<details open>
	<summary><b><code>CHAT-WITH-THE-DOCS/</code></b></summary>
	<!-- __root__ Submodule -->
	<details>
		<summary><b>__root__</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ __root__</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
					<td style='padding: 8px;'>- Next-env.d.ts, <strong>/<em>.ts, </strong>/</em>.tsx,.next/types/<em>*/</em>.ts, and scripts/ingest.js<br>- This indicates that the project uses Next.js for static site generation or server-side rendering, as ingest.js' is a common script in Next.js projects.They've also excluded node_modules to prevent unnecessary files from being included when building, which is standard practice to keep the output clean.The summary needs to start with a verb or noun and avoid phrases like This file<br>- It should be concise, around 50-70 words<br>- I need to focus on what this configuration achieves in terms of project structure—probably setting up the build process for TypeScript projects using Next.js with ES2017 features.Putting it all together, the summary should mention that the tsconfig.json file configures a TypeScript compiler setup for an ES2017 Next.js project, including necessary libraries and scripts to manage builds effectively.</think>The <code>tsconfig.json</code> file configures a TypeScript compiler setup for an ES2017 Next.js project<br>- It includes essential libraries like dom', dom.iterable, and esnext for React development, specifies build options such as incremental compilation and module resolution, and lists included files including Next.js environment scripts and TypeScript source files to ensure efficient and consistent builds.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
					<td style='padding: 8px;'>- It imports Tailwind CSS and sets up a PostCSS plugin configuration<br>- The user wants a summary that highlights the main purpose without diving into technical details<br>- They also mentioned to avoid certain phrases like This file or The file<br>- So I should start with a verb or noun, maybe something like configures since it's setting up the CSS configuration.I need to make sure not to include any quotes, code snippets, bullets, or lists<br>- The response should be between 50-70 words<br>- Also, focusing on what this file achieves in terms of the project architecture—probably enabling Tailwind CSS styling through PostCSS plugins.Putting it all together, I'll craft a sentence that states clearly how this configuration enables Tailwind's CSS styling throughout the project.</think>This configuration file sets up Tailwind CSS styling for the entire project using the PostCSS plugin, enabling rich, responsive design across all components.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/pnpm-lock.yaml'>pnpm-lock.yaml</a></b></td>
					<td style='padding: 8px;'>AutoInstallPeersEnables automatic installation of peer dependencies (e.g., @openai/zod).-<strong>excludeLinksFromLockfileExcludes dependency links from the lock file unless explicitly added.-</strong>Dependencies-<code>@langchain/core</code>: An NLP framework by OpenAI, version 0.3.62.-<code>@langchain/ollama</code>: Another LangChain-related package.This configuration ensures consistent and conflict-free dependency management for the project.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/package.json'>package.json</a></b></td>
					<td style='padding: 8px;'>- Name, version, private flag, type as module, scripts for development, build, start, and linting<br>- It also lists dependencies and devDependencies which are crucial for understanding what technologies are being used.The user wants a summary that starts with a verb or noun to make it clear and concise<br>- They specified avoiding words like This file or The file<br>- Also, no quotes, code snippets, bullets, or lists—just 50-70 words.I should focus on what the package.json achieves in terms of architecture<br>- It's likely that this JSON is part of a Next.js application since it includes scripts for dev, build, start, and lint<br>- The dependencies include LangChain, Pinecone, and Cheerio, which are used for AI integration, suggesting it's an RAG (Retrieval-Augmented Generation) system.The private flag indicates it's not a public package, so maybe it's part of a team project or internal use<br>- The module type means it's a single file or shared library structure.Putting this together, the summary should mention that package.json configures a Next.js app with AI tools and integrates with databases using LangChain and Pinecone<br>- It's private, indicating it's for internal use within a team.</think>The <code>package.json</code> file configures a Next.js application implementing an RAG (Retrieval-Augmented Generation) system<br>- It specifies dependencies like LangChain, Pinecone, and Cheerio for AI integration, alongside Next.js scripts for development and deployment<br>- The private flag indicates its intended for internal use within the project team.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/next.config.ts'>next.config.ts</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, I need to help the user by delivering a succinct summary of their next.config.ts file within the context of their project structure and additional instructions.First, looking at the provided file path and content, it's clear that this is a configuration file in TypeScript<br>- It imports NextConfig from next and defines an object with various config options before exporting it as default.The user wants a summary highlighting the main purpose without technical details<br>- They also mentioned to avoid certain phrases like This file or The file<br>- So I should start with a verb or noun, maybe something like configures.I need to reference that this configuration is part of their project structure and that it's used by Next.js<br>- Also, the config options are tailored for specific needs without getting into implementation details.Putting it all together, ensuring it's between 50-70 words and avoiding any markdown or formatting elements.</think>The next.config.ts file configures a Next.js application, setting up essential project settings such as build, caching, and routing configurations<br>- This ensures the project adheres to best practices for development, deployment, and performance optimization without detailing specific implementation nuances.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
					<td style='padding: 8px;'>- Configuring ESLint to work within the Next.js TypeScript ecosystem<br>- Mentioning that it extends core settings with typescript-specific rules makes sense<br>- Keep it clear and concise, avoiding any jargon or implementation details.</think>This ESLint configuration file sets up a custom ESLint rule set tailored for a Next.js project using TypeScript<br>- It extends the core Next.js web vitals with additional TypeScript-specific rules by leveraging FlatCompat to integrate external ESLint configurations effectively.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- scripts Submodule -->
	<details>
		<summary><b>scripts</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ scripts</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/scripts/ingest.js'>ingest.js</a></b></td>
					<td style='padding: 8px;'>- I need to write a summary that highlights the main purpose without technical details<br>- It should start with a verb or noun, avoid quotes, code snippets, bullets, etc., and be between 50-70 words.I also have to reference additional project data provided but not included here<br>- The project structure is in <code>scripts/ingest.js</code>, so it's likely part of a larger system, maybe an NLP pipeline or document ingester for a React app based on markdown files.The summary should mention the key steps: reading markdown files, processing them into structured documents, splitting into chunks, generating embeddings, and storing in Pinecone<br>- It should convey that this script automates data ingestion into a vector database.I need to avoid using phrases like This file or The file<br>- Instead, start with an action verb like This script or The script.Putting it all together: The script processes markdown files from a specific directory, converts them into structured documents, splits them into chunks of 1000 characters each with 200 overlap, generates embeddings using Ollama, and stores these in Pinecone for later use.I should make sure the summary is concise, clear, and within the word limit<br>- It needs to be professional yet straightforward, fitting into a README's description section.</think>This script processes markdown files from <code>./content/learn</code>, converts them into structured documents using remark libraries, splits them into chunks of 1000 characters with 200 overlap, generates embeddings via Ollama, and stores these in Pinecone for vector-based data storage.</td>
				</tr>
			</table>
		</blockquote>
	</details>
	<!-- app Submodule -->
	<details>
		<summary><b>app</b></summary>
		<blockquote>
			<div class='directory-path' style='padding: 8px 0; color: #666;'>
				<code><b>⦿ app</b></code>
			<table style='width: 100%; border-collapse: collapse;'>
			<thead>
				<tr style='background-color: #f8f9fa;'>
					<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
					<th style='text-align: left; padding: 8px;'>Summary</th>
				</tr>
			</thead>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/app/page.tsx'>page.tsx</a></b></td>
					<td style='padding: 8px;'>- Think>Okay, so I need to help the user by writing a succinct summary of their app/page.tsx file within the context of their project structure and codebase architecture<br>- The main goal is to highlight what this file achieves without diving into technical details.First, looking at the provided code, it's a React component that handles a chat interface<br>- It uses state management with useState for messages, input, and loading status<br>- There's an event handler for form submission, which sends a POST request to /api/chat<br>- The response is then displayed, handling errors appropriately.The user wants this summary in the context of their entire codebase architecture<br>- So I should focus on how this component integrates with other parts, like the API call and data flow<br>- It's important to mention that it handles sending questions and displaying bot responses while managing loading states.I also need to avoid using phrases like This file and start with a verb or noun for clarity<br>- The summary should be between 50-70 words without any quotes, code snippets, bullets, or lists.Putting it all together, the summary should mention that this component manages user messages, sends requests to an API, displays bot responses, handles errors, and shows loading states.</think>This React component serves as a chat interface for a React Documentation project<br>- It manages user messages using state, accepts input through a form, processes requests via an API call, and displays bot responses while handling errors and loading states effectively.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
					<td style='padding: 8px;'>- Font-geist-sans for a sans-serif font and--font-geist-mono for a monospace font<br>- Both are applied to the body element in their layout.Looking at the metadata, the title is Create Next App with a description saying it's generated by create next app<br>- The export function RootLayout wraps the children inside an html tag with antialiased set to true.The user wants a succinct summary that highlights what this file achieves without diving into implementation details<br>- They also mentioned focusing on the main purpose and use in the context of the entire project, referencing additional data provided.So I should start by identifying the key elements: it's a layout file, uses specific fonts, applies them to body, and includes metadata for the app<br>- The summary needs to avoid phrases like this file and be concise, around 50-70 words.I'll structure it to mention that this file configures the layout with specified fonts and sets up metadata, ensuring consistency across the project.</think>The <code>app/layout.tsx</code> file configures the layout for a Next.js application by applying specific font styles (<code>--font-geist-sans</code> for a sans-serif font and <code>--font-geist-mono</code> for a monospace font) to the body element<br>- It also sets up metadata, including the title Create Next App" and its description, ensuring consistency in branding and styling across the application.</td>
				</tr>
				<tr style='border-bottom: 1px solid #eee;'>
					<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/app/globals.css'>globals.css</a></b></td>
					<td style='padding: 8px;'>- App/globals.css<br>- That tells me its located in the app directory, which is part of the main application structure<br>- Now, examining the file content:-They're importing Tailwind CSS, which is a popular utility-first CSS framework.-There are some custom variables defined for background and foreground colors, as well as fonts.-The:root selector sets default color variables based on system settings but also allows overriding with media queries for dark themes.-In the media query for prefers-color-scheme: dark, they adjust the background and text colors accordingly.The user wants a summary that highlights the main purpose of this file in the project's architecture<br>- They specified to avoid technical details and focus on what it achieves<br>- Also, I should reference additional data provided, which includes the project structure as app/globals.css.I need to start with a verb or noun for clarity<br>- Maybe something like This CSS file..<br>- since that clearly states its role<br>- The summary should mention Tailwind import because it's essential for styling consistency across the app<br>- Then, note how the variables allow customization of colors and fonts both at runtime and through media queries.I must avoid using phrases like this file or the file<br>- Also, no quotes, code snippets, bullets, etc., so I'll keep it in a flowing sentence structure<br>- The response should be between 50-70 words.Putting it all together: This CSS file sets up Tailwind variables for consistent styling across the app<br>- It defines default colors and fonts that can be overridden at runtime or via media queries.That covers the main points without getting too technical, starts with a verb, avoids prohibited phrases, and stays within word limits.</think>This CSS file sets up Tailwind variables for consistent styling across the app<br>- It defines default colors and fonts that can be overridden at runtime or via media queries.</td>
				</tr>
			</table>
			<!-- api Submodule -->
			<details>
				<summary><b>api</b></summary>
				<blockquote>
					<div class='directory-path' style='padding: 8px 0; color: #666;'>
						<code><b>⦿ app.api</b></code>
					<!-- chat Submodule -->
					<details>
						<summary><b>chat</b></summary>
						<blockquote>
							<div class='directory-path' style='padding: 8px 0; color: #666;'>
								<code><b>⦿ app.api.chat</b></code>
							<table style='width: 100%; border-collapse: collapse;'>
							<thead>
								<tr style='background-color: #f8f9fa;'>
									<th style='width: 30%; text-align: left; padding: 8px;'>File Name</th>
									<th style='text-align: left; padding: 8px;'>Summary</th>
								</tr>
							</thead>
								<tr style='border-bottom: 1px solid #eee;'>
									<td style='padding: 8px;'><b><a href='https://github.com/hasanalkaf3/chat-with-the-docs/blob/master/app/api/chat/route.ts'>route.ts</a></b></td>
									<td style='padding: 8px;'>- NextResponse for HTTP responses, OllamaEmbeddings and Pinecone from LangChain, which are used for embedding questions and searching through documents respectively<br>- Then theres a function that handles POST requests—so when someone sends a request to this endpoint, what happens?The function starts by extracting the question from the JSON request<br>- If there's no question, it returns a 400 error<br>- Otherwise, it initializes Pinecone for document storage and Ollama for generating embeddings<br>- It embeds the question, queries the Pinecone index for relevant documents, logs the response, processes those documents into text, creates a prompt using ChatPromptTemplate with both context and question, runs this through the Ollama chat model to get an answer, and returns it.So the main purpose of this file is to handle the chat flow: getting a user's question, embedding it for search, retrieving relevant information, formatting that into a prompt, and generating a response using another model<br>- It all ties back to integrating external services like Pinecone and Ollama within a Next.js app.I need to make sure the summary highlights what this file achieves without diving into specifics like imports or error handling<br>- Also, it should be concise, around 50-70 words, starting with a verb or noun for clarity.</think>This file implements a chat route that processes user questions by embedding them and retrieving relevant documents using Pinecone<br>- It formats the retrieved context into a prompt for an Ollama model to generate responses, handling errors gracefully and returning structured JSON outputs for Next.js API handling.</td>
								</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### Installation

Build chat-with-the-docs from the source and intsall dependencies:

1. **Clone the repository:**

   ```sh
   ❯ git clone https://github.com/hasanalkaf3/chat-with-the-docs
   ```

2. **Navigate to the project directory:**

   ```sh
   ❯ cd chat-with-the-docs
   ```

3. **Install the dependencies:**

<!-- SHIELDS BADGE CURRENTLY DISABLED -->

    <!-- [![npm][npm-shield]][npm-link] -->
    <!-- REFERENCE LINKS -->
    <!-- [npm-shield]: https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white -->
    <!-- [npm-link]: https://www.npmjs.com/ -->

    **Using [npm](https://www.npmjs.com/):**

    ```sh
    ❯ npm install
    ```

### Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

### Testing

Chat-with-the-docs uses the {**test_framework**} test framework. Run the test suite with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm test
```

---

## Roadmap

- [x] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

## Contributing

- **💬 [Join the Discussions](https://github.com/hasanalkaf3/chat-with-the-docs/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/hasanalkaf3/chat-with-the-docs/issues)**: Submit bugs found or log feature requests for the `chat-with-the-docs` project.
- **💡 [Submit Pull Requests](https://github.com/hasanalkaf3/chat-with-the-docs/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/hasanalkaf3/chat-with-the-docs
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/hasanalkaf3/chat-with-the-docs/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=hasanalkaf3/chat-with-the-docs">
   </a>
</p>
</details>

---

## License

Chat-with-the-docs is protected under the [LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## Acknowledgments

- Credit `contributors`, `inspiration`, `references`, etc.

<div align="right">

[![][back-to-top]](#top)

</div>

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square

---
