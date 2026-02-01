# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account (if not already created, go to github.com/signup)
- Git installed on your machine
- Remote `origin` configured

## Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub New Repository](https://github.com/new)
2. **Repository name**: `lekhrazz19.github.io` (IMPORTANT: Must match your GitHub username format)
3. **Description**: Cybersecurity Portfolio with Three.js
4. Select **Public** (required for free GitHub Pages)
5. Do NOT initialize with README (we already have one)
6. Click **Create repository**

### 2. Add Remote and Push

Run these commands in your terminal:

```bash
cd c:\DISK\ D\CODING\lekhrazz19.github.io

# Add remote origin
git remote add origin https://github.com/lekhrazz19/lekhrazz19.github.io.git

# Verify remote
git remote -v

# Push to GitHub (this might ask for authentication)
git branch -M main
git push -u origin main
```

### 3. Authenticate with GitHub

You'll be prompted for authentication. Choose one:

**Option A: Personal Access Token (Recommended)**
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click **Generate new token (classic)**
3. Give it a name like "GitHub Pages Deploy"
4. Select scopes: `repo`, `workflow`
5. Click **Generate token**
6. Copy the token and paste when prompted in terminal
7. Save token securely

**Option B: SSH Key Setup**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "singhlekhraj497@gmail.com"

# Add to GitHub:
# Settings → SSH and GPG keys → New SSH key
# Paste public key from: ~/.ssh/id_ed25519.pub

# Update remote to use SSH:
git remote set-url origin git@github.com:lekhrazz19/lekhrazz19.github.io.git
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages** (left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` and `/root`
   - Click **Save**
4. Wait 1-2 minutes for deployment

### 5. Verify Deployment

- Your site is now live at: **https://lekhrazz19.github.io**
- GitHub Actions will deploy automatically on each push to `main`

## Updating Content

After making changes:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will deploy automatically within 1-2 minutes.

## Troubleshooting

### "fatal: not a git repository"
```bash
git init
git config user.name "Lekhraj Singh"
git config user.email "singhlekhraj497@gmail.com"
```

### "Repository not found"
- Verify repository name matches: `username.github.io`
- Check remote URL: `git remote -v`

### Site not loading
- Check Pages settings is enabled
- Wait 3-5 minutes after first push
- Clear browser cache (Ctrl+Shift+Delete)

### Access denied errors
- Generate new Personal Access Token
- Or setup SSH key authentication
- Or use `git credential-manager` to update stored credentials

## Domain Customization (Optional)

To use a custom domain:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter your domain (e.g., `lekhraj.dev`)
3. Update DNS records at your domain registrar
4. GitHub will verify and enable HTTPS

## Continuous Updates

The portfolio is now set up for automatic deployment:
- Push to `main` branch → Auto-deploy
- No additional steps needed
- Changes live within minutes

---

**Portfolio is now live! 🚀**

Visit: https://lekhrazz19.github.io
