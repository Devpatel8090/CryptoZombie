Team Name: D Army

Members:
1. Dev Patel        – CWID: 828593772  – Email: devptl8090@csu.fullerton.edu
2. Darshil Gabani   – CWID: 867559221  – Email: darshilgabani@csu.fullerton.edu
3. Devarsh Jani     – CWID: 820147528  – Email: devarshjani0523@csu.fullerton.edu
4. Samruddhi Kadam  – CWID: 874818016  – Email: samruddhikadam20@csu.fullerton.edu

Improvements:
- Added Kitty smart contract locally (Zombie can feed on custom kitties).
- Built Zombie Factory to create multiple zombies per user.
- Added unique zombie images based on DNA and level.
- Added cooldown timer (5 seconds) to the UI.
- Improved UI layout and color scheme.
- Fully redesigned UI with improved layout and responsive cards.
- Level frames by rank: Bronze (Lv 1–2), Silver (Lv 3–4), Gold (Lv 5–9), Diamond (Lv 10+).
- Added responsive cards showing zombie stats and readiness.
- Multi-zombie creation (build a zombie army in one call).
- Kitty feed demo wired end-to-end in the UI.
- Added MockKitty.sol (local kitty contract) and deployed.
- Frontend connected to MockKitty + Zombies for add/feed flows.
- Battle feature with wins/losses tracked and shown.
- DNA-based zombie images with level-based frames for clearer demos.

Setup Instructions:
1. Install dependencies: npm install
2. Start local blockchain: Ganache GUI (port 1337)
3. Compile & migrate contracts: truffle migrate --reset
4. Start local server: npx http-server
5. Open browser: http://127.0.0.1:8080
6. Connect MetaMask to local network (port 1337) and import Ganache account.
7. Create zombies, feed on kitties, make an army, attack on another zombie, upgrade the level and do many more in UI.


GitHub Repository:



Demo Video: https://drive.google.com/file/d/14bVQtKPdKIYQdA4bQ5MR_Ed6MQz0go0P/view?usp=sharing

