const GET_ALL_PROJECTS = `
  query GetAllProjects {
    projects {
      nodes {
        id
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        projectDetails {
          clientName
          projectType
          challenge
          solution
          results
          testimonial
          testimonialAuthor
        }
      }
    }
  }
`;


export async function getProjects() {
  try {
    // Try to fetch data
    const response = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_ALL_PROJECTS
      })
    });

    // Check if request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    return json.data.projects.nodes;

  } catch (error) {
    // If anything goes wrong, log it and return empty array
    console.error('Error fetching projects:', error);
    return [];  // Safe fallback
  }
}