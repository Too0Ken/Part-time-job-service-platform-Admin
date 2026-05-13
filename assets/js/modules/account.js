const AccountModule = {
  state: {
    accounts: {
      keyword: '',
      role: '',
      status: '',
      tab: 'all',
      page: 1,
      selectedIds: [],
      showModal: false,
      editingId: '',
      showPasswordModal: false,
      passwordTargetId: '',
      showStatusModal: false,
      statusTargetId: ''
    },
    roles: {
      keyword: '',
      status: '',
      showModal: false,
      editingKey: '',
      showPermissionModal: false,
      permissionKey: ''
    },
    logs: {
      keyword: '',
      module: '',
      action: '',
      tab: 'all',
      page: 1,
      selectedLogId: 'LOG-90213'
    }
  },

  pageSize: 5,

  accounts: [
    {
      id: 'ADM-001',
      name: '林清越',
      email: 'lin.qy@campusjob.com',
      role: 'super_admin',
      roleLabel: '超级管理员',
      status: 'active',
      statusLabel: '正常',
      permission: '全权限',
      lastLogin: '今天 09:18',
      activeSession: '1 个在线会话',
      recentOp: '手动调整信用分 2 次',
      risk: '敏感权限高频使用'
    },
    {
      id: 'ADM-014',
      name: '周知夏',
      email: 'zhou.service@campusjob.com',
      role: 'service',
      roleLabel: '客服专员',
      status: 'active',
      statusLabel: '正常',
      permission: '订单备注 / 纠纷查看',
      lastLogin: '今天 08:42',
      activeSession: '2 个在线会话',
      recentOp: '处理纠纷 6 单',
      risk: '账号异地登录待复核'
    },
    {
      id: 'ADM-023',
      name: '蒋予安',
      email: 'jiang.risk@campusjob.com',
      role: 'risk',
      roleLabel: '风控专员',
      status: 'disabled',
      statusLabel: '停用',
      permission: '风险工单 / 用户限制',
      lastLogin: '昨天 23:10',
      activeSession: '0 个在线会话',
      recentOp: '封禁处置 3 次',
      risk: '已停用，等待交接'
    },
    {
      id: 'ADM-035',
      name: '王芮宁',
      email: 'wang.ops@campusjob.com',
      role: 'ops',
      roleLabel: '运营专员',
      status: 'active',
      statusLabel: '正常',
      permission: '任务风控处置 / 内容配置',
      lastLogin: '今天 10:03',
      activeSession: '1 个在线会话',
      recentOp: '任务下架 2 次',
      risk: '权限范围正常'
    },
    {
      id: 'ADM-042',
      name: '许景澄',
      email: 'xu.audit@campusjob.com',
      role: 'audit',
      roleLabel: '审计查看',
      status: 'locked',
      statusLabel: '锁定',
      permission: '只读审计',
      lastLogin: '3 天前 16:34',
      activeSession: '0 个在线会话',
      recentOp: '查看完整手机号 9 次',
      risk: '敏感字段访问频繁'
    },
    {
      id: 'ADM-057',
      name: '宋知微',
      email: 'song.partner@campusjob.com',
      role: 'ops',
      roleLabel: '运营专员',
      status: 'active',
      statusLabel: '正常',
      permission: '服务子项目配置',
      lastLogin: '今天 11:26',
      activeSession: '1 个在线会话',
      recentOp: '配置类修改 4 次',
      risk: '需审计最近价格配置'
    },
    {
      id: 'ADM-061',
      name: '秦叙白',
      email: 'qin.finance@campusjob.com',
      role: 'finance',
      roleLabel: '财务专员',
      status: 'active',
      statusLabel: '正常',
      permission: '提现审核 / 结算打款 / 保费对账',
      lastLogin: '今天 09:56',
      activeSession: '1 个在线会话',
      recentOp: '提现复核 5 单',
      risk: '今日处理高风险提现 1 单'
    },
    {
      id: 'ADM-068',
      name: '陆照晴',
      email: 'lu.data@campusjob.com',
      role: 'analyst',
      roleLabel: '数据分析师',
      status: 'active',
      statusLabel: '正常',
      permission: '数据分析 / 自定义报表',
      lastLogin: '今天 10:42',
      activeSession: '1 个在线会话',
      recentOp: '导出渠道分析报表 2 次',
      risk: '权限范围正常'
    },
    {
      id: 'ADM-072',
      name: '贺行舟',
      email: 'he.partner.review@campusjob.com',
      role: 'partner_reviewer',
      roleLabel: '合作方审核员',
      status: 'active',
      statusLabel: '正常',
      permission: '合伙人申请审核 / 材料复核',
      lastLogin: '昨天 19:08',
      activeSession: '1 个在线会话',
      recentOp: '合伙人申请复核 3 单',
      risk: '需关注资料补件超时'
    }
  ],

  logs: [
    {
      id: 'LOG-90213',
      operator: '林清越',
      module: '用户管理',
      action: '手动调整信用分',
      object: '用户 U-12031',
      ip: '113.80.21.16',
      time: '2026-04-27 10:18:24',
      risk: '高',
      before: '信用分 56，限制发布 / 接单 / 动态',
      after: '信用分 68，解除限制，备注“申诉通过回滚”',
      note: '关联申诉单 AP-77102，需同步核对站内通知发送结果。'
    },
    {
      id: 'LOG-90210',
      operator: '周知夏',
      module: '订单管理',
      action: '查看完整手机号',
      object: '订单 OD-240317-19',
      ip: '113.80.21.19',
      time: '2026-04-27 09:54:08',
      risk: '中',
      before: '手机号脱敏展示 138****5678',
      after: '完整手机号查看完成，日志已写入审计流水',
      note: '根据纠纷工单需要补录联系记录。'
    },
    {
      id: 'LOG-90194',
      operator: '王芮宁',
      module: '任务管理',
      action: '人工下架任务',
      object: '任务 TK-77821',
      ip: '113.80.21.23',
      time: '2026-04-27 09:07:13',
      risk: '中',
      before: '任务状态：展示中，AI 命中脱离平台风险',
      after: '任务已下架，发布者收到违规提醒',
      note: '同步进入风控观察名单 24 小时。'
    },
    {
      id: 'LOG-90181',
      operator: '宋知微',
      module: '服务子项目配置',
      action: '修改参考价格区间',
      object: '项目 CFG-HOME-07',
      ip: '113.80.21.24',
      time: '2026-04-27 08:31:56',
      risk: '高',
      before: '参考价 60-100 元 / 次',
      after: '参考价调整为 70-120 元 / 次，要求紧急联系人',
      note: '对新创建任务立即生效，需关注投诉率。'
    },
    {
      id: 'LOG-90162',
      operator: '许景澄',
      module: '账号与权限',
      action: '强制下线账号',
      object: '管理员 ADM-014',
      ip: '113.80.21.20',
      time: '2026-04-26 19:42:11',
      risk: '中',
      before: '双会话在线',
      after: '保留当前设备，旧设备会话已踢下线',
      note: '触发原因：异地登录异常。'
    },
    {
      id: 'LOG-90147',
      operator: '林清越',
      module: '订单管理',
      action: '手动触发结算',
      object: '订单 OD-240308-06',
      ip: '113.80.21.16',
      time: '2026-04-26 16:18:22',
      risk: '高',
      before: '订单待确认完成 240h 超时',
      after: '订单结算完成，收益入账待清分',
      note: '需核对完成凭证和信用扣分记录。'
    }
  ],

  roles: [
    {
      key: 'super_admin',
      name: '超级管理员',
      tone: 'danger',
      status: 'active',
      permissionSummary: '全模块管理 / 敏感数据查看 / 权限配置',
      description: '平台最高权限角色，负责账号、配置与高风险操作管理。',
      modules: ['home', 'account', 'user', 'task', 'order', 'finance', 'partner', 'risk', 'community', 'ops', 'support', 'analytics', 'settings', 'value'],
      sensitiveMask: { nickname: false, phone: false, address: false }
    },
    {
      key: 'service',
      name: '客服专员',
      tone: 'info',
      status: 'active',
      permissionSummary: '纠纷查看 / 订单备注 / 用户申诉跟进',
      description: '负责客服工单、订单异常处理和用户申诉跟进。',
      modules: ['home', 'user', 'order', 'support'],
      sensitiveMask: { nickname: false, phone: true, address: false }
    },
    {
      key: 'risk',
      name: '风控专员',
      tone: 'warning',
      status: 'active',
      permissionSummary: '风险工单 / 用户限制 / 高风险复核',
      description: '负责风险处置、限制措施执行和高风险任务复核。',
      modules: ['home', 'user', 'task', 'risk'],
      sensitiveMask: { nickname: false, phone: true, address: true }
    },
    {
      key: 'ops',
      name: '运营专员',
      tone: 'success',
      status: 'active',
      permissionSummary: '任务风控处置 / 内容配置 / 运营活动',
      description: '负责风险命中任务处置、内容配置和活动运营管理。',
      modules: ['home', 'task', 'community', 'ops'],
      sensitiveMask: { nickname: false, phone: true, address: true }
    },
    {
      key: 'finance',
      name: '财务专员',
      tone: 'warning',
      status: 'active',
      permissionSummary: '提现审核 / 结算打款 / 保费对账',
      description: '负责资金结算、提现审核和财务对账。',
      modules: ['home', 'order', 'finance'],
      sensitiveMask: { nickname: false, phone: false, address: true }
    },
    {
      key: 'analyst',
      name: '数据分析师',
      tone: 'info',
      status: 'active',
      permissionSummary: '只读分析 / 自定义报表 / 数据导出',
      description: '负责平台数据分析、看板查看和报表导出。',
      modules: ['home', 'analytics'],
      sensitiveMask: { nickname: true, phone: true, address: true }
    },
    {
      key: 'partner_reviewer',
      name: '合作方审核员',
      tone: 'success',
      status: 'active',
      permissionSummary: '合伙人申请审核 / 材料复核',
      description: '负责合伙人申请、合作资质和材料复核。',
      modules: ['home', 'partner'],
      sensitiveMask: { nickname: false, phone: true, address: true }
    },
    {
      key: 'audit',
      name: '审计查看',
      tone: 'default',
      status: 'active',
      permissionSummary: '日志只读 / 审计追溯',
      description: '只读访问日志、审计链路和历史留痕信息。',
      modules: ['home', 'account', 'settings'],
      sensitiveMask: { nickname: true, phone: true, address: true }
    }
  ],

  init() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (!path.includes('/account/')) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    this.accounts = AdminStore.get('account_accounts', this.accounts);
    this.logs = AdminStore.get('account_logs', this.logs);
    this.roles = AdminStore.get('account_roles', this.roles);
    this.normalizeRoles();
    this.syncAccountsWithRoles();
    this.render();
    this.bindEvents();
  },

  getCurrentPath() {
    return window.location.pathname.replace(/\\/g, '/');
  },

  isAccountsPage() {
    return this.getCurrentPath().endsWith('/account/accounts.html');
  },

  isRolesPage() {
    return this.getCurrentPath().endsWith('/account/roles.html');
  },

  isLogDetailPage() {
    return this.getCurrentPath().endsWith('/account/log-detail.html');
  },

  getRoleTag(role) {
    const currentRole = this.getRoleByKey(role);
    const tone = currentRole ? currentRole.tone : '';
    const map = {
      danger: 'tag-danger',
      info: 'tag-info',
      warning: 'tag-warning',
      success: 'tag-success',
      default: 'tag'
    };
    return map[tone] || 'tag';
  },

  getStatusTag(status) {
    const map = {
      active: 'tag-success',
      disabled: 'tag',
      locked: 'tag-warning'
    };
    return map[status] || 'tag';
  },

  getStatusLabel(status, fallback = '') {
    const map = {
      active: '正常',
      disabled: '禁用',
      locked: '锁定'
    };
    return map[status] || fallback || status;
  },

  getRoleByKey(key) {
    return this.roles.find(role => role.key === key);
  },

  getRoleName(key, fallback = '') {
    const role = this.getRoleByKey(key);
    return role ? role.name : fallback || key;
  },

  getRolePermissionSummary(key, fallback = '') {
    const role = this.getRoleByKey(key);
    return role ? role.permissionSummary : fallback || '待分配权限';
  },

  getRoleModuleOptions() {
    return (window.AdminCore?.navGroups || []).map(group => ({
      key: group.key,
      label: group.label
    }));
  },

  getMenuActionOptions(menuKey) {
    const map = {
      dashboard: [
        { key: 'view', label: '查看看板' },
        { key: 'refresh', label: '刷新数据' }
      ],
      'account-accounts': [
        { key: 'view', label: '查看列表' },
        { key: 'create', label: '新建账号' },
        { key: 'edit', label: '编辑账号' },
        { key: 'password', label: '修改密码' },
        { key: 'disable', label: '禁用/恢复' },
        { key: 'export', label: '导出账号' }
      ],
      'account-roles': [
        { key: 'view', label: '查看角色' },
        { key: 'create', label: '新建角色' },
        { key: 'edit', label: '编辑角色' },
        { key: 'permission', label: '菜单权限' },
        { key: 'disable', label: '停用角色' },
        { key: 'export', label: '导出角色' }
      ],
      'account-logs': [
        { key: 'view', label: '查看列表' },
        { key: 'search', label: '筛选搜索' },
        { key: 'detail', label: '查看详情' }
      ]
    };

    if (map[menuKey]) {
      return map[menuKey];
    }

    return [
      { key: 'view', label: '查看列表' },
      { key: 'search', label: '筛选搜索' },
      { key: 'detail', label: '查看详情' }
    ];
  },

  getPermissionTreeCatalog() {
    return (window.AdminCore?.navGroups || []).map(group => ({
      key: group.key,
      label: group.label,
      children: group.children.map(child => ({
        key: child.key,
        label: child.label,
        route: child.route,
        actions: this.getMenuActionOptions(child.key)
      }))
    }));
  },

  buildDefaultMenuPermissions(role) {
    const selectedGroups = role.modules || [];
    const permissions = {};

    this.getPermissionTreeCatalog().forEach(group => {
      if (!selectedGroups.includes(group.key)) {
        return;
      }

      group.children.forEach(child => {
        permissions[child.key] = child.actions.map(action => action.key);
      });
    });

    return permissions;
  },

  getRoleModulesFromPermissions(role) {
    const selectedMenus = Object.keys(role.menuPermissions || {}).filter(key => {
      const actions = role.menuPermissions[key] || [];
      return actions.length > 0;
    });

    return this.getPermissionTreeCatalog()
      .filter(group => group.children.some(child => selectedMenus.includes(child.key)))
      .map(group => group.key);
  },

  normalizeRole(role) {
    const menuPermissions = role.menuPermissions || this.buildDefaultMenuPermissions(role);
    const sensitiveMask = this.normalizeSensitiveMask(role.sensitiveMask, role.key);
    const normalized = {
      ...role,
      menuPermissions,
      sensitiveMask
    };
    normalized.modules = this.getRoleModulesFromPermissions(normalized);
    return normalized;
  },

  normalizeSensitiveMask(mask = {}, roleKey = '') {
    if (!mask || Object.keys(mask).length === 0) {
      if (roleKey === 'super_admin') {
        return { nickname: false, phone: false, address: false };
      }
      if (roleKey === 'finance') {
        return { nickname: false, phone: false, address: true };
      }
      if (roleKey === 'service') {
        return { nickname: false, phone: true, address: false };
      }
      return { nickname: false, phone: true, address: true };
    }
    return {
      nickname: Boolean(mask.nickname),
      phone: mask.phone !== false,
      address: mask.address !== false
    };
  },

  renderSensitiveMaskTags(role) {
    const mask = this.normalizeSensitiveMask(role.sensitiveMask);
    const items = [
      ['用户昵称', mask.nickname],
      ['完整手机号', mask.phone],
      ['完整地址', mask.address]
    ];
    return `
      <div class="data-chip-group">
        ${items.map(([label, masked]) => `<span class="tag ${masked ? 'tag-warning' : 'tag-success'}">${label}${masked ? '脱敏' : '可见'}</span>`).join('')}
      </div>
    `;
  },

  normalizeRoles() {
    this.roles = this.roles.map(role => this.normalizeRole(role));
    AdminStore.set('account_roles', this.roles);
  },

  getAssignableRoles(currentKey = '') {
    return this.roles.filter(role => role.status === 'active' || role.key === currentKey);
  },

  syncAccountsWithRoles() {
    this.accounts = this.accounts.map(account => ({
      ...account,
      roleLabel: this.getRoleName(account.role, account.roleLabel),
      permission: this.getRolePermissionSummary(account.role, account.permission)
    }));
    AdminStore.set('account_accounts', this.accounts);
  },

  filterRoles() {
    const keyword = this.state.roles.keyword.trim().toLowerCase();
    return this.roles.filter(role => {
      const keywordMatched = !keyword || [role.name, role.key, role.permissionSummary].join(' ').toLowerCase().includes(keyword);
      const statusMatched = !this.state.roles.status || role.status === this.state.roles.status;
      return keywordMatched && statusMatched;
    });
  },

  filterAccounts() {
    let items = this.accounts.filter(account => {
      const keyword = this.state.accounts.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [account.id, account.name, account.email].join(' ').toLowerCase().includes(keyword);
      const roleMatched = !this.state.accounts.role || account.role === this.state.accounts.role;
      const statusMatched = !this.state.accounts.status || account.status === this.state.accounts.status;
      return keywordMatched && roleMatched && statusMatched;
    });

    switch (this.state.accounts.tab) {
      case 'active':
        items = items.filter(account => account.status === 'active');
        break;
      case 'risk':
        items = items.filter(account => account.risk.includes('敏感') || account.risk.includes('异地') || account.risk.includes('高风险'));
        break;
      case 'locked':
        items = items.filter(account => account.status === 'locked' || account.status === 'disabled');
        break;
      default:
        break;
    }

    return items;
  },

  filterLogs() {
    let items = this.logs.filter(log => {
      const keyword = this.state.logs.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [log.id, log.operator, log.object].join(' ').toLowerCase().includes(keyword);
      const moduleMatched = !this.state.logs.module || log.module === this.state.logs.module;
      const actionMatched = !this.state.logs.action || log.action.includes(this.state.logs.action);
      return keywordMatched && moduleMatched && actionMatched;
    });

    switch (this.state.logs.tab) {
      case 'high':
        items = items.filter(log => log.risk === '高');
        break;
      case 'sensitive':
        items = items.filter(log => log.action.includes('查看完整手机号') || log.action.includes('信用分') || log.action.includes('结算') || log.action.includes('退款'));
        break;
      case 'config':
        items = items.filter(log => log.module.includes('配置') || log.module === '账号与权限');
        break;
      default:
        break;
    }

    return items;
  },

  paginate(items, page) {
    const totalPages = Math.max(1, Math.ceil(items.length / this.pageSize));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * this.pageSize;
    return {
      items: items.slice(start, start + this.pageSize),
      totalPages,
      currentPage
    };
  },

  getRoleStats() {
    const counts = {};
    this.accounts.forEach(account => {
      counts[account.role] = (counts[account.role] || 0) + 1;
    });
    return counts;
  },

  renderAccountTabs() {
    const tabs = [
      { key: 'all', label: '全部账号', count: this.accounts.length },
      { key: 'active', label: '正常使用', count: this.accounts.filter(item => item.status === 'active').length },
      { key: 'risk', label: '高风险 / 敏感', count: this.accounts.filter(item => item.risk.includes('敏感') || item.risk.includes('异地') || item.risk.includes('高风险')).length },
      { key: 'locked', label: '锁定 / 停用', count: this.accounts.filter(item => item.status === 'locked' || item.status === 'disabled').length }
    ];

    return `
      <div class="queue-tabs">
        ${tabs.map(tab => `
          <button class="queue-tab ${this.state.accounts.tab === tab.key ? 'active' : ''}" type="button" data-action="switch-account-tab" data-tab="${tab.key}">
            <span>${tab.label}</span>
            <span class="bullet-meta">${tab.count}</span>
          </button>
        `).join('')}
      </div>
    `;
  },

  renderLogTabs() {
    const tabs = [
      { key: 'all', label: '全部日志', count: this.logs.length },
      { key: 'high', label: '高风险', count: this.logs.filter(item => item.risk === '高').length },
      { key: 'sensitive', label: '敏感动作', count: this.logs.filter(item => item.action.includes('查看完整手机号') || item.action.includes('信用分') || item.action.includes('结算') || item.action.includes('退款')).length },
      { key: 'config', label: '配置 / 权限', count: this.logs.filter(item => item.module.includes('配置') || item.module === '账号与权限').length }
    ];

    return `
      <div class="queue-tabs">
        ${tabs.map(tab => `
          <button class="queue-tab ${this.state.logs.tab === tab.key ? 'active' : ''}" type="button" data-action="switch-log-tab" data-tab="${tab.key}">
            <span>${tab.label}</span>
            <span class="bullet-meta">${tab.count}</span>
          </button>
        `).join('')}
      </div>
    `;
  },

  getLogRelatedLinks(log) {
    if (log.object.includes('OD-240317-19')) {
      return [
        { label: '查看订单详情', route: 'order/detail.html?order=OD-240317-19' },
        { label: '查看用户详情', route: 'user/detail.html?user=U-12031' }
      ];
    }

    if (log.object.includes('U-12031')) {
      return [
        { label: '查看用户详情', route: 'user/detail.html?user=U-12031' },
        { label: '查看信用申诉', route: 'user/credit-detail.html?case=CR-8802' }
      ];
    }

    if (log.object.includes('CFG-HOME-07')) {
      return [
        { label: '查看子项目配置', route: 'task/config.html' },
        { label: '查看操作日志', route: 'account/logs.html?module=服务子项目配置' }
      ];
    }

    if (log.object.includes('ADM-014')) {
      return [
        { label: '查看账号管理', route: 'account/accounts.html' },
        { label: '查看反馈工单', route: 'support/feedback.html' }
      ];
    }

    return [{ label: '返回日志列表', route: 'account/logs.html' }];
  },

  render() {
    if (this.isAccountsPage()) {
      this.renderAccountsPage();
      return;
    }

    if (this.isRolesPage()) {
      this.renderRolesPage();
      return;
    }

    if (this.isLogDetailPage()) {
      this.renderLogDetailPage();
      return;
    }

    this.renderLogsPage();
  },

  renderAccountsPage() {
    const filtered = this.filterAccounts();
    const pagination = this.paginate(filtered, this.state.accounts.page);
    this.state.accounts.page = pagination.currentPage;
    const draft = this.getAccountDraft();
    const passwordTarget = this.accounts.find(item => item.id === this.state.accounts.passwordTargetId);
    const statusTarget = this.accounts.find(item => item.id === this.state.accounts.statusTargetId);
    const roleOptions = this.getAssignableRoles(draft.role);

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="accountKeyword" style="min-width:220px;" value="${this.state.accounts.keyword}" placeholder="搜索账号ID / 姓名 / 邮箱">
          <select class="select" id="accountRole">
            <option value="">全部角色</option>
            ${this.roles.map(role => `
              <option value="${role.key}" ${this.state.accounts.role === role.key ? 'selected' : ''}>${role.name}</option>
            `).join('')}
          </select>
          <select class="select" id="accountStatus">
            <option value="">全部状态</option>
            <option value="active" ${this.state.accounts.status === 'active' ? 'selected' : ''}>正常</option>
            <option value="disabled" ${this.state.accounts.status === 'disabled' ? 'selected' : ''}>禁用</option>
            <option value="locked" ${this.state.accounts.status === 'locked' ? 'selected' : ''}>锁定</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-accounts">搜索</button>
          <button class="btn" type="button" data-action="reset-accounts">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-accounts">导出账号清单</button>
            <button class="btn btn-primary" type="button" data-action="open-account-modal">新建账号</button>
          </div>
        </div>
      </div>

      <div class="table-container account-table-container">
        <table class="table account-table">
          <colgroup>
            <col style="width:28%;">
            <col style="width:28%;">
            <col style="width:12%;">
            <col style="width:16%;">
            <col style="width:16%;">
          </colgroup>
          <thead>
            <tr>
              <th>账号</th>
              <th>角色 / 权限</th>
              <th>状态</th>
              <th>最近登录</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(account => `
              <tr>
                <td>
                  <div class="account-primary">${account.name}</div>
                  <div class="table-note account-secondary">${account.id} · ${account.email}</div>
                </td>
                <td>
                  <span class="tag ${this.getRoleTag(account.role)}">${account.roleLabel}</span>
                  <div class="table-note account-permission">${account.permission}</div>
                </td>
                <td><span class="tag ${this.getStatusTag(account.status)}">${this.getStatusLabel(account.status, account.statusLabel)}</span></td>
                <td class="account-dim">${account.lastLogin}</td>
                <td class="action-cell">
                  <div class="account-action-group">
                    <button class="btn btn-sm" type="button" data-action="edit-account" data-id="${account.id}">编辑</button>
                    <button class="btn btn-sm" type="button" data-action="open-account-password" data-id="${account.id}">修改密码</button>
                    <button class="btn btn-sm ${account.status === 'active' ? '' : 'btn-primary'}" type="button" data-action="toggle-account-status" data-id="${account.id}">
                      ${account.status === 'active' ? '禁用账号' : '恢复账号'}
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      ${AdminCore.renderPagination(`共 ${filtered.length} 条账号记录`, pagination.currentPage, pagination.totalPages)}

      <div class="modal-backdrop ${this.state.accounts.showModal ? 'active' : ''}" id="accountModalBackdrop">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">${this.state.accounts.editingId ? '编辑账号' : '新建账号'}</div>
            <div class="modal-close" data-action="close-account-modal">✕</div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label required">姓名</label>
              <input class="input" id="modalAccountName" value="${draft.name}" style="width:100%;" placeholder="请输入管理员姓名">
            </div>
            <div class="form-group">
              <label class="form-label required">邮箱账号</label>
              <input class="input" id="modalAccountEmail" value="${draft.email}" style="width:100%;" placeholder="name@campusjob.com">
            </div>
            <div class="form-group">
              <label class="form-label required">角色</label>
              <select class="select" id="modalAccountRole" style="width:100%;">
                ${roleOptions.map(role => `
                  <option value="${role.key}" ${draft.role === role.key ? 'selected' : ''}>${role.name}</option>
                `).join('')}
              </select>
            </div>
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary);">
              <div style="font-weight:600; margin-bottom:6px;">账号规则</div>
              <div class="section-hint">一个账号仅可关联一个角色。创建与编辑账号后，会立即同步该角色的权限摘要，并把操作写入日志系统。</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-account-modal">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-account-modal">保存账号</button>
          </div>
        </div>
      </div>

      <div class="modal-backdrop ${this.state.accounts.showPasswordModal ? 'active' : ''}">
        <div class="modal" style="width:520px;">
          <div class="modal-header">
            <div class="modal-title">修改账号密码</div>
            <div class="modal-close" data-action="close-account-password">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              <div style="font-weight:600; margin-bottom:6px;">当前账号</div>
              <div class="section-hint">${passwordTarget ? `${passwordTarget.name} · ${passwordTarget.id} · ${passwordTarget.email}` : '未选择账号'}</div>
            </div>
            <div class="form-group">
              <label class="form-label required">新密码</label>
              <input class="input" id="accountNewPassword" type="password" style="width:100%;" placeholder="请输入不少于 8 位的新密码">
            </div>
            <div class="form-group">
              <label class="form-label required">确认新密码</label>
              <input class="input" id="accountConfirmPassword" type="password" style="width:100%;" placeholder="请再次输入新密码">
            </div>
            ${passwordTarget ? this.renderAccountTraceCard(passwordTarget, '最近留痕摘要') : ''}
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-top:16px;">
              <div style="font-weight:600; margin-bottom:6px;">操作影响</div>
              <div class="section-hint">确认后将写入操作日志，并要求该账号下次登录时重新完成短信验证码与邮件确认。</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-account-password">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-account-password">确认修改</button>
          </div>
        </div>
      </div>

      <div class="modal-backdrop ${this.state.accounts.showStatusModal ? 'active' : ''}">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">${statusTarget?.status === 'active' ? '确认禁用账号' : '确认恢复账号'}</div>
            <div class="modal-close" data-action="close-account-status">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              <div style="font-weight:600; margin-bottom:6px;">目标账号</div>
              <div class="section-hint">
                ${statusTarget ? `${statusTarget.name} · ${statusTarget.id} · ${statusTarget.roleLabel}` : '未选择账号'}
              </div>
            </div>
            ${statusTarget ? `
              <div class="section-card account-impact-card">
                <div class="card-header" style="padding-bottom:10px;">
                  <div class="card-title">影响范围</div>
                </div>
                <div class="account-impact-list">
                  ${this.getAccountStatusImpact(statusTarget).map(item => `
                    <div class="account-impact-item">
                      <span class="account-impact-dot"></span>
                      <span>${item}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
              ${this.renderAccountTraceCard(statusTarget, '最近留痕摘要')}
            ` : ''}
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-account-status">取消</button>
            <button class="btn btn-primary" type="button" data-action="confirm-account-status">
              ${statusTarget?.status === 'active' ? '确认禁用' : '确认恢复'}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  getAccountDraft() {
    if (!this.state.accounts.editingId) {
      return { name: '', email: '', role: this.getAssignableRoles()[0]?.key || 'service' };
    }

    const found = this.accounts.find(item => item.id === this.state.accounts.editingId);
    return found ? { name: found.name, email: found.email, role: found.role } : { name: '', email: '', role: this.getAssignableRoles()[0]?.key || 'service' };
  },

  getRoleDraft() {
    if (!this.state.roles.editingKey) {
      return {
        key: '',
        name: '',
        tone: 'info',
        status: 'active',
        permissionSummary: '',
        description: '',
        modules: [],
        menuPermissions: {},
        sensitiveMask: { nickname: false, phone: true, address: true }
      };
    }

    const found = this.getRoleByKey(this.state.roles.editingKey);
    return found ? { ...found, modules: [...found.modules] } : {
      key: '',
      name: '',
      tone: 'info',
      status: 'active',
      permissionSummary: '',
      description: '',
      modules: [],
      menuPermissions: {},
      sensitiveMask: { nickname: false, phone: true, address: true }
    };
  },

  getRoleMemberCount(roleKey) {
    return this.accounts.filter(account => account.role === roleKey).length;
  },

  getRoleModuleNames(role) {
    const options = this.getRoleModuleOptions();
    const modules = role.modules || this.getRoleModulesFromPermissions(role);
    return modules.map(moduleKey => {
      const found = options.find(option => option.key === moduleKey);
      return found ? found.label : moduleKey;
    });
  },

  getNextLogId() {
    const max = this.logs.reduce((currentMax, log) => {
      const matched = Number((log.id.match(/\d+/) || ['0'])[0]);
      return Math.max(currentMax, matched);
    }, 0);
    return `LOG-${String(max + 1).padStart(5, '0')}`;
  },

  getNowLabel() {
    const now = new Date();
    const pad = value => String(value).padStart(2, '0');
    return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  },

  appendAuditLog(entry) {
    this.logs.unshift({
      id: this.getNextLogId(),
      operator: '超级管理员',
      module: '账号与权限',
      ip: '113.80.21.16',
      time: this.getNowLabel(),
      risk: '中',
      note: '',
      ...entry
    });
    AdminStore.set('account_logs', this.logs);
  },

  getAccountTraceItems(account) {
    const relatedLogs = this.logs
      .filter(log => log.object.includes(account.id))
      .slice(0, 2)
      .map(log => ({
        label: `${log.module} · ${log.action}`,
        value: `${log.time}${log.note ? ` · ${log.note}` : ''}`
      }));

    const fallbackItems = [
      { label: '当前角色', value: `${account.roleLabel} · ${account.permission}` },
      { label: '最近登录', value: account.lastLogin },
      { label: '当前状态', value: this.getStatusLabel(account.status, account.statusLabel) }
    ];

    return [...fallbackItems, ...relatedLogs];
  },

  renderAccountTraceCard(account, title = '最近留痕摘要') {
    if (!account) {
      return '';
    }

    return `
      <div class="section-card account-trace-card">
        <div class="card-header" style="padding-bottom:10px;">
          <div class="card-title">${title}</div>
        </div>
        <div class="account-trace-list">
          ${this.getAccountTraceItems(account).map(item => `
            <div class="account-trace-item">
              <div class="account-trace-label">${item.label}</div>
              <div class="account-trace-value">${item.value}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  getAccountStatusImpact(account) {
    if (account.status === 'active') {
      return [
        '账号将立即失效，并强制退出当前会话。',
        '未处理工单将按同角色优先规则自动转移。',
        '角色配置保留，后续恢复后沿用当前权限。'
      ];
    }

    return [
      '账号将恢复可登录状态，并继续沿用当前角色权限。',
      '锁定或停用状态会被清除，重新进入正常使用。',
      '本次恢复动作会写入操作日志，便于后续审计追溯。'
    ];
  },

  renderRolesPage() {
    const draft = this.getRoleDraft();
    const filteredRoles = this.filterRoles();
    const permissionRole = this.getRoleByKey(this.state.roles.permissionKey);
    const permissionTree = this.getPermissionTreeCatalog();

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="roleKeyword" style="min-width:220px;" value="${this.state.roles.keyword}" placeholder="搜索角色名称 / 标识 / 权限摘要">
          <select class="select" id="roleStatus">
            <option value="">全部状态</option>
            <option value="active" ${this.state.roles.status === 'active' ? 'selected' : ''}>启用</option>
            <option value="disabled" ${this.state.roles.status === 'disabled' ? 'selected' : ''}>停用</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-roles">搜索</button>
          <button class="btn" type="button" data-action="reset-roles">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-roles">导出角色</button>
            <button class="btn btn-primary" type="button" data-action="open-role-modal">新建角色</button>
          </div>
        </div>
      </div>

      <div class="table-container account-table-container">
        <table class="table account-table">
          <colgroup>
            <col style="width:14%;">
            <col style="width:12%;">
            <col style="width:17%;">
            <col style="width:20%;">
            <col style="width:17%;">
            <col style="width:8%;">
            <col style="width:5%;">
            <col style="width:7%;">
          </colgroup>
          <thead>
            <tr>
              <th>角色名称</th>
              <th>角色标识</th>
              <th>权限摘要</th>
              <th>可访问模块</th>
              <th>用户信息展示</th>
              <th>状态</th>
              <th>成员数</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${filteredRoles.map(role => `
              <tr>
                <td>
                  <div class="account-primary">${role.name}</div>
                  <div class="table-note account-secondary">${role.description}</div>
                </td>
                <td class="account-dim">${role.key}</td>
                <td class="account-note-strong">${role.permissionSummary}</td>
                <td>
                  ${this.getRoleModuleNames(role).length ? `
                    <div class="data-chip-group">
                      ${this.getRoleModuleNames(role).map(label => `<span class="tag">${label}</span>`).join('')}
                    </div>
                  ` : '<span class="table-note">未配置菜单权限</span>'}
                </td>
                <td>${this.renderSensitiveMaskTags(role)}</td>
                <td><span class="tag ${role.status === 'active' ? 'tag-success' : 'tag-warning'}">${role.status === 'active' ? '启用' : '停用'}</span></td>
                <td><span class="account-session-badge">${this.getRoleMemberCount(role.key)}</span></td>
                <td class="action-cell">
                  <div class="account-action-group">
                    <button class="btn btn-sm" type="button" data-action="edit-role" data-key="${role.key}">编辑角色</button>
                    <button class="btn btn-sm" type="button" data-action="open-role-permissions" data-key="${role.key}">菜单权限</button>
                    <button class="btn btn-sm ${role.status === 'active' ? '' : 'btn-primary'}" type="button" data-action="toggle-role-status" data-key="${role.key}">
                      ${role.status === 'active' ? '停用角色' : '启用角色'}
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div class="modal-backdrop ${this.state.roles.showModal ? 'active' : ''}">
        <div class="modal" style="width:620px;">
          <div class="modal-header">
            <div class="modal-title">${this.state.roles.editingKey ? '编辑角色' : '新建角色'}</div>
            <div class="modal-close" data-action="close-role-modal">✕</div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label class="form-label required">角色名称</label>
              <input class="input" id="modalRoleName" value="${draft.name}" style="width:100%;" placeholder="例如：内容审核专员">
            </div>
            <div class="account-role-form-grid">
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label required">角色标识</label>
                <input class="input" id="modalRoleKey" value="${draft.key}" style="width:100%;" placeholder="例如：content_reviewer" ${this.state.roles.editingKey ? 'disabled' : ''}>
              </div>
              <div class="form-group" style="margin-bottom:0;">
                <label class="form-label required">状态</label>
                <select class="select" id="modalRoleStatus" style="width:100%;">
                  <option value="active" ${draft.status === 'active' ? 'selected' : ''}>启用</option>
                  <option value="disabled" ${draft.status === 'disabled' ? 'selected' : ''}>停用</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label required">权限摘要</label>
              <input class="input" id="modalRolePermission" value="${draft.permissionSummary}" style="width:100%;" placeholder="例如：动态审核 / 举报复核 / 内容下架">
            </div>
            <div class="form-group">
              <label class="form-label">角色说明</label>
              <textarea class="textarea" id="modalRoleDescription" style="width:100%; min-height:88px;" placeholder="描述该角色适用的业务范围和边界">${draft.description}</textarea>
            </div>
            <div class="form-group">
              <label class="form-label">用户信息脱敏配置</label>
              <div class="permission-tree-actions" style="grid-template-columns:repeat(3, minmax(0, 1fr));">
                <label class="permission-tree-action">
                  <input type="checkbox" id="modalMaskNickname" ${this.normalizeSensitiveMask(draft.sensitiveMask, draft.key).nickname ? 'checked' : ''}>
                  <span>用户昵称脱敏</span>
                </label>
                <label class="permission-tree-action">
                  <input type="checkbox" id="modalMaskPhone" ${this.normalizeSensitiveMask(draft.sensitiveMask, draft.key).phone ? 'checked' : ''}>
                  <span>完整手机号脱敏</span>
                </label>
                <label class="permission-tree-action">
                  <input type="checkbox" id="modalMaskAddress" ${this.normalizeSensitiveMask(draft.sensitiveMask, draft.key).address ? 'checked' : ''}>
                  <span>完整地址脱敏</span>
                </label>
              </div>
              <div class="section-hint">勾选后，该角色在用户资料、订单双方信息和导出结果中默认只看到脱敏值；查看完整值需另走敏感动作审计。</div>
            </div>
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary);">
              <div style="font-weight:600; margin-bottom:6px;">配置说明</div>
              <div class="section-hint">角色基础信息与权限摘要在这里维护；具体菜单权限请在列表中点击“菜单权限”进入树状配置。</div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-role-modal">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-role-modal">保存角色</button>
          </div>
        </div>
      </div>

      <div class="modal-backdrop ${this.state.roles.showPermissionModal ? 'active' : ''}">
        <div class="modal" style="width:760px;">
          <div class="modal-header">
            <div class="modal-title">菜单权限配置${permissionRole ? ` · ${permissionRole.name}` : ''}</div>
            <div class="modal-close" data-action="close-role-permissions">✕</div>
          </div>
          <div class="modal-body">
            <div class="permission-tree">
              ${permissionRole ? permissionTree.map(group => {
                const checkedChildren = group.children.filter(child => (permissionRole.menuPermissions?.[child.key] || []).length > 0);
                return `
                  <div class="permission-tree-group" data-group-scope="${group.key}">
                    <label class="permission-tree-group-label">
                      <span class="permission-tree-group-badge">${group.icon || '•'}</span>
                      <input type="checkbox" data-role-group="${group.key}" ${checkedChildren.length === group.children.length && group.children.length ? 'checked' : ''}>
                      <span class="permission-tree-group-text">
                        <span class="permission-tree-group-name">${group.label}</span>
                      </span>
                    </label>
                    <div class="permission-tree-children">
                      ${group.children.map(child => {
                        const selectedActions = permissionRole.menuPermissions?.[child.key] || [];
                        return `
                          <div class="permission-tree-child">
                            <div class="permission-tree-child-header">
                              <label class="permission-tree-child-label">
                                <input type="checkbox" data-role-menu="${child.key}" data-parent-group="${group.key}" ${selectedActions.length === child.actions.length && child.actions.length ? 'checked' : ''}>
                                <span>${child.label}</span>
                              </label>
                              <span class="permission-tree-child-meta">${child.actions.length} 个操作</span>
                            </div>
                            <div class="permission-tree-actions">
                              ${child.actions.map(action => `
                                <label class="permission-tree-action">
                                  <input
                                    type="checkbox"
                                    data-role-action="${child.key}"
                                    data-action-key="${action.key}"
                                    data-parent-menu="${child.key}"
                                    data-parent-group="${group.key}"
                                    ${selectedActions.includes(action.key) ? 'checked' : ''}
                                  >
                                  <span>${action.label}</span>
                                </label>
                              `).join('')}
                            </div>
                          </div>
                        `;
                      }).join('')}
                    </div>
                  </div>
                `;
              }).join('') : '<div class="empty-note">请先选择需要配置的角色。</div>'}
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-role-permissions">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-role-permissions">保存权限</button>
          </div>
        </div>
      </div>
    `;

    if (this.state.roles.showPermissionModal) {
      this.syncPermissionTreeState();
    }
  },

  renderLogsPage() {
    const filtered = this.filterLogs();
    const pagination = this.paginate(filtered, this.state.logs.page);
    this.state.logs.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel">
        <div class="filter-row">
          <input class="input" id="logKeyword" style="min-width:220px;" value="${this.state.logs.keyword}" placeholder="搜索日志ID / 操作人 / 关联对象">
          <select class="select" id="logModule">
            <option value="">全部模块</option>
            <option value="用户管理" ${this.state.logs.module === '用户管理' ? 'selected' : ''}>用户管理</option>
            <option value="订单管理" ${this.state.logs.module === '订单管理' ? 'selected' : ''}>订单管理</option>
            <option value="任务管理" ${this.state.logs.module === '任务管理' ? 'selected' : ''}>任务管理</option>
            <option value="账号与权限" ${this.state.logs.module === '账号与权限' ? 'selected' : ''}>账号与权限</option>
            <option value="服务子项目配置" ${this.state.logs.module === '服务子项目配置' ? 'selected' : ''}>服务子项目配置</option>
          </select>
          <select class="select" id="logAction">
            <option value="">全部动作</option>
            <option value="信用分" ${this.state.logs.action === '信用分' ? 'selected' : ''}>信用分调整</option>
            <option value="查看完整手机号" ${this.state.logs.action === '查看完整手机号' ? 'selected' : ''}>查看完整手机号</option>
            <option value="结算" ${this.state.logs.action === '结算' ? 'selected' : ''}>结算相关</option>
            <option value="下架" ${this.state.logs.action === '下架' ? 'selected' : ''}>下架相关</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-logs">搜索</button>
          <button class="btn" type="button" data-action="reset-logs">重置</button>
        </div>
      </div>

      <div class="table-container log-table-container">
        <table class="table log-table">
          <colgroup>
            <col style="width:16%;">
            <col style="width:12%;">
            <col style="width:16%;">
            <col style="width:18%;">
            <col style="width:12%;">
            <col style="width:14%;">
            <col style="width:8%;">
            <col style="width:4%;">
          </colgroup>
          <thead>
            <tr>
              <th>日志ID</th>
              <th>模块</th>
              <th>动作</th>
              <th>关联对象</th>
              <th>操作人</th>
              <th>时间</th>
              <th>风险级别</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(log => `
              <tr class="${log.id === this.state.logs.selectedLogId ? 'log-row-active' : ''}">
                <td>
                  <div class="account-primary">${log.id}</div>
                  <div class="table-note account-secondary">IP ${log.ip}</div>
                </td>
                <td class="account-dim">${log.module}</td>
                <td class="account-note-strong">${log.action}</td>
                <td class="account-dim">${log.object}</td>
                <td class="account-dim">${log.operator}</td>
                <td class="account-dim">${log.time}</td>
                <td><span class="tag ${log.risk === '高' ? 'tag-danger' : 'tag-warning'}">${log.risk}风险</span></td>
                <td class="action-cell"><button class="btn btn-sm" type="button" data-action="select-log" data-id="${log.id}">查看详情</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条日志`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderLogDetailPage() {
    const logId = new URLSearchParams(window.location.search).get('log');
    const selectedLog = this.logs.find(log => log.id === logId) || this.logs[0];
    const relatedLinks = this.getLogRelatedLinks(selectedLog);
    this.state.logs.selectedLogId = selectedLog.id;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">日志详情页 · 审计基础信息 / 上下文快照 / 时间轴 / 关联跳转</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="account/logs.html">返回日志列表</button>
            <button class="btn btn-primary" type="button" data-action="export-single-log">导出当前日志</button>
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card log-detail-hero">
            <div class="log-detail-eyebrow">审计日志详情</div>
            <div class="log-detail-title">${selectedLog.module} · ${selectedLog.action}</div>
            <div class="log-detail-meta">${selectedLog.id} · ${selectedLog.operator} · ${selectedLog.time}</div>
            <div class="log-detail-pill-group">
              <span class="tag ${selectedLog.risk === '高' ? 'tag-danger' : 'tag-warning'}">${selectedLog.risk}风险</span>
              <span class="log-detail-pill">异步写入</span>
              <span class="log-detail-pill">保留 3 年</span>
            </div>
          </div>

          <div class="section-card">
            <div class="card-header">
              <div class="card-title">日志基础信息</div>
            </div>
            <div class="info-grid">
              <div class="info-pair"><div class="info-pair-label">日志ID</div><div class="info-pair-value">${selectedLog.id}</div></div>
              <div class="info-pair"><div class="info-pair-label">操作时间</div><div class="info-pair-value">${selectedLog.time}</div></div>
              <div class="info-pair"><div class="info-pair-label">模块 / 动作</div><div class="info-pair-value">${selectedLog.module} / ${selectedLog.action}</div></div>
              <div class="info-pair"><div class="info-pair-label">关联对象</div><div class="info-pair-value">${selectedLog.object}</div></div>
              <div class="info-pair"><div class="info-pair-label">操作人</div><div class="info-pair-value">${selectedLog.operator}</div></div>
              <div class="info-pair"><div class="info-pair-label">IP 地址</div><div class="info-pair-value">${selectedLog.ip}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="card-header"><div class="card-title">操作结果与上下文</div></div>
            <div class="summary-grid log-detail-summary-grid">
              <div class="summary-item"><div class="summary-item-label">风险级别</div><div class="summary-item-value">${selectedLog.risk}风险</div></div>
              <div class="summary-item"><div class="summary-item-label">写入方式</div><div class="summary-item-value">异步写入</div></div>
              <div class="summary-item"><div class="summary-item-label">保留策略</div><div class="summary-item-value">3 年 + 冷存储</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">内容快照</div>
            <div class="evidence-list">
              <div class="evidence-item">
                <div class="evidence-title">操作前状态</div>
                <div class="evidence-desc">${selectedLog.before}</div>
              </div>
              <div class="evidence-item">
                <div class="evidence-title">操作后状态</div>
                <div class="evidence-desc">${selectedLog.after}</div>
              </div>
              <div class="evidence-item">
                <div class="evidence-title">审计备注</div>
                <div class="evidence-desc">${selectedLog.note}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-stack sticky-actions log-detail-sidebar">
          <div class="section-card">
            <div class="card-header"><div class="card-title">关联跳转</div></div>
            <div class="log-detail-link-list">
              ${relatedLinks.map(link => `<button class="btn" type="button" data-route="${link.route}">${link.label}</button>`).join('')}
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">审计时间轴</div></div>
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div>主业务动作执行成功</div>
                  <div class="section-hint">后台主流程已完成，再异步写入日志。</div>
                  <div class="timeline-time">${selectedLog.time}</div>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <div>审计快照落库</div>
                  <div class="section-hint">操作前后数据、IP、关联对象和结果均被记录。</div>
                  <div class="timeline-time">${selectedLog.time}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">审计建议</div></div>
            <div class="bullet-list">
              <div class="bullet-item"><div>敏感动作已被完整记录，可回溯到操作人和 IP。</div><div class="bullet-meta">审计可追溯</div></div>
              <div class="bullet-item"><div>如涉及退款、信用恢复或完整手机号查看，应同步复核业务结果与消息通知。</div><div class="bullet-meta">联动检查</div></div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  bindEvents() {
    if (this.bound) {
      return;
    }

    this.root.addEventListener('click', event => {
      const target = event.target.closest('[data-action], [data-account-select], [data-pagination-page]');
      if (!target) {
        return;
      }

      if (target.dataset.accountSelect) {
        this.toggleAccountSelection(target.dataset.accountSelect, target.checked);
        return;
      }

      if (target.dataset.paginationPage) {
        if (target.classList.contains('disabled') || target.classList.contains('active')) {
          return;
        }
        const nextPage = Number(target.dataset.paginationPage);
        if (this.isAccountsPage()) {
          this.state.accounts.page = nextPage;
        } else {
          this.state.logs.page = nextPage;
        }
        this.render();
        return;
      }

      const action = target.dataset.action;
      switch (action) {
        case 'search-accounts':
          this.state.accounts.keyword = document.getElementById('accountKeyword').value.trim();
          this.state.accounts.role = document.getElementById('accountRole').value;
          this.state.accounts.status = document.getElementById('accountStatus').value;
          this.state.accounts.page = 1;
          this.render();
          AdminUI.showMessage('账号列表已按条件筛选', 'success');
          break;
        case 'reset-accounts':
          this.state.accounts = {
            keyword: '',
            role: '',
            status: '',
            tab: 'all',
            page: 1,
            selectedIds: [],
            showModal: false,
            editingId: '',
            showPasswordModal: false,
            passwordTargetId: '',
            showStatusModal: false,
            statusTargetId: ''
          };
          this.render();
          AdminUI.showMessage('账号筛选条件已重置', 'success');
          break;
        case 'open-account-modal':
          this.state.accounts.showModal = true;
          this.state.accounts.editingId = '';
          this.render();
          break;
        case 'close-account-modal':
          this.state.accounts.showModal = false;
          this.state.accounts.editingId = '';
          this.render();
          break;
        case 'submit-account-modal':
          this.submitAccountModal();
          break;
        case 'edit-account':
          this.state.accounts.editingId = target.dataset.id;
          this.state.accounts.showModal = true;
          this.render();
          break;
        case 'open-account-password':
          this.state.accounts.passwordTargetId = target.dataset.id;
          this.state.accounts.showPasswordModal = true;
          this.render();
          break;
        case 'close-account-password':
          this.state.accounts.passwordTargetId = '';
          this.state.accounts.showPasswordModal = false;
          this.render();
          break;
        case 'close-account-status':
          this.state.accounts.statusTargetId = '';
          this.state.accounts.showStatusModal = false;
          this.render();
          break;
        case 'submit-account-password':
          this.submitAccountPassword();
          break;
        case 'toggle-account-status':
          this.state.accounts.statusTargetId = target.dataset.id;
          this.state.accounts.showStatusModal = true;
          this.render();
          break;
        case 'confirm-account-status':
          this.confirmAccountStatusChange();
          break;
        case 'export-accounts':
          AdminUI.showMessage('账号清单导出任务已创建', 'success');
          break;
        case 'open-role-modal':
          this.state.roles.showModal = true;
          this.state.roles.editingKey = '';
          this.render();
          break;
        case 'search-roles':
          this.state.roles.keyword = document.getElementById('roleKeyword').value.trim();
          this.state.roles.status = document.getElementById('roleStatus').value;
          this.render();
          AdminUI.showMessage('角色列表已按条件筛选', 'success');
          break;
        case 'reset-roles':
          this.state.roles.keyword = '';
          this.state.roles.status = '';
          this.render();
          AdminUI.showMessage('角色筛选条件已重置', 'success');
          break;
        case 'export-roles':
          AdminUI.showMessage('角色权限清单导出任务已创建', 'success');
          break;
        case 'close-role-modal':
          this.state.roles.showModal = false;
          this.state.roles.editingKey = '';
          this.render();
          break;
        case 'edit-role':
          this.state.roles.editingKey = target.dataset.key;
          this.state.roles.showModal = true;
          this.render();
          break;
        case 'open-role-permissions':
          this.state.roles.permissionKey = target.dataset.key;
          this.state.roles.showPermissionModal = true;
          this.render();
          break;
        case 'close-role-permissions':
          this.state.roles.permissionKey = '';
          this.state.roles.showPermissionModal = false;
          this.render();
          break;
        case 'toggle-role-status':
          this.toggleRoleStatus(target.dataset.key);
          break;
        case 'submit-role-modal':
          this.submitRoleModal();
          break;
        case 'submit-role-permissions':
          this.submitRolePermissions();
          break;
        case 'search-logs':
          this.state.logs.keyword = document.getElementById('logKeyword').value.trim();
          this.state.logs.module = document.getElementById('logModule').value;
          this.state.logs.action = document.getElementById('logAction').value;
          this.state.logs.page = 1;
          this.render();
          AdminUI.showMessage('操作日志已按条件筛选', 'success');
          break;
        case 'reset-logs':
          this.state.logs.keyword = '';
          this.state.logs.module = '';
          this.state.logs.action = '';
          this.state.logs.tab = 'all';
          this.state.logs.page = 1;
          this.render();
          AdminUI.showMessage('日志筛选条件已重置', 'success');
          break;
        case 'select-log':
          this.state.logs.selectedLogId = target.dataset.id;
          AdminCore.routeTo(`account/log-detail.html?log=${target.dataset.id}`);
          break;
        case 'export-single-log':
          AdminUI.showMessage('日志导出任务已进入队列，稍后可在下载中心查看', 'success');
          break;
        default:
          break;
      }
    });

    this.root.addEventListener('change', event => {
      const groupInput = event.target.closest('[data-role-group]');
      if (groupInput) {
        const groupKey = groupInput.dataset.roleGroup;
        this.root.querySelectorAll(`[data-parent-group="${groupKey}"][data-role-menu], [data-parent-group="${groupKey}"][data-role-action]`).forEach(input => {
          input.checked = groupInput.checked;
        });
        this.syncPermissionTreeState();
        return;
      }

      const menuInput = event.target.closest('[data-role-menu]');
      if (menuInput) {
        const menuKey = menuInput.dataset.roleMenu;
        this.root.querySelectorAll(`[data-parent-menu="${menuKey}"][data-role-action]`).forEach(input => {
          input.checked = menuInput.checked;
        });
        this.syncPermissionTreeState();
        return;
      }

      const actionInput = event.target.closest('[data-role-action]');
      if (actionInput) {
        this.syncPermissionTreeState();
      }
    });

    this.bound = true;
  },

  toggleAccountSelection(id, checked) {
    const selected = new Set(this.state.accounts.selectedIds);
    if (checked) {
      selected.add(id);
    } else {
      selected.delete(id);
    }
    this.state.accounts.selectedIds = Array.from(selected);
    this.render();
  },

  toggleAllAccounts(checked) {
    const visibleIds = this.paginate(this.filterAccounts(), this.state.accounts.page).items.map(item => item.id);
    const selected = new Set(this.state.accounts.selectedIds);
    visibleIds.forEach(id => {
      if (checked) {
        selected.add(id);
      } else {
        selected.delete(id);
      }
    });
    this.state.accounts.selectedIds = Array.from(selected);
    this.render();
  },

  toggleAccountStatus(id, options = {}) {
    const account = this.accounts.find(item => item.id === id);
    if (!account) {
      return;
    }

    if (account.status === 'active') {
      account.status = 'disabled';
      account.statusLabel = '禁用';
      account.recentOp = '后台禁用账号';
      if (!options.silent) {
        AdminUI.showMessage(`账号 ${id} 已禁用，并已写入操作日志`, 'warning');
      }
    } else {
      account.status = 'active';
      account.statusLabel = '正常';
      account.recentOp = '后台恢复账号';
      if (!options.silent) {
        AdminUI.showMessage(`账号 ${id} 已恢复`, 'success');
      }
    }

    AdminStore.set('account_accounts', this.accounts);
    if (!options.skipRender) {
      this.render();
    }
  },

  confirmAccountStatusChange() {
    const targetId = this.state.accounts.statusTargetId;
    if (!targetId) {
      AdminUI.showMessage('未找到需要处理的账号', 'error');
      return;
    }

    const account = this.accounts.find(item => item.id === targetId);
    if (!account) {
      AdminUI.showMessage('未找到需要处理的账号', 'error');
      return;
    }

    const isDisabling = account.status === 'active';
    const previousStatus = this.getStatusLabel(account.status, account.statusLabel);
    const nextStatus = isDisabling ? '禁用' : '正常';
    const actionLabel = isDisabling ? '禁用账号' : '恢复账号';

    this.toggleAccountStatus(targetId, { skipRender: true, silent: true });
    this.appendAuditLog({
      action: actionLabel,
      object: `管理员 ${account.id}`,
      risk: isDisabling ? '中' : '低',
      before: `账号状态：${previousStatus}`,
      after: `账号状态：${nextStatus}`,
      note: `${account.name} · ${account.roleLabel}，操作完成后已同步刷新账号状态。`
    });
    this.state.accounts.statusTargetId = '';
    this.state.accounts.showStatusModal = false;
    AdminStore.set('account_accounts', this.accounts);
    AdminUI.showMessage(`账号 ${account.id} 已${isDisabling ? '禁用' : '恢复'}，并已写入操作日志`, isDisabling ? 'warning' : 'success');
    this.render();
  },

  toggleRoleStatus(key) {
    const role = this.getRoleByKey(key);
    if (!role) {
      return;
    }

    if (role.key === 'super_admin' && role.status === 'active') {
      AdminUI.showMessage('超级管理员角色不能停用', 'warning');
      return;
    }

    role.status = role.status === 'active' ? 'disabled' : 'active';
    AdminStore.set('account_roles', this.roles);
    this.render();
    AdminUI.showMessage(`角色 ${role.name} 已${role.status === 'active' ? '启用' : '停用'}`, 'success');
  },

  syncPermissionTreeState() {
    const root = this.root;
    if (!root) {
      return;
    }

    root.querySelectorAll('[data-role-menu]').forEach(menuInput => {
      const menuKey = menuInput.dataset.roleMenu;
      const actionInputs = Array.from(root.querySelectorAll(`[data-parent-menu="${menuKey}"][data-role-action]`));
      const checkedCount = actionInputs.filter(input => input.checked).length;
      menuInput.checked = actionInputs.length > 0 && checkedCount === actionInputs.length;
      menuInput.indeterminate = checkedCount > 0 && checkedCount < actionInputs.length;
    });

    root.querySelectorAll('[data-role-group]').forEach(groupInput => {
      const groupKey = groupInput.dataset.roleGroup;
      const actionInputs = Array.from(root.querySelectorAll(`[data-parent-group="${groupKey}"][data-role-action]`));
      const checkedCount = actionInputs.filter(input => input.checked).length;
      groupInput.checked = actionInputs.length > 0 && checkedCount === actionInputs.length;
      groupInput.indeterminate = checkedCount > 0 && checkedCount < actionInputs.length;
    });
  },

  submitRolePermissions() {
    const role = this.getRoleByKey(this.state.roles.permissionKey);
    if (!role) {
      AdminUI.showMessage('未找到需要配置权限的角色', 'error');
      return;
    }

    const permissions = {};
    this.root.querySelectorAll('[data-role-menu]').forEach(menuInput => {
      const menuKey = menuInput.dataset.roleMenu;
      const actions = Array.from(this.root.querySelectorAll(`[data-parent-menu="${menuKey}"][data-role-action]`))
        .filter(input => input.checked)
        .map(input => input.dataset.actionKey);
      if (actions.length) {
        permissions[menuKey] = actions;
      }
    });

    role.menuPermissions = permissions;
    role.modules = this.getRoleModulesFromPermissions(role);
    AdminStore.set('account_roles', this.roles);
    this.state.roles.permissionKey = '';
    this.state.roles.showPermissionModal = false;
    this.render();
    AdminUI.showMessage(`角色 ${role.name} 的菜单权限已更新`, 'success');
  },

  submitAccountPassword() {
    const account = this.accounts.find(item => item.id === this.state.accounts.passwordTargetId);
    const newPassword = document.getElementById('accountNewPassword')?.value.trim() || '';
    const confirmPassword = document.getElementById('accountConfirmPassword')?.value.trim() || '';

    if (!account) {
      AdminUI.showMessage('未找到需要修改密码的账号', 'error');
      return;
    }

    if (!newPassword || !confirmPassword) {
      AdminUI.showMessage('请完整填写新密码信息', 'error');
      return;
    }

    if (newPassword.length < 8) {
      AdminUI.showMessage('新密码至少需要 8 位', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      AdminUI.showMessage('两次输入的新密码不一致', 'error');
      return;
    }

    account.recentOp = '后台重置密码';
    this.appendAuditLog({
      action: '重置账号密码',
      object: `管理员 ${account.id}`,
      risk: '中',
      before: '密码状态：旧密码有效',
      after: '密码状态：已重置，需重新完成验证',
      note: `${account.name} 的后台密码已重置，并要求重新完成登录校验。`
    });
    AdminStore.set('account_accounts', this.accounts);
    this.state.accounts.passwordTargetId = '';
    this.state.accounts.showPasswordModal = false;
    this.render();
    AdminUI.showMessage(`账号 ${account.id} 密码已更新，并已写入操作日志`, 'success');
  },

  bulkDisableAccounts() {
    const ids = this.state.accounts.selectedIds;
    if (!ids.length) {
      AdminUI.showMessage('请先选择需要批量处理的账号', 'warning');
      return;
    }

    const blocked = ids.filter(id => {
      const account = this.accounts.find(item => item.id === id);
      return account && account.role === 'super_admin';
    });

    if (blocked.length) {
      AdminUI.showMessage('批量禁用已跳过超级管理员账号，请单独处理', 'warning');
    }

    this.accounts.forEach(account => {
      if (ids.includes(account.id) && account.role !== 'super_admin') {
        account.status = 'disabled';
        account.statusLabel = '停用';
      }
    });

    this.state.accounts.selectedIds = [];
    AdminStore.set('account_accounts', this.accounts);
    this.render();
    AdminUI.showMessage('批量禁用操作已完成', 'success');
  },

  submitAccountModal() {
    const name = document.getElementById('modalAccountName').value.trim();
    const email = document.getElementById('modalAccountEmail').value.trim();
    const role = document.getElementById('modalAccountRole').value;

    if (!name || !email || !email.includes('@')) {
      AdminUI.showMessage('请完整填写姓名和有效邮箱账号', 'error');
      return;
    }

    const selectedRole = this.getRoleByKey(role);
    if (!selectedRole) {
      AdminUI.showMessage('请选择有效角色', 'error');
      return;
    }

    if (this.state.accounts.editingId) {
      const current = this.accounts.find(item => item.id === this.state.accounts.editingId);
      if (current) {
        current.name = name;
        current.email = email;
        current.role = role;
        current.roleLabel = selectedRole.name;
        current.permission = selectedRole.permissionSummary;
      }
      this.appendAuditLog({
        action: '编辑账号',
        object: `管理员 ${this.state.accounts.editingId}`,
        risk: '低',
        before: '账号信息：旧资料',
        after: `账号信息：角色更新为 ${selectedRole.name}，邮箱更新为 ${email}`,
        note: `${name} 的账号资料已更新。`
      });
      AdminUI.showMessage('账号信息已更新，并同步写入日志', 'success');
    } else {
      const newAccountId = `ADM-${String(this.accounts.length + 61).padStart(3, '0')}`;
      this.accounts.unshift({
        id: newAccountId,
        name,
        email,
        role,
        roleLabel: selectedRole.name,
        status: 'active',
        statusLabel: '正常',
        permission: selectedRole.permissionSummary,
        lastLogin: '尚未登录',
        activeSession: '0 个在线会话',
        recentOp: '新建账号待首次登录',
        risk: '首次登录将触发新设备验证'
      });
      this.appendAuditLog({
        action: '新建账号',
        object: `管理员 ${newAccountId}`,
        risk: '低',
        before: '账号状态：不存在',
        after: `账号状态：已创建，角色为 ${selectedRole.name}`,
        note: `${name} 的后台账号已创建，待首次登录激活。`
      });
      AdminUI.showMessage('新账号已创建，首次登录需通过短信和邮件校验', 'success');
    }

    AdminStore.set('account_accounts', this.accounts);
    this.state.accounts.showModal = false;
    this.state.accounts.editingId = '';
    this.render();
  },

  submitRoleModal() {
    const name = document.getElementById('modalRoleName')?.value.trim() || '';
    const keyInput = document.getElementById('modalRoleKey');
    const key = (this.state.roles.editingKey || keyInput?.value.trim() || '').toLowerCase();
    const status = document.getElementById('modalRoleStatus')?.value || 'active';
    const permissionSummary = document.getElementById('modalRolePermission')?.value.trim() || '';
    const description = document.getElementById('modalRoleDescription')?.value.trim() || '';
    const sensitiveMask = {
      nickname: Boolean(document.getElementById('modalMaskNickname')?.checked),
      phone: Boolean(document.getElementById('modalMaskPhone')?.checked),
      address: Boolean(document.getElementById('modalMaskAddress')?.checked)
    };

    if (!name || !key || !permissionSummary) {
      AdminUI.showMessage('请完整填写角色名称、标识和权限摘要', 'error');
      return;
    }

    const existing = this.getRoleByKey(key);
    if (existing && !this.state.roles.editingKey) {
      AdminUI.showMessage('角色标识已存在，请更换', 'error');
      return;
    }

    const tone = existing?.tone || 'info';
    const nextRole = {
      key,
      name,
      tone,
      status,
      permissionSummary,
      description,
      sensitiveMask,
      menuPermissions: existing?.menuPermissions || {},
      modules: existing?.modules || []
    };

    if (this.state.roles.editingKey) {
      this.roles = this.roles.map(role => role.key === this.state.roles.editingKey ? { ...role, ...nextRole } : role);
      AdminUI.showMessage('角色权限已更新', 'success');
    } else {
      this.roles.unshift(nextRole);
      AdminUI.showMessage('新角色已创建，可立即用于账号分配', 'success');
    }

    AdminStore.set('account_roles', this.roles);
    this.syncAccountsWithRoles();
    this.state.roles.showModal = false;
    this.state.roles.editingKey = '';
    this.render();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  AccountModule.init();
});
