export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {currentYear} Silicon. All rights reserved. Credit MadrasThemes</p>
        </footer>
    )
}
