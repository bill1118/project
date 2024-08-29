// 获取按钮和弹窗元素
const openPopupBtn = document.getElementById('openPopupBtn');
const loginPopup = document.getElementById('loginPopup');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const closePopup = document.getElementById('closePopup');

// 点击“登入”按钮时显示弹窗
openPopupBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex'; // 显示弹窗
});

closePopup.addEventListener('click', () =>{
    loginPopup.style.display = 'none';
});

// 切换到登入表单
loginTab.addEventListener('click', () => {
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
});

// 切换到註冊表单
registerTab.addEventListener('click', () => {
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
});
