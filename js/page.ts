window.onload = function () {
    document.body.ondragstart = () => { return false }
    const ele_loginA = document.querySelector('.apee-wodemo-main~a[href*="/login"]')
    if (ele_loginA) {
        const ele_btnLogin = document.querySelector<HTMLElement>('.nav-item.login')
        const ele_btnLoginA = ele_btnLogin?.querySelector<HTMLElement>('a')
        if (ele_btnLogin) ele_btnLogin.style.display = 'inline-block'
        if (ele_btnLoginA) ele_btnLoginA.setAttribute('href', ele_loginA.getAttribute('href') || '')
    }
    const ele_adminA = document.querySelector('.apee-wodemo-main~a[href*="/admin"]')
    if (ele_adminA) {
        const ele_btnAdmin = document.querySelector<HTMLElement>('.nav-item.admin')
        const ele_btnAdminA = ele_btnAdmin?.querySelector<HTMLElement>('a')
        if (ele_btnAdmin) ele_btnAdmin.style.display = 'inline-block'
        if (ele_btnAdminA) ele_btnAdminA.setAttribute('href', ele_adminA.getAttribute('href') || '')
        const ele_public = document.querySelector<HTMLElement>('.nav-item.publish')
        if (ele_public) ele_public.style.display = 'inline-block'
    }
}