window.onload = function () {
    const ele_ul = document.querySelector('ul.wo-entry-list')
    const eles_li = ele_ul?.querySelectorAll('li')
    const ele_list = document.querySelector('.article-list')
    let html = ''
    eles_li?.forEach(ele_li => {
        const data = ele_li.innerText.split('\n')
        const title = data[0]
        const timeStr = data[1]
        const url = data[2]
        html += `
    <div class="col-md-6 col-lg-4 mb-3">
        <a class="card card-body shadow-sm h-100" role="button" href="${url}">
            <h5>${title}</h5>
            <div class="text-muted">发布时间：${new Date(parseInt(timeStr) * 1000).toLocaleString()}</div>
        </a>
    </div>
    `
    })
    if (ele_list) ele_list.innerHTML = html
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