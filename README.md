---

# 🌐 Portfolio Website

A modern and responsive **personal portfolio website** built using **HTML, CSS, and JavaScript**, featuring smooth UI, animations, and a contact system powered by **Google Forms + Google Sheets**.

---

## 🚀 Features

* ✨ Clean and responsive UI
* 🌙 Light/Dark mode toggle
* 🎬 Smooth animations
* 📸 Interactive sections
* 📄 Resume integration
* 📬 Contact form via Google Forms
* 📊 Responses stored in Google Sheets
* ⚡ Fast and lightweight (no frameworks)

---

## 📁 Project Structure

```
├── index.html        # Main webpage
├── styles.css        # Styling and themes
├── script.js         # Interactivity
├── email.js          # Google Apps Script (optional automation)
├── resume.pdf        # Resume file
```

---

## 🧠 How It Works

### 🔹 Frontend

* Built using vanilla HTML, CSS, and JavaScript
* Handles UI, animations, and user interactions

### 🔹 Contact System

This project **does NOT use a traditional backend**.

Instead:

1. The contact form redirects/submits data to a **Google Form**
2. Google Form automatically stores responses in a **Google Sheet**
3. Data is safely stored without needing a server

---

## 📬 Contact Form Setup

### 1. Create Google Form

* Add fields: Name, Email, Message

### 2. Link to Google Sheets

* Go to **Responses → Link to Sheets**

### 3. Get Form Endpoint

Use:

```
https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
```

### 4. Connect to Your Website

* Match input fields with Google Form `entry.xxxxx` IDs
* Submit data using form action or JavaScript fetch

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla)
* Google Forms
* Google Sheets

---

## 🧩 Optional (Advanced)

### `email.js`

* Google Apps Script file
* Can be attached to Google Sheets
* Used for:

  * Sending email notifications
  * Automating workflows

> ⚠️ Not required for basic functionality

---

## 🎯 Use Cases

* Personal portfolio
* Student projects
* Resume websites
* Developer landing pages

---

## 📌 Future Improvements

* 🔍 Project filtering system
* 🔐 Backend integration (Firebase / Node.js)
* 📧 Auto email replies
* 📊 Admin dashboard

---

## 📄 License

Open for personal and educational use.

---

## 🙌 Author

**Mrithul Padinhattayil**
📧 [mridhull2008@gmail.com](mailto:mridhull2008@gmail.com)
🔗 [GitHub](https://github.com/MrithulP)

---

### ⭐ If you like this project, consider starring the repo!
