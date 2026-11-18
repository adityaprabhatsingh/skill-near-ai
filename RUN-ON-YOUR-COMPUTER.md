# Run SkillNear AI on your own computer

Everything you need is in this folder. Follow these four steps.

## 1. Install Node.js (one time only)

Node.js is the free program that runs the site on your machine.

- Go to https://nodejs.org and download the **LTS** version for your computer.
- Install it with the default settings.
- Check it worked: open a terminal (on Windows: **Start → type "cmd"**; on Mac: **Spotlight → type "Terminal"**) and type:

```
node --version
```

You should see a number like `v22.x.x`. If it says "command not found", the install didn't finish — reopen the terminal and try again.

## 2. Unpack this folder

Put this `skillnear-ai` folder somewhere easy to reach, like your Desktop or Documents.

## 3. Start the site

In the terminal, move into the folder and install the pieces the site needs:

```
cd skillnear-ai
npm install
npm run dev
```

`npm install` takes a minute or two the first time. When it finishes, `npm run dev` prints a local web address, usually:

```
  ➜  Local:   http://localhost:8080/
```

Open that address in your browser and the site appears.

If something else on your computer is already using 8080, the site picks the next free port instead and prints that one — use whatever address it shows.

## 4. Stop and restart

- To stop the site: press **Ctrl + C** in the terminal window.
- To start it again later: `cd` into the folder and run `npm run dev` (you only need `npm install` once).

## Editing the site

All the sample classes, prices and time slots live in one file:

```
src/lib/providers.ts
```

Open it in any text editor, change the text, save — the browser updates by itself.

## Useful commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site for you to look at and edit |
| `npm run build` | Checks the site builds cleanly and prepares it for the internet |
| `npm run preview` | Runs the built version so you can click through it |
| `npm test` | Runs the site's small checks |
| `npm run lint` | Looks for sloppy code |

## Notes

- This is the front end only. Booking is for show: no payment is taken and nothing is saved.
- The classes, prices, ratings and time slots are made-up examples, not real studios.
- Nothing here talks to the internet, so it works fine offline once installed.
