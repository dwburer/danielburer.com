import Footer from '../components/footer'
import Meta from '../components/meta'

import "../scss/styles.scss"
import "../scss/main.scss"
import "../scss/normalize.scss"

export default ({ children }) => (
    <div>
        <Meta />
        <div className="content">
            { children }
            <Footer />
        </div>
    </div>
);
