import LogoOne from '../../public/images/cta-logo-one.svg'
import LogoTwo from '../../public/images/cta-logo-two.png'

const getHtml = () => {
    return `
        <section id="login-container">
            <div id="login-content">
                <div id="login-center">
                    <img id="login-logo-one" src="${LogoOne}" alt="logo-one" />
                    <a id="login-signup-link">지금 가입</a>
                    <p id="login-description">
                        영화에 대한 프리미엄 액세스를 얻으십시오.
                        디즈니 플러스 가격은 다음 주부터 1000원 인상됩니다.
                    </p>
                    <img id="login-logo-two" src="${LogoTwo}" alt="logo-two" />
                </div>
                <div id="login-bg-image"></div>
            </div>
        </section>
    `
}

export default getHtml