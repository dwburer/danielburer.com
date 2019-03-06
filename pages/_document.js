import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

// Override 'next/document' to add lang="en" to <html>.

export default class MyDocument extends Document {

    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage();
        const styles = flush();
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html lang="en">
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </html>
        )
    }
}
