const ExtendedModule = {
  pageSize: 5,

  rewardRuleRows: [
    ['RW-101', '订单首次转发奖励', '每笔订单首次转发', '首单转发券 x1', '2026-05-08 00:00 至 2026-06-08 23:59', '3200', '未达预警', '生效中', '今天 10:16'],
    ['RW-102', '新用户注册奖励', '新用户注册', '新人立减券 x1 / 校园任务券 x1', '2026-05-10 00:00 至 2026-06-30 23:59', '2100', '已达预警', '待生效', '昨天 18:24'],
    ['RW-093', '有效拉新奖励', '有效拉新一名新用户', '新人立减券 x2', '2026-04-01 00:00 至 2026-04-30 23:59', '1200', '未达预警', '手动结束', '前天 15:08']
  ],

  couponConfigRows: [
    ['CP-001', '新人立减券', '立减', '无门槛', '全部项目', '仅任务金额', '否', '已启用', '今天 09:30'],
    ['CP-002', '首单转发券', '满减', '30 元', '生活服务 / 活动协助', '仅任务金额', '否', '已启用', '昨天 16:40'],
    ['CP-003', '校园任务券', '折扣', '50 元', '校园推广', '仅任务金额', '是', '草稿', '昨天 11:18']
  ],

  urgentPinRuleRows: [
    ['UP-201', '基础置顶规则', '5 元', '10 km', '1 h', '10 km · 2 h', '2026-05-08 00:00 至 2026-05-31 23:59', '已启用', '今天 09:20'],
    ['UP-204', '高峰期备用规则', '8 元', '10 km', '1 h', '10 km · 2 h', '2026-06-01 00:00 至 2026-06-15 23:59', '草稿', '昨天 19:16'],
    ['UP-198', '旧版置顶规则', '5 元', '5 km', '2 h', '5 km · 2 h', '2026-04-01 00:00 至 2026-04-30 23:59', '已停用', '前天 16:42']
  ],

  partnerRecords: [
    {
      id: 'PT-2101',
      applicant: '顾温澜',
      userId: 'U-23108',
      nickname: '顾温澜',
      type: '校园团队',
      city: '深圳',
      status: '待审核',
      channel: '校园社群 + 线下摆点',
      createdAt: '2026-04-26 18:20',
      registeredAt: '2026-03-18 14:32',
      creditScore: '96',
      realNameStatus: '已实名',
      authStatus: '学生认证已通过',
      agreementStatus: '待签约',
      application: {
        type: '组织',
        name: '深大校园灵活用工社',
        channel: '负责 6 个校园社群和线下海报投放，每周会在图书馆、食堂附近做摆点拉新，主要引导新用户完成注册、实名和首单发布。',
        monthlyLeads: '120-150 人',
        contact: '顾温澜 / 138 0000 1201',
        materials: '提交了社团介绍、近三个月社群运营截图、线下活动照片和负责人学生证信息，希望按校园团队合作方式开通。',
        materialsImages: [
          { id: 'pt2101-img1', label: '社群运营截图', note: '近 30 天社群活跃与转化数据' },
          { id: 'pt2101-img2', label: '线下摆点照片', note: '校园摆点与二维码展架' },
          { id: 'pt2101-img3', label: '负责人学生证', note: '用于核验团队负责人身份' }
        ],
        submittedAt: '2026-04-26 18:20'
      },
      commission: { current: '10%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['新申请待审核', '校园团队', '无历史处罚'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-26 18:20', desc: '提交合伙人类型、渠道说明、联系人和图片材料。' }
      ],
      reviewAdvice: '重点核对团队真实性、校园渠道覆盖范围和联系人可触达性。',
      note: '建议优先核对校园团队真实性与渠道截图后再放行分佣权限。'
    },
    {
      id: 'PT-2094',
      applicant: '林见川',
      userId: 'U-22796',
      nickname: '林见川',
      type: '个人推广',
      city: '广州',
      status: '待审核',
      channel: '短视频引流',
      createdAt: '2026-04-25 16:08',
      registeredAt: '2026-03-02 09:18',
      creditScore: '91',
      realNameStatus: '已实名',
      authStatus: '技能认证已通过',
      agreementStatus: '待审核',
      application: {
        type: '个人',
        name: '林见川',
        channel: '通过短视频账号和朋友圈做兼职内容分享，计划引导同城大学生注册并完成首单。当前已附上账号主页截图和过往合作案例。',
        monthlyLeads: '40-60 人',
        contact: '林见川 / 136 0000 2094',
        materials: '已提供账号主页截图和案例说明，但尚缺少近 30 天转化数据与固定社群承接方式，需补充更稳定的拉新证明。',
        materialsImages: [
          { id: 'pt2094-img1', label: '账号主页截图', note: '短视频账号主页与粉丝规模' },
          { id: 'pt2094-img2', label: '合作案例截图', note: '过往拉新活动的数据证明' }
        ],
        submittedAt: '2026-04-25 16:08'
      },
      commission: { current: '8%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['待审核', '渠道真实性待核对'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-25 16:08', desc: '已提交基础申请资料和两张图片材料。' }
      ],
      reviewAdvice: '重点核对转化证明与承接链路，再决定通过或拒绝。',
      note: '缺少近 30 天稳定转化证明，建议继续补充后再审核。'
    },
    {
      id: 'PT-2083',
      applicant: '林见川',
      userId: 'U-22796',
      nickname: '林见川',
      type: '个人推广',
      city: '广州',
      status: '已拒绝',
      channel: '短视频引流',
      createdAt: '2026-04-18 15:22',
      registeredAt: '2026-03-02 09:18',
      creditScore: '91',
      realNameStatus: '已实名',
      authStatus: '技能认证已通过',
      agreementStatus: '已拒绝',
      application: {
        type: '个人',
        name: '林见川',
        channel: '计划通过短视频账号发布兼职攻略内容，引导学生注册平台并完成首单。',
        monthlyLeads: '50 人',
        contact: '林见川 / 136 0000 2094',
        materials: '仅提交账号主页说明，未提供近 30 天转化数据或承接社群截图。',
        materialsImages: [
          { id: 'pt2083-img1', label: '账号主页截图', note: '缺少后台数据页和转化证明' }
        ],
        submittedAt: '2026-04-18 15:22'
      },
      commission: { current: '8%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['历史驳回', '材料不足'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-18 15:22', desc: '提交个人推广申请。' },
        { title: '审核拒绝', time: '2026-04-18 18:40', desc: '材料不足，缺少稳定拉新渠道证明。' }
      ],
      rejectReason: '缺少可核验的推广渠道和转化证明。',
      reviseSuggestion: '重新提交时需补充近 30 天账号数据、社群承接截图或历史合作案例。',
      note: ''
    },
    {
      id: 'PT-2076',
      applicant: '林见川',
      userId: 'U-22796',
      nickname: '林见川',
      type: '个人推广',
      city: '广州',
      status: '已拒绝',
      channel: '朋友圈推广',
      createdAt: '2026-04-10 11:36',
      registeredAt: '2026-03-02 09:18',
      creditScore: '91',
      realNameStatus: '已实名',
      authStatus: '技能认证已通过',
      agreementStatus: '已拒绝',
      application: {
        type: '个人',
        name: '林见川',
        channel: '通过朋友圈和同学群推广兼职平台，预计每月带来 30 人注册。',
        monthlyLeads: '30 人',
        contact: '林见川 / 136 0000 2094',
        materials: '推广说明较简单，未上传可证明渠道规模的图片资料。',
        materialsImages: [],
        submittedAt: '2026-04-10 11:36'
      },
      commission: { current: '8%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['历史驳回', '图片材料缺失'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-10 11:36', desc: '提交个人推广申请。' },
        { title: '审核拒绝', time: '2026-04-10 16:05', desc: '缺少图片材料和渠道规模证明。' }
      ],
      rejectReason: '未上传推广渠道材料，无法确认拉新能力。',
      reviseSuggestion: '请补充渠道截图、推广案例和联系人信息后重新申请。',
      note: ''
    },
    {
      id: 'PT-2107',
      applicant: '许知夏',
      userId: 'U-23317',
      nickname: '许知夏',
      type: '个人推广',
      city: '杭州',
      status: '待审核',
      channel: '小红书笔记 + 校园群',
      createdAt: '2026-04-27 09:36',
      registeredAt: '2026-02-20 12:18',
      creditScore: '94',
      realNameStatus: '已实名',
      authStatus: '学生认证已通过',
      agreementStatus: '待审核',
      application: {
        type: '个人',
        name: '许知夏',
        channel: '通过小红书兼职攻略笔记和 3 个校内社群做内容种草，计划引导新用户完成实名和首单发布。',
        monthlyLeads: '50-80 人',
        contact: '许知夏 / 137 0000 2107',
        materials: '提交了账号主页、近 30 天笔记曝光截图、校园群截图和过往活动转化说明。',
        materialsImages: [
          { id: 'pt2107-img1', label: '账号主页截图', note: '小红书账号主页与粉丝规模' },
          { id: 'pt2107-img2', label: '笔记曝光截图', note: '近 30 天兼职内容曝光数据' },
          { id: 'pt2107-img3', label: '校园群截图', note: '用于承接转化的校内社群' }
        ],
        submittedAt: '2026-04-27 09:36'
      },
      commission: { current: '8%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['待审核', '内容渠道'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-27 09:36', desc: '提交个人推广申请和三张图片材料。' }
      ],
      reviewAdvice: '重点核对内容账号真实性、社群承接链路和近 30 天曝光数据。',
      note: '渠道资料相对完整，可审核通过时配置 8%-10% 分佣比例。'
    },
    {
      id: 'PT-2106',
      applicant: '陈泊',
      userId: 'U-23288',
      nickname: '陈泊',
      type: '组织合作',
      city: '武汉',
      status: '待审核',
      channel: '学生社团 + 线下活动',
      createdAt: '2026-04-26 21:10',
      registeredAt: '2026-03-06 08:50',
      creditScore: '89',
      realNameStatus: '已实名',
      authStatus: '学生认证已通过',
      agreementStatus: '待审核',
      application: {
        type: '组织',
        name: '江城校园跑腿互助社',
        channel: '以学生社团和线下活动为主，覆盖 4 个学院群，计划通过活动二维码和社群公告引导注册。',
        monthlyLeads: '70-120 人',
        contact: '陈泊 / 135 0000 2106',
        materials: '提交了社团负责人信息、学院群截图、活动海报和线下活动照片，待确认组织授权真实性。',
        materialsImages: [
          { id: 'pt2106-img1', label: '学院群截图', note: '覆盖学院群和社群人数' },
          { id: 'pt2106-img2', label: '活动海报', note: '线下推广活动物料' },
          { id: 'pt2106-img3', label: '负责人学生证', note: '核验组织负责人身份' }
        ],
        submittedAt: '2026-04-26 21:10'
      },
      commission: { current: '10%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '0', effectiveOrders: '0', settledCommission: '¥0', pendingCommission: '¥0' },
      riskTags: ['待审核', '组织授权待核对'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-26 21:10', desc: '提交组织合作申请、社群截图和线下活动材料。' }
      ],
      reviewAdvice: '重点核对组织授权、负责人身份和线下活动真实性。',
      note: '组织合作资料较完整，审核通过时建议配置 10% 分佣比例。'
    },
    {
      id: 'PT-2088',
      applicant: '周南栀',
      userId: 'U-22517',
      nickname: '周南栀',
      type: '组织合作',
      city: '东莞',
      status: '已通过',
      channel: '校内代理',
      createdAt: '2026-04-24 10:42',
      registeredAt: '2026-01-11 20:16',
      creditScore: '98',
      realNameStatus: '已实名',
      authStatus: '学生认证已通过',
      agreementStatus: '合作中',
      application: {
        type: '组织',
        name: '东莞理工兼职互助站',
        channel: '以校园代理和班级群为主，已覆盖 9 个班级群与 2 个校内兼职群，能持续输出实名注册与首单发布用户。',
        monthlyLeads: '80-100 人',
        contact: '周南栀 / 139 0000 2088',
        materials: '已提交组织介绍、代理名单、承接群截图、活动照片和负责人联系方式，审核已通过。',
        materialsImages: [
          { id: 'pt2088-img1', label: '代理名单截图', note: '包含各校内代理负责范围' },
          { id: 'pt2088-img2', label: '承接群截图', note: '近 7 天群内兼职转化记录' },
          { id: 'pt2088-img3', label: '线下活动照片', note: '校内推广和物料投放' }
        ],
        submittedAt: '2026-04-24 10:42'
      },
      commission: { current: '10%', settlementCycle: '每月 5 日自动生成账单' },
      stats: { invitedUsers: '146', effectiveOrders: '118', settledCommission: '¥5,420', pendingCommission: '¥1,488' },
      riskTags: ['合作中', '上月退款扣回 1 笔', '无处罚'],
      reviewHistory: [
        { title: '申请提交', time: '2026-04-24 10:42', desc: '提交组织合作申请和完整图片材料。' },
        { title: '审核通过', time: '2026-04-24 14:18', desc: '已开通合伙人权限并下发 10% 分佣比例。' }
      ],
      reviewAdvice: '已合作，可重点查看近月退款扣回与分佣结算是否一致。',
      note: '合作稳定，3 月账期因退款扣回与邀请关系存在差异，进入待核查。'
    }
  ],

  init() {
    const path = this.getCurrentPath();
    if (!/^(finance|partner|risk|community|ops|support|analytics|settings|value)\//.test(path)) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    this.pageState = AdminStore.get('extended_page_state', {});
    this.recordState = AdminStore.get('extended_record_state', {});
    this.couponConfigRows = this.normalizeCouponConfigRows(AdminStore.get('extended_coupon_configs', this.couponConfigRows));
    this.rewardRuleRows = this.normalizeRewardRuleRows(AdminStore.get('extended_reward_rules', this.rewardRuleRows));
    this.urgentPinRuleRows = this.normalizeUrgentPinRuleRows(AdminStore.get('extended_urgent_pin_rules', this.urgentPinRuleRows));
    AdminStore.set('extended_coupon_configs', this.couponConfigRows);
    AdminStore.set('extended_reward_rules', this.rewardRuleRows);
    AdminStore.set('extended_urgent_pin_rules', this.urgentPinRuleRows);
    this.uiState = this.uiState || { dialog: null };
    this.render();
    this.bindEvents();
  },

  getCurrentPath() {
    const pathname = window.location.pathname.replace(/\\/g, '/');
    const parts = pathname.split('/admin/').filter(Boolean);
    const current = parts[parts.length - 1] || '';
    return current.replace(/^admin\//, '');
  },

  normalizeCouponConfigRows(rows = []) {
    return rows.map(row => {
      if (row.length >= 10) {
        const couponType = row[2] || '满减';
        return [
          row[0],
          row[1] || '待命名优惠券',
          couponType,
          couponType === '立减' ? '无门槛' : (row[4] || '20 元'),
          row[5] || '全部项目',
          row[6] || '仅任务金额',
          row[7] || '否',
          row[8] || '草稿',
          row[9] || '尚未更新'
        ];
      }
      if (row.length >= 9) {
        const couponType = row[2] || '满减';
        return [
          row[0] || `CP-N${Date.now()}`,
          row[1] || '待命名优惠券',
          couponType,
          couponType === '立减' ? '无门槛' : (row[3] || '20 元'),
          row[4] || '全部项目',
          row[5] || '仅任务金额',
          row[6] || '否',
          row[7] || '草稿',
          row[8] || '尚未更新'
        ];
      }
      return [
        row[0] || `CP-N${Date.now()}`,
        row[1] || '待命名优惠券',
        row[2] || '满减',
        row[3] || '20 元',
        row[4] || '全部项目',
        row[5] || '仅任务金额',
        row[6] || '否',
        row[7] || '草稿',
        row[8] || '尚未更新'
      ];
    });
  },

  normalizeRewardStatus(status = '') {
    const value = status || '草稿';
    if (['启用中', '灰度中', '生效中'].includes(value)) {
      return '生效中';
    }
    if (['待启用', '待生效'].includes(value)) {
      return '待生效';
    }
    if (['停用中', '已结束'].includes(value)) {
      return '手动结束';
    }
    return ['草稿', '待生效', '生效中', '自动结束', '手动结束'].includes(value) ? value : '草稿';
  },

  normalizeRewardRuleRows(rows = []) {
    return rows.map(row => {
      if (row.length >= 9) {
        return [
          row[0],
          row[1] || '待命名奖励规则',
          row[2] || '每笔订单首次转发',
          row[3] || '待配置',
          row[4] || '未设置',
          row[5] || '0',
          row[6] || '未达预警',
          this.normalizeRewardStatus(row[7]),
          row[8] || '尚未更新'
        ];
      }
      if (row.length >= 8) {
        return [
          row[0],
          row[1] || '待命名奖励规则',
          row[2] || '每笔订单首次转发',
          row[3] || '待配置',
          row[4] || '未设置',
          '0',
          row[5] || '未达预警',
          this.normalizeRewardStatus(row[6]),
          row[7] || '尚未更新'
        ];
      }
      return [
        row[0],
        row[1] || '待命名奖励规则',
        row[3] || '待配置',
        row[2] === '优惠券奖励' ? '新人立减券 x1' : '待配置',
        '未设置',
        '0',
        '未达预警',
        this.normalizeRewardStatus(row[4]),
        row[5] || '尚未更新'
      ];
    });
  },

  normalizeUrgentPinStatus(status = '') {
    const value = status || '草稿';
    if (['启用中', '灰度中', '生效中'].includes(value)) {
      return '已启用';
    }
    if (['待启用', '待生效'].includes(value)) {
      return '待启用';
    }
    if (['停用中', '已结束', '自动结束', '手动结束'].includes(value)) {
      return '已停用';
    }
    return ['草稿', '待启用', '已启用', '已停用'].includes(value) ? value : '草稿';
  },

  getDefaultUrgentPinRange(recordId = '') {
    if (recordId === 'UP-198') {
      return '2026-04-01 00:00 至 2026-04-30 23:59';
    }
    if (recordId === 'UP-204') {
      return '2026-06-01 00:00 至 2026-06-15 23:59';
    }
    return '2026-05-08 00:00 至 2026-05-31 23:59';
  },

  normalizeUrgentPinRuleRows(rows = []) {
    return rows.map(row => {
      if (row.length >= 9) {
        return [
          row[0],
          row[1] || '待命名置顶规则',
          row[2] || '5 元',
          row[3] || '10 km',
          row[4] || '1 h',
          row[5] || '10 km · 2 h',
          row[6] || this.getDefaultUrgentPinRange(row[0]),
          this.normalizeUrgentPinStatus(row[7]),
          row[8] || '尚未更新'
        ];
      }

      if (row.length >= 8) {
        return [
          row[0],
          row[1] || '待命名置顶规则',
          row[2] || '5 元',
          row[3] || '10 km',
          row[4] || '1 h',
          row[5] || '10 km · 2 h',
          this.getDefaultUrgentPinRange(row[0]),
          this.normalizeUrgentPinStatus(row[6]),
          row[7] || '尚未更新'
        ];
      }

      const tierText = String(row[2] || '');
      const defaultText = String(row[3] || '10 km · 2 h').replace(/\s*\/\s*/g, ' · ');
      const priceMatch = tierText.match(/=\s*([^\s]+)/);
      const tierParts = tierText.split('=').shift().split('/').map(item => item.trim()).filter(Boolean);
      return [
        row[0],
        row[1] || '待命名置顶规则',
        priceMatch ? priceMatch[1].replace('元', ' 元') : '5 元',
        tierParts[0] || '10 km',
        tierParts[1] || '1 h',
        defaultText || '10 km · 2 h',
        this.getDefaultUrgentPinRange(row[0]),
        this.normalizeUrgentPinStatus(row[5]),
        row[6] || '尚未更新'
      ];
    });
  },

  getStoredRecord(route, recordId) {
    return ((this.recordState[route] || {})[recordId]) || {};
  },

  normalizeStoredStatus(route, status, fallbackStatus = '') {
    const value = status || fallbackStatus || '';
    if (route === 'finance/partner-settlement.html') {
      if (value === '待核查' && fallbackStatus !== '待核查') {
        return fallbackStatus || '待结算';
      }
      if (value === '待确认') {
        return '待结算';
      }
      if (['待打款', '打款中', '争议复核', '异常挂起'].includes(value)) {
        return '待核查';
      }
      if (value === '已完成') {
        return '已结算';
      }
    }
    if (route === 'partner/list.html' && value === '资料补充') {
      return '待审核';
    }
    if (route === 'community/announcements.html') {
      if (value === '待发布' || value === '待推送') {
        return '待开始';
      }
      if (value === '已发送') {
        return '自动结束';
      }
      if (value === '已结束') {
        return '手动结束';
      }
    }
    if (route === 'community/ads.html' && value === '已结束') {
      return '手动结束';
    }
    if (route === 'ops/urgent-pin.html') {
      return this.normalizeUrgentPinStatus(value);
    }
    if (route === 'support/feedback.html') {
      if (value === '已处理' || value === '已关闭') {
        return '已完成';
      }
    }
    return value;
  },

  getEffectiveStatus(route, recordId, fallbackStatus) {
    const storedStatus = this.getStoredRecord(route, recordId).status;
    return this.normalizeStoredStatus(route, storedStatus, fallbackStatus);
  },

  getEffectiveNote(route, recordId, fallbackNote = '') {
    return this.getStoredRecord(route, recordId).note || fallbackNote;
  },

  getEffectiveUpdatedAt(route, recordId) {
    return this.getStoredRecord(route, recordId).updatedAt || '尚未处理';
  },

  getRecordValue(route, recordId, key, fallback = '') {
    const record = this.getStoredRecord(route, recordId);
    if (route === 'ops/coupons.html' && key === 'threshold' && record.couponType === '立减') {
      return '无门槛';
    }
    return record[key] !== undefined ? record[key] : fallback;
  },

  formatSettlementAmount(value, fallback = '') {
    const raw = String(value || fallback || '').trim();
    if (!raw) {
      return fallback || '';
    }
    return raw.startsWith('¥') ? raw : `¥${raw}`;
  },

  getActionDataset(action = {}) {
    const mappings = [
      ['kind', 'generic-action'],
      ['message', 'message'],
      ['recordRoute', 'record-route'],
      ['recordId', 'record-id'],
      ['nextStatus', 'next-status'],
      ['dialogTitle', 'dialog-title'],
      ['detailKey', 'detail-key'],
      ['reviewAction', 'review-action'],
      ['reportAction', 'report-action'],
      ['dueAmount', 'due-amount'],
      ['actualAmount', 'actual-amount'],
      ['settlementStatus', 'settlement-status']
    ];
    return mappings
      .filter(([key]) => action[key] !== undefined && action[key] !== null && action[key] !== '')
      .map(([key, attr]) => `data-${attr}="${AdminCore.escapeHTML(String(action[key]))}"`)
      .join(' ');
  },

  renderActionButton(action, className = 'btn btn-sm') {
    if (action.route) {
      return `<button class="${className}${action.primary ? ' btn-primary' : ''}" type="button" data-route="${action.route}">${action.label}</button>`;
    }
    return `<button class="${className}${action.primary ? ' btn-primary' : ''}" type="button" ${this.getActionDataset(action)}>${action.label}</button>`;
  },

  getCommunityFeedPublisher(row = []) {
    const authorParts = String(row[1] || '').split('/').map(item => item.trim());
    return {
      nickname: authorParts[0] || '',
      userId: authorParts[1] || ''
    };
  },

  getCurrentOperator() {
    return localStorage.getItem('admin_current_operator') || '超级管理员';
  },

  getUserSeedItems() {
    return [
      { id: 'U-12031', nickname: '沈枝意', phoneMasked: '138****5678', fullPhone: '13856785678', registerTime: '2025-11-08 14:22', lastActive: '今天 10:12', realName: '已实名', degree: '本科在读', skill: '陪诊 / 母婴护理', credit: 56, accountStatus: 'limited', accountStatusLabel: '受限', ordersCount: 18, orderAmount: '¥4,820', partner: '否', highRisk: '近 30 天 2 次纠纷，1 次取消责任', authSummary: '实名 + 学历 + 技能', canBulkBan: false, assets: '钱包余额 ¥218', notes: '近期主要争议集中在陪诊任务完成凭证不足。' },
      { id: 'U-11816', nickname: '林见川', phoneMasked: '139****4421', fullPhone: '13988884421', registerTime: '2025-10-19 11:07', lastActive: '今天 09:36', realName: '已实名', degree: '未提交', skill: '无技能认证', credit: 88, accountStatus: 'active', accountStatusLabel: '正常', ordersCount: 42, orderAmount: '¥9,260', partner: '否', highRisk: '无', authSummary: '实名', canBulkBan: true, assets: '钱包余额 ¥98', notes: '履约表现稳定。' },
      { id: 'U-10944', nickname: '周南栀', phoneMasked: '137****9162', fullPhone: '13755669162', registerTime: '2025-08-03 09:55', lastActive: '昨天 20:18', realName: '已实名', degree: '已认证', skill: '摄影 / 修图', credit: 42, accountStatus: 'banned', accountStatusLabel: '封禁中', ordersCount: 27, orderAmount: '¥6,340', partner: '否', highRisk: '多次跳单风险，主体级关注', authSummary: '实名 + 学历 + 技能', canBulkBan: true, assets: '钱包余额 ¥0', notes: '当前封禁复核处理中。' },
      { id: 'U-10771', nickname: '季明川', phoneMasked: '136****3352', fullPhone: '13666663352', registerTime: '2025-07-21 16:42', lastActive: '今天 07:58', realName: '已实名', degree: '已认证', skill: '英语陪练', credit: 79, accountStatus: 'active', accountStatusLabel: '正常', ordersCount: 31, orderAmount: '¥5,180', partner: '否', highRisk: '无', authSummary: '实名 + 学历 + 技能', canBulkBan: true, assets: '钱包余额 ¥126', notes: '技能类订单好评率高。' },
      { id: 'U-10382', nickname: '陈知栀', phoneMasked: '135****2281', fullPhone: '13570002281', registerTime: '2025-06-14 12:08', lastActive: '今天 11:03', realName: '已实名', degree: '未提交', skill: '无技能认证', credit: 63, accountStatus: 'limited', accountStatusLabel: '受限观察', ordersCount: 9, orderAmount: '¥1,880', partner: '否', highRisk: '差评集中，需观察', authSummary: '实名', canBulkBan: false, assets: '钱包余额 ¥45', notes: '近期有 1 单高优先级投诉。' },
      { id: 'U-9981', nickname: '顾温澜', phoneMasked: '134****7714', fullPhone: '13456787714', registerTime: '2025-04-09 18:36', lastActive: '2 天前 13:42', realName: '已实名', degree: '本科在读', skill: '活动协助', credit: 91, accountStatus: 'active', accountStatusLabel: '正常', ordersCount: 55, orderAmount: '¥10,440', partner: '是', highRisk: '无', authSummary: '实名 + 学历 + 技能', canBulkBan: true, assets: '钱包余额 ¥366', notes: '合伙人候选，履约历史稳定。' }
    ];
  },

  getCommunityFeedUser(row = []) {
    const publisher = this.getCommunityFeedPublisher(row);
    const creditMatch = String(row[1] || '').match(/信用分\s*(\d+)/);
    const credit = creditMatch ? Number(creditMatch[1]) : 80;
    return {
      id: publisher.userId || `U-FEED-${row[0] || Date.now()}`,
      nickname: publisher.nickname || '动态发布者',
      phoneMasked: '-',
      fullPhone: '-',
      registerTime: '待核验',
      lastActive: row[3] || '刚刚',
      realName: '待核验',
      degree: '待核验',
      skill: '动态发布者',
      credit,
      accountStatus: row[2] === '封禁' ? 'banned' : (row[2] === '受限' ? 'limited' : (row[2] === '注销' ? 'cancelled' : 'active')),
      accountStatusLabel: row[2] || '正常',
      ordersCount: 0,
      orderAmount: '¥0',
      partner: '否',
      highRisk: this.getCommunityFeedViolationReason(row),
      authSummary: '待核验',
      canBulkBan: true,
      assets: '钱包余额待核验',
      notes: `由动态审核 ${row[0]} 触发账号处置。`
    };
  },

  createFeedBanCase(user, options = {}) {
    const banType = options.banType || 'temporary';
    const isPermanent = banType === 'permanent';
    const reason = options.reason || '动态严重违规';
    const now = new Date().toLocaleString('zh-CN');
    const operator = this.getCurrentOperator();
    return {
      id: `BAN-FEED-${Date.now()}-${user.id.replace(/\D/g, '').slice(-4)}`,
      userId: user.id,
      nickname: user.nickname,
      reason,
      banType,
      banTypeLabel: isPermanent ? '永久封禁' : '临时封禁',
      processor: operator,
      duration: isPermanent ? '永久封禁' : '7 天临时封禁',
      status: 'banned',
      statusLabel: '封禁中',
      submittedAt: now,
      expireAt: isPermanent ? '永久' : '7 天后自动解封',
      risk: options.risk || user.highRisk || '动态内容违规',
      internalNote: options.internalNote || `动态审核封禁：${reason}`,
      punishmentHistory: [`${now} 后台人工封禁`],
      riskEvents: [options.riskEvent || '动态审核严重违规'],
      relatedRisks: [user.assets || '资产待核验', `关联动态 ${options.contentId || '待补充'}`],
      appealNote: '暂未提交申诉',
      appealMaterials: [],
      relatedOrder: options.contentId || '动态审核',
      actionHistory: [`${now} ${operator}：动态审核封禁发布者：${reason}`]
    };
  },

  getCommunityFeedViolationReason(row = []) {
    const aiResult = String(row[5] || '');
    const reportFlag = String(row[6] || '');
    if (reportFlag.includes('风险')) return '举报风险';
    if (/导流/.test(aiResult)) return '导流风险';
    if (/骚扰|暗示/.test(aiResult)) return '骚扰暗示';
    if (/低俗/.test(aiResult)) return '低俗内容';
    if (/虚假/.test(aiResult)) return '虚假内容';
    if (/未命中风险/.test(aiResult)) return '未命中风险';
    return '其他风险';
  },

  isCommunityFeedRiskRow(row = []) {
    const status = row[7] || '';
    const reportFlag = String(row[6] || '');
    const riskReason = this.getCommunityFeedViolationReason(row);
    return status !== '已上架' || reportFlag.includes('风险') || riskReason !== '未命中风险';
  },

  openDialog(dialog) {
    this.uiState.dialog = dialog;
    this.render();
  },

  closeDialog() {
    this.uiState.dialog = null;
    this.render();
  },

  openFeedbackProcessDialog(recordRoute, recordId, nextStatus, message) {
    const config = this.getPageConfig();
    const row = (config.rows || []).find(item => item[0] === recordId) || [];
    this.openDialog({
      type: 'feedback-process',
      recordRoute,
      recordId,
      nextStatus,
      message,
      feedbackType: row[1] || '',
      submitter: row[2] || ''
    });
  },

  updateRecordState(route, recordId, patch) {
    this.recordState[route] = this.recordState[route] || {};
    const current = this.recordState[route][recordId] || {};
    this.recordState[route][recordId] = {
      ...current,
      ...patch,
      updatedAt: new Date().toLocaleString('zh-CN')
    };
    this.syncLinkedState(route, recordId, patch);
    AdminStore.set('extended_record_state', this.recordState);
  },

  setLinkedRecordState(route, recordId, patch) {
    this.recordState[route] = this.recordState[route] || {};
    const current = this.recordState[route][recordId] || {};
    this.recordState[route][recordId] = {
      ...current,
      ...patch,
      updatedAt: new Date().toLocaleString('zh-CN')
    };
  },

  syncConfigRuleRow(route, recordId) {
    const record = this.getStoredRecord(route, recordId);
    if (route === 'ops/coupons.html') {
      const row = this.couponConfigRows.find(item => item[0] === recordId);
      if (!row) {
        return;
      }
      row[1] = record.couponName || row[1];
      row[2] = record.couponType || row[2];
      row[3] = row[2] === '立减' ? '无门槛' : (record.threshold ? `${record.threshold} 元` : row[3]);
      row[4] = record.usageScope || row[4];
      row[5] = record.deductionScope || row[5];
      row[6] = record.stackable || row[6];
      row[7] = record.status || row[7];
      row[8] = record.updatedAt || row[8];
      AdminStore.set('extended_coupon_configs', this.couponConfigRows);
    }

    if (route === 'ops/rewards.html') {
      const row = this.rewardRuleRows.find(item => item[0] === recordId);
      if (!row) {
        return;
      }
      row[1] = record.ruleName || row[1];
      row[2] = record.triggerCondition || row[2];
      row[3] = this.formatRewardCouponBundle(record, row[3]);
      row[4] = this.formatRecordTimeRange(record, 'activityRange') || row[4];
      row[5] = record.issuedCount || row[5] || '0';
      row[6] = this.getRewardWarningStatus(record, row);
      row[7] = this.normalizeRewardStatus(record.status || row[7]);
      row[8] = record.updatedAt || row[8];
      AdminStore.set('extended_reward_rules', this.rewardRuleRows);
    }

    if (route === 'ops/urgent-pin.html') {
      const row = this.urgentPinRuleRows.find(item => item[0] === recordId);
      if (!row) {
        return;
      }
      row[1] = record.ruleName || row[1];
      row[2] = record.basePrice || row[2];
      row[3] = record.rangeStep || row[3];
      row[4] = record.durationStep || row[4];
      row[5] = record.defaultValue || row[5];
      row[6] = this.formatRecordTimeRange(record, 'displayRange') || row[6];
      row[7] = this.normalizeUrgentPinStatus(record.status || row[7]);
      row[8] = record.updatedAt || row[8];
      AdminStore.set('extended_urgent_pin_rules', this.urgentPinRuleRows);
    }

    if (route === 'community/announcements.html') {
      const rows = AdminStore.get('extended_created_announcement_rows', []);
      const row = rows.find(item => item[0] === recordId);
      if (!row) {
        return;
      }
      const range = this.formatRecordTimeRange(record, 'displayRange') || row[5];
      const targetGroup = this.formatAnnouncementTargetGroup(record) || row[3];
      row[1] = record.announcementTitle || row[1];
      row[3] = targetGroup;
      row[4] = record.pushChannels || row[4];
      row[5] = range;
      row[6] = record.status || row[6];
      AdminStore.set('extended_created_announcement_rows', rows);
    }

    if (route === 'community/ads.html') {
      const rows = AdminStore.get('extended_created_ad_rows', []);
      const row = rows.find(item => item[0] === recordId);
      if (!row) {
        return;
      }
      const range = this.formatRecordTimeRange(record, 'displayRange') || row[4];
      row[1] = record.adTitle || row[1];
      row[2] = record.adPosition || row[2];
      row[3] = record.jumpType || row[3];
      row[4] = range;
      row[5] = record.sortOrder || row[5];
      row[6] = record.status || row[6];
      AdminStore.set('extended_created_ad_rows', rows);
    }
  },

  formatRecordTimeRange(record, key) {
    const start = this.formatDateTimeText(record[`${key}Start`]);
    const end = this.formatDateTimeText(record[`${key}End`]);
    if (start && end) {
      return `${start} 至 ${end}`;
    }
    return record[key] || '';
  },

  formatDateTimeText(value) {
    if (!value) {
      return '';
    }
    return String(value).replace('T', ' ');
  },

  formatAnnouncementTargetGroup(record) {
    if (record.targetGroup === '特定城市') {
      return record.cityTargets ? `特定城市：${record.cityTargets}` : '特定城市';
    }
    if (record.targetGroup === '特定认证状态') {
      return record.authTargets ? `特定认证状态：${record.authTargets}` : '特定认证状态';
    }
    return record.targetGroup || '';
  },

  formatCouponBenefit(record = {}, row = []) {
    const couponType = record.couponType || row[2] || '满减';
    if (couponType === '折扣') {
      const discountRate = record.discountRate || '9';
      return `${discountRate} 折`;
    }
    const amount = record.discountAmount || '2';
    if (couponType === '立减') {
      return `立减${amount}`;
    }
    const threshold = record.threshold || String(row[3] || '').replace(/[^\d.]/g, '') || '20';
    return `满${threshold}减${amount}`;
  },

  getCouponOptionItems() {
    return this.couponConfigRows
      .filter(row => row[7] !== '已停用')
      .map(row => ({ id: row[0], name: row[1], benefit: this.formatCouponBenefit(this.getStoredRecord('ops/coupons.html', row[0]), row) }));
  },

  getManualCouponIssues(couponId = '') {
    return AdminStore.get('extended_manual_coupon_issues', [])
      .filter(item => item.couponId === couponId)
      .map(item => [
        item.nickname || '手动补偿用户',
        item.phone || '-',
        item.couponName || '-',
        item.couponId || '-',
        '/',
        item.status || '未使用',
        item.orderId || '-'
      ]);
  },

  normalizeIssueDetailRows(rows = []) {
    return rows.map(row => {
      const nextRow = row.slice(0, 7);
      const status = nextRow[5] || '';
      return [
        ...nextRow,
        status === '未使用'
          ? '<button class="btn btn-sm" type="button" data-generic-action="recover-reward-coupon">回收优惠券</button>'
          : '-'
      ];
    });
  },

  buildCouponIssueDetails(couponId, title, rows = []) {
    const mergedRows = [...rows, ...this.getManualCouponIssues(couponId)];
    return {
      title,
      columns: ['用户昵称', '用户手机号', '优惠券名称', '优惠券 ID', '关联奖励规则', '使用状态', '关联订单 ID', '操作'],
      rows: this.normalizeIssueDetailRows(mergedRows)
    };
  },

  normalizeRewardCouponItems(items = []) {
    return items
      .slice(0, 10)
      .map(item => ({
        couponId: String(item?.couponId || '').trim(),
        quantity: String(item?.quantity || '1').trim() || '1'
      }));
  },

  getRewardCouponItems(record = {}, fallback = '') {
    if (record.rewardCouponItems) {
      try {
        const parsed = JSON.parse(record.rewardCouponItems);
        if (Array.isArray(parsed)) {
          return this.normalizeRewardCouponItems(parsed);
        }
      } catch (error) {
        // Ignore invalid local draft payload and fall back to legacy fields.
      }
    }

    const selectedIds = this.parseRewardCouponIds(record.rewardCouponIds || fallback);
    if (!selectedIds.length) {
      return [];
    }
    return this.normalizeRewardCouponItems(selectedIds.map(couponId => ({
      couponId,
      quantity: record[`couponQty_${couponId}`] || this.getRewardCouponQuantityFromText(fallback, couponId) || '1'
    })));
  },

  buildRewardCouponRecordPatch(items = []) {
    const normalizedItems = this.normalizeRewardCouponItems(items);
    const selectedItems = normalizedItems.filter(item => item.couponId);
    const patch = {
      rewardCouponItems: JSON.stringify(normalizedItems),
      rewardCouponIds: selectedItems.map(item => item.couponId).join(' / ')
    };

    selectedItems.forEach(item => {
      patch[`couponQty_${item.couponId}`] = item.quantity || '1';
    });

    return patch;
  },

  syncRewardCouponItemsFromDom(route, recordId) {
    const selector = `[data-reward-coupon-item][data-record-field-route="${route}"][data-record-id="${recordId}"]`;
    const items = Array.from(this.root.querySelectorAll(selector)).map(row => ({
      couponId: row.querySelector('[data-reward-coupon-select]')?.value || '',
      quantity: row.querySelector('[data-reward-coupon-qty]')?.value || '1'
    }));
    this.updateRecordState(route, recordId, this.buildRewardCouponRecordPatch(items));
  },

  parseRewardCouponIds(value = '') {
    return String(value || '')
      .split(/[/,，、]/)
      .map(item => item.trim())
      .filter(Boolean)
      .map(item => item.split(/\s*x\s*/i)[0].trim())
      .map(label => {
        const matched = this.couponConfigRows.find(row => row[0] === label || row[1] === label);
        return matched ? matched[0] : label;
      });
  },

  formatRewardCouponBundle(record = {}, fallback = '') {
    const selectedItems = this.getRewardCouponItems(record, fallback).filter(item => item.couponId);
    if (!selectedItems.length) {
      return '待配置';
    }
    return selectedItems.map(item => {
      const coupon = this.couponConfigRows.find(row => row[0] === item.couponId);
      return `${coupon ? coupon[1] : item.couponId} x${item.quantity || '1'}`;
    }).join(' / ');
  },

  getRewardCouponQuantityFromText(text = '', couponId = '') {
    const coupon = this.couponConfigRows.find(row => row[0] === couponId);
    const names = [couponId, coupon?.[1]].filter(Boolean);
    const matched = String(text || '')
      .split('/')
      .map(item => item.trim())
      .find(item => names.some(name => item.startsWith(name)));
    const match = matched ? matched.match(/x\s*(\d+)/i) : null;
    return match ? match[1] : '';
  },

  getRewardWarningStatus(record = {}, row = []) {
    if (record.warningStatus) {
      return record.warningStatus;
    }
    const issued = Number.parseInt(record.issuedCount || row.issuedCount || '0', 10);
    const threshold = Number.parseInt(record.warningThreshold || '0', 10);
    if (threshold && issued >= threshold) {
      return '已达预警';
    }
    return row[6] || row[5] || '未达预警';
  },

  validateTimedConfig(route, recordId) {
    if (!['community/announcements.html', 'community/ads.html', 'ops/urgent-pin.html', 'ops/rewards.html'].includes(route)) {
      return true;
    }
    const config = this.getPageConfig();
    const row = (config?.rows || []).find(item => item[0] === recordId);
    const rangeIndexMap = {
      'community/announcements.html': 5,
      'community/ads.html': 4,
      'ops/urgent-pin.html': 6,
      'ops/rewards.html': 4
    };
    const rangeKey = route === 'ops/rewards.html' ? 'activityRange' : 'displayRange';
    const fallbackRange = row
      ? row[rangeIndexMap[route]]
      : '';
    const record = this.getStoredRecord(route, recordId);
    const parsed = this.parseDisplayRange(record[rangeKey] || fallbackRange);
    const endValue = record[`${rangeKey}End`] || parsed.end;
    if (!endValue) {
      AdminUI.showMessage('请设置完整的有效时间范围，结束时间需大于当前时间 5 分钟', 'error');
      return false;
    }
    const endTime = new Date(endValue).getTime();
    const minEndTime = Date.now() + 5 * 60 * 1000;
    if (!Number.isFinite(endTime) || endTime <= minEndTime) {
      AdminUI.showMessage('有效结束时间需大于当前时间 5 分钟', 'error');
      return false;
    }
    return true;
  },

  getAdRowPosition(row = []) {
    return String(row[2] || '');
  },

  getAdPositionLabel(row = []) {
    return this.getAdRowPosition(row).includes('弹窗') ? '弹窗' : '首页轮播 Banner';
  },

  getAdRowRange(row = []) {
    const record = this.getStoredRecord('community/ads.html', row[0]);
    const rangeText = this.formatRecordTimeRange(record, 'displayRange') || row[4] || '';
    return this.parseDisplayRange(rangeText);
  },

  getUrgentPinRowRange(row = []) {
    const record = this.getStoredRecord('ops/urgent-pin.html', row[0]);
    const rangeText = this.formatRecordTimeRange(record, 'displayRange') || row[6] || '';
    return this.parseDisplayRange(rangeText);
  },

  rangesOverlap(left, right) {
    const leftStart = new Date(left.start || 0).getTime();
    const leftEnd = new Date(left.end || 8640000000000000).getTime();
    const rightStart = new Date(right.start || 0).getTime();
    const rightEnd = new Date(right.end || 8640000000000000).getTime();
    if (![leftStart, leftEnd, rightStart, rightEnd].every(Number.isFinite)) {
      return true;
    }
    return leftStart <= rightEnd && rightStart <= leftEnd;
  },

  validateAdActivationCapacity(route, recordId, nextStatus) {
    if (route !== 'community/ads.html' || !['待生效', '生效中'].includes(nextStatus)) {
      return true;
    }
    const config = this.getPageConfig();
    const rows = config?.rows || [];
    const row = rows.find(item => item[0] === recordId);
    if (!row) {
      return true;
    }
    const position = this.getAdPositionLabel(row);
    const currentRange = this.getAdRowRange(row);
    const occupiedPositionCount = rows.filter(item => {
      if (item[0] === recordId || this.getAdPositionLabel(item) !== position) {
        return false;
      }
      return ['生效中', '待生效'].includes(this.getEffectiveStatus(config.listPath, item[0], item[config.statusIndex]))
        && this.rangesOverlap(currentRange, this.getAdRowRange(item));
    }).length;
    if (occupiedPositionCount >= 3) {
      AdminUI.showMessage(`${position} 同一时间最多 3 条广告，请先结束冲突广告或调整排期`, 'warning');
      return false;
    }
    return true;
  },

  validateUrgentPinRangeOverlap(route, recordId, nextStatus) {
    if (route !== 'ops/urgent-pin.html') {
      return true;
    }
    const nextEffectiveStatus = this.normalizeUrgentPinStatus(nextStatus || this.getEffectiveStatus(route, recordId, '草稿'));
    const shouldCheck = ['草稿', '待启用', '已启用'].includes(nextEffectiveStatus);
    if (!shouldCheck) {
      return true;
    }
    const config = this.getPageConfig();
    const rows = config?.rows || [];
    const row = rows.find(item => item[0] === recordId);
    if (!row) {
      return true;
    }
    const currentRange = this.getUrgentPinRowRange(row);
    const overlappingRow = rows.find(item => {
      if (item[0] === recordId) {
        return false;
      }
      const status = this.getEffectiveStatus(route, item[0], item[7]);
      return ['待启用', '已启用'].includes(status) && this.rangesOverlap(currentRange, this.getUrgentPinRowRange(item));
    });
    if (overlappingRow) {
      AdminUI.showMessage(`有效时间与 ${overlappingRow[1]} 重叠，请调整时间范围后再保存或启用`, 'warning');
      return false;
    }
    return true;
  },

  syncLinkedState(route, recordId, patch) {
    const status = patch.status;
    if (!status) {
      return;
    }

    if (route === 'community/feed-review.html') {
      const reportMap = {
        'CT-1205': 'RP-6018'
      };
      const reportId = reportMap[recordId];
      if (reportId && status === '已下架') {
        this.setLinkedRecordState('risk/reports.html', reportId, { status: '已处理' });
      }
      if (reportId && status === '已上架') {
        this.setLinkedRecordState('risk/reports.html', reportId, { status: '已忽略' });
      }
    }

    if (route === 'risk/reports.html' && recordId === 'RP-6018') {
      if (status === '已处理') {
        this.setLinkedRecordState('community/feed-review.html', 'CT-1205', { status: '已下架' });
      }
      if (status === '已忽略') {
        this.setLinkedRecordState('community/feed-review.html', 'CT-1205', { status: '已上架' });
      }
    }

    if (route === 'finance/withdrawals.html' && recordId === 'WD-8994') {
      if (status === '已完成' || status === '已拒绝') {
        this.setLinkedRecordState('support/feedback.html', 'FB-5208', { status: '已完成' });
      }
    }

    if (route === 'support/feedback.html' && recordId === 'FB-5208') {
      if (status === '已完成') {
        this.setLinkedRecordState('finance/withdrawals.html', 'WD-8994', { status: '已完成' });
      }
    }
  },

  getPageConfig() {
    const riskReportColumns = ['举报单', '对象', '举报类型', '命中内容', '状态', '时间'];
    const riskReportRows = [
      ['RP-6018', '动态 CT-1205', '内容举报', '举报人数 5（风险）', '待审核', '今天 11:46'],
      ['RP-6012', '用户 U-10382', '骚扰投诉', '聊天摘录 5 条', '处理中', '今天 09:44'],
      ['RP-5998', '任务 TK-77680', '线下交易', '举报人 2 位', '已处理', '昨天 16:05']
    ];

    const feedColumns = ['内容ID', '作者', '发布时间', '类型', 'AI 审核', '举报风险', '状态'];
    const feedRows = [
      ['CT-1208', '许知夏', '今天 12:08', '图文', 'AI 自动通过', '0', '已上架'],
      ['CT-1207', '梁知白', '今天 11:56', '视频', '导流风险 92%', '/', '待人工裁定'],
      ['CT-1205', '顾温澜', '今天 11:30', '视频', 'AI 自动通过', '5（风险）', '已上架']
    ];

    const announcementColumns = ['公告ID', '标题', '公告类型', '目标用户群', '渠道', '发布时间', '状态'];
    const announcementRows = [
      ['AN-300', '开学季任务安全提示', '全局公告', '全部用户', '订阅消息 / 系统消息', '今天 12:00', '推送中'],
      ['AN-301', '五一期间客服响应说明', '定向推送', '全部用户', '订阅消息 / 短信 / 系统消息', '今天 18:00', '待开始'],
      ['AN-293', '新手接单规则更新', '全局公告', '服务者', '消息页 / 横幅', '前天 16:20', '手动结束']
    ];

    const insuranceProductColumns = ['产品ID', '产品名称', '适用类目', '费率', '状态', '更新时间'];
    const insuranceProductRows = [
      ['IP-001', '基础意外险', '体能 / 生活 / 陪伴', '¥2-5', '启用中', '今天 09:18'],
      ['IP-007', '活动险', '活动协助类', '¥5-8', '启用中', '昨天 17:42'],
      ['IP-011', '高风险临时险', '高风险任务', '¥12+', '灰度中', '前天 15:30']
    ];

    const couponColumns = ['优惠券ID', '优惠券名称', '优惠类型', '使用门槛', '使用范围', '抵扣范围', '是否可叠加', '状态', '更新时间'];
    const couponRows = this.couponConfigRows;
    const couponDetails = {
      'CP-001': {
        couponId: 'CP-001',
        couponName: '新人立减券',
        couponType: '立减',
        discountAmount: '2',
        threshold: '无门槛',
        usageScope: '全部项目',
        deductionScope: '仅任务金额',
        stackable: '否',
        issueDetails: this.buildCouponIssueDetails('CP-001', '新人立减券 - 发放明细', [
          ['许知夏', '137****8812', '新人立减券', 'CP-001', '新用户注册奖励', '未使用', '-'],
          ['夏先生', '135****6677', '新人立减券', 'CP-001', '有效拉新奖励', '已使用', 'OD-240305-11', '-'],
          ['梁知白', '188****1208', '新人立减券', 'CP-001', '有效拉新奖励', '已回收', '-']
        ])
      },
      'CP-002': {
        couponId: 'CP-002',
        couponName: '首单转发券',
        couponType: '满减',
        discountAmount: '5',
        threshold: '30',
        usageScope: '生活服务 / 活动协助',
        deductionScope: '仅任务金额',
        stackable: '否',
        issueDetails: this.buildCouponIssueDetails('CP-002', '首单转发券 - 发放明细', [
          ['陈知栀', '138****5678', '首单转发券', 'CP-002', '订单首次转发奖励', '未使用', 'OD-240317-19'],
          ['林见川', '139****4421', '首单转发券', 'CP-002', '订单首次转发奖励', '已使用', 'OD-240321-08', '-'],
          ['顾温澜', '136****2094', '首单转发券', 'CP-002', '订单首次转发奖励', '已过期', '-', '-']
        ])
      },
      'CP-003': {
        couponId: 'CP-003',
        couponName: '校园任务券',
        couponType: '折扣',
        discountRate: '9',
        threshold: '50',
        usageScope: '校园推广',
        deductionScope: '仅任务金额',
        stackable: '是',
        issueDetails: this.buildCouponIssueDetails('CP-003', '校园任务券 - 发放明细', [
          ['许知夏', '137****8812', '校园任务券', 'CP-003', '新用户注册奖励', '未使用', '-']
        ])
      }
    };

    const rewardColumns = ['规则ID', '规则名称', '触发条件', '关联优惠券及张数', '活动时间', '已发放优惠券数量', '是否达到预警值', '状态', '更新时间'];
    const rewardRows = this.rewardRuleRows;
    const rewardDetails = {
      'RW-101': {
        ruleId: 'RW-101',
        ruleName: '订单首次转发奖励',
        rewardCouponIds: 'CP-002',
        'couponQty_CP-002': '1',
        triggerCondition: '每笔订单首次转发',
        activityRange: '2026-05-08 00:00 至 2026-06-08 23:59',
        dailyIssueLimit: '500',
        warningThreshold: '8000',
        issuedCount: '3200',
        userDailyLimit: '1',
        warningStatus: '未达预警',
        issueDetails: {
          title: '订单首次转发奖励 - 发放明细',
          columns: ['用户昵称', '用户手机号', '优惠券名称', '优惠券 ID', '关联奖励规则', '使用状态', '关联订单 ID', '操作'],
          rows: this.normalizeIssueDetailRows([
            ['陈知栀', '138****5678', '首单转发券', 'CP-002', '订单首次转发奖励', '未使用', 'OD-240317-19'],
            ['林见川', '139****4421', '首单转发券', 'CP-002', '订单首次转发奖励', '已使用', 'OD-240321-08', '-'],
            ['顾温澜', '136****2094', '首单转发券', 'CP-002', '订单首次转发奖励', '已过期', '-', '-']
          ])
        }
      },
      'RW-102': {
        ruleId: 'RW-102',
        ruleName: '新用户注册奖励',
        rewardCouponIds: 'CP-001 / CP-003',
        'couponQty_CP-001': '1',
        'couponQty_CP-003': '1',
        triggerCondition: '新用户注册',
        activityRange: '2026-05-10 00:00 至 2026-06-30 23:59',
        dailyIssueLimit: '300',
        warningThreshold: '2000',
        issuedCount: '2100',
        userDailyLimit: '1',
        warningStatus: '已达预警',
        issueDetails: {
          title: '新用户注册奖励 - 发放明细',
          columns: ['用户昵称', '用户手机号', '优惠券名称', '优惠券 ID', '关联奖励规则', '使用状态', '关联订单 ID', '操作'],
          rows: this.normalizeIssueDetailRows([
            ['许知夏', '137****8812', '新人立减券', 'CP-001', '新用户注册奖励', '未使用', '-'],
            ['许知夏', '137****8812', '校园任务券', 'CP-003', '新用户注册奖励', '未使用', '-']
          ])
        }
      },
      'RW-093': {
        ruleId: 'RW-093',
        ruleName: '有效拉新奖励',
        rewardCouponIds: 'CP-001',
        'couponQty_CP-001': '2',
        triggerCondition: '有效拉新一名新用户',
        activityRange: '2026-04-01 00:00 至 2026-04-30 23:59',
        dailyIssueLimit: '200',
        warningThreshold: '5000',
        issuedCount: '1200',
        userDailyLimit: '3',
        warningStatus: '未达预警',
        issueDetails: {
          title: '有效拉新奖励 - 发放明细',
          columns: ['用户昵称', '用户手机号', '优惠券名称', '优惠券 ID', '关联奖励规则', '使用状态', '关联订单 ID', '操作'],
          rows: this.normalizeIssueDetailRows([
            ['夏先生', '135****6677', '新人立减券', 'CP-001', '有效拉新奖励', '已使用', 'OD-240305-11', '-'],
            ['梁知白', '188****1208', '新人立减券', 'CP-001', '有效拉新奖励', '已回收', '-']
          ])
        }
      }
    };

    const urgentPinColumns = ['规则ID', '规则名称', '置顶基础单价', '范围单次增量', '时长单次增量', '默认值', '有效时间范围', '状态', '更新时间'];
    const urgentPinRows = this.urgentPinRuleRows;
    const urgentPinPricingFields = [
      { key: 'basePrice', label: '置顶基础单价（元/增量单位）', placeholder: '如：5 元' },
      { key: 'rangeStart', label: '范围起始值（km）', placeholder: '如：10 km' },
      { key: 'rangeStep', label: '范围单次增量（km）', placeholder: '如：10 km' },
      { key: 'durationStep', label: '时长单次增量（h）', placeholder: '如：1 h' },
      { key: 'defaultValue', label: '默认值（km/h）', placeholder: '如：10 km · 2 h' }
    ];
    const urgentPinDetails = {
      'UP-201': {
        ruleId: 'UP-201',
        ruleName: '基础置顶规则',
        ruleDescription: '发布者开启急单置顶时默认使用的计费规则。',
        basePrice: '5 元',
        rangeStart: '10 km',
        rangeStep: '10 km',
        durationStep: '1 h',
        defaultValue: '10 km · 2 h',
        displayRange: '2026-05-08 00:00 至 2026-05-31 23:59'
      },
      'UP-204': {
        ruleId: 'UP-204',
        ruleName: '高峰期备用规则',
        ruleDescription: '节假日或高需求城市可先保存为草稿，确认后再启用。',
        basePrice: '8 元',
        rangeStart: '10 km',
        rangeStep: '10 km',
        durationStep: '1 h',
        defaultValue: '10 km · 2 h',
        displayRange: '2026-06-01 00:00 至 2026-06-15 23:59'
      },
      'UP-198': {
        ruleId: 'UP-198',
        ruleName: '旧版置顶规则',
        ruleDescription: '历史置顶规则已停用，仅保留配置查看和重新启用入口。',
        basePrice: '5 元',
        rangeStart: '5 km',
        rangeStep: '5 km',
        durationStep: '2 h',
        defaultValue: '5 km · 2 h',
        displayRange: '2026-04-01 00:00 至 2026-04-30 23:59'
      }
    };

    const feedbackColumns = ['反馈单ID', '反馈类型', '提交用户', '当前状态', '处理人', '创建时间'];
    const feedbackRows = [
      ['FB-5218', '订单问题', '林清越 / U-1197', '待处理', '未分配', '今天 12:24'],
      ['FB-5217', '认证问题', '许知夏 / U-1180', '待处理', '未分配', '今天 12:08'],
      ['FB-5216', '聊天问题', '梁知白 / U-1024', '待处理', '未分配', '今天 11:46'],
      ['FB-5211', '订单问题', '沈枝意 / U-12031', '待处理', '未分配', '今天 11:02'],
      ['FB-5208', '钱包问题', '季明川 / U-10771', '处理中', '客服专员 A', '今天 09:16'],
      ['FB-5197', '首页推荐', '顾温澜 / U-9981', '已完成', '客服专员 B', '昨天 18:10']
    ];

    const currentPath = this.getCurrentPath();
    const resolveStatus = (route, row, index) => this.getEffectiveStatus(route, row[0], row[index]);
    const filterByStatuses = (route, rows, index, statuses) => rows.filter(row => statuses.includes(resolveStatus(route, row, index)));
    const countByStatuses = (route, rows, index, statuses) => filterByStatuses(route, rows, index, statuses).length;

    const ledgerEnhancedColumns = ['流水ID', '订单号', '用户', '任务金额', '优惠金额', '退款金额', '保险费', '急单置顶费', '订单实收金额', '实收总收益', '状态', '时间'];
    const ledgerEnhancedRows = [
      ['LG-77102', 'OD-240317-19', '陈知栀 / U-10382', '¥138', '-¥8', '¥0', '¥2', '¥10', '¥130', '¥142', '正常', '今天 10:08'],
      ['LG-77088', 'OD-240321-08', '夏先生 / U-10771', '¥96', '¥0', '¥0', '¥2', '¥0', '¥96', '¥98', '正常', '今天 09:40'],
      ['LG-77063', 'OD-240305-11', 'Studio M / U-1041', '¥320', '-¥20', '-¥260', '¥5', '¥0', '¥40', '¥45', '退款完成', '昨天 22:16']
    ];
    const ledgerDetails = {
      'LG-77102': {
        statusTag: 'tag-warning',
        warning: {
          title: '冻结超时告警',
          copy: '冻结已持续 48 小时以上仍未自动解冻，系统已推送至财务核查队列。'
        },
        metrics: [
          { label: '冻结金额', value: '¥138', copy: '订单待接单阶段的发布冻结金额。' },
          { label: '关联流水', value: '3 条', copy: '同订单已生成冻结、保险费与优惠抵扣流水。' },
          { label: '保留期', value: '49h', copy: '数据按 3 年保留，只允许追加内部备注。' },
          { label: '告警级别', value: 'P2', copy: '异常金额或超时冻结会升级到财务告警。' }
        ],
        infoTitle: '资金链路',
        infoPairs: [
          ['关联订单', 'OD-240317-19，任务金额 ¥138，当前仍处于待结算链路。'],
          ['关联用户', '发布者 U-10382 / 服务者待确认，暂未生成解冻与结算流水。'],
          ['内部备注', '原始触发为“发布冻结”；未发现手工改价或重复扣款。'],
          ['数据策略', '流水主记录只读，不允许改金额；仅允许追加内部核查备注。']
        ],
        evidences: [
          { title: '系统触发摘要', desc: '订单创建成功后自动冻结发布者钱包，可用于后续取消退款或完结结算。' },
          { title: '异常原因', desc: '解冻任务未在 SLA 内执行，财务规则将其标记为“冻结超时待核查”。' },
          { title: '外部 trace', desc: 'payment_trace_id: pay_fz_240317_1908；未发现支付通道失败回执。' }
        ],
        relatedTable: {
          title: '同订单相关流水',
          columns: ['流水类型', '金额', '方向', '状态'],
          rows: [
            ['发布冻结', '¥138', '冻结', '待核查'],
            ['接单保险费扣除', '¥2', '支出', '已同步保司'],
            ['优惠券抵扣', '¥8', '支出', '已归档']
          ]
        },
        timelineTitle: '流水时间轴',
        timeline: [
          { title: '10:08 自动生成冻结流水', desc: '订单发布成功，系统写入冻结记录。', time: '今天 10:08' },
          { title: '10:09 保险费同步请求发出', desc: '保费入账并进入保单同步链路。', time: '今天 10:09' },
          { title: '11:20 告警升级', desc: '冻结超时规则命中，推送财务核查。', time: '今天 11:20' }
        ],
        relatedLinks: [
          { label: '查看订单详情', route: 'order/detail.html?order=OD-240317-19' },
          { label: '查看发布者', route: 'user/detail.html?user=U-10382' }
        ],
        formTitle: '核查记录',
        formFields: [
          { key: 'auditOwner', label: '核查人', type: 'select', options: ['财务专员 A', '财务专员 B', '值班主管'] },
          { key: 'auditConclusion', label: '核查结论', type: 'textarea', minHeight: 88, placeholder: '记录异常原因、是否需回滚或升级处理' }
        ],
        metaNotes: [
          '异常流水不得直接并入正式报表，需先完成核查或归档。',
          '若金额为负数或极端大值，应继续升级到财务告警工单。'
        ]
      },
      'LG-77088': {
        statusTag: 'tag-success',
        metrics: [
          { label: '结算金额', value: '¥96', copy: '服务完成后结算给服务者。' },
          { label: '平台抽佣', value: '¥12', copy: '已按统一佣金比例拆分。' },
          { label: '状态', value: '已归档', copy: '无异常，已进入正式财务口径。' },
          { label: '回执', value: '成功', copy: '支付清分回执已写回。' }
        ],
        infoPairs: [
          ['订单状态', '已完成，平台抽佣与服务者到账均已完成。'],
          ['报表归属', '按支付成功时间入账到 2026-04-27。'],
          ['优惠口径', '优惠券仅冲减任务金额，不影响保险费与置顶费口径。'],
          ['审计要求', '若后续发生退款，将按退款成功时间冲回。']
        ],
        evidences: [
          { title: '清分摘要', desc: '服务完成后自动触发结算链路，清分成功后回写状态。' },
          { title: '导出记录', desc: '该流水已纳入今日财务导出与平台收入报表。 ' }
        ],
        timeline: [
          { title: '09:40 结算流水生成', desc: '服务完成，系统自动生成结算记录。', time: '今天 09:40' },
          { title: '09:43 平台抽佣拆分', desc: '抽佣流水与到账流水同步写入。', time: '今天 09:43' },
          { title: '09:55 归档完成', desc: '财务侧核对完成，进入正式报表。', time: '今天 09:55' }
        ],
        relatedLinks: [{ label: '查看订单详情', route: 'order/detail.html?order=OD-240321-08' }]
      },
      'LG-77063': {
        statusTag: 'tag-danger',
        warning: {
          title: '纠纷退款占比异常',
          copy: '退款比例接近全额，需继续核对裁定依据与关联工单。'
        },
        metrics: [
          { label: '退款金额', value: '¥260', copy: '按纠纷裁定比例执行的退款金额。' },
          { label: '关联工单', value: '2 条', copy: '含纠纷工单和客服跟进单。' },
          { label: '当前状态', value: '异常复核', copy: '仍需二次确认责任归属。' },
          { label: '通知状态', value: '已通知', copy: '双方已收到退款处理通知。' }
        ],
        infoPairs: [
          ['裁定结果', '发布者承担 80%，服务者承担 20%，系统执行差额退款。'],
          ['异常点', '退款金额接近订单原价，且存在跨日到账。'],
          ['复核要求', '需同步核对纠纷详情、聊天摘录和客服结论。'],
          ['报表口径', '在核查完成前先进入财务核查，不直接并入正式报表。']
        ],
        evidences: [
          { title: '纠纷裁定摘要', desc: '证据链包含聊天截图、服务凭证与客服复核说明。' },
          { title: '支付回执', desc: 'refund_trace_id: rf_240305_1162，退款渠道返回成功。' }
        ],
        relatedLinks: [
          { label: '查看订单详情', route: 'order/detail.html?order=OD-240305-11' },
          { label: '查看纠纷详情', route: 'order/dispute-detail.html?dispute=DP-7098' }
        ]
      }
    };

    const withdrawalEnhancedColumns = ['申请ID', '用户', '余额快照', '提现金额', '实名校验', '状态', '风控标记', '申请时间'];
    const withdrawalEnhancedRows = [
      ['WD-9001', '顾温澜 / U-9981', '¥522', '¥366', '通过', '待处理', '常规', '今天 11:06'],
      ['WD-8994', '季明川 / U-10771', '¥388', '¥188', '通过', '待处理', '超额 + 账号异常', '今天 09:34'],
      ['WD-8977', '陈知栀 / U-10382', '¥66', '¥45', '通过', '已完成', '常规', '昨天 17:20'],
      ['WD-8968', '周南栀 / U-10944', '¥18', '¥18', '失败', '已拒绝', '实名校验失败', '昨天 16:08']
    ];
    const withdrawalDetails = {
      'WD-9001': {
        statusTag: 'tag-warning',
        metrics: [
          { label: '申请金额', value: '¥366', copy: '未超过单日 500 元上限，可走常规审核。' },
          { label: '余额快照', value: '¥522', copy: '申请时余额充足，无负余额风险。' },
          { label: '历史提现', value: '4 次', copy: '近 30 天均为微信零钱到账。' },
          { label: '同步回执', value: '待发起', copy: '尚未触发企业付款接口。' }
        ],
        infoPairs: [
          ['提现渠道', '微信零钱到账；首版不支持银行卡。'],
          ['实名结果', '微信实名校验通过，证件姓名与平台实名一致。'],
          ['风控结论', '当前未命中超额、封禁或主体联动规则。'],
          ['处理建议', '在提现列表直接通过或拒绝；高风险记录保留风控标记。']
        ],
        relatedTable: {
          title: '历史提现记录',
          columns: ['时间', '金额', '状态', '渠道'],
          rows: [
            ['2026-04-23 10:22', '¥120', '已完成', '微信零钱'],
            ['2026-04-16 18:03', '¥64', '已完成', '微信零钱'],
            ['2026-04-02 09:18', '¥80', '已完成', '微信零钱']
          ]
        },
        evidences: [
          { title: '企业付款前检查', desc: '将核对余额快照、实名一致性与账号状态；成功后写入企业付款回执。' },
          { title: '并发控制', desc: '打款进入“处理中”后禁止重复点击，避免重复转账。' }
        ],
        timeline: [
          { title: '11:06 用户提交申请', desc: '本地创建提现单并进入待处理。', time: '今天 11:06' },
          { title: '11:07 实名校验完成', desc: '微信实名返回通过。', time: '今天 11:07' },
          { title: '11:09 等待财务审核', desc: '符合批量打款前置条件。', time: '今天 11:09' }
        ],
        relatedLinks: [{ label: '查看用户详情', route: 'user/detail.html?user=U-9981' }],
        formTitle: '审核字段',
        formFields: [
          { key: 'handler', label: '处理人', type: 'select', options: ['财务专员 A', '财务专员 B', '提现复核组'] },
          { key: 'rejectReason', label: '拒绝原因', type: 'select', options: ['余额不足', '账号异常', '超出风控限额', '实名校验失败', '其他'] },
          { key: 'visibleNotice', label: '对用户说明', type: 'textarea', minHeight: 88, placeholder: '通过或拒绝时给用户的说明文案' }
        ],
        metaNotes: [
          '支持单条通过或拒绝；高风险或大额记录保留只读风控标记。',
          '失败重试需保留失败原因码与最近一次重试时间。'
        ]
      },
      'WD-8994': {
        statusTag: 'tag-danger',
        warning: {
          title: '风险标记',
          copy: '命中账号异常风险，提现列表仍只提供通过或拒绝操作。'
        },
        metrics: [
          { label: '申请金额', value: '¥188', copy: '金额本身未超限，但账号存在异常风险标记。' },
          { label: '命中规则', value: '2 条', copy: '设备异常 + 最近 7 天高风险事件未解除。' },
          { label: '当前状态', value: '待处理', copy: '等待财务在列表直接通过或拒绝。' },
          { label: '外部回执', value: 'WX-RISK-17', copy: '外部风险建议作为只读标记展示。' }
        ],
        infoPairs: [
          ['提现渠道', '微信零钱到账，当前未发起实际打款。'],
          ['风控限制', '账号存在高风险事件与主体联动观察标记。'],
          ['当前处理', '后台列表直接通过或拒绝，不设置复核流。'],
          ['处理结果', '通过后为已完成，拒绝后金额退回钱包。']
        ],
        evidences: [
          { title: '外部回执', desc: '企业付款预检返回 WX-RISK-17，作为风险标记展示。' },
          { title: '关联记录', desc: '已关联高风险事件 RK-8011 与反馈单 FB-5208。' }
        ],
        timeline: [
          { title: '09:34 用户提交申请', desc: '本地提现单创建成功。', time: '今天 09:34' },
          { title: '09:36 风控命中', desc: '设备异常与账号高风险事件联动触发。', time: '今天 09:36' },
          { title: '09:48 等待列表处理', desc: '财务可在提现列表直接通过或拒绝。', time: '今天 09:48' }
        ],
        relatedLinks: [
          { label: '查看用户详情', route: 'user/detail.html?user=U-10771' }
        ]
      },
      'WD-8977': {
        statusTag: 'tag-success',
        metrics: [
          { label: '到账金额', value: '¥45', copy: '企业付款已成功到账。' },
          { label: '回执状态', value: '成功', copy: '回执已写回，并通知用户。' },
          { label: '处理时长', value: '12 分钟', copy: '从申请到完成的总处理时长。' },
          { label: '重试次数', value: '0', copy: '无需补单或人工介入。' }
        ],
        infoPairs: [
          ['渠道回执', '企业付款 success，微信零钱到账成功。'],
          ['通知状态', '站内信与消息中心回执均已写回。'],
          ['审计链路', '已保留处理人、回执编号和时间戳。'],
          ['后续操作', '仅允许查看留痕，不支持删除。']
        ]
      },
      'WD-8968': {
        statusTag: 'tag-danger',
        warning: {
          title: '实名校验失败',
          copy: '普通钱包提现到微信零钱前必须完成实名一致校验。'
        },
        metrics: [
          { label: '申请金额', value: '¥18', copy: '小额提现，但实名失败不可放行。' },
          { label: '失败原因', value: 'NAME_MISMATCH', copy: '微信实名与平台实名不一致。' },
          { label: '退款状态', value: '已退回', copy: '余额已原路退回钱包。' },
          { label: '通知状态', value: '已通知', copy: '已提示用户修正实名信息。' }
        ],
        infoPairs: [
          ['阻断原因', '实名校验失败，不允许通过接口绕过。'],
          ['余额回滚', '申请金额已全额退回普通钱包余额。'],
          ['建议动作', '指导用户修正实名信息后重新申请。'],
          ['保留策略', '仅允许保留为业务拒绝状态，不允许删除。']
        ]
      }
    };

    const settlementBaseRecords = [
      ['PS-3011', '校园团队 A', '2026-04', '10%', '128', '116 单', '¥6,280', '待填写', '待结算', '2026-05-05 09:20'],
      ['PS-3008', '林见川', '2026-04', '8%', '43', '38 单', '¥1,960', '¥1,920', '已结算', '2026-05-05 09:18'],
      ['PS-2999', '周南栀', '2026-03', '10%', '37', '34 单', '¥1,488', '待填写', '待核查', '2026-04-05 09:16']
    ];
    const settlementEnhancedColumns = ['结算单', '合伙人', '账期', '分佣比例', '拉新人数', '拉新订单', '应结佣金金额', '实际结算金额', '状态', '生成时间'];
    const settlementEnhancedRows = settlementBaseRecords.map(row => {
      const actualAmount = this.getRecordValue('finance/partner-settlement.html', row[0], 'actualSettlementAmount', row[7]);
      const status = this.getEffectiveStatus('finance/partner-settlement.html', row[0], row[8]);
      return [row[0], row[1], row[2], row[3], row[4], row[5], row[6], actualAmount, status, row[9]];
    });
    const settlementDetails = {
      'PS-3011': {
        statusTag: 'tag-warning',
        inviteeTable: {
          title: '拉新人员明细',
          columns: ['被邀请用户', '注册时间', '首单订单', '首单支付时间', '有效拉新状态'],
          rows: [
            ['陈知栀 / U-24018', '2026-04-27 10:18', 'OD-240427-19', '2026-04-27 10:42', '有效'],
            ['夏之遥 / U-24022', '2026-04-26 14:05', 'OD-240426-07', '2026-04-26 15:16', '有效'],
            ['陆明远 / U-24031', '2026-04-25 08:32', 'OD-240425-11', '2026-04-25 09:01', '退款扣回']
          ]
        },
        metrics: [
          { label: '分佣比例', value: '10%', copy: '校园团队合作档位。' },
          { label: '应结佣金金额', value: '¥6,280', copy: '按订单实收金额 × 分佣比例计算。' },
          { label: '退款扣回', value: '¥312', copy: '已按退款比例扣回对应佣金。' },
          { label: '实际结算金额', value: this.getRecordValue('finance/partner-settlement.html', 'PS-3011', 'actualSettlementAmount', '待填写'), copy: '确认结算时可修改并填写原因。' }
        ],
        infoPairs: [
          ['账单生成规则', '次月 5 日自动生成上月账单，并推送至 C 端合伙人中心。'],
          ['结算方式', '佣金进入用户钱包，合伙人在 C 端自主提现。'],
          ['处理动作', '待结算账单可确认结算，确认时填写实际结算金额和备注。']
        ],
        relatedTable: {
          title: '拉新订单与佣金明细',
          columns: ['订单号', '被邀请用户', '订单金额', '优惠金额', '订单实收金额', '分佣比例', '分佣金额', '退款扣回', '最终佣金'],
          rows: [
            ['OD-240427-19', '陈知栀 / U-24018', '¥88', '¥0', '¥88', '10%', '¥8.8', '¥0', '¥8.8'],
            ['OD-240426-07', '夏之遥 / U-24022', '¥120', '¥10', '¥110', '10%', '¥11', '¥0', '¥11'],
            ['OD-240425-11', '陆明远 / U-24031', '¥96', '¥0', '¥96', '10%', '¥9.6', '-¥3.2', '¥6.4']
          ]
        },
        timeline: [
          { title: '05-05 自动生成账单', desc: '上月账期账单已生成并推送合伙人。', time: '2026-05-05 09:20' },
          { title: '05-06 合伙人已查看', desc: '等待财务确认结算。', time: '2026-05-06 10:30' }
        ],
        relatedLinks: [{ label: '查看合伙人详情', route: 'partner/detail.html?partner=PT-2101' }]
      },
      'PS-3008': {
        statusTag: 'tag-success',
        inviteeTable: {
          title: '拉新人员明细',
          columns: ['被邀请用户', '注册时间', '首单订单', '首单支付时间', '有效拉新状态'],
          rows: [
            ['宋栀 / U-23762', '2026-04-23 09:24', 'OD-240423-03', '2026-04-23 10:10', '有效'],
            ['何川 / U-23774', '2026-04-20 13:42', 'OD-240420-12', '2026-04-20 14:18', '有效'],
            ['周嘉 / U-23781', '2026-04-18 17:08', 'OD-240418-16', '2026-04-18 17:36', '已退款扣回']
          ]
        },
        metrics: [
          { label: '分佣比例', value: '8%', copy: '个人推广合作档位。' },
          { label: '应结佣金金额', value: '¥1,960', copy: '按有效订单佣金汇总。' },
          { label: '实际结算金额', value: '¥1,920', copy: '扣除一笔退款回退后结算。' },
          { label: '结算状态', value: '已结算', copy: '佣金已进入用户钱包。' }
        ],
        infoPairs: [
          ['结算方式', '佣金进入用户钱包，用户自主提现。'],
          ['结算备注', '扣除 1 笔退款回退佣金 ¥40。']
        ],
        relatedTable: {
          title: '拉新订单与佣金明细',
          columns: ['订单号', '被邀请用户', '订单金额', '优惠金额', '订单实收金额', '分佣比例', '分佣金额', '退款扣回', '最终佣金'],
          rows: [
            ['OD-240423-03', '宋栀 / U-23762', '¥88', '¥0', '¥88', '8%', '¥7.04', '¥0', '¥7.04'],
            ['OD-240420-12', '何川 / U-23774', '¥260', '¥20', '¥240', '8%', '¥19.2', '¥0', '¥19.2'],
            ['OD-240418-16', '周嘉 / U-23781', '¥500', '¥0', '¥500', '8%', '¥40', '-¥40', '¥0']
          ]
        }
      },
      'PS-2999': {
        statusTag: 'tag-danger',
        inviteeTable: {
          title: '拉新人员明细',
          columns: ['被邀请用户', '注册时间', '首单订单', '首单支付时间', '有效拉新状态'],
          rows: [
            ['李晴川 / U-23539', '2026-03-27 20:18', 'OD-240327-08', '2026-03-27 19:42', '待核查'],
            ['许知夏 / U-23541', '2026-03-26 11:30', 'OD-240326-21', '2026-03-26 12:06', '有效'],
            ['陈泊 / U-23547', '2026-03-25 16:41', 'OD-240325-14', '2026-03-25 17:02', '有效']
          ]
        },
        warning: {
          title: '账单待核查',
          copy: '邀请关系与退款记录存在不一致，需人工确认后再结算。'
        },
        reviewSignal: '邀请关系、支付状态或退款记录存在不一致，系统标记为待核查。',
        reviewIssues: [
          { label: '邀请关系异常', value: 'OD-240327-08 / U-23539', copy: '异常字段：invite_bind_time；当前值：2026-03-27 20:18，晚于首单支付时间 2026-03-27 19:42；建议核对是否计入有效拉新。' },
          { label: '支付状态异常', value: 'OD-240327-08', copy: '异常字段：paid_amount；当前值：¥0，订单原金额 ¥96 且存在支付完成记录；建议核对支付回执与全额退款记录。' },
          { label: '退款扣回异常', value: 'OD-240327-08 / -¥9.6', copy: '异常字段：commission_clawback；当前值：已扣回 ¥9.6，但拉新人员明细仍保留有效拉新；建议确认最终佣金是否归零。' }
        ],
        metrics: [
          { label: '分佣比例', value: '10%', copy: '组织合作档位。' },
          { label: '差异订单', value: '3 单', copy: '邀请关系、支付状态与退款记录不一致。' },
          { label: '差异金额', value: '¥186', copy: '超过结算阈值，需人工确认。' },
          { label: '当前状态', value: '待核查', copy: '需填写异常核对结论后确认结算。' }
        ],
        infoPairs: [
          ['异常原因', '有效拉新订单中存在后续全额退款记录。'],
          ['处理建议', '先核对退款口径与邀请关系，再决定是否回退佣金。'],
          ['结算方式', '佣金进入用户钱包，不展示收款银行卡或收款账户。'],
          ['审计要求', '差异处理需保留处理人、原因和确认备注。']
        ],
        relatedTable: {
          title: '拉新订单与佣金明细',
          columns: ['订单号', '被邀请用户', '订单金额', '优惠金额', '订单实收金额', '分佣比例', '分佣金额', '退款扣回', '最终佣金'],
          rows: [
            ['OD-240327-08', '李晴川 / U-23539', '¥96', '¥0', '¥0', '10%', '¥0', '-¥9.6', '待核查'],
            ['OD-240326-21', '许知夏 / U-23541', '¥180', '¥20', '¥160', '10%', '¥16', '¥0', '¥16'],
            ['OD-240325-14', '陈泊 / U-23547', '¥260', '¥0', '¥260', '10%', '¥26', '¥0', '¥26']
          ]
        }
      }
    };

    const insurancePremiumColumns = ['保费流水ID', '订单ID', '用户ID+昵称', '服务项目', '保险产品', '用户实付保费', '平台补贴', '退款金额', '保单号或回执号', '保单状态', '创建时间'];
    const insurancePremiumRows = [
      ['IF-1208', 'OD-240317-19', 'U-10382 / 陈知栀', '陪诊服务', '基础意外险', '¥2', '¥1', '¥0', 'P-20260427-1182', '已同步', '今天 10:12'],
      ['IF-1202', 'OD-240330-16', 'U-10771 / 夏先生', '活动协助', '基础意外险', '¥2', '¥1', '¥3', 'ins_req_240330_16', '待退款归档', '昨天 19:05'],
      ['IF-1197', 'OD-240305-11', 'U-1041 / Studio M', '活动执行', '活动险', '¥5', '¥0', '¥0', 'P-20260426-0907', '待划拨', '昨天 14:26']
    ];
    const insuranceSyncColumns = ['异常ID', '关联订单', '用户', '异常原因码', '最近重试', '当前状态', '处理人'];
    const insuranceSyncRows = [
      ['EX-3408', 'OD-240330-16', '季明川 / U-10771', 'TIMEOUT', '今天 10:40', '待回执', '系统重试'],
      ['EX-3397', 'OD-240305-11', 'Studio M / U-1041', 'POLICY_DUP', '今天 08:20', '同步失败', '财务专员 A']
    ];
    const insuranceStatementColumns = ['账期', '保费收入', '退款金额', '已划拨金额', '差异金额', '对账状态', '生成时间'];
    const insuranceStatementRows = [
      ['ST-2026-04', '¥12,880', '¥368', '¥12,012', '¥0', '待确认', '2026-05-01 09:00'],
      ['ST-2026-03', '¥11,204', '¥512', '¥10,622', '¥70', '差异核查中', '2026-04-01 09:00']
    ];
    const insuranceDetails = {
      'IF-1208': {
        statusTag: 'tag-success',
        metrics: [
          { label: '用户实付', value: '¥2', copy: '来自接单保险费扣除。' },
          { label: '平台补贴', value: '¥1', copy: '平台承担部分保费。' },
          { label: '保单状态', value: '已同步', copy: '保险公司回执已写回。' },
          { label: '退款状态', value: '无', copy: '订单未取消，无需退保费。' }
        ],
        infoPairs: [
          ['保司回执', 'policy_no: P-20260427-1182，回执时间 10:15。'],
          ['退款策略', '订单取消前不触发退款；履约完成后进入结转。'],
          ['异常说明', '未命中同步异常，无需进入异常队列。'],
          ['导出归属', '已纳入本月保费流水与月度对账单。']
        ],
        evidences: [
          { title: '同步时间轴', desc: '投保请求成功后 3 分钟内收到回执并标记已同步。' },
          { title: '操作日志', desc: '创建人：system_bot；最近查看：财务专员 A。' }
        ],
        timeline: [
          { title: '10:12 保费入账', desc: '用户与平台补贴保费同步写入。', time: '今天 10:12' },
          { title: '10:15 保单同步成功', desc: '收到保险公司成功回执。', time: '今天 10:15' },
          { title: '10:18 纳入对账', desc: '加入当月保费统计口径。', time: '今天 10:18' }
        ],
        relatedLinks: [
          { label: '查看订单详情', route: 'order/detail.html?order=OD-240317-19' },
          { label: '查看保险产品', route: 'ops/insurance-product-detail.html?record=IP-001' }
        ]
      },
      'EX-3408': {
        statusTag: 'tag-warning',
        warning: {
          title: '保司接口超时',
          copy: '系统每 2 小时自动重试；最终失败前不允许转入理赔流程。'
        },
        metrics: [
          { label: '异常类型', value: 'TIMEOUT', copy: '保单同步接口超时。' },
          { label: '自动重试', value: '2 次', copy: '系统每 2 小时发起一次自动重试。' },
          { label: '用户通知', value: '未通知', copy: '尚未达到最终失败条件。' },
          { label: '当前状态', value: '待回执', copy: '仍可等待自动重试结果。' }
        ],
        infoPairs: [
          ['原始请求', 'request_id: ins_req_240330_16，第一次请求耗时 32 秒。'],
          ['处理人', '系统自动重试中，人工可补充备注或手动重试。'],
          ['规则要求', '最终失败时需原路退回保费并生成客服异常工单。'],
          ['风险提示', '不得直接转入平台内理赔流程。']
        ],
        evidences: [
          { title: '最近失败原因', desc: '保险公司接口超时，未返回明确业务码。' },
          { title: '自动告警', desc: '已通知财务值班群与告警中心。' }
        ],
        timeline: [
          { title: '昨天 19:05 同步发起', desc: '保费流水创建成功。', time: '昨天 19:05' },
          { title: '昨天 19:06 首次超时', desc: '接口超时，系统转入待回执。', time: '昨天 19:06' },
          { title: '今天 10:40 最近重试', desc: '自动重试仍未返回回执。', time: '今天 10:40' }
        ],
        formTitle: '异常处理',
        formFields: [
          { key: 'followupOwner', label: '跟进人', type: 'select', options: ['财务专员 A', '保险接口值班', '客服协同'] },
          { key: 'retryNote', label: '重试备注', type: 'textarea', minHeight: 88, placeholder: '记录人工重试、通知用户或回滚安排' }
        ]
      },
      'ST-2026-03': {
        statusTag: 'tag-danger',
        warning: {
          title: '对账差异超过阈值',
          copy: '差异金额占比已超过 1%，禁止直接确认，必须填写差异原因并升级核查。'
        },
        blockedActions: ['标记对账确认'],
        blockedReason: '差异核查未完成前，不允许直接对账确认。',
        metrics: [
          { label: '账期', value: '2026-03', copy: '月度对账单。' },
          { label: '差异金额', value: '¥70', copy: '超过 1% 阈值，需要人工核查。' },
          { label: '已划拨', value: '¥10,622', copy: '已划拨金额与保司账单存在偏差。' },
          { label: '导出记录', value: '2 次', copy: '财务与保司分别导出过账单。' }
        ],
        infoPairs: [
          ['差异项', '1 笔取消订单保费退款未按退款成功时间冲回。'],
          ['处理建议', '先补齐退款回执，再确认对账。'],
          ['回执信息', '保司侧对账文件已收到，但未完成人工签收。'],
          ['后续动作', '必要时创建差异处理单并同步客服。']
        ]
      }
    };

    const riskReportTypeDict = ['违规内容', '骚扰', '虚假信息', '其他'];
    const riskReportEnhancedColumns = ['举报ID', '举报类型', '举报人昵称', '被举报对象', '举报说明摘要（文字+图片）', '提交时间', '优先级', '处理状态'];
    const riskReportEnhancedRows = [
      ['RP-6018', '违规内容', '陆星言', '夏澄 / 动态 CT-1205', '疑似低俗导流，附截图 4 张，同对象 4 人举报。', '今天 11:46', '高', '待处理'],
      ['RP-6020', '骚扰', '林清越', '周南栀 / 用户 U-10944', '骚扰与站外交易引导，附聊天截图 2 张；对象已封禁，待复核避免重复处罚。', '今天 10:18', '高', '待处理'],
      ['RP-6012', '骚扰', '许知夏', '陈知栀 / 用户 U-10382', '辱骂骚扰，文字说明 1 条，附聊天截图 3 张。', '今天 09:44', '中', '待处理'],
      ['RP-5998', '虚假信息', '梁知白', '沈枝意 / 订单 OD-240317-19', '服务纠纷与完成凭证争议，附订单截图 2 张。', '昨天 16:05', '中', '已处理'],
      ['RP-5987', '违规内容', '季明川', '夏澄 / 动态 CT-1205', '重复举报，证据与 RP-6018 相同。', '昨天 11:42', '低', '已忽略'],
      ['RP-5977', '骚扰', '南枝', '陈知栀 / 用户 U-10382', '历史骚扰投诉，已通知双方。', '昨天 15:18', '中', '已处理'],
      ['RP-5971', '虚假信息', '陈也', '沈枝意 / 订单 OD-240317-19', '历史订单信息不一致投诉。', '2026-04-29 14:18', '中', '已处理'],
      ['RP-5968', '其他', '顾遥', '夏澄 / 动态 CT-1205', '历史内容争议举报，已人工复核。', '前天 19:20', '低', '已处理'],
      ['RP-5959', '违规内容', '唐棠', '夏澄 / 动态 CT-1205', '历史违规内容举报，已处理。', '前天 18:56', '低', '已处理'],
      ['RP-5921', '骚扰', '何念', '周南栀 / 用户 U-10944', '历史骚扰举报，账号已处罚。', '2026-04-24 16:28', '中', '已处理'],
      ['RP-5906', '其他', '江眠', '陈知栀 / 用户 U-10382', '历史沟通争议举报，已归档。', '2026-04-22 09:40', '低', '已处理'],
      ['RP-5888', '虚假信息', '白栀', '周南栀 / 用户 U-10944', '历史虚假信息举报，已处罚。', '2026-04-18 21:02', '中', '已处理']
    ];
    const riskReportDetails = {
      'RP-6018': {
        statusTag: 'tag-danger',
        warning: {
          title: '同一对象多人举报',
          copy: '同一动态已被 4 人举报，优先级自动提升到队列前端。'
        },
        reporter: { nickname: '陆星言', userId: 'U-8812', route: 'user/detail.html?user=U-8812', risk: '近 72 小时举报 3 人，未达到恶意刷举报阈值。' },
        reportedUser: { nickname: '夏澄', userId: 'U-9981', route: 'user/detail.html?user=U-9981', status: '正常，尚未处罚。' },
        target: { type: '动态', id: 'CT-1205', label: '动态 CT-1205' },
        sourceContent: {
          title: '动态 CT-1205 原始内容',
          text: '校园摄影任务经验分享，内容已上架；当前举报人数达到 5 人，列表展示风险标识。',
          meta: ['发布者：顾温澜 / U-9981 / 信用分 96', '发布时间：今天 11:30', '内容类型：视频', 'AI 审核：未命中风险，AI 自动通过', '当前状态：已上架'],
          order: { id: 'OD-240506-08', taskName: '上门喂猫｜2 天｜海淀区' },
          images: [
            { id: 'CT-1205-img-1', label: '摄影任务封面图片', note: '视频封面与动态配图。' }
          ],
          videos: [
            { id: 'CT-1205-video-1', label: '校园摄影任务经验视频 00:42', note: '用户上传的视频，AI 未命中硬违规。' }
          ],
          route: 'community/feed-detail.html?record=CT-1205'
        },
        reportEvidence: {
          text: '举报说明：该动态评论区和视频末尾疑似引导私聊，举报人认为存在低俗导流内容。4 名举报人均上传了同一时段截图并补充文字说明。',
          images: [
            { id: 'RP-6018-ev-1', label: '举报截图 1', note: '视频末尾私聊引导截图。' },
            { id: 'RP-6018-ev-2', label: '举报截图 2', note: '评论区导流话术截图。' },
            { id: 'RP-6018-ev-3', label: '举报截图 3', note: '举报人补充截图。' },
            { id: 'RP-6018-ev-4', label: '举报截图 4', note: '同对象多人举报截图。' }
          ]
        },
        relatedTable: {
          title: '该用户历史被举报记录',
          columns: ['举报ID', '举报人昵称', '举报类型', '提交时间', '处理状态', '操作'],
          rows: [
            ['RP-5987', '季明川', '违规内容', '昨天 11:42', '已忽略', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5987' }],
            ['RP-5968', '顾遥', '其他', '前天 19:20', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5968' }],
            ['RP-5959', '唐棠', '违规内容', '前天 18:56', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5959' }]
          ]
        },
        formTitle: '举报处理',
        formFields: [
          { key: 'decision', label: '处理结论', type: 'select', options: ['通过（确认违规）', '驳回（举报不成立）', '忽略'] },
          { key: 'disposalMeasure', label: '通过处置措施', type: 'select', options: ['警告（扣信用分5分）', '内容删除', '封禁账号（跳转到封禁操作）'] },
          { key: 'processReason', label: '处置/驳回/忽略原因', type: 'textarea', minHeight: 88, placeholder: '驳回和忽略必须填写原因；通过处理建议写明违规依据' },
          { key: 'noticeCopy', label: '通知内容', type: 'textarea', minHeight: 88, placeholder: '通过后通知被举报人；驳回时通知举报人“举报不成立”' }
        ],
        metaNotes: [
          '通过处理同类型违规时最多支持 20 条/批，但封禁类动作需逐单确认。',
          '举报记录不允许物理删除，只能进入已处理或已忽略并保留处理链路。'
        ]
      },
      'RP-6020': {
        statusTag: 'tag-danger',
        warning: {
          title: '对象已封禁',
          copy: '被举报用户当前已处于封禁中，处理前需确认是否已有处罚，避免重复操作。'
        },
        reporter: { nickname: '林清越', userId: 'U-1197', route: 'user/detail.html?user=U-1197', risk: '命中恶意刷举报规则：72 小时内举报 12 人，限制举报功能 24 小时。' },
        reportedUser: { nickname: '周南栀', userId: 'U-10944', route: 'user/detail.html?user=U-10944', status: '账号已封禁，需复核避免重复处罚。' },
        target: { type: '用户', id: 'U-10944', label: '用户 U-10944' },
        sourceContent: {
          title: '用户 U-10944 原始内容',
          text: '聊天记录包含“加我私下转账更快”“不要在平台里说”等站外交易引导，同时伴随多条骚扰表达。',
          meta: ['被举报人：周南栀 / U-10944', '关联订单：OD-240305-11', '内容类型：聊天文字 + 图片', '当前处置：账号已封禁'],
          order: { id: 'OD-240305-11', taskName: '摄影修图｜1 单｜朝阳区' },
          images: [
            { id: 'RP-6020-chat-1', label: '聊天截图 1', note: '站外交易引导话术。' },
            { id: 'RP-6020-chat-2', label: '聊天截图 2', note: '骚扰表达截图。' }
          ],
          videos: []
        },
        reportEvidence: {
          text: '举报说明：被举报人持续发送骚扰消息，并引导添加外部联系方式进行站外交易。举报人上传聊天截图 2 张。',
          images: [
            { id: 'RP-6020-ev-1', label: '举报证据图 1', note: '外部联系方式引导。' },
            { id: 'RP-6020-ev-2', label: '举报证据图 2', note: '骚扰内容截图。' }
          ]
        },
        relatedTable: {
          title: '该用户历史被举报记录',
          columns: ['举报ID', '举报人昵称', '举报类型', '提交时间', '处理状态', '操作'],
          rows: [
            ['RP-5921', '何念', '骚扰', '2026-04-24 16:28', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5921' }],
            ['RP-5888', '白栀', '虚假信息', '2026-04-18 21:02', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5888' }]
          ]
        },
        formTitle: '举报处理',
        formFields: [
          { key: 'decision', label: '处理结论', type: 'select', options: ['通过（确认违规）', '驳回（举报不成立）', '忽略'] },
          { key: 'disposalMeasure', label: '通过处置措施', type: 'select', options: ['警告（扣信用分5分）', '内容删除', '封禁账号（跳转到封禁操作）'] },
          { key: 'processReason', label: '处置/驳回/忽略原因', type: 'textarea', minHeight: 88, placeholder: '已处罚或已封禁对象建议说明复核结论' },
          { key: 'noticeCopy', label: '通知内容', type: 'textarea', minHeight: 88, placeholder: '记录通知举报人或被举报人的文案' }
        ],
        metaNotes: [
          '已处罚或已关闭对象允许继续记录举报，但默认进入待复核，避免重复处罚。',
          '举报记录不允许物理删除，只能进入已处理或已忽略并保留处理链路。'
        ]
      },
      'RP-6012': {
        statusTag: 'tag-warning',
        reporter: { nickname: '许知夏', userId: 'U-1180', route: 'user/detail.html?user=U-1180', risk: '近 72 小时举报 2 人，未命中恶意刷举报。' },
        reportedUser: { nickname: '陈知栀', userId: 'U-10382', route: 'user/detail.html?user=U-10382', status: '受限观察，近 30 天多次投诉。' },
        target: { type: '用户', id: 'U-10382', label: '用户 U-10382' },
        sourceContent: {
          title: '用户 U-10382 原始内容',
          text: '聊天记录包含 6 条辱骂和骚扰表达，关联订单 OD-240317-19。当前无视频，图片为聊天截图。',
          meta: ['被举报人：陈知栀 / U-10382', '关联订单：OD-240317-19', '内容类型：聊天文字 + 图片', '当前处置：待处理'],
          order: { id: 'OD-240317-19', taskName: '陪诊协助｜半天｜海淀区' },
          images: [
            { id: 'RP-6012-chat-1', label: '聊天截图 1', note: '辱骂内容截图。' },
            { id: 'RP-6012-chat-2', label: '聊天截图 2', note: '持续骚扰截图。' },
            { id: 'RP-6012-chat-3', label: '聊天截图 3', note: '关联订单沟通截图。' }
          ],
          videos: []
        },
        reportEvidence: {
          text: '举报说明：被举报人多次发送辱骂和骚扰消息，影响订单沟通。举报人上传完整聊天截图 3 张并补充文字说明。',
          images: [
            { id: 'RP-6012-ev-1', label: '举报证据图 1', note: '辱骂内容。' },
            { id: 'RP-6012-ev-2', label: '举报证据图 2', note: '骚扰内容。' },
            { id: 'RP-6012-ev-3', label: '举报证据图 3', note: '订单上下文。' }
          ]
        },
        relatedTable: {
          title: '该用户历史被举报记录',
          columns: ['举报ID', '举报人昵称', '举报类型', '提交时间', '处理状态', '操作'],
          rows: [
            ['RP-5977', '南枝', '骚扰', '昨天 15:18', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5977' }],
            ['RP-5906', '江眠', '其他', '2026-04-22 09:40', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5906' }]
          ]
        },
        formTitle: '举报处理',
        formFields: [
          { key: 'decision', label: '处理结论', type: 'select', options: ['通过（确认违规）', '驳回（举报不成立）', '忽略'] },
          { key: 'disposalMeasure', label: '通过处置措施', type: 'select', options: ['警告（扣信用分5分）', '内容删除', '封禁账号（跳转到封禁操作）'] },
          { key: 'processReason', label: '处置/驳回/忽略原因', type: 'textarea', minHeight: 88, placeholder: '驳回和忽略必须填写原因；通过处理建议写明违规依据' },
          { key: 'noticeCopy', label: '通知内容', type: 'textarea', minHeight: 88, placeholder: '通过后通知被举报人；驳回时通知举报人“举报不成立”' }
        ]
      },
      'RP-5998': {
        statusTag: 'tag-success',
        reporter: { nickname: '梁知白', userId: 'U-1024', route: 'user/detail.html?user=U-1024', risk: '近 72 小时举报 1 人，未命中恶意刷举报。' },
        reportedUser: { nickname: '沈枝意', userId: 'U-12031', route: 'user/detail.html?user=U-12031', status: '' },
        target: { type: '订单', id: 'OD-240317-19', label: '订单 OD-240317-19' },
        sourceContent: {
          title: '订单 OD-240317-19 原始内容',
          text: '陪诊协助订单完成凭证存在争议，服务说明与实际完成节点不一致。',
          meta: ['被举报人：沈枝意 / U-12031', '关联订单：OD-240317-19', '内容类型：订单图文', '当前处置：已处理'],
          order: { id: 'OD-240317-19', taskName: '陪诊协助｜半天｜海淀区' },
          images: [
            { id: 'RP-5998-order-1', label: '订单截图 1', note: '订单详情与服务节点。' },
            { id: 'RP-5998-order-2', label: '完成凭证截图 2', note: '完成凭证争议截图。' }
          ],
          videos: []
        },
        reportEvidence: {
          text: '举报说明：订单完成凭证与服务实际进度不一致，举报人上传订单截图 2 张。',
          images: [
            { id: 'RP-5998-ev-1', label: '举报证据图 1', note: '订单状态截图。' },
            { id: 'RP-5998-ev-2', label: '举报证据图 2', note: '完成凭证截图。' }
          ]
        },
        relatedTable: {
          title: '该用户历史被举报记录',
          columns: ['举报ID', '举报人昵称', '举报类型', '提交时间', '处理状态', '操作'],
          rows: [
            ['RP-5971', '陈也', '虚假信息', '2026-04-29 14:18', '已处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-5971' }]
          ]
        }
      },
      'RP-5987': {
        statusTag: 'tag-info',
        reporter: { nickname: '季明川', userId: 'U-4411', route: 'user/detail.html?user=U-4411', risk: '近 72 小时举报 1 人，未命中恶意刷举报。' },
        reportedUser: { nickname: '夏澄', userId: 'U-9981', route: 'user/detail.html?user=U-9981', status: '重复举报，已并入 RP-6018。' },
        target: { type: '动态', id: 'CT-1205', label: '动态 CT-1205' },
        sourceContent: {
          title: '动态 CT-1205 原始内容',
          text: '校园摄影任务经验分享，内容已上架；当前举报人数达到 5 人，列表展示风险标识。',
          meta: ['发布者：顾温澜 / U-9981 / 信用分 96', '发布时间：今天 11:30', '内容类型：视频', 'AI 审核：未命中风险，AI 自动通过', '当前状态：已上架'],
          order: { id: 'OD-240506-08', taskName: '上门喂猫｜2 天｜海淀区' },
          images: [
            { id: 'CT-1205-img-1', label: '摄影任务封面图片', note: '视频封面与动态配图。' }
          ],
          videos: [
            { id: 'CT-1205-video-1', label: '校园摄影任务经验视频 00:42', note: '用户上传的视频，AI 未命中硬违规。' }
          ],
          route: 'community/feed-detail.html?record=CT-1205'
        },
        reportEvidence: {
          text: '举报说明：重复举报，证据与 RP-6018 指向同一动态内容。',
          images: [
            { id: 'RP-5987-ev-1', label: '重复举报截图', note: '同一动态截图。' }
          ]
        },
        relatedTable: {
          title: '该用户历史被举报记录',
          columns: ['举报ID', '举报人昵称', '举报类型', '提交时间', '处理状态', '操作'],
          rows: [
            ['RP-6018', '陆星言', '违规内容', '今天 11:46', '待处理', { label: '查看详情', route: 'risk/report-detail.html?record=RP-6018' }]
          ]
        }
      }
    };

    const feedbackEnhancedColumns = ['反馈单ID', '反馈类型', '提交用户', '当前状态', '处理人', '创建时间'];
    const feedbackEnhancedRows = [
      ['FB-5218', '订单问题', '林清越 / U-1197', '待处理', '未分配', '今天 12:24'],
      ['FB-5217', '认证问题', '许知夏 / U-1180', '待处理', '未分配', '今天 12:08'],
      ['FB-5216', '聊天问题', '梁知白 / U-1024', '待处理', '未分配', '今天 11:46'],
      ['FB-5211', '订单问题', '沈枝意 / U-12031', '待处理', '未分配', '今天 11:02'],
      ['FB-5208', '钱包问题', '季明川 / U-10771', '处理中', '客服专员 A', '今天 09:16'],
      ['FB-5197', '首页推荐', '顾温澜 / U-9981', '已完成', '客服专员 B', '昨天 18:10'],
      ['FB-5190', '支付问题', '周南栀 / U-10944', '已完成', '客服专员 C', '2026-05-06 14:26']
    ];
    const feedbackDetails = {
      'FB-5218': {
        statusTag: 'tag-warning',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“订单已经完成，但我的订单详情还显示待确认完成，麻烦帮我看一下。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传 2 张订单状态截图，完整展示订单状态与完成凭证记录。',
            images: [
              { id: 'FB-5218-img-1', label: '订单状态截图', title: '反馈附件', note: '订单详情仍显示待确认完成。' },
              { id: 'FB-5218-img-2', label: '完成凭证截图', title: '反馈附件', note: '用户已提交完成凭证。' }
            ]
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功，当前等待客服处理。', time: '今天 12:24' }
        ]
      },
      'FB-5217': {
        statusTag: 'tag-warning',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“学历认证提交两次都没有结果，页面也没有提示失败原因。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传 1 张认证中心截图，完整展示学历认证核验状态。',
            images: [
              { id: 'FB-5217-img-1', label: '认证中心截图', title: '反馈附件', note: '学历认证状态长时间停留在审核中。' }
            ]
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功，当前等待客服处理。', time: '今天 12:08' }
        ]
      },
      'FB-5216': {
        statusTag: 'tag-warning',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“订单聊天里图片发不出去，一直提示发送失败。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传 2 张聊天页面截图，完整展示图片发送失败与重试提示。',
            images: [
              { id: 'FB-5216-img-1', label: '聊天发送失败截图', title: '反馈附件', note: '图片消息显示发送失败。' },
              { id: 'FB-5216-img-2', label: '重试提示截图', title: '反馈附件', note: '多次重试后仍未发送成功。' }
            ]
          }
        ]
        ,
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功，当前等待客服处理。', time: '今天 11:46' }
        ]
      },
      'FB-5211': {
        statusTag: 'tag-warning',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“上传完成凭证后一直转圈，页面没有成功提示。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传的 2 张截图，完整展示上传进度卡住及错误 toast。',
            images: [
              { id: 'FB-5211-img-1', label: '上传进度卡住截图', title: '反馈附件', note: '完成凭证上传停留在 80%。' },
              { id: 'FB-5211-img-2', label: '错误 toast 截图', title: '反馈附件', note: '页面提示网络异常，请稍后重试。' }
            ]
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功，当前等待客服处理。', time: '今天 11:02' }
        ],
        metaNotes: [
          '反馈工单不允许物理删除，仅允许业务处理完成。',
          '关闭工单必须保留内部备注、用户可见回复和操作日志。'
        ]
      },
      'FB-5208': {
        statusTag: 'tag-info',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“提现提交后一直没到账，希望帮忙查一下。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传 1 张微信零钱截图，完整展示提现记录页面。',
            images: [
              { id: 'FB-5208-img-1', label: '微信零钱提现截图', title: '反馈附件', note: '用户提交的提现到账截图。' }
            ]
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功。', time: '今天 09:16' },
          { title: '处理回执', desc: '客服专员 A 已输出处理方案：核对提现记录 WD-8994，回复用户预计到账时间，等待确认后关闭。', time: '今天 09:32' }
        ]
      },
      'FB-5197': {
        statusTag: 'tag-success',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“首页推荐一直刷到距离很远的任务，希望可以优先展示附近订单。”'
          },
          {
            title: '截图与附件',
            desc: '用户上传 2 张首页推荐列表截图，完整展示推荐距离和筛选条件。',
            images: [
              { id: 'FB-5197-img-1', label: '首页推荐列表截图', title: '反馈附件', note: '推荐列表展示较远订单。' },
              { id: 'FB-5197-img-2', label: '筛选条件截图', title: '反馈附件', note: '用户当前筛选条件为 5km 内。' }
            ]
          },
          {
            title: '对用户可见回复',
            desc: '已收到反馈，我们会优化首页推荐排序。当前可通过距离筛选优先查看附近任务。正式回复已写回消息中心。'
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功。', time: '昨天 17:32' },
          { title: '处理回执', desc: '客服专员 B 已确认问题范围，整理推荐排序优化方案并回复用户。', time: '昨天 17:58' },
          { title: '关闭回执', desc: '客服专员 B 已关闭工单，状态变更为已完成。', time: '昨天 18:10' }
        ]
      },
      'FB-5190': {
        statusTag: 'tag-success',
        evidenceTitle: '证据与回执',
        evidences: [
          {
            title: '反馈正文',
            desc: '“支付后页面没有跳转成功页。”'
          },
          {
            title: '截图与附件',
            desc: '附件损坏，已按异常处理口径回复用户重新提交材料。'
          },
          {
            title: '对用户可见回复',
            desc: '请重新提交截图材料，我们会继续核对支付结果。正式回复已写回消息中心。'
          }
        ],
        timelineTitle: '回执时间轴',
        timeline: [
          { title: '用户提交回执', desc: '用户提交反馈，本地反馈单创建成功。', time: '2026-05-06 13:42' },
          { title: '处理回执', desc: '客服专员 C 核对支付链路后，按异常处理口径先回复用户补充截图材料。', time: '2026-05-06 14:08' },
          { title: '关闭回执', desc: '客服专员 C 已关闭工单，状态变更为已完成。', time: '2026-05-06 14:26' }
        ]
      }
    };

    if (currentPath === 'finance/ledger.html') {
      return this.createListConfig({
        listPath: 'finance/ledger.html',
        label: '订单流水',
        tableTitle: '订单资金流水',
        columns: ledgerEnhancedColumns,
        rows: ledgerEnhancedRows,
        exportLabel: '导出订单流水',
        hideRowActions: true,
        statusIndex: 10,
        highlight: {
          label: '只读资金链路',
          copy: '订单流水只保留列表字段，每条记录按订单维度汇总收入、退款、优惠、保险费和急单置顶费。',
          meta: '流水只读，不进入详情页'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索流水ID / 订单ID / 用户ID', style: 'min-width:240px;' },
          { type: 'select', options: [{ label: '全部状态', active: true }, { label: '正常' }, { label: '退款完成' }] }
        ],
        auditNotes: [
          '优惠券仅抵扣任务金额，不抵扣保险费和急单置顶费。',
          '退款按退款成功时间冲回；跨日到账按支付成功时间入账。'
        ],
        footerNote: '订单流水为列表只读，不提供详情页入口。'
      });
    }

    if (currentPath === 'finance/withdrawals.html') {
      return this.createListConfig({
        listPath: 'finance/withdrawals.html',
        label: '提现管理',
        tableTitle: '提现申请',
        columns: withdrawalEnhancedColumns,
        rows: withdrawalEnhancedRows,
        exportLabel: '导出提现清单',
        statusIndex: 5,
        rowActions: row => {
          if (row[5] !== '待处理') {
            return [];
          }
          return [
            { label: '通过', kind: 'update-record-status', recordRoute: 'finance/withdrawals.html', recordId: row[0], nextStatus: '已完成', message: `${row[0]} 已通过提现申请` },
            { label: '拒绝', kind: 'update-record-status', recordRoute: 'finance/withdrawals.html', recordId: row[0], nextStatus: '已拒绝', message: `${row[0]} 已拒绝提现申请` }
          ];
        },
        highlight: {
          label: '微信零钱打款规则',
          copy: '提现管理简化为列表直接通过/拒绝；已处理记录隐藏操作按钮，不再进入详情页。',
          meta: '单日最高 500 元'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索申请ID / 用户ID / 手机号后4位', style: 'min-width:240px;' },
          { type: 'select', options: [{ label: '全部状态', active: true }, { label: '待处理' }, { label: '处理中' }, { label: '已完成' }, { label: '已拒绝' }] },
          { type: 'select', options: [{ label: '全部风控标记', active: true }, { label: '常规' }, { label: '超额 + 账号异常' }, { label: '实名校验失败' }] }
        ],
        auditNotes: [
          '通过后状态变更为已完成；拒绝后状态变更为已拒绝。',
          '已完成、已拒绝记录仅保留查看列表字段，不展示处理操作。'
        ],
        footerNote: '提现管理不保留详情页、复核态和复杂打款动作。'
      });
    }

    if (currentPath === 'finance/partner-settlement.html') {
      return this.createListConfig({
        listPath: 'finance/partner-settlement.html',
        label: '合伙人结算',
        tableTitle: '月度结算账单',
        columns: settlementEnhancedColumns,
        rows: settlementEnhancedRows,
        exportLabel: '导出结算单',
        statusIndex: 8,
        rowActions: row => {
          const actions = [{ label: '查看详情', route: `finance/partner-settlement-detail.html?record=${encodeURIComponent(row[0])}` }];
          if (row[8] !== '已结算') {
            actions.push({
              label: '确定结算',
              kind: 'open-settlement-note',
              recordId: row[0],
              dueAmount: row[6],
              actualAmount: row[7] === '待填写' ? row[6] : row[7],
              settlementStatus: row[8]
            });
          }
          return actions;
        },
        highlight: {
          label: '次月 5 日自动出账',
          copy: '无风险账单进入待结算；系统识别邀请关系、支付状态或退款记录不一致时标记待核查。',
          meta: '佣金进入用户钱包，用户自主提现'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索结算单 / 合伙人 / 城市', style: 'min-width:240px;' },
          { type: 'select', options: [{ label: '全部状态', active: true }, { label: '待结算' }, { label: '待核查' }, { label: '已结算' }] },
          { type: 'select', options: [{ label: '全部账期', active: true }, { label: '2026-04' }, { label: '2026-03' }] }
        ],
        auditNotes: [
          '只有系统判断账单有风险时才展示待核查状态和具体核查结论。',
          '确认结算时可修改实际结算金额，并在结算备注中说明原因。'
        ],
        footerNote: '详情页按账单摘要、系统核查结论、明细弹窗和结算备注组织。'
      });
    }

    if (currentPath === 'finance/partner-settlement-detail.html') {
      return {
        type: 'settlement-detail',
        queryKey: 'record',
        parentRoute: 'finance/partner-settlement.html',
        parentLabel: '合伙人结算',
        title: '结算详情',
        columns: settlementEnhancedColumns,
        rows: settlementEnhancedRows,
        statusIndex: 8,
        details: settlementDetails,
        metaNotes: [
          '拉新订单和佣金明细合并展示，体现订单金额、分佣比例和分佣金额。',
          '只有系统判断账单有风险时才展示待核查结论；无风险账单保持待结算且不展示系统核查结论字段。'
        ],
        actions: [
          { label: '确定结算', kind: 'open-settlement-note', primary: true }
        ]
      };
    }

    if (currentPath === 'finance/insurance-fee.html') {
      return this.createListConfig({
        listPath: 'finance/insurance-fee.html',
        label: '保险费管理',
        tableTitle: '保费流水',
        columns: insurancePremiumColumns,
        rows: insurancePremiumRows,
        exportLabel: '导出保费流水',
        hideRowActions: true,
        statusIndex: 9,
        highlight: {
          label: '完整保险流水',
          copy: '仅保留保费流水列表，展示订单、用户、服务项目、保险产品、实付、补贴、退款、保单回执和保单状态。',
          meta: '不提供查看详情入口'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索保费单 / 订单ID / 用户ID', style: 'min-width:240px;' },
          { type: 'select', options: [{ label: '全部保险产品', active: true }, { label: '基础意外险' }, { label: '活动险' }] },
          { type: 'select', options: [{ label: '全部状态', active: true }, { label: '已同步' }, { label: '待退款归档' }, { label: '待划拨' }] }
        ],
        auditNotes: [
          '保费流水需要展示用户实付、平台补贴和退款口径。',
          '订单取消产生退保时，按退款成功时间冲回保费流水。'
        ],
        footerNote: '保险费管理为列表只读，不提供详情页入口。'
      });
    }

    if (currentPath === 'risk/reports.html') {
      const activeTab = this.getPageValue('activeTab', 'pending');
      const tabMap = {
        pending: ['待处理'],
        done: ['已处理'],
        ignored: ['已忽略']
      };

      return this.createListConfig({
        listPath: 'risk/reports.html',
        label: '举报管理',
        tableTitle: '举报队列',
        columns: riskReportEnhancedColumns,
        rows: riskReportEnhancedRows,
        details: riskReportDetails,
        exportLabel: '导出举报清单',
        detailRoute: 'risk/report-detail.html',
        statusIndex: 7,
        tabs: [],
        selectable: true,
        bulkItemName: '举报',
        bulkHint: '同类型违规可批量通过处理，最多 20 条 / 批；导出会包含举报记录和处理结果。',
        bulkActions: [
          { label: '批量通过处理', kind: 'generic-list-bulk', action: 'approve-reports', nextStatus: '已处理', message: '已批量通过处理所选举报' },
          { label: '批量导出结果', kind: 'generic-list-bulk', action: 'export', message: '所选举报记录和处理结果导出任务已创建' }
        ],
        highlight: {
          label: '同对象多人举报自动提级',
          copy: '同一对象超过 3 条举报会自动提升优先级；恶意刷举报则对举报人触发 24 小时限制。',
          meta: '通过处理最多支持 20 条 / 批'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索举报ID / 举报人昵称 / 被举报对象昵称', style: 'min-width:300px;' },
          { type: 'select', columnIndex: 1, options: [{ label: '全部举报类型', active: true }, ...riskReportTypeDict.map(label => ({ label }))] },
          { type: 'select', columnIndex: 7, options: [{ label: '全部处理状态', active: true }, { label: '待处理' }, { label: '已处理' }, { label: '已忽略' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '详情', route: `risk/report-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '待处理') {
            actions.push({ label: '通过', kind: 'open-report-process', recordRoute: 'risk/reports.html', recordId, nextStatus: '已处理', reportAction: 'approve', message: '举报已通过并完成处置' });
            actions.push({ label: '驳回', kind: 'open-report-process', recordRoute: 'risk/reports.html', recordId, nextStatus: '已处理', reportAction: 'reject', message: '举报已驳回并通知举报人' });
            actions.push({ label: '忽略', kind: 'open-report-process', recordRoute: 'risk/reports.html', recordId, nextStatus: '已忽略', reportAction: 'ignore', message: '举报已忽略并保留处理记录' });
          }
          return actions;
        },
        auditNotes: [
          '若对象已被下架或封禁，允许继续记录举报，但应进入待复核避免重复处罚。',
          '驳回举报时通知举报人“举报不成立”；忽略适用于重复举报、信息不足或已处理对象。',
          '举报记录不允许物理删除，仅允许进入已处理或已忽略状态并保留处理链路。'
        ],
        footerNote: '详情页按举报信息、原始内容弹窗、举报证据和该用户历史被举报记录组织。'
      });
    }

    if (currentPath === 'risk/report-detail.html') {
      return {
        type: 'risk-report-detail',
        queryKey: 'record',
        parentRoute: 'risk/reports.html',
        parentLabel: '举报管理',
        title: '举报详情',
        columns: riskReportEnhancedColumns,
        rows: riskReportEnhancedRows,
        statusIndex: 7,
        details: riskReportDetails,
        hideDetailItems: true,
        hideFollowNote: true,
        hideTimeline: true,
        formStatuses: [],
        metaNotes: [
          '支持确认违规、驳回举报和忽略，但都必须写明处置或忽略原因。',
          '若处理需要封禁账号，应继续跳转到账号封禁链路。'
        ],
        actions: [
          { label: '通过', kind: 'open-report-process', recordRoute: 'risk/reports.html', nextStatus: '已处理', reportAction: 'approve', message: '举报已通过并完成处置', primary: true, showStatuses: ['待处理'] },
          { label: '驳回', kind: 'open-report-process', recordRoute: 'risk/reports.html', nextStatus: '已处理', reportAction: 'reject', message: '举报已驳回并通知举报人', showStatuses: ['待处理'] },
          { label: '忽略', kind: 'open-report-process', recordRoute: 'risk/reports.html', nextStatus: '已忽略', reportAction: 'ignore', message: '举报已忽略并保留处理记录', showStatuses: ['待处理'] }
        ]
      };
    }

    if (currentPath === 'support/feedback.html') {
      const feedbackStatusField = {
        type: 'select',
        stateKey: 'feedback_status',
        columnIndex: 3,
        options: [{ label: '全部状态', active: true }, { label: '待处理' }, { label: '处理中' }, { label: '已完成' }]
      };
      const currentFeedbackStatus = this.getFilterValue(feedbackStatusField, 0);
      const getFeedbackStatusCount = status => feedbackEnhancedRows.filter(row => (
        this.getEffectiveStatus('support/feedback.html', row[0], row[3]) === status
      )).length;
      const feedbackListConfig = this.createListConfig({
        listPath: 'support/feedback.html',
        label: '反馈工单',
        tableTitle: '反馈工单管理',
        columns: feedbackEnhancedColumns,
        rows: feedbackEnhancedRows,
        exportLabel: '导出反馈工单',
        detailRoute: 'support/feedback-detail.html',
        statusIndex: 3,
        rowActions: row => {
          const actions = [{ label: '查看', route: `support/feedback-detail.html?record=${encodeURIComponent(row[0])}` }];
          if (row[3] !== '已完成') {
            actions.push({ label: '处理', route: `support/feedback-detail.html?record=${encodeURIComponent(row[0])}` });
          }
          return actions;
        },
        highlight: {
          label: '本地反馈单处理',
          copy: '反馈工单仅保留查看、处理、回复并关闭的基础闭环。',
          meta: '逐单处理，不支持批量处理'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索反馈单ID / 用户ID / 反馈类型', style: 'min-width:260px;' },
          { type: 'select', columnIndex: 1, options: [{ label: '全部反馈类型', active: true }, { label: '订单问题' }, { label: '钱包问题' }, { label: '首页推荐' }, { label: '支付问题' }, { label: '认证问题' }, { label: '聊天问题' }] },
          feedbackStatusField,
          { type: 'select', columnIndex: 4, options: [{ label: '全部处理人', active: true }, { label: '未分配' }, { label: '客服专员 A' }, { label: '客服专员 B' }, { label: '客服专员 C' }] }
        ],
        auditNotes: [
          '反馈工单不允许物理删除，仅允许业务处理完成并保留完整留痕。',
          '用户补充内容超过限制或附件损坏时，回复用户重新提交材料，并关闭工单。'
        ],
        footerNote: '详情页仅展示反馈正文、截图附件、内部备注、用户可见回复和操作日志。'
      });
      feedbackListConfig.statusCards = [
        { label: '总记录数', value: String(feedbackEnhancedRows.length), meta: '', filterKey: 'feedback_status', filterValue: '全部状态', active: currentFeedbackStatus === '全部状态' },
        { label: '待处理', value: String(getFeedbackStatusCount('待处理')), meta: '', filterKey: 'feedback_status', filterValue: '待处理', active: currentFeedbackStatus === '待处理' },
        { label: '处理中', value: String(getFeedbackStatusCount('处理中')), meta: '', filterKey: 'feedback_status', filterValue: '处理中', active: currentFeedbackStatus === '处理中' },
        { label: '已完成', value: String(getFeedbackStatusCount('已完成')), meta: '', filterKey: 'feedback_status', filterValue: '已完成', active: currentFeedbackStatus === '已完成' }
      ];
      return feedbackListConfig;
    }

    if (currentPath === 'support/feedback-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'support/feedback.html',
        parentLabel: '反馈工单',
        title: '反馈详情',
        columns: feedbackEnhancedColumns,
        rows: feedbackEnhancedRows,
        statusIndex: 3,
        details: feedbackDetails,
        summaryColumnCount: 6,
        fullWidthDetail: true,
        hideMetrics: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideTimeline: true,
        hideRelatedLinks: true,
        metaNotes: [
          '处理反馈时填写对用户可见回复，正式回复写回消息中心。',
          '反馈工单不允许物理删除，仅允许业务处理完成并保留完整留痕。'
        ],
        notePlaceholder: '记录本次处理说明、内部备注或后续跟进事项',
        actions: [
          { label: '处理', status: '处理中', success: '反馈工单已进入处理中，回复已写回消息中心', primary: true, showStatuses: ['待处理'] },
          { label: '关闭工单', status: '已完成', success: '反馈工单已关闭，正式回复已写回消息中心', primary: true, showStatuses: ['处理中'] }
        ]
      });
    }

    const communityFeedColumns = ['内容ID', '作者（昵称+ID+信用分）', '账号状态', '发布时间', '内容类型', 'AI审核结果', '举报人数 / 风险标识', '当前状态'];
    const communityFeedRows = [
      ['CT-1208', '许知夏 / U-23317 / 信用分 94', '正常', '今天 12:08', '图文', '未命中风险，AI 自动通过', '0', '已上架'],
      ['CT-1207', '梁知白 / U-12766 / 信用分 86', '正常', '今天 11:56', '视频', '导流风险 92%，需人工裁定', '/', '待人工裁定'],
      ['CT-1206', '宋清和 / U-11809 / 信用分 64', '受限', '今天 11:42', '图文', '骚扰暗示 86%，需人工裁定', '/', '待人工裁定'],
      ['CT-1205', '顾温澜 / U-9981 / 信用分 96', '正常', '今天 11:30', '视频', '未命中风险，AI 自动通过', '5（风险）', '已上架'],
      ['CT-1204', '周南栀 / U-10944 / 信用分 58', '封禁', '今天 11:18', '图文', '导流风险 88%，人工裁定不通过', '/', '已下架']
    ];
    const communityFeedDetailsUpdated = {
      'CT-1208': {
        publisher: { nickname: '许知夏', userId: 'U-23317', creditScore: '94', route: 'user/detail.html?user=U-23317' },
        content: {
          text: '分享校园兼职报名经验：建议先确认任务时间、保险状态和线下面试地点，报名前记得看清楚结算方式。',
          images: [
            { id: 'CT-1208-img-1', label: '校园活动现场图片 1', note: '用户上传的第 1 张动态图片。' },
            { id: 'CT-1208-img-2', label: '任务报名截图 2', note: '用户上传的第 2 张动态图片。' },
            { id: 'CT-1208-img-3', label: '经验分享配图 3', note: '用户上传的第 3 张动态图片。' }
          ],
          videos: []
        },
        statusTag: 'tag-success',
        metrics: [
          { label: '上架方式', value: 'AI 自动上架', copy: 'AI 未命中风险，发布后自动进入动态信息流。' },
          { label: '发布时间', value: '12:08', copy: '列表按发布时间倒序展示。' },
          { label: '举报人数', value: '0', copy: '无风险标识。' },
          { label: '作者信用分', value: '94', copy: '账号状态正常。' }
        ],
        infoTitle: '动态内容',
        infoPairs: [
          ['完整图文内容', '分享校园兼职报名经验，含 3 张校园活动图片。'],
          ['AI 审核结果', '未命中低俗、导流、骚扰、虚假内容风险，自动上架。'],
          ['展示状态', '已进入动态信息流，用户可点赞、评论、关注和举报。'],
          ['人工操作', '已上架动态仍支持运营手动下架。']
        ],
        timeline: [
          { title: '12:08 用户发布动态', desc: '系统接收图文内容并进入 AI 审核。', time: '今天 12:08' },
          { title: '12:08 AI 自动通过', desc: '未命中风险，动态自动上架。', time: '今天 12:08' }
        ],
        relatedLinks: [
          { label: '查看用户详情', route: 'user/detail.html?user=U-23317' }
        ],
        formTitle: '手动处理',
        formFields: [
          { key: 'reviewDecision', label: '处理结果', type: 'select', options: ['保持上架', '手动下架'] },
          { key: 'offlineReason', label: '下架原因', type: 'select', options: ['举报风险', '运营判断', '导流风险', '低俗内容', '其他原因'] },
          { key: 'reviewReason', label: '处理说明', type: 'textarea', minHeight: 88, placeholder: '如需手动下架，记录下架原因和通知说明' }
        ],
        blockedActions: ['裁定上架'],
        blockedReason: '该动态已经上架，可在需要时手动下架。'
      },
      'CT-1207': {
        publisher: { nickname: '梁知白', userId: 'U-12766', creditScore: '86', route: 'user/detail.html?user=U-12766' },
        content: {
          text: '摄影修图接单经验分享，结尾口播“主页找我拿联系方式”。',
          images: [],
          videos: [
            { id: 'CT-1207-video-1', label: '摄影修图经验视频 00:25', note: '用户上传的视频，00:18 - 00:25 命中导流风险。' }
          ]
        },
        statusTag: 'tag-warning',
        warning: {
          title: 'AI 判定有风险',
          copy: 'AI 判定导流风险 92%，动态暂不上架，需要人工裁定通过后才可展示。'
        },
        metrics: [
          { label: 'AI 风险', value: '92%', copy: '导流风险，未自动上架。' },
          { label: '举报状态', value: '不可举报', copy: '动态未上架，不会出现在动态流。' },
          { label: '当前状态', value: '待人工裁定', copy: '裁定上架后才进入信息流。' },
          { label: '作者信用分', value: '86', copy: '账号基础状态正常。' }
        ],
        infoTitle: '内容与作者信息',
        infoPairs: [
          ['完整视频内容', '视频展示摄影修图接单经验，结尾出现“主页找我拿联系方式”。'],
          ['AI 审核结果', '导流风险 92%，系统拦截上架并进入人工裁定。'],
          ['举报情况', '未上架动态不会出现在动态流，因此没有用户举报人数和举报详情。'],
          ['裁定规则', '人工判定合规可上架；判定违规则不予上架并记录原因。']
        ],
        evidenceTitle: 'AI 风险证据',
        evidences: [
          { title: '视频片段', desc: '00:18 - 00:25 命中导流话术，需人工确认是否构成站外交易引导。' },
          { title: '裁定依据', desc: '待人工确认该引导是否属于站外交易风险；未上架阶段不展示举报证据。' }
        ],
        timeline: [
          { title: '11:56 用户发布动态', desc: '视频上传完成，进入 AI 审核。', time: '今天 11:56' },
          { title: '11:57 AI 拦截', desc: '导流风险 92%，等待人工裁定。', time: '今天 11:57' }
        ],
        relatedLinks: [
          { label: '查看用户详情', route: 'user/detail.html?user=U-12766' }
        ],
        formTitle: '人工裁定',
        formFields: [
          { key: 'reviewDecision', label: '裁定结果', type: 'select', options: ['裁定上架', '不予上架 / 下架'] },
          { key: 'riskType', label: '风险类型', type: 'select', options: ['导流风险', '低俗内容', '骚扰投诉', '虚假内容', '其他风险'] },
          { key: 'reviewReason', label: '裁定说明', type: 'textarea', minHeight: 88, placeholder: '记录判定依据、是否允许上架以及通知说明' }
        ],
        metaNotes: [
          'AI 判定有风险时不自动上架，必须人工裁定后才可展示。',
          '人工裁定通过后状态变为已上架；裁定不通过则变为已下架。'
        ]
      },
      'CT-1206': {
        publisher: { nickname: '宋清和', userId: 'U-11809', creditScore: '64', route: 'user/detail.html?user=U-11809' },
        content: {
          text: '正文包含暗示性邀约和私聊引导，AI 判定需人工裁定后才可上架。',
          images: [
            { id: 'CT-1206-img-1', label: '动态正文截图 1', note: '用户上传的第 1 张动态图片。' },
            { id: 'CT-1206-img-2', label: '聊天引导配图 2', note: '用户上传的第 2 张动态图片。' }
          ],
          videos: []
        },
        statusTag: 'tag-warning',
        warning: {
          title: 'AI 判定有风险',
          copy: '动态未上架，不会在动态流展示，因此没有用户举报人数和举报风险标识。'
        },
        metrics: [
          { label: '举报状态', value: '不可举报', copy: '待人工裁定动态未进入动态流。' },
          { label: 'AI 风险', value: '86%', copy: '骚扰暗示，需人工裁定。' },
          { label: '当前状态', value: '待人工裁定', copy: '暂未上架展示。' },
          { label: '作者信用分', value: '64', copy: '接近 60 分限制线。' }
        ],
        infoTitle: '内容与作者信息',
        infoPairs: [
          ['完整图文内容', '正文使用暗示性邀约文案，并引导私聊。'],
          ['AI 审核结果', '骚扰暗示 86%，系统拦截上架。'],
          ['举报情况', '未上架动态不会在动态流曝光，用户无法看到也无法举报。'],
          ['裁定规则', '人工裁定通过后才上架；上架后若举报人数过多才展示风险标识。']
        ],
        evidenceTitle: 'AI 风险证据',
        evidences: [
          { title: 'AI 命中片段', desc: '正文中的暗示性邀约文案命中骚扰风险模型。' },
          { title: '历史参考', desc: '作者近 30 天有 3 条已上架动态被举报，供人工裁定参考；本动态本身无举报。' }
        ],
        timeline: [
          { title: '11:42 用户发布动态', desc: '图文内容进入 AI 审核。', time: '今天 11:42' },
          { title: '11:43 AI 拦截', desc: '骚扰暗示 86%，暂不上架，等待人工裁定。', time: '今天 11:43' }
        ],
        relatedLinks: [
          { label: '查看用户详情', route: 'user/detail.html?user=U-11809' }
        ],
        formTitle: '人工裁定',
        formFields: [
          { key: 'reviewDecision', label: '裁定结果', type: 'select', options: ['不予上架 / 下架', '裁定上架'] },
          { key: 'riskType', label: '风险类型', type: 'select', options: ['骚扰投诉', '导流风险', '低俗内容', '虚假内容', '其他风险'] },
          { key: 'reviewReason', label: '裁定说明', type: 'textarea', minHeight: 88, placeholder: '记录举报过多时的人工判断依据' }
        ],
        metaNotes: [
          '待人工裁定动态未上架，因此不展示举报人数或举报详情。',
          '人工裁定通过后动态才进入动态流，后续才可能产生用户举报。'
        ]
      },
      'CT-1205': {
        publisher: { nickname: '顾温澜', userId: 'U-9981', creditScore: '96', route: 'user/detail.html?user=U-9981' },
        content: {
          text: '校园摄影任务经验分享，内容已上架；当前举报人数达到 5 人，列表展示风险标识。',
          images: [
            { id: 'CT-1205-img-1', label: '摄影任务封面图片', note: '视频封面与动态配图。' }
          ],
          videos: [
            { id: 'CT-1205-video-1', label: '校园摄影任务经验视频 00:42', note: '用户上传的视频，AI 未命中硬违规。' }
          ]
        },
        statusTag: 'tag-danger',
        warning: {
          title: '已上架动态举报较多',
          copy: '该动态已由 AI 自动上架，但举报人数达到 5 人，列表展示风险标识，运营可手动下架。'
        },
        metrics: [
          { label: '上架方式', value: 'AI 自动上架', copy: 'AI 未命中风险，已进入信息流。' },
          { label: '举报人数', value: '5', copy: '超过阈值，显示风险标识。' },
          { label: '当前状态', value: '已上架', copy: '可手动下架。' },
          { label: '互动率', value: '8.6%', copy: '内容曝光正常。' }
        ],
        infoTitle: '内容与作者信息',
        infoPairs: [
          ['完整视频内容', '分享校园摄影任务经验，无明显违规词。'],
          ['AI 审核结果', '未命中风险，自动上架。'],
          ['举报情况', '5 名用户举报“广告过多/疑似软广”，需运营关注。'],
          ['人工操作', '已上架动态可以手动下架，下架后从信息流移除。']
        ],
        evidenceTitle: '举报详情',
        evidences: [
          { title: '举报说明', desc: '举报集中在“疑似推广”和“内容重复”，未命中低俗或骚扰。' },
          { title: 'AI 复查', desc: '二次复查仍未命中硬违规，可由运营结合举报说明决定是否下架。' }
        ],
        timeline: [
          { title: '11:30 用户发布动态', desc: '视频上传完成。', time: '今天 11:30' },
          { title: '11:30 AI 自动上架', desc: '未命中风险，进入动态信息流。', time: '今天 11:30' },
          { title: '11:46 举报风险标识', desc: '举报人数达到 5 人，列表展示风险标识。', time: '今天 11:46' }
        ],
        relatedLinks: [
          { label: '查看用户详情', route: 'user/detail.html?user=U-9981' },
          { label: '查看举报详情', route: 'risk/report-detail.html?record=RP-6018' }
        ],
        formTitle: '人工处理',
        formFields: [
          { key: 'reviewDecision', label: '处理结果', type: 'select', options: ['保持上架', '手动下架'] },
          { key: 'offlineReason', label: '下架原因', type: 'select', options: ['举报风险', '运营判断', '导流风险', '低俗内容', '其他原因'] },
          { key: 'reviewReason', label: '处理说明', type: 'textarea', minHeight: 88, placeholder: '记录是否因举报过多而手动下架' }
        ],
        blockedActions: ['裁定上架'],
        blockedReason: '该动态已经上架，可根据举报情况手动下架。'
      },
      'CT-1204': {
        publisher: { nickname: '周南栀', userId: 'U-10944', creditScore: '58', route: 'user/detail.html?user=U-10944' },
        content: {
          text: '配文包含站外群二维码和私聊引导，人工裁定不通过后未进入动态流。',
          images: [
            { id: 'CT-1204-img-1', label: '站外群二维码图片', note: '用户上传的第 1 张动态图片。' },
            { id: 'CT-1204-img-2', label: '私聊引导配图', note: '用户上传的第 2 张动态图片。' }
          ],
          videos: []
        },
        statusTag: 'tag-warning',
        metrics: [
          { label: '当前状态', value: '已下架', copy: '人工裁定不通过，未进入信息流。' },
          { label: 'AI 风险', value: '88%', copy: '导流风险。' },
          { label: '举报状态', value: '不可举报', copy: '人工裁定不通过，未进入动态流。' },
          { label: '通知状态', value: '已通知', copy: '作者已收到不予上架说明。' }
        ],
        infoPairs: [
          ['完整图文内容', '配文包含站外群二维码和私聊引导。'],
          ['AI 审核结果', '导流风险 88%，进入人工裁定。'],
          ['人工结论', '裁定不通过，动态不予上架并从 C 端不可见。'],
          ['作者通知', '已发送站内信，包含原因和申诉入口。']
        ],
        formTitle: '复核处理',
        formFields: [
          { key: 'reviewDecision', label: '复核结果', type: 'select', options: ['保持下架', '重新裁定上架'] },
          { key: 'reviewReason', label: '复核说明', type: 'textarea', minHeight: 88, placeholder: '记录是否重新上架，以及复核依据' }
        ],
        blockedActions: ['下架 / 不予上架'],
        blockedReason: '该动态已下架；如复核改判，可重新裁定上架。'
      }
    };

    const announcementEnhancedColumns = ['公告ID', '标题', '公告类型', '目标用户群', '推送渠道', '发布时间', '当前状态', '推送人数', '点击人数', '点击率'];
    const createdAnnouncementRows = AdminStore.get('extended_created_announcement_rows', []).map(row => (
      row.length >= 10 ? row : [row[0], row[1], row[2], row[3], row[4], row[5], row[6], '-', '-', row[8] || '-']
    ));
    const announcementEnhancedRows = [
      ...createdAnnouncementRows,
      ['AN-300', '开学季任务安全提示', '全局公告', '全部用户', '小程序订阅消息（微信） / 平台系统消息（消息页）', '今天 12:00', '推送中', '36,200', '3,041', '8.4%'],
      ['AN-301', '五一期间客服响应说明', '定向推送', '全部用户', '小程序订阅消息（微信） / 短信（关键通知） / 平台系统消息（消息页）', '2026-05-20 18:00 至 2026-05-21 23:59', '草稿', '84,000', '-', '-'],
      ['AN-304', '保险到期提醒', '定向推送', '特定认证状态：服务者已认证', '平台系统消息（消息页）', '2026-05-20 20:00 至 2026-05-21 23:59', '待开始', '-', '-', '-'],
      ['AN-298', '陪诊类任务安全提醒', '定向推送', '生活服务用户', '小程序订阅消息（微信） / 平台系统消息（消息页）', '昨天 18:30', '自动结束', '12,800', '1,587', '12.4%'],
      ['AN-293', '新手接单规则更新', '全局公告', '服务者', '消息页 / 横幅', '前天 16:20', '手动结束', '23,400', '2,246', '9.6%']
    ];
    const announcementDetails = {
      'AN-300': {
        statusTag: 'tag-info',
        metrics: [
          { label: '推送人数', value: '36,200', copy: '已拆分为 4 个批次推送。' },
          { label: '点击人数', value: '3,041', copy: '点击率 8.4%。' },
          { label: '点击率', value: '8.4%', copy: '点击公告详情或行动按钮的比例。' },
          { label: '失败率', value: '3.1%', copy: '未触发短信失败告警。' }
        ],
        infoTitle: '公告内容与圈选条件',
        infoPairs: [
          ['富文本内容', '开学季发布与接单安全提示，包含任务核验、线下见面和客服入口。'],
          ['目标用户圈选', '全部用户，排除已注销和已封禁账号。'],
          ['预览效果', '首页弹窗 + 消息页卡片；用户需确认后关闭。'],
          ['失败原因', '主要为订阅消息授权过期，未触发短信失败告警。']
        ],
        evidenceTitle: '推送结果明细',
        evidences: [
          { title: '批次 1-3', desc: '发送成功率 97.8%，失败原因主要为订阅消息授权过期。' },
          { title: '批次 4', desc: '推送中，目标 6,200 人，预计 12:20 完成。' }
        ],
        timeline: [
          { title: '09:40 创建公告', desc: '运营专员完成文案与目标人群配置。', time: '今天 09:40' },
          { title: '12:00 开始推送', desc: '按 1 万人 / 批次拆分。', time: '今天 12:00' },
          { title: '当前推送中', desc: '未触发短信失败率 >10% 告警。', time: '今天 12:16' }
        ],
        formTitle: '公告配置',
        formFields: [
          { key: 'announcementTitle', label: '标题', defaultValue: '开学季任务安全提示', placeholder: '请输入公告标题' },
          { key: 'displayWindow', label: '展示时间范围', defaultValue: '2026-05-07 12:00 至 2026-05-14 23:59', placeholder: '设置开始和结束时间' },
          { key: 'targetSegment', label: '目标用户群', type: 'select', options: ['全部用户', '特定城市', '特定认证状态', '指定ID列表'] },
          { key: 'pushChannel', label: '推送渠道', type: 'select', options: ['订阅消息 / 系统消息', '订阅消息 / 短信 / 系统消息', '系统消息'] },
          { key: 'contentBody', label: '富文本内容', type: 'textarea', minHeight: 112, placeholder: '维护公告正文、按钮和规则链接' }
        ],
        metaNotes: [
          '推送目标用户数超过 10 万时需自动拆分，每批 1 万人。',
          '短信推送失败率超过 10% 时触发告警并检查备用通道。'
        ]
      },
      'AN-301': {
        statusTag: 'tag-warning',
        metrics: [
          { label: '推送人数', value: '84,000', copy: '预计目标用户数，发布后按批次推送。' },
          { label: '点击人数', value: '-', copy: '草稿未推送，暂无点击数据。' },
          { label: '点击率', value: '-', copy: '发布并推送后统计。' },
          { label: '失败率', value: '-', copy: '草稿未推送，暂无失败数据。' }
        ],
        infoTitle: '公告内容与圈选条件',
        infoPairs: [
          ['公告目的', '在节假日前同步客服响应时效与高峰期处理说明。'],
          ['富文本内容', '标题 + 正文摘要 + 客服入口按钮 + 规则说明链接。'],
          ['目标用户圈选', '全部用户，排除已注销账号和封禁账号。'],
          ['预览效果', '首页弹窗、消息页、横幅三种展示方式均已预览。']
        ],
        evidenceTitle: '模板与推送校验',
        evidences: [
          { title: '推送校验', desc: '目标用户、展示时间和推送渠道待发布前确认。' },
          { title: '互斥展示位检查', desc: '首页弹窗 18:00 - 22:00 无冲突，横幅与安全提醒公告存在 10 分钟重叠，发布前需确认。' }
        ],
        timeline: [
          { title: '10:20 创建公告任务', desc: '运营专员已完成文案录入。', time: '今天 10:20' },
          { title: '10:42 完成审核', desc: '内容审核通过，等待发送窗口。', time: '今天 10:42' },
          { title: '当前草稿', desc: '发布前可继续调整展示时间、目标用户和推送渠道。', time: '今天 11:35' }
        ],
        relatedLinks: [
          { label: '查看广告位配置', route: 'community/ads.html' },
          { label: '查看反馈工单', route: 'support/feedback.html' }
        ],
        formTitle: '公告配置',
        formFields: [
          { key: 'announcementTitle', label: '标题', defaultValue: '五一期间客服响应说明', placeholder: '请输入公告标题' },
          { key: 'displayWindow', label: '展示时间范围', defaultValue: '2026-05-07 18:00 至 2026-05-08 23:59', placeholder: '设置开始和结束时间' },
          { key: 'targetSegment', label: '目标用户群', type: 'select', options: ['全部用户', '特定城市', '特定认证状态', '指定ID列表'] },
          { key: 'pushChannel', label: '推送渠道', type: 'select', options: ['订阅消息 / 短信 / 系统消息', '订阅消息 / 系统消息', '系统消息'] },
          { key: 'contentBody', label: '富文本内容', type: 'textarea', minHeight: 112, placeholder: '维护公告正文、按钮和规则链接' }
        ],
        metaNotes: [
          '状态流转：草稿 → 待开始 → 推送中 → 自动结束 / 手动结束 → 查看效果数据。',
          '不支持批量立即发送，避免误触大量用户。'
        ]
      },
      'AN-304': {
        statusTag: 'tag-warning',
        metrics: [
          { label: '推送人数', value: '-', copy: '目标用户圈选后自动预估。' },
          { label: '点击人数', value: '-', copy: '待开始状态暂无点击数据。' },
          { label: '点击率', value: '-', copy: '发布并推送后统计。' },
          { label: '失败率', value: '-', copy: '待开始状态暂无失败数据。' }
        ],
        infoPairs: [
          ['富文本内容', '保险到期提醒正文已保存，等待计划时间开始推送。'],
          ['目标用户圈选', '服务者已认证用户，排除注销与封禁账号。'],
          ['推送校验', '目标用户和推送渠道已保存，待开始状态可发布或提前结束。'],
          ['结束规则', '待开始状态可提前结束为手动结束。']
        ],
        formTitle: '公告配置',
        formFields: [
          { key: 'announcementTitle', label: '标题', defaultValue: '保险到期提醒模板', placeholder: '请输入公告标题' },
          { key: 'displayWindow', label: '展示时间范围', defaultValue: '未设置', placeholder: '设置开始和结束时间' },
          { key: 'targetSegment', label: '目标用户群', type: 'select', options: ['特定认证状态', '全部用户', '特定城市', '指定ID列表'] },
          { key: 'pushChannel', label: '推送渠道', type: 'select', options: ['系统消息', '订阅消息 / 系统消息', '订阅消息 / 短信 / 系统消息'] },
          { key: 'contentBody', label: '富文本内容', type: 'textarea', minHeight: 112, placeholder: '维护模板正文' }
        ]
      },
      'AN-298': {
        statusTag: 'tag-success',
        metrics: [
          { label: '推送人数', value: '12,800', copy: '发送成功率 98.7%。' },
          { label: '点击人数', value: '1,587', copy: '点击安全提醒详情的人数。' },
          { label: '点击率', value: '12.4%', copy: '用户点击安全提醒详情的比例。' },
          { label: '失败率', value: '1.3%', copy: '主要为订阅授权过期。' }
        ],
        infoPairs: [
          ['富文本内容', '陪诊类任务安全提醒，包含医院陪同、隐私保护和异常反馈入口。'],
          ['目标用户圈选', '生活服务用户，近 30 天浏览或发布陪诊类任务。'],
          ['推送结果明细', '失败 273 人，主要为订阅授权过期和手机号不可达。'],
          ['删除规则', '推送中和结束公告不允许物理删除，仅允许查看效果数据。']
        ],
        blockedActions: ['启用', '发布', '删除'],
        blockedReason: '公告已自动结束，不能回到未发布状态，也不能物理删除。'
      },
      'AN-293': {
        statusTag: 'tag-info',
        metrics: [
          { label: '推送人数', value: '23,400', copy: '服务者人群定向推送。' },
          { label: '点击人数', value: '2,246', copy: '点击新手规则详情的人数。' },
          { label: '点击率', value: '9.6%', copy: '点击新手规则详情。' },
          { label: '失败率', value: '2.1%', copy: '失败用户已进入结果明细。' }
        ],
        infoPairs: [
          ['富文本内容', '新手接单规则更新，说明接单限制、信用分影响和客服入口。'],
          ['展示结果', '消息页和横幅均已结束展示。'],
          ['归档策略', '结束后保留推送效果数据和操作日志。'],
          ['推送结果', '保留推送人数、点击人数、点击率和失败率。']
        ],
        blockedActions: ['启用', '发布', '删除', '提前结束'],
        blockedReason: '公告已手动结束，仅允许查看效果数据、导出结果或复制为新模板。'
      }
    };

    const adColumns = ['广告ID', '广告标题', '展示位置', '跳转类型', '展示时间', '排列顺序', '当前状态', '点击次数', '点击率'];
    const createdAdRows = AdminStore.get('extended_created_ad_rows', []).map(row => {
      if (row.length >= 10) {
        return [row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[8], row[9]];
      }
      return row;
    });
    const adRows = [
      ...createdAdRows,
      ['AD-701', '新人实名认证引导', '首页轮播 Banner', '内部路径', '2026-05-01 00:00 至 2026-05-15 23:59', '1', '生效中', '8,732', '6.8%'],
      ['AD-704', '开学季安全任务专题', '首页轮播 Banner', '内部路径', '2026-05-09 08:00 至 2026-05-20 23:59', '2', '待生效', '0', '-'],
      ['AD-698', '校园活动弹窗', '弹窗', '外部H5 URL', '2026-04-20 09:00 至 2026-05-06 23:59', '1', '自动结束', '3,462', '5.4%'],
      ['AD-708', '陪诊安全提醒弹窗', '弹窗', '内部路径', '未设置', '待配置', '草稿', '0', '-']
    ];
    const adDetails = {
      'AD-701': {
        statusTag: 'tag-success',
        metrics: [
          { label: '点击次数', value: '8,732', copy: '点击率 6.8%。' },
          { label: '点击率', value: '6.8%', copy: '首页轮播第 1 位。' }
        ],
        infoTitle: '广告配置与预览',
        infoPairs: [
          ['广告图片', 'CDN: /banner/realname-guide-750x300.png，Banner 建议尺寸 750x300px。'],
          ['跳转目标', '内部路径 APP/auth-center.html，打开实名认证引导。'],
          ['投放时段', '2026-05-01 00:00 至 2026-05-15 23:59，精确到分钟。'],
          ['冲突检测', '首页轮播 Banner 最多同时 3 条活跃广告，当前已满员。']
        ],
        formTitle: '广告位规则',
        formFields: [
          { key: 'adTitle', label: '广告标题', defaultValue: '新人实名认证引导', placeholder: '请输入广告标题' },
          { key: 'adImage', label: '广告图片', type: 'image-upload', defaultValue: '/banner/realname-guide-750x300.png', placeholder: 'Banner 750x300px；弹窗 600x800px' },
          { key: 'jumpType', label: '跳转类型', type: 'select', options: ['内部路径', '外部H5 URL'] },
          { key: 'jumpTarget', label: '跳转目标', defaultValue: 'APP/auth-center.html', placeholder: '填写内部路径或 H5 URL' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range', defaultValue: '2026-05-01 00:00 至 2026-05-15 23:59' },
          { key: 'sortOrder', label: '排列顺序', defaultValue: '1', placeholder: '填写轮播顺序' },
          { key: 'carouselInterval', label: '轮播间隔', defaultValue: '3 秒', placeholder: '默认 3 秒，可配置' }
        ],
        metaNotes: [
          '草稿启用后进入待生效，可立即生效；C 端实时拉取广告配置，无需重启。',
          '已投放广告不允许物理删除，仅允许结束、失效或归档。'
        ]
      },
      'AD-704': {
        statusTag: 'tag-warning',
        metrics: [
          { label: '当前状态', value: '待生效', copy: '到达开始时间后自动展示。' },
          { label: '展示位置', value: '首页轮播', copy: '排在第 2 位。' },
          { label: '素材状态', value: '已上传', copy: '图片尺寸符合 Banner 750x300px。' },
          { label: '冲突检测', value: '通过', copy: '待生效时段不超过 3 条活跃广告。' }
        ],
        infoPairs: [
          ['广告图片', 'CDN: /banner/school-season-safety-750x300.png。'],
          ['跳转目标', '内部路径 APP/safety-notice.html。'],
          ['投放时段', '2026-05-09 08:00 至 2026-05-20 23:59。'],
          ['预览效果', '可预览首页轮播效果及同时段冲突占用情况。']
        ],
        formTitle: '广告位规则',
        formFields: [
          { key: 'adTitle', label: '广告标题', defaultValue: '开学季安全任务专题', placeholder: '请输入广告标题' },
          { key: 'adImage', label: '广告图片', type: 'image-upload', defaultValue: '/banner/school-season-safety-750x300.png', placeholder: 'Banner 750x300px；弹窗 600x800px' },
          { key: 'jumpType', label: '跳转类型', type: 'select', options: ['内部路径', '外部H5 URL'] },
          { key: 'jumpTarget', label: '跳转目标', defaultValue: 'APP/safety-notice.html', placeholder: '填写内部路径或 H5 URL' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range', defaultValue: '2026-05-09 08:00 至 2026-05-20 23:59' },
          { key: 'sortOrder', label: '排列顺序', defaultValue: '2', placeholder: '填写轮播顺序' },
          { key: 'carouselInterval', label: '轮播间隔', defaultValue: '3 秒', placeholder: '默认 3 秒，可配置' }
        ]
      },
      'AD-698': {
        statusTag: 'tag-info',
        metrics: [
          { label: '点击次数', value: '3,462', copy: '点击率 5.4%。' },
          { label: '点击率', value: '5.4%', copy: '自动结束弹窗广告保留效果数据。' }
        ],
        infoPairs: [
          ['广告图片', 'CDN: /popup/campus-activity-600x800.png，弹窗建议尺寸 600x800px。'],
          ['跳转目标', '外部 H5 URL，活动页已下线。'],
          ['投放时段', '2026-04-20 09:00 至 2026-05-06 23:59。'],
          ['弹窗展示', '同时间段可与其他弹窗组成滑动队列，C 端左右滑动切换。']
        ],
        blockedActions: ['启用', '立即生效', '结束投放', '删除'],
        blockedReason: '广告已自动结束，仅允许查看。'
      },
      'AD-708': {
        statusTag: 'tag-warning',
        metrics: [
          { label: '当前状态', value: '草稿', copy: '草稿支持删除。' },
          { label: '展示位置', value: '弹窗', copy: '同一时间最多 3 个弹窗。' },
          { label: '图片状态', value: '待上传', copy: '弹窗建议尺寸 600x800px。' },
          { label: '展示时间', value: '未设置', copy: '启用前必须补齐。' },
          { label: '跳转目标', value: '待配置', copy: '内部路径或外部 H5 URL。' }
        ],
        infoPairs: [
          ['广告图片', '待上传，若图片上传失败可保存草稿；弹窗建议尺寸 600x800px。'],
          ['跳转目标', '待配置。'],
          ['投放时段', '未设置。'],
          ['弹窗规则', '同一时间最多 3 个弹窗，C 端按弹窗队列滑动切换。']
        ],
        formTitle: '广告位规则',
        formFields: [
          { key: 'adTitle', label: '广告标题', defaultValue: '陪诊安全提醒横幅', placeholder: '请输入广告标题' },
          { key: 'adImage', label: '广告图片', type: 'image-upload', defaultValue: '', placeholder: 'Banner 750x300px；弹窗 600x800px' },
          { key: 'jumpType', label: '跳转类型', type: 'select', options: ['内部路径', '外部H5 URL'] },
          { key: 'jumpTarget', label: '跳转目标', defaultValue: '', placeholder: '填写内部路径或 H5 URL' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range', defaultValue: '' },
          { key: 'sortOrder', label: '排列顺序', defaultValue: '', placeholder: '填写轮播顺序' },
          { key: 'carouselInterval', label: '轮播间隔', defaultValue: '3 秒', placeholder: '默认 3 秒，可配置' }
        ]
      }
    };

    const insuranceProductEnhancedColumns = ['产品ID', '产品名称', '适用类目', '费率', '理赔电话', '退款规则', '投放状态', '更新时间'];
    const insuranceProductEnhancedRows = [
      ['IP-001', '基础意外险', '体能 / 生活 / 陪伴', '¥2-5', '400-800-1001', '服务前可退', '启用中', '今天 09:18'],
      ['IP-007', '活动险', '活动协助类', '¥5-8', '400-800-1007', '投保失败可退', '启用中', '昨天 17:42'],
      ['IP-011', '高风险临时险', '高风险任务', '¥12+', '400-800-1011', '按保司回执', '灰度中', '前天 15:30']
    ];
    const insuranceProductDetails = {
      'IP-001': {
        statusTag: 'tag-success',
        metrics: [
          { label: '费率区间', value: '¥2-5', copy: '根据类目和风险级别动态选择。' },
          { label: '覆盖类目', value: '3 类', copy: '体能 / 生活 / 陪伴服务。' },
          { label: '启用状态', value: '启用中', copy: '当前已在主链路投放。' },
          { label: '关联保单', value: '1.2w', copy: '本月已投保单量。' }
        ],
        infoPairs: [
          ['保司同步', '产品编码与保司侧保持同步，回执链路正常。'],
          ['费率说明', '普通风险任务采用基础费率，高风险类目会自动抬升。'],
          ['理赔电话', '400-800-1001，C 端帮助中心和保险理赔入口展示。'],
          ['保险退款', '服务开始前取消可退；服务开始后按保司回执和订单裁定结果处理。'],
          ['关联财务', '保单结果会回写到保险费管理与订单详情。'],
          ['投放策略', '默认全量启用，异常时可切换灰度或暂停。']
        ],
        evidences: [
          { title: '保司编码', desc: 'carrier_code: INS-BASIC-001；最近一次校验通过。' },
          { title: '关联对账', desc: '本月已在保费流水中关联 1.2w 条记录。' }
        ],
        timeline: [
          { title: '09:18 完成配置同步', desc: '最新费率与类目映射已更新。', time: '今天 09:18' },
          { title: '09:32 首批投放完成', desc: '抽样订单投保成功率正常。', time: '今天 09:32' }
        ],
        relatedLinks: [
          { label: '查看保费列表', route: 'finance/insurance-fee.html' },
          { label: '查看保费管理', route: 'finance/insurance-fee.html' }
        ],
        formTitle: '投放设置',
        formFields: [
          { key: 'carrierOwner', label: '配置负责人', type: 'select', options: ['保险运营 A', '保险运营 B', '平台管理员'] },
          { key: 'claimPhone', label: '理赔电话', defaultValue: '400-800-1001', placeholder: '请输入保险公司理赔热线' },
          { key: 'refundPolicy', label: '退款条件说明', type: 'textarea', minHeight: 88, placeholder: '说明服务前取消、强制关闭、投保失败等场景是否可退' },
          { key: 'carrierNote', label: '投放说明', type: 'textarea', minHeight: 88, placeholder: '记录费率调整、保司限制或投放变更说明' }
        ]
      },
      'IP-011': {
        statusTag: 'tag-warning',
        warning: {
          title: '高风险产品灰度中',
          copy: '当前仅针对高风险任务小流量开放，需继续观察投保成功率和成本。'
        },
        metrics: [
          { label: '灰度比例', value: '15%', copy: '当前仅部分任务类目可见。' },
          { label: '费率', value: '¥12+', copy: '高风险类目费率显著更高。' },
          { label: '异常回执', value: '2 条', copy: '最近 24 小时有 2 条保司待确认回执。' },
          { label: '预算影响', value: '+18%', copy: '平台补贴成本有所上升。' }
        ]
      }
    };

    if (currentPath === 'community/feed-review.html') {
      return this.createListConfig({
        listPath: 'community/feed-review.html',
        label: '动态审核',
        tableTitle: '用户动态审核',
        columns: communityFeedColumns,
        rows: communityFeedRows,
        exportLabel: '导出审核记录',
        detailRoute: 'community/feed-detail.html',
        statusIndex: 7,
        selectable: true,
        bulkItemName: '动态',
        bulkHint: '同内容类型、同违规原因的动态可批量处理，最多 20 条 / 批。',
        bulkActions: [
          { label: '批量裁定上架', action: 'approve' },
          { label: '批量不予上架', action: 'reject' },
          { label: '批量手动下架', action: 'offline', danger: true }
        ],
        filterFields: [
          { type: 'text', columnIndex: 0, placeholder: '内容ID', style: 'min-width:140px;' },
          { type: 'text', columnIndex: 1, placeholder: '作者ID', style: 'min-width:140px;' },
          { type: 'text', columnIndex: 1, placeholder: '作者昵称', style: 'min-width:140px;' },
          { type: 'select', columnIndex: 2, style: 'min-width:130px;', options: [{ label: '全部账号状态', active: true }, { label: '正常' }, { label: '受限' }, { label: '封禁' }, { label: '注销' }] },
          { type: 'text', columnIndex: 3, placeholder: '发布时间起', style: 'min-width:140px;' },
          { type: 'text', columnIndex: 3, placeholder: '发布时间止', style: 'min-width:140px;' },
          { type: 'select', columnIndex: 5, style: 'min-width:160px;', options: [{ label: '全部 AI 结果', active: true }, { label: 'AI 自动通过' }, { label: '导流风险' }, { label: '骚扰暗示' }] },
          { type: 'select', columnIndex: 6, style: 'min-width:170px;', options: [{ label: '全部举报状态', active: true }, { label: '风险' }, { label: '0' }, { label: '未上架，不可举报' }] },
          { type: 'select', columnIndex: 7, style: 'min-width:150px;', options: [{ label: '全部状态', active: true }, { label: '已上架' }, { label: '待人工裁定' }, { label: '已下架' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '查看', route: `community/feed-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '待人工裁定') {
            actions.push({
              label: '裁定上架',
              kind: 'update-record-status',
              recordRoute: 'community/feed-review.html',
              recordId,
              nextStatus: '已上架',
              message: '动态已裁定上架'
            });
            actions.push({
              label: '不予上架',
              kind: 'update-record-status',
              recordRoute: 'community/feed-review.html',
              recordId,
              nextStatus: '已下架',
              message: '动态已标记为不予上架，原因将推送给用户'
            });
          }
          if (status === '已上架') {
            actions.push({
              label: '手动下架',
              kind: 'update-record-status',
              recordRoute: 'community/feed-review.html',
              recordId,
              nextStatus: '已下架',
              message: '动态已手动下架，下架原因将推送给用户'
            });
          }
          if (status === '已下架') {
            actions.push({
              label: '重新裁定上架',
              kind: 'update-record-status',
              recordRoute: 'community/feed-review.html',
              recordId,
              nextStatus: '已上架',
              message: '动态已重新裁定上架'
            });
          }
          if (this.isCommunityFeedRiskRow(row)) {
            actions.push({
              label: '封禁发布者',
              kind: 'open-feed-publisher-ban',
              recordId,
              message: '打开发布者封禁操作'
            });
          }
          return actions;
        },
        footerNote: ''
      });
    }

    if (currentPath === 'community/feed-detail.html') {
      return {
        type: 'community-feed-detail',
        queryKey: 'record',
        parentRoute: 'community/feed-review.html',
        parentLabel: '动态审核',
        title: '动态详情',
        columns: communityFeedColumns,
        rows: communityFeedRows,
        statusIndex: 7,
        details: communityFeedDetailsUpdated
      };
    }

    if (currentPath === 'community/announcements.html') {
      return this.createListConfig({
        listPath: 'community/announcements.html',
        label: '公告与推送',
        tableTitle: '公告任务',
        columns: announcementEnhancedColumns,
        rows: announcementEnhancedRows,
        exportLabel: '导出公告任务',
        detailRoute: 'community/announcement-detail.html',
        statusIndex: 6,
        selectable: true,
        bulkItemName: '公告',
        bulkHint: '支持批量结束公告、批量导出推送结果；不支持批量立即发送。',
        bulkActions: [
          { label: '批量结束', kind: 'generic-list-bulk', action: 'status', nextStatus: '手动结束', message: '已批量结束所选公告' },
          { label: '批量导出结果', kind: 'generic-list-bulk', action: 'export', message: '所选公告推送结果导出任务已创建' }
        ],
        actions: [
          { label: '创建公告', kind: 'create-announcement', primary: true, message: '公告草稿已创建' }
        ],
        highlight: {
          label: '公告五态投放闭环',
          copy: '公告从草稿启用为待开始，到点或手动发布进入推送中，结束后区分自动结束和手动结束。',
          meta: '仅草稿可编辑'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索公告ID / 标题 / 创建人', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 4, options: [{ label: '全部渠道', active: true }, { label: '订阅消息' }, { label: '短信' }, { label: '系统消息' }] },
          { type: 'select', columnIndex: 6, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待开始' }, { label: '推送中' }, { label: '自动结束' }, { label: '手动结束' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[6];
          const actions = [{ label: '详情', route: `community/announcement-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'community/announcements.html', recordId, nextStatus: '待开始', message: '公告已启用并进入待开始' });
            actions.push({ label: '删除', kind: 'toast', message: '草稿可删除，推送中和结束公告不允许物理删除' });
          }
          if (status === '待开始') {
            actions.push({ label: '发布', kind: 'update-record-status', recordRoute: 'community/announcements.html', recordId, nextStatus: '推送中', message: '公告已发布并进入推送中' });
            actions.push({ label: '提前结束', kind: 'update-record-status', recordRoute: 'community/announcements.html', recordId, nextStatus: '手动结束', message: '公告已提前结束' });
          }
          if (status === '推送中') {
            actions.push({ label: '提前结束', kind: 'update-record-status', recordRoute: 'community/announcements.html', recordId, nextStatus: '手动结束', message: '公告已提前结束' });
          }
          return actions;
        },
        auditNotes: [
          '创建公告后需预览并设置推送时间，启用后进入待开始。',
          '推送中公告可提前结束为手动结束；到达结束时间自动转为自动结束。',
          '推送目标超过 10 万时拆分批次；短信失败率超过 10% 触发告警。',
          '公告命中互斥展示位时，发布前提示冲突公告并要求调整时段或位置。'
        ],
        footerNote: '公告与推送已对齐：草稿、待开始、推送中、自动结束和手动结束五态。'
      });
    }

    if (currentPath === 'community/announcement-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'community/announcements.html',
        parentLabel: '公告与推送',
        title: '公告详情',
        columns: announcementEnhancedColumns,
        rows: announcementEnhancedRows,
        statusIndex: 6,
        details: announcementDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideTimeline: true,
        hideEvidences: true,
        hideRelatedLinks: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        metricStatuses: ['推送中', '自动结束', '手动结束'],
        configSummaryFields: [
          { key: 'announcementTitle', label: '标题' },
          { key: 'announcementContent', label: '公告内容（富文本）' },
          { key: 'displayRange', label: '展示时间范围' },
          { key: 'targetGroup', label: '目标用户群' },
          { key: 'cityTargets', label: '城市圈选' },
          { key: 'authTargets', label: '认证状态圈选' },
          { key: 'pushChannels', label: '推送渠道' }
        ],
        detailToolbarNote: '公告详情/编辑页 · 公告配置 / 预览效果 / 推送结果',
        formTitle: '公告配置',
        saveLabel: '保存草稿',
        saveMessage: '公告配置已保存为草稿',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { key: 'announcementTitle', label: '标题', placeholder: '请输入公告标题' },
          { key: 'announcementContent', label: '公告内容（富文本）', type: 'textarea', minHeight: 120, placeholder: '填写公告正文、活动规则或关键通知内容' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range' },
          { key: 'targetGroup', label: '目标用户群', type: 'select', options: ['全部', '特定城市', '特定认证状态'] },
          { key: 'cityTargets', label: '选择城市（多选）', type: 'tag-multiselect', groups: [{ label: '东南', options: ['上海', '江苏', '浙江'] }, { label: '华南', options: ['广州', '深圳', '佛山'] }, { label: '西南', options: ['成都', '重庆', '昆明'] }], visibleWhen: { key: 'targetGroup', value: '特定城市' } },
          { key: 'authTargets', label: '选择认证状态（多选）', type: 'tag-multiselect', groups: [{ label: '认证状态', options: ['未认证', '学生认证中', '学生已认证', '服务者已认证'] }], visibleWhen: { key: 'targetGroup', value: '特定认证状态' } },
          { key: 'pushChannels', label: '推送渠道（多选）', type: 'tag-multiselect', groups: [{ label: '渠道', options: ['小程序订阅消息（微信）', '短信（关键通知）', '平台系统消息（消息页）'] }] }
        ],
        metaNotes: [
          '公告预览、灰度发送和归档留痕都在详情页完成，不与列表混放。',
          '发送后若触发大量咨询，可联动客服与反馈模块查看承接情况。'
        ],
        actions: [
          { label: '启用', status: '待开始', success: '公告已启用并进入待开始', primary: true, showStatuses: ['草稿'] },
          { label: '删除', kind: 'toast', message: '草稿可删除，推送中和结束公告不允许物理删除', showStatuses: ['草稿'] },
          { label: '发布', status: '推送中', success: '公告已发布并进入推送中', primary: true, showStatuses: ['待开始'] },
          { label: '提前结束', status: '手动结束', success: '公告已提前结束', showStatuses: ['待开始', '推送中'] }
        ]
      });
    }

    if (currentPath === 'community/ads.html') {
      return this.createListConfig({
        listPath: 'community/ads.html',
        label: '广告位配置',
        tableTitle: '广告位列表',
        columns: adColumns,
        rows: adRows,
        detailRoute: 'community/ad-detail.html',
        statusIndex: 6,
        selectable: true,
        bulkItemName: '广告位',
        bulkHint: '支持批量启用和批量结束；图片与跳转链接需逐条配置。',
        bulkActions: [
          { label: '批量启用', kind: 'generic-list-bulk', action: 'enable-ads', nextStatus: '生效中', message: '已批量启用所选广告位' },
          { label: '批量结束', kind: 'generic-list-bulk', action: 'status', nextStatus: '手动结束', message: '已批量结束所选广告位' }
        ],
        actions: [
          { label: '新增广告位', kind: 'create-ad', primary: true, message: '广告位草稿已创建' }
        ],
        highlight: {
          label: '广告实时生效与排期约束',
          copy: '广告配置启用后 C 端实时拉取，无需发版；首页轮播 Banner 和弹窗同一时段均最多 3 条，弹窗可滑动切换。',
          meta: 'Banner 750x300px / 弹窗 600x800px'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索广告ID / 标题 / 创建人', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 2, options: [{ label: '全部展示位置', active: true }, { label: '首页轮播 Banner' }, { label: '弹窗' }] },
          { type: 'select', columnIndex: 3, options: [{ label: '全部跳转类型', active: true }, { label: '内部路径' }, { label: '外部H5 URL' }] },
          { type: 'select', columnIndex: 6, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待生效' }, { label: '生效中' }, { label: '自动结束' }, { label: '手动结束' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[6];
          const actions = [{ label: '详情', route: `community/ad-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'community/ads.html', recordId, nextStatus: '待生效', message: '广告已启用，等待生效时间' });
            actions.push({ label: '删除', kind: 'toast', message: '草稿支持删除；已投放广告仅能结束或归档' });
          }
          if (status === '待生效') {
            actions.push({ label: '立即生效', kind: 'update-record-status', recordRoute: 'community/ads.html', recordId, nextStatus: '生效中', message: '广告已立即生效' });
            actions.push({ label: '结束投放', kind: 'update-record-status', recordRoute: 'community/ads.html', recordId, nextStatus: '手动结束', message: '广告已结束投放' });
          }
          if (status === '生效中') {
            actions.push({ label: '结束投放', kind: 'update-record-status', recordRoute: 'community/ads.html', recordId, nextStatus: '手动结束', message: '广告已结束投放' });
          }
          return actions;
        },
        auditNotes: [
          '首页轮播 Banner 和弹窗同一时间均最多 3 条活跃广告；弹窗在 C 端滑动切换。',
          '图片上传失败时提示重试并允许保存草稿；外部 H5 失效时点击展示暂时无法访问。',
          '只有草稿状态允许编辑；自动结束和手动结束仅允许查看。'
        ],
        footerNote: '广告位配置已对齐：状态筛选、排期、跳转类型、点击/点击率、实时生效和删除约束。'
      });
    }

    if (currentPath === 'community/ad-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'community/ads.html',
        parentLabel: '广告位配置',
        title: '广告详情',
        columns: adColumns,
        rows: adRows,
        statusIndex: 6,
        details: adDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        metricStatuses: ['生效中', '自动结束', '手动结束'],
        configSummaryFields: [
          { key: 'adTitle', label: '广告标题' },
          { key: 'adPosition', label: '展示位置' },
          { key: 'adImage', label: '广告图片' },
          { key: 'jumpType', label: '跳转类型' },
          { key: 'jumpTarget', label: '跳转目标' },
          { key: 'displayRange', label: '展示时间范围' },
          { key: 'sortOrder', label: '排列顺序' },
          { key: 'carouselInterval', label: '轮播间隔' }
        ],
        detailToolbarNote: '广告详情/编辑页 · 广告位规则 / 预览效果 / 投放状态',
        formTitle: '广告位规则',
        saveLabel: '保存配置',
        saveMessage: '广告配置已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { key: 'adTitle', label: '广告标题', placeholder: '请输入广告标题' },
          { key: 'adPosition', label: '展示位置', type: 'select', options: ['首页轮播 Banner', '弹窗'] },
          { key: 'adImage', label: '广告图片', type: 'image-upload', placeholder: '上传或填写 CDN 图片地址' },
          { key: 'jumpType', label: '跳转类型', type: 'select', options: ['内部路径', '外部H5 URL'] },
          { key: 'jumpTarget', label: '跳转目标', placeholder: '填写小程序内部路径或 H5 URL' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range' },
          { key: 'sortOrder', label: '排列顺序', placeholder: 'Banner 控制轮播顺序；弹窗控制滑动队列顺序' },
          { key: 'carouselInterval', label: '轮播间隔', placeholder: '默认 3 秒，可配置' }
        ],
        metaNotes: [
          '广告启用后立即生效，C 端实时拉取广告配置，无需重启或发版。',
          '启用前需要检查展示位置、时间范围、图片尺寸和跳转目标有效性；弹窗同一时段最多 3 条。'
        ],
        actions: [
          { label: '启用', status: '待生效', success: '广告已启用，等待生效时间', primary: true, showStatuses: ['草稿'] },
          { label: '删除', kind: 'toast', message: '草稿支持删除；已投放广告仅能结束或归档', showStatuses: ['草稿'] },
          { label: '立即生效', status: '生效中', success: '广告已立即生效', primary: true, showStatuses: ['待生效'] },
          { label: '结束投放', status: '手动结束', success: '广告已结束投放', showStatuses: ['待生效', '生效中'] }
        ]
      });
    }

    if (currentPath === 'ops/coupons.html') {
      return this.createListConfig({
        listPath: 'ops/coupons.html',
        label: '优惠券配置',
        tableTitle: '优惠券配置列表',
        columns: couponColumns,
        rows: couponRows,
        details: couponDetails,
        detailRoute: 'ops/coupon-detail.html',
        statusIndex: 7,
        actions: [
          { label: '新建优惠券', kind: 'create-coupon-config', primary: true }
        ],
        filterFields: [
          { type: 'text', placeholder: '搜索优惠券名称 / 使用范围', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 2, options: [{ label: '全部优惠类型', active: true }, { label: '满减' }, { label: '折扣' }, { label: '立减' }] },
          { type: 'select', columnIndex: 7, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '已启用' }, { label: '已停用' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '详情', route: `ops/coupon-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status !== '草稿') {
            actions.push({ label: '发放明细', kind: 'open-settlement-table', recordId, detailKey: 'issueDetails' });
          }
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'ops/coupons.html', recordId, nextStatus: '已启用', message: '优惠券已启用' });
            actions.push({ label: '删除', kind: 'delete-coupon-config', recordRoute: 'ops/coupons.html', recordId, message: '优惠券草稿已删除' });
          }
          if (status === '已启用') {
            actions.push({ label: '手动发券', kind: 'open-manual-coupon-issue', recordId });
            actions.push({ label: '停用', kind: 'update-record-status', recordRoute: 'ops/coupons.html', recordId, nextStatus: '已停用', message: '优惠券已停用' });
          }
          return actions;
        },
        footerNote: '优惠券配置只定义优惠券本身，奖励规则负责选择优惠券并配置每次发放张数。'
      });
    }

    if (currentPath === 'ops/coupon-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'ops/coupons.html',
        parentLabel: '优惠券配置',
        title: '优惠券详情',
        columns: couponColumns,
        rows: couponRows,
        statusIndex: 7,
        details: couponDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        configSummaryFields: [
          { key: 'couponId', label: '优惠券ID' },
          { key: 'couponName', label: '优惠券名称' },
          { key: 'couponType', label: '优惠类型' },
          { key: 'threshold', label: '使用门槛' },
          { key: 'usageScope', label: '使用范围', wide: true },
          { key: 'deductionScope', label: '抵扣范围' },
          { key: 'stackable', label: '是否可叠加' }
        ],
        detailToolbarNote: '优惠券详情/编辑页 · 优惠券配置字段',
        formTitle: '优惠券配置',
        saveLabel: '保存配置',
        saveMessage: '优惠券配置已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { key: 'couponName', label: '优惠券名称', placeholder: '请输入优惠券名称' },
          { key: 'couponType', label: '优惠券类型', type: 'select', options: ['满减', '折扣', '立减'] },
          { key: 'discountAmount', label: '满减金额（元）', type: 'number', visibleWhen: { key: 'couponType', value: '满减' }, placeholder: '请输入满减金额' },
          { key: 'discountAmount', label: '立减金额（元）', type: 'number', visibleWhen: { key: 'couponType', value: '立减' }, placeholder: '请输入立减金额' },
          { key: 'discountRate', label: '优惠折扣', type: 'number', visibleWhen: { key: 'couponType', value: '折扣' }, placeholder: '请输入折扣，如 9 表示 9 折' },
          { key: 'threshold', label: '使用门槛（元）', type: 'number', visibleWhen: { key: 'couponType', values: ['满减', '折扣'] }, placeholder: '请输入使用门槛' },
          { key: 'usageScope', label: '使用范围（项目 / 子项目）', type: 'tag-multiselect', groups: [{ label: '项目', options: ['全部项目', '生活服务', '活动协助', '校园推广'] }, { label: '子项目', options: ['上门喂猫', '陪诊协助', '婚庆协助', '传单派发'] }] },
          { key: 'deductionScope', label: '抵扣范围', type: 'select', options: ['仅任务金额'] },
          { key: 'stackable', label: '是否可叠加', type: 'select', options: ['否', '是'] }
        ],
        actions: [
          { label: '启用', status: '已启用', success: '优惠券已启用', primary: true, showStatuses: ['草稿'] },
          { label: '停用', status: '已停用', success: '优惠券已停用', showStatuses: ['已启用'] },
          { label: '删除', kind: 'delete-coupon-config', recordRoute: 'ops/coupons.html', message: '优惠券草稿已删除', showStatuses: ['草稿'] }
        ]
      });
    }

    if (currentPath === 'ops/rewards.html') {
      return this.createListConfig({
        listPath: 'ops/rewards.html',
        label: '奖励规则',
        tableTitle: '奖励规则列表',
        columns: rewardColumns,
        rows: rewardRows,
        details: rewardDetails,
        detailRoute: 'ops/reward-detail.html',
        statusIndex: 7,
        actions: [
          { label: '新建奖励规则', kind: 'create-reward-rule', primary: true }
        ],
        filterFields: [
          { type: 'text', placeholder: '搜索规则名称 / 触发条件 / 优惠券', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 6, options: [{ label: '全部预警状态', active: true }, { label: '已达预警' }, { label: '未达预警' }] },
          { type: 'select', columnIndex: 7, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待生效' }, { label: '生效中' }, { label: '自动结束' }, { label: '手动结束' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '详情', route: `ops/reward-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (['生效中', '手动结束', '自动结束'].includes(status)) {
            actions.push({ label: '发放明细', kind: 'open-settlement-table', recordId, detailKey: 'issueDetails' });
          }
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'ops/rewards.html', recordId, nextStatus: '待生效', message: '奖励规则已启用，等待生效时间' });
            actions.push({ label: '删除', kind: 'delete-reward-rule', recordRoute: 'ops/rewards.html', recordId, message: '奖励规则草稿已删除' });
          }
          if (status === '待生效') {
            actions.push({ label: '立即生效', kind: 'update-record-status', recordRoute: 'ops/rewards.html', recordId, nextStatus: '生效中', message: '奖励规则已立即生效' });
            actions.push({ label: '结束', kind: 'update-record-status', recordRoute: 'ops/rewards.html', recordId, nextStatus: '手动结束', message: '奖励规则已结束' });
          }
          if (status === '生效中') {
            actions.push({ label: '结束', kind: 'update-record-status', recordRoute: 'ops/rewards.html', recordId, nextStatus: '手动结束', message: '奖励规则已结束' });
          }
          return actions;
        },
        footerNote: '奖励规则关联已配置优惠券，并配置每个优惠券每次发放张数、触发条件、活动时间和发放限制。'
      });
    }

    if (currentPath === 'ops/reward-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'ops/rewards.html',
        parentLabel: '奖励规则',
        title: '奖励规则详情',
        columns: rewardColumns,
        rows: rewardRows,
        statusIndex: 7,
        details: rewardDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        configSummaryFields: [
          { key: 'ruleId', label: '规则ID' },
          { key: 'ruleName', label: '规则名称' },
          { key: 'couponBundle', label: '关联优惠券及发放张数', wide: true },
          { key: 'triggerCondition', label: '触发条件' },
          { key: 'activityRange', label: '活动时间范围', wide: true },
          { key: 'dailyIssueLimit', label: '单日发放优惠券上限' },
          { key: 'warningThreshold', label: '总发放数量预警值' },
          { key: 'userDailyLimit', label: '单用户单日领取次数上限' }
        ],
        detailToolbarNote: '奖励规则详情/编辑页 · 奖励规则配置字段',
        formTitle: '奖励规则配置',
        saveLabel: '保存配置',
        saveMessage: '奖励规则已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { label: '规则名称', key: 'ruleName', defaultValue: '待命名奖励规则', placeholder: '请输入规则名称' },
          { label: '触发条件', key: 'triggerCondition', type: 'select', options: ['新用户注册', '每笔订单首次转发', '有效拉新一名新用户'] },
          { label: '活动时间范围', key: 'activityRange', type: 'datetime-range' },
          { label: '单日发放优惠券上限', key: 'dailyIssueLimit', type: 'number', placeholder: '请输入单日发放上限' },
          { label: '总发放数量预警值', key: 'warningThreshold', type: 'number', placeholder: '请输入预警阈值' },
          { label: '单用户单日领取次数上限', key: 'userDailyLimit', type: 'number', placeholder: '请输入单用户单日上限' },
          { label: '关联优惠券及发放张数', key: 'rewardCouponBundle', type: 'coupon-quantity-table' }
        ],
        actions: [
          { label: '启用', status: '待生效', success: '奖励规则已启用，等待生效时间', primary: true, showStatuses: ['草稿'] },
          { label: '删除', kind: 'delete-reward-rule', recordRoute: 'ops/rewards.html', message: '奖励规则草稿已删除', showStatuses: ['草稿'] },
          { label: '立即生效', status: '生效中', success: '奖励规则已立即生效', primary: true, showStatuses: ['待生效'] },
          { label: '结束', status: '手动结束', success: '奖励规则已结束', showStatuses: ['待生效', '生效中'] }
        ]
      });
    }

    if (currentPath === 'ops/insurance-products.html') {
      const activeTab = this.getPageValue('activeTab', 'all');
      const tabMap = {
        all: ['启用中', '灰度中'],
        active: ['启用中'],
        gray: ['灰度中']
      };
      return this.createListConfig({
        listPath: 'ops/insurance-products.html',
        label: '保险产品',
        tableTitle: '保险产品库',
        columns: insuranceProductEnhancedColumns,
        rows: insuranceProductEnhancedRows,
        exportLabel: '导出产品清单',
        detailRoute: 'ops/insurance-product-detail.html',
        statusIndex: 6,
        tabs: [],
        highlight: {
          label: '保险产品与保费链路联动',
          copy: '产品启停、灰度与费率说明会影响保费同步和对账链路，需在详情页查看完整背景。',
          meta: '产品详情已接入财务保费链路跳转'
        },
        filterFields: [
          { type: 'text', placeholder: '搜索产品ID / 产品名称 / 保司编码', style: 'min-width:240px;' },
          { type: 'select', options: [{ label: '全部类目', active: true }, { label: '体能 / 生活 / 陪伴' }, { label: '活动协助类' }, { label: '高风险任务' }] },
          { type: 'select', options: [{ label: '全部状态', active: true }, { label: '启用中' }, { label: '灰度中' }] }
        ],
        auditNotes: [
          '产品启停后应继续回查保费同步结果与投保成功率。',
          '高风险产品建议先灰度，再根据成本与异常率决定是否全量。'
        ],
        footerNote: '产品详情已补齐费率、保司编码、投放策略和财务联动入口。'
      });
    }

    if (currentPath === 'ops/insurance-product-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'ops/insurance-products.html',
        parentLabel: '保险产品',
        title: '产品详情',
        columns: insuranceProductEnhancedColumns,
        rows: insuranceProductEnhancedRows,
        statusIndex: 6,
        details: insuranceProductDetails,
        metaNotes: [
          '产品状态变更应同步关注保费同步、成本变化和高风险异常。',
          '详情页用于承接产品说明，不再在列表页里混放复杂解释。'
        ],
        actions: [
          { label: '标记启用中', status: '启用中', success: '保险产品已标记为启用中', primary: true },
          { label: '切换灰度中', status: '灰度中', success: '保险产品已切换为灰度中' }
        ]
      });
    }

    if (currentPath === 'ops/urgent-pin.html') {
      return this.createListConfig({
        listPath: 'ops/urgent-pin.html',
        label: '急单置顶',
        tableTitle: '急单置顶规则列表',
        columns: urgentPinColumns,
        rows: urgentPinRows,
        exportLabel: '导出置顶规则',
        detailRoute: 'ops/urgent-pin-detail.html',
        statusIndex: 7,
        actions: [
          { label: '新建置顶规则', kind: 'create-urgent-pin-rule', primary: true }
        ],
        filterFields: [
          { type: 'text', placeholder: '搜索规则名称 / 单价 / 默认值', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 7, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待启用' }, { label: '已启用' }, { label: '已停用' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '详情', route: `ops/urgent-pin-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'ops/urgent-pin.html', recordId, nextStatus: '待启用', message: '急单置顶规则已进入待启用' });
            actions.push({ label: '删除', kind: 'delete-urgent-pin-rule', recordRoute: 'ops/urgent-pin.html', recordId, message: '急单置顶草稿已删除' });
          }
          if (status === '待启用' || status === '已启用') {
            actions.push({ label: '停用', kind: 'update-record-status', recordRoute: 'ops/urgent-pin.html', recordId, nextStatus: '已停用', message: '急单置顶规则已停用' });
          }
          return actions;
        },
        footerNote: '急单置顶规则仅保留草稿、待启用、已启用、已停用四种状态；待启用和已启用规则的有效时间范围不允许重叠。'
      });
    }

    if (currentPath === 'ops/urgent-pin-detail.html') {
      return this.createDetailConfig({
        parentRoute: 'ops/urgent-pin.html',
        parentLabel: '急单置顶',
        title: '急单置顶详情',
        columns: urgentPinColumns,
        rows: urgentPinRows,
        statusIndex: 7,
        details: urgentPinDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        configSummaryFields: [
          { key: 'ruleId', label: '规则ID' },
          { key: 'ruleName', label: '规则名称' },
          { key: 'ruleDescription', label: '规则说明', wide: true },
          { key: 'displayRange', label: '有效时间范围', wide: true }
        ],
        pricingRuleFields: urgentPinPricingFields,
        detailToolbarNote: '急单置顶详情/编辑页 · 规则配置 / 计费规则',
        formTitle: '置顶规则配置',
        saveLabel: '保存',
        saveMessage: '急单置顶规则已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { label: '规则名称', key: 'ruleName', defaultValue: '待命名置顶规则', placeholder: '请输入规则名称' },
          { label: '规则说明', key: 'ruleDescription', type: 'textarea', minHeight: 88, defaultValue: '用于配置发布确认页和置顶购买页的急单置顶计费参数。', placeholder: '请输入规则说明' },
          { label: '有效时间范围', key: 'displayRange', type: 'datetime-range' },
          { label: '计费规则', key: 'pricingRules', type: 'pricing-rule-table' }
        ],
        actions: [
          { label: '启用', status: '待启用', success: '急单置顶规则已进入待启用', primary: true, showStatuses: ['草稿'] },
          { label: '停用', status: '已停用', success: '急单置顶规则已停用', showStatuses: ['待启用', '已启用'] },
          { label: '删除', kind: 'delete-urgent-pin-rule', recordRoute: 'ops/urgent-pin.html', message: '急单置顶草稿已删除', showStatuses: ['草稿'] }
        ]
      });
    }

    if (currentPath === 'analytics/realtime.html') {
      return {
        type: 'overview',
        stats: [
          ['今日 DAU', '18,402', '每 60 秒刷新一次，当前使用最近一次成功快照。'],
          ['今日新增注册', '1,204', '新用户注册量，含未实名用户。'],
          ['今日有效订单', '628', '已扣除取消单与无效测试单。'],
          ['今日实收总收益', '¥12.8w', '任务金额 + 保险费 + 置顶费 - 优惠金额。']
        ],
        actions: [{ label: '导出实时快照', kind: 'toast', message: '实时快照导出任务已创建' }],
        bullets: [
          '超级管理员默认关注全量经营指标与全站告警；运营、风控、财务可沿用相同卡片来源但关注不同待办。',
          '若实时数仓延迟超过 5 分钟，应在顶部展示“数据延迟”并切回最近快照。',
          '核心指标获取失败时仍保留兜底值，不影响其他模块访问。'
        ],
        trends: [
          { label: '当前在线用户', value: '3,812', copy: '近 10 分钟在线人数稳定。' },
          { label: '待处理工单', value: '37', copy: '含举报、风控、客服、提现复核等主队列。' },
          { label: '系统异常告警', value: '6', copy: '红色高亮项建议优先通知值班人员处理。' },
          { label: '奖励冻结待审', value: '1', copy: '与奖励规则和人工复核链路联动。' }
        ],
        formulas: ['今日订单金额', '今日实收总收益', '待处理工单按类型拆分展示', '系统异常与业务队列分开展示'],
        breakdownTable: {
          title: '待办与实时来源',
          columns: ['来源模块', '数量', '当前重点', '建议入口'],
          rows: [
            ['反馈工单', '9', '待处理反馈', '客服与反馈'],
            ['提现复核', '4', '高风险提现待处理', '财务与结算'],
            ['内容审核', '3', '多人举报内容优先', '内容与社区']
          ]
        }
      };
    }

    if (currentPath === 'analytics/users.html') {
      return {
        type: 'overview',
        stats: [
          ['注册用户总数', '38.4w', '默认最近 30 天快照。'],
          ['实名认证用户', '28.1w', '实名认证率 73%。'],
          ['服务者认证用户', '9.6w', '含技能认证用户。'],
          ['DAU / MAU 比', '24%', '活跃结构维持稳定。']
        ],
        actions: [{ label: '导出用户分析', kind: 'toast', message: '用户分析导出任务已创建' }],
        bullets: [
          '支持按时间、城市、渠道、用户角色和是否实名认证筛选。',
          '认证漏斗、渠道占比和信用分分布都应该支持下钻到脱敏明细。',
          '若数据延迟超过 30 分钟，应展示快照时间并保留筛选条件，不显示空白图。'
        ],
        trends: [
          { label: '首次发布转化率', value: '31%', copy: '新用户从注册到首次发布任务的转化。' },
          { label: '首次接单转化率', value: '27%', copy: '服务者从注册到首次接单的转化。' },
          { label: '30 日留存', value: '18%', copy: '近 30 日用户留存水平。' },
          { label: '低信用分占比', value: '6.2%', copy: '低于 60 分用户占总量比例。' }
        ],
        formulas: ['有效用户快照', '实名与技能认证漏斗', '渠道与城市拆分', '信用分分段分布'],
        breakdownTable: {
          title: '渠道与角色拆分',
          columns: ['维度', '注册人数', '实名率', '首次转化', '说明'],
          rows: [
            ['首页自然流量', '12,402', '75%', '29%', '主增长来源'],
            ['校园社群', '8,116', '68%', '35%', '服务者认证比例更高'],
            ['活动裂变', '6,942', '71%', '24%', '首单转化受优惠活动影响明显'],
            ['双角色用户', '4,318', '--', '42%', '发布与接单双侧活跃']
          ]
        }
      };
    }

    if (currentPath === 'analytics/transactions.html') {
      return {
        type: 'overview',
        stats: [
          ['订单量', '6,208', '含全部有效订单，不含测试单。'],
          ['订单金额', '¥128.6w', '任务金额口径。'],
          ['总收益', '¥141.2w', '任务金额 + 保费 + 急单置顶费。'],
          ['实收总收益', '¥118.8w', '扣除优惠后的统一收益口径。']
        ],
        actions: [{ label: '导出交易分析', kind: 'toast', message: '交易分析导出任务已创建' }],
        bullets: [
          '收入结构需要按任务金额、保险费、急单置顶费、优惠金额拆分展示。',
          '点击退款率或纠纷率后，建议继续跳到订单与纠纷明细链路。',
          '若历史口径重算，应标记“已重算”并保留旧版本快照。'
        ],
        trends: [
          { label: '完成率', value: '92.4%', copy: '服务完成后自动结算链路整体稳定。' },
          { label: '退款率', value: '2.3%', copy: '主要来自纠纷与服务前取消。' },
          { label: '纠纷率', value: '1.1%', copy: '陪诊与活动协助类相对更高。' },
          { label: '急单置顶购买率', value: '18%', copy: '与完单率、收入表现联动观察。' }
        ],
        formulas: ['订单金额', '总收益', '订单实收金额', '实收总收益'],
        breakdownTable: {
          title: '收入结构与类目对比',
          columns: ['维度', '订单金额', '附加收入', '退款冲回', '说明'],
          rows: [
            ['生活服务类', '¥42.6w', '¥3.2w', '¥0.8w', '订单量最大'],
            ['活动协助类', '¥28.4w', '¥4.6w', '¥1.2w', '纠纷率偏高'],
            ['急单置顶费', '--', '¥13.2w', '¥0.0w', '不受优惠券抵扣影响'],
            ['保险费', '--', '¥12.8w', '¥0.3w', '需与保费管理对账']
          ]
        }
      };
    }

    if (currentPath === 'analytics/growth.html') {
      return {
        type: 'overview',
        stats: [
          ['邀请注册人数', '9,204', '通过邀新链接完成注册。'],
          ['有效拉新人数', '2,812', '订单实付 ≥ 1 元的被邀请用户。'],
          ['拉新转化率', '30.6%', '有效拉新人数 / 邀请注册人数。'],
          ['合伙人收益贡献', '¥18.4w', '邀新订单带来的实收总收益。']
        ],
        actions: [{ label: '导出增长分析', kind: 'toast', message: '增长与渠道分析导出任务已创建' }],
        bullets: [
          '增长漏斗按渠道曝光 → 注册 → 实名认证 → 首单支付 → 有效拉新展示。',
          '订单转发仅奖励优惠券，不计入有效拉新，也不产生分佣。',
          '若邀请关系缺失或链路断裂，应进入异常修复队列，不计入有效拉新。'
        ],
        trends: [
          { label: '合伙人 ROI 最高', value: '3.8', copy: '校园团队 A 当前 ROI 最佳。' },
          { label: '佣金扣回', value: '¥1.2w', copy: '退款后按比例扣回佣金。' },
          { label: '渠道贡献 Top1', value: '首页裂变', copy: '注册和首单表现最佳。' },
          { label: '异常链路', value: '27 条', copy: '邀请关系缺失或退款回退待修复。' }
        ],
        formulas: ['邀请注册人数', '有效拉新人数', '合伙人可结算佣金', '佣金扣回金额'],
        breakdownTable: {
          title: '渠道与合伙人效果',
          columns: ['维度', '邀请注册', '有效拉新', '佣金成本', '说明'],
          rows: [
            ['校园团队 A', '1,208', '482', '¥2.8w', 'ROI 最高'],
            ['首页裂变', '3,112', '921', '¥1.1w', '转化效率最好'],
            ['活动批次 2026Q2', '2,084', '503', '¥0.8w', '适合继续放量'],
            ['异常链路池', '127', '0', '--', '需修复后再纳入统计']
          ]
        }
      };
    }

    if (currentPath === 'analytics/risk.html') {
      return {
        type: 'overview',
        stats: [
          ['跳单拦截率', '3.7%', '跳单拦截消息数 / 发送总消息数。'],
          ['风险工单处理时长', '4.8h', '均值口径。'],
          ['申诉通过率', '18%', '申诉通过工单数 / 总申诉工单数。'],
          ['主体处罚量', '6', '当前统计周期内的主体级处罚数。']
        ],
        actions: [{ label: '导出风控效果', kind: 'toast', message: '风控效果统计导出任务已创建' }],
        bullets: [
          '若消息总量分母缺失，应标记当前周期不可横向对比。',
          '规则版本切换后应按版本分段展示，避免新旧策略混算。',
          '误杀率较高的规则需要能回溯样本消息、命中原因和人工结论。'
        ],
        trends: [
          { label: '风险消息命中率', value: '6.4%', copy: '近 30 日整体命中水平。' },
          { label: '高风险超时拦截占比', value: '1.2%', copy: '高风险检测超时默认拦截。' },
          { label: '账号级处罚量', value: '48', copy: '当前统计周期。' },
          { label: '主体预警量', value: '19', copy: '实名主体级联动预警。' }
        ],
        formulas: ['跳单拦截率', '高风险超时拦截占比', '申诉通过率', '处罚层级分布'],
        breakdownTable: {
          title: '处罚与回滚拆分',
          columns: ['维度', '数量', '通过率 / 占比', '说明'],
          rows: [
            ['账号级处罚', '48', '--', '日常风险处置主力'],
            ['主体级处罚', '6', '--', '需补证和二次确认'],
            ['申诉通过', '18', '18%', '主要来自信用分和奖励回滚'],
            ['误杀复盘样本', '12', '--', '用于规则优化']
          ]
        }
      };
    }

    if (currentPath === 'analytics/custom-reports.html') {
      const activeTab = this.getPageValue('activeTab', 'draft');
      const tables = {
        draft: {
          title: '草稿报表',
          columns: ['报表ID', '报表名称', '指标组合', '维度组合', '时间范围', '格式', '状态'],
          rows: [
            ['RP-301', '校园渠道周报', '注册 / 首单 / 有效拉新', '时间 / 城市 / 渠道', '最近 30 天', 'Excel', '草稿'],
            ['RP-296', '风控复盘日报', '命中率 / 回滚率 / 申诉通过率', '时间 / 规则版本', '最近 7 天', 'PDF', '草稿']
          ]
        },
        generated: {
          title: '已生成报表',
          columns: ['报表ID', '报表名称', '最近生成', '下载次数', '访问人', '格式', '状态'],
          rows: [
            ['RP-284', '交易月报', '今天 10:44', '12', '超级管理员 / 财务专员', 'Excel', '已生成'],
            ['RP-280', '增长周报', '昨天 18:12', '7', '运营团队', 'PDF', '已生成']
          ]
        },
        scheduled: {
          title: '定时任务',
          columns: ['报表ID', '报表名称', '频率', '收件人', '最近推送', '状态'],
          rows: [
            ['RP-260', '管理层经营周报', '每周一 09:00', '管理层邮箱组', '今天 09:00', '定时中'],
            ['RP-255', '风控日报', '每日 08:30', '风控值班邮箱', '今天 08:30', '定时中']
          ]
        },
        disabled: {
          title: '已停用',
          columns: ['报表ID', '报表名称', '停用原因', '最后状态', '更新时间'],
          rows: [
            ['RP-219', '旧版收入汇总', '口径已下线', '已停用', '前天 15:18']
          ]
        },
        failed: {
          title: '失败任务',
          columns: ['报表ID', '报表名称', '失败原因', '最近重试', '状态'],
          rows: [
            ['RP-312', '超大订单明细包', '导出文件过大', '今天 11:06', '失败'],
            ['RP-308', '渠道原始明细', '生成超时', '今天 09:22', '失败']
          ]
        }
      };
      return {
        type: 'console-config',
        actions: [{ label: '保存当前模板', kind: 'save-config', message: '报表模板草稿已保存' }],
        tabs: [
          { label: '草稿', value: 'draft', count: 2, active: activeTab === 'draft' },
          { label: '已生成', value: 'generated', count: 2, active: activeTab === 'generated' },
          { label: '定时中', value: 'scheduled', count: 2, active: activeTab === 'scheduled' },
          { label: '已停用', value: 'disabled', count: 1, active: activeTab === 'disabled' },
          { label: '失败', value: 'failed', count: 2, active: activeTab === 'failed' }
        ],
        stats: [
          ['模板总数', '12', '已创建的报表模板总数。'],
          ['定时任务', '3', '仍在运行的定时报表。'],
          ['今日导出', '8', '今日已完成导出次数。'],
          ['失败任务', '2', '需继续重试或拆分导出。']
        ],
        bannerLabel: '自定义报表与定时推送',
        bannerCopy: '支持组合指标、维度、时间范围和导出格式，生成即时或定时报表；大文件会自动拆分异步导出。',
        bannerStyle: 'background:linear-gradient(135deg, rgba(77,163,255,0.12), rgba(77,163,255,0.03)); border-color: rgba(77,163,255,0.2);',
        table: tables[activeTab],
        paramsTitle: '模板配置',
        params: [
          { label: '指标组合', value: '从预设指标库中选择，如注册 / 订单 / 收益 / 风控 / 拉新', copy: '避免直接手填口径，减少误配。' },
          { label: '维度组合', value: '支持时间 / 城市 / 服务类目 / 渠道 / 规则版本', copy: '建议保存常用视图以减少重复配置。' },
          { label: '导出格式', value: 'CSV（明细） / Excel（含图表） / PDF（管理层报告）', copy: '不同导出格式适配不同场景。' },
          { label: '定时推送', value: '每日 / 每周 / 每月自动生成并推送指定邮箱组', copy: '生成超时会转异步，并通过站内信和邮件通知。' }
        ],
        auditNotes: [
          '已生成和定时中的报表不允许物理删除，仅允许停用、归档或取消分享。',
          '生成超时和超大文件导出应自动转异步并支持拆包下载。'
        ]
      };
    }

    if (currentPath === 'settings/basic.html') {
      const activeTab = this.getPageValue('activeTab', 'credit');
      const tables = {
        credit: {
          title: '信用参数',
          columns: ['参数', '参数值', '说明'],
          rows: [
            ['信用分初始值', { number: '100', unit: '' }, '新用户初始信用分'],
            ['发动态最低信用分', { number: '60', unit: '' }, '<60 分不允许发动态'],
            ['最低接单信用分', { number: '60', unit: '' }, '<60 分限制接单 / 发布 / 动态']
          ]
        },
        order: {
          title: '订单结算',
          columns: ['参数', '参数值', '说明'],
          rows: [
            ['发布者确认完成超时', { number: '240', unit: '小时' }, '超时自动结算'],
            ['技术服务费默认费率', { number: '10', unit: '%' }, '按任务金额计算'],
            ['结算冻结期', { number: '3', unit: '天' }, '确认完成后转入可提现前的冻结期'],
            ['单任务申请人数上限', { number: '10', unit: '人' }, '达到上限后任务进入已约满'],
            ['评价超时自动关闭', { number: '30', unit: '天' }, '到期自动关闭评价']
          ]
        },
        service: {
          title: '服务码与安全',
          columns: ['参数', '参数值', '说明'],
          rows: [
            ['服务码有效时长', { number: '24', unit: '小时' }, '超时需重新生成'],
            ['服务码格式', { number: '6', unit: '位数字' }, '前后端校验一致'],
            ['SOS 响应时长', { number: '5', unit: '分钟' }, '超时自动催办']
          ]
        },
        pricing: {
          title: '收费与打赏',
          columns: ['参数', '参数值', '说明'],
          rows: [
            ['打赏最低金额', { number: '1', unit: '元' }, '最低可打赏金额'],
            ['打赏最高金额', { number: '200', unit: '元' }, '单次打赏上限'],
            ['提现手续费', { number: '0.1', unit: '元/次' }, '每日前 3 次免费，第 4 次起收取'],
            ['单次提现上限', { number: '500', unit: '元' }, '超过上限禁止提交'],
            ['单日提现上限', { number: '500', unit: '元' }, '当日累计超过上限禁止提交'],
            ['提现复核阈值', { number: '500', unit: '元' }, '达到阈值或命中风险时在列表标记需处理']
          ]
        }
      };
      return {
        type: 'basic-params-detail',
        tabs: [
          { label: '信用参数', value: 'credit', count: 3, active: activeTab === 'credit' },
          { label: '订单结算', value: 'order', count: 3, active: activeTab === 'order' },
          { label: '服务码与安全', value: 'service', count: 3, active: activeTab === 'service' },
          { label: '收费与打赏', value: 'pricing', count: 3, active: activeTab === 'pricing' }
        ],
        activeTab,
        table: tables[activeTab]
      };
    }

    const pages = {
      'partner/list.html': {
        type: 'list',
        tableTitle: '合伙人申请记录',
        stats: [
          ['申请记录', String(this.partnerRecords.length), '同一用户多次提交会生成多条独立申请记录。'],
          ['待审核', String(this.partnerRecords.filter(item => this.getEffectiveStatus('partner/list.html', item.id, item.status) === '待审核').length), '仅待审核记录允许通过或拒绝。'],
          ['已拒绝', String(this.partnerRecords.filter(item => this.getEffectiveStatus('partner/list.html', item.id, item.status) === '已拒绝').length), '拒绝记录保留驳回原因和修改建议。'],
          ['已通过', String(this.partnerRecords.filter(item => this.getEffectiveStatus('partner/list.html', item.id, item.status) === '已通过').length), '通过后分佣进入用户钱包，可由用户自主提现。']
        ],
        actions: [{ label: '导出申请池', kind: 'toast', message: '合伙人申请池导出任务已创建' }],
        filtersPlaceholder: '搜索申请ID / 用户 / 城市 / 渠道',
        columns: ['申请单', '申请人', '用户ID', '申请次数', '类型', '城市', '渠道', '状态', '审核结论', '提交时间', '操作'],
        rows: this.partnerRecords.map(item => {
          const status = this.getEffectiveStatus('partner/list.html', item.id, item.status);
          const applicationCount = this.partnerRecords.filter(record => record.userId === item.userId).length;
          const reviewNote = this.getRecordValue('partner/list.html', item.id, 'reviewNote', item.note || '');
          const commissionRate = this.getRecordValue('partner/list.html', item.id, 'commissionRate', item.commission?.current || '');
          const rejectReason = this.getRecordValue('partner/list.html', item.id, 'rejectReason', item.rejectReason || '');
          const reviseSuggestion = this.getRecordValue('partner/list.html', item.id, 'reviseSuggestion', item.reviseSuggestion || '');
          const conclusion = status === '已通过'
            ? `${reviewNote || '审核通过，开通合伙人权限。'}${commissionRate ? `；分佣比例：${commissionRate}` : ''}`
            : status === '已拒绝'
              ? `驳回原因：${rejectReason || '材料不符合要求'}；修改建议：${reviseSuggestion || '补充后重新提交'}`
              : '';
          return [item.id, item.applicant, item.userId, `${applicationCount} 次`, item.type, item.city, item.channel, status, conclusion, item.createdAt, { label: '查看详情', route: `partner/detail.html?partner=${item.id}` }];
        }),
        footerNote: '合伙人详情页会展示完整申请材料、认证与信用状态、历史审核记录。'
      },
      'partner/detail.html': { type: 'partner-detail' },
      'risk/reports.html': this.createListConfig({
        listPath: 'risk/reports.html',
        label: '举报管理',
        tableTitle: '举报队列',
        columns: riskReportColumns,
        rows: riskReportRows,
        exportLabel: '导出举报清单',
        detailRoute: 'risk/report-detail.html',
        statusIndex: 4,
        footerNote: '举报详情页承接证据核查、处罚说明和结论回写。'
      }),
      'risk/report-detail.html': this.createDetailConfig({
        parentRoute: 'risk/reports.html',
        parentLabel: '举报管理',
        title: '举报详情',
        columns: riskReportColumns,
        rows: riskReportRows,
        statusIndex: 4,
        metaNotes: [
          '举报详情将列表中的证据入口独立承接到单独页面。',
          '后续可继续补附件预览、聊天摘录和处罚通知链路。'
        ],
        actions: [
          { label: '标记处理中', status: '处理中', success: '举报单已转为处理中' },
          { label: '标记已处理', status: '已处理', success: '举报单已处理完成' }
        ]
      }),
      'community/feed-review.html': this.createListConfig({
        listPath: 'community/feed-review.html',
        label: '动态审核',
        tableTitle: '用户动态审核',
        columns: communityFeedColumns,
        rows: communityFeedRows,
        exportLabel: '导出审核记录',
        detailRoute: 'community/feed-detail.html',
        statusIndex: 7,
        selectable: true,
        bulkItemName: '动态',
        bulkHint: '同内容类型、同违规原因的动态可批量处理，最多 20 条 / 批。',
        bulkActions: [
          { label: '批量裁定上架', action: 'approve' },
          { label: '批量不予上架', action: 'reject' },
          { label: '批量手动下架', action: 'offline', danger: true }
        ],
        footerNote: '动态审核按发布时间倒序展示，AI 自动上架，风险内容人工裁定。'
      }),
      'community/feed-detail.html': this.createDetailConfig({
        parentRoute: 'community/feed-review.html',
        parentLabel: '动态审核',
        title: '动态详情',
        columns: communityFeedColumns,
        rows: communityFeedRows,
        statusIndex: 7,
        details: communityFeedDetailsUpdated,
        metaNotes: [
          'AI 判定无风险的动态自动上架。',
          'AI 判定有风险的动态暂不上架，人工裁定通过后才展示。'
        ],
        actions: [
          { label: '裁定上架', status: '已上架', success: '动态已裁定上架' },
          { label: '下架 / 不予上架', status: '已下架', success: '动态已下架或不予上架' }
        ]
      }),
      'community/announcements.html': this.createListConfig({
        listPath: 'community/announcements.html',
        label: '公告与推送',
        tableTitle: '公告任务',
        columns: announcementEnhancedColumns,
        rows: announcementEnhancedRows,
        exportLabel: '导出公告任务',
        detailRoute: 'community/announcement-detail.html',
        statusIndex: 6,
        selectable: true,
        bulkItemName: '公告',
        bulkHint: '支持批量结束公告、批量导出推送结果；不支持批量立即发送。',
        bulkActions: [
          { label: '批量结束', kind: 'generic-list-bulk', action: 'status', nextStatus: '手动结束', message: '已批量结束所选公告' },
          { label: '批量导出结果', kind: 'generic-list-bulk', action: 'export', message: '所选公告推送结果导出任务已创建' }
        ],
        actions: [
          { label: '创建公告', kind: 'create-announcement', primary: true, message: '公告草稿已创建' }
        ],
        footerNote: '公告与推送按草稿、待开始、推送中、自动结束、手动结束五态流转。'
      }),
      'community/announcement-detail.html': this.createDetailConfig({
        parentRoute: 'community/announcements.html',
        parentLabel: '公告与推送',
        title: '公告详情',
        columns: announcementEnhancedColumns,
        rows: announcementEnhancedRows,
        statusIndex: 6,
        details: announcementDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideTimeline: true,
        hideEvidences: true,
        hideRelatedLinks: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        metricStatuses: ['推送中', '自动结束', '手动结束'],
        configSummaryFields: [
          { key: 'announcementTitle', label: '标题' },
          { key: 'announcementContent', label: '公告内容（富文本）' },
          { key: 'displayRange', label: '展示时间范围' },
          { key: 'targetGroup', label: '目标用户群' },
          { key: 'cityTargets', label: '城市圈选' },
          { key: 'authTargets', label: '认证状态圈选' },
          { key: 'pushChannels', label: '推送渠道' }
        ],
        detailToolbarNote: '公告详情/编辑页 · 公告配置 / 预览效果 / 推送结果',
        formTitle: '公告配置',
        saveLabel: '保存草稿',
        saveMessage: '公告配置已保存为草稿',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { key: 'announcementTitle', label: '标题', placeholder: '请输入公告标题' },
          { key: 'announcementContent', label: '公告内容（富文本）', type: 'textarea', minHeight: 120, placeholder: '填写公告正文、活动规则或关键通知内容' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range' },
          { key: 'targetGroup', label: '目标用户群', type: 'select', options: ['全部', '特定城市', '特定认证状态'] },
          { key: 'cityTargets', label: '选择城市（多选）', type: 'tag-multiselect', groups: [{ label: '东南', options: ['上海', '江苏', '浙江'] }, { label: '华南', options: ['广州', '深圳', '佛山'] }, { label: '西南', options: ['成都', '重庆', '昆明'] }], visibleWhen: { key: 'targetGroup', value: '特定城市' } },
          { key: 'authTargets', label: '选择认证状态（多选）', type: 'tag-multiselect', groups: [{ label: '认证状态', options: ['未认证', '学生认证中', '学生已认证', '服务者已认证'] }], visibleWhen: { key: 'targetGroup', value: '特定认证状态' } },
          { key: 'pushChannels', label: '推送渠道（多选）', type: 'tag-multiselect', groups: [{ label: '渠道', options: ['小程序订阅消息（微信）', '短信（关键通知）', '平台系统消息（消息页）'] }] }
        ],
        metaNotes: [
          '公告预览、灰度发送和归档留痕都在详情页完成。',
          '推送中和结束公告不允许物理删除，待开始和推送中可提前结束。'
        ],
        actions: [
          { label: '启用', status: '待开始', success: '公告已启用并进入待开始', primary: true, showStatuses: ['草稿'] },
          { label: '删除', kind: 'toast', message: '草稿可删除，推送中和结束公告不允许物理删除', showStatuses: ['草稿'] },
          { label: '发布', status: '推送中', success: '公告已发布并进入推送中', primary: true, showStatuses: ['待开始'] },
          { label: '提前结束', status: '手动结束', success: '公告已提前结束', showStatuses: ['待开始', '推送中'] }
        ]
      }),
      'community/ads.html': this.createListConfig({
        listPath: 'community/ads.html',
        label: '广告位配置',
        tableTitle: '广告位列表',
        columns: adColumns,
        rows: adRows,
        detailRoute: 'community/ad-detail.html',
        statusIndex: 6,
        selectable: true,
        bulkItemName: '广告位',
        bulkHint: '支持批量启用和批量结束；图片与跳转链接需逐条配置。',
        bulkActions: [
          { label: '批量启用', kind: 'generic-list-bulk', action: 'enable-ads', nextStatus: '生效中', message: '已批量启用所选广告位' },
          { label: '批量结束', kind: 'generic-list-bulk', action: 'status', nextStatus: '手动结束', message: '已批量结束所选广告位' }
        ],
        actions: [
          { label: '新增广告位', kind: 'create-ad', primary: true, message: '广告位草稿已创建' }
        ],
        filterFields: [
          { type: 'text', placeholder: '搜索广告ID / 标题 / 创建人', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 2, options: [{ label: '全部展示位置', active: true }, { label: '首页轮播 Banner' }, { label: '弹窗' }] },
          { type: 'select', columnIndex: 6, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待生效' }, { label: '生效中' }, { label: '自动结束' }, { label: '手动结束' }] }
        ],
        footerNote: '广告位配置按展示位置区分：Banner 与弹窗同一时间均最多 3 条；只有草稿状态允许编辑。'
      }),
      'community/ad-detail.html': this.createDetailConfig({
        parentRoute: 'community/ads.html',
        parentLabel: '广告位配置',
        title: '广告详情',
        columns: adColumns,
        rows: adRows,
        statusIndex: 6,
        details: adDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        metricStatuses: ['生效中', '自动结束', '手动结束'],
        configSummaryFields: [
          { key: 'adTitle', label: '广告标题' },
          { key: 'adPosition', label: '展示位置' },
          { key: 'adImage', label: '广告图片' },
          { key: 'jumpType', label: '跳转类型' },
          { key: 'jumpTarget', label: '跳转目标' },
          { key: 'displayRange', label: '展示时间范围' },
          { key: 'sortOrder', label: '排列顺序' },
          { key: 'carouselInterval', label: '轮播间隔' }
        ],
        detailToolbarNote: '广告详情/编辑页 · 广告位规则 / 预览效果 / 投放状态',
        formTitle: '广告位规则',
        saveLabel: '保存配置',
        saveMessage: '广告配置已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { key: 'adTitle', label: '广告标题', placeholder: '请输入广告标题' },
          { key: 'adPosition', label: '展示位置', type: 'select', options: ['首页轮播 Banner', '弹窗'] },
          { key: 'adImage', label: '广告图片', type: 'image-upload', placeholder: '上传或填写 CDN 图片地址' },
          { key: 'jumpType', label: '跳转类型', type: 'select', options: ['内部路径', '外部H5 URL'] },
          { key: 'jumpTarget', label: '跳转目标', placeholder: '填写小程序内部路径或 H5 URL' },
          { key: 'displayRange', label: '展示时间范围', type: 'datetime-range' },
          { key: 'sortOrder', label: '排列顺序', placeholder: 'Banner 控制轮播顺序；弹窗控制滑动队列顺序' },
          { key: 'carouselInterval', label: '轮播间隔', placeholder: '默认 3 秒，可配置' }
        ],
        actions: [
          { label: '启用', status: '待生效', success: '广告已启用，等待生效时间', primary: true, showStatuses: ['草稿'] },
          { label: '删除', kind: 'toast', message: '草稿支持删除；已投放广告仅能结束或归档', showStatuses: ['草稿'] },
          { label: '立即生效', status: '生效中', success: '广告已立即生效', primary: true, showStatuses: ['待生效'] },
          { label: '结束投放', status: '手动结束', success: '广告已结束投放', showStatuses: ['待生效', '生效中'] }
        ]
      }),
      'ops/coupons.html': this.createListConfig({
        listPath: 'ops/coupons.html',
        label: '优惠券配置',
        tableTitle: '优惠券配置列表',
        columns: couponColumns,
        rows: couponRows,
        detailRoute: 'ops/coupon-detail.html',
        statusIndex: 7,
        footerNote: '优惠券配置只定义优惠券本身，奖励规则负责选择优惠券并配置每次发放张数。'
      }),
      'ops/coupon-detail.html': this.createDetailConfig({
        parentRoute: 'ops/coupons.html',
        parentLabel: '优惠券配置',
        title: '优惠券详情',
        columns: couponColumns,
        rows: couponRows,
        statusIndex: 7,
        details: couponDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true
      }),
      'ops/rewards.html': this.createListConfig({
        listPath: 'ops/rewards.html',
        label: '奖励规则',
        tableTitle: '奖励规则列表',
        columns: rewardColumns,
        rows: rewardRows,
        details: rewardDetails,
        detailRoute: 'ops/reward-detail.html',
        statusIndex: 7,
        footerNote: '奖励规则关联已配置优惠券，并配置每个优惠券每次发放张数、触发条件、活动时间和发放限制。'
      }),
      'ops/reward-detail.html': this.createDetailConfig({
        parentRoute: 'ops/rewards.html',
        parentLabel: '奖励规则',
        title: '奖励规则详情',
        columns: rewardColumns,
        rows: rewardRows,
        statusIndex: 7,
        details: rewardDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true
      }),
      'ops/insurance-products.html': this.createListConfig({
        listPath: 'ops/insurance-products.html',
        label: '保险产品',
        tableTitle: '保险产品库',
        columns: insuranceProductColumns,
        rows: insuranceProductRows,
        exportLabel: '导出产品清单',
        detailRoute: 'ops/insurance-product-detail.html',
        statusIndex: 4,
        footerNote: '保险产品详情页会承接费率、适用类目和灰度投放说明。'
      }),
      'ops/insurance-product-detail.html': this.createDetailConfig({
        parentRoute: 'ops/insurance-products.html',
        parentLabel: '保险产品',
        title: '产品详情',
        columns: insuranceProductColumns,
        rows: insuranceProductRows,
        statusIndex: 4,
        metaNotes: [
          '产品详情页用于隔离费率说明和启停状态，避免信息挤在列表内。',
          '后续可继续补投保约束、类目映射和保司差异。'
        ],
        actions: [
          { label: '标记启用中', status: '启用中', success: '保险产品已标记为启用中' },
          { label: '切换灰度中', status: '灰度中', success: '保险产品已切换为灰度中' }
        ]
      }),
      'ops/urgent-pin.html': this.createListConfig({
        listPath: 'ops/urgent-pin.html',
        label: '急单置顶',
        tableTitle: '急单置顶规则列表',
        columns: urgentPinColumns,
        rows: urgentPinRows,
        exportLabel: '导出置顶规则',
        detailRoute: 'ops/urgent-pin-detail.html',
        statusIndex: 7,
        filterFields: [
          { type: 'text', placeholder: '搜索规则名称 / 单价 / 默认值', style: 'min-width:240px;' },
          { type: 'select', columnIndex: 7, options: [{ label: '全部状态', active: true }, { label: '草稿' }, { label: '待启用' }, { label: '已启用' }, { label: '已停用' }] }
        ],
        rowActions: row => {
          const recordId = row[0];
          const status = row[7];
          const actions = [{ label: '详情', route: `ops/urgent-pin-detail.html?record=${encodeURIComponent(recordId)}` }];
          if (status === '草稿') {
            actions.push({ label: '启用', kind: 'update-record-status', recordRoute: 'ops/urgent-pin.html', recordId, nextStatus: '待启用', message: '急单置顶规则已进入待启用' });
            actions.push({ label: '删除', kind: 'delete-urgent-pin-rule', recordRoute: 'ops/urgent-pin.html', recordId, message: '急单置顶草稿已删除' });
          }
          if (status === '待启用' || status === '已启用') {
            actions.push({ label: '停用', kind: 'update-record-status', recordRoute: 'ops/urgent-pin.html', recordId, nextStatus: '已停用', message: '急单置顶规则已停用' });
          }
          return actions;
        },
        footerNote: '急单置顶规则仅保留草稿、待启用、已启用、已停用四种状态；待启用和已启用规则的有效时间范围不允许重叠。'
      }),
      'ops/urgent-pin-detail.html': this.createDetailConfig({
        parentRoute: 'ops/urgent-pin.html',
        parentLabel: '急单置顶',
        title: '急单置顶详情',
        columns: urgentPinColumns,
        rows: urgentPinRows,
        statusIndex: 7,
        details: urgentPinDetails,
        hideSummary: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideEvidences: true,
        fullWidthDetail: true,
        readonlyConfigFirst: true,
        configSummaryFields: [
          { key: 'ruleId', label: '规则ID' },
          { key: 'ruleName', label: '规则名称' },
          { key: 'ruleDescription', label: '规则说明', wide: true },
          { key: 'displayRange', label: '有效时间范围', wide: true }
        ],
        pricingRuleFields: urgentPinPricingFields,
        detailToolbarNote: '急单置顶详情/编辑页 · 规则配置 / 计费规则',
        formTitle: '置顶规则配置',
        saveLabel: '保存',
        saveMessage: '急单置顶规则已保存',
        saveStatuses: ['草稿'],
        formStatuses: ['草稿'],
        formFields: [
          { label: '规则名称', key: 'ruleName', defaultValue: '待命名置顶规则', placeholder: '请输入规则名称' },
          { label: '规则说明', key: 'ruleDescription', type: 'textarea', minHeight: 88, defaultValue: '用于配置发布确认页和置顶购买页的急单置顶计费参数。', placeholder: '请输入规则说明' },
          { label: '有效时间范围', key: 'displayRange', type: 'datetime-range' },
          { label: '计费规则', key: 'pricingRules', type: 'pricing-rule-table' }
        ],
        actions: [
          { label: '启用', status: '待启用', success: '急单置顶规则已进入待启用', primary: true, showStatuses: ['草稿'] },
          { label: '停用', status: '已停用', success: '急单置顶规则已停用', showStatuses: ['待启用', '已启用'] },
          { label: '删除', kind: 'delete-urgent-pin-rule', recordRoute: 'ops/urgent-pin.html', message: '急单置顶草稿已删除', showStatuses: ['草稿'] }
        ]
      }),
      'support/feedback.html': this.createListConfig({
        listPath: 'support/feedback.html',
        label: '反馈工单',
        tableTitle: '客服反馈',
        columns: feedbackColumns,
        rows: feedbackRows,
        exportLabel: '导出反馈工单',
        detailRoute: 'support/feedback-detail.html',
        statusIndex: 3,
        footerNote: '反馈工单仅支持逐单处理，完成后保留反馈正文、附件、回复和操作日志。'
      }),
      'support/feedback-detail.html': this.createDetailConfig({
        parentRoute: 'support/feedback.html',
        parentLabel: '反馈工单',
        title: '反馈详情',
        columns: feedbackColumns,
        rows: feedbackRows,
        statusIndex: 3,
        summaryColumnCount: 6,
        fullWidthDetail: true,
        hideMetrics: true,
        hideDetailItems: true,
        hideFollowNote: true,
        hideTimeline: true,
        hideRelatedLinks: true,
        metaNotes: [
          '仅处理 C 端用户提交的意见反馈，附件、内部备注、对用户可见回复和操作日志需完整留痕。',
          '处理与关闭工单时填写对用户可见回复，正式回复写回消息中心。'
        ],
        notePlaceholder: '记录本次处理说明、内部备注或后续跟进事项',
        actions: [
          { label: '处理', status: '处理中', success: '反馈工单已进入处理中，回复已写回消息中心', primary: true, showStatuses: ['待处理'] },
          { label: '关闭工单', status: '已完成', success: '反馈工单已关闭，正式回复已写回消息中心', primary: true, showStatuses: ['处理中'] }
        ]
      }),
      'analytics/realtime.html': this.createOverviewConfig('实时数据总览', ['今日订单量', '今日 GMV', '待处理事项', '异常告警'], ['628', '¥12.8w', '37', '6'], [
        '实时总览共享工作台核心指标，支持运营和管理层快速判断当日节奏。',
        '后续可继续补城市分布、服务类目分布和实时转化漏斗。',
        '当前重点异常来自纠纷超时、提现复核和奖励冻结。'
      ]),
      'analytics/users.html': this.createOverviewConfig('用户分析', ['新增用户', '实名认证率', '技能API通过率', '低信用分占比'], ['1,204', '73%', '42%', '6.2%'], [
        '用户分析关注注册、活跃、认证、信用与转化链路。',
        '可与用户管理、信用申诉处理形成回查闭环。',
        'A2 可继续补用户漏斗和渠道拆解。'
      ]),
      'analytics/transactions.html': this.createOverviewConfig('交易分析', ['有效订单数', '订单金额', '完成率', 'AI定价采纳率'], ['6,208', '¥128.6w', '92.4%', '37%'], [
        '交易分析聚焦订单金额、完成率、退款率、纠纷率和 AI 定价采纳率。',
        '可继续下钻到急单置顶、保险费和类目贡献。',
        '当前纠纷率主要集中在陪诊和活动协助类。'
      ]),
      'analytics/growth.html': this.createOverviewConfig('增长与渠道分析', ['自然新增', '活动拉新', '分享转化', '复购率'], ['42%', '31%', '18%', '27%'], [
        '增长看板用于观察渠道质量、活动效率和复购表现。',
        '可与奖励规则、公告推送和广告位配置联动验证效果。',
        'A2 再继续补投放渠道分层与 cohort 留存。'
      ]),
      'analytics/risk.html': this.createOverviewConfig('风控效果统计', ['跳单拦截', '举报成立率', '信用回滚率', 'SOS 响应率'], ['41', '28%', '18%', '96%'], [
        '风控效果统计主要服务风控专员与超级管理员。',
        '当前页面先给效果摘要，后续可再补按风险类型下钻。',
        '适合作为举报管理和信用申诉的复盘入口。'
      ]),
      'analytics/custom-reports.html': this.createOverviewConfig('自定义报表与导出', ['模板数', '最近导出', '常用字段集', '排队任务'], ['12', '今天 10:44', '8 套', '3'], [
        '支持按模块组合字段并生成导出模板。',
        '首轮先承接报表模板与导出任务概览。',
        'A2 可继续补列级权限与调度能力。'
      ]),
      'settings/basic.html': this.createConfigConfig('基础参数配置', [
        ['信用初始值', '100 分；低于 60 自动限制发布 / 接单 / 动态'],
        ['自动确认时长', '待确认完成 240 小时自动确认'],
        ['服务码有效期', '生成后 24 小时内有效，发布者刷新后旧码立即失效'],
        ['日志保留期', '关键操作日志默认保留 3 年']
      ])
    };

    return pages[this.getCurrentPath()];
  },

  createListConfig(config) {
    const hasRowActions = config.hideRowActions !== true;
    const pendingCount = config.statusIndex === undefined
      ? Math.max(1, Math.ceil(config.rows.length / 2))
      : config.rows.filter(item => {
        const status = this.getEffectiveStatus(config.listPath, item[0], item[config.statusIndex]);
        return /(待|草稿|处理中|审核中|报名中|灰度中|复核)/.test(status);
      }).length;

    return {
      type: 'list',
      stats: [
        ['总记录数', String(config.rows.length), `${config.label}首轮以完整页面覆盖和基础交互为主。`],
        ['待处理', String(pendingCount || 1), hasRowActions ? `支持搜索、分页${config.exportLabel ? '、导出' : ''}和列表操作。` : `仅保留列表字段、筛选${config.exportLabel ? '与导出' : ''}。`],
        ['异常 / 风险', '1', '后续 A2 可继续补更多真实状态联动。'],
        ['最近更新', '今天', '所有列表都已接入真实页面路由，不再使用占位页。']
      ],
      actions: [
        ...(config.exportLabel ? [{ label: config.exportLabel, kind: 'toast', message: `${config.exportLabel}任务已创建` }] : []),
        ...(config.actions || [])
      ],
      tableTitle: config.tableTitle,
      filtersPlaceholder: `搜索${config.label}相关编号 / 对象 / 状态`,
      filterFields: config.filterFields || null,
      tabs: config.tabs || [],
      selectable: config.selectable || false,
      bulkHint: config.bulkHint || '',
      bulkItemName: config.bulkItemName || '记录',
      bulkActions: config.bulkActions || [],
      highlight: config.highlight,
      auditNotes: config.auditNotes || [],
      details: config.details || {},
      hiddenColumnIndexes: config.hiddenColumnIndexes || [],
      columns: hasRowActions ? [...config.columns, '操作'] : [...config.columns],
      rows: config.rows.map(row => {
        const nextRow = [...row];
        const storedRecord = this.getStoredRecord(config.listPath, row[0]);
        if (config.listPath === 'community/feed-review.html' && storedRecord.publisherAccountStatus) {
          nextRow[2] = storedRecord.publisherAccountStatus;
        }
        if (config.listPath === 'support/feedback.html' && storedRecord.handler) {
          nextRow[4] = storedRecord.handler;
        }
        if (config.statusIndex !== undefined) {
          nextRow[config.statusIndex] = this.getEffectiveStatus(config.listPath, row[0], row[config.statusIndex]);
        }
        if (!hasRowActions) {
          return nextRow;
        }
        if (typeof config.rowActions === 'function') {
          return [...nextRow, { actions: config.rowActions(nextRow, row) }];
        }
        const action = config.detailRoute
          ? { label: '查看详情', route: `${config.detailRoute}?record=${encodeURIComponent(row[0])}` }
          : { label: '查看详情', kind: 'toast', message: `${config.label}详情页将在下一轮继续补充` };
        return [...nextRow, action];
      }),
      footerNote: config.footerNote || `${config.label}当前已具备独立页面和基础数据展示。`
    };
  },

  createOverviewConfig(label, statLabels, statValues, bullets) {
    return {
      type: 'overview',
      stats: statLabels.map((item, index) => [item, statValues[index], bullets[index] || '']),
      actions: [{ label: '导出当前报表', kind: 'toast', message: `${label}导出任务已创建` }],
      bullets
    };
  },

  createConfigConfig(label, rules) {
    return {
      type: 'config',
      actions: [{ label: '保存当前配置', kind: 'save-config', message: `${label}已保存到本地草稿并记录修改时间` }],
      rules
    };
  },

  createDetailConfig(config) {
    return {
      type: 'detail',
      queryKey: 'record',
      ...config
    };
  },

  getLocalDraft() {
    return this.pageState[this.getCurrentPath()] || {};
  },

  getPageValue(key, fallback = '') {
    const draft = this.getLocalDraft();
    return draft[key] !== undefined ? draft[key] : fallback;
  },

  removeLocalDraft(fields = []) {
    const currentPath = this.getCurrentPath();
    const draft = { ...(this.pageState[currentPath] || {}) };
    fields.forEach(field => {
      delete draft[field];
    });

    if (Object.keys(draft).length) {
      this.pageState[currentPath] = draft;
    } else {
      delete this.pageState[currentPath];
    }

    AdminStore.set('extended_page_state', this.pageState);
  },

  setLocalDraft(field, value) {
    this.pageState[this.getCurrentPath()] = {
      ...(this.pageState[this.getCurrentPath()] || {}),
      [field]: value,
      updatedAt: new Date().toLocaleString('zh-CN')
    };
    AdminStore.set('extended_page_state', this.pageState);
  },

  getFilterKey(field, index) {
    return field.stateKey || `filter_${index}`;
  },

  getDefaultFilterValue(field) {
    if (field.type === 'select') {
      return field.defaultValue || (field.options.find(option => option.active)?.label || field.options[0]?.label || '');
    }
    return field.defaultValue || '';
  },

  getFilterValue(field, index) {
    const value = this.getPageValue(this.getFilterKey(field, index), this.getDefaultFilterValue(field));
    if (field.type === 'select') {
      const options = (field.options || []).map(option => option.label);
      if (!options.includes(value)) {
        return this.getDefaultFilterValue(field);
      }
    }
    return value;
  },

  getRowCellText(cell) {
    if (cell === undefined || cell === null) {
      return '';
    }

    if (typeof cell === 'object') {
      return cell.searchText || '';
    }

    return String(cell);
  },

  getFilteredRows(rows, filters = []) {
    return filters.reduce((collection, field, index) => {
      const value = this.getFilterValue(field, index);
      const normalizedValue = typeof value === 'string' ? value.trim().toLowerCase() : String(value || '').trim().toLowerCase();
      const defaultValue = this.getDefaultFilterValue(field).trim().toLowerCase();

      if (!normalizedValue || (field.type === 'select' && normalizedValue === defaultValue)) {
        return collection;
      }

      return collection.filter(row => {
        const targetCells = field.columnIndex !== undefined ? [row[field.columnIndex]] : row;
        return targetCells.some(cell => this.getRowCellText(cell).toLowerCase().includes(normalizedValue));
      });
    }, rows);
  },

  paginateRows(rows) {
    const totalPages = Math.max(1, Math.ceil(rows.length / this.pageSize));
    const storedPage = Number.parseInt(this.getPageValue('currentPage', 1), 10);
    const currentPage = rows.length ? Math.min(Math.max(storedPage || 1, 1), totalPages) : 1;
    const start = (currentPage - 1) * this.pageSize;
    return {
      currentPage,
      totalPages,
      items: rows.slice(start, start + this.pageSize)
    };
  },

  resetListDraft(filters = []) {
    this.removeLocalDraft([
      'currentPage',
      'selectedIds',
      ...filters.map((field, index) => this.getFilterKey(field, index))
    ]);
  },

  getSelectedIds() {
    const selectedIds = this.getPageValue('selectedIds', []);
    return Array.isArray(selectedIds) ? selectedIds : [];
  },

  setSelectedIds(selectedIds = []) {
    this.setLocalDraft('selectedIds', [...new Set(selectedIds)]);
  },

  toggleListRowSelection(recordId, checked) {
    const selected = new Set(this.getSelectedIds());
    if (checked) {
      selected.add(recordId);
    } else {
      selected.delete(recordId);
    }
    if (selected.size > 20) {
      AdminUI.showMessage('批量处理最多选择 20 条内容', 'warning');
      this.render();
      return;
    }
    this.setSelectedIds(Array.from(selected));
    this.render();
  },

  toggleVisibleRowsSelection(recordIds = [], checked) {
    const selected = new Set(this.getSelectedIds());
    recordIds.forEach(recordId => {
      if (checked) {
        selected.add(recordId);
      } else {
        selected.delete(recordId);
      }
    });
    if (selected.size > 20) {
      AdminUI.showMessage('批量处理最多选择 20 条内容', 'warning');
      this.render();
      return;
    }
    this.setSelectedIds(Array.from(selected));
    this.render();
  },

  validateCommunityFeedBulk(action) {
    const config = this.getPageConfig();
    const selectedIds = this.getSelectedIds();
    const selectedRows = (config.rows || []).filter(row => selectedIds.includes(row[0]));
    if (!selectedRows.length) {
      AdminUI.showMessage('请先选择需要批量处理的动态', 'warning');
      return null;
    }
    if (selectedRows.length > 20) {
      AdminUI.showMessage('批量处理最多 20 条 / 批', 'warning');
      return null;
    }

    const contentTypes = new Set(selectedRows.map(row => row[4]));
    const violationReasons = new Set(selectedRows.map(row => this.getCommunityFeedViolationReason(row)));
    if (contentTypes.size > 1 || violationReasons.size > 1) {
      AdminUI.showMessage('仅支持同内容类型、同违规原因的动态批量处理', 'warning');
      return null;
    }

    const statuses = new Set(selectedRows.map(row => row[7]));
    if (statuses.size > 1) {
      AdminUI.showMessage('请先选择当前状态一致的动态再批量处理', 'warning');
      return null;
    }

    const status = selectedRows[0][7];
    const statusRules = {
      approve: { allowed: ['待人工裁定', '已下架'], message: '批量裁定上架仅适用于待人工裁定或已下架动态' },
      reject: { allowed: ['待人工裁定'], message: '批量不予上架仅适用于待人工裁定动态' },
      offline: { allowed: ['已上架'], message: '批量手动下架仅适用于已上架动态' }
    };
    const rule = statusRules[action];
    if (!rule || !rule.allowed.includes(status)) {
      AdminUI.showMessage(rule?.message || '当前选择不支持该批量操作', 'warning');
      return null;
    }

    return selectedRows;
  },

  clearCommunityFeedSelection() {
    this.removeLocalDraft(['selectedIds']);
  },

  handleGenericListBulk(target) {
    const config = this.getPageConfig();
    const selectedIds = this.getSelectedIds();
    const selectedRows = (config.rows || []).filter(row => selectedIds.includes(row[0]));
    if (!selectedRows.length) {
      AdminUI.showMessage('请先选择需要批量处理的记录', 'warning');
      return;
    }

    const action = target.dataset.bulkAction;
    if (action === 'export') {
      this.clearCommunityFeedSelection();
      AdminUI.showMessage(target.dataset.message || '导出任务已创建', 'success');
      this.render();
      return;
    }

    if (action === 'copy-announcement') {
      this.copyAnnouncementTemplates(selectedRows);
      this.clearCommunityFeedSelection();
      AdminUI.showMessage(target.dataset.message || '已复制历史公告模板', 'success');
      this.render();
      return;
    }

    if (action === 'approve-reports') {
      const pendingRows = selectedRows.filter(row => row[7] === '待处理');
      if (pendingRows.length !== selectedRows.length) {
        AdminUI.showMessage('批量通过仅适用于待处理举报', 'warning');
        return;
      }
      const reportTypes = new Set(selectedRows.map(row => row[1]));
      if (reportTypes.size > 1) {
        AdminUI.showMessage('仅支持同举报类型的违规批量通过处理', 'warning');
        return;
      }
      selectedRows.forEach(row => {
        this.updateRecordState('risk/reports.html', row[0], {
          status: '已处理',
          reportDecision: '批量通过（确认违规）',
          disposalMeasure: '同类型违规批量处理',
          note: '同类型违规批量通过处理，处理结果随导出记录保留。'
        });
      });
      this.clearCommunityFeedSelection();
      AdminUI.showMessage(target.dataset.message || '已批量通过处理所选举报', 'success');
      this.render();
      return;
    }

    if (action === 'enable-ads') {
      const positions = ['首页轮播 Banner', '弹窗'];
      const overLimitPosition = positions.find(position => {
        const selectedForPosition = selectedRows.filter(row => this.getAdPositionLabel(row) === position);
        return selectedForPosition.some(selectedRow => {
          const selectedRange = this.getAdRowRange(selectedRow);
          const selectedOverlapCount = selectedForPosition.filter(row => this.rangesOverlap(selectedRange, this.getAdRowRange(row))).length;
          const occupiedOverlapCount = (config.rows || []).filter(row => {
            const isSelected = selectedIds.includes(row[0]);
            return !isSelected
              && this.getAdPositionLabel(row) === position
              && ['生效中', '待生效'].includes(this.getEffectiveStatus(config.listPath, row[0], row[config.statusIndex]))
              && this.rangesOverlap(selectedRange, this.getAdRowRange(row));
          }).length;
          return occupiedOverlapCount + selectedOverlapCount > 3;
        });
      });
      if (overLimitPosition) {
        AdminUI.showMessage(`${overLimitPosition} 同一时间最多 3 条广告，请先结束冲突广告、调整排期或减少选择数量`, 'warning');
        return;
      }
    }

    const nextStatus = target.dataset.nextStatus;
    if (!nextStatus) {
      AdminUI.showMessage(target.dataset.message || '批量操作已记录', 'success');
      return;
    }

    if (['待开始', '推送中', '待生效', '生效中'].includes(nextStatus)) {
      const invalidRow = selectedRows.find(row => !this.validateTimedConfig(config.listPath, row[0]));
      if (invalidRow) {
        return;
      }
    }

    if (['待启用', '已启用'].includes(nextStatus)) {
      const invalidRow = selectedRows.find(row => !this.validateTimedConfig(config.listPath, row[0]) || !this.validateUrgentPinRangeOverlap(config.listPath, row[0], nextStatus));
      if (invalidRow) {
        return;
      }
    }

    selectedRows.forEach(row => {
      this.updateRecordState(config.listPath, row[0], { status: nextStatus });
    });
    this.clearCommunityFeedSelection();
    AdminUI.showMessage(target.dataset.message || '批量状态已更新', 'success');
    this.render();
  },

  copyAnnouncementTemplates(rows = []) {
    const storedRows = AdminStore.get('extended_created_announcement_rows', []);
    const now = new Date().toLocaleString('zh-CN');
    const createdRows = rows.map((row, index) => {
      const recordId = `AN-N${Date.now()}${index}`;
      return [recordId, `复制-${row[1]}`, row[2], row[3], row[4], '未设置', '草稿', '-', '-', '-'];
    });
    AdminStore.set('extended_created_announcement_rows', [...createdRows, ...storedRows]);
    createdRows.forEach(row => {
      this.updateRecordState('community/announcements.html', row[0], {
        announcementTitle: row[1],
        announcementContent: `复制自历史公告，创建时间：${now}`,
        targetGroup: row[3],
        pushChannels: row[4],
        displayRange: '未设置',
        status: '草稿'
      });
    });
  },

  render() {
    const config = this.getPageConfig();
    if (!config) {
      this.root.innerHTML = '<div class="empty-note">当前页面配置缺失。</div>';
      return;
    }

    if (config.type === 'partner-detail') {
      this.renderPartnerDetail();
      this.appendDialog();
      return;
    }

    if (config.type === 'overview') {
      this.renderOverview(config);
      return;
    }

    if (config.type === 'config') {
      this.renderConfig(config);
      return;
    }

    if (config.type === 'risk-config' || config.type === 'console-config') {
      this.renderRiskConfig(config);
      return;
    }

    if (config.type === 'basic-params-detail') {
      this.renderBasicParamsDetail(config);
      return;
    }

    if (config.type === 'settlement-detail') {
      this.renderSettlementDetail(config);
      this.appendDialog();
      return;
    }

    if (config.type === 'community-feed-detail') {
      this.renderCommunityFeedDetail(config);
      this.appendDialog();
      return;
    }

    if (config.type === 'risk-report-detail') {
      this.renderRiskReportDetail(config);
      this.appendDialog();
      return;
    }

    if (config.type === 'detail') {
      this.renderRecordDetail(config);
      this.appendDialog();
      return;
    }

    this.renderList(config);
    this.appendDialog();
  },

  appendDialog() {
    if (!this.uiState?.dialog) {
      return;
    }
    this.root.insertAdjacentHTML('beforeend', this.renderDialog());
  },

  renderActions(actions) {
    return actions.map(action => this.renderActionButton(action, 'btn')).join('');
  },

  renderTabs(tabs = []) {
    if (!tabs.length) {
      return '';
    }

    return `
      <div class="queue-tabs">
        ${tabs.map(tab => `
          <button
            class="queue-tab ${tab.active ? 'active' : ''}"
            type="button"
            data-page-tab-key="${tab.stateKey || 'activeTab'}"
            data-page-tab-value="${tab.value}"
          >
            <span>${tab.label}</span>
            <span class="bullet-meta">${tab.count}</span>
          </button>
        `).join('')}
      </div>
    `;
  },

  renderFilterFields(filters = []) {
    return filters.map((field, index) => {
      const fieldKey = this.getFilterKey(field, index);
      const fieldValue = this.getFilterValue(field, index);
      if (field.type === 'select') {
        return `
          <select class="input" data-page-filter-key="${fieldKey}" style="${field.style || 'min-width:180px;'}">
            ${field.options.map(option => `<option ${fieldValue === option.label ? 'selected' : ''}>${option.label}</option>`).join('')}
          </select>
        `;
      }

      return `<input class="input" data-page-filter-key="${fieldKey}" style="${field.style || 'min-width:220px;'}" placeholder="${field.placeholder || ''}" value="${fieldValue || field.value || ''}">`;
    }).join('');
  },

  renderStats(stats) {
    return `
      <div class="stats-grid">
        ${stats.map(item => `
          <div class="stat-card">
            <div class="stat-label">${item[0]}</div>
            <div class="stat-value">${item[1]}</div>
            <div class="stat-meta">${item[2] || ''}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderStatusCards(cards = []) {
    return `
      <div class="stats-grid">
        ${cards.map(card => `
          <button
            class="stat-card"
            type="button"
            data-status-card-filter-key="${AdminCore.escapeHTML(card.filterKey || '')}"
            data-status-card-filter-value="${AdminCore.escapeHTML(card.filterValue || '')}"
            style="text-align:left; cursor:pointer; border:${card.active ? '1px solid var(--color-primary)' : '1px solid var(--color-border-light)'}; box-shadow:${card.active ? '0 8px 20px rgba(47, 125, 232, 0.12)' : 'var(--shadow-sm)'}; background:${card.active ? 'linear-gradient(180deg, rgba(77, 163, 255, 0.08), rgba(255, 255, 255, 0.96))' : 'var(--color-bg-primary)'};"
          >
            <div class="stat-label">${AdminCore.escapeHTML(card.label || '')}</div>
            <div class="stat-value">${AdminCore.escapeHTML(String(card.value || '0'))}</div>
            <div class="stat-meta">${AdminCore.escapeHTML(card.meta || '')}</div>
          </button>
        `).join('')}
      </div>
    `;
  },

  renderList(config) {
    const filters = config.filterFields || [{ type: 'text', placeholder: config.filtersPlaceholder }];
    const filteredRows = this.getFilteredRows(config.rows, filters);
    const pagination = this.paginateRows(filteredRows);
    const rows = pagination.items;
    const selectedIds = config.selectable ? this.getSelectedIds() : [];
    const visibleRowIds = rows.map(row => row[0]);
    const selectedRows = config.selectable ? config.rows.filter(row => selectedIds.includes(row[0])) : [];
    const allVisibleSelected = visibleRowIds.length && visibleRowIds.every(recordId => selectedIds.includes(recordId));
    const hiddenColumnIndexes = new Set(config.hiddenColumnIndexes || []);
    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          ${this.renderFilterFields(filters)}
          <button class="btn btn-primary" type="button" data-generic-action="search" data-message="已刷新${config.tableTitle}筛选结果">搜索</button>
          <button class="btn" type="button" data-generic-action="reset" data-message="筛选条件已重置">重置</button>
          ${config.actions?.length ? `<div class="page-actions account-toolbar-actions">${this.renderActions(config.actions || [])}</div>` : ''}
        </div>
      </div>
      ${config.statusCards?.length ? this.renderStatusCards(config.statusCards) : ''}
      ${config.selectable ? `
        <div class="bulk-bar ${selectedRows.length ? 'active' : ''}">
          <div>已选择 <strong>${selectedRows.length}</strong> 条${config.bulkItemName || '记录'}。${config.bulkHint || '批量处理前会校验选择范围。'}</div>
          <div class="page-actions">
            ${(config.bulkActions || []).map(action => `
              <button
                class="btn btn-sm ${action.danger ? 'btn-danger' : ''}"
                type="button"
                data-generic-action="${action.kind || 'community-feed-bulk'}"
                data-bulk-action="${action.action}"
                data-next-status="${action.nextStatus || ''}"
                data-message="${action.message || ''}"
              >${action.label}</button>
            `).join('')}
          </div>
        </div>
      ` : ''}
      ${filteredRows.length ? `
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                ${config.selectable ? `<th class="checkbox-cell"><input type="checkbox" data-list-select-all="${visibleRowIds.join(',')}" ${allVisibleSelected ? 'checked' : ''}></th>` : ''}
                ${config.columns.map((column, index) => hiddenColumnIndexes.has(index) ? '' : `<th>${column}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${rows.map(row => `
                <tr>
                  ${config.selectable ? `<td class="checkbox-cell"><input type="checkbox" data-list-row-select="${row[0]}" ${selectedIds.includes(row[0]) ? 'checked' : ''}></td>` : ''}
                  ${row.map((cell, index) => {
                    if (hiddenColumnIndexes.has(index)) {
                      return '';
                    }
                    if (index === row.length - 1 && typeof cell === 'object') {
                      if (Array.isArray(cell.actions)) {
                        return `
                          <td class="action-cell">
                            ${cell.actions.length ? cell.actions.map(action => this.renderActionButton({ kind: action.kind || 'toast', ...action })).join('') : '<span class="table-note">已处理</span>'}
                          </td>
                        `;
                      }
                      if (cell.route) {
                        return `<td class="action-cell">${this.renderActionButton(cell)}</td>`;
                      }
                      return `<td class="action-cell">${this.renderActionButton(cell)}</td>`;
                    }
                    return `<td>${cell}</td>`;
                  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${AdminCore.renderPagination(`共 ${filteredRows.length} 条记录，当前第 ${pagination.currentPage} 页`, pagination.currentPage, pagination.totalPages)}
      ` : `
        <div class="section-card">
          <div class="empty-state">
            <div class="icon">⌕</div>
            <div class="title">没有匹配结果</div>
            <div class="description">当前筛选条件下没有找到符合条件的记录，可以重置筛选后继续查看。</div>
            <div class="page-actions" style="margin-top:16px;">
              <button class="btn" type="button" data-generic-action="reset" data-message="筛选条件已重置">重置筛选</button>
            </div>
          </div>
        </div>
      `}
    `;
  },

  renderOverview(config) {
    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="table-note">当前页面为概览页，保留核心观察与导出入口。</div>
          ${config.actions?.length ? `<div class="page-actions account-toolbar-actions">${this.renderActions(config.actions || [])}</div>` : ''}
        </div>
      </div>
      ${config.trends ? `
        <div class="trend-strip" style="margin-bottom:16px;">
          ${config.trends.map(item => `
            <div class="trend-card">
              <div class="trend-card-title">${item.label}</div>
              <div class="trend-card-value">${item.value}</div>
              <div class="trend-card-copy">${item.copy}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="split-layout">
        <div class="section-card">
          <div class="card-header"><div class="card-title">核心观察</div></div>
          <div class="bullet-list">
            ${config.bullets.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta">概览</div></div>`).join('')}
          </div>
        </div>
        <div class="section-card">
          <div class="card-header"><div class="card-title">核心指标</div></div>
          <div class="summary-grid">
            ${config.stats.map(item => `
              <div class="summary-item">
                <div class="summary-item-label">${item[0]}</div>
                <div class="summary-item-value">${item[1]}</div>
              </div>
            `).join('')}
          </div>
          ${config.formulas ? `<div class="section-hint" style="margin-top:16px;">统一口径：${config.formulas.join(' / ')}</div>` : ''}
        </div>
      </div>
      ${config.breakdownTable ? `
        <div class="section-card" style="margin-top:16px;">
          <div class="card-header"><div class="card-title">${config.breakdownTable.title}</div></div>
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>${config.breakdownTable.columns.map(item => `<th>${item}</th>`).join('')}</tr>
              </thead>
              <tbody>
                ${config.breakdownTable.rows.map(row => `<tr>${row.map(item => `<td>${item}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      ` : ''}
    `;
  },

  renderConfig(config) {
    const draft = this.getLocalDraft();
    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="table-note">本地草稿：${draft.updatedAt || '尚未修改'}</div>
          ${config.actions?.length ? `<div class="page-actions account-toolbar-actions">${this.renderActions(config.actions || [])}</div>` : ''}
        </div>
      </div>
      <div class="panel-stack">
        ${config.rules.map((item, index) => `
          <div class="section-card">
            <div class="form-group">
              <label class="form-label">${item[0]}</label>
              <textarea class="input" data-draft-field="rule_${index}" style="width:100%; height:auto; min-height:96px; padding:12px 16px; resize:vertical;">${draft[`rule_${index}`] || item[1]}</textarea>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderRiskConfig(config) {
    const draft = this.getLocalDraft();
    this.root.innerHTML = `
      ${this.renderTabs(config.tabs || [])}
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="table-note">${config.bannerLabel || '当前为配置控制台'} · ${draft.updatedAt || '尚未修改'}</div>
          ${config.actions?.length ? `<div class="page-actions account-toolbar-actions">${this.renderActions(config.actions || [])}</div>` : ''}
        </div>
      </div>
      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card">
            <div class="summary-grid">
              ${config.stats.map(item => `
                <div class="summary-item">
                  <div class="summary-item-label">${item[0]}</div>
                  <div class="summary-item-value">${item[1]}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">${config.table.title}</div></div>
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>${config.table.columns.map(item => `<th>${item}</th>`).join('')}</tr>
                </thead>
                <tbody>
                  ${config.table.rows.map(row => `
                    <tr>
                      ${row.map(cell => {
                        if (typeof cell === 'object') {
                          if (cell.route) {
                            return `<td class="action-cell"><button class="btn btn-sm" type="button" data-route="${cell.route}">${cell.label}</button></td>`;
                          }
                          return `<td class="action-cell"><button class="btn btn-sm" type="button" data-generic-action="${cell.kind}" data-message="${cell.message}">${cell.label}</button></td>`;
                        }
                        return `<td>${cell}</td>`;
                      }).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">${config.paramsTitle || '关键参数'}</div></div>
            ${config.params.map((item, index) => `
              <div class="field-row">
                <div>
                  <div>${item.label}</div>
                  <div class="switch-copy">${item.copy}</div>
                </div>
                <textarea class="input" data-draft-field="risk_param_${index}" style="width:100%; min-height:72px; padding:10px 12px; resize:vertical;">${draft[`risk_param_${index}`] || item.value}</textarea>
                <button class="btn btn-sm" type="button" data-generic-action="toast" data-message="已记录参数修改建议，保存后统一生效">记录</button>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">变更约束</div></div>
            <div class="bullet-list">
              ${config.auditNotes.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta">留痕</div></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderBasicParamsDetail(config) {
    const draft = this.getLocalDraft();
    const isEditing = draft.basicParamsEditing === true;
    const escape = value => AdminCore.escapeHTML(value);
    const valueKey = index => `basic_param_${config.activeTab}_${index}`;
    const tabs = (config.tabs || []).map(tab => `
      <button
        class="queue-tab ${tab.active ? 'active' : ''}"
        type="button"
        data-page-tab-key="${tab.stateKey || 'activeTab'}"
        data-page-tab-value="${tab.value}"
      >${escape(tab.label)}</button>
    `).join('');
    this.root.innerHTML = `
      <div class="queue-tabs">${tabs}</div>
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">${escape(config.table.title)}详情</div>
          <div class="page-actions account-toolbar-actions">
            ${isEditing
              ? '<button class="btn btn-primary" type="button" data-generic-action="save-basic-params">保存</button>'
              : '<button class="btn btn-primary" type="button" data-generic-action="edit-basic-params">编辑</button>'}
          </div>
        </div>
      </div>
      <div class="section-card">
        <div class="card-header"><div class="card-title">${escape(config.table.title)}</div></div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>${config.table.columns.map(column => `<th>${escape(column)}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${config.table.rows.map((row, index) => {
                const key = valueKey(index);
                const valueConfig = typeof row[1] === 'object' ? row[1] : { number: row[1], unit: '' };
                const currentValue = draft[key] !== undefined ? draft[key] : valueConfig.number;
                const displayValue = `${currentValue}${valueConfig.unit ? ` ${valueConfig.unit}` : ''}`;
                return `
                  <tr>
                    <td>${escape(row[0])}</td>
                    <td>
                      ${isEditing
                        ? `
                          <div class="filter-row" style="gap:8px; align-items:center;">
                            <input class="input" type="number" min="0" step="1" data-draft-field="${escape(key)}" value="${escape(currentValue)}" style="width:120px;">
                            ${valueConfig.unit ? `<span class="section-hint" style="margin:0;">${escape(valueConfig.unit)}</span>` : ''}
                          </div>
                        `
                        : escape(displayValue)}
                    </td>
                    <td>${escape(row[2])}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderInfoPairs(pairs = []) {
    if (!pairs.length) {
      return '';
    }

    return `
      <div class="info-grid">
        ${pairs.map(item => `
          <div class="info-pair">
            <div class="info-pair-label">${item[0]}</div>
            <div class="info-pair-value">${item[1]}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderTimeline(items = []) {
    if (!items.length) {
      return '';
    }

    return `
      <div class="timeline">
        ${items.map(item => `
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div>${item.title}</div>
              ${item.desc ? `<div class="section-hint">${item.desc}</div>` : ''}
              <div class="timeline-time">${item.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  getPricingRuleDescription(key, values = {}) {
    const descriptions = {
      basePrice: `每增加一档（${values.rangeStep || 'x km'} * ${values.durationStep || 'x h'}）加${values.basePrice || 'x 元'}`,
      rangeStart: '加减器最小单位',
      rangeStep: '每次增加的范围',
      durationStep: '每次增加的时长',
      defaultValue: '加减器默认展示值'
    };
    return descriptions[key] || '';
  },

  renderPricingRuleTable(config, recordId, detail = {}, readonly = false) {
    const fields = config.pricingRuleFields || [];
    if (!fields.length) {
      return '';
    }

    const escape = value => AdminCore.escapeHTML(value);
    const values = fields.reduce((acc, field) => {
      const fallback = this.getRecordFieldDefault(config, recordId, detail, field);
      acc[field.key] = this.getRecordValue(config.parentRoute, recordId, field.key, fallback) || '';
      return acc;
    }, {});

    return `
      <div class="form-group pricing-rule-table-group">
        <label class="form-label">计费规则</label>
        <div class="table-container pricing-rule-table-wrap">
          <table class="table pricing-rule-table">
            <thead>
              <tr>
                <th>参数</th>
                <th>当前值</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              ${fields.map(field => {
                const value = values[field.key] || '';
                const description = this.getPricingRuleDescription(field.key, values);
                return `
                  <tr>
                    <td>${escape(field.label)}</td>
                    <td>
                      ${readonly ? escape(value || '-') : `
                        <input
                          class="input pricing-rule-input"
                          data-record-field-route="${config.parentRoute}"
                          data-record-id="${escape(recordId)}"
                          data-record-field-key="${field.key}"
                          value="${escape(value)}"
                          placeholder="${escape(field.placeholder || '')}"
                        >
                      `}
                    </td>
                    <td>${escape(description)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderCouponQuantityTable(config, recordId, detail = {}) {
    const coupons = this.getCouponOptionItems();
    const stored = this.getStoredRecord(config.parentRoute, recordId);
    const fallbackIds = detail.rewardCouponIds || this.getRecordFieldDefault(config, recordId, detail, { key: 'rewardCouponIds' });
    const items = this.getRewardCouponItems({ ...detail, ...stored }, fallbackIds);
    const displayItems = items.length ? items : [{ couponId: '', quantity: '1' }];
    const escape = value => AdminCore.escapeHTML(value);

    return `
      <div class="form-group coupon-quantity-table-group">
        <div style="padding:16px; border:1px solid var(--color-border); border-radius:8px; background:#f5f7fa;">
          <label class="form-label" style="margin-bottom:12px; display:block;">关联优惠券</label>
          <div class="panel-stack" style="gap:10px;">
          ${coupons.length ? displayItems.map((item, index) => `
            <div
              class="filter-row"
              data-reward-coupon-item
              data-record-field-route="${config.parentRoute}"
              data-record-id="${escape(recordId)}"
              data-reward-coupon-index="${index}"
              style="align-items:flex-end; gap:6px; flex-wrap:wrap;"
            >
              <div style="flex:0 1 360px; min-width:240px;">
                <div class="section-hint" style="margin-bottom:6px;">关联优惠券 ${index + 1}</div>
                <select
                  class="input"
                  data-reward-coupon-select
                  data-record-field-route="${config.parentRoute}"
                  data-record-id="${escape(recordId)}"
                  data-reward-coupon-index="${index}"
                >
                  <option value="">请选择优惠券</option>
                  ${coupons.map(coupon => `<option value="${escape(coupon.id)}" ${item.couponId === coupon.id ? 'selected' : ''}>${escape(coupon.name)}（${escape(coupon.benefit)}）</option>`).join('')}
                </select>
              </div>
              <div style="width:116px; flex:0 0 116px;">
                <div class="section-hint" style="margin-bottom:6px;">优惠券发放数量</div>
                <input
                  class="input"
                  type="number"
                  min="1"
                  step="1"
                  data-reward-coupon-qty
                  data-record-field-route="${config.parentRoute}"
                  data-record-id="${escape(recordId)}"
                  data-reward-coupon-index="${index}"
                  value="${escape(item.quantity || '1')}"
                >
              </div>
              ${displayItems.length > 1 ? `
                <button
                  class="btn"
                  type="button"
                  style="flex:0 0 auto;"
                  data-generic-action="remove-reward-coupon-item"
                  data-record-route="${config.parentRoute}"
                  data-record-id="${escape(recordId)}"
                  data-reward-coupon-index="${index}"
                >删除</button>
              ` : ''}
            </div>
          `).join('') : `
            <div class="empty-cell" style="padding:16px; border:1px solid var(--color-border); border-radius:6px;">
              请先在优惠券配置中启用优惠券
            </div>
          `}
          <div>
            <button
              class="btn"
              type="button"
              data-generic-action="add-reward-coupon-item"
              data-record-route="${config.parentRoute}"
              data-record-id="${escape(recordId)}"
              ${displayItems.length >= 10 || !coupons.length ? 'disabled' : ''}
            >添加</button>
            <div class="section-hint" style="margin-top:6px;">最多可添加 10 组。</div>
          </div>
        </div>
        </div>
      </div>
    `;
  },

  renderRecordFields(config, recordId, detail = {}, status = '') {
    const formFields = config.formFields || detail.formFields || [];
    if (!formFields.length || (config.formStatuses && !config.formStatuses.includes(status))) {
      return '';
    }

    return `
      <div class="section-card">
        <div class="card-header"><div class="card-title">${config.formTitle || '处理字段'}</div></div>
        <div class="panel-stack">
          ${formFields.map(field => {
            if (field.visibleWhen) {
              const visibleFallback = this.getRecordFieldDefault(config, recordId, detail, { key: field.visibleWhen.key });
              const visibleValue = this.getRecordValue(config.parentRoute, recordId, field.visibleWhen.key, visibleFallback);
              const visibleValues = field.visibleWhen.values || [field.visibleWhen.value];
              if (!visibleValues.includes(visibleValue)) {
                return '';
              }
            }
            const fallback = this.getRecordFieldDefault(config, recordId, detail, field);
            const value = this.getRecordValue(config.parentRoute, recordId, field.key, fallback);
            const disabledAttr = field.readonly ? 'disabled' : '';
            if (field.type === 'pricing-rule-table') {
              return this.renderPricingRuleTable(config, recordId, detail, false);
            }

            if (field.type === 'coupon-quantity-table') {
              return this.renderCouponQuantityTable(config, recordId, detail);
            }

            if (field.type === 'select') {
              const options = this.filterFieldOptions(config, recordId, detail, field);
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <select class="input" data-record-field-route="${config.parentRoute}" data-record-id="${recordId}" data-record-field-key="${field.key}">
                    ${options.map(option => `<option value="${option}" ${value === option ? 'selected' : ''}>${option}</option>`).join('')}
                  </select>
                </div>
              `;
            }

            if (field.type === 'multiselect') {
              const selectedValues = String(value || '')
                .split(/[/,，、]/)
                .map(item => item.trim())
                .filter(Boolean);
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <select
                    class="input"
                    multiple
                    data-record-field-route="${config.parentRoute}"
                    data-record-id="${recordId}"
                    data-record-field-key="${field.key}"
                    style="min-height:108px;"
                  >
                    ${field.options.map(option => `<option value="${option}" ${selectedValues.includes(option) ? 'selected' : ''}>${option}</option>`).join('')}
                  </select>
                </div>
              `;
            }

            if (field.type === 'tag-multiselect') {
              const selectedValues = String(value || '')
                .split(/[/,，、]/)
                .map(item => item.trim())
                .filter(Boolean);
              const groups = field.groups || [{ label: '默认', options: field.options || [] }];
              const displayText = selectedValues.length ? selectedValues.join(' / ') : '请选择';
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <div class="input" style="display:flex; align-items:center; justify-content:space-between; min-height:40px; color:${selectedValues.length ? 'var(--color-text)' : 'var(--color-text-muted)'};">
                    <span>${displayText}</span>
                    <span style="color:var(--color-text-muted);">⌄</span>
                  </div>
                  <div style="display:grid; grid-template-columns:180px 1fr; border:1px solid var(--color-border); border-radius:6px; overflow:hidden; margin-top:10px; background:var(--color-bg); min-height:148px;">
                    <div style="border-right:1px solid var(--color-border); background:var(--color-bg-muted);">
                      ${groups.map((group, index) => `
                        <div style="height:44px; display:flex; align-items:center; justify-content:space-between; padding:0 14px; color:${index === 0 ? 'var(--color-primary)' : 'var(--color-text)'}; font-weight:${index === 0 ? 600 : 400};">
                          <label style="display:flex; align-items:center; gap:8px; cursor:pointer;">
                            <input type="checkbox" disabled style="width:14px; height:14px;">
                            <span>${group.label}</span>
                          </label>
                          <span>›</span>
                        </div>
                      `).join('')}
                    </div>
                    <div style="display:grid; grid-template-columns:repeat(2, minmax(120px, 1fr)); align-content:start;">
                      ${groups.flatMap(group => group.options).map(option => `
                        <label style="height:44px; display:flex; align-items:center; gap:8px; padding:0 18px; cursor:pointer;">
                          <input
                            type="checkbox"
                            data-record-tag-option="${option}"
                            data-record-tag-route="${config.parentRoute}"
                            data-record-id="${recordId}"
                            data-record-tag-key="${field.key}"
                            ${selectedValues.includes(option) ? 'checked' : ''}
                            style="width:14px; height:14px;"
                          >
                          <span>${option}</span>
                        </label>
                      `).join('')}
                    </div>
                  </div>
                </div>
              `;
            }

            if (field.type === 'datetime-range') {
              const range = this.parseDisplayRange(value);
              const startValue = this.getRecordValue(config.parentRoute, recordId, `${field.key}Start`, range.start);
              const endValue = this.getRecordValue(config.parentRoute, recordId, `${field.key}End`, range.end);
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <div class="filter-row" style="gap:8px;">
                    <input
                      class="input"
                      type="datetime-local"
                      data-record-field-route="${config.parentRoute}"
                      data-record-id="${recordId}"
                      data-record-field-key="${field.key}Start"
                      value="${startValue}"
                    >
                    <span class="section-hint">至</span>
                    <input
                      class="input"
                      type="datetime-local"
                      data-record-field-route="${config.parentRoute}"
                      data-record-id="${recordId}"
                      data-record-field-key="${field.key}End"
                      value="${endValue}"
                    >
                  </div>
                  <div class="section-hint" style="margin-top:6px;">支持精确到时分，结束时间需大于当前时间 5 分钟。</div>
                </div>
              `;
            }

            if (field.type === 'image-upload') {
              const imageHint = this.getImageUploadHint(config, recordId, detail, field);
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <div class="filter-row" style="gap:8px;">
                    <input
                      class="input"
                      data-record-field-route="${config.parentRoute}"
                      data-record-id="${recordId}"
                      data-record-field-key="${field.key}"
                      value="${value}"
                      placeholder="${field.placeholder || ''}"
                    >
                    <button class="btn" type="button" data-generic-action="toast" data-message="图片上传组件已打开，demo 中可直接填写素材地址">上传图片</button>
                  </div>
                  <div class="section-hint" style="margin-top:6px;">${imageHint}</div>
                </div>
              `;
            }

            if (field.type === 'textarea') {
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <textarea
                    class="input"
                    data-record-field-route="${config.parentRoute}"
                    data-record-id="${recordId}"
                    data-record-field-key="${field.key}"
                    ${disabledAttr}
                    style="width:100%; min-height:${field.minHeight || 96}px; padding:12px 16px; resize:vertical;"
                    placeholder="${field.placeholder || ''}"
                  >${value}</textarea>
                </div>
              `;
            }

            if (field.type === 'number') {
              return `
                <div class="form-group">
                  <label class="form-label">${field.label}</label>
                  <input
                    class="input"
                    type="number"
                    min="${field.min ?? 0}"
                    step="${field.step || 1}"
                    data-record-field-route="${config.parentRoute}"
                    data-record-id="${recordId}"
                    data-record-field-key="${field.key}"
                    ${disabledAttr}
                    value="${value}"
                    placeholder="${field.placeholder || ''}"
                  >
                </div>
              `;
            }

            return `
              <div class="form-group">
                <label class="form-label">${field.label}</label>
                <input
                  class="input"
                  data-record-field-route="${config.parentRoute}"
                  data-record-id="${recordId}"
                  data-record-field-key="${field.key}"
                  ${disabledAttr}
                  value="${value}"
                  placeholder="${field.placeholder || ''}"
                >
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  },

  renderRecordConfigSummary(config, recordId, detail = {}, status = '') {
    const fields = config.configSummaryFields || [];
    const formVisible = !config.formStatuses || config.formStatuses.includes(status);
    if (!fields.length || formVisible) {
      return '';
    }
    const escape = value => AdminCore.escapeHTML(value);
    const wideFieldKeys = ['announcementContent', 'adImage'];
    const pricingTable = this.renderPricingRuleTable(config, recordId, detail, true);

    return `
      <div class="section-card readonly-config-card">
        <div class="card-header"><div class="card-title">${config.formTitle || '配置字段'}</div></div>
        <div class="info-grid readonly-config-grid">
          ${fields.map(field => {
            const fallback = this.getRecordFieldDefault(config, recordId, detail, field);
            const value = this.getRecordValue(config.parentRoute, recordId, field.key, fallback) || '-';
            const isWide = field.wide || wideFieldKeys.includes(field.key);
            let displayValue = `<div class="info-pair-value readonly-config-value">${escape(value)}</div>`;

            if (config.parentRoute === 'community/ads.html' && field.key === 'adImage') {
              displayValue = value && value !== '-'
                ? `
                  <div class="readonly-config-media">
                    ${AdminCore.renderMediaGallery([{ src: value, label: field.label, title: field.label, note: '广告位已上传图片预览。' }], { title: field.label, note: '广告位已上传图片预览。' })}
                    <div class="section-hint">${escape(this.getImageUploadHint(config, recordId, detail, field))}</div>
                  </div>
                `
                : '<div class="info-pair-value readonly-config-value">未上传图片</div>';
            }

            return `
              <div class="info-pair readonly-config-item" ${isWide ? 'style="grid-column:1/-1;"' : ''}>
                <div class="info-pair-label">${escape(field.label)}</div>
                ${displayValue}
              </div>
            `;
          }).join('')}
        </div>
        ${pricingTable}
      </div>
    `;
  },

  filterFieldOptions(config, recordId, detail, field) {
    return field.options || [];
  },

  getImageUploadHint(config, recordId, detail, field) {
    if (config.parentRoute === 'community/ads.html' && field.key === 'adImage') {
      const position = this.getRecordValue(config.parentRoute, recordId, 'adPosition', this.getRecordFieldDefault(config, recordId, detail, { key: 'adPosition' }));
      return position === '弹窗'
        ? '图片尺寸：弹窗建议 600x800px。'
        : '图片尺寸：Banner 建议 750x300px。';
    }
    return field.hint || '图片上传组件：支持本地上传、素材预览和失败后保存草稿。';
  },

  getRecordFieldDefault(config, recordId, detail, field) {
    if (detail[field.key] !== undefined) {
      return detail[field.key];
    }
    const detailField = (detail.formFields || []).find(item => item.key === field.key);
    if (detailField?.defaultValue !== undefined) {
      return detailField.defaultValue;
    }
    if (field.defaultValue !== undefined) {
      return field.defaultValue;
    }
    const row = (config.rows || []).find(item => item[0] === recordId) || [];
    if (config.parentRoute === 'community/announcements.html') {
      if (field.key === 'announcementTitle') {
        return row[1] || '';
      }
      if (field.key === 'announcementContent') {
        const pair = (detail.infoPairs || []).find(item => item[0] === '富文本内容');
        return pair ? pair[1] : '';
      }
      if (field.key === 'displayRange') {
        return row[5] || '';
      }
      if (field.key === 'targetGroup') {
        if (String(row[3] || '').includes('特定城市')) {
          return '特定城市';
        }
        if (String(row[3] || '').includes('特定认证状态')) {
          return '特定认证状态';
        }
        if (!row[3] || String(row[3]).includes('全部')) {
          return '全部';
        }
        return row[3] || '全部';
      }
      if (field.key === 'pushChannels') {
        return row[4] || '平台系统消息（消息页）';
      }
    }
    if (config.parentRoute === 'community/ads.html') {
      if (field.key === 'adTitle') {
        return row[1] || '';
      }
      if (field.key === 'adPosition') {
        return row[2] || '首页轮播 Banner';
      }
      if (field.key === 'adImage') {
        const pair = (detail.infoPairs || []).find(item => item[0] === '广告图片');
        return pair ? pair[1] : '';
      }
      if (field.key === 'jumpType') {
        return row[3] || '内部路径';
      }
      if (field.key === 'jumpTarget') {
        const pair = (detail.infoPairs || []).find(item => item[0] === '跳转目标');
        return pair ? pair[1] : '';
      }
      if (field.key === 'displayRange') {
        const pair = (detail.infoPairs || []).find(item => item[0] === '投放时段');
        if (pair) {
          return pair[1];
        }
        return row[4] || '';
      }
      if (field.key === 'sortOrder') {
        return row[5] || '';
      }
      if (field.key === 'carouselInterval') {
        return '3 秒';
      }
    }
    if (config.parentRoute === 'ops/coupons.html') {
      if (field.key === 'couponId') {
        return row[0] || recordId;
      }
      if (field.key === 'couponName') {
        return row[1] || '待命名优惠券';
      }
      if (field.key === 'couponType') {
        return row[2] || '满减';
      }
      if (field.key === 'discountAmount') {
        const stored = this.getStoredRecord(config.parentRoute, recordId);
        if (stored.discountAmount) {
          return stored.discountAmount;
        }
        const match = String(row[3] || '').match(/减([\d.]+)/);
        return match ? match[1] : '';
      }
      if (field.key === 'discountRate') {
        const stored = this.getStoredRecord(config.parentRoute, recordId);
        if (stored.discountRate) {
          return stored.discountRate;
        }
        return '';
      }
      if (field.key === 'threshold') {
        if ((row[2] || '') === '立减') {
          return '无门槛';
        }
        return String(row[3] || '').replace(/[^\d.]/g, '') || '';
      }
      if (field.key === 'usageScope') {
        return row[4] || '全部项目';
      }
      if (field.key === 'deductionScope') {
        return row[5] || '仅任务金额';
      }
      if (field.key === 'stackable') {
        return row[6] || '否';
      }
    }
    if (config.parentRoute === 'ops/rewards.html') {
      if (field.key === 'ruleId') {
        return row[0] || recordId;
      }
      if (field.key === 'ruleName') {
        return row[1] || '待命名奖励规则';
      }
      if (field.key === 'couponBundle') {
        return this.formatRewardCouponBundle(this.getStoredRecord(config.parentRoute, recordId), row[3]);
      }
      if (field.key === 'rewardCouponIds') {
        return this.parseRewardCouponIds(row[3]).join(' / ');
      }
      if (field.key === 'triggerCondition') {
        return row[2] || '每笔订单首次转发';
      }
      if (field.key === 'activityRange') {
        return row[4] || '';
      }
      if (field.key === 'dailyIssueLimit') {
        return detail.dailyIssueLimit || '500';
      }
      if (field.key === 'warningThreshold') {
        return detail.warningThreshold || '8000';
      }
      if (field.key === 'userDailyLimit') {
        return detail.userDailyLimit || '1';
      }
      if (field.key === 'issuedCount') {
        return row[5] || detail.issuedCount || '0';
      }
      if (field.key === 'warningStatus') {
        return row[6] || '未达预警';
      }
    }
    if (config.parentRoute === 'ops/urgent-pin.html') {
      if (field.key === 'ruleId') {
        return row[0] || recordId;
      }
      if (field.key === 'ruleName') {
        return row[1] || '待命名置顶规则';
      }
      if (field.key === 'ruleDescription') {
        return '用于配置发布确认页和置顶购买页的急单置顶计费参数。';
      }
      if (field.key === 'basePrice') {
        return row[2] || '5 元';
      }
      if (field.key === 'rangeStart') {
        return row[3] || '10 km';
      }
      if (field.key === 'rangeStep') {
        return row[3] || '10 km';
      }
      if (field.key === 'durationStep') {
        return row[4] || '1 h';
      }
      if (field.key === 'defaultValue') {
        return row[5] || '10 km · 2 h';
      }
      if (field.key === 'displayRange') {
        return row[6] || this.getDefaultUrgentPinRange(recordId);
      }
    }
    return '';
  },

  parseDisplayRange(value) {
    const [start = '', end = ''] = String(value || '').split(' 至 ');
    return {
      start: this.toDateTimeLocalValue(start),
      end: this.toDateTimeLocalValue(end)
    };
  },

  toDateTimeLocalValue(value) {
    const text = String(value || '').trim();
    const match = text.match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}:\d{2})/);
    return match ? `${match[1]}T${match[2]}` : '';
  },

  renderSettlementDetail(config) {
    const recordId = new URLSearchParams(window.location.search).get(config.queryKey || 'record') || config.rows[0][0];
    const selected = config.rows.find(item => item[0] === recordId) || config.rows[0];
    const detail = (config.details && config.details[recordId]) || {};
    const status = this.getEffectiveStatus(config.parentRoute, selected[0], selected[config.statusIndex]);
    const storedNote = this.getRecordValue(config.parentRoute, selected[0], 'settlementNote', '');
    const updatedAt = this.getEffectiveUpdatedAt(config.parentRoute, selected[0]);
    const actualAmount = this.getRecordValue(config.parentRoute, selected[0], 'actualSettlementAmount', selected[7]);
    const displayRow = [...selected];
    displayRow[7] = actualAmount;
    displayRow[8] = status;
    const statusClass = status === '已结算' ? 'tag-success' : status === '待核查' ? 'tag-danger' : 'tag-warning';
    const canSettle = status !== '已结算';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">合伙人结算详情 · ${selected[0]}</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="${config.parentRoute}">返回合伙人结算</button>
            ${canSettle ? this.renderActionButton({
              label: '确定结算',
              kind: 'open-settlement-note',
              primary: true,
              recordId: selected[0],
              dueAmount: selected[6],
              actualAmount: actualAmount === '待填写' ? selected[6] : actualAmount,
              settlementStatus: status
            }, 'btn') : ''}
          </div>
        </div>
      </div>
      <div class="panel-stack">
        <div class="section-card detail-hero-card">
          <div class="card-header">
            <div class="card-title">${selected[0]}</div>
            <span class="tag ${statusClass}">${status}</span>
          </div>
          <div class="summary-grid">
            ${config.columns.map((label, index) => `
              <div class="summary-item">
                <div class="summary-item-label">${label}</div>
                <div class="summary-item-value">${displayRow[index]}</div>
              </div>
            `).join('')}
          </div>
        </div>

        ${detail.metrics ? `
          <div class="trend-strip">
            ${detail.metrics.map(item => `
              <div class="trend-card">
                <div class="trend-card-title">${item.label}</div>
                <div class="trend-card-value">${item.value}</div>
                <div class="trend-card-copy">${item.copy}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${status === '待核查' && detail.reviewSignal ? `
          <div class="section-card">
            <div class="card-header"><div class="card-title">系统核查结论</div></div>
            <div class="risk-panel">
              <div class="risk-title">${detail.reviewSignal}</div>
              <div class="bullet-list" style="margin-top:12px;">
                ${(detail.reviewIssues || []).map(item => `
                  <div class="bullet-item">
                    <div><strong>${item.label}：${item.value}</strong><br><span class="section-hint">${item.copy}</span></div>
                    <div class="bullet-meta">异常</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : ''}

        ${detail.relatedTable ? `
          <div class="section-card">
            <div class="card-header"><div class="card-title">明细查看</div></div>
            <div class="evidence-list">
              ${detail.inviteeTable ? `
                <button class="evidence-item" type="button" data-generic-action="open-settlement-table" data-record-id="${selected[0]}" data-detail-key="inviteeTable">
                  <div class="evidence-title">拉新人员明细</div>
                  <div class="evidence-desc">查看被邀请用户、注册时间、首单订单和有效拉新状态。</div>
                </button>
              ` : ''}
              <button class="evidence-item" type="button" data-generic-action="open-settlement-table" data-record-id="${selected[0]}" data-detail-key="relatedTable">
                <div class="evidence-title">拉新订单与佣金明细</div>
                <div class="evidence-desc">订单金额、优惠金额、订单实收金额、分佣比例、分佣金额、退款扣回与最终佣金合并展示。</div>
              </button>
            </div>
          </div>
        ` : ''}

        ${status === '已结算' ? `
          <div class="section-card">
            <div class="card-header"><div class="card-title">结算备注</div><div class="table-note">${updatedAt}</div></div>
            <div class="section-hint" style="margin-top:0;">${storedNote || '确认结算，实际结算金额与应结佣金一致。'}</div>
          </div>
        ` : ''}
      </div>
    `;
  },

  renderCommunityFeedDetail(config) {
    const escape = value => AdminCore.escapeHTML(value);
    const recordId = new URLSearchParams(window.location.search).get(config.queryKey || 'record') || config.rows[0][0];
    const selected = config.rows.find(item => item[0] === recordId) || config.rows[0];
    const detail = (config.details && config.details[selected[0]]) || {};
    const status = this.getEffectiveStatus(config.parentRoute, selected[0], selected[config.statusIndex]);
    const accountStatus = this.getRecordValue(config.parentRoute, selected[0], 'publisherAccountStatus', selected[2]);
    const authorParts = String(selected[1] || '').split('/').map(item => item.trim());
    const publisher = detail.publisher || {
      nickname: authorParts[0] || selected[1],
      userId: authorParts[1] || '',
      creditScore: String(authorParts[2] || '').replace('信用分', '').trim(),
      route: authorParts[1] ? `user/detail.html?user=${encodeURIComponent(authorParts[1])}` : 'user/list.html'
    };
    const content = detail.content || { text: '', images: [], videos: [] };
    const actionButtons = [];

    if (status === '待人工裁定') {
      actionButtons.push({ label: '裁定上架', status: '已上架', success: '动态已裁定上架' });
      actionButtons.push({ label: '不予上架', status: '已下架', success: '动态已标记为不予上架，原因将推送给用户', primary: true });
    }
    if (status === '已上架') {
      actionButtons.push({ label: '手动下架', status: '已下架', success: '动态已手动下架，下架原因将推送给用户', primary: true });
    }
    if (status === '已下架') {
      actionButtons.push({ label: '重新裁定上架', status: '已上架', success: '动态已重新裁定上架', primary: true });
    }

    const canBanPublisher = this.isCommunityFeedRiskRow(selected);
    const renderStatusAction = action => `
      <button
        class="btn ${action.primary ? 'btn-primary' : ''}"
        type="button"
        data-record-action="record-status"
        data-record-route="${config.parentRoute}"
        data-record-id="${escape(selected[0])}"
        data-next-status="${action.status}"
        data-action-label="${escape(action.label)}"
        data-success="${action.success}"
      >${action.label}</button>
    `;
    const offlineReason = this.getRecordValue(config.parentRoute, selected[0], 'offlineReason', '');
    const userNotice = this.getRecordValue(config.parentRoute, selected[0], 'userNotice', '');
    const reasonUpdatedAt = offlineReason ? this.getEffectiveUpdatedAt(config.parentRoute, selected[0]) : '';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">动态详情</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="${config.parentRoute}">返回动态审核</button>
            ${canBanPublisher ? `<button class="btn btn-danger" type="button" data-generic-action="open-feed-publisher-ban" data-record-id="${escape(selected[0])}">封禁发布者</button>` : ''}
            ${actionButtons.map(renderStatusAction).join('')}
          </div>
        </div>
      </div>
      <div class="panel-stack">
        <div class="section-card detail-hero-card">
          <div class="card-header">
            <div class="card-title">发布者信息</div>
          </div>
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-item-label">发布者</div>
              <div class="summary-item-value">
                <button class="btn btn-sm" type="button" data-route="${escape(publisher.route)}">${escape(publisher.nickname)} / ${escape(publisher.userId)} / 信用分 ${escape(publisher.creditScore)}</button>
              </div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">账号状态</div>
              <div class="summary-item-value">${escape(accountStatus)}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">发布时间</div>
              <div class="summary-item-value">${escape(selected[3])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">举报人数</div>
              <div class="summary-item-value">${escape(selected[6])}</div>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">动态内容</div></div>
          <div class="info-grid">
            <div class="info-pair" style="grid-column:1/-1;">
              <div class="info-pair-label">文字</div>
              <div class="info-pair-value" style="white-space:pre-wrap;">${escape(content.text || '暂无文字')}</div>
            </div>
          </div>
          ${content.images?.length ? `
            <div style="margin-top:16px;">
              <div class="form-label">图片</div>
              ${AdminCore.renderMediaGallery(content.images, { title: '动态图片', note: '用户发布动态时上传的图片。' })}
            </div>
          ` : ''}
          ${content.videos?.length ? `
            <div style="margin-top:16px;">
              <div class="form-label">视频</div>
              ${AdminCore.renderMediaGallery(content.videos, { title: '动态视频', note: '用户发布动态时上传的视频。' })}
            </div>
          ` : ''}
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">AI 判断风险</div></div>
          <div class="risk-panel">
            <div class="risk-title">${escape(selected[5])}</div>
          </div>
        </div>

        ${offlineReason ? `
          <div class="section-card">
            <div class="card-header"><div class="card-title">历史处理原因</div><div class="table-note">${escape(reasonUpdatedAt)}</div></div>
            <div class="info-grid">
              <div class="info-pair">
                <div class="info-pair-label">原因</div>
                <div class="info-pair-value">${escape(offlineReason)}</div>
              </div>
              <div class="info-pair" style="grid-column:1/-1;">
                <div class="info-pair-label">推送给用户的说明</div>
                <div class="info-pair-value">${escape(userNotice || `动态已处理，原因：${offlineReason}`)}</div>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  },

  renderRiskReportTable(table) {
    if (!table?.rows?.length) {
      return '';
    }

    return `
      <div class="section-card">
        <div class="card-header"><div class="card-title">${table.title || '该用户历史被举报记录'}</div></div>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>${(table.columns || []).map(column => `<th>${AdminCore.escapeHTML(column)}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${table.rows.map(row => `
                <tr>
                  ${row.map(cell => {
                    if (typeof cell === 'object' && cell.route) {
                      return `<td class="action-cell"><button class="btn btn-sm" type="button" data-route="${AdminCore.escapeHTML(cell.route)}">${AdminCore.escapeHTML(cell.label)}</button></td>`;
                    }
                    return `<td>${AdminCore.escapeHTML(cell)}</td>`;
                  }).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderRiskReportDetail(config) {
    const escape = value => AdminCore.escapeHTML(value);
    const recordId = new URLSearchParams(window.location.search).get(config.queryKey || 'record') || config.rows[0][0];
    const selected = config.rows.find(item => item[0] === recordId) || config.rows[0];
    const detail = (config.details && config.details[selected[0]]) || {};
    const status = this.getEffectiveStatus(config.parentRoute, selected[0], selected[config.statusIndex]);
    const reporter = detail.reporter || { nickname: selected[2], userId: '', route: 'user/list.html', risk: '暂无风控标记。' };
    const reportedUser = detail.reportedUser || { nickname: String(selected[3] || '').split('/')[0]?.trim() || '-', userId: '', route: 'user/list.html', status: '暂无处置状态。' };
    const evidence = detail.reportEvidence || { text: selected[4] || '暂无举报说明。', images: [] };
    const processRecord = this.getStoredRecord(config.parentRoute, selected[0]);
    const processUpdatedAt = this.getEffectiveUpdatedAt(config.parentRoute, selected[0]);
    const showProcessRecord = status !== '待处理';
    const processRecordBlock = showProcessRecord ? `
        <div class="section-card">
          <div class="card-header"><div class="card-title">处理操作记录</div><div class="table-note">${escape(processUpdatedAt)}</div></div>
          <div class="info-grid">
            <div class="info-pair">
              <div class="info-pair-label">处置措施</div>
              <div class="info-pair-value">${escape(processRecord.disposalMeasure || processRecord.publisherBanType || '-')}</div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">封禁结果</div>
              <div class="info-pair-value">${escape(processRecord.publisherBanStatus || (processRecord.publisherBanReason ? '已记录封禁原因' : '-'))}</div>
            </div>
            <div class="info-pair" style="grid-column:1/-1;">
              <div class="info-pair-label">处理原因 / 备注</div>
              <div class="info-pair-value" style="white-space:pre-wrap;">${escape(processRecord.reportReason || processRecord.note || '该记录为历史数据，处理链路已保留。')}</div>
            </div>
            <div class="info-pair" style="grid-column:1/-1;">
              <div class="info-pair-label">通知内容</div>
              <div class="info-pair-value" style="white-space:pre-wrap;">${escape(processRecord.reportNotice || '-')}</div>
            </div>
          </div>
        </div>
    ` : '';
    const visibleActions = (config.actions || []).filter(action => !action.showStatuses || action.showStatuses.includes(status));
    const actionButtons = visibleActions.map(action => this.renderActionButton({
      ...action,
      recordId: selected[0]
    }, `btn${action.primary ? ' btn-primary' : ''}`)).join('');

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">举报详情</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="${config.parentRoute}">返回举报管理</button>
            ${actionButtons}
          </div>
        </div>
      </div>
      <div class="panel-stack record-detail-full">
        <div class="section-card detail-hero-card">
          <div class="card-header">
            <div class="card-title">举报信息</div>
            <span class="tag ${detail.statusTag || 'tag-info'}">${escape(status)}</span>
          </div>
          ${detail.warning ? `<div class="risk-panel" style="margin-bottom:16px;"><div class="risk-title">${escape(detail.warning.title)}</div><div class="section-hint" style="margin-top:0; color:var(--color-error);">${escape(detail.warning.copy)}</div></div>` : ''}
          <div class="summary-grid">
            <div class="summary-item">
              <div class="summary-item-label">举报ID</div>
              <div class="summary-item-value">${escape(selected[0])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">举报类型</div>
              <div class="summary-item-value">${escape(selected[1])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">举报人</div>
              <div class="summary-item-value"><button class="btn btn-sm" type="button" data-route="${escape(reporter.route)}">${escape(reporter.nickname)}${reporter.userId ? ` / ${escape(reporter.userId)}` : ''}</button></div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">被举报人</div>
              <div class="summary-item-value"><button class="btn btn-sm" type="button" data-route="${escape(reportedUser.route)}">${escape(reportedUser.nickname)}${reportedUser.userId ? ` / ${escape(reportedUser.userId)}` : ''}</button></div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">被举报对象</div>
              <div class="summary-item-value">${escape(selected[3])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">提交时间</div>
              <div class="summary-item-value">${escape(selected[5])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">优先级</div>
              <div class="summary-item-value">${escape(selected[6])}</div>
            </div>
            <div class="summary-item">
              <div class="summary-item-label">风控标记</div>
              <div class="summary-item-value">${escape(reporter.risk || '暂无风控标记。')}</div>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">被举报对象原始内容</div></div>
          <div class="evidence-list">
            <button class="evidence-item" type="button" data-generic-action="open-report-source" data-record-id="${escape(selected[0])}">
              <div class="evidence-title">${escape(detail.sourceContent?.title || selected[3] || '原始内容')}</div>
              <div class="evidence-desc">${escape(detail.sourceContent?.text || '点击查看被举报对象的完整原始内容。')}</div>
            </button>
          </div>
          <div class="section-hint" style="margin-top:10px;">${escape(reportedUser.status || '')}</div>
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">举报证据</div></div>
          <div class="info-grid">
            <div class="info-pair" style="grid-column:1/-1;">
              <div class="info-pair-label">文字说明</div>
              <div class="info-pair-value" style="white-space:pre-wrap;">${escape(evidence.text)}</div>
            </div>
          </div>
          ${evidence.images?.length ? `
            <div style="margin-top:16px;">
              <div class="form-label">图片证据</div>
              ${AdminCore.renderMediaGallery(evidence.images, { title: '举报证据图片', note: '举报人提交的完整图片证据。' })}
            </div>
          ` : '<div class="empty-cell" style="margin-top:16px;">暂无图片证据</div>'}
        </div>

        ${this.renderRiskReportTable(detail.relatedTable)}
        ${processRecordBlock}
      </div>
    `;
  },

  renderRecordDetail(config) {
    const recordId = new URLSearchParams(window.location.search).get(config.queryKey || 'record') || config.rows[0][0];
    const selected = [...(config.rows.find(item => item[0] === recordId) || config.rows[0])];
    const detail = (config.details && config.details[recordId]) || {};
    const status = this.getEffectiveStatus(config.parentRoute, selected[0], selected[config.statusIndex]);
    const storedRecord = this.getStoredRecord(config.parentRoute, selected[0]);
    if (config.statusIndex !== undefined) {
      selected[config.statusIndex] = status;
    }
    if (config.parentRoute === 'support/feedback.html' && storedRecord.handler) {
      selected[4] = storedRecord.handler;
    }
    const note = this.getEffectiveNote(config.parentRoute, selected[0], '');
    const updatedAt = this.getEffectiveUpdatedAt(config.parentRoute, selected[0]);
    const summaryColumnCount = config.summaryColumnCount || 4;
    const summaryItems = config.columns.slice(0, summaryColumnCount).map((label, index) => [label, selected[index]]);
    const detailItems = config.columns.slice(summaryColumnCount).map((label, index) => [label, selected[index + summaryColumnCount]]);
    const showSummary = config.hideSummary !== true;
    const showDetailItems = config.hideDetailItems !== true;
    const showFollowNote = config.hideFollowNote !== true;
    const showMetrics = config.hideMetrics !== true && (!config.metricStatuses || config.metricStatuses.includes(status));
    const showEvidences = config.hideEvidences !== true;
    const feedbackTimeline = config.parentRoute === 'support/feedback.html'
      ? [...(detail.timeline || []), ...((storedRecord.feedbackTimeline || []))]
      : [];
    const evidences = [...(detail.evidences || [])];
    const visibleActions = (config.actions || []).filter(action => !action.showStatuses || action.showStatuses.includes(status));
    const configSummaryBlock = this.renderRecordConfigSummary(config, selected[0], detail, status);
    const metricsBlock = detail.metrics && showMetrics ? `
      <div class="trend-strip">
        ${detail.metrics.map(item => `
          <div class="trend-card">
            <div class="trend-card-title">${item.label}</div>
            <div class="trend-card-value">${item.value}</div>
            <div class="trend-card-copy">${item.copy}</div>
          </div>
        `).join('')}
      </div>
    ` : '';
    const actionButtons = visibleActions.map(action => {
      const disabled = (detail.blockedActions || []).includes(action.label);
      if (action.route) {
        return this.renderActionButton({
          ...action,
          route: action.route.replace('{recordId}', encodeURIComponent(selected[0]))
        }, `btn${action.primary ? ' btn-primary' : ''}`);
      }
      if (action.kind && action.kind !== 'open-settlement-note') {
        return this.renderActionButton({
          ...action,
          recordId: selected[0]
        }, `btn${action.primary ? ' btn-primary' : ''}`);
      }
      if (action.kind === 'open-settlement-note') {
        if (disabled) {
          return `<button class="btn ${action.primary ? 'btn-primary' : ''}" type="button" disabled>${action.label}</button>`;
        }
        return this.renderActionButton({
          ...action,
          recordId: selected[0],
          dueAmount: selected[6],
          actualAmount: selected[7] === '待填写' ? selected[6] : selected[7],
          message: action.message
        }, `btn${action.primary ? ' btn-primary' : ''}`);
      }
      return `
        <button
          class="btn ${action.primary ? 'btn-primary' : ''}"
          type="button"
          ${disabled ? 'disabled' : ''}
          data-record-action="record-status"
          data-record-route="${config.parentRoute}"
          data-record-id="${selected[0]}"
          data-next-status="${action.status}"
          data-success="${disabled ? detail.blockedReason || action.success : action.success}"
        >${action.label}</button>
      `;
    }).join('');
    const saveButton = config.saveMessage && (!config.saveStatuses || config.saveStatuses.includes(status)) ? `
      <button
        class="btn btn-primary"
        type="button"
        data-record-action="save-record"
        data-record-route="${config.parentRoute}"
        data-record-id="${selected[0]}"
        data-success="${config.saveMessage}"
      >${config.saveLabel || '保存并生效'}</button>
    ` : '';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">${config.detailToolbarNote || `${config.parentLabel}详情页`}</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="${config.parentRoute}">返回${config.parentLabel}</button>
            ${saveButton}
            ${actionButtons}
          </div>
        </div>
      </div>
      <div class="${config.fullWidthDetail ? 'panel-stack record-detail-full' : 'split-layout'}">
        <div class="panel-stack">
          ${config.readonlyConfigFirst ? configSummaryBlock : ''}
          ${showSummary ? `<div class="section-card detail-hero-card">
            <div class="card-header">
              <div class="card-title">${selected[0]}</div>
              <span class="tag ${detail.statusTag || 'tag-info'}">${status}</span>
            </div>
            ${detail.warning ? `<div class="risk-panel" style="margin-bottom:16px;"><div class="risk-title">${detail.warning.title}</div><div class="section-hint" style="margin-top:0; color:var(--color-error);">${detail.warning.copy}</div></div>` : ''}
            <div class="summary-grid">
              ${summaryItems.map(item => `
                <div class="summary-item">
                  <div class="summary-item-label">${item[0]}</div>
                  <div class="summary-item-value">${item[1]}</div>
                </div>
              `).join('')}
            </div>
          </div>` : ''}
          ${metricsBlock}
          ${status === '待核查' && detail.reviewSignal ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">系统核查结论</div></div>
              <div class="risk-panel">
                <div class="risk-title">${detail.reviewSignal}</div>
                ${detail.reviewIssues ? `
                  <div class="bullet-list" style="margin-top:12px;">
                    ${detail.reviewIssues.map(item => `
                      <div class="bullet-item">
                        <div><strong>${item.label}：${item.value}</strong><br><span class="section-hint">${item.copy}</span></div>
                        <div class="bullet-meta">异常</div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          ` : ''}
          ${showDetailItems ? `<div class="section-card">
            <div class="card-header"><div class="card-title">字段明细</div></div>
            <div class="summary-grid">
              ${detailItems.map(item => `
                <div class="summary-item">
                  <div class="summary-item-label">${item[0]}</div>
                  <div class="summary-item-value">${item[1]}</div>
                </div>
              `).join('')}
            </div>
          </div>` : ''}
          ${evidences.length && showEvidences ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">${detail.evidenceTitle || '证据与回执'}</div></div>
              <div class="evidence-list">
                ${evidences.map(item => `
                  <div class="evidence-item">
                    <div class="evidence-title">${item.title}</div>
                    <div class="evidence-desc" style="white-space:pre-wrap;">${item.desc}</div>
                    ${item.images?.length ? `<div style="margin-top:12px;">${AdminCore.renderMediaGallery(item.images, { title: item.title || '图片附件', note: item.desc || '反馈附件' })}</div>` : ''}
                    ${item.videos?.length ? `<div style="margin-top:12px;">${AdminCore.renderMediaGallery(item.videos, { title: item.title || '视频附件', note: item.desc || '反馈附件' })}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
          ${feedbackTimeline.length ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">${detail.timelineTitle || '回执时间轴'}</div></div>
              ${this.renderTimeline(feedbackTimeline)}
            </div>
          ` : ''}
          ${detail.relatedTable ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">${detail.relatedTable.title}</div></div>
              <div class="table-container">
                <table class="table">
                  <thead>
                    <tr>${detail.relatedTable.columns.map(item => `<th>${item}</th>`).join('')}</tr>
                  </thead>
                  <tbody>
                    ${detail.relatedTable.rows.map(row => `
                      <tr>
                        ${row.map(cell => {
                          if (typeof cell === 'object' && cell.route) {
                            return `<td class="action-cell"><button class="btn btn-sm" type="button" data-route="${cell.route}">${cell.label}</button></td>`;
                          }
                          return `<td>${cell}</td>`;
                        }).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          ` : ''}
          ${this.renderRecordFields(config, selected[0], detail, status)}
          ${config.readonlyConfigFirst ? '' : configSummaryBlock}
          ${showFollowNote ? `<div class="section-card">
            <div class="card-header"><div class="card-title">跟进备注</div><div class="table-note">${updatedAt}</div></div>
            <textarea class="input" data-record-note-route="${config.parentRoute}" data-record-id="${selected[0]}" style="width:100%; min-height:120px; padding:12px 16px; resize:vertical;" placeholder="${config.notePlaceholder || '记录本次处理说明或后续跟进事项'}">${note}</textarea>
          </div>` : ''}
        </div>
        ${config.fullWidthDetail ? '' : `<div class="panel-stack sticky-actions">
          ${detail.timeline && !config.hideTimeline ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">${detail.timelineTitle || '时间轴'}</div></div>
              ${this.renderTimeline(detail.timeline)}
            </div>
          ` : ''}
          ${detail.relatedLinks && !config.hideRelatedLinks ? `
            <div class="section-card">
              <div class="card-header"><div class="card-title">关联跳转</div></div>
              <div class="page-actions">
                ${detail.relatedLinks.map(item => `<button class="btn" type="button" data-route="${item.route}">${item.label}</button>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>`}
      </div>
    `;
  },

  renderDialog() {
    const dialog = this.uiState?.dialog;
    if (!dialog) {
      return '';
    }

    if (dialog.type === 'settlement-note') {
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">确认合伙人结算</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label">应结佣金金额</label>
                <input class="input" value="${dialog.dueAmount || ''}" disabled>
              </div>
              <div class="form-group">
                <label class="form-label">实际结算金额</label>
                <input class="input" data-dialog-field="actualSettlementAmount" value="${dialog.actualAmount || dialog.dueAmount || ''}" placeholder="填写实际结算金额">
              </div>
              <div class="form-group">
                <label class="form-label">结算备注</label>
                <textarea class="input" data-dialog-field="settlementNote" style="width:100%; min-height:112px; padding:12px 16px; resize:vertical;" placeholder="${dialog.settlementStatus === '待核查' ? '待核查账单必须说明异常核对结论和结算原因' : '如实际结算金额与应结佣金不一致，请注明原因'}"></textarea>
              </div>
              <div class="section-hint">${dialog.settlementStatus === '待核查' ? '待核查账单可人工确认结算，但备注必须说明异常数据的核对结果。' : '实际结算金额与应结佣金一致时，可填写简短确认说明。'}</div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button class="btn btn-primary" type="button" data-generic-action="confirm-settlement" data-record-id="${dialog.recordId}" data-due-amount="${dialog.dueAmount || ''}" data-settlement-status="${dialog.settlementStatus || ''}">确认结算</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'manual-coupon-issue') {
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:520px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">手动发券</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label">优惠券</label>
                <input class="input" value="${dialog.couponName || dialog.couponId || ''}" disabled>
              </div>
              <div class="form-group">
                <label class="form-label">用户手机号</label>
                <input class="input" data-dialog-field="manualCouponPhone" placeholder="请输入用户手机号">
              </div>
              <div class="form-group">
                <label class="form-label">发放数量</label>
                <input class="input" type="number" min="1" step="1" data-dialog-field="manualCouponQuantity" value="1" placeholder="请输入发放数量">
              </div>
              <div class="section-hint">用于客诉补偿场景；手动发券记录会进入该优惠券的发放明细，关联奖励规则显示为 /。</div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button class="btn btn-primary" type="button" data-generic-action="confirm-manual-coupon-issue" data-record-id="${dialog.couponId || ''}">确认发放</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'settlement-table') {
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="width:min(1180px, 96vw); max-width:none;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${dialog.title || '明细'}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body" style="overflow:auto;">
              <div class="table-container" style="overflow:auto; box-shadow:none;">
                <table class="table" style="min-width:${(dialog.columns || []).length > 6 ? '1100px' : '760px'};">
                  <thead><tr>${(dialog.columns || []).map(item => `<th>${item}</th>`).join('')}</tr></thead>
                  <tbody>
                    ${(dialog.rows || []).map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'report-source') {
      const config = this.getPageConfig();
      const row = (config?.rows || []).find(item => item[0] === dialog.recordId) || [];
      const detail = config?.details?.[dialog.recordId] || {};
      const source = detail.sourceContent || {
        title: row[3] || '被举报对象原始内容',
        text: row[4] || '暂无原始内容摘要。',
        meta: row.length ? [`举报类型：${row[1]}`, `举报人：${row[2]}`, `提交时间：${row[5]}`, `处理状态：${this.getEffectiveStatus(config.parentRoute, row[0], row[config.statusIndex])}`] : [],
        order: null,
        images: [],
        videos: []
      };
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="width:min(920px, 96vw); max-width:none;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${AdminCore.escapeHTML(source.title || '被举报对象原始内容')}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body" style="overflow:auto; max-height:78vh;">
              <div style="margin-bottom:16px;">
                <div class="form-label">文字内容</div>
                <div class="info-pair-value" style="white-space:pre-wrap;">${AdminCore.escapeHTML(source.text || '暂无文字内容')}</div>
              </div>
              ${source.images?.length ? `
                <div style="margin-bottom:16px;">
                  <div class="form-label">图片</div>
                  ${AdminCore.renderMediaGallery(source.images, { title: '原始内容图片', note: '被举报对象发布或发送的原始图片。' })}
                </div>
              ` : ''}
              ${source.videos?.length ? `
                <div style="margin-bottom:16px;">
                  <div class="form-label">视频</div>
                  ${AdminCore.renderMediaGallery(source.videos, { title: '原始内容视频', note: '被举报对象发布的原始视频。' })}
                </div>
              ` : ''}
              <div>
                <div class="form-label">关联订单</div>
                ${source.order ? `
                  <div class="info-grid">
                    <div class="info-pair">
                      <div class="info-pair-label">订单 ID</div>
                      <div class="info-pair-value">${AdminCore.escapeHTML(source.order.id || '-')}</div>
                    </div>
                    <div class="info-pair">
                      <div class="info-pair-label">任务名称</div>
                      <div class="info-pair-value">${AdminCore.escapeHTML(source.order.taskName || '-')}</div>
                    </div>
                  </div>
                ` : '<div class="empty-cell">无关联订单</div>'}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'feedback-process') {
      const escape = value => AdminCore.escapeHTML(value || '');
      const isClose = dialog.nextStatus === '已完成';
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${isClose ? '关闭反馈工单' : '处理反馈工单'}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
                <div style="font-weight:600; margin-bottom:4px;">${escape(dialog.recordId)} · ${escape(dialog.feedbackType)}</div>
                <div class="section-hint">提交用户：${escape(dialog.submitter)}；提交后${isClose ? '工单进入已完成并结束处理' : '工单进入处理中，后续可继续关闭'}</div>
              </div>
              <div class="form-group">
                <label class="form-label required">用户可见回复</label>
                <textarea class="input" data-dialog-field="feedbackUserReply" style="width:100%; min-height:112px; padding:12px 16px; resize:vertical;" placeholder="${isClose ? '填写最终回复，提交后写回消息中心并关闭工单' : '填写处理方案，提交后写回消息中心'}"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label required">内部可见备注</label>
                <textarea class="input" data-dialog-field="feedbackInternalNote" style="width:100%; min-height:104px; padding:12px 16px; resize:vertical;" placeholder="${isClose ? '记录关闭原因、核对结果和后续无需跟进的依据' : '记录内部排查过程、处理依据或待跟进事项'}"></textarea>
              </div>
              <div class="section-hint">${isClose ? '' : ''}</div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button
                class="btn btn-primary"
                type="button"
                data-generic-action="confirm-feedback-process"
                data-record-route="${escape(dialog.recordRoute || 'support/feedback.html')}"
                data-record-id="${escape(dialog.recordId)}"
                data-next-status="${escape(dialog.nextStatus)}"
                data-message="${escape(dialog.message)}"
              >${isClose ? '确认关闭' : '确认处理'}</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'report-process') {
      const escape = value => AdminCore.escapeHTML(value);
      const actionLabelMap = {
        approve: '通过举报',
        reject: '驳回举报',
        ignore: '忽略举报'
      };
      const reasonLabelMap = {
        approve: '处理备注',
        reject: '驳回原因',
        ignore: '忽略原因'
      };
      const noticePlaceholderMap = {
        approve: '填写通知被举报人的处理结果，例如“举报成立，平台已对相关内容进行处理”。',
        reject: '填写通知举报人的文案，默认需包含“举报不成立”。',
        ignore: '填写内部说明或必要的用户通知内容。'
      };
      const isApprove = dialog.reportAction === 'approve';
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${actionLabelMap[dialog.reportAction] || '处理举报'}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
               
              </div>
              ${isApprove ? `
                <div class="form-group">
                  <label class="form-label required">处置措施</label>
                  <select class="input" data-dialog-field="reportMeasure">
                    <option value="警告（扣信用分5分）">警告（扣信用分5分）</option>
                    <option value="内容删除">内容删除</option>
                    <option value="封禁账号">封禁账号</option>
                  </select>
                </div>
              ` : ''}
              <div class="form-group">
                <label class="form-label required">${reasonLabelMap[dialog.reportAction] || '处理备注'}</label>
                <textarea class="input" data-dialog-field="reportReason" style="width:100%; min-height:104px; padding:12px 16px; resize:vertical;" placeholder="${isApprove ? '填写违规依据、处置范围或避免重复处罚的复核结论' : '请填写明确原因，提交后写入处理链路'}"></textarea>
              </div>
              <div class="form-group">
                <label class="form-label">通知内容</label>
                <textarea class="input" data-dialog-field="reportNotice" style="width:100%; min-height:88px; padding:12px 16px; resize:vertical;" placeholder="${noticePlaceholderMap[dialog.reportAction] || ''}">${dialog.reportAction === 'reject' ? '举报不成立' : ''}</textarea>
              </div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button
                class="btn btn-primary"
                type="button"
                data-generic-action="confirm-report-process"
                data-record-route="${escape(dialog.recordRoute || 'risk/reports.html')}"
                data-record-id="${escape(dialog.recordId || '')}"
                data-next-status="${escape(dialog.nextStatus || '')}"
                data-report-action="${escape(dialog.reportAction || '')}"
                data-message="${escape(dialog.message || '')}"
              >确认提交</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'feed-publisher-ban') {
      const row = dialog.row || [];
      const user = dialog.user || this.getCommunityFeedUser(row);
      const statusLabel = user.accountStatus === 'banned' ? '封禁中' : (user.accountStatusLabel || '正常');
      const contentLabel = dialog.contentLabel || row[0] || '';
      const defaultReason = dialog.defaultReason || this.getCommunityFeedViolationReason(row);
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">封禁账号</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
                <div style="font-weight:600; margin-bottom:4px;">${AdminCore.escapeHTML(user.nickname)} · ${AdminCore.escapeHTML(user.id)}</div>
                <div class="section-hint">当前状态：${AdminCore.escapeHTML(statusLabel)}；当前信用分：${AdminCore.escapeHTML(String(user.credit || '-'))}；关联对象：${AdminCore.escapeHTML(contentLabel)}</div>
              </div>
              <div class="form-group">
                <label class="form-label required">封禁类型</label>
                <select class="select" data-dialog-field="banType" style="width:100%;" ${user.accountStatus === 'banned' ? 'disabled' : ''}>
                  <option value="temporary">临时封禁</option>
                  <option value="permanent">永久封禁</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label required">处理原因</label>
                <textarea class="input" data-dialog-field="banReason" style="width:100%; height:auto; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="请填写本次封禁原因，系统会同步写入操作日志">${AdminCore.escapeHTML(defaultReason)}</textarea>
              </div>
              <div class="section-hint">与用户管理封禁操作一致：确认后更新账号状态，生成封禁记录、站内通知和操作日志。</div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button
                class="btn btn-primary"
                type="button"
                data-generic-action="confirm-feed-publisher-ban"
                data-record-id="${AdminCore.escapeHTML(row[0] || '')}"
              >确认提交</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'feed-offline-reason') {
      const isReject = String(dialog.actionLabel || '').includes('不予上架');
      const isBulk = Array.isArray(dialog.recordIds) && dialog.recordIds.length > 1;
      const title = `${isBulk ? '批量' : ''}${isReject ? '填写不予上架原因' : '填写下架原因'}`;
      const reasonOptions = ['请选择原因', '举报风险', '运营判断', '导流风险', '低俗内容', '骚扰暗示', '虚假内容', '其他原因'];
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${title}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label class="form-label">${isReject ? '不予上架原因' : '下架原因'}</label>
                <select class="input" data-dialog-field="offlineReason">
                  ${reasonOptions.map(option => `<option value="${option}">${option}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">推送给用户的说明</label>
                <textarea class="input" data-dialog-field="userNotice" style="width:100%; min-height:104px; padding:12px 16px; resize:vertical;" placeholder="填写后会随处理结果推送给发布者"></textarea>
              </div>
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button
                class="btn btn-primary"
                type="button"
                data-generic-action="confirm-feed-offline"
                data-record-id="${AdminCore.escapeHTML(dialog.recordId || '')}"
                data-record-ids="${AdminCore.escapeHTML((dialog.recordIds || []).join(','))}"
                data-success="${AdminCore.escapeHTML(dialog.success || '')}"
              >确认${isBulk ? '批量' : ''}${isReject ? '不予上架' : '下架'}</button>
            </div>
          </div>
        </div>
      `;
    }

    if (dialog.type === 'partner-review') {
      const isReject = dialog.action === 'reject';
      return `
        <div class="modal-backdrop active" data-generic-action="close-dialog">
          <div class="modal" style="max-width:560px;" data-dialog-panel>
            <div class="modal-header">
              <div class="modal-title">${isReject ? '拒绝合伙人申请' : '审核通过合伙人申请'}</div>
              <button class="modal-close" type="button" data-generic-action="close-dialog">×</button>
            </div>
            <div class="modal-body">
              ${isReject ? `
                <div class="form-group">
                  <label class="form-label">驳回原因</label>
                  <textarea class="input" data-dialog-field="rejectReason" style="width:100%; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="填写本次拒绝的明确原因"></textarea>
                </div>
                <div class="form-group">
                  <label class="form-label">修改建议</label>
                  <textarea class="input" data-dialog-field="reviseSuggestion" style="width:100%; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="告诉申请人下次提交需要补充什么"></textarea>
                </div>
              ` : `
                <div class="form-group">
                  <label class="form-label">分佣比例</label>
                  <input class="input" data-dialog-field="commissionRate" placeholder="请输入分佣比例，例如 8%、10.5%" value="10%">
                </div>
                <div class="form-group">
                  <label class="form-label">审核备注</label>
                  <textarea class="input" data-dialog-field="reviewNote" style="width:100%; min-height:112px; padding:12px 16px; resize:vertical;" placeholder="填写通过原因、开通范围或内部备注"></textarea>
                </div>
              `}
            </div>
            <div class="modal-footer page-actions">
              <button class="btn" type="button" data-generic-action="close-dialog">取消</button>
              <button
                class="btn btn-primary"
                type="button"
                data-generic-action="confirm-partner-review"
                data-record-id="${dialog.recordId}"
                data-review-action="${dialog.action}"
              >确认${isReject ? '拒绝' : '通过'}</button>
            </div>
          </div>
        </div>
      `;
    }

    return '';
  },

  renderPartnerDetail() {
    const partnerId = new URLSearchParams(window.location.search).get('partner');
    const selected = this.partnerRecords.find(item => item.id === partnerId) || this.partnerRecords[0];
    const status = this.getEffectiveStatus('partner/list.html', selected.id, selected.status);
    const stored = this.getStoredRecord('partner/list.html', selected.id);
    const reviewNote = stored.reviewNote || selected.note || '';
    const rejectReason = stored.rejectReason || selected.rejectReason || '';
    const reviseSuggestion = stored.reviseSuggestion || selected.reviseSuggestion || '';
    const commissionRate = stored.commissionRate || selected.commission?.current || '-';
    const agreementStatus = stored.agreementStatus || selected.agreementStatus || (status === '已通过' ? '合作中' : '-');
    const reviewTime = stored.reviewTime || (selected.reviewHistory || []).find(item => /审核/.test(item.title))?.time || '';
    const canReview = status === '待审核';
    const statusClass = status === '已通过' ? 'tag-success' : status === '已拒绝' ? 'tag-danger' : 'tag-warning';
    const sameUserApplicationCount = this.partnerRecords.filter(item => item.userId === selected.userId).length;
    const sameUserOtherRecords = this.partnerRecords.filter(item => item.userId === selected.userId && item.id !== selected.id);
    const materialImages = selected.application?.materialsImages || [];
    const reviewTimeline = [
      { title: '提交时间', time: selected.application?.submittedAt || selected.createdAt, desc: '用户提交合伙人申请资料。' },
      ...(status === '待审核' ? [] : [{
        title: '审核时间',
        time: reviewTime || '当前会话刚刚处理',
        desc: status === '已通过'
          ? (reviewNote || '审核通过，合伙人权限已开通。')
          : `驳回原因：${rejectReason || '材料不符合要求'}；修改建议：${reviseSuggestion || '请补充后重新提交'}`
      }])
    ];
    const conclusionHTML = status === '已通过'
      ? `
        <div class="section-card">
          <div class="card-header"><div class="card-title">审核结论</div></div>
            <div class="info-grid">
              <div class="info-pair"><div class="info-pair-label">审核备注</div><div class="info-pair-value">${reviewNote || '审核通过，开通合伙人权限。'}</div></div>
              <div class="info-pair"><div class="info-pair-label">分佣比例</div><div class="info-pair-value">${commissionRate}</div></div>
              <div class="info-pair"><div class="info-pair-label">合作状态</div><div class="info-pair-value">${agreementStatus}</div></div>
            </div>
          </div>
      `
      : status === '已拒绝'
        ? `
          <div class="section-card">
            <div class="card-header"><div class="card-title">审核结论</div></div>
            <div class="info-grid">
              <div class="info-pair"><div class="info-pair-label">驳回原因</div><div class="info-pair-value">${rejectReason || '材料不符合要求。'}</div></div>
              <div class="info-pair"><div class="info-pair-label">修改建议</div><div class="info-pair-value">${reviseSuggestion || '补充推广渠道、转化证明和联系人信息后重新提交。'}</div></div>
            </div>
          </div>
        `
        : '';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">合伙人详情页 · ${selected.id}</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="partner/list.html">返回申请列表</button>
            ${canReview ? `
              <button class="btn" type="button" data-generic-action="open-partner-review" data-record-id="${selected.id}" data-review-action="reject">拒绝申请</button>
              <button class="btn btn-primary" type="button" data-generic-action="open-partner-review" data-record-id="${selected.id}" data-review-action="approve">审核通过</button>
            ` : ''}
            ${status === '已通过' && agreementStatus !== '暂停中' ? `<button class="btn" type="button" data-generic-action="pause-partner" data-record-id="${selected.id}">暂停合作</button>` : ''}
            ${status === '已通过' && agreementStatus === '暂停中' ? `<button class="btn btn-primary" type="button" data-generic-action="resume-partner" data-record-id="${selected.id}">恢复合作</button>` : ''}
          </div>
        </div>
      </div>
      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header"><div class="card-title">${selected.applicant}</div><span class="tag ${statusClass}">${status}</span></div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">申请单</div><div class="summary-item-value">${selected.id}</div></div>
              <div class="summary-item"><div class="summary-item-label">用户ID</div><div class="summary-item-value">${selected.userId}</div></div>
              <div class="summary-item"><div class="summary-item-label">申请次数</div><div class="summary-item-value">${sameUserApplicationCount} 次</div></div>
              <div class="summary-item"><div class="summary-item-label">申请类型</div><div class="summary-item-value">${selected.type}</div></div>
              <div class="summary-item"><div class="summary-item-label">城市</div><div class="summary-item-value">${selected.city}</div></div>
              <div class="summary-item"><div class="summary-item-label">渠道</div><div class="summary-item-value">${selected.channel}</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">用户提交资料</div></div>
            <div class="info-grid">
              <div class="info-pair"><div class="info-pair-label">主体类型</div><div class="info-pair-value">${selected.application?.type || selected.type}</div></div>
              <div class="info-pair"><div class="info-pair-label">主体名称</div><div class="info-pair-value">${selected.application?.name || selected.applicant}</div></div>
              <div class="info-pair"><div class="info-pair-label">预计月拉新</div><div class="info-pair-value">${selected.application?.monthlyLeads || '-'}</div></div>
              <div class="info-pair"><div class="info-pair-label">联系人</div><div class="info-pair-value">${selected.application?.contact || '-'}</div></div>
              <div class="info-pair" style="grid-column:1/-1;"><div class="info-pair-label">渠道说明</div><div class="info-pair-value">${selected.application?.channel || '-'}</div></div>
              <div class="info-pair" style="grid-column:1/-1;"><div class="info-pair-label">文字材料</div><div class="info-pair-value">${selected.application?.materials || '-'}</div></div>
            </div>
            <div style="margin-top:16px;">
              ${AdminCore.renderMediaGallery(materialImages, { title: '合伙人申请图片材料', note: '点击查看用户提交的图片材料。' })}
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">基础校验</div></div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">注册时间</div><div class="summary-item-value">${selected.registeredAt}</div></div>
              <div class="summary-item"><div class="summary-item-label">信用分</div><div class="summary-item-value">${selected.creditScore}</div></div>
              <div class="summary-item"><div class="summary-item-label">实名状态</div><div class="summary-item-value">${selected.realNameStatus}</div></div>
              <div class="summary-item"><div class="summary-item-label">认证状态</div><div class="summary-item-value">${selected.authStatus}</div></div>
            </div>
          </div>
          ${conclusionHTML}
          <div class="section-card">
            <div class="card-header"><div class="card-title">同一用户申请记录</div></div>
            <div class="table-container">
              <table class="table">
                <thead><tr><th>申请单</th><th>状态</th><th>提交时间</th><th>审核结论</th><th>操作</th></tr></thead>
                <tbody>
                  ${sameUserOtherRecords.length ? sameUserOtherRecords.map(item => {
                    const itemStatus = this.getEffectiveStatus('partner/list.html', item.id, item.status);
                    const itemReject = this.getRecordValue('partner/list.html', item.id, 'rejectReason', item.rejectReason || '');
                    const itemSuggestion = this.getRecordValue('partner/list.html', item.id, 'reviseSuggestion', item.reviseSuggestion || '');
                    const itemReview = this.getRecordValue('partner/list.html', item.id, 'reviewNote', item.note || '');
                    const itemCommissionRate = this.getRecordValue('partner/list.html', item.id, 'commissionRate', item.commission?.current || '');
                    const itemConclusion = itemStatus === '已通过' ? `${itemReview || '已通过'}${itemCommissionRate ? `；分佣比例：${itemCommissionRate}` : ''}` : itemStatus === '已拒绝' ? `拒绝：${itemReject || '材料不符合要求'}；建议：${itemSuggestion || '补充后重提'}` : '';
                    return `
                      <tr>
                        <td>${item.id}</td>
                        <td>${itemStatus}</td>
                        <td>${item.createdAt}</td>
                        <td>${itemConclusion}</td>
                        <td class="action-cell"><button class="btn btn-sm" type="button" data-route="partner/detail.html?partner=${item.id}">查看</button></td>
                      </tr>
                    `;
                  }).join('') : '<tr><td colspan="5" class="empty-cell">暂无同一用户的其他申请记录</td></tr>'}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">审核记录</div></div>
            ${this.renderTimeline(reviewTimeline)}
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
      const tabButton = event.target.closest('[data-page-tab-key]');
      if (tabButton) {
        this.setLocalDraft(tabButton.dataset.pageTabKey, tabButton.dataset.pageTabValue);
        this.setLocalDraft('currentPage', 1);
        if (this.getCurrentPath() === 'settings/basic.html') {
          this.setLocalDraft('basicParamsEditing', false);
        }
        this.render();
        return;
      }

      const statusCardButton = event.target.closest('[data-status-card-filter-key]');
      if (statusCardButton) {
        this.setLocalDraft(statusCardButton.dataset.statusCardFilterKey, statusCardButton.dataset.statusCardFilterValue || '');
        this.setLocalDraft('currentPage', 1);
        this.render();
        return;
      }

      const paginationButton = event.target.closest('[data-pagination-page]');
      if (paginationButton && !paginationButton.classList.contains('disabled')) {
        this.setLocalDraft('currentPage', Number(paginationButton.dataset.paginationPage) || 1);
        this.render();
        return;
      }

      const dialogPanel = event.target.closest('[data-dialog-panel]');
      const dialogAction = event.target.closest('[data-generic-action]');
      if (dialogPanel && (!dialogAction || !dialogPanel.contains(dialogAction))) {
        return;
      }

      const recordButton = event.target.closest('[data-record-action]');
      if (recordButton) {
        if (recordButton.dataset.recordAction === 'save-record') {
          if (recordButton.dataset.recordRoute === 'ops/urgent-pin.html') {
            if (!this.validateTimedConfig(recordButton.dataset.recordRoute, recordButton.dataset.recordId)) {
              return;
            }
            if (!this.validateUrgentPinRangeOverlap(recordButton.dataset.recordRoute, recordButton.dataset.recordId)) {
              return;
            }
          }
          this.syncConfigRuleRow(recordButton.dataset.recordRoute, recordButton.dataset.recordId);
          AdminUI.showMessage(recordButton.dataset.success || '配置已保存并生效', 'success');
          this.render();
          return;
        }
        const recordRoute = recordButton.dataset.recordRoute;
        const recordId = recordButton.dataset.recordId;
        const nextStatus = recordButton.dataset.nextStatus;
        if (recordRoute === 'support/feedback.html' && ['处理中', '已完成'].includes(nextStatus)) {
          this.openFeedbackProcessDialog(recordRoute, recordId, nextStatus, recordButton.dataset.success || '反馈工单状态已更新');
          return;
        }
        if (recordRoute === 'community/feed-review.html' && nextStatus === '已下架') {
          this.openDialog({
            type: 'feed-offline-reason',
            recordId,
            actionLabel: recordButton.dataset.actionLabel || recordButton.textContent.trim(),
            success: recordButton.dataset.success
          });
          return;
        }
        if (['待开始', '推送中', '待生效', '生效中', '待启用', '已启用'].includes(nextStatus) && !this.validateTimedConfig(recordRoute, recordId)) {
          return;
        }
        if (!this.validateAdActivationCapacity(recordRoute, recordId, nextStatus)) {
          return;
        }
        if (!this.validateUrgentPinRangeOverlap(recordRoute, recordId, nextStatus)) {
          return;
        }
        this.updateRecordState(recordRoute, recordId, { status: nextStatus });
        this.syncConfigRuleRow(recordRoute, recordId);
        AdminUI.showMessage(recordButton.dataset.success || '状态已更新', 'success');
        this.render();
        return;
      }

      const target = event.target.closest('[data-generic-action]');
      if (!target) {
        return;
      }

      const action = target.dataset.genericAction;
      if (action === 'close-dialog') {
        this.closeDialog();
        return;
      }

      if (action === 'confirm-feedback-process') {
        const userVisibleReply = this.root.querySelector('[data-dialog-field="feedbackUserReply"]')?.value.trim() || '';
        const internalNote = this.root.querySelector('[data-dialog-field="feedbackInternalNote"]')?.value.trim() || '';
        if (!userVisibleReply) {
          AdminUI.showMessage('请填写用户可见回复', 'warning');
          return;
        }
        if (!internalNote) {
          AdminUI.showMessage('请填写内部可见备注', 'warning');
          return;
        }
        const nextStatus = target.dataset.nextStatus;
        const handler = this.getCurrentOperator();
        const actionLabel = nextStatus === '已完成' ? '关闭工单' : '处理工单';
        const currentRecord = this.getStoredRecord(target.dataset.recordRoute || 'support/feedback.html', target.dataset.recordId);
        const feedbackTimeline = [...(currentRecord.feedbackTimeline || []), {
          title: nextStatus === '已完成' ? '关闭回执' : '处理回执',
          desc: [
            `处理人：${handler}`,
            `用户可见回复：${userVisibleReply}`,
            `内部可见备注：${internalNote}`
          ].join('\n'),
          time: new Date().toLocaleString('zh-CN')
        }];
        this.updateRecordState(target.dataset.recordRoute || 'support/feedback.html', target.dataset.recordId, {
          status: nextStatus,
          handler,
          userVisibleReply,
          internalNote,
          feedbackTimeline,
          feedbackAction: actionLabel,
          note: `${actionLabel}；用户可见回复：${userVisibleReply}；内部备注：${internalNote}`
        });
        this.uiState.dialog = null;
        AdminUI.showMessage(target.dataset.message || '反馈工单已提交', 'success');
        this.render();
        return;
      }

      if (action === 'edit-basic-params') {
        this.setLocalDraft('basicParamsEditVersion', AdminStore.get('basic_params_version', 1));
        this.setLocalDraft('basicParamsEditing', true);
        this.render();
        return;
      }

      if (action === 'save-basic-params') {
        const currentVersion = AdminStore.get('basic_params_version', 1);
        const draft = this.getLocalDraft();
        if (draft.basicParamsEditVersion && Number(draft.basicParamsEditVersion) !== Number(currentVersion)) {
          AdminUI.showMessage('当前参数已被其他管理员更新，请刷新后重新编辑', 'warning');
          return;
        }
        const hasChangedParams = Object.keys(draft).some(key => /^basic_param_/.test(key));
        if (hasChangedParams) {
          const reason = window.prompt('请输入本次基础参数变更原因，将写入操作日志');
          if (!reason || !reason.trim()) {
            AdminUI.showMessage('敏感参数保存需填写变更原因', 'warning');
            return;
          }
          AdminStore.set('basic_params_last_change_reason', reason.trim());
        }
        AdminStore.set('basic_params_version', Number(currentVersion) + 1);
        this.setLocalDraft('basicParamsEditing', false);
        AdminUI.showMessage('基础参数已保存并生效', 'success');
        this.render();
        return;
      }

      if (action === 'open-report-process') {
        this.openDialog({
          type: 'report-process',
          recordRoute: target.dataset.recordRoute || 'risk/reports.html',
          recordId: target.dataset.recordId,
          nextStatus: target.dataset.nextStatus,
          reportAction: target.dataset.reportAction,
          message: target.dataset.message
        });
        return;
      }

      if (action === 'open-report-source') {
        this.openDialog({
          type: 'report-source',
          recordId: target.dataset.recordId
        });
        return;
      }

      if (action === 'confirm-report-process') {
        const reportAction = target.dataset.reportAction || this.uiState.dialog?.reportAction || '';
        const reportReason = this.root.querySelector('[data-dialog-field="reportReason"]')?.value.trim() || '';
        const reportNotice = this.root.querySelector('[data-dialog-field="reportNotice"]')?.value.trim() || '';
        const reportMeasure = this.root.querySelector('[data-dialog-field="reportMeasure"]')?.value || '';
        if (!reportReason) {
          AdminUI.showMessage('请先填写处理备注或原因', 'error');
          return;
        }
        if (reportAction === 'reject' && !reportNotice.includes('举报不成立')) {
          AdminUI.showMessage('驳回通知需包含“举报不成立”', 'error');
          return;
        }
        const decisionMap = {
          approve: '通过（确认违规）',
          reject: '驳回（举报不成立）',
          ignore: '忽略'
        };
        const reportPatch = {
          status: target.dataset.nextStatus,
          reportDecision: decisionMap[reportAction] || '处理',
          disposalMeasure: reportMeasure,
          reportReason,
          reportNotice,
          note: `${decisionMap[reportAction] || '处理'}${reportMeasure ? `：${reportMeasure}` : ''}；原因：${reportReason}${reportNotice ? `；通知：${reportNotice}` : ''}`
        };
        if (reportAction === 'approve' && reportMeasure.includes('封禁账号')) {
          const config = this.getPageConfig();
          const row = (config.rows || []).find(item => item[0] === target.dataset.recordId) || [];
          const detail = config.details?.[target.dataset.recordId] || {};
          const reportedUser = detail.reportedUser || {};
          const payload = AdminStore.readAll();
          const users = payload.user_items || this.getUserSeedItems();
          const user = users.find(item => item.id === reportedUser.userId) || {
            id: reportedUser.userId || `U-REPORT-${target.dataset.recordId}`,
            nickname: reportedUser.nickname || '被举报人',
            credit: '-',
            accountStatus: reportedUser.status?.includes('封禁') ? 'banned' : 'active',
            accountStatusLabel: reportedUser.status?.includes('封禁') ? '封禁中' : '正常',
            highRisk: row[1] || '举报违规'
          };
          this.openDialog({
            type: 'feed-publisher-ban',
            row: [target.dataset.recordId, `${user.nickname} / ${user.id} / 信用分 ${user.credit || '-'}`, user.accountStatusLabel || '正常', row[5] || '', row[1] || '', row[4] || '', '/', row[7] || '待处理'],
            user,
            contentLabel: row[3] || detail.target?.label || target.dataset.recordId,
            defaultReason: reportReason,
            reportRoute: target.dataset.recordRoute || 'risk/reports.html',
            reportId: target.dataset.recordId,
            reportPatch
          });
          return;
        }
        this.updateRecordState(target.dataset.recordRoute || 'risk/reports.html', target.dataset.recordId, reportPatch);
        this.uiState.dialog = null;
        AdminUI.showMessage(target.dataset.message || '举报处理已提交', 'success');
        this.render();
        return;
      }

      if (action === 'update-record-status') {
        if (target.dataset.recordRoute === 'support/feedback.html' && ['处理中', '已完成'].includes(target.dataset.nextStatus)) {
          this.openFeedbackProcessDialog(target.dataset.recordRoute, target.dataset.recordId, target.dataset.nextStatus, target.dataset.message || '反馈工单状态已更新');
          return;
        }
        if (target.dataset.recordRoute === 'community/feed-review.html' && target.dataset.nextStatus === '已下架') {
          this.openDialog({
            type: 'feed-offline-reason',
            recordId: target.dataset.recordId,
            actionLabel: target.textContent.trim(),
            success: target.dataset.message
          });
          return;
        }
        if (['待开始', '推送中', '待生效', '生效中', '待启用', '已启用'].includes(target.dataset.nextStatus) && !this.validateTimedConfig(target.dataset.recordRoute, target.dataset.recordId)) {
          return;
        }
        if (!this.validateAdActivationCapacity(target.dataset.recordRoute, target.dataset.recordId, target.dataset.nextStatus)) {
          return;
        }
        if (!this.validateUrgentPinRangeOverlap(target.dataset.recordRoute, target.dataset.recordId, target.dataset.nextStatus)) {
          return;
        }
        this.updateRecordState(target.dataset.recordRoute, target.dataset.recordId, {
          status: target.dataset.nextStatus
        });
        AdminUI.showMessage(target.dataset.message || '状态已更新', 'success');
        this.render();
        return;
      }

      if (action === 'delete-urgent-pin-rule') {
        this.deleteUrgentPinRule(target.dataset.recordId, target.dataset.message);
        return;
      }

      if (action === 'open-partner-review') {
        this.openDialog({
          type: 'partner-review',
          recordId: target.dataset.recordId,
          action: target.dataset.reviewAction
        });
        return;
      }

      if (action === 'pause-partner') {
        const reason = window.prompt('请填写暂停合作原因。暂停后不可生成新邀新链接，历史数据和账单保留。');
        if (!reason || !reason.trim()) {
          AdminUI.showMessage('暂停合作必须填写原因', 'error');
          return;
        }
        this.updateRecordState('partner/list.html', target.dataset.recordId, {
          agreementStatus: '暂停中',
          pauseReason: reason.trim(),
          pauseTime: new Date().toLocaleString('zh-CN')
        });
        AdminUI.showMessage('合伙人合作状态已暂停', 'warning');
        this.render();
        return;
      }

      if (action === 'resume-partner') {
        this.updateRecordState('partner/list.html', target.dataset.recordId, {
          agreementStatus: '合作中',
          resumeTime: new Date().toLocaleString('zh-CN')
        });
        AdminUI.showMessage('合伙人合作状态已恢复，新邀新链接可重新生成', 'success');
        this.render();
        return;
      }

      if (action === 'open-feed-publisher-ban') {
        const recordId = target.dataset.recordId;
        const config = this.getPageConfig();
        const row = (config.rows || []).find(item => item[0] === recordId);
        if (!row) {
          AdminUI.showMessage('未找到关联动态记录', 'error');
          return;
        }
        const feedUser = this.getCommunityFeedUser(row);
        const payload = AdminStore.readAll();
        const users = payload.user_items || this.getUserSeedItems();
        const user = users.find(item => item.id === feedUser.id) || feedUser;
        this.openDialog({
          type: 'feed-publisher-ban',
          row,
          user
        });
        return;
      }

      if (action === 'create-announcement') {
        this.createAnnouncementDraft();
        return;
      }

      if (action === 'create-ad') {
        this.createAdDraft();
        return;
      }

      if (action === 'create-coupon-config') {
        this.createCouponConfig();
        return;
      }

      if (action === 'delete-coupon-config') {
        this.deleteCouponConfig(target.dataset.recordId, target.dataset.message);
        return;
      }

      if (action === 'open-manual-coupon-issue') {
        const row = this.couponConfigRows.find(item => item[0] === target.dataset.recordId);
        if (!row) {
          AdminUI.showMessage('未找到优惠券配置', 'error');
          return;
        }
        this.openDialog({
          type: 'manual-coupon-issue',
          couponId: row[0],
          couponName: row[1]
        });
        return;
      }

      if (action === 'delete-reward-rule') {
        this.deleteRewardRule(target.dataset.recordId, target.dataset.message);
        return;
      }

      if (action === 'recover-reward-coupon') {
        AdminUI.showMessage('优惠券已回收', 'success');
        return;
      }

      if (action === 'confirm-manual-coupon-issue') {
        const couponId = target.dataset.recordId || this.uiState.dialog?.couponId || '';
        const coupon = this.couponConfigRows.find(item => item[0] === couponId);
        const phone = this.root.querySelector('[data-dialog-field="manualCouponPhone"]')?.value.trim() || '';
        const quantity = Number.parseInt(this.root.querySelector('[data-dialog-field="manualCouponQuantity"]')?.value || '0', 10);
        if (!coupon) {
          AdminUI.showMessage('未找到优惠券配置', 'error');
          return;
        }
        if (!phone) {
          AdminUI.showMessage('请输入用户手机号', 'error');
          return;
        }
        if (!Number.isFinite(quantity) || quantity <= 0) {
          AdminUI.showMessage('请输入正确的发放数量', 'error');
          return;
        }
        const rows = AdminStore.get('extended_manual_coupon_issues', []);
        const createdRows = Array.from({ length: Math.min(quantity, 100) }).map((_, index) => ({
          id: `MI-${Date.now()}-${index}`,
          couponId,
          couponName: coupon[1],
          phone,
          nickname: '手动补偿用户',
          status: '未使用',
          orderId: '-',
          createdAt: new Date().toLocaleString('zh-CN')
        }));
        AdminStore.set('extended_manual_coupon_issues', [...createdRows, ...rows]);
        this.uiState.dialog = null;
        AdminUI.showMessage(`已手动发放 ${quantity} 张优惠券`, 'success');
        this.render();
        return;
      }

      if (action === 'add-reward-coupon-item') {
        const selector = `[data-reward-coupon-item][data-record-field-route="${target.dataset.recordRoute}"][data-record-id="${target.dataset.recordId}"]`;
        const items = Array.from(this.root.querySelectorAll(selector)).map(row => ({
          couponId: row.querySelector('[data-reward-coupon-select]')?.value || '',
          quantity: row.querySelector('[data-reward-coupon-qty]')?.value || '1'
        }));
        if (items.length >= 10) {
          AdminUI.showMessage('最多可添加 10 组优惠券', 'warning');
          return;
        }
        items.push({ couponId: '', quantity: '1' });
        this.updateRecordState(target.dataset.recordRoute, target.dataset.recordId, this.buildRewardCouponRecordPatch(items));
        this.render();
        return;
      }

      if (action === 'remove-reward-coupon-item') {
        const selector = `[data-reward-coupon-item][data-record-field-route="${target.dataset.recordRoute}"][data-record-id="${target.dataset.recordId}"]`;
        const items = Array.from(this.root.querySelectorAll(selector)).map(row => ({
          couponId: row.querySelector('[data-reward-coupon-select]')?.value || '',
          quantity: row.querySelector('[data-reward-coupon-qty]')?.value || '1'
        }));
        const nextItems = items.filter((_, index) => index !== Number(target.dataset.rewardCouponIndex));
        this.updateRecordState(
          target.dataset.recordRoute,
          target.dataset.recordId,
          this.buildRewardCouponRecordPatch(nextItems.length ? nextItems : [{ couponId: '', quantity: '1' }])
        );
        this.render();
        return;
      }

      if (action === 'community-feed-bulk') {
        const bulkAction = target.dataset.bulkAction;
        const selectedRows = this.validateCommunityFeedBulk(bulkAction);
        if (!selectedRows) {
          return;
        }

        if (bulkAction === 'approve') {
          selectedRows.forEach(row => {
            this.updateRecordState('community/feed-review.html', row[0], { status: '已上架' });
          });
          this.clearCommunityFeedSelection();
          AdminUI.showMessage(`已批量裁定上架 ${selectedRows.length} 条动态`, 'success');
          this.render();
          return;
        }

        this.openDialog({
          type: 'feed-offline-reason',
          recordIds: selectedRows.map(row => row[0]),
          actionLabel: bulkAction === 'reject' ? '批量不予上架' : '批量手动下架',
          success: bulkAction === 'reject'
            ? `已批量不予上架 ${selectedRows.length} 条动态，原因将推送给用户`
            : `已批量手动下架 ${selectedRows.length} 条动态，下架原因将推送给用户`
        });
        return;
      }

      if (action === 'generic-list-bulk') {
        this.handleGenericListBulk(target);
        return;
      }

      if (action === 'open-settlement-note') {
        this.openDialog({
          type: 'settlement-note',
          recordId: target.dataset.recordId,
          dueAmount: target.dataset.dueAmount,
          actualAmount: target.dataset.actualAmount,
          settlementStatus: target.dataset.settlementStatus
        });
        return;
      }

      if (action === 'open-settlement-table') {
        const config = this.getPageConfig();
        const detail = config?.details?.[target.dataset.recordId]?.[target.dataset.detailKey];
        if (!detail) {
          AdminUI.showMessage('当前明细暂无数据', 'warning');
          return;
        }
        this.openDialog({
          type: 'settlement-table',
          title: detail.title,
          columns: detail.columns,
          rows: detail.rows
        });
        return;
      }

      if (action === 'confirm-settlement') {
        const actualSettlementAmount = this.formatSettlementAmount(this.root.querySelector('[data-dialog-field="actualSettlementAmount"]')?.value || '', this.uiState.dialog?.dueAmount || '');
        const settlementNote = this.root.querySelector('[data-dialog-field="settlementNote"]')?.value.trim() || '';
        const normalizeAmount = value => String(value || '').replace(/[^\d.-]/g, '');
        const amountChanged = normalizeAmount(actualSettlementAmount) !== normalizeAmount(target.dataset.dueAmount || this.uiState.dialog?.dueAmount || '');
        if ((amountChanged || target.dataset.settlementStatus === '待核查') && !settlementNote) {
          AdminUI.showMessage('请填写结算备注，说明金额调整或待核查账单的核对结论', 'error');
          return;
        }
        this.updateRecordState('finance/partner-settlement.html', target.dataset.recordId, {
          status: '已结算',
          actualSettlementAmount,
          settlementNote: settlementNote || '确认结算，实际结算金额与应结佣金一致。'
        });
        this.uiState.dialog = null;
        AdminUI.showMessage('结算单已确认结算', 'success');
        this.render();
        return;
      }

      if (action === 'confirm-feed-offline') {
        const recordIds = (target.dataset.recordIds || target.dataset.recordId || '')
          .split(',')
          .map(item => item.trim())
          .filter(Boolean);
        const offlineReason = this.root.querySelector('[data-dialog-field="offlineReason"]')?.value.trim() || '';
        const userNotice = this.root.querySelector('[data-dialog-field="userNotice"]')?.value.trim() || '';
        if (!offlineReason || offlineReason === '请选择原因') {
          AdminUI.showMessage('请先填写原因，原因会推送给用户', 'error');
          return;
        }
        recordIds.forEach(recordId => {
          this.updateRecordState('community/feed-review.html', recordId, {
            status: '已下架',
            offlineReason,
            userNotice: userNotice || `动态已处理，原因：${offlineReason}`
          });
        });
        this.clearCommunityFeedSelection();
        this.uiState.dialog = null;
        AdminUI.showMessage(target.dataset.success || '动态已处理，原因将推送给用户', 'success');
        this.render();
        return;
      }

      if (action === 'confirm-feed-publisher-ban') {
        const recordId = target.dataset.recordId;
        const dialog = this.uiState.dialog || {};
        const row = dialog.row || [];
        const banType = this.root.querySelector('[data-dialog-field="banType"]')?.value || 'temporary';
        const reason = this.root.querySelector('[data-dialog-field="banReason"]')?.value.trim() || '';
        if (!reason) {
          AdminUI.showMessage('请填写处理原因', 'error');
          return;
        }

        const feedUser = dialog.user || this.getCommunityFeedUser(row);
        const payload = AdminStore.readAll();
        const users = payload.user_items || this.getUserSeedItems();
        let user = users.find(item => item.id === feedUser.id);
        if (!user) {
          user = feedUser;
          users.unshift(user);
        }
        if (user.accountStatus === 'banned') {
          AdminUI.showMessage(`用户 ${user.nickname} 已处于封禁中，无需重复封禁`, 'warning');
          if (dialog.reportId && dialog.reportPatch) {
            this.updateRecordState(dialog.reportRoute || 'risk/reports.html', dialog.reportId, {
              ...dialog.reportPatch,
              reportReason: `${dialog.reportPatch.reportReason}；被举报人已处于封禁中，本次仅记录复核结果。`,
              note: `${dialog.reportPatch.note}；被举报人已处于封禁中，本次仅记录复核结果。`
            });
          }
          this.uiState.dialog = null;
          this.render();
          return;
        }

        user.accountStatus = 'banned';
        user.accountStatusLabel = '封禁中';
        user.highRisk = user.highRisk && user.highRisk !== '无' ? user.highRisk : this.getCommunityFeedViolationReason(row);
        AdminStore.set('user_items', users);

        const banCases = payload.user_ban_cases || [];
        banCases.unshift(this.createFeedBanCase(user, {
          banType,
          reason,
          contentId: recordId,
          risk: this.getCommunityFeedViolationReason(row),
          riskEvent: `动态审核 ${recordId}：${row[5] || '严重违规'}`
        }));
        AdminStore.set('user_ban_cases', banCases);
        if (dialog.reportId && dialog.reportPatch) {
          this.updateRecordState(dialog.reportRoute || 'risk/reports.html', dialog.reportId, {
            ...dialog.reportPatch,
            publisherBanStatus: '已封禁',
            publisherBanType: banType === 'permanent' ? '永久封禁' : '临时封禁',
            publisherBanReason: reason,
            reportReason: `${dialog.reportPatch.reportReason}；已完成账号封禁。`,
            note: `${dialog.reportPatch.note}；已完成账号封禁。`
          });
        } else {
          this.updateRecordState('community/feed-review.html', recordId, {
            publisherAccountStatus: '封禁',
            publisherBanStatus: '已封禁',
            publisherBanType: banType === 'permanent' ? '永久封禁' : '临时封禁',
            publisherBanReason: reason
          });
        }
        this.uiState.dialog = null;
        AdminUI.showMessage(`用户 ${user.nickname} 的账号状态已更新`, 'warning');
        this.render();
        return;
      }

      if (action === 'confirm-partner-review') {
        const reviewAction = target.dataset.reviewAction;
        const recordId = target.dataset.recordId;
        if (reviewAction === 'reject') {
          const rejectReason = this.root.querySelector('[data-dialog-field="rejectReason"]')?.value.trim() || '材料不符合合伙人申请要求。';
          const reviseSuggestion = this.root.querySelector('[data-dialog-field="reviseSuggestion"]')?.value.trim() || '请补充可核验的推广渠道、转化证明和联系人信息后重新提交。';
          this.updateRecordState('partner/list.html', recordId, {
            status: '已拒绝',
            rejectReason,
            reviseSuggestion,
            reviewTime: new Date().toLocaleString('zh-CN')
          });
          AdminUI.showMessage('合伙人申请已拒绝', 'success');
        } else {
          const commissionRate = this.root.querySelector('[data-dialog-field="commissionRate"]')?.value.trim() || '10%';
          const reviewNote = this.root.querySelector('[data-dialog-field="reviewNote"]')?.value.trim() || '审核通过，开通合伙人权限，分佣进入用户钱包。';
          this.updateRecordState('partner/list.html', recordId, {
            status: '已通过',
            agreementStatus: '合作中',
            commissionRate,
            reviewNote,
            reviewTime: new Date().toLocaleString('zh-CN')
          });
          AdminUI.showMessage('合伙人申请已通过', 'success');
        }
        this.uiState.dialog = null;
        this.render();
        return;
      }

      if (action === 'save-config') {
        AdminUI.showMessage(target.dataset.message || '配置已保存', 'success');
        return;
      }

      if (action === 'create-reward-rule') {
        this.createRewardRule();
        return;
      }

      if (action === 'create-urgent-pin-rule') {
        this.createUrgentPinRule();
        return;
      }

      if (action === 'search') {
        this.setLocalDraft('currentPage', 1);
        this.render();
        AdminUI.showMessage(target.dataset.message || '操作已执行', 'success');
        return;
      }

      if (action === 'reset') {
        const config = this.getPageConfig();
        this.resetListDraft(config?.filterFields || []);
        this.render();
        AdminUI.showMessage(target.dataset.message || '操作已执行', 'success');
        return;
      }

      if (action === 'toast') {
        AdminUI.showMessage(target.dataset.message || '操作已执行', 'success');
      }
    });

    this.root.addEventListener('input', event => {
      const target = event.target;
      if (target.dataset.pageFilterKey) {
        this.setLocalDraft(target.dataset.pageFilterKey, target.value);
        return;
      }

      if (target.dataset.draftField) {
        this.setLocalDraft(target.dataset.draftField, target.value);
        return;
      }

      if (target.dataset.recordNoteRoute) {
        this.updateRecordState(target.dataset.recordNoteRoute, target.dataset.recordId, {
          note: target.value
        });
        return;
      }

      if (target.dataset.rewardCouponQty) {
        this.syncRewardCouponItemsFromDom(target.dataset.recordFieldRoute, target.dataset.recordId);
        return;
      }

      if (target.dataset.recordFieldRoute) {
        this.updateRecordState(target.dataset.recordFieldRoute, target.dataset.recordId, {
          [target.dataset.recordFieldKey]: target.value
        });
      }
    });

    this.root.addEventListener('change', event => {
      const target = event.target;
      if (target.dataset.rewardCouponSelect || target.dataset.rewardCouponQty) {
        this.syncRewardCouponItemsFromDom(target.dataset.recordFieldRoute, target.dataset.recordId);
        this.render();
        return;
      }

      if (target.dataset.recordTagOption) {
        const selector = `[data-record-tag-route="${target.dataset.recordTagRoute}"][data-record-id="${target.dataset.recordId}"][data-record-tag-key="${target.dataset.recordTagKey}"]`;
        const selectedValues = Array.from(this.root.querySelectorAll(selector))
          .filter(item => item.checked)
          .map(item => item.dataset.recordTagOption);
        this.updateRecordState(target.dataset.recordTagRoute, target.dataset.recordId, {
          [target.dataset.recordTagKey]: selectedValues.join(' / ')
        });
        this.render();
        return;
      }

      if (target.dataset.listRowSelect) {
        this.toggleListRowSelection(target.dataset.listRowSelect, target.checked);
        return;
      }

      if (target.dataset.listSelectAll !== undefined) {
        const recordIds = String(target.dataset.listSelectAll || '')
          .split(',')
          .map(item => item.trim())
          .filter(Boolean);
        this.toggleVisibleRowsSelection(recordIds, target.checked);
        return;
      }

      if (target.dataset.pageFilterKey) {
        this.setLocalDraft(target.dataset.pageFilterKey, target.value);
        return;
      }

      if (!target.dataset.recordFieldRoute) {
        return;
      }

      const nextValue = target.multiple
        ? Array.from(target.selectedOptions).map(option => option.value).join(' / ')
        : target.value;
      this.updateRecordState(target.dataset.recordFieldRoute, target.dataset.recordId, {
        [target.dataset.recordFieldKey]: nextValue
      });
      if (target.dataset.recordFieldKey === 'targetGroup' || target.dataset.recordFieldKey === 'adPosition' || target.dataset.recordFieldKey === 'couponType') {
        this.render();
      }
      if (
        target.dataset.recordFieldRoute === 'ops/urgent-pin.html'
        && ['basePrice', 'rangeStep', 'durationStep'].includes(target.dataset.recordFieldKey)
      ) {
        this.render();
      }
    });

    this.bound = true;
  }
,

  createRewardRule() {
    const now = new Date().toLocaleString('zh-CN');
    const nextIndex = String(this.rewardRuleRows.length + 1).padStart(3, '0');
    const recordId = `RW-N${nextIndex}`;
    this.rewardRuleRows.unshift([recordId, '待命名奖励规则', '每笔订单首次转发', '待配置', '未设置', '0', '未达预警', '草稿', now]);
    AdminStore.set('extended_reward_rules', this.rewardRuleRows);
    this.updateRecordState('ops/rewards.html', recordId, {
      status: '草稿',
      ruleId: recordId,
      ruleName: '待命名奖励规则',
      rewardCouponItems: JSON.stringify([{ couponId: '', quantity: '1' }]),
      rewardCouponIds: '',
      triggerCondition: '每笔订单首次转发',
      activityRange: '',
      dailyIssueLimit: '500',
      warningThreshold: '8000',
      issuedCount: '0',
      userDailyLimit: '1',
      warningStatus: '未达预警'
    });
    AdminCore.routeTo(`ops/reward-detail.html?record=${recordId}`);
  },

  createCouponConfig() {
    const now = new Date().toLocaleString('zh-CN');
    const nextIndex = String(this.couponConfigRows.length + 1).padStart(3, '0');
    const recordId = `CP-N${nextIndex}`;
    this.couponConfigRows.unshift([recordId, '待命名优惠券', '满减', '20 元', '全部项目', '仅任务金额', '否', '草稿', now]);
    AdminStore.set('extended_coupon_configs', this.couponConfigRows);
    this.updateRecordState('ops/coupons.html', recordId, {
      status: '草稿',
      couponId: recordId,
      couponName: '待命名优惠券',
      couponType: '满减',
      discountAmount: '2',
      threshold: '20',
      usageScope: '全部项目',
      deductionScope: '仅任务金额',
      stackable: '否'
    });
    AdminCore.routeTo(`ops/coupon-detail.html?record=${recordId}`);
  },

  deleteCouponConfig(recordId, message = '优惠券草稿已删除') {
    const row = this.couponConfigRows.find(item => item[0] === recordId);
    if (!row) {
      AdminUI.showMessage('未找到优惠券配置', 'error');
      return;
    }

    const status = this.getEffectiveStatus('ops/coupons.html', recordId, row[7]);
    if (status !== '草稿') {
      AdminUI.showMessage('仅草稿状态支持删除', 'warning');
      return;
    }

    this.couponConfigRows = this.couponConfigRows.filter(item => item[0] !== recordId);
    AdminStore.set('extended_coupon_configs', this.couponConfigRows);
    if (this.recordState['ops/coupons.html']) {
      delete this.recordState['ops/coupons.html'][recordId];
      AdminStore.set('extended_record_state', this.recordState);
    }
    AdminUI.showMessage(message, 'success');
    if (this.getCurrentPath() === 'ops/coupon-detail.html') {
      AdminCore.routeTo('ops/coupons.html');
      return;
    }
    this.render();
  },

  deleteRewardRule(recordId, message = '奖励规则草稿已删除') {
    const row = this.rewardRuleRows.find(item => item[0] === recordId);
    if (!row) {
      AdminUI.showMessage('未找到奖励规则', 'error');
      return;
    }

    const status = this.getEffectiveStatus('ops/rewards.html', recordId, row[7]);
    if (status !== '草稿') {
      AdminUI.showMessage('仅草稿状态支持删除', 'warning');
      return;
    }

    this.rewardRuleRows = this.rewardRuleRows.filter(item => item[0] !== recordId);
    AdminStore.set('extended_reward_rules', this.rewardRuleRows);
    if (this.recordState['ops/rewards.html']) {
      delete this.recordState['ops/rewards.html'][recordId];
      AdminStore.set('extended_record_state', this.recordState);
    }
    AdminUI.showMessage(message, 'success');
    if (this.getCurrentPath() === 'ops/reward-detail.html') {
      AdminCore.routeTo('ops/rewards.html');
      return;
    }
    this.render();
  },

  createAnnouncementDraft() {
    const now = new Date().toLocaleString('zh-CN');
    const rows = AdminStore.get('extended_created_announcement_rows', []);
    const recordId = `AN-N${Date.now()}`;
    const row = [recordId, '新建公告草稿', '全局公告', '全部', '平台系统消息（消息页）', '未设置', '草稿', '-', '-', '-'];
    AdminStore.set('extended_created_announcement_rows', [row, ...rows]);
    this.updateRecordState('community/announcements.html', recordId, {
      status: '草稿',
      announcementTitle: '新建公告草稿',
      announcementContent: '',
      displayRange: '未设置',
      targetGroup: '全部',
      pushChannels: '平台系统消息（消息页）',
      note: `创建公告草稿：${now}`
    });
    AdminCore.routeTo(`community/announcement-detail.html?record=${recordId}`);
  },

  createAdDraft() {
    const now = new Date().toLocaleString('zh-CN');
    const rows = AdminStore.get('extended_created_ad_rows', []);
    const recordId = `AD-N${Date.now()}`;
    const row = [recordId, '新建广告位草稿', '首页轮播 Banner', '内部路径', '未设置', '待配置', '草稿', '0', '-'];
    AdminStore.set('extended_created_ad_rows', [row, ...rows]);
    this.updateRecordState('community/ads.html', recordId, {
      status: '草稿',
      adTitle: '新建广告位草稿',
      adPosition: '首页轮播 Banner',
      adImage: '',
      jumpType: '内部路径',
      jumpTarget: '',
      displayRange: '未设置',
      sortOrder: '待配置',
      carouselInterval: '3 秒',
      note: `新增广告位草稿：${now}`
    });
    AdminCore.routeTo(`community/ad-detail.html?record=${recordId}`);
  },

  deleteUrgentPinRule(recordId, message = '急单置顶草稿已删除') {
    const row = this.urgentPinRuleRows.find(item => item[0] === recordId);
    if (!row) {
      AdminUI.showMessage('未找到急单置顶规则', 'error');
      return;
    }

    const status = this.normalizeUrgentPinStatus(row[7]);
    if (status !== '草稿') {
      AdminUI.showMessage('仅草稿状态支持删除', 'warning');
      return;
    }

    this.urgentPinRuleRows = this.urgentPinRuleRows.filter(item => item[0] !== recordId);
    AdminStore.set('extended_urgent_pin_rules', this.urgentPinRuleRows);
    if (this.recordState['ops/urgent-pin.html']) {
      delete this.recordState['ops/urgent-pin.html'][recordId];
      AdminStore.set('extended_record_state', this.recordState);
    }
    AdminUI.showMessage(message, 'success');
    if (this.getCurrentPath() === 'ops/urgent-pin-detail.html') {
      AdminCore.routeTo('ops/urgent-pin.html');
      return;
    }
    this.render();
  },

  createUrgentPinRule() {
    const now = new Date().toLocaleString('zh-CN');
    const nextIndex = String(this.urgentPinRuleRows.length + 1).padStart(3, '0');
    const recordId = `UP-N${nextIndex}`;
    this.urgentPinRuleRows.unshift([recordId, '待命名置顶规则', '5 元', '10 km', '1 h', '10 km · 2 h', '未设置', '草稿', now]);
    AdminStore.set('extended_urgent_pin_rules', this.urgentPinRuleRows);
    this.updateRecordState('ops/urgent-pin.html', recordId, {
      status: '草稿',
      ruleId: recordId,
      ruleName: '待命名置顶规则',
      ruleDescription: '用于配置发布确认页和置顶购买页的急单置顶计费参数。',
      basePrice: '5 元',
      rangeStart: '10 km',
      rangeStep: '10 km',
      durationStep: '1 h',
      defaultValue: '10 km · 2 h',
      displayRange: '未设置'
    });
    AdminCore.routeTo(`ops/urgent-pin-detail.html?record=${recordId}`);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ExtendedModule.init();
});
