import Nav from '../components/nav'
import Page from '../layouts/main'

export default () => (
    <Page>
        <Nav />
        <div className="hero-text title">Daniel Burer</div>
        <div className="hero-text subtitle">
            <span className="sub-1">software engineer{'\u00A0'}/</span>
            <span className="sub-2">digital creative{'\u00A0'}/</span>
            <span className="sub-3">designer</span>
        </div>
    </Page>
)
