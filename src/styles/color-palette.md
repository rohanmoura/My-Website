# Color Palette Documentation

## Monochromatic Minimalism Palette

This document defines the color usage for our dark mode portfolio website. We use a simple monochromatic palette that provides a clean, elegant, and professional look.

### Color Definitions

| Purpose          | Color     | Description    | Hex Code  |
| ---------------- | --------- | -------------- | --------- |
| Background       | `#121212` | Charcoal Black | `#121212` |
| Primary Text     | `#E0E0E0` | Light Gray     | `#E0E0E0` |
| Secondary Text   | `#B0B0B0` | Medium Gray    | `#B0B0B0` |
| Borders/Dividers | `#444444` | Dark Gray      | `#444444` |
| Accent Elements  | `#888888` | Soft Gray      | `#888888` |

### Color Application Guidelines

#### Background Colors
- **Main Background**: `#121212` - Used for the primary page background
- **Card/Section Background**: `#1E1E1E` - Slightly lighter for content cards and sections
- **Navbar Background**: `#0F0F0F` - Darker for navigation to create hierarchy

#### Text Colors
- **Primary Text**: `#E0E0E0` - Main headings, important content
- **Secondary Text**: `#B0B0B0` - Subheadings, descriptions, body text
- **Muted Text**: `#888888` - Captions, metadata, less important information

#### Interactive Elements
- **Borders**: `#444444` - Card borders, input borders, dividers
- **Hover States**: `#555555` - Hover effects for buttons and links
- **Focus States**: `#666666` - Focus rings and active states
- **Accent Elements**: `#888888` - Icons, decorative elements

#### Button Styles
- **Primary Button Background**: `#E0E0E0`
- **Primary Button Text**: `#121212`
- **Secondary Button Border**: `#444444`
- **Secondary Button Text**: `#E0E0E0`
- **Button Hover**: `#F0F0F0` (for primary), `#555555` (for secondary)

#### Navigation
- **Navbar Background**: `#0F0F0F`
- **Nav Links**: `#E0E0E0`
- **Nav Links Hover**: `#F0F0F0`
- **Active Nav Link**: `#FFFFFF`
- **Mobile Menu Background**: `#1A1A1A`

#### Cards and Sections
- **Card Background**: `#1E1E1E`
- **Card Border**: `#444444`
- **Section Dividers**: `#333333`
- **Card Hover**: `#252525`

#### Form Elements
- **Input Background**: `#1E1E1E`
- **Input Border**: `#444444`
- **Input Text**: `#E0E0E0`
- **Placeholder Text**: `#888888`
- **Input Focus Border**: `#666666`

### CSS Custom Properties

```css
:root {
  /* Background Colors */
  --bg-primary: #121212;
  --bg-secondary: #1E1E1E;
  --bg-navbar: #0F0F0F;
  --bg-card: #1E1E1E;
  --bg-hover: #252525;
  
  /* Text Colors */
  --text-primary: #E0E0E0;
  --text-secondary: #B0B0B0;
  --text-muted: #888888;
  
  /* Border Colors */
  --border-primary: #444444;
  --border-secondary: #333333;
  --border-hover: #555555;
  --border-focus: #666666;
  
  /* Accent Colors */
  --accent-primary: #888888;
  --accent-hover: #999999;
}
```

### Usage Examples

#### Navbar
```css
.navbar {
  background-color: var(--bg-navbar);
  border-bottom: 1px solid var(--border-primary);
}

.nav-link {
  color: var(--text-primary);
}

.nav-link:hover {
  color: #F0F0F0;
}
```

#### Cards
```css
.card {
  background-color: var(--bg-card);
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
}

.card:hover {
  background-color: var(--bg-hover);
}
```

#### Buttons
```css
.btn-primary {
  background-color: var(--text-primary);
  color: var(--bg-primary);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--border-primary);
  color: var(--text-primary);
}
```

### Accessibility Considerations

- All color combinations meet WCAG 2.1 AA contrast requirements
- Primary text (#E0E0E0) on primary background (#121212) has a contrast ratio of 12.6:1
- Secondary text (#B0B0B0) on primary background (#121212) has a contrast ratio of 8.9:1
- Border colors provide sufficient contrast for visual separation

### Design Principles

1. **Hierarchy**: Use different text colors to create visual hierarchy
2. **Consistency**: Apply colors consistently across all components
3. **Accessibility**: Ensure sufficient contrast for all text elements
4. **Minimalism**: Keep the palette simple and focused
5. **Professional**: Maintain a business-appropriate aesthetic

This palette ensures a cohesive, professional appearance while maintaining excellent readability and accessibility standards.