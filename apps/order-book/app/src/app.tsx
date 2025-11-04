import { GlobalNav } from "@tpicap/design-system.global-nav";

import styles from './app.module.css'

function App() {
    return (
            <div className={styles.container}>
                <GlobalNav.Container>
                    <GlobalNav.PrimaryNavigation>
                        <span>Order Book</span>
                    </GlobalNav.PrimaryNavigation>
                    <GlobalNav.SecondaryNavigation>


                    </GlobalNav.SecondaryNavigation>
                </GlobalNav.Container>

            </div>
    )
}

export default App
