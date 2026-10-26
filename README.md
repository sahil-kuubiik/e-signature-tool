# SignatureCraft – Email Signature Generator

A lightweight, zero-dependency web tool for generating beautiful, professional, and cross-client compatible HTML email signatures for **Gmail**, **Apple Mail**, and **Outlook**.

---

## 🚀 Features

- **Real-Time Live Preview**: See changes instantly in an interactive email mockup.
- **Client-Optimized HTML**: Generates clean inline table HTML staying well under Gmail's 10,000-character signature limit.
- **Multiple Layouts**: Choose from curated layout designs (Classic, Modern Circle, Subtle Minimal, Executive Row).
- **Brand Colors & Typography**: Pick preset brand palettes or input any custom hex color.
- **Logo Controls**:
  - Host via image URL (CDN recommended) or upload with auto-compression.
  - Adjustable size slider (70px – 220px).
  - Transparent or custom badge backgrounds.
- **Contact Details & Custom Icons**:
  - Direct WhatsApp (`W`) and Telephone (`T`) icons/text labels.
  - Website link styled to brand specs (`#203932`).
  - Optional CTA / meeting link (e.g. Calendly).
- **One-Click Export**:
  - **Copy for Gmail**: Copies formatted rich text directly to clipboard.
  - **Copy for Apple Mail**: Apple Mail-friendly HTML clipboard copy.
  - **Copy Logo Image**: Quick copy for manual image paste into Apple Mail settings.
  - **Editable HTML Code Box**: Direct access to view and copy the raw signature code.
- **Dual-Pane Independent Scrolling**: Full-height sidebar and preview panes for effortless editing on any screen size.

---

## 📁 Project Structure

```text
esignature-tool/
├── index.html    # App structure, form controls & preview markup
├── style.css     # Clean modern light theme & dual-scroll layout
├── app.js        # Signature generator logic, state management & clipboard actions
└── README.md     # Documentation
```

---

## 💻 How to Run Locally

No build step or dependencies required. Simply open `index.html` in your web browser:

### Option 1: Direct File
Double-click `index.html` to open it in Chrome, Safari, or Edge.

### Option 2: Local HTTP Server
```bash
# Using Python
python3 -m http.server 8080

# Or using Node
npx serve .
```
Then visit `http://localhost:8080`.
