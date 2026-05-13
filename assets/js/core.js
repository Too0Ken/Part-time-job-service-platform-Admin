const AdminStore = {
  storageKey: 'admin_console_persisted_state_v1',

  clone(value) {
    return JSON.parse(JSON.stringify(value));
  },

  readAll() {
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : {};
    } catch (error) {
      return {};
    }
  },

  writeAll(payload) {
    window.localStorage.setItem(this.storageKey, JSON.stringify(payload));
  },

  get(namespace, seedValue) {
    const payload = this.readAll();
    if (!(namespace in payload)) {
      payload[namespace] = this.clone(seedValue);
      this.writeAll(payload);
    }
    return this.clone(payload[namespace]);
  },

  set(namespace, value) {
    const payload = this.readAll();
    payload[namespace] = this.clone(value);
    this.writeAll(payload);
  },

  patch(namespace, updater, seedValue) {
    const current = this.get(namespace, seedValue);
    const next = updater(this.clone(current));
    this.set(namespace, next);
    return this.clone(next);
  },

  remove(namespaces) {
    const payload = this.readAll();
    namespaces.forEach(namespace => {
      delete payload[namespace];
    });
    this.writeAll(payload);
  }
};

const AdminCore = {
  previewMedia: {
    show: false,
    title: '',
    label: '',
    src: '',
    note: ''
  },
  passwordModal: {
    show: false
  },

  navGroups: [
    {
      key: 'home',
      label: '首页',
      icon: '01',
      children: [
        { key: 'dashboard', label: '待办工作台', route: 'dashboard/index.html' }
      ]
    },
    {
      key: 'account',
      label: '账号与权限',
      icon: '02',
      children: [
        { key: 'account-accounts', label: '账号管理', route: 'account/accounts.html' },
        { key: 'account-roles', label: '角色管理', route: 'account/roles.html' },
        { key: 'account-logs', label: '操作日志系统', route: 'account/logs.html' }
      ]
    },
    {
      key: 'user',
      label: '用户管理',
      icon: '03',
      children: [
        { key: 'user-list', label: '用户管理', route: 'user/list.html' },
        { key: 'user-ban', label: '账号封禁管理', route: 'user/ban.html' },
        { key: 'user-credit', label: '信用申诉处理', route: 'user/credit.html' }
      ]
    },
    {
      key: 'task',
      label: '任务管理',
      icon: '04',
      children: [
        { key: 'task-list', label: '任务管理', route: 'task/list.html' },
        { key: 'task-category-config', label: '任务大类配置', route: 'task/category-config.html' },
        { key: 'task-config', label: '服务子项目配置', route: 'task/config.html' }
      ]
    },
    {
      key: 'order',
      label: '订单管理',
      icon: '05',
      children: [
        { key: 'order-list', label: '订单管理', route: 'order/list.html' },
        { key: 'order-dispute', label: '纠纷管理', route: 'order/dispute.html' },
        { key: 'order-sos', label: 'SOS 记录', route: 'order/sos.html' }
      ]
    },
    {
      key: 'finance',
      label: '财务与结算',
      icon: '06',
      children: [
        { key: 'finance-ledger', label: '订单流水', route: 'finance/ledger.html' },
        { key: 'finance-withdrawals', label: '提现管理', route: 'finance/withdrawals.html' },
        { key: 'finance-partner-settlement', label: '合伙人结算', route: 'finance/partner-settlement.html' },
        { key: 'finance-insurance-fee', label: '保险费管理', route: 'finance/insurance-fee.html' }
      ]
    },
    {
      key: 'partner',
      label: '合伙人管理',
      icon: '07',
      children: [
        { key: 'partner-list', label: '合伙人管理', route: 'partner/list.html' }
      ]
    },
    {
      key: 'community',
      label: '内容与社区',
      icon: '09',
      children: [
        { key: 'risk-reports', label: '举报管理', route: 'risk/reports.html' },
        { key: 'community-feed-review', label: '动态审核', route: 'community/feed-review.html' },
        { key: 'community-announcements', label: '公告与推送', route: 'community/announcements.html' },
        { key: 'community-ads', label: '广告位配置', route: 'community/ads.html' }
      ]
    },
    {
      key: 'ops',
      label: '运营配置',
      icon: '10',
      children: [
        { key: 'ops-coupons', label: '优惠券配置', route: 'ops/coupons.html' },
        { key: 'ops-rewards', label: '奖励规则', route: 'ops/rewards.html' },
        { key: 'ops-insurance-products', label: '保险产品配置', route: 'ops/insurance-products.html' },
        { key: 'ops-urgent-pin', label: '急单置顶', route: 'ops/urgent-pin.html' }
      ]
    },
    {
      key: 'support',
      label: '客服与反馈',
      icon: '11',
      children: [
        { key: 'support-feedback', label: '反馈工单', route: 'support/feedback.html' }
      ]
    },
    {
      key: 'analytics',
      label: '数据分析',
      icon: '12',
      children: [
        { key: 'analytics-realtime', label: '实时数据总览（P1）', route: 'analytics/realtime.html' },
        { key: 'analytics-users', label: '用户分析（P1）', route: 'analytics/users.html' },
        { key: 'analytics-transactions', label: '交易分析（P1）', route: 'analytics/transactions.html' },
        { key: 'analytics-growth', label: '增长与渠道分析（P1）', route: 'analytics/growth.html' },
        { key: 'analytics-risk', label: '风控效果统计（P2）', route: 'analytics/risk.html' },
        { key: 'analytics-custom-reports', label: '自定义报表与导出（P2）', route: 'analytics/custom-reports.html' }
      ]
    },
    {
      key: 'settings',
      label: '系统配置',
      icon: '13',
      children: [
        { key: 'settings-basic', label: '基础参数配置', route: 'settings/basic.html' }
      ]
    }
  ],

  detailPages: {
    'account/log-detail.html': {
      groupKey: 'account',
      menuKey: 'account-logs',
      title: '日志详情',
      breadcrumbs: ['账号与权限', '操作日志系统', '日志详情']
    },
    'user/detail.html': {
      groupKey: 'user',
      menuKey: 'user-list',
      title: '用户详情',
      breadcrumbs: ['用户管理', '用户管理', '用户详情']
    },
    'user/ban-detail.html': {
      groupKey: 'user',
      menuKey: 'user-ban',
      title: '封禁详情',
      breadcrumbs: ['用户管理', '账号封禁管理', '封禁详情']
    },
    'user/credit-detail.html': {
      groupKey: 'user',
      menuKey: 'user-credit',
      title: '信用申诉详情',
      breadcrumbs: ['用户管理', '信用申诉处理', '信用申诉详情']
    },
    'task/detail.html': {
      groupKey: 'task',
      menuKey: 'task-list',
      title: '任务详情',
      breadcrumbs: ['任务管理', '任务管理', '任务详情']
    },
    'task/config-detail.html': {
      groupKey: 'task',
      menuKey: 'task-config',
      title: '服务子项目配置详情',
      breadcrumbs: ['任务管理', '服务子项目配置', '配置详情']
    },
    'task/category-detail.html': {
      groupKey: 'task',
      menuKey: 'task-category-config',
      title: '任务大类配置详情',
      breadcrumbs: ['任务管理', '任务大类配置', '配置详情']
    },
    'order/detail.html': {
      groupKey: 'order',
      menuKey: 'order-list',
      title: '订单详情',
      breadcrumbs: ['订单管理', '订单管理', '订单详情']
    },
    'order/dispute-detail.html': {
      groupKey: 'order',
      menuKey: 'order-dispute',
      title: '纠纷详情',
      breadcrumbs: ['订单管理', '纠纷管理', '纠纷详情']
    },
    'partner/detail.html': {
      groupKey: 'partner',
      menuKey: 'partner-list',
      title: '合伙人详情',
      breadcrumbs: ['合伙人管理', '合伙人管理', '合伙人详情']
    },
    'finance/partner-settlement-detail.html': {
      groupKey: 'finance',
      menuKey: 'finance-partner-settlement',
      title: '结算详情',
      breadcrumbs: ['财务与结算', '合伙人结算', '结算详情']
    },
    'risk/report-detail.html': {
      groupKey: 'community',
      menuKey: 'risk-reports',
      title: '举报详情',
      breadcrumbs: ['内容与社区', '举报管理', '举报详情']
    },
    'community/feed-detail.html': {
      groupKey: 'community',
      menuKey: 'community-feed-review',
      title: '动态详情',
      breadcrumbs: ['内容与社区', '动态审核', '动态详情']
    },
    'community/announcement-detail.html': {
      groupKey: 'community',
      menuKey: 'community-announcements',
      title: '公告详情',
      breadcrumbs: ['内容与社区', '公告与推送', '公告详情']
    },
    'community/ad-detail.html': {
      groupKey: 'community',
      menuKey: 'community-ads',
      title: '广告详情',
      breadcrumbs: ['内容与社区', '广告位配置', '广告详情']
    },
    'ops/insurance-product-detail.html': {
      groupKey: 'ops',
      menuKey: 'ops-insurance-products',
      title: '产品详情',
      breadcrumbs: ['运营配置', '保险产品', '产品详情']
    },
    'ops/coupon-detail.html': {
      groupKey: 'ops',
      menuKey: 'ops-coupons',
      title: '优惠券详情',
      breadcrumbs: ['运营配置', '优惠券配置', '优惠券详情']
    },
    'ops/reward-detail.html': {
      groupKey: 'ops',
      menuKey: 'ops-rewards',
      title: '奖励规则详情',
      breadcrumbs: ['运营配置', '奖励规则', '规则详情']
    },
    'ops/urgent-pin-detail.html': {
      groupKey: 'ops',
      menuKey: 'ops-urgent-pin',
      title: '急单置顶详情',
      breadcrumbs: ['运营配置', '急单置顶', '规则详情']
    },
    'support/feedback-detail.html': {
      groupKey: 'support',
      menuKey: 'support-feedback',
      title: '反馈详情',
      breadcrumbs: ['客服与反馈', '反馈工单', '反馈详情']
    },
  },

  getPageRegistry() {
    if (!this.pageRegistryCache) {
      const registry = {};
      this.navGroups.forEach(group => {
        group.children.forEach(child => {
          registry[child.route] = {
            groupKey: group.key,
            menuKey: child.key,
            title: child.label,
            breadcrumbs: [group.label, child.label]
          };
        });
      });
      Object.keys(this.detailPages).forEach(path => {
        registry[path] = this.detailPages[path];
      });
      this.pageRegistryCache = registry;
    }
    return this.pageRegistryCache;
  },

  init() {
    if (this.isLoginPage()) {
      return;
    }

    if (!this.ensureAuthenticated()) {
      return;
    }

    this.renderSidebar();
    this.renderBreadcrumb();
    this.renderCurrentOperator();
    this.ensurePreviewHost();
    this.ensurePasswordModalHost();
    this.bindEvents();
    this.initSidebar();
  },

  isLoginPage() {
    return this.getCurrentPath().endsWith('login/index.html');
  },

  isLoggedIn() {
    return window.localStorage.getItem('admin_phase_a_logged_in') === '1';
  },

  ensureAuthenticated() {
    if (this.isLoggedIn()) {
      return true;
    }
    window.location.replace(this.resolvePath('login/index.html'));
    return false;
  },

  getCurrentPath() {
    const pathname = window.location.pathname.replace(/\\/g, '/');
    const parts = pathname.split('/admin/').filter(Boolean);
    const current = parts[parts.length - 1] || 'index.html';
    const normalized = current.replace(/^admin\//, '');
    return normalized.endsWith('.html') ? normalized : 'index.html';
  },

  getCurrentMeta() {
    return this.getPageRegistry()[this.getCurrentPath()] || {
      groupKey: 'home',
      menuKey: 'dashboard',
      title: '待办工作台',
      breadcrumbs: ['首页', '待办工作台']
    };
  },

  getBasePath() {
    const current = this.getCurrentPath();
    return current.includes('/') ? '../' : '';
  },

  resolvePath(path) {
    return `${this.getBasePath()}${path.replace(/^\/+/, '')}`;
  },

  routeTo(path) {
    window.location.href = this.resolvePath(path);
  },

  getBannerMarkup(label, actionText, route, className = 'source-banner') {
    return `
      <div class="${className}">
        <span class="source-banner-label">${label}</span>
        <button class="btn btn-sm" type="button" data-route="${route}">${actionText}</button>
      </div>
    `;
  },

  renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
      return;
    }

    const currentMeta = this.getCurrentMeta();
    sidebar.innerHTML = `
      <div class="sidebar-logo">
        <img src="${this.resolvePath('assets/images/logo.svg')}" alt="校园兼职服务平台">
      </div>
      <nav class="sidebar-menu">
        ${this.navGroups.map(group => {
          const isActive = group.key === currentMeta.groupKey;
          return `
            <div class="menu-group ${isActive ? 'active' : ''}" data-group-key="${group.key}">
              <button class="menu-item menu-item-level-1 ${isActive ? 'active' : ''}" type="button" data-group-toggle="${group.key}">
                <span class="menu-code">${group.icon}</span>
                <span class="text">${group.label}</span>
                <span class="menu-caret">${isActive ? '▾' : '▸'}</span>
              </button>
              <div class="submenu">
                ${group.children.map(child => `
                  <button class="submenu-item ${child.key === currentMeta.menuKey ? 'active' : ''}" type="button" data-route="${child.route}" data-menu-key="${child.key}">
                    <span class="submenu-text">${child.label}</span>
                  </button>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </nav>
    `;
  },

  renderBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    if (!breadcrumb) {
      return;
    }

    const meta = this.getCurrentMeta();
    breadcrumb.innerHTML = meta.breadcrumbs.map((item, index) => {
      const active = index === meta.breadcrumbs.length - 1;
      return `
        <span class="breadcrumb-item ${active ? 'active' : ''}">${item}</span>
        ${active ? '' : '<span class="breadcrumb-separator">/</span>'}
      `;
    }).join('');

    if (meta.title) {
      document.title = `${meta.title} - 校园兼职服务平台管理后台`;
    }
  },

  renderCurrentOperator() {
    const operatorName = window.localStorage.getItem('admin_current_operator') || '超级管理员';
    document.querySelectorAll('.header-right').forEach(headerRight => {
      headerRight.innerHTML = `
        <div class="dropdown">
          <div class="user-info">
            <img class="user-avatar" src="${this.resolvePath('assets/images/avatar-default.svg')}" alt="管理员">
            <span class="user-name">${this.escapeHTML(operatorName)}</span>
          </div>
          <div class="dropdown-menu">
            <div class="dropdown-item">修改密码</div>
            <div class="dropdown-item">退出登录</div>
          </div>
        </div>
      `;
    });
  },

  bindEvents() {
    const collapseBtn = document.getElementById('collapse-btn');
    if (collapseBtn) {
      collapseBtn.addEventListener('click', () => {
        this.toggleSidebar();
      });
    }

    document.addEventListener('click', event => {
      const item = event.target.closest('.header-right .dropdown-item');
      if (!item) {
        return;
      }

      const actionText = item.textContent.trim();
      if (actionText === '修改密码') {
        event.preventDefault();
        event.stopPropagation();
        this.openPasswordModal();
        return;
      }

      if (actionText === '退出登录') {
        event.preventDefault();
        event.stopPropagation();
        this.logout();
      }
    }, true);

    document.addEventListener('click', event => {
      if (event.target.id === 'adminMediaPreviewBackdrop') {
        this.closeMediaPreview();
        return;
      }

      const previewClose = event.target.closest('[data-action="close-admin-media-preview"]');
      if (previewClose) {
        this.closeMediaPreview();
        return;
      }

      if (event.target.id === 'adminPasswordModalBackdrop') {
        this.closePasswordModal();
        return;
      }

      const passwordModalAction = event.target.closest('[data-admin-password-action]');
      if (passwordModalAction) {
        const action = passwordModalAction.dataset.adminPasswordAction;
        if (action === 'close') {
          this.closePasswordModal();
          return;
        }
        if (action === 'submit') {
          this.submitPasswordChange();
          return;
        }
      }

      const previewButton = event.target.closest('[data-preview-media]');
      if (previewButton) {
        this.openMediaPreview({
          title: decodeURIComponent(previewButton.dataset.previewTitle || '图片预览'),
          label: decodeURIComponent(previewButton.dataset.previewLabel || '图片材料'),
          src: decodeURIComponent(previewButton.dataset.previewSrc || ''),
          note: decodeURIComponent(previewButton.dataset.previewNote || '')
        });
        return;
      }

      const groupButton = event.target.closest('[data-group-toggle]');
      if (groupButton) {
        const groupKey = groupButton.dataset.groupToggle;
        const group = document.querySelector(`.menu-group[data-group-key="${groupKey}"]`);
        if (!group) {
          return;
        }

        const willOpen = !group.classList.contains('active');
        document.querySelectorAll('.menu-group').forEach(item => {
          item.classList.remove('active');
          const caret = item.querySelector('.menu-caret');
          if (caret) {
            caret.textContent = '▸';
          }
          const header = item.querySelector('.menu-item-level-1');
          if (header) {
            header.classList.remove('active');
          }
        });

        if (willOpen) {
          group.classList.add('active');
          groupButton.classList.add('active');
          const caret = groupButton.querySelector('.menu-caret');
          if (caret) {
            caret.textContent = '▾';
          }
        }
        return;
      }

      const routeButton = event.target.closest('[data-route]');
      if (routeButton) {
        const route = routeButton.dataset.route;
        if (route) {
          this.routeTo(route);
        }
      }
    });
  },

  logout() {
    window.localStorage.removeItem('admin_phase_a_logged_in');
    window.localStorage.removeItem('admin_current_operator');
    this.routeTo('login/index.html');
  },

  ensurePasswordModalHost() {
    if (document.getElementById('adminPasswordModalHost')) {
      return;
    }
    const host = document.createElement('div');
    host.id = 'adminPasswordModalHost';
    document.body.appendChild(host);
    this.renderPasswordModalHost();
  },

  renderPasswordModalHost() {
    const host = document.getElementById('adminPasswordModalHost');
    if (!host) {
      return;
    }
    if (!this.passwordModal.show) {
      host.innerHTML = '';
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    host.innerHTML = `
      <div class="modal-backdrop active" id="adminPasswordModalBackdrop">
        <div class="modal" style="width:520px;">
          <div class="modal-header">
            <div class="modal-title">修改密码</div>
            <div class="modal-close" data-admin-password-action="close">✕</div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label required">当前密码</label>
              <input class="input" id="adminCurrentPassword" type="password" style="width:100%;" placeholder="请输入当前密码">
            </div>
            <div class="form-group">
              <label class="form-label required">新密码</label>
              <input class="input" id="adminNewPassword" type="password" style="width:100%;" placeholder="请输入不少于 6 位的新密码">
            </div>
            <div class="form-group">
              <label class="form-label required">确认新密码</label>
              <input class="input" id="adminConfirmPassword" type="password" style="width:100%;" placeholder="请再次输入新密码">
            </div>
            <div class="section-hint">修改成功后，下次登录将使用新密码；当前会话保持有效。</div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-admin-password-action="close">取消</button>
            <button class="btn btn-primary" type="button" data-admin-password-action="submit">确认修改</button>
          </div>
        </div>
      </div>
    `;
  },

  openPasswordModal() {
    this.passwordModal.show = true;
    this.renderPasswordModalHost();
  },

  closePasswordModal() {
    this.passwordModal.show = false;
    this.renderPasswordModalHost();
  },

  submitPasswordChange() {
    const currentPassword = document.getElementById('adminCurrentPassword')?.value.trim() || '';
    const newPassword = document.getElementById('adminNewPassword')?.value.trim() || '';
    const confirmPassword = document.getElementById('adminConfirmPassword')?.value.trim() || '';

    if (!currentPassword || !newPassword || !confirmPassword) {
      AdminUI.showMessage('请完整填写当前密码和新密码信息', 'error');
      return;
    }

    if (newPassword.length < 6) {
      AdminUI.showMessage('新密码不能少于 6 位', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      AdminUI.showMessage('两次输入的新密码不一致', 'error');
      return;
    }

    if (currentPassword === newPassword) {
      AdminUI.showMessage('新密码不能与当前密码相同', 'error');
      return;
    }

    window.localStorage.setItem('admin_phase_a_password_updated_at', String(Date.now()));
    this.closePasswordModal();
    AdminUI.showMessage('密码修改成功', 'success');
  },

  initSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
      return;
    }

    if (window.innerWidth <= 768) {
      sidebar.classList.remove('mobile-open');
    }
  },

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
      return;
    }

    if (window.innerWidth <= 768) {
      sidebar.classList.toggle('mobile-open');
      return;
    }

    sidebar.classList.toggle('collapsed');
  },

  getSourceTagMarkup(defaultRoute = 'dashboard/index.html') {
    const source = new URLSearchParams(window.location.search).get('source');
    if (source !== 'workbench') {
      return '';
    }
    return this.getBannerMarkup('来自待办工作台', '返回工作台', defaultRoute);
  },

  getPageHeaderMarkup(title, description = '', actions = '') {
    if (!actions) {
      return '';
    }
    return `
      <div class="page-header page-header-block page-header-actions-only">
        <div></div>
        <div class="page-actions">${actions}</div>
      </div>
    `;
  },

  renderPagination(totalText = '共 1 页', current = 1, total = 1) {
    const items = [];
    for (let index = 1; index <= total; index += 1) {
      items.push(`
        <div class="pagination-item ${index === current ? 'active' : ''}" data-pagination-page="${index}">${index}</div>
      `);
    }
    const prevPage = current > 1 ? current - 1 : 1;
    const nextPage = current < total ? current + 1 : total;

    return `
      <div class="pagination">
        <span class="pagination-info">${totalText}</span>
        <div class="pagination-item ${current === 1 ? 'disabled' : ''}" data-pagination-page="${prevPage}">‹</div>
        ${items.join('')}
        <div class="pagination-item ${current === total ? 'disabled' : ''}" data-pagination-page="${nextPage}">›</div>
      </div>
    `;
  },

  escapeHTML(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  isPreviewableMediaLabel(label) {
    return /(截图|照片|图片|凭证|票据|成绩单|证书|录屏|示意图|场地图|取件码|简历|盖章页|回执|原图)/.test(String(label || ''));
  },

  getMediaKindLabel(label) {
    const text = String(label || '');
    if (/截图/.test(text)) return '截图材料';
    if (/照片|图片|图/.test(text)) return '图片材料';
    if (/票据|凭证|回执/.test(text)) return '凭证材料';
    if (/证书|成绩单|简历|盖章页/.test(text)) return '认证材料';
    if (/录屏/.test(text)) return '录屏材料';
    return '上传材料';
  },

  getMediaTheme(label) {
    const palette = [
      { accent: '#2563eb', light: '#dbeafe' },
      { accent: '#059669', light: '#d1fae5' },
      { accent: '#ea580c', light: '#ffedd5' },
      { accent: '#dc2626', light: '#fee2e2' },
      { accent: '#7c3aed', light: '#ede9fe' }
    ];
    const seed = String(label || '').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return palette[seed % palette.length];
  },

  renderMediaVisual(item, large = false) {
    const theme = this.getMediaTheme(item.label);
    const kind = item.kind || this.getMediaKindLabel(item.label);
    const visualClass = large ? 'admin-media-visual is-large' : 'admin-media-visual';
    if (item.src) {
      return `
        <div class="${visualClass} has-image">
          <img src="${this.escapeHTML(item.src)}" alt="${this.escapeHTML(item.label)}">
        </div>
      `;
    }
    return `
      <div class="${visualClass}" style="--media-accent:${theme.accent}; --media-accent-light:${theme.light};">
        <div class="admin-media-badge">${this.escapeHTML(kind)}</div>
        <div class="admin-media-glyph">图</div>
        <div class="admin-media-caption">${this.escapeHTML(item.label)}</div>
      </div>
    `;
  },

  renderMediaGallery(items, options = {}) {
    const normalized = (Array.isArray(items) ? items : [])
      .map((item, index) => {
        if (typeof item === 'string') {
          return {
            id: `${options.title || 'media'}-${index}`,
            label: item,
            title: options.title || '图片材料',
            note: options.note || ''
          };
        }
        if (item && typeof item === 'object') {
          return {
            id: item.id || `${options.title || 'media'}-${index}`,
            label: item.label || item.name || `图片材料 ${index + 1}`,
            title: item.title || options.title || '图片材料',
            note: item.note || options.note || '',
            src: item.src || item.url || '',
            kind: item.kind || ''
          };
        }
        return null;
      })
      .filter(Boolean);
    if (!normalized.length) {
      return '<div class="admin-media-empty">暂无图片材料</div>';
    }
    return `
      <div class="admin-media-grid">
        ${normalized.map(item => `
          <button
            class="admin-media-thumb"
            type="button"
            data-preview-media="1"
            data-preview-title="${encodeURIComponent(item.title)}"
            data-preview-label="${encodeURIComponent(item.label)}"
            data-preview-src="${encodeURIComponent(item.src || '')}"
            data-preview-note="${encodeURIComponent(item.note || '')}"
          >
            ${this.renderMediaVisual(item)}
          </button>
        `).join('')}
      </div>
    `;
  },

  ensurePreviewHost() {
    if (document.getElementById('adminMediaPreviewHost')) {
      return;
    }
    const host = document.createElement('div');
    host.id = 'adminMediaPreviewHost';
    document.body.appendChild(host);
    this.renderPreviewHost();
  },

  renderPreviewHost() {
    const host = document.getElementById('adminMediaPreviewHost');
    if (!host) {
      return;
    }
    if (!this.previewMedia.show) {
      host.innerHTML = '';
      return;
    }
    const item = {
      label: this.previewMedia.label,
      src: this.previewMedia.src,
      kind: this.getMediaKindLabel(this.previewMedia.label)
    };
    host.innerHTML = `
      <div class="modal-backdrop active" id="adminMediaPreviewBackdrop">
        <div class="modal admin-media-modal">
          <div class="modal-header">
            <div class="modal-title">${this.escapeHTML(this.previewMedia.title || '图片预览')}</div>
            <div class="modal-close" data-action="close-admin-media-preview">✕</div>
          </div>
          <div class="modal-body">
            <div class="admin-media-preview-shell">
              ${this.renderMediaVisual(item, true)}
            </div>
            <div class="admin-media-preview-label">${this.escapeHTML(this.previewMedia.label)}</div>
            ${this.previewMedia.note ? `<div class="admin-media-preview-note">${this.escapeHTML(this.previewMedia.note)}</div>` : ''}
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" type="button" data-action="close-admin-media-preview">关闭</button>
          </div>
        </div>
      </div>
    `;
  },

  openMediaPreview(payload = {}) {
    this.previewMedia = {
      show: true,
      title: payload.title || '图片预览',
      label: payload.label || '图片材料',
      src: payload.src || '',
      note: payload.note || ''
    };
    this.renderPreviewHost();
  },

  closeMediaPreview() {
    this.previewMedia = {
      show: false,
      title: '',
      label: '',
      src: '',
      note: ''
    };
    this.renderPreviewHost();
  }
};

window.AdminStore = AdminStore;
window.AdminCore = AdminCore;

document.addEventListener('DOMContentLoaded', () => {
  AdminCore.init();
});
