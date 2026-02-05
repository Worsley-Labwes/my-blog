# Blog Application

A simple yet elegant blog web application built with Node.js, Express.js, and EJS.

## Features

✨ **Post Creation** - Create new blog posts with title and content

📖 **Post Viewing** - View all posts on the home page with excerpts

✏️ **Post Editing** - Edit existing blog posts

🗑️ **Post Deletion** - Delete posts with confirmation

🎨 **Responsive Design** - Works beautifully on desktop and mobile devices

## Project Structure

```
CapstoneProject/
├── app.js                 # Main Express server
├── package.json          # Project dependencies
├── views/                # EJS templates
│   ├── index.ejs        # Home page with posts list
│   ├── create.ejs       # Create post form
│   ├── edit.ejs         # Edit post form
│   └── error.ejs        # Error page
├── public/              # Static files
│   └── css/
│       └── style.css    # Styling
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```
   The application will run at `http://localhost:3000`

3. **Access the Application**
   Open your web browser and navigate to `http://localhost:3000`

## Usage

### Creating a Post
1. Click "New Post" in the navigation menu
2. Enter a title and content
3. Click "Publish Post"

### Editing a Post
1. On the home page, click "Edit" on any post
2. Modify the title and/or content
3. Click "Save Changes"

### Deleting a Post
1. On the home page, click "Delete" on any post
2. Confirm the deletion when prompted

## Technology Stack

- **Backend**: Node.js + Express.js
- **Templating**: EJS
- **Styling**: CSS3
- **Data Storage**: In-memory (session-based)

## Features Implemented

✅ Post creation with title and content
✅ Post listing on home page with excerpts
✅ Full post editing capability
✅ Post deletion with confirmation
✅ Responsive design for all devices
✅ Professional styling with smooth animations
✅ Error handling and validation

## Notes

- Posts are stored in memory and will be lost when the server restarts
- The application includes a sample post on startup
- All styling is responsive and works on mobile, tablet, and desktop browsers

## Styling Highlights

- Modern gradient header
- Animated hover effects on post cards
- Sticky navigation for easy access
- Mobile-first responsive design
- Clean form styling with focus states
- Professional color scheme

## Future Enhancements

- Database integration for persistent storage
- User authentication
- Post categories and tags
- Search functionality
- Comments system
- Social media sharing

---

Enjoy your new blog application! 🎉
