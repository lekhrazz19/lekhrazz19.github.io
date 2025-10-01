# My Hugo Portfolio

This is a personal portfolio website built using Hugo and hosted on GitHub Pages. The project showcases my work, skills, and experiences.

## Project Structure

The project is organized as follows:

```
my-hugo-portfolio
├── .github
│   └── workflows
│       └── hugo.yml          # GitHub Actions workflow for building and deploying the site
├── archetypes
│   └── default.md             # Default template for new content
├── content
│   ├── posts
│   │   └── _index.md          # Index for the posts section
│   └── _index.md              # Index for the main content section
├── layouts
│   ├── _default
│   │   ├── baseof.html        # Base template for the site
│   │   ├── list.html          # Template for lists of content
│   │   └── single.html        # Template for individual content pages
│   └── index.html             # Template for the homepage
├── static
│   ├── css
│   │   └── style.css          # CSS styles for the site
│   └── js
│       └── main.js            # JavaScript code for interactive features
├── config.toml                # Configuration file for the Hugo site
├── .gitignore                 # Files and directories to ignore by Git
└── README.md                  # Documentation for the project
```

## Getting Started

To set up the project locally, follow these steps:

1. **Install Hugo**: Make sure you have Hugo installed on your machine. You can download it from [the official Hugo website](https://gohugo.io/getting-started/installation/).

2. **Clone the Repository**: Clone this repository to your local machine using:
   ```
   git clone https://github.com/yourusername/my-hugo-portfolio.git
   ```

3. **Navigate to the Project Directory**:
   ```
   cd my-hugo-portfolio
   ```

4. **Run the Development Server**: Start the Hugo development server to view your site locally:
   ```
   hugo server
   ```
   Open your browser and go to `http://localhost:1313` to see your portfolio.

## Deployment

This project uses GitHub Actions to automatically build and deploy the site to GitHub Pages. The workflow is defined in `.github/workflows/hugo.yml`. Make sure to configure your repository settings to enable GitHub Pages.

## Customization

Feel free to customize the content, styles, and templates to fit your personal branding and showcase your work effectively.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.