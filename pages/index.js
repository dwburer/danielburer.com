import Nav from '../components/nav'
import Page from '../layouts/main'

export default () => (
    <Page>
        <div className="title">Daniel Burer</div>
        <div className="subtitle">
            <span style={{color: '#444'}}>software engineer </span><span style={{color: '#888'}}>/ designer </span><span
            style={{color: '#AAA'}}>/ digital creative</span>
        </div>
        <Nav />
    </Page>
)
