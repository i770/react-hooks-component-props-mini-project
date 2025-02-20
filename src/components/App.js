import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header.js";
import About from "../components/About.js";
import ArticleList from "../components/ArticleList.js";


console.log(blogData);

const posts = [
  { id: 1, title: "React Basics", date: "January 1, 2024", preview: "An introduction to React concepts." },
  { id: 2, title: "State and Props", date: "February 10, 2024", preview: "Understanding state management in React." },
  { id: 3, title: "Hooks Explained", date: "March 5, 2024", preview: "A deep dive into React Hooks." }
];

function App() {
  return (
    <div className="App">
      <Header name = "Victor Meyo" />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <About 
      img = "https://via.placeholder.com/215Links to an external site."
      about = "This is a blog about Victor."
      />
      <ArticleList posts = {posts}/>
    </div>
  );
}

export default App;
