# Himanshu Singh — Visual Stories

A cinematic, responsive portfolio. The first version features four visual explorations already made by Himanshu, with restrained scroll motion and accessible project detail panels.

## Preview locally

No build step is required. From the repository root:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Publish with GitHub Pages

In repository **Settings → Pages**, set **Build and deployment** to **Deploy from a branch**, choose **main** and **/(root)**, and save. GitHub will provide the public URL after deployment. This setup is left to the repository owner.

## Replace the starter content

- Edit the name, biography, links, and project captions in `index.html`.
- Edit the project detail text in the `projects` array in `script.js`.
- Replace the `.webp` files in `assets/` with your own optimized work, keeping the filenames or updating the paths in `index.html`, `script.js`, and `styles.css`.
- The current contact link points to the GitHub profile. Replace it with a preferred email or social link when ready.
- Four images were drawn from Himanshu's earlier visual explorations. They are described as concept images; the site does not imply they are completed films.

## Adding a scroll video

Once the chosen video is available, add an optimized, muted MP4 and a still poster to `assets/`. The visual section between selected work and about is a natural place for it. Use a `<video muted playsinline preload="metadata" poster="...">` element. For scroll scrubbing, encode short, low resolution footage with frequent keyframes; otherwise seeking can stutter on phones. Always keep a still image fallback and respect `prefers-reduced-motion`.

## Design references

The layout takes cues from the principles in [Impeccable](https://github.com/pbakaus/impeccable): deliberate hierarchy, typography, contrast, and motion. The scroll behavior is deliberately small and uses native browser APIs, leaving room to add [GSAP](https://github.com/greensock/GSAP) or [Lenis](https://github.com/darkroomengineering/lenis) when the supplied video calls for a more complex sequence.
