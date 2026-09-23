# Debugzy

Chromebook mid/low debugging lab for Solvay Tech 6–8 · Tech Room door.

**Live (school):** https://apps.kulibert.net/debugzy/  
**Chip:** v0.1.0

## Loop

See a broken sequence → find the bad step → change one thing → Run → pass → Next.

Not a score chase. Everyday tech-ed bugs: fold order, missing save, wrong unit, cable/power order, one wrong line.

## Run local

Open `index.html` in a browser, or from this folder:

```bash
python3 -m http.server 8765
# http://127.0.0.1:8765/
```

Under the hub, fonts load from `/fonts/room.css`. Standalone still works with system fonts.

## Files

| File | Role |
| --- | --- |
| `index.html` | Shell, Help / What’s new |
| `app.js` | Five puzzles + loop |
| `styles.css` | Tech Room dark blue/cyan · hits ≥44px |
| `mark.svg` | App mark |
| `CHANGELOG.md` | Version history |
| `vercel.json` | Static headers (optional standalone) |

## Storage

Optional `localStorage` key `debugzy.v010.lastIndex` — last puzzle index only. No names. No accounts.

## Hub copy

School door is the static copy in `trebiluk/apps-kulibert` at `/debugzy/`. Publish hub with `./scripts/hub-publish.sh`.
