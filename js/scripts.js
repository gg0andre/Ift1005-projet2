// ======================================================
// js / scripts.js
// ======================================================

// When document is ready
// ======================================================

/**
 * Execute all my functions.
 *
 * @param {*} data : Your aunt's data.
 */
var dynamicActions = function(data) {
  $(document).ready(function() {
    updateDocumentTitle();
    creerArticles();
    // function3()...
    // function4()...
    // etc.
  });
};

// My functions
// ======================================================

/**
 * Update the document's title by using the provided data
 * from my aunt.
 */
var updateDocumentTitle = function() {
  // Some code...
  document.title = data.documentTitle;
};

//creer les articles
var creerArticles = function() {
  for (var i=0; i<3;i++) {
    document.getElementById("content"+i).innerHTML = data.articles[i].content;
    document.getElementById("subtitle"+i).innerHTML = data.articles[i].subtitle;
    document.getElementById("title"+i).innerHTML = data.articles[i].title;
  }
};