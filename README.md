# Paulie's Pretty SAML Printer 🖨️✨

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Powered by: Electron](https://img.shields.io/badge/Powered%20by-Electron-47848f.svg)](https://www.electronjs.org/)

A simple, cross-platform desktop utility for parsing, formatting, and analyzing SAML metadata.

![Screenshot of the SAML Printer application UI](https://i.imgur.com/C5ejv7G.png)

***

## 🚀 Key Features

-   **Cross-Platform Desktop App**: Runs natively on Windows, macOS, and Linux.
-   **Pretty Printing**: Cleans up and properly indents raw SAML XML, transforming it into a human-readable format.
-   **Intelligent Metadata Extraction**: Automatically parses and displays key information in a user-friendly accordion interface:
    -   **Entity ID**
    -   **Assertion Consumer Service (ACS)** URLs
    -   **Single Logout (SLO)** URLs
    -   **NameID Formats**
    -   Requested **Attribute Claims**
-   **Certificate Analysis**: Extracts all **X.509 Certificates** and calculates their fingerprints for easy verification.
-   **Multiple Input Methods**: Load your SAML data however you like:
    -   Paste raw text
    -   Upload a local `.xml` file
    -   Drag & drop a file
-   **Easy Export**:
    -   Copy any individual piece of metadata with a single click.
    -   Download the fully formatted XML.
    -   Export all extracted data as a clean **JSON file**.
-   **Fully Offline & Secure**: As a desktop application, it runs entirely on your machine. Your data is never sent to a server, making it perfectly safe for sensitive metadata.

***

## 📥 Installation

There are two ways to get the application up and running.

### Option 1: For Users (Recommended)

Download the latest pre-built version for your operating system from the **[Releases Page](https://github.com//pasiegel/SAML-Paulies-Pretty-Printer/releases)**.

1.  Go to the [Releases](https://github.com//pasiegel/SAML-Paulies-Pretty-Printer/releases) page.
2.  Download the file.
3.  Install application.

### Option 2: For Developers (From Source)

If you want to run the latest code or contribute to the project, you can build it from the source.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo.git](https://github.com/your-username/your-repo.git)
    cd your-repo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the app in development mode:**
    ```bash
    npm start
    ```

4.  **Build the application with Electron Packager:**

    To package the app into a distributable format, this project uses `electron-packager`. You may need to install it globally or as a dev dependency (`npm install electron-packager --save-dev`).

    For convenience, you can add build scripts to your `package.json`:
    ```json
    "scripts": {
      "start": "electron .",
      "package:win": "electron-packager . your-app-name --platform=win32 --arch=x64 --out=release-builds --overwrite",
      "package:mac": "electron-packager . your-app-name --platform=darwin --arch=x64 --out=release-builds --overwrite",
      "package:linux": "electron-packager . your-app-name --platform=linux --arch=x64 --out=release-builds --overwrite"
    }
    ```
    *(Remember to replace `your-app-name` with the desired name for the executable).*

    Then, run the appropriate command from your terminal to build for a specific platform:

    * **For Windows (64-bit):**
        ```bash
        npm run package:win
        ```

    * **For macOS (Intel 64-bit):**
        ```bash
        npm run package:mac
        ```

    * **For Linux (64-bit):**
        ```bash
        npm run package:linux
        ```

    After the command finishes, you will find the packaged application inside the `release-builds` directory.

***

## 🛠️ Technical Details

This application is built using **[Electron](https://www.electronjs.org/)**, which allows it to run as a native desktop application using standard web technologies.

-   The core application logic and UI are written in **vanilla JavaScript, HTML, and CSS**.
-   XML parsing is handled securely on the client-side using the browser's built-in `DOMParser`.
-   No external frameworks are used for the UI, keeping the application lightweight and fast.

***

## 📜 License

This project is licensed under the **ISC License**. See the `LICENSE` file for details.
