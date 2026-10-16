# FOXCON — Digital Solutions & Software

Welcome to the FOXCON business website. It is a beginner-friendly, responsive static website designed to publish with GitHub Pages.

## Website sections
- Home
- About
- Services
- Technologies (C, C++, Java, Python)
- Projects
- Contact

## Files in this folder
- `index.html` — the website's content and structure. Keep this file at the top level of the repository.
- `style.css` — the visual design, including mobile layouts and the dark theme.
- `script.js` — mobile navigation, current year, and the demo contact form behaviour.
- `.nojekyll` — an empty file that tells GitHub Pages not to use Jekyll processing for this simple site.

## Your intended GitHub Pages URL
If the GitHub username is `priyanshuchoudhary188` and the repository is named `coding-business`, the expected project URL is:

`https://priyanshuchoudhary188.github.io/coding-business/`

The URL becomes available only after the repository exists and GitHub Pages successfully deploys it.

## Publish this website (no coding tools needed)

### 1. Download and extract
1. Download the `FOXCON-coding-business.zip` file.
2. In Windows, open your Downloads folder, right-click the ZIP, and choose **Extract All...**.
3. Open the extracted folder. You should see `index.html`, `style.css`, `script.js`, `.nojekyll`, and `README.md`.

### 2. Create a GitHub repository
1. Sign in at https://github.com/.
2. Open https://github.com/new.
3. Set **Repository name** to `coding-business`.
4. For easiest free GitHub Pages setup, set visibility to **Public**. The website will be publicly viewable on the internet.
5. For the simplest upload, leave **Add a README file**, `.gitignore`, and license options unchecked, then click **Create repository**. If you already created a README, you can leave it and upload the website files without `README.md` in the upload selection.

### 3. Upload the website files
1. Open the new repository at `https://github.com/priyanshuchoudhary188/coding-business`.
2. Select **Add file** → **Upload files**.
3. Open the extracted folder on your computer and select the website files inside it. Upload `index.html`, `style.css`, `script.js`, `.nojekyll`, and `README.md`.
4. Important: `index.html` must be in the repository's main/root level, not hidden inside another `FOXCON-coding-business` folder. If the repository already contains `README.md`, skip that file during upload or update the existing README separately.
5. Scroll down to **Commit changes**, leave the suggested message or enter `Add FOXCON website`, then click **Commit changes**.

### 4. Turn on GitHub Pages
1. In the repository, click **Settings**. If it is not visible in the top row, open the `...` menu first.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose `main` and the folder `/(root)`.
5. Click **Save**.
6. Stay on the Pages settings screen. Once deployment completes, GitHub will display a link or a **Visit site** button. Open it to test your page.

GitHub may take a few minutes to publish the first version. If it does not show, refresh the Pages settings and check the repository's **Actions** tab for a failed deployment.

## Important before launch
- The Contact form is intentionally a demo. It does not email, send, or store messages. To receive enquiries, connect a form service or a separately hosted backend.
- The GitHub profile link uses `https://github.com/priyanshuchoudhary188`. Check that it is the correct public profile before launch.
- Update the services and project cards as your real offerings and projects become clear. The sample cards should not be represented as completed client work.
- Do not publish passwords, API keys, private phone numbers, home addresses, or other private information. Public repositories and GitHub Pages sites are visible on the internet.

## Technology note
The webpage itself uses HTML, CSS, and JavaScript. C, C++, Java, and Python are showcased as programming technologies; GitHub Pages is static hosting and does not run those languages as a server-side backend. A backend, database, or login system would need a separate hosting service.

## Official GitHub documentation
- Creating a GitHub Pages site: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- Configuring the publishing source: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
