# PDF Ki Bari

A professional-grade document scanning and PDF generation tool built with React and TypeScript. Transform your photos into beautifully enhanced PDF documents with advanced editing capabilities.

[![PDF Scanner Preview](https://pdf-ki-bari.vercel.app/preview.png)](https://pdf-ki-bari.vercel.app/)

## Features

### Document Scanning
- **Camera Capture**: Directly capture documents using your device's camera
- **Image Upload**: Upload multiple images at once for batch processing
- **Auto Enhancement**: Automatically enhance image quality for better document clarity
- **High-Resolution Processing**: Process images up to 2400px width while maintaining quality

### Advanced Image Enhancement
- **Brightness Control**: Adjust brightness levels from -50 to +50 for perfectly lit documents
- **Contrast Adjustment**: Fine-tune contrast from 0.5x to 2.5x for optimal readability
- **Sharpening Filter**: Apply intelligent sharpening to enhance text clarity
- **Customizable Settings**: Save your preferred enhancement settings for consistent results

### Professional Filters
- **Original**: Unmodified image capture
- **Grayscale**: Convert to black and white tones for professional appearance
- **Black & White**: High-contrast binary conversion for maximum text visibility
- **Document Mode**: Specially optimized filter for text-heavy documents
- **Sepia**: Vintage brown tone effect for artistic presentations
- **High Contrast**: Maximum contrast mode for improved OCR readiness

### Page Management
- **Drag & Drop Reordering**: Arrange pages in any order with intuitive drag-and-drop
- **Individual Page Rotation**: Rotate pages left or right (90-degree increments)
- **Preview Pages**: Full-screen preview of any page before exporting
- **Delete Pages**: Remove unwanted pages with confirmation
- **Clear All**: Quick batch removal with safety confirmation

### Page Editor Panel
- **Live Preview**: See selected page preview in real-time
- **Dedicated Editor**: Focused editing interface for individual pages
- **Applied Filters**: Visual indicator showing which filter is active
- **Rotation Tracking**: Monitor page rotation state
- **Quick Actions**: Easy access to rotate, filter, and delete operations

### PDF Generation
- **Batch Export**: Convert all scanned pages to a single PDF document
- **Quality Preservation**: Maintains high image quality (95% JPEG compression)
- **Automatic Naming**: Downloads as "scanned-document.pdf"
- **Multiple Formats**: Ready for printing, sharing, or archiving

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Processing**: Instant visual feedback for all operations
- **Page Counter**: Track total pages in document
- **Processing Indicators**: Loading states for all async operations
- **Keyboard & Touch Support**: Full support for both input methods
- **Professional UI**: Modern, clean interface with intuitive navigation

## How to Use

### Getting Started
1. Click **"Open Camera"** to capture documents directly or **"Upload Images"** to select files
2. Your images are automatically enhanced if auto-enhancement is enabled
3. Review captured pages in the grid view

### Editing Pages
1. Click any page thumbnail to select it
2. Use the **Page Editor** panel on the right to:
   - Rotate the page left or right
   - Apply filters for different effects
   - Preview the selected page
   - Delete the page if needed

### Adjusting Enhancement Settings
1. Click the **"Settings"** button to expand options
2. Toggle **"Auto-enhance new scans"** on or off
3. Adjust sliders for:
   - **Brightness**: Perfect for faded or dark documents
   - **Contrast**: Enhance text visibility and definition
   - **Sharpening**: Improve text crispness

### Reordering Pages
- Click and drag any page thumbnail to a new position
- The grip icon indicates the page is draggable
- Page numbers update automatically

### Generating PDF
1. Review all pages in the grid
2. Click **"Generate PDF"** at the bottom
3. The PDF downloads automatically to your device

## Technical Details

### Tech Stack
- **Frontend Framework**: React 18.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **PDF Generation**: PDF-lib
- **Build Tool**: Vite

### Image Processing
- **Canvas-based Enhancement**: Real-time image processing using HTML5 Canvas
- **Pixel-level Manipulation**: Direct access to image data for precise filtering
- **Sharpening Algorithm**: 3x3 kernel convolution filter for edge enhancement
- **Thumbnail Generation**: Automatic thumbnail creation for fast grid rendering

### Performance
- **Client-side Processing**: All operations run locally - no server uploads
- **Optimized Compression**: JPEG compression at 95% quality for balance
- **Efficient Rendering**: React hooks for state management
- **Lazy Loading**: Thumbnails load only when needed

## Privacy & Security

- **Complete Privacy**: All processing happens on your device
- **No Data Collection**: Images never leave your browser
- **No Server Uploads**: Files remain entirely local
- **Offline Capable**: Works without internet connection after initial load

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Size Limits

- Single Image: Up to 10MB recommended
- Batch Upload: 50 images simultaneously
- Output PDF: Typically 100-200KB per page

## Tips for Best Results

### Document Capture
- Ensure adequate lighting to avoid shadows
- Hold camera steady and parallel to document
- Capture entire document in frame
- Avoid glare on glossy surfaces

### Enhancement Settings
- Use higher brightness for faded documents
- Increase contrast for low-quality or old documents
- Enable sharpening for text-heavy content
- Test settings on a sample page first

### Filter Selection
- **Document Mode**: Best for text documents and forms
- **Black & White**: Ideal for high-contrast scans
- **Grayscale**: Professional appearance for reports
- **High Contrast**: Optimized for OCR processing

## Keyboard Shortcuts

- **Delete Page**: Select page and press Delete key (on desktop)
- **Escape**: Close full-screen previews
- **Click & Drag**: Reorder pages

## Supported Image Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)
- BMP (.bmp)

## Getting Started with Development

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd project

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Scanner.tsx           # Main scanner component
│   └── ...other tools
├── utils/
│   ├── pdfScanner.ts         # PDF generation utilities
│   ├── pdfHelpers.ts         # PDF helper functions
│   └── ...other utilities
├── types/
│   └── index.ts              # TypeScript type definitions
├── App.tsx                   # Root application component
├── main.tsx                  # Entry point
└── index.css                 # Global styles
```

## Future Enhancements

- Crop and perspective correction
- OCR text extraction
- Cloud storage integration
- Batch processing queue
- Custom watermarking
- Multi-document management
- Advanced color correction
- Document compression options

## Troubleshooting

### Camera not working
- Ensure browser has camera permissions
- Try using HTTPS (required for camera access)
- Check camera is not in use by another application

### Images not enhancing
- Verify auto-enhancement is enabled in Settings
- Check brightness and contrast values
- Try disabling and re-enabling enhancement

### PDF generation fails
- Ensure you have at least one page
- Check browser has sufficient memory
- Try with fewer pages if file is very large

### Poor image quality
- Use higher resolution source images
- Improve lighting conditions
- Adjust enhancement settings for your document type
- Avoid digital zoom when capturing

## Performance Tips

- Process pages in batches of 10-20 for best performance
- Clear processed pages regularly to free memory
- Use Document Mode filter for text-heavy content
- Close browser tabs to free up system memory

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

## About the Developer

<div align="center">

### **Aayush Sharma**

**Aspiring Software Developer | Web Development Enthusiast | Passionate About Open-Source & AI**

</div>

I am a passionate **Computer Science and Engineering (AI) student** with a keen interest in web development, artificial intelligence, and open-source contributions. With hands-on experience in React, Tailwind CSS, TypeScript, and database management, I enjoy building modern, user-friendly web applications that solve real-world problems.

Beyond coding, I actively contribute to open-source projects, mentor peers, and participate in technical initiatives that foster learning and collaboration. My goal is to continuously enhance my technical skills, work on impactful projects, and contribute meaningfully to the tech community.

### Skills & Expertise

**Programming Languages:** C, C++, Java, Python, JavaScript, TypeScript

**Web Development:** React, Node.js, HTML, CSS, Tailwind CSS, Bootstrap, jQuery

**Databases:** SQL, MongoDB, Firebase

**Tools & Platforms:** Git, GitHub, VS Code, WordPress, Google Sites

**Data Analysis:** SQL, Pandas, NumPy

### Education

- **Bachelor of Technology (B.Tech)**
  - Computer Science and Engineering (Artificial Intelligence)
  - Poornima College of Engineering | 2022-08 to 2026-06
  - CGPA: 9.13

- **Senior Secondary (Grade 12)**
  - Kendriya Vidyalaya No. 5 Jaipur | 2020-06 to 2022-07
  - Percentage: 91.6%

### Professional Experience

**Trainee - SAS Certified Specialist: Visual Business Analytics Using SAS Viya**
- R-CAT, Jaipur | Jan 2025 - Feb 2025
- Completed hands-on training in SAS Visual Business Analytics using SAS Viya
- Developed analytical solutions for data-driven decision-making
- Expertise in data visualization, business analytics, and reporting

**Web Development Intern**
- Ui System Pvt. Ltd., Jaipur | Aug 2023
- Assisted in web application development using HTML, CSS, and JavaScript
- Collaborated on responsive design implementation
- Gained hands-on experience with Git and modern web development best practices

### Notable Projects

**Handwriting Converter**
- A web-based application that converts digital text into authentic handwritten notes
- [View Project →](https://handwriting-converter.vercel.app/)

**Advanced Computing Department | Poornima College of Engineering**
- Comprehensive platform for students, faculty, and prospective learners
- [View Project →](https://advance-computing-poornima-college-of-engineering.vercel.app/)

**Poornima Nexus - Open Source Platform**
- Collaborative open-source initiative enabling students and faculty to contribute to impactful projects
- [View Project →](https://poornima-nexus-poornima-college-of-engineering.vercel.app/)

**PCE College Library**
- Online platform providing access to books, articles, databases, and e-resources
- [View Project →](https://library-poornima-college-of-engineering.vercel.app/)

**AIClassOf26 - B.Tech CSE (AI) Class Website**
- Centralized platform for the B.Tech CSE (AI) Class of 2026 to showcase achievements
- [View Project →](https://aiclassof26.vercel.app/)

**Fin Smart Accounting (Website Replication)**
- Modernized redesign using React, Tailwind CSS, and TypeScript
- [View Project →](https://fin-smart-accounting-aayushkimehnat.vercel.app/)

### Certifications & Achievements

- **SAS Certified Specialist:** Visual Business Analytics Using SAS Viya
- **SAS Visual Analytics 2 for SAS Viya:** Advanced
- **Ganga Quest 2021 Winner** - Ministry of Jal Shakti
- **Certificate of Merit in Mathematics** - Central Board of Secondary Education (CBSE)
- **AI Appreciate Badge & AI Aware Badge** - AI For All (CBSE and Intel)
- **Certifications from IIT Programs:** Educational Leadership, Public Speaking, Problem Solving Through Programming in C, The Joy of Computing Using Python
- **Exploration of the Solar System** - Indian Institute of Remote Sensing (IIRS), ISRO

### Leadership & Volunteering

**Project Team Lead** - TEK-Connect 2024
- Poornima College of Engineering
- Led team to present the innovative 'Unique Candidate Unique Question Paper' (UCUQ) Model

**Main Developer and Technical Lead**
- Poornima College of Engineering
- Led technical development of the Poornima Nexus Project
- Designed and developed core functionalities using modern web technologies

### Connect with Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/aayush-sharma-a44062299/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aayushsh2003)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/aayushSh2003)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/aayushsh2003)


**Portfolio:** [aayush-ki-pehchan.vercel.app](https://aayush-ki-pehchan.vercel.app/)

</div>

---

**Made with** ❤️ **for better document management**

Transform your documents into professional PDFs with ease. No signup required. No ads. No tracking.

**Built by Aayush Sharma** - Passionate about creating innovative solutions for real-world problems.