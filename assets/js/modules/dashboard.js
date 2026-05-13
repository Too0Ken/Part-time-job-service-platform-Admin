const DashboardModule = {
  state: {
    role: 'super_admin',
    refreshCount: 0,
    lastRefreshText: '刚刚更新',
    isUserMenuOpen: false,
    isPasswordModalOpen: false
  },

  roles: [
    { key: 'super_admin', label: '超级管理员视角' },
    { key: 'service', label: '客服专员视角' },
    { key: 'risk', label: '风控专员视角' }
  ],

  roleQueues: {
    super_admin: [
      {
        title: '认证异常待跟进',
        count: 6,
        level: 'API 核验异常',
        route: 'user/list.html?source=workbench&auth=exception'
      },
      {
        title: '高风险任务待处理',
        count: 7,
        level: '风险提示',
        route: 'task/list.html?source=workbench&tab=high_risk'
      },
      {
        title: '纠纷仲裁待裁定',
        count: 5,
        level: '影响结算',
        route: 'order/dispute.html?source=workbench&queue=pending'
      },
      {
        title: '信用申诉待处理',
        count: 9,
        level: '3 个工作日 SLA',
        route: 'user/credit.html?source=workbench&queue=appeal'
      }
    ],
    service: [
      {
        title: '纠纷待跟进',
        count: 6,
        level: '客服优先级 P1',
        route: 'order/dispute.html?source=workbench&queue=service'
      },
      {
        title: '账号封禁申诉',
        count: 4,
        level: '用户恢复链路',
        route: 'user/ban.html?source=workbench&queue=appeal'
      },
      {
        title: '订单异常备注待补全',
        count: 11,
        level: '质检提醒',
        route: 'order/list.html?source=workbench&tab=followup'
      },
      {
        title: '后台账号敏感操作复核',
        count: 3,
        level: '安全追踪',
        route: 'account/logs.html?source=workbench&module=sensitive'
      }
    ],
    risk: [
      {
        title: '高危用户待处置',
        count: 8,
        level: '信用联动',
        route: 'user/list.html?source=workbench&risk=high'
      },
      {
        title: 'AI 违规任务复核',
        count: 10,
        level: '内容与任务双检',
        route: 'task/list.html?source=workbench&tab=ai_review'
      },
      {
        title: '争议退款高优先级',
        count: 4,
        level: '金额冻结',
        route: 'order/dispute.html?source=workbench&queue=timeout'
      },
      {
        title: '实名主体限制观察',
        count: 2,
        level: '主体级联动',
        route: 'user/credit.html?source=workbench&queue=subject'
      }
    ]
  },

  metrics: [
    { label: '今日订单处理量', value: '286', meta: '较昨日 +12%，纠纷结案率 94%' },
    { label: '今日人工处理量', value: '129', meta: '认证异常 6 条，风险命中任务 31 条' },
    { label: '异常操作提醒', value: '17', meta: '含敏感字段查看、异常退款与多次失败登录' },
    { label: '实时待处理总数', value: '37', meta: '高优先级 5 项，客服链路 14 项' }
  ],

  trends: [
    { title: '任务风控处置效率', value: '22m', copy: '近 7 天风险命中任务平均处置耗时，较上周缩短 3 分钟。' },
    { title: '纠纷处理 SLA', value: '91%', copy: '3 日内处理完成率；超时工单 2 单，均已催办。' },
    { title: '信用申诉通过率', value: '18%', copy: '主要回滚场景集中在误判爽约与补充完成凭证。' },
    { title: '账号安全事件', value: '6', copy: '新设备登录拦截 4 次，重复登录踢下线 2 次。' }
  ],

  quickActions: [
    {
      title: '进入账号权限排查',
      route: 'account/accounts.html'
    },
    {
      title: '查看数据分析总览',
      route: 'analytics/realtime.html'
    },
    {
      title: '进入服务子项目配置',
      route: 'task/config.html'
    },
    {
      title: '抽查订单详情链路',
      route: 'order/detail.html?source=workbench&order=OD-240317-19'
    }
  ],

  todayFocus: [
    { title: '超时纠纷', value: '2 单', copy: '需优先进入仲裁队列处理。' },
    { title: '高风险任务', value: '7 单', copy: '命中风险关键词，等待人工复核。' },
    { title: '信用观察用户', value: '1 人', copy: '当前已进入重点观察名单。' }
  ],

  metricTones: ['primary', 'cyan', 'amber', 'slate'],
  todoTones: ['danger', 'warning', 'finance', 'calm'],
  quickActionTones: ['blue', 'violet', 'cyan', 'amber'],

  getMetricTone(index) {
    return this.metricTones[index % this.metricTones.length];
  },

  getTodoTone(index) {
    return this.todoTones[index % this.todoTones.length];
  },

  getQuickActionTone(index) {
    return this.quickActionTones[index % this.quickActionTones.length];
  },

  init() {
    if (!window.location.pathname.replace(/\\/g, '/').endsWith('/dashboard/index.html')) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    this.headerRight = document.querySelector('.header-right');
    this.render();
    this.bindEvents();
  },

  renderHeaderUserMenu() {
    this.headerRight = document.querySelector('.header-right');
    if (!this.headerRight) {
      return;
    }

    this.headerRight.innerHTML = `
      <div class="dashboard-user-menu">
        <button class="dashboard-user-trigger" type="button" data-action="toggle-user-menu">
          <img class="user-avatar" src="../assets/images/avatar-default.svg" alt="管理员">
          <span class="user-name">${localStorage.getItem('admin_current_operator') || '超级管理员'}</span>
          <span class="dashboard-user-caret">▾</span>
        </button>
        <div class="dashboard-user-dropdown ${this.state.isUserMenuOpen ? 'active' : ''}">
          <button class="dashboard-user-dropdown-item" type="button" data-action="open-password-modal">修改密码</button>
          <button class="dashboard-user-dropdown-item" type="button" data-action="logout">退出登录</button>
        </div>
      </div>
    `;
  },

  render() {
    const roleCards = this.roleQueues[this.state.role] || [];
    const roleLabel = (this.roles.find(role => role.key === this.state.role) || {}).label || '超级管理员视角';
    this.renderHeaderUserMenu();

    this.root.innerHTML = `
      ${AdminCore.getPageHeaderMarkup(
        '',
        '',
        `
          <button class="btn" type="button" data-action="refresh-workbench">刷新数据</button>
        `
      )}

      <div class="source-banner" style="margin-bottom:20px; background:linear-gradient(135deg, rgba(77,163,255,0.16), rgba(77,163,255,0.04));">
        <div>
          <div class="source-banner-label">当前视角：${roleLabel}</div>
          <div class="section-hint">${this.state.lastRefreshText}，刷新第 ${this.state.refreshCount + 1} 次快照。</div>
        </div>
        <div class="page-actions">
          ${this.roles.map(role => `
            <button
              class="queue-tab ${role.key === this.state.role ? 'active' : ''}"
              type="button"
              data-role="${role.key}"
            >${role.label}</button>
          `).join('')}
        </div>
      </div>

      <div class="dashboard-layout">
        <div class="dashboard-main">
          <section class="dashboard-section">
            <div class="dashboard-section-header">
              <div class="card-title">实时数据</div>
            </div>
            <div class="stats-grid dashboard-metrics-grid dashboard-metrics-standalone">
              ${this.metrics.map((metric, index) => `
                <article class="stat-card dashboard-metric-card dashboard-metric-card--${this.getMetricTone(index)}">
                  <div class="dashboard-metric-head">
                    <div class="stat-label">${metric.label}</div>
                    <span class="dashboard-metric-pill">实时</span>
                  </div>
                  <div class="stat-value">${metric.value}</div>
                  <div class="stat-meta dashboard-metric-foot">${metric.meta}</div>
                </article>
              `).join('')}
            </div>
          </section>

          <section class="section-card dashboard-todo-panel">
            <div class="dashboard-section-header">
              <div class="card-title">我的待办</div>
            </div>
            <div class="dashboard-todo-grid">
              ${roleCards.map((card, index) => `
                <article class="dashboard-todo-card dashboard-todo-card--${this.getTodoTone(index)}">
                  <div class="dashboard-todo-top">
                    <span class="dashboard-todo-badge">${card.level}</span>
                    <span class="dashboard-todo-count">${card.count}<small>项</small></span>
                  </div>
                  <div class="dashboard-todo-bottom">
                    <div class="dashboard-todo-title-wrap">
                      <div class="dashboard-todo-title">${card.title}</div>
                    </div>
                    <button class="btn btn-sm btn-primary dashboard-todo-action" type="button" data-route="${card.route}">去处理</button>
                  </div>
                </article>
              `).join('')}
            </div>
          </section>
        </div>

        <div class="dashboard-sidebar">
          <div class="section-card dashboard-focus-card">
            <div class="dashboard-section-header">
              <div class="card-title">今日关注</div>
            </div>
            <div class="bullet-list">
              ${this.todayFocus.map(item => `
                <div class="bullet-item dashboard-focus-item">
                  <div>
                    <div style="font-weight:600; color:var(--color-text-primary);">${item.title}</div>
                    <div class="bullet-meta">${item.copy}</div>
                  </div>
                  <div style="font-size:18px; font-weight:600; color:#15253d;">${item.value}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section-card">
            <div class="dashboard-section-header">
              <div class="card-title">高频快捷入口</div>
            </div>
            <div class="dashboard-quick-grid">
              ${this.quickActions.map((item, index) => `
                <button class="dashboard-quick-item dashboard-quick-item--${this.getQuickActionTone(index)}" type="button" data-route="${item.route}">
                  <span class="dashboard-quick-title">${item.title}</span>
                  <span class="dashboard-quick-arrow">→</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>

      <div class="modal-backdrop ${this.state.isPasswordModalOpen ? 'active' : ''}" id="passwordModalBackdrop">
        <div class="modal" style="width:520px;">
          <div class="modal-header">
            <div class="modal-title">修改密码</div>
            <div class="modal-close" data-action="close-password-modal">✕</div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label required">当前密码</label>
              <input class="input" id="currentPassword" type="password" style="width:100%;" placeholder="请输入当前密码">
            </div>
            <div class="form-group">
              <label class="form-label required">新密码</label>
              <input class="input" id="newPassword" type="password" style="width:100%;" placeholder="请输入不少于 6 位的新密码">
            </div>
            <div class="form-group">
              <label class="form-label required">确认新密码</label>
              <input class="input" id="confirmPassword" type="password" style="width:100%;" placeholder="请再次输入新密码">
            </div>
            <div class="section-hint">修改成功后，下次登录将使用新密码；当前会话保持有效。</div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-password-modal">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-password-change">确认修改</button>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents() {
    if (this.bound) {
      return;
    }

    document.addEventListener('click', event => {
      const clickedUserMenu = event.target.closest('.dashboard-user-menu');
      const actionButton = event.target.closest('[data-action]');

      if (actionButton) {
        const action = actionButton.dataset.action;
        if (action === 'toggle-user-menu') {
          this.state.isUserMenuOpen = !this.state.isUserMenuOpen;
          this.renderHeaderUserMenu();
          return;
        }

        if (action === 'open-password-modal') {
          this.state.isUserMenuOpen = false;
          this.state.isPasswordModalOpen = true;
          this.render();
          return;
        }

        if (action === 'logout') {
          AdminCore.logout();
          return;
        }

        if (action === 'refresh-workbench') {
          this.state.refreshCount += 1;
          this.state.lastRefreshText = `已于 ${new Date().toLocaleTimeString('zh-CN', {
            hour: '2-digit',
            minute: '2-digit'
          })} 更新`;
          this.render();
          AdminUI.showMessage('待办工作台数据已刷新', 'success');
          return;
        }

        if (action === 'close-password-modal') {
          this.state.isPasswordModalOpen = false;
          this.render();
          return;
        }

        if (action === 'submit-password-change') {
          const currentPassword = document.getElementById('currentPassword')?.value.trim() || '';
          const newPassword = document.getElementById('newPassword')?.value.trim() || '';
          const confirmPassword = document.getElementById('confirmPassword')?.value.trim() || '';

          if (!currentPassword || !newPassword || !confirmPassword) {
            AdminUI.showMessage('请完整填写当前密码和新密码信息', 'error');
            return;
          }

          if (newPassword.length < 6) {
            AdminUI.showMessage('新密码至少需要 6 位', 'error');
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
          this.state.isPasswordModalOpen = false;
          this.render();
          AdminUI.showMessage('密码修改成功', 'success');
          return;
        }
      }

      if (!clickedUserMenu && this.state.isUserMenuOpen) {
        this.state.isUserMenuOpen = false;
        this.renderHeaderUserMenu();
      }
    });

    this.root.addEventListener('click', event => {
      const roleButton = event.target.closest('[data-role]');
      if (!roleButton) {
        return;
      }

      this.state.role = roleButton.dataset.role;
      this.render();
    });

    this.bound = true;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  DashboardModule.init();
});
