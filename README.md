# Electron Audio Capture App

This is an Electron-based desktop application for capturing audio input using a virtual microphone and performing processing (like encoding and encryption) before outputting or saving it. The app uses `ffmpeg.wasm` for audio conversion and `node-record-lpcm16` for recording.

---

## 🚀 Features

- Electron-based desktop UI
- Audio recording via system microphone or virtual audio cable
- Converts audio to MP3 using `ffmpeg.wasm`
- Environment-friendly build process without native binaries (pure JavaScript/WebAssembly)
- Suitable for cross-platform use (Windows, macOS, Linux)

---

## 📦 Tech Stack

- [React + Vite](https://vitejs.dev/)
- [ffmpeg.wasm](https://github.com/ffmpegwasm/ffmpeg.wasm)
- [node-record-lpcm16](https://github.com/gillesdemey/node-record-lpcm16)
- TypeScript

---

## 🛠️ Installation

> Prerequisites:
> - Node.js ≥ 18
> - Git

Clone the repository:

git clone https://github.com/your-username/electron-audio-capture-app.git
cd electron-audio-capture-app
