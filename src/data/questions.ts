export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "In information retrieval systems, documents are primarily treated as:",
    options: ["Text files", "Vectors of word counts", "Database entries", "HTML pages"],
    correctAnswer: "Vectors of word counts"
  },
  {
    id: 2,
    question: "What does a 'Term-Document Matrix' store?",
    options: ["Only unique words", "Document metadata", "Word counts for all documents", "User queries"],
    correctAnswer: "Word counts for all documents"
  },
  {
    id: 3,
    question: "What is a primary challenge that necessitates PCA in Information Retrieval?",
    options: ["Too few documents", "Too many terms creating high dimensionality", "Lack of computing power", "Insufficient user queries"],
    correctAnswer: "Too many terms creating high dimensionality"
  },
  {
    id: 4,
    question: "What characterizes 'sparse data' in the context of IR?",
    options: ["Documents use all available words", "Most documents only use a few words, creating mostly zeros in the matrix", "Data is evenly distributed", "All terms appear in all documents"],
    correctAnswer: "Most documents only use a few words, creating mostly zeros in the matrix"
  },
  {
    id: 5,
    question: "Comparing high-dimensional vectors is:",
    options: ["Fast and efficient", "Slow and power-hungry", "Impossible", "Only possible with PCA"],
    correctAnswer: "Slow and power-hungry"
  },
  {
    id: 6,
    question: "What is the main purpose of PCA in Information Retrieval?",
    options: ["To increase dimensions", "To reduce dimensions while keeping important patterns", "To delete all data", "To create more queries"],
    correctAnswer: "To reduce dimensions while keeping important patterns"
  },
  {
    id: 7,
    question: "PCA squashes many axes into:",
    options: ["One axis", "Principal Components", "Random dimensions", "Zero dimensions"],
    correctAnswer: "Principal Components"
  },
  {
    id: 8,
    question: "In the example dataset, how many terms are used?",
    options: ["2 terms", "3 terms", "4 terms", "5 terms"],
    correctAnswer: "4 terms"
  },
  {
    id: 9,
    question: "What does D1 represent in the example?",
    options: ["'Information Model'", "'Data Search'", "'Data Information Search'", "'Model Search'"],
    correctAnswer: "'Data Search'"
  },
  {
    id: 10,
    question: "In a Term-Document Matrix, rows represent:",
    options: ["Documents", "Terms", "Queries", "Users"],
    correctAnswer: "Terms"
  },
  {
    id: 11,
    question: "In a Term-Document Matrix, columns represent:",
    options: ["Terms", "Queries", "Documents", "Words"],
    correctAnswer: "Documents"
  },
  {
    id: 12,
    question: "What is the first step in centering the data?",
    options: ["Delete all zeros", "Find the average usage of each term across all documents", "Multiply all values", "Sort the matrix"],
    correctAnswer: "Find the average usage of each term across all documents"
  },
  {
    id: 13,
    question: "After finding the average, what do we do in the centering process?",
    options: ["Add the average to every value", "Multiply by the average", "Subtract the average from every value", "Ignore the average"],
    correctAnswer: "Subtract the average from every value"
  },
  {
    id: 14,
    question: "Why do we center the data in PCA?",
    options: ["To increase dimensionality", "To help PCA focus on differences between documents, not commonalities", "To delete unnecessary data", "To make calculations harder"],
    correctAnswer: "To help PCA focus on differences between documents, not commonalities"
  },
  {
    id: 15,
    question: "What does PCA do to identify main patterns?",
    options: ["Deletes random axes", "Rotates the axes to find directions with the most spread", "Creates new documents", "Eliminates all patterns"],
    correctAnswer: "Rotates the axes to find directions with the most spread"
  },
  {
    id: 16,
    question: "In the example, Pattern 1 shows which words appearing together?",
    options: ["Info & Model", "Data & Search", "Search & Information", "Model & Data"],
    correctAnswer: "Data & Search"
  },
  {
    id: 17,
    question: "Pattern 2 in the example shows which words appearing together?",
    options: ["Data & Search", "Model & Search", "Info & Model", "Data & Information"],
    correctAnswer: "Info & Model"
  },
  {
    id: 18,
    question: "These word groups identified by PCA form:",
    options: ["New documents", "Principal Components", "Query vectors", "Random clusters"],
    correctAnswer: "Principal Components"
  },
  {
    id: 19,
    question: "In the example, the original space has how many word vectors?",
    options: ["2", "3", "4 (Data, Search, Model, Info)", "5"],
    correctAnswer: "4 (Data, Search, Model, Info)"
  },
  {
    id: 20,
    question: "After dimension reduction in the example, how many Principal Components are used?",
    options: ["1", "2 (Concept A, Concept B)", "3", "4"],
    correctAnswer: "2 (Concept A, Concept B)"
  },
  {
    id: 21,
    question: "After PCA reduction, documents are mapped using:",
    options: ["The same number of coordinates as before", "More coordinates than before", "Just two coordinates instead of four", "No coordinates"],
    correctAnswer: "Just two coordinates instead of four"
  },
  {
    id: 22,
    question: "For the query Q: 'data search', how is it treated?",
    options: ["As a special case", "Exactly like a document", "It is ignored", "As a different data type"],
    correctAnswer: "Exactly like a document"
  },
  {
    id: 23,
    question: "The query 'data search' is converted to which vector?",
    options: ["[0, 0, 1, 1]", "[1, 0, 1, 0]", "[1, 1, 0, 0]", "[0, 1, 0, 1]"],
    correctAnswer: "[1, 1, 0, 0]"
  },
  {
    id: 24,
    question: "Where is the query projected after vectorization?",
    options: ["Into a separate space", "Into the same 2D PCA space as documents", "Into 3D space", "Not projected at all"],
    correctAnswer: "Into the same 2D PCA space as documents"
  },
  {
    id: 25,
    question: "In document retrieval, similarity is calculated in:",
    options: ["The original high-dimensional space", "A random space", "The reduced space", "Multiple spaces simultaneously"],
    correctAnswer: "The reduced space"
  },
  {
    id: 26,
    question: "In the example, which document is closest to Query Q?",
    options: ["D3", "D2", "D1", "All equally close"],
    correctAnswer: "D1"
  },
  {
    id: 27,
    question: "Which document is retrieved first for the query 'data search'?",
    options: ["D2", "D3", "D1", "None"],
    correctAnswer: "D1"
  },
  {
    id: 28,
    question: "Why does PCA help in retrieval?",
    options: ["It considers all terms equally", "It ignores the noise of irrelevant terms", "It makes documents longer", "It creates more queries"],
    correctAnswer: "It ignores the noise of irrelevant terms"
  },
  {
    id: 29,
    question: "What is one interpretation result of using PCA?",
    options: ["Worse clustering", "Better clustering - documents with similar meanings are grouped closer", "Random grouping", "No grouping at all"],
    correctAnswer: "Better clustering - documents with similar meanings are grouped closer"
  },
  {
    id: 30,
    question: "PCA provides noise reduction by:",
    options: ["Deleting all data", "Filtering out irrelevant variations in word usage", "Adding more dimensions", "Ignoring all queries"],
    correctAnswer: "Filtering out irrelevant variations in word usage"
  },
  {
    id: 31,
    question: "How does PCA achieve simplicity in IR?",
    options: ["By making the search space larger", "By making the search space smaller, making matches easier to find", "By deleting all documents", "By creating complex algorithms"],
    correctAnswer: "By making the search space smaller, making matches easier to find"
  },
  {
    id: 32,
    question: "What advantage does dimensionality reduction provide?",
    options: ["Increases storage requirements", "Saves storage and compute time", "Makes computation slower", "Requires more memory"],
    correctAnswer: "Saves storage and compute time"
  },
  {
    id: 33,
    question: "PCA provides efficiency through:",
    options: ["Slower similarity checks", "More complex algorithms", "Faster similarity checks between queries and docs", "Eliminating all checks"],
    correctAnswer: "Faster similarity checks between queries and docs"
  },
  {
    id: 34,
    question: "PCA helps uncover hidden:",
    options: ["Errors", "Themes (concepts) in the collection", "Bugs", "Users"],
    correctAnswer: "Themes (concepts) in the collection"
  },
  {
    id: 35,
    question: "What is a limitation of PCA in terms of data?",
    options: ["It increases dimensions", "Information loss - reducing dimensions means throwing away fine-grained details", "Perfect preservation of all data", "No data changes"],
    correctAnswer: "Information loss - reducing dimensions means throwing away fine-grained details"
  },
  {
    id: 36,
    question: "A limitation regarding interpretation is that:",
    options: ["Components are easy to understand", "Principal components are mathematical axes and don't always look like simple words", "All components are words", "Interpretation is always straightforward"],
    correctAnswer: "Principal components are mathematical axes and don't always look like simple words"
  },
  {
    id: 37,
    question: "In the given example, what is the term count for 'Data' in D1?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "1"
  },
  {
    id: 38,
    question: "In the example, what is the term count for 'Model' in D2?",
    options: ["0", "1", "2", "3"],
    correctAnswer: "1"
  },
  {
    id: 39,
    question: "In the example, what is the term count for 'Search' in D2?",
    options: ["1", "2", "0", "3"],
    correctAnswer: "0"
  },
  {
    id: 40,
    question: "Document D3 in the example is:",
    options: ["'Data Search'", "'Information Model'", "'Data Information Search'", "'Model Data'"],
    correctAnswer: "'Data Information Search'"
  },
  {
    id: 41,
    question: "How many documents are in the example dataset?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "3"
  },
  {
    id: 42,
    question: "What does PCA simplify in IR systems?",
    options: ["Query creation", "Document representation", "User interface", "Database structure"],
    correctAnswer: "Document representation"
  },
  {
    id: 43,
    question: "PCA makes traditional IR systems:",
    options: ["Slower and less effective", "Faster and more effective at catching the 'big picture'", "Unchanged", "More complex"],
    correctAnswer: "Faster and more effective at catching the 'big picture'"
  },
  {
    id: 44,
    question: "Every unique word in a document collection represents:",
    options: ["A query", "A dimension", "A user", "A database"],
    correctAnswer: "A dimension"
  },
  {
    id: 45,
    question: "If there are thousands of unique words, there are:",
    options: ["Thousands of documents", "Thousands of axes/dimensions", "Thousands of users", "Thousands of queries"],
    correctAnswer: "Thousands of axes/dimensions"
  },
  {
    id: 46,
    question: "The term 'sparse data' in IR means the matrix is mostly:",
    options: ["Ones", "Twos", "Zeros", "Random numbers"],
    correctAnswer: "Zeros"
  },
  {
    id: 47,
    question: "In the example, 'Information' appears in which documents?",
    options: ["D1 only", "D2 and D3", "D1 and D2", "All documents"],
    correctAnswer: "D2 and D3"
  },
  {
    id: 48,
    question: "The main goal of PCA in IR is to focus on:",
    options: ["Individual words", "The 'big picture' or main patterns", "Specific characters", "Punctuation"],
    correctAnswer: "The 'big picture' or main patterns"
  },
  {
    id: 49,
    question: "After PCA projection, what happens to the query vector?",
    options: ["It is deleted", "It has its own point in the reduced coordinate system", "It remains in the original space only", "It is ignored"],
    correctAnswer: "It has its own point in the reduced coordinate system"
  },
  {
    id: 50,
    question: "The primary reason for using PCA in Information Retrieval is to address:",
    options: ["Lack of documents", "The curse of dimensionality and computational inefficiency", "Too many users", "Database errors"],
    correctAnswer: "The curse of dimensionality and computational inefficiency"
  }
];

export const getQuestionById = (id: number): Question | undefined => {
  return questions.find(q => q.id === id);
};
