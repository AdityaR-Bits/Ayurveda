# Adopt The Ayurveda - Dr. Praveen Rustagi Clinic Website

A modern, responsive website for Dr. Praveen Rustagi's Ayurveda and Nutrition clinic located in Malviya Nagar, Delhi.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Form validation, smooth scrolling, and hover effects
- **SEO Optimized**: Meta tags, structured content, and semantic HTML
- **Fast Loading**: Optimized CSS and JavaScript for better performance
- **Contact Integration**: WhatsApp button and phone call functionality
- **Accessibility**: Keyboard navigation and screen reader friendly

## File Structure

```
Ayurveda/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── deploy.sh           # Deployment helper script
└── README.md           # This file
```

## Hosting Options

### Option 1: GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `Ayurveda` folder to deploy
3. Your site will be live instantly with a custom URL
4. You can add a custom domain later

### Option 3: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository or upload files
3. Deploy with one click
4. Get a custom URL and domain options

### Option 4: Traditional Web Hosting
1. Upload all files to your web hosting provider
2. Ensure `index.html` is in the root directory
3. Configure your domain to point to the hosting

## Customization

### Colors
The website uses a green color scheme (#198754). To change colors:
1. Open `styles.css`
2. Replace all instances of `#198754` with your preferred color
3. Update gradient colors in `.btn-success` and `.service-icon`

### Content
To update content:
1. **Clinic Information**: Edit the contact section in `index.html`
2. **Services**: Modify the services section with your offerings
3. **Reviews**: Update patient testimonials
4. **Doctor Information**: Update Dr. Praveen Rustagi's details

### Images
To add real images:
1. Replace the Font Awesome icons with actual images
2. Add images to the project folder
3. Update HTML to use `<img>` tags instead of icons

## Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized form inputs for mobile
- WhatsApp integration for easy contact

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Bootstrap 5**: Responsive framework
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contact Information

**Dr. Praveen Rustagi**
- **Phone**: +91 9654136674
- **Address**: 80/66, Shop No 2, Near Gurudwara, Opposite Gurudwara School, Malviya Nagar, Delhi
- **Timings**: Mon-Sat 10:00 AM - 12:30 PM, 05:00 PM - 07:00 PM
- **Consultation Fee**: ₹500

## Development

### Local Development
1. Clone or download the files
2. Open `index.html` in a web browser
3. For live reload, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Adding New Features
- **New Sections**: Add HTML and corresponding CSS/JS
- **Animations**: Use CSS animations or JavaScript
- **Forms**: Extend the existing form handling in `script.js`
- **Analytics**: Add Google Analytics or other tracking codes

## SEO Features

The website includes:
- Meta description and keywords
- Semantic HTML structure
- Alt text for images (when added)
- Open Graph tags (can be extended)
- Schema markup (can be added)

## Security Considerations

- Form validation on both client and server side
- HTTPS recommended for production
- Input sanitization for forms
- No sensitive data in client-side code

## Performance Optimization

- Minified CSS and JavaScript (recommended for production)
- Optimized images (when added)
- Lazy loading for images
- Efficient CSS animations
- Minimal external dependencies

## Future Enhancements

Potential improvements:
- Blog section for health tips
- Online appointment booking system
- Patient portal
- Payment integration
- Multi-language support
- Advanced analytics
- Email newsletter signup

## License

This website template is created for Dr. Praveen Rustagi's clinic. Please ensure you have permission to use any content or modify as needed.

## Support

For technical support or customization requests, please contact the developer or refer to the hosting platform's documentation.

---

**Note**: This website is designed to be professional, accessible, and user-friendly. All information is based on the provided sources and should be verified before going live. 