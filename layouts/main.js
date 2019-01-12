import Footer from '../components/footer'
import Meta from '../components/meta'

import "../scss/normalize.scss"
import "../scss/main.scss"
import "../scss/styles.scss"

export default ({ children }) => (
    <div>
        <Meta />
        <div className="content">
            { children }
            <Footer />
        </div>
    </div>
);
