# 🚀 Q-Lite Demo  

> A lightweight and blazing-fast queue system for Node.js.  
> This demo shows how to schedule jobs like **sending bulk emails** with retries, priorities, delays, and backoff strategies — all powered by [@purnapattela/q-lite](https://www.npmjs.com/package/@purnapattela/q-lite).  

---

## ✨ Features  

- ⚡ **Lightweight** – Minimal overhead, easy to use.  
- 🛠️ **Customizable Jobs** – Supports delay, priority, retries, and backoff.  
- 📊 **Status Monitoring** – Track job states easily.  
- 🔑 **API Key Protection** – Secure endpoints with simple headers.  
- 🌍 **CORS Ready** – Built to work across frontend & backend.  

---
- Screenshot of demo
[DEMO SCREENSHOT](./public/screenshot.png)

---
## 📦 Installation  

```bash
npm install @purnapattela/q-lite
````

Or clone the demo repository:

```bash
git clone https://github.com/purnapattela/q-lite.git
cd q-lite
npm install
```

---

## ⚙️ Usage

Start your server:

```bash
node index.js
```

### ➕ Add a Job

Example: Adding an email job with **delay, priority, attempts, and backoff**:

```bash
curl -X POST "http://localhost:3000/add/emailQueue?delay=5000&priority=10&attempts=5&backoff=2000" \
  -H "Content-Type: application/json" \
  -H "x-api-key: <your-api-key>" \
  -d '{"to":"user@example.com","task":"send email"}'
```

**Response:**

```json
{
  "id": "d3f8eb1e-3ead-4679-95df-546931bbf7fd"
}
```

---

## 🌐 API Endpoints

| Endpoint          | Method | Description                                        |
| ----------------- | ------ | -------------------------------------------------- |
| `/status`         | `GET`  | Get status of all queues                           |
| `/add/:queueName` | `POST` | Add job to a specific queue (requires `x-api-key`) |

---

## 💻 Demo Frontend

The included demo frontend provides:

* Get understanding on purpose of queues
* Explanation of the functionality (**bulk email sending via queue system**).
* Pros & Cons section for clarity.
* Mostly useful in hackathons where time constraints matters.
* Not required to setup DB just plug and play. May not be useful in production but goes perfectly with POC.

---

## ✅ Pros & Cons

### ✅ Pros

* Simple and lightweight
* Works across frontend and backend
* Easy to visualize job execution

### ⚠️ Cons

* Not for heavy distributed systems
* Requires manual scaling for high throughput

---

## 📌 Links

* 📦 [NPM Package](https://www.npmjs.com/package/@purnapattela/q-lite)
* 💻 [GitHub Repository](https://github.com/purnapattela/q-lite)

---

## 📜 License

MIT License © 2025 [Purna Pattela](https://github.com/purnapattela)

