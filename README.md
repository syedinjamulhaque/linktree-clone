# 🔗 BitTree

A Linktree clone built with **Next.js** and **MongoDB** — create a personal "link in bio" page and share it with a single link.

🔗 **Live Demo:** [linktree-clone-iota-amber.vercel.app](https://linktree-clone-iota-amber.vercel.app/)

---

## ✨ Features

- Landing page with a "Get started for free" flow — type a handle and get redirected to the generator
- Generator page (`/generate`) to build a Bittree profile:
  - Claim a handle
  - Add multiple links (with add/validate flow)
  - Add a profile picture and description
- Dynamic public profile pages at `/[handle]` — e.g. `yoursite.com/johndoe`
- Animated, staggered link reveal on profile pages (pop-in effect)
- MongoDB Atlas as the backend database
- Fully responsive across mobile, tablet, and desktop
- Toast notifications for save success/failure (`react-toastify`)

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| **Framework** | Next.js (App Router) |
| **Styling** | Tailwind CSS |
| **Font** | Poppins (Google Fonts) |
| **Database** | MongoDB (Atlas) |
| **Notifications** | react-toastify |

---

## 📂 Project Structure

```text
app/
  page.js                  # Landing page
  layout.js                # Root layout (fonts, navbar)
  generate/
    page.js                # Handle + links + pic/desc form
  [handle]/
    page.js                # Public dynamic profile page
  api/
    add/
      route.js             # Saves a new Bittree document to MongoDB
    generate/
      route.js             # (if applicable) supporting API logic

components/
  Navbar.js                # Top navigation bar

lib/
  mongodb.js                # MongoDB client connection helper
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/syedinjamulhaque/linktree-clone.git
cd linktree-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up MongoDB Atlas

1. Create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
2. Under **Database Access**, create a database user with a username and password.
3. Under **Network Access**, allow access from anywhere (`0.0.0.0/0`) — required since deployment platforms like Vercel don't use fixed IPs.
4. Under **Connect → Drivers**, copy your connection string. It should look like:

```text
mongodb+srv://<username>:<password>@<cluster-url>/bittree?retryWrites=true&w=majority
```

Make sure `/bittree` is included in the path so it points to the right database.

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/bittree?retryWrites=true&w=majority
```

> **Important:** `.env.local` is gitignored by default in Next.js — never commit your real connection string.

### 5. Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## ☁️ Deployment (Vercel)

1. Push your repo to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. During setup, add the `MONGODB_URI` environment variable in the **Environment Variables** section before deploying.
4. Deploy.

> If you add or change environment variables *after* the first deploy, you'll need to trigger a redeploy — Vercel doesn't apply new env vars to existing deployments automatically.

---

## 🔄 How It Works

1. A user enters a handle on the homepage and is redirected to `/generate?handle=<value>`.
2. On the generate page, they fill in their links, profile picture URL, and description, then submit.
3. The form sends a `POST` request to `/api/add`, which saves a new document to the `links` collection in MongoDB.
4. On success, a "View your Bittree" button appears, linking to `/<handle>` — the public profile page.
5. The `/[handle]` page fetches the matching document from MongoDB and renders the profile with animated link cards.

---

## 📝 Notes

- Handle uniqueness validation (preventing duplicate handles) should be enforced in `/api/add` — check before inserting.
- This project intentionally skips some production concerns (auth, handle-availability checks, image uploads) to stay focused on the core Next.js + MongoDB flow.

---

## 🙌 Credits

- Design reference: [Linktree](https://linktr.ee)

---

## 👨‍💻 Author

**Syed Injamul Haque**

- GitHub: [@syedinjamulhaque](https://github.com/syedinjamulhaque)
