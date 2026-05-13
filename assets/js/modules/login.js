const LoginModule = {
  init() {
    const root = document.getElementById('login-root');
    if (!root) {
      return;
    }

    root.innerHTML = `
      <div class="auth-shell">
        <section class="auth-card-wrap">
          <div class="auth-card">
            <h2>伴行运营管理后台</h2>
            <form id="loginForm">
              <div class="form-group">
                <label class="form-label required">邮箱账号</label>
                <input class="input" id="loginEmail" type="email" placeholder="admin@campusjob.com" style="width:100%;">
              </div>
              <div class="form-group">
                <label class="form-label required">登录密码</label>
                <input class="input" id="loginPassword" type="password" placeholder="请输入后台登录密码" style="width:100%;">
              </div>
              <div class="form-group">
                <label class="form-label required">手机验证码</label>
                <div class="auth-grid">
                  <input class="input" id="loginCode" type="text" placeholder="请输入 6 位验证码" maxlength="6" style="width:100%;">
                  <button class="btn" type="button" id="sendCodeBtn">发送验证码</button>
                </div>
              </div>
              <div id="loginStatus" class="section-hint" style="min-height:18px;"></div>
              <button class="btn btn-primary btn-lg" type="submit" style="width:100%; margin-top:10px;">登录</button>
              <button class="btn btn-ghost" type="button" id="forgotPasswordBtn" style="width:100%; margin-top:10px;">忘记密码</button>
            </form>
          </div>
        </section>
      </div>
    `;

    this.bindEvents();
  },

  bindEvents() {
    const sendCodeBtn = document.getElementById('sendCodeBtn');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    const loginForm = document.getElementById('loginForm');
    const status = document.getElementById('loginStatus');

    sendCodeBtn.addEventListener('click', () => {
      const email = document.getElementById('loginEmail').value.trim();
      if (!email) {
        status.textContent = '请先输入邮箱账号，再发送验证码。';
        status.style.color = 'var(--color-error)';
        return;
      }

      status.textContent = '手机验证码已发送，3 分钟内有效。';
      status.style.color = 'var(--color-success)';
      AdminUI.showMessage('手机验证码已发送', 'success');
    });

    forgotPasswordBtn.addEventListener('click', () => {
      const email = document.getElementById('loginEmail').value.trim();
      if (!email) {
        status.textContent = '请先输入邮箱账号，再发起密码重置。';
        status.style.color = 'var(--color-error)';
        return;
      }

      status.textContent = '如账号有效，密码重置链接将发送至安全邮箱，30 分钟内有效。';
      status.style.color = 'var(--color-warning)';
      AdminUI.showMessage('密码重置链接已发送至安全邮箱', 'success');
    });

    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      const code = document.getElementById('loginCode').value.trim();

      if (!email || !password || code.length !== 6) {
        status.textContent = '请完整填写邮箱、密码和 6 位手机验证码。';
        status.style.color = 'var(--color-error)';
        return;
      }

      if (email.includes('newdevice')) {
        status.textContent = '检测到新设备登录，系统已向安全邮箱发送确认链接。';
        status.style.color = 'var(--color-warning)';
        AdminUI.showMessage('新设备登录需邮件确认', 'warning');
        return;
      }

      const operatorName = email.includes('risk') || email.includes('fengkong') ? '风控专员-许安' : '超级管理员';
      localStorage.setItem('admin_phase_a_logged_in', '1');
      localStorage.setItem('admin_current_operator', operatorName);
      status.textContent = '登录成功，正在进入待办工作台。';
      status.style.color = 'var(--color-success)';
      if (window.AdminCore && typeof window.AdminCore.routeTo === 'function') {
        AdminUI.redirectAfterFeedback('登录成功', 'dashboard/index.html');
        return;
      }

      AdminUI.showMessage('登录成功', 'success');
      window.setTimeout(() => {
        window.location.replace('../dashboard/index.html');
      }, 700);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  LoginModule.init();
});
