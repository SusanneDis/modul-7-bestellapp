# 🍔 Food Order Web App

Eine responsive Web-App zum Bestellen von Speisen und Getränken – mit dynamischem Warenkorb, Bestellbestätigung und Local Storage.

---

## 📖 Beschreibung

Diese Webanwendung ermöglicht es Nutzer:innen, Hauptgerichte, Beilagen und Getränke auszuwählen, in den Warenkorb zu legen und eine Bestellung abzusenden.  
Der Warenkorb bleibt beim Neuladen erhalten (Local Storage) und ist über ein modales `<dialog>`-Fenster oder eine Sidebar zugänglich.

Die App legt großen Wert auf **Barrierefreiheit (ARIA)** und **Responsivität**.

---

## ✨ Features

- ✅ Auswahl von Hauptgerichten, Beilagen & Getränken  
- ✅ Dynamischer Warenkorb in Sidebar & Dialog  
- ✅ Speicherung im Local Storage  
- ✅ Responsives Design (Desktop & Mobile)  
- ✅ Native `<dialog>`-Elemente mit Slide-in-Animation  
- ✅ Tastatur- und Screenreader-Unterstützung (ARIA)  
- ✅ Anzeige: *„Dein Warenkorb ist noch leer“*, wenn keine Artikel vorhanden sind  
- ✅ Bestellbestätigung nach Klick auf „Jetzt bestellen“  

---

## 🧱 Technologien

- **HTML5**  
- **CSS3 (Flexbox, calc(), Animationen)**  
- **Vanilla JavaScript (ES6)**  
- **Local Storage API**  
- **ARIA Accessibility**

---

## 📂 Projektstruktur

/food-order-app
│
├── index.html
├── style.css
├── script.js
├── /assets
│ ├── /icons
│ └── /images
└── README.md


---

## ⚙️ Nutzung

1. Lade das Projekt herunter oder klone es:
   ```bash
   git clone https://github.com/deinname/food-order-app.git
2. Öffne index.html im Browser

3. Wähle Speisen und Getränke aus

4. Öffne den Warenkorb über den Button

5. Klicke „Jetzt bestellen“ → Dialog mit Bestellbestätigung wird angezeigt

---

## 🧩 Hauptfunktionen

Funktion	Beschreibung
addToCart(type, index)	Fügt Produkt in den Warenkorb hinzu
renderCartContent(containerId)	Rendert Warenkorb-Inhalt (Sidebar + Dialog)
openCartDialog() / closeCartDialog()	Öffnet/schließt das Dialogfenster
sendOrder()	Zeigt Bestellbestätigung & leert Warenkorb
saveToLocalStorage() / loadFromLocalStorage()	Speichert/Lädt den Warenkorb

---

## 🎨 Design-Details

Buttons reagieren beim Klick mit einer kurzen Scale-Animation

Dialog slidet weich von links in den Viewport

Leerer Warenkorb wird klar kommuniziert

Einheitliche Schrift, Abstände & Kontraste

---

## 👩‍💻 Entwickler:in

[Susanne Di Sorbo]
📅 Oktober 2025

---

## 📜 Lizenz

MIT License – frei nutzbar und anpassbar.