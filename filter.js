// Sample data structure for pages
const pages = [
    {
      title: "3D Default",
      tags: ["Blocks", "Models", "Vanilla-like"],
      content: "A light-weight resource pack mainly provide vanilla-look 3D models"
    }
    // Add more pages as needed
  ];
  
  // Function to filter pages by tags
  function filterPagesByTags(searchTags) {
    return pages.filter(page => 
      searchTags.every(tag => page.tags.includes(tag))
    );
  }
  
  // Example usage
  const searchTags = ["Blocks", "Models", "Vanilla-Like"];
  const filteredPages = filterPagesByTags(searchTags);
  
  console.log(filteredPages);
  