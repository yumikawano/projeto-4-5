import {Header} from './Header'
import {Footer} from './Footer'
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'
const Layout = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) => {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}
export {Layout}