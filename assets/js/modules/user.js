const UserModule = {
  pageSize: 5,
  permanentBanExpireAt: '2099/12/30 23:59:59',

  state: {
    list: {
      keyword: '',
      status: '',
      auth: '',
      risk: '',
      creditBand: '',
      partner: '',
      page: 1,
      selectedIds: []
    },
    detail: {
      viewPhone: false
    },
    ban: {
      userId: '',
      phoneSuffix: '',
      processStatus: '',
      accountStatus: '',
      startDate: '',
      endDate: '',
      page: 1,
      selectedCaseId: 'BAN-3031'
    },
    credit: {
      keyword: '',
      status: '',
      page: 1,
      selectedCaseId: 'CR-8802'
    },
    actionModal: {
      show: false,
      mode: 'ban',
      userId: '',
      certType: ''
    }
  },

  users: [
    {
      id: 'U-12031',
      nickname: '沈枝意',
      phoneMasked: '138****5678',
      fullPhone: '13856785678',
      registerTime: '2025-11-08 14:22',
      lastActive: '今天 10:12',
      realName: '已实名',
      degree: '本科在读',
      skill: '陪诊 / 母婴护理',
      credit: 56,
      accountStatus: 'limited',
      accountStatusLabel: '受限',
      ordersCount: 18,
      orderAmount: '¥4,820',
      serviceOrders: 14,
      serviceIncome: '¥3,860',
      publishOrders: 4,
      spendingAmount: '¥960',
      partner: '否',
      highRisk: '近 30 天 2 次纠纷，1 次取消责任',
      authSummary: '实名 + 学历 + 技能',
      canBulkBan: false,
      assets: '钱包余额 ¥218',
      assetInfo: {
        balance: '¥218',
        pendingSettlement: '¥426',
        frozenAmount: '¥138',
        withdrawnTotal: '¥1,980',
        recentWithdrawalStatus: '最近提现已拒绝',
        accountBanImpact: '未封禁，低信用限制接单/发布',
        subjectRiskImpact: '主体风控观察中'
      },
      notes: '近期主要争议集中在陪诊任务完成凭证不足。'
    },
    {
      id: 'U-11816',
      nickname: '林见川',
      phoneMasked: '139****4421',
      fullPhone: '13988884421',
      registerTime: '2025-10-19 11:07',
      lastActive: '今天 09:36',
      realName: '已实名',
      degree: '未提交',
      skill: '无技能认证',
      credit: 88,
      accountStatus: 'active',
      accountStatusLabel: '正常',
      ordersCount: 42,
      orderAmount: '¥9,260',
      serviceOrders: 36,
      serviceIncome: '¥7,820',
      publishOrders: 6,
      spendingAmount: '¥1,440',
      partner: '否',
      highRisk: '无',
      authSummary: '实名',
      canBulkBan: true,
      assets: '钱包余额 ¥98',
      assetInfo: {
        balance: '¥98',
        pendingSettlement: '¥0',
        frozenAmount: '¥0',
        withdrawnTotal: '¥6,620',
        recentWithdrawalStatus: '最近提现已到账',
        accountBanImpact: '未受封禁影响',
        subjectRiskImpact: '无主体风控影响'
      },
      notes: '履约表现稳定。'
    },
    {
      id: 'U-10944',
      nickname: '周南栀',
      phoneMasked: '137****9162',
      fullPhone: '13755669162',
      registerTime: '2025-08-03 09:55',
      lastActive: '昨天 20:18',
      realName: '已实名',
      degree: '已认证',
      skill: '摄影 / 修图',
      credit: 42,
      accountStatus: 'banned',
      accountStatusLabel: '封禁中',
      ordersCount: 27,
      orderAmount: '¥6,340',
      serviceOrders: 23,
      serviceIncome: '¥5,760',
      publishOrders: 4,
      spendingAmount: '¥580',
      partner: '否',
      highRisk: '多次跳单风险，主体级关注',
      authSummary: '实名 + 学历 + 技能',
      canBulkBan: true,
      assets: '钱包余额 ¥0',
      assetInfo: {
        balance: '¥0',
        pendingSettlement: '¥0',
        frozenAmount: '¥0',
        withdrawnTotal: '¥4,260',
        recentWithdrawalStatus: '无提现申请',
        accountBanImpact: '封禁中，提现与资金动作冻结',
        subjectRiskImpact: '主体级风险观察'
      },
      notes: '当前封禁复核处理中。'
    },
    {
      id: 'U-10771',
      nickname: '季明川',
      phoneMasked: '136****3352',
      fullPhone: '13666663352',
      registerTime: '2025-07-21 16:42',
      lastActive: '今天 07:58',
      realName: '已实名',
      degree: '已认证',
      skill: '英语陪练',
      credit: 79,
      accountStatus: 'active',
      accountStatusLabel: '正常',
      ordersCount: 31,
      orderAmount: '¥5,180',
      serviceOrders: 29,
      serviceIncome: '¥4,920',
      publishOrders: 2,
      spendingAmount: '¥260',
      partner: '否',
      highRisk: '无',
      authSummary: '实名 + 学历 + 技能',
      canBulkBan: true,
      assets: '钱包余额 ¥126',
      assetInfo: {
        balance: '¥126',
        pendingSettlement: '¥180',
        frozenAmount: '¥0',
        withdrawnTotal: '¥3,880',
        recentWithdrawalStatus: '最近提现已到账',
        accountBanImpact: '未受封禁影响',
        subjectRiskImpact: '无主体风控影响'
      },
      notes: '技能类订单好评率高。'
    },
    {
      id: 'U-10382',
      nickname: '陈知栀',
      phoneMasked: '135****2281',
      fullPhone: '13570002281',
      registerTime: '2025-06-14 12:08',
      lastActive: '今天 11:03',
      realName: '已实名',
      degree: '未提交',
      skill: '无技能认证',
      credit: 63,
      accountStatus: 'limited',
      accountStatusLabel: '受限观察',
      ordersCount: 9,
      orderAmount: '¥1,880',
      serviceOrders: 7,
      serviceIncome: '¥1,320',
      publishOrders: 2,
      spendingAmount: '¥560',
      partner: '否',
      highRisk: '差评集中，需观察',
      authSummary: '实名',
      canBulkBan: false,
      assets: '钱包余额 ¥45',
      assetInfo: {
        balance: '¥45',
        pendingSettlement: '¥0',
        frozenAmount: '¥45',
        withdrawnTotal: '¥820',
        recentWithdrawalStatus: '最近提现审核中',
        accountBanImpact: '受限观察，提现暂缓放行',
        subjectRiskImpact: '差评集中观察'
      },
      notes: '近期有 1 单高优先级投诉。'
    },
    {
      id: 'U-9981',
      nickname: '顾温澜',
      phoneMasked: '134****7714',
      fullPhone: '13456787714',
      registerTime: '2025-04-09 18:36',
      lastActive: '2 天前 13:42',
      realName: '已实名',
      degree: '本科在读',
      skill: '活动协助',
      credit: 91,
      accountStatus: 'active',
      accountStatusLabel: '正常',
      ordersCount: 55,
      orderAmount: '¥10,440',
      serviceOrders: 48,
      serviceIncome: '¥9,180',
      publishOrders: 7,
      spendingAmount: '¥1,260',
      partner: '是',
      highRisk: '无',
      authSummary: '实名 + 学历 + 技能',
      canBulkBan: true,
      assets: '钱包余额 ¥366',
      assetInfo: {
        balance: '¥366',
        pendingSettlement: '¥520',
        frozenAmount: '¥0',
        withdrawnTotal: '¥7,960',
        recentWithdrawalStatus: '最近提现已到账',
        accountBanImpact: '未受封禁影响',
        subjectRiskImpact: '无主体风控影响'
      },
      notes: '合伙人候选，履约历史稳定。'
    }
  ],

  banCases: [
    {
      id: 'BAN-3031',
      userId: 'U-10944',
      nickname: '周南栀',
      reason: '线下跳单 + 多次被举报',
      banType: 'permanent',
      banTypeLabel: '永久封禁',
      banSource: 'manual',
      createdBy: '风控专员-许安',
      effectiveAt: '2026-04-24 15:32',
      processor: '未分配',
      duration: '永久封禁',
      status: 'appeal_pending',
      statusLabel: '申诉待处理',
      submittedAt: '2026-04-26 20:16',
      expireAt: '2099/12/30 23:59:59',
      risk: '主体级风险观察',
      internalNote: '同实名主体近 30 天 3 次命中站外交易话术，暂不建议直接解封。',
      punishmentHistory: ['2026-04-10 中风险跳单表达拦截，信用分 -5', '2026-04-18 举报成立，警告并扣分'],
      riskEvents: ['RISK-7712 消息风控高风险：引导微信交易', 'RISK-7720 主体级风险观察'],
      relatedRisks: ['余额 ¥0，无提现申请', '关联订单 OD-240317-19 仍在证据复核中'],
      appealNote: '用户主张订单聊天截图被误判，希望恢复发布权限。',
      appealMaterials: [
        { id: 'BAN-3031-img-1', label: '聊天截图 1', title: '用户申诉材料', note: '用户称未引导站外交易。' },
        { id: 'BAN-3031-img-2', label: '订单凭证截图', title: '用户申诉材料', note: 'OD-240317-19 服务沟通记录。' },
        '补充说明：愿意配合平台复核完整聊天上下文'
      ],
      relatedOrder: 'OD-240317-19',
      relatedOrders: [{ id: 'OD-240317-19', note: '仍在证据复核中' }],
      relatedDisputes: [{ id: 'DP-7098', note: '跳单与线下支付争议' }],
      relatedCreditAppeals: [{ id: 'CR-8784', note: '跳单确认扣分申诉已驳回' }],
      actionHistory: ['2026-04-26 20:16 用户提交解封申诉', '2026-04-24 15:32 操作人：风控专员-许安；动作：管理员手动封禁，原因：线下跳单 + 多次被举报']
    },
    {
      id: 'BAN-3022',
      userId: 'U-10382',
      nickname: '陈知栀',
      reason: '服务完成凭证造假',
      banType: 'temporary',
      banTypeLabel: '临时封禁',
      banSource: 'manual',
      createdBy: '运营专员-林遥',
      effectiveAt: '2026-04-25 18:02',
      processor: '运营专员-林遥',
      duration: '7 天临时封禁',
      status: 'banned',
      statusLabel: '封禁中',
      submittedAt: '2026-04-25 18:02',
      expireAt: '2026-05-02 18:02',
      risk: '进行中订单 1 单',
      internalNote: '到期自动解封前需确认进行中订单已完成或转人工处理。',
      punishmentHistory: ['2026-04-19 投诉成立，信用分 -3'],
      riskEvents: ['RISK-7688 完成凭证疑似重复上传'],
      relatedRisks: ['进行中订单 1 单，需人工跟进', '钱包余额 ¥45，封禁期冻结提现'],
      appealNote: '暂未提交申诉',
      appealMaterials: [],
      relatedOrder: 'OD-240321-08',
      relatedOrders: [{ id: 'OD-240321-08', note: '进行中订单需人工跟进' }],
      relatedDisputes: [],
      relatedCreditAppeals: [{ id: 'CR-8796', note: '差评集中扣分申诉人工复核中' }],
      actionHistory: ['2026-04-25 18:02 操作人：运营专员-林遥；动作：管理员手动封禁，原因：服务完成凭证造假']
    },
    {
      id: 'BAN-3016',
      userId: 'U-12031',
      nickname: '沈枝意',
      reason: '信用分持续低于 60，限制接单 / 发布',
      banType: 'temporary',
      banTypeLabel: '临时封禁',
      banSource: 'system',
      createdBy: '系统',
      effectiveAt: '2026-04-24 13:48',
      processor: '风控专员-许安',
      duration: '账号受限',
      status: 'reviewing',
      statusLabel: '人工复核中',
      submittedAt: '2026-04-24 13:48',
      expireAt: '待信用恢复',
      risk: '有未结纠纷，不可直接恢复',
      internalNote: '该记录由低信用分限制回流封禁队列，需先处理纠纷与信用申诉。',
      punishmentHistory: ['2026-04-23 纠纷责任扣分 -12'],
      riskEvents: ['CR-8802 信用申诉待处理', 'DIS-240317 纠纷证据待补充'],
      relatedRisks: ['钱包余额 ¥218', '未结纠纷 1 单，不可直接恢复'],
      appealNote: '已补交完成凭证与双方聊天截图。',
      appealMaterials: [
        { id: 'BAN-3016-img-1', label: '完成凭证照片 1', title: '用户申诉材料', note: '服务完成凭证。' },
        { id: 'BAN-3016-img-2', label: '双方聊天截图', title: '用户申诉材料', note: '补交双方沟通截图。' },
        '纠纷补充说明：服务已完成，等待发布者确认'
      ],
      relatedOrder: 'OD-240317-19',
      relatedOrders: [{ id: 'OD-240317-19', note: '纠纷中，争议冻结 ¥138' }],
      relatedDisputes: [{ id: 'DP-7113', note: '完成凭证不足纠纷待裁定' }],
      relatedCreditAppeals: [{ id: 'CR-8802', note: '纠纷责任扣分申诉待处理' }],
      actionHistory: ['2026-04-24 13:48 操作人：系统；动作：系统自动封禁，原因：信用分持续低于 60，限制接单 / 发布', '2026-04-24 13:48 操作人：风控专员-许安；动作：认领封禁工单']
    },
    {
      id: 'BAN-3009',
      userId: 'U-11816',
      nickname: '林见川',
      reason: '异常接单行为触发临时封禁',
      banType: 'temporary',
      banTypeLabel: '临时封禁',
      banSource: 'system',
      createdBy: '系统',
      effectiveAt: '2026-04-23 10:28',
      processor: '未分配',
      duration: '7 天临时封禁',
      status: 'appeal_pending',
      statusLabel: '申诉待处理',
      submittedAt: '2026-04-23 10:28',
      expireAt: '2026-04-30 10:28',
      risk: '短时高频接单后取消',
      internalNote: '需核对是否为考试周时间冲突导致的误伤。',
      punishmentHistory: ['2026-04-22 异常接单取消命中，信用分 -4'],
      riskEvents: ['RISK-7651 短时接单取消率异常'],
      relatedRisks: ['暂无资金冻结', '无未结纠纷'],
      appealNote: '用户说明考试周误点接单，已补充课程表和与发布者协商截图。',
      appealMaterials: [
        { id: 'BAN-3009-img-1', label: '课程表截图', title: '用户申诉材料', note: '用户证明时间冲突。' },
        { id: 'BAN-3009-img-2', label: '协商截图', title: '用户申诉材料', note: '与发布者协商取消记录。' }
      ],
      relatedOrders: [{ id: 'OD-240326-03', note: '取消订单，待核对协商记录' }],
      relatedDisputes: [],
      relatedCreditAppeals: [],
      actionHistory: ['2026-04-23 10:28 用户提交解封申诉', '2026-04-23 10:28 操作人：系统；动作：系统自动封禁，原因：异常接单行为触发临时封禁']
    },
    {
      id: 'BAN-3004',
      userId: 'U-11880',
      nickname: '许知夏',
      reason: '认证材料异常导致账号受限',
      banType: 'temporary',
      banTypeLabel: '临时封禁',
      banSource: 'system',
      createdBy: '系统',
      effectiveAt: '2026-04-22 16:42',
      processor: '风控专员-何青',
      duration: '账号受限',
      status: 'reviewing',
      statusLabel: '人工复核中',
      submittedAt: '2026-04-22 16:42',
      expireAt: '待复核结论',
      risk: '学历认证供应商异常需跟进',
      internalNote: '已认领，等待核对供应商回调与认证异常记录。',
      punishmentHistory: ['2026-04-21 认证材料异常命中'],
      riskEvents: ['RISK-7622 认证材料 OCR 与实名信息不一致'],
      relatedRisks: ['无进行中订单', '无钱包冻结'],
      appealNote: '用户说明认证材料被系统误识别，重新上传学生证和学信网截图。',
      appealMaterials: [
        { id: 'BAN-3004-img-1', label: '学生证照片', title: '用户申诉材料', note: '重新上传的学生证照片。' },
        { id: 'BAN-3004-img-2', label: '学信网截图', title: '用户申诉材料', note: '学籍状态截图。' }
      ],
      relatedOrders: [],
      relatedDisputes: [],
      relatedCreditAppeals: [],
      actionHistory: ['2026-04-22 17:05 操作人：风控专员-何青；动作：认领封禁工单', '2026-04-22 16:42 用户提交解封申诉', '2026-04-22 16:42 操作人：系统；动作：系统自动封禁，原因：认证材料异常导致账号受限']
    }
  ],

  creditCases: [
    {
      id: 'CR-8811',
      userId: 'U-11816',
      nickname: '林见川',
      currentScore: 59,
      event: '临时取消集中扣分 -6',
      appealStatus: 'pending',
      appealStatusLabel: '申诉待处理',
      restriction: '限制高风险任务申请',
      orderId: 'OD-240326-03',
      submittedAt: '2026-04-28 09:30',
      evidence: '补充课程冲突说明、协商取消截图，希望撤销临时取消扣分。',
      appealMaterials: [
        { id: 'CR-8811-img-1', label: '课程表截图', title: '信用申诉材料', note: '考试周课程冲突证明。' },
        { id: 'CR-8811-img-2', label: '协商取消截图', title: '信用申诉材料', note: '与发布者协商取消记录。' }
      ],
      trend: ['03-30 72', '04-12 68', '04-28 59']
    },
    {
      id: 'CR-8809',
      userId: 'U-11880',
      nickname: '许知夏',
      currentScore: 61,
      event: '认证材料异常扣分 -4',
      appealStatus: 'pending',
      appealStatusLabel: '申诉待处理',
      restriction: '限制申请认证类任务',
      orderId: 'OD-240322-16',
      submittedAt: '2026-04-28 08:54',
      evidence: '用户重新上传学生证、学信网截图，说明 OCR 误识别。',
      appealMaterials: [
        { id: 'CR-8809-img-1', label: '学生证照片', title: '信用申诉材料', note: '重新上传的学生证照片。' },
        { id: 'CR-8809-img-2', label: '学信网截图', title: '信用申诉材料', note: '学籍状态截图。' }
      ],
      trend: ['04-01 70', '04-15 65', '04-28 61']
    },
    {
      id: 'CR-8806',
      userId: 'U-10771',
      nickname: '季明川',
      currentScore: 66,
      event: '差评争议扣分 -5',
      appealStatus: 'pending',
      appealStatusLabel: '申诉待处理',
      restriction: '限制推荐优先级',
      orderId: 'OD-240319-07',
      submittedAt: '2026-04-27 15:26',
      evidence: '补充服务过程截图与用户确认记录，主张差评责任不完全成立。',
      appealMaterials: [
        { id: 'CR-8806-img-1', label: '服务过程截图', title: '信用申诉材料', note: '任务履约节点截图。' },
        { id: 'CR-8806-img-2', label: '确认记录截图', title: '信用申诉材料', note: '对方确认服务内容记录。' }
      ],
      trend: ['03-29 76', '04-14 71', '04-27 66']
    },
    {
      id: 'CR-8802',
      userId: 'U-12031',
      nickname: '沈枝意',
      currentScore: 56,
      event: '纠纷责任扣分 -12',
      appealStatus: 'pending',
      appealStatusLabel: '申诉待处理',
      restriction: '限制发布 / 接单 / 动态',
      orderId: 'OD-240317-19',
      submittedAt: '2026-04-27 08:40',
      evidence: '补充完成凭证、聊天记录、GPS 打卡时间轴。',
      appealMaterials: [
        { id: 'CR-8802-img-1', label: '完成凭证照片', title: '信用申诉材料', note: '服务完成凭证补充照片。' },
        { id: 'CR-8802-img-2', label: '聊天记录截图', title: '信用申诉材料', note: '双方沟通记录截图。' },
        { id: 'CR-8802-img-3', label: 'GPS 打卡截图', title: '信用申诉材料', note: '服务过程打卡时间轴。' }
      ],
      trend: ['04-10 70', '04-17 68', '04-23 56']
    },
    {
      id: 'CR-8796',
      userId: 'U-10382',
      nickname: '陈知栀',
      currentScore: 63,
      event: '差评集中扣分 -5',
      appealStatus: 'reviewing',
      appealStatusLabel: '人工复核中',
      restriction: '限制高风险任务申请',
      orderId: 'OD-240321-08',
      submittedAt: '2026-04-26 17:12',
      evidence: '任务过程说明、评价截图。',
      appealMaterials: [
        { id: 'CR-8796-img-1', label: '任务过程截图', title: '信用申诉材料', note: '服务过程关键节点截图。' },
        { id: 'CR-8796-img-2', label: '评价截图', title: '信用申诉材料', note: '用户评价与沟通补充。' }
      ],
      trend: ['04-08 75', '04-20 68', '04-26 63']
    },
    {
      id: 'CR-8784',
      userId: 'U-10944',
      nickname: '周南栀',
      currentScore: 42,
      event: '跳单确认扣分 -25',
      appealStatus: 'rejected',
      appealStatusLabel: '申诉驳回',
      restriction: '主体级限制观察',
      orderId: 'OD-240305-11',
      submittedAt: '2026-04-24 11:20',
      evidence: '聊天证据、举报内容和风控命中记录。',
      appealMaterials: [
        { id: 'CR-8784-img-1', label: '聊天证据截图', title: '信用申诉材料', note: '站外交易相关聊天证据。' },
        { id: 'CR-8784-img-2', label: '举报内容截图', title: '信用申诉材料', note: '举报处理记录截图。' }
      ],
      trend: ['04-01 67', '04-15 67', '04-24 42']
    }
  ],

  detailProfiles: {
    'U-12031': {
      statusHistory: ['2026-04-24 因纠纷责任自动降为受限状态', '2026-03-30 因完单率提升恢复至 68 分'],
      creditLogs: ['完成订单 +3', '好评 +1', '纠纷责任 -12', '超时接单 -4'],
      relatedOrders: [
        { id: 'OD-240317-19', role: '服务者', project: '陪诊协助', counterpart: '发布者：梁女士', status: '纠纷中', amount: '¥138', serviceNode: '待确认完成 36h 后发起纠纷', settlement: '争议冻结 ¥138', riskLink: '完成凭证不足，关联 CR-8802' },
        { id: 'OD-240309-02', role: '发布者', project: '宠物照看', counterpart: '服务者：林见川', status: '已完成', amount: '¥96', serviceNode: '240h 内主动确认完成', settlement: '已结算，平台收益 ¥9.6', riskLink: '无风险命中' },
        { id: 'OD-240228-17', role: '服务者', project: '代办跑腿', counterpart: '发布者：何同学', status: '已评价', amount: '¥58', serviceNode: '服务码一次核验通过', settlement: '已评价，信用 +1', riskLink: '可从订单进入信用流水' }
      ],
      riskItems: ['近 30 天 2 次纠纷', '完成凭证缺失 1 次', '无主体级命中'],
      security: ['上次登录 IP：113.80.21.18', '新设备登录 1 次，已邮件确认', '完整手机号查看记录 2 次'],
      certifications: ['实名：已通过', '学历：深圳大学 本科', '技能：陪诊 / 母婴护理', '紧急联系人：李女士 5566']
    }
  },

  init() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (!path.includes('/user/')) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    this.users = AdminStore.get('user_items', this.users).map(user => ({
      ...user,
      canBulkBan: Object.prototype.hasOwnProperty.call(user, 'canBulkBan') ? user.canBulkBan : user.canBulkFreeze
    }));
    const defaultBanCases = this.banCases;
    this.banCases = this.ensureBanAppealSamples(AdminStore.get('user_ban_cases', defaultBanCases), defaultBanCases)
      .map(item => this.normalizeBanCase(item));
    this.syncBanAppealsFromApp();
    const defaultCreditCases = this.creditCases;
    this.creditCases = this.ensureCreditAppealSamples(AdminStore.get('user_credit_cases', defaultCreditCases), defaultCreditCases)
      .map(item => this.normalizeCreditCase(item));
    this.detailProfiles = AdminStore.get('user_detail_profiles', this.detailProfiles);
    this.render();
    this.bindEvents();
  },

  ensureBanAppealSamples(storedCases, defaultCases) {
    const cases = Array.isArray(storedCases) ? [...storedCases] : [];
    const requiredAppealIds = ['BAN-3009', 'BAN-3004'];
    requiredAppealIds.forEach(id => {
      if (!cases.some(item => item.id === id)) {
        const sample = defaultCases.find(item => item.id === id);
        if (sample) {
          cases.push(sample);
        }
      }
    });
    return cases;
  },

  ensureCreditAppealSamples(storedCases, defaultCases) {
    const cases = Array.isArray(storedCases) ? [...storedCases] : [];
    const requiredPendingIds = ['CR-8811', 'CR-8809', 'CR-8806'];
    requiredPendingIds.forEach(id => {
      if (!cases.some(item => item.id === id)) {
        const sample = defaultCases.find(item => item.id === id);
        if (sample) {
          cases.unshift(sample);
        }
      }
    });
    return cases;
  },

  normalizeBanCase(item) {
    const isPermanent = item.duration && item.duration.includes('永久');
    const banType = item.banType || (isPermanent ? 'permanent' : 'temporary');
    const allowedStatuses = ['appeal_pending', 'reviewing', 'banned', 'resolved'];
    const status = allowedStatuses.includes(item.status) ? item.status : 'reviewing';
    const normalized = {
      ...item,
      banType,
      banTypeLabel: item.banTypeLabel || (banType === 'permanent' ? '永久封禁' : '临时封禁'),
      banSource: item.banSource || (String(item.reason || '').includes('信用分') || String(item.reason || '').includes('异常') || String(item.reason || '').includes('认证') ? 'system' : 'manual'),
      createdBy: item.createdBy || item.processor || '系统',
      effectiveAt: item.effectiveAt || item.banAt || item.submittedAt,
      status,
      statusLabel: allowedStatuses.includes(item.status) ? item.statusLabel : '人工复核中',
      processor: status === 'appeal_pending' ? '未分配' : (item.processor || '未分配'),
      internalNote: item.internalNote || '暂无内部备注',
      punishmentHistory: this.normalizeBanTriggerHistory(item.punishmentHistory),
      riskEvents: item.riskEvents || [item.risk || '暂无关联风控事件'],
      relatedRisks: item.relatedRisks || [item.risk || '暂无关联风险'],
      appealNote: item.appealNote || '暂未提交申诉',
      appealMaterials: Array.isArray(item.appealMaterials) ? item.appealMaterials : [],
      relatedOrders: this.normalizeRelatedRecords(item.relatedOrders, item.relatedOrder),
      relatedDisputes: this.normalizeRelatedRecords(item.relatedDisputes),
      relatedCreditAppeals: this.normalizeRelatedRecords(item.relatedCreditAppeals)
    };
    normalized.expireAt = this.normalizeBanExpireAt(normalized);
    normalized.actionHistory = this.normalizeBanActionHistory(normalized);
    return normalized;
  },

  syncBanAppealsFromApp() {
    let appAppeals = [];
    try {
      appAppeals = JSON.parse(localStorage.getItem('banxing.banAppeals') || '[]');
    } catch (error) {
      appAppeals = [];
    }
    if (!Array.isArray(appAppeals) || !appAppeals.length) {
      return;
    }
    appAppeals.forEach(appeal => {
      const caseId = appeal.caseId || 'BAN-3031';
      const banCase = this.banCases.find(item => item.id === caseId);
      if (!banCase) {
        return;
      }
      banCase.status = ['resolved', 'banned'].includes(banCase.status) ? banCase.status : 'appeal_pending';
      banCase.statusLabel = banCase.status === 'resolved' ? '已解封' : (banCase.status === 'banned' ? '封禁中' : '申诉待处理');
      if (banCase.status === 'appeal_pending') {
        banCase.processor = '未分配';
      }
      banCase.appealNote = appeal.content || banCase.appealNote || '用户已提交解封申诉';
      banCase.submittedAt = appeal.time || banCase.submittedAt;
      banCase.appealMaterials = [
        `申诉说明：${appeal.content || '未填写文字说明'}`,
        ...(Array.isArray(appeal.attachments) && appeal.attachments.length ? appeal.attachments.map(item => `图片材料：${item}`) : ['图片材料：未上传'])
      ];
      const historyText = `${appeal.time || '刚刚'} 用户提交解封申诉`;
      if (!banCase.actionHistory.some(item => item.includes(appeal.id || historyText))) {
        banCase.actionHistory.unshift(appeal.id ? `${historyText}（${appeal.id}）` : historyText);
      }
    });
  },

  renderPlainTextItems(items) {
    return items.map(item => `<div>${AdminCore.escapeHTML(item)}</div>`).join('');
  },

  renderMaterialBlock(items, title) {
    const values = Array.isArray(items) ? items.filter(Boolean) : [];
    const mediaItems = values.filter(item => {
      const label = typeof item === 'string' ? item : (item?.label || item?.name || item?.title || '');
      return AdminCore.isPreviewableMediaLabel(label) && !/未上传|暂未提交/.test(String(label));
    });
    const textItems = values.filter(item => !mediaItems.includes(item)).map(item => {
      if (typeof item === 'string') return item;
      return item?.note || item?.label || item?.title || '';
    }).filter(Boolean);
    if (!values.length) {
      return '<div>暂无图片或附件材料</div>';
    }
    return `
      ${mediaItems.length ? AdminCore.renderMediaGallery(mediaItems, { title, note: '当前为后台原型预览图位，真实环境应接入用户上传原图。' }) : ''}
      ${textItems.length ? `<div style="display:grid; gap:6px; margin-top:${mediaItems.length ? '10px' : '0'};">${this.renderPlainTextItems(textItems)}</div>` : ''}
    `;
  },

  renderAppealMaterials(materials) {
    return this.renderMaterialBlock(materials, '用户申诉图片材料');
  },

  normalizeRelatedRecords(records, fallbackId = '') {
    const source = Array.isArray(records) ? records.filter(Boolean) : [];
    const values = source.length ? source : (fallbackId ? [fallbackId] : []);
    return values.filter(item => !/待补充|暂无/.test(String(typeof item === 'string' ? item : (item?.id || item?.label || '')))).map(item => {
      if (typeof item === 'string') {
        return { id: item, label: item, note: '' };
      }
      return {
        id: item.id || item.value || item.label || '',
        label: item.label || item.id || item.value || '',
        note: item.note || item.desc || item.status || ''
      };
    }).filter(item => item.id);
  },

  getRelatedRecordRoute(type, id) {
    const encodedId = encodeURIComponent(id);
    if (type === 'order') return `order/detail.html?order=${encodedId}`;
    if (type === 'dispute') return `order/dispute-detail.html?dispute=${encodedId}`;
    return `user/credit-detail.html?case=${encodedId}`;
  },

  renderRelatedRecordModule(title, records, type) {
    const items = Array.isArray(records) ? records : [];
    return `
      <div class="section-card">
        <div class="card-header"><div class="card-title">${title}</div></div>
        ${items.length ? `
          <div class="evidence-list">
            ${items.map(item => `
              <div class="evidence-item">
                <div class="evidence-title">
                  <button class="btn btn-sm" type="button" data-route="${this.getRelatedRecordRoute(type, item.id)}">${AdminCore.escapeHTML(item.label || item.id)}</button>
                </div>
                <div class="evidence-desc">${AdminCore.escapeHTML(item.note || '点击 ID 查看详情')}</div>
              </div>
            `).join('')}
          </div>
        ` : '<div class="empty-note">暂无关联记录</div>'}
      </div>
    `;
  },

  renderBanActionButtons(item, sizeClass = '') {
    const process = this.getBanProcessStatus(item);
    const cls = `btn${sizeClass ? ` ${sizeClass}` : ''}`;
    const primaryCls = `${cls} btn-primary`;
    const id = AdminCore.escapeHTML(item.id);
    const buttons = [];
    if (process.value === 'appeal_pending') {
      buttons.push(`<button class="${primaryCls}" type="button" data-action="ban-claim" data-id="${id}">认领处理</button>`);
    }
    if (process.value === 'reviewing') {
      buttons.push(`<button class="${cls}" type="button" data-action="ban-keep" data-id="${id}">维持当前处置</button>`);
      buttons.push(`<button class="${primaryCls}" type="button" data-action="ban-approve" data-id="${id}">解封</button>`);
    }
    if (process.value === 'temporary') {
      buttons.push(`<button class="${cls}" type="button" data-action="ban-extend" data-id="${id}">延长封禁 7 天</button>`);
      buttons.push(`<button class="${primaryCls}" type="button" data-action="ban-approve" data-id="${id}">解封</button>`);
    }
    if (process.value === 'permanent') {
      buttons.push(`<button class="${primaryCls}" type="button" data-action="ban-approve" data-id="${id}">解封</button>`);
    }
    if (process.value === 'resolved') {
      buttons.push(`<button class="${primaryCls}" type="button" data-action="ban-reban" data-id="${id}">封禁</button>`);
    }
    return buttons.join('');
  },

  renderCreditActionButtons(item, sizeClass = '') {
    if (this.isCreditTerminal(item.appealStatus)) {
      return '';
    }
    const cls = `btn${sizeClass ? ` ${sizeClass}` : ''}`;
    const id = AdminCore.escapeHTML(item.id);
    const canReview = item.appealStatus === 'pending';
    return `
      ${canReview ? `<button class="${cls}" type="button" data-action="credit-reviewing" data-id="${id}">转人工复核</button>` : ''}
      <button class="${cls}" type="button" data-action="credit-reject" data-id="${id}">驳回申诉</button>
      <button class="${cls} btn-primary" type="button" data-action="credit-approve" data-id="${id}">通过并回滚</button>
    `;
  },

  getCurrentOperator() {
    return localStorage.getItem('admin_current_operator') || '超级管理员';
  },

  hasBanAppeal(item) {
    if (!item) return false;
    const note = String(item.appealNote || '').trim();
    const hasNote = note && !/暂未提交申诉/.test(note);
    const hasMaterials = Array.isArray(item.appealMaterials) && item.appealMaterials.length > 0;
    return ['appeal_pending', 'reviewing'].includes(item.status) || hasNote || hasMaterials;
  },

  createBanActionLog(item, actionText, operator = this.getCurrentOperator()) {
    const now = new Date().toLocaleString('zh-CN');
    return `${now} 操作人：${operator}；动作：${actionText}`;
  },

  getBanInitialActionLog(item) {
    const time = item.effectiveAt || item.submittedAt || '未知时间';
    const sourceAction = item.banSource === 'system' ? '系统自动封禁' : '管理员手动封禁';
    const operator = item.banSource === 'system' ? '系统' : (item.createdBy || item.processor || '管理员');
    return `${time} 操作人：${operator}；动作：${sourceAction}，原因：${item.reason || '未填写原因'}`;
  },

  normalizeBanActionHistory(item) {
    const history = Array.isArray(item.actionHistory) ? item.actionHistory.filter(Boolean) : [];
    const hasInitial = history.some(text => /管理员手动封禁|系统自动封禁/.test(String(text)));
    return hasInitial ? history : [...history, this.getBanInitialActionLog(item)];
  },

  normalizeBanTriggerHistory(items) {
    const values = Array.isArray(items) ? items.filter(Boolean) : [];
    return values.filter(item => {
      const text = String(item || '');
      return !/管理员手动封禁|系统自动封禁|临时封禁\s*7\s*天|永久封禁|进入账号受限队列|本次封禁/.test(text);
    });
  },

  isUnassignedProcessor(processor) {
    return !processor || processor === '未分配';
  },

  isCreditTerminal(status) {
    return ['approved', 'rejected'].includes(status);
  },

  normalizeCreditCase(item) {
    const labels = {
      pending: '申诉待处理',
      reviewing: '人工复核中',
      approved: '申诉通过',
      rejected: '申诉驳回'
    };
    const legacyApproved = item.appealStatus === 'reviewing' && /通过|待回写/.test(item.appealStatusLabel || '');
    const status = legacyApproved ? 'approved' : (labels[item.appealStatus] ? item.appealStatus : 'pending');
    return {
      ...item,
      appealStatus: status,
      appealStatusLabel: labels[status],
      appealMaterials: Array.isArray(item.appealMaterials) ? item.appealMaterials : [],
      history: Array.isArray(item.history) ? item.history : [],
      trend: Array.isArray(item.trend) ? item.trend : []
    };
  },

  parseCreditTrend(trend) {
    const values = (Array.isArray(trend) ? trend : []).map((item, index) => {
      if (item && typeof item === 'object') {
        return {
          label: item.label || item.date || `节点 ${index + 1}`,
          score: Number(item.score || item.value || 0)
        };
      }
      const text = String(item || '');
      const matched = text.match(/(.+?)\s+(-?\d+)/);
      return {
        label: matched ? matched[1] : `节点 ${index + 1}`,
        score: matched ? Number(matched[2]) : Number(text)
      };
    }).filter(item => Number.isFinite(item.score));
    return values.length ? values : [{ label: '当前', score: 0 }];
  },

  renderCreditTrendChart(trend) {
    const points = this.parseCreditTrend(trend);
    const width = 720;
    const height = 220;
    const padding = { left: 44, right: 24, top: 24, bottom: 42 };
    const minScore = Math.max(0, Math.min(...points.map(item => item.score)) - 8);
    const maxScore = Math.min(100, Math.max(...points.map(item => item.score)) + 8);
    const range = Math.max(1, maxScore - minScore);
    const xFor = index => {
      if (points.length === 1) return width / 2;
      return padding.left + ((width - padding.left - padding.right) * index / (points.length - 1));
    };
    const yFor = score => padding.top + (height - padding.top - padding.bottom) * (1 - ((score - minScore) / range));
    const coords = points.map((item, index) => ({ ...item, x: xFor(index), y: yFor(item.score) }));
    const linePath = coords.map((item, index) => `${index ? 'L' : 'M'} ${item.x} ${item.y}`).join(' ');
    const areaPath = `${linePath} L ${coords[coords.length - 1].x} ${height - padding.bottom} L ${coords[0].x} ${height - padding.bottom} Z`;

    return `
      <div style="overflow:auto;">
        <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="近 30 天信用分趋势曲线" style="width:100%; min-width:520px; height:auto; display:block;">
          <defs>
            <linearGradient id="creditTrendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#2563eb" stop-opacity="0.18"></stop>
              <stop offset="100%" stop-color="#2563eb" stop-opacity="0.02"></stop>
            </linearGradient>
          </defs>
          <line x1="${padding.left}" y1="${padding.top}" x2="${padding.left}" y2="${height - padding.bottom}" stroke="var(--color-border)" stroke-width="1"></line>
          <line x1="${padding.left}" y1="${height - padding.bottom}" x2="${width - padding.right}" y2="${height - padding.bottom}" stroke="var(--color-border)" stroke-width="1"></line>
          ${[minScore, Math.round((minScore + maxScore) / 2), maxScore].map(score => {
            const y = yFor(score);
            return `<g><line x1="${padding.left}" y1="${y}" x2="${width - padding.right}" y2="${y}" stroke="var(--color-border-light)" stroke-width="1"></line><text x="10" y="${y + 4}" fill="var(--color-text-secondary)" font-size="12">${score}</text></g>`;
          }).join('')}
          <path d="${areaPath}" fill="url(#creditTrendFill)"></path>
          <path d="${linePath}" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
          ${coords.map(item => `
            <g>
              <circle cx="${item.x}" cy="${item.y}" r="5" fill="#fff" stroke="#2563eb" stroke-width="3"></circle>
              <text x="${item.x}" y="${item.y - 12}" text-anchor="middle" fill="var(--color-text-primary)" font-size="12" font-weight="600">${item.score}</text>
              <text x="${item.x}" y="${height - 16}" text-anchor="middle" fill="var(--color-text-secondary)" font-size="12">${AdminCore.escapeHTML(item.label)}</text>
            </g>
          `).join('')}
        </svg>
      </div>
    `;
  },

  getCreditRollbackAmount(item) {
    const matched = String(item.event || '').match(/-\s*(\d+)/);
    return matched ? Number(matched[1]) : 0;
  },

  ensureUserProfile(user) {
    if (!this.detailProfiles[user.id]) {
      this.detailProfiles[user.id] = this.getUserProfile(user);
    }
    return this.detailProfiles[user.id];
  },

  recordUserCreditLog(user, logText) {
    const profile = this.ensureUserProfile(user);
    profile.creditLogs = profile.creditLogs || [];
    profile.statusHistory = profile.statusHistory || [];
    profile.creditLogs.unshift(logText);
    profile.statusHistory.unshift(`${new Date().toLocaleString('zh-CN')} 信用分更新为 ${user.credit}`);
    AdminStore.set('user_detail_profiles', this.detailProfiles);
  },

  claimBanCase(item, actionText = '认领封禁工单') {
    if (!item) {
      return '超级管理员';
    }
    const operator = this.getCurrentOperator();
    item.processor = operator;
    item.actionHistory = item.actionHistory || [];
    if (actionText) {
      item.actionHistory.unshift(this.createBanActionLog(item, actionText, operator));
    }
    return operator;
  },

  getPath() {
    return window.location.pathname.replace(/\\/g, '/');
  },

  getPageKey() {
    if (this.getPath().endsWith('/user/list.html')) return 'list';
    if (this.getPath().endsWith('/user/detail.html')) return 'detail';
    if (this.getPath().endsWith('/user/ban.html')) return 'ban';
    if (this.getPath().endsWith('/user/ban-detail.html')) return 'ban-detail';
    if (this.getPath().endsWith('/user/credit-detail.html')) return 'credit-detail';
    return 'credit';
  },

  getSourceParam() {
    const source = new URLSearchParams(window.location.search).get('source');
    return source === 'workbench' ? 'source=workbench&' : '';
  },

  getSelectedUser() {
    const params = new URLSearchParams(window.location.search);
    const queryId = params.get('user');
    const matched = this.users.find(user => user.id === queryId);
    if (matched) {
      return matched;
    }
    return queryId ? this.createLinkedUserFromQuery(queryId, params) : this.users[0];
  },

  createLinkedUserFromQuery(userId, params) {
    const nickname = params.get('nickname') || userId;
    const phone = params.get('phone') || '-';
    const cert = params.get('cert') || '未提交';
    const skill = params.get('skill') || '未提交';
    const credit = Number(params.get('credit'));
    const hasDegree = cert.includes('学历');

    return {
      id: userId,
      nickname,
      phoneMasked: phone,
      fullPhone: phone,
      registerTime: '订单关联用户',
      lastActive: '待核验',
      realName: cert.includes('实名') ? '已实名' : '未提交',
      degree: hasDegree ? '已认证' : '未提交',
      skill,
      credit: Number.isFinite(credit) ? credit : 80,
      accountStatus: 'active',
      accountStatusLabel: '正常',
      ordersCount: 0,
      orderAmount: '待核验',
      serviceOrders: 0,
      serviceIncome: '待核验',
      publishOrders: 0,
      spendingAmount: '待核验',
      partner: '否',
      highRisk: '无',
      authSummary: cert,
      canBulkBan: true,
      assets: '钱包余额 待核验',
      assetInfo: {
        balance: '待核验',
        pendingSettlement: '待核验',
        frozenAmount: '待核验',
        withdrawnTotal: '待核验',
        recentWithdrawalStatus: '待核验',
        accountBanImpact: '未受封禁影响',
        subjectRiskImpact: '无主体风控影响'
      },
      notes: '由订单详情关联跳转生成的用户概览。'
    };
  },

  getUserMetrics(user) {
    return {
      serviceOrders: user.serviceOrders ?? user.ordersCount,
      serviceIncome: user.serviceIncome || user.orderAmount,
      publishOrders: user.publishOrders ?? 0,
      spendingAmount: user.spendingAmount || '¥0'
    };
  },

  getUserAssetInfo(user) {
    return user.assetInfo || {
      balance: (user.assets || '').replace('钱包余额 ', '') || '¥0',
      pendingSettlement: '¥0',
      frozenAmount: user.accountStatus === 'banned' ? '待复核' : '¥0',
      withdrawnTotal: '待核验',
      recentWithdrawalStatus: '暂无提现记录',
      accountBanImpact: user.accountStatus === 'banned' ? '封禁中，提现与资金动作冻结' : '未受封禁影响',
      subjectRiskImpact: user.highRisk === '无' ? '无主体风控影响' : user.highRisk
    };
  },

  getEmergencyContact(user) {
    const contacts = {
      'U-12031': { name: '沈建国', phone: '13812345678', relation: '父亲' },
      'U-11816': { name: '林雅文', phone: '13988884422', relation: '姐姐' },
      'U-10944': { name: '周明远', phone: '13755669163', relation: '父亲' },
      'U-10771': { name: '季岚', phone: '13666663353', relation: '母亲' },
      'U-10382': { name: '陈晓宁', phone: '13570002282', relation: '室友' },
      'U-9981': { name: '顾明诚', phone: '13456787715', relation: '父亲' }
    };
    return contacts[user.id] || { name: '未填写', phone: '-', relation: '' };
  },

  renderEmergencyContact(user) {
    const contact = this.getEmergencyContact(user);
    if (!contact.name || contact.name === '未填写') {
      return '未填写';
    }
    return `${contact.name} · ${contact.phone}${contact.relation ? ` · ${contact.relation}` : ''}`;
  },

  getEducationProfile(user) {
    const profiles = {
      'U-12031': { school: '北京大学', major: '护理学', enrollmentYear: '2022', degreeLevel: '本科', studyStatus: '在读' },
      'U-11816': { school: '-', major: '-', enrollmentYear: '-', degreeLevel: '-', studyStatus: '未提交' },
      'U-10944': { school: '中国传媒大学', major: '摄影', enrollmentYear: '2021', degreeLevel: '本科', studyStatus: '毕业' },
      'U-10771': { school: '北京外国语大学', major: '英语', enrollmentYear: '2023', degreeLevel: '研究生', studyStatus: '在读' },
      'U-10382': { school: '-', major: '-', enrollmentYear: '-', degreeLevel: '-', studyStatus: '未提交' },
      'U-9981': { school: '中央财经大学', major: '市场营销', enrollmentYear: '2020', degreeLevel: '本科', studyStatus: '毕业' }
    };
    const fallbackStatus = user.degree && user.degree !== '未提交' ? (user.degree.includes('毕业') ? '毕业' : '在读') : '未提交';
    const fallbackLevel = user.degree && user.degree !== '未提交'
      ? (['博士', '研究生', '本科', '专科'].find(level => user.degree.includes(level)) || user.degree)
      : '-';
    return profiles[user.id] || {
      school: user.degree && user.degree !== '未提交' ? '未配置学校' : '-',
      major: '-',
      enrollmentYear: '-',
      degreeLevel: fallbackLevel,
      studyStatus: fallbackStatus
    };
  },

  getSkillCertificates(user) {
    const certificates = {
      'U-12031': [
        { name: '陪诊服务证', issuer: '北京健康陪诊培训中心', number: 'PD-2026-0881', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2028-12-31', level: 'A', traceId: 'skill_u12031_01', status: '已通过' },
        { name: '母婴护理培训证', issuer: '北京市职业技能培训协会', number: 'MYHL-2025-0317', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2027-12-31', level: 'B', traceId: 'skill_u12031_02', status: '已通过' }
      ],
      'U-10944': [
        { name: '摄影师职业能力证', issuer: '中国摄影行业职业能力评价中心', number: 'PHOTO-2024-0192', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2028-06-30', level: 'A', traceId: 'skill_u10944_01', status: '已通过' },
        { name: '商业修图能力证', issuer: '数字影像技能认证中心', number: 'RETOUCH-2025-0441', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2028-06-30', level: 'A', traceId: 'skill_u10944_02', status: '已通过' }
      ],
      'U-10771': [
        { name: '英语陪练能力证', issuer: '语言服务能力认证平台', number: 'EN-2026-3371', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2029-03-31', level: 'A', traceId: 'skill_u10771_01', status: '已通过' }
      ],
      'U-9981': [
        { name: '大型活动志愿服务证', issuer: '校园活动服务协会', number: 'EVT-1020', provider: '技能证书 API', verifiedAt: '今天 09:42', expireAt: '2027-09-30', level: 'B', traceId: 'skill_u9981_01', status: '已通过' }
      ]
    };
    if (certificates[user.id]) {
      return certificates[user.id];
    }
    if (!user.skill || user.skill === '无技能认证') {
      return [];
    }
    return user.skill.split(' / ').filter(Boolean).map((name, index) => ({
      name: `${name}证书`,
      issuer: '技能证书 API 供应商',
      number: `CERT-${user.id.replace(/\D/g, '')}-${index + 1}`,
      provider: '技能证书 API',
      verifiedAt: '今天 09:42',
      expireAt: '按证书有效期',
      level: 'A',
      traceId: `skill_${user.id.toLowerCase().replace(/-/g, '')}_${index + 1}`,
      status: '已通过'
    }));
  },

  getCertificationRecord(user, type) {
    const now = '今天 09:42';
    const realPassed = user.realName && user.realName !== '未实名';
    const degreePassed = user.degree && !['未提交', '待核验'].includes(user.degree);
    const skillCertificates = this.getSkillCertificates(user);
    const skillPassed = skillCertificates.length > 0;
    const skillSummary = skillCertificates.map(item => item.name).join(' / ');
    const education = this.getEducationProfile(user);
    const records = {
      realname: {
        type: '实名认证',
        status: realPassed ? '已通过' : '未提交',
        summary: realPassed ? user.realName : '未提交',
        provider: '公安实名 API',
        verifiedAt: realPassed ? now : '-',
        expireAt: realPassed ? '长期有效' : '-',
        reason: realPassed ? '姓名、证件号与人脸比对通过' : '用户尚未发起实名核验',
        traceId: realPassed ? `rn_${user.id.toLowerCase().replace(/-/g, '')}` : '-',
        rows: [
          ['认证状态', realPassed ? '已通过' : '未提交'],
          ['实名结果', realPassed ? user.realName : '-'],
          ['供应商', '公安实名 API'],
          ['核验时间', realPassed ? now : '-'],
          ['失效时间', realPassed ? '长期有效' : '-'],
          ['回调流水号', realPassed ? `rn_${user.id.toLowerCase().replace(/-/g, '')}` : '-'],
          ['结果摘要', realPassed ? '姓名、证件号与人脸比对通过' : '用户尚未发起实名核验']
        ]
      },
      education: {
        type: '学历认证',
        status: degreePassed ? '已通过' : '未提交',
        summary: degreePassed ? `${education.school} · ${education.studyStatus} · ${education.degreeLevel}` : '未提交',
        provider: '学历核验 API',
        verifiedAt: degreePassed ? now : '-',
        expireAt: degreePassed ? '2027-09-01' : '-',
        reason: degreePassed ? `${education.school} ${education.major}，${education.degreeLevel}${education.studyStatus}，入学学年 ${education.enrollmentYear}` : '用户尚未发起学历核验',
        traceId: degreePassed ? `edu_${user.id.toLowerCase().replace(/-/g, '')}` : '-',
        rows: [
          ['认证状态', degreePassed ? '已通过' : '未提交'],
          ['学校', degreePassed ? education.school : '-'],
          ['专业', degreePassed ? education.major : '-'],
          ['入学学年', degreePassed ? education.enrollmentYear : '-'],
          ['学历', degreePassed ? education.degreeLevel : '-'],
          ['毕业/在读', degreePassed ? education.studyStatus : '-'],
          ['供应商', '学历核验 API'],
          ['核验时间', degreePassed ? now : '-'],
          ['失效时间', degreePassed ? '2027-09-01' : '-'],
          ['回调流水号', degreePassed ? `edu_${user.id.toLowerCase().replace(/-/g, '')}` : '-']
        ]
      },
      skill: {
        type: '技能认证',
        status: skillPassed ? '已通过' : '未提交',
        summary: skillPassed ? skillSummary : '未提交',
        provider: '技能证书 API',
        verifiedAt: skillPassed ? now : '-',
        expireAt: skillPassed ? '按证书有效期' : '-',
        reason: skillPassed ? `${skillSummary} 由 API 自动核验` : '用户尚未发起技能核验',
        traceId: skillPassed ? `skill_${user.id.toLowerCase().replace(/-/g, '')}` : '-',
        certificates: skillCertificates,
        rows: [
          ['认证状态', skillPassed ? '已通过' : '未提交'],
          ['证书名称', skillPassed ? skillSummary : '-'],
          ['供应商', '技能证书 API'],
          ['核验时间', skillPassed ? now : '-'],
          ['失效时间', skillPassed ? '按证书有效期' : '-'],
          ['回调流水号', skillPassed ? `skill_${user.id.toLowerCase().replace(/-/g, '')}` : '-'],
          ['结果摘要', skillPassed ? `${skillSummary} 由 API 自动核验` : '用户尚未发起技能核验']
        ]
      }
    };
    return records[type] || records.realname;
  },

  getCertificationRecords(user) {
    return ['realname', 'education', 'skill'].map(type => this.getCertificationRecord(user, type));
  },

  renderCertificationField(user, type) {
    const record = this.getCertificationRecord(user, type);
    const tagClass = record.status === '已通过' ? 'tag-success' : (record.status === '已失败' ? 'tag-danger' : 'tag-warning');
    const canView = record.status !== '未提交';
    return `
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px;">
        <div style="min-width:0;">
          <span class="tag ${tagClass}">${record.status}</span>
          <span style="margin-left:8px; color:var(--color-text-primary);">${record.summary}</span>
        </div>
        ${canView ? `<button class="btn btn-sm" type="button" data-action="open-cert-modal" data-user="${user.id}" data-cert-type="${type}">查看</button>` : ''}
      </div>
    `;
  },

  renderCertificationDetailRows(record) {
    if (Array.isArray(record.certificates) && record.certificates.length) {
      return `
        <div class="evidence-list">
          ${record.certificates.map(item => `
            <div class="evidence-item">
              <div class="evidence-title">${item.name}</div>
              <div class="evidence-desc">
                <div>认证状态：${item.status}</div>
                <div>发证机构：${item.issuer}</div>
                <div>证书编号：${item.number}</div>
                <div>API 供应商：${item.provider}</div>
                <div>核验时间：${item.verifiedAt}</div>
                <div>有效期：${item.expireAt}</div>
                <div>核验等级：${item.level}</div>
                <div>回调流水号：${item.traceId}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }
    return record.rows.map(([label, value]) => `
      <div class="info-pair">
        <div class="info-pair-label">${label}</div>
        <div class="info-pair-value">${value}</div>
      </div>
    `).join('');
  },

  getUserProfile(user) {
    const saved = this.detailProfiles[user.id];
    if (saved) {
      return saved;
    }

    const metrics = this.getUserMetrics(user);

    return {
      statusHistory: [
        `${user.lastActive} 最近一次后台可见活跃`,
        `${user.registerTime} 完成平台注册`
      ],
      creditLogs: [
        `当前信用分 ${user.credit}`,
        user.credit < 60 ? '已触发低信用分权限限制' : '当前未触发信用权限限制'
      ],
      relatedOrders: [
        {
          id: `OD-${user.id.replace('U-', '24')}-01`,
          role: metrics.serviceOrders >= metrics.publishOrders ? '服务者' : '发布者',
          project: user.skill === '无技能认证' ? '校园跑腿' : user.skill.split(' / ')[0],
          counterpart: metrics.serviceOrders >= metrics.publishOrders ? '发布者：平台用户' : '服务者：平台用户',
          status: user.accountStatus === 'banned' ? '已取消' : '已完成',
          amount: user.orderAmount,
          serviceNode: user.accountStatus === 'banned' ? '封禁后关联订单转人工复核' : '服务码核验与完成凭证齐全',
          settlement: user.accountStatus === 'banned' ? '资金与提现冻结待复核' : '已结算，流水可追溯',
          riskLink: user.highRisk === '无' ? '无风险命中' : user.highRisk
        }
      ],
      riskItems: [
        user.highRisk === '无' ? '当前无高风险命中记录' : user.highRisk,
        `服务订单 ${metrics.serviceOrders} 单 / 发布订单 ${metrics.publishOrders} 单`,
        `服务收益 ${metrics.serviceIncome} / 消费金额 ${metrics.spendingAmount}`
      ],
      security: [
        `最近登录活跃时间：${user.lastActive}`,
        '当前未发现异常新设备登录',
        '完整手机号查看记录以操作日志为准'
      ],
      certifications: [
        `实名：${user.realName}`,
        `学历：${user.degree}`,
        `技能：${user.skill}`,
        `紧急联系人：${this.renderEmergencyContact(user)}`
      ]
    };
  },

  getUserStatusClass(status) {
    const map = {
      active: 'tag-success',
      limited: 'tag-warning',
      banned: 'tag-danger'
    };
    return map[status] || 'tag';
  },

  getBanStatusClass(status) {
    const map = {
      appeal_pending: 'tag-warning',
      reviewing: 'tag-info',
      banned: 'tag-danger',
      resolved: 'tag-success'
    };
    return map[status] || 'tag';
  },

  getBanUser(item) {
    return this.users.find(user => user.id === item.userId) || null;
  },

  getBanAccountStatus(item) {
    const user = this.getBanUser(item);
    if (item.status === 'resolved') {
      return { value: 'active', label: '正常' };
    }
    return {
      value: user?.accountStatus || 'banned',
      label: user?.accountStatusLabel || (item.status === 'resolved' ? '正常' : '封禁中')
    };
  },

  getBanProcessStatus(item) {
    if (item.status === 'resolved') return { value: 'resolved', label: '已解封' };
    if (item.status === 'appeal_pending') return { value: 'appeal_pending', label: '申诉待处理' };
    if (item.status === 'reviewing') return { value: 'reviewing', label: '人工复核中' };
    if (item.banType === 'permanent') return { value: 'permanent', label: '永久封禁' };
    return { value: 'temporary', label: '临时封禁' };
  },

  getBanPhoneSuffix(item) {
    const phone = this.getBanUser(item)?.phoneMasked || '';
    return phone.replace(/\D/g, '').slice(-4);
  },

  getBanDateValue(value) {
    const matched = String(value || '').match(/\d{4}-\d{2}-\d{2}/);
    return matched ? matched[0] : '';
  },

  formatDateTime(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return '';
    }
    const pad = number => String(number).padStart(2, '0');
    return `${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
  },

  parseDateTime(value) {
    const raw = String(value || '').trim();
    if (!raw || /永久/.test(raw)) {
      return null;
    }
    const normalized = raw.replace(/\//g, '-');
    const date = new Date(normalized.replace(' ', 'T'));
    return Number.isNaN(date.getTime()) ? null : date;
  },

  addDaysToDateTime(value, days) {
    const date = this.parseDateTime(value) || new Date();
    date.setDate(date.getDate() + days);
    return this.formatDateTime(date);
  },

  normalizeDateTimeDisplay(value) {
    const date = this.parseDateTime(value);
    return date ? this.formatDateTime(date) : '';
  },

  normalizeBanExpireAt(item) {
    if (item.banType === 'permanent') {
      return this.permanentBanExpireAt;
    }
    if (item.status === 'resolved') {
      return this.normalizeDateTimeDisplay(item.expireAt) || this.normalizeDateTimeDisplay(item.updatedAt) || this.normalizeDateTimeDisplay(item.effectiveAt || item.submittedAt);
    }
    const normalizedExpireAt = this.normalizeDateTimeDisplay(item.expireAt);
    if (normalizedExpireAt && !/7 天后自动解封|待/.test(String(item.expireAt))) {
      return normalizedExpireAt;
    }
    return this.addDaysToDateTime(item.effectiveAt || item.submittedAt, 7);
  },

  getCreditStatusClass(status) {
    const map = {
      pending: 'tag-warning',
      reviewing: 'tag-info',
      approved: 'tag-success',
      rejected: 'tag-danger'
    };
    return map[status] || 'tag';
  },

  filterUsers() {
    return this.users.filter(user => {
      const keyword = this.state.list.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [user.id, user.nickname, user.phoneMasked].join(' ').toLowerCase().includes(keyword);
      const statusMatched = !this.state.list.status || user.accountStatus === this.state.list.status;
      const authMatched = !this.state.list.auth || user.authSummary.includes(this.state.list.auth);
      const riskMatched = !this.state.list.risk || (this.state.list.risk === 'high' ? user.highRisk !== '无' : user.highRisk === '无');
      const creditMatched = !this.state.list.creditBand || this.matchCreditBand(user.credit, this.state.list.creditBand);
      const partnerMatched = !this.state.list.partner || user.partner === this.state.list.partner;
      return keywordMatched && statusMatched && authMatched && riskMatched && creditMatched && partnerMatched;
    });
  },

  matchCreditBand(score, band) {
    if (band === 'lt60') return score < 60;
    if (band === '60to79') return score >= 60 && score < 80;
    if (band === '80plus') return score >= 80;
    return true;
  },

  filterBanCases() {
    return this.banCases.filter(item => {
      const userId = this.state.ban.userId.trim().toLowerCase();
      const phoneSuffix = this.state.ban.phoneSuffix.trim();
      const processStatus = this.state.ban.processStatus;
      const accountStatus = this.state.ban.accountStatus;
      const startDate = this.state.ban.startDate;
      const endDate = this.state.ban.endDate;
      const account = this.getBanAccountStatus(item);
      const process = this.getBanProcessStatus(item);
      const submittedDate = this.getBanDateValue(item.effectiveAt || item.submittedAt);
      const userIdMatched = !userId || item.userId.toLowerCase().includes(userId);
      const phoneMatched = !phoneSuffix || this.getBanPhoneSuffix(item).includes(phoneSuffix);
      const processMatched = !processStatus || process.value === processStatus;
      const accountMatched = !accountStatus || account.value === accountStatus;
      const startMatched = !startDate || (submittedDate && submittedDate >= startDate);
      const endMatched = !endDate || (submittedDate && submittedDate <= endDate);
      return userIdMatched && phoneMatched && processMatched && accountMatched && startMatched && endMatched;
    }).sort((a, b) => {
      const getWeight = item => ['appeal_pending', 'reviewing'].includes(item.status) ? 0 : 1;
      return getWeight(a) - getWeight(b) || b.submittedAt.localeCompare(a.submittedAt);
    });
  },

  filterCreditCases() {
    return this.creditCases.filter(item => {
      const keyword = this.state.credit.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [item.id, item.userId, item.nickname, item.orderId].join(' ').toLowerCase().includes(keyword);
      const statusMatched = !this.state.credit.status || item.appealStatus === this.state.credit.status;
      return keywordMatched && statusMatched;
    });
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

  getSelectedBanCase() {
    const queryId = new URLSearchParams(window.location.search).get('case');
    return this.banCases.find(item => item.id === queryId)
      || this.banCases.find(item => item.id === this.state.ban.selectedCaseId)
      || this.banCases[0];
  },

  getSelectedCreditCase() {
    const queryId = new URLSearchParams(window.location.search).get('case');
    return this.creditCases.find(item => item.id === queryId)
      || this.creditCases.find(item => item.id === this.state.credit.selectedCaseId)
      || this.creditCases[0];
  },

  render() {
    switch (this.getPageKey()) {
      case 'list':
        this.renderListPage();
        break;
      case 'detail':
        this.renderDetailPage();
        break;
      case 'ban':
        this.renderBanPage();
        break;
      case 'ban-detail':
        this.renderBanDetailPage();
        break;
      case 'credit-detail':
        this.renderCreditDetailPage();
        break;
      default:
        this.renderCreditPage();
    }
  },

  renderListPage() {
    const filtered = this.filterUsers();
    const pagination = this.paginate(filtered, this.state.list.page);
    this.state.list.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="userKeyword" style="min-width:220px;" value="${this.state.list.keyword}" placeholder="搜索用户ID / 昵称 / 手机后 4 位">
          <select class="select" id="userStatus">
            <option value="">全部状态</option>
            <option value="active" ${this.state.list.status === 'active' ? 'selected' : ''}>正常</option>
            <option value="limited" ${this.state.list.status === 'limited' ? 'selected' : ''}>受限</option>
            <option value="banned" ${this.state.list.status === 'banned' ? 'selected' : ''}>封禁</option>
          </select>
          <select class="select" id="userAuth">
            <option value="">全部认证</option>
            <option value="实名" ${this.state.list.auth === '实名' ? 'selected' : ''}>实名</option>
            <option value="学历" ${this.state.list.auth === '学历' ? 'selected' : ''}>学历</option>
            <option value="技能" ${this.state.list.auth === '技能' ? 'selected' : ''}>技能</option>
          </select>
          <select class="select" id="userCreditBand">
            <option value="">全部信用分</option>
            <option value="lt60" ${this.state.list.creditBand === 'lt60' ? 'selected' : ''}>< 60</option>
            <option value="60to79" ${this.state.list.creditBand === '60to79' ? 'selected' : ''}>60 - 79</option>
            <option value="80plus" ${this.state.list.creditBand === '80plus' ? 'selected' : ''}>>= 80</option>
          </select>
          <select class="select" id="userRisk">
            <option value="">全部风险</option>
            <option value="high" ${this.state.list.risk === 'high' ? 'selected' : ''}>有风险标记</option>
            <option value="none" ${this.state.list.risk === 'none' ? 'selected' : ''}>无风险标记</option>
          </select>
          <select class="select" id="userPartner">
            <option value="">全部合伙人</option>
            <option value="是" ${this.state.list.partner === '是' ? 'selected' : ''}>是合伙人</option>
            <option value="否" ${this.state.list.partner === '否' ? 'selected' : ''}>非合伙人</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-users">搜索</button>
          <button class="btn" type="button" data-action="reset-users">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-users">导出用户清单</button>
          </div>
        </div>
      </div>

      <div class="bulk-bar ${this.state.list.selectedIds.length ? 'active' : ''}">
        <div>已选择 <strong>${this.state.list.selectedIds.length}</strong> 个用户。存在余额、进行中订单或未结纠纷的用户禁止批量封禁，需要拆单处理。</div>
        <div class="page-actions">
          <button class="btn btn-sm" type="button" data-action="bulk-notify-users">批量通知</button>
          <button class="btn btn-sm btn-danger" type="button" data-action="bulk-ban-users">批量封禁</button>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th class="checkbox-cell"><input type="checkbox" data-action="toggle-all-users" ${pagination.items.length && pagination.items.every(item => this.state.list.selectedIds.includes(item.id)) ? 'checked' : ''}></th>
              <th>用户</th>
              <th>认证状态</th>
              <th>信用分</th>
              <th>账号状态</th>
              <th>是否合伙人</th>
              <th>订单数据</th>
              <th>风险标记</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(user => {
              const metrics = this.getUserMetrics(user);
              return `
              <tr>
                <td class="checkbox-cell"><input type="checkbox" data-user-select="${user.id}" ${this.state.list.selectedIds.includes(user.id) ? 'checked' : ''}></td>
                <td>
                  <div style="font-weight:600; color:var(--color-text-primary);">${user.nickname}</div>
                  <div class="table-note">${user.id} · ${user.phoneMasked}</div>
                  <div class="table-note">注册 ${user.registerTime} · 最近活跃 ${user.lastActive}</div>
                </td>
                <td>${user.authSummary}<div class="table-note">${user.skill}</div></td>
                <td><strong>${user.credit}</strong><div class="table-note">${user.assets}</div></td>
                <td><span class="tag ${this.getUserStatusClass(user.accountStatus)}">${user.accountStatusLabel}</span></td>
                <td><span class="tag ${user.partner === '是' ? 'tag-success' : 'tag'}">${user.partner}</span></td>
                <td>
                  服务 ${metrics.serviceOrders} 单 / 发布 ${metrics.publishOrders} 单
                  <div class="table-note">收益 ${metrics.serviceIncome} / 消费 ${metrics.spendingAmount}</div>
                </td>
                <td>${user.highRisk}</td>
                <td class="action-cell">
                  <button class="btn btn-sm" type="button" data-route="user/detail.html?${this.getSourceParam()}user=${user.id}">详情</button>
                  <button class="btn btn-sm" type="button" data-action="open-user-modal" data-mode="notify" data-user="${user.id}">通知</button>
                  <button class="btn btn-sm" type="button" data-action="open-user-modal" data-mode="ban" data-user="${user.id}">${user.accountStatus === 'banned' ? '解除封禁' : '封禁'}</button>
                  <button class="btn btn-sm" type="button" data-action="open-user-modal" data-mode="credit" data-user="${user.id}">调分</button>
                </td>
              </tr>
            `;
            }).join('')}
          </tbody>
        </table>
      </div>

      ${AdminCore.renderPagination(`共 ${filtered.length} 位用户`, pagination.currentPage, pagination.totalPages)}
      ${this.renderUserActionModal()}
    `;
  },

  renderDetailPage() {
    const user = this.getSelectedUser();
    const profile = this.getUserProfile(user);
    const metrics = this.getUserMetrics(user);
    const assetInfo = this.getUserAssetInfo(user);
    const phoneText = this.state.detail.viewPhone ? user.fullPhone : user.phoneMasked;
    const fromWorkbench = new URLSearchParams(window.location.search).get('source') === 'workbench';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">${fromWorkbench ? '来自待办工作台 · 用户风险处理' : '用户详情页 · 基础信息 / 认证信息 / 信用分 / 风控安全'}</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="user/list.html${fromWorkbench ? '?source=workbench' : ''}">返回用户列表</button>
            <button class="btn" type="button" data-action="view-full-phone">查看完整手机号</button>
            <button class="btn" type="button" data-action="open-user-modal" data-mode="notify" data-user="${user.id}">发送通知</button>
            <button class="btn" type="button" data-action="open-user-modal" data-mode="ban" data-user="${user.id}">${user.accountStatus === 'banned' ? '解除封禁' : '封禁账号'}</button>
            <button class="btn btn-primary" type="button" data-action="open-user-modal" data-mode="credit" data-user="${user.id}">调整信用分</button>
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div>
                <div class="card-title">${user.nickname}</div>
                <div class="table-note">${user.id} · ${user.realName} · 最近活跃 ${user.lastActive}</div>
              </div>
              <span class="tag ${this.getUserStatusClass(user.accountStatus)}">${user.accountStatusLabel}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">信用分</div><div class="summary-item-value">${user.credit}</div></div>
              <div class="summary-item"><div class="summary-item-label">服务订单</div><div class="summary-item-value">${metrics.serviceOrders}</div></div>
              <div class="summary-item"><div class="summary-item-label">服务收益</div><div class="summary-item-value">${metrics.serviceIncome}</div></div>
              <div class="summary-item"><div class="summary-item-label">发布订单</div><div class="summary-item-value">${metrics.publishOrders}</div></div>
              <div class="summary-item"><div class="summary-item-label">消费金额</div><div class="summary-item-value">${metrics.spendingAmount}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="card-header">
              <div class="card-title">资产信息</div>
              <span class="tag ${assetInfo.recentWithdrawalStatus.includes('已到账') || assetInfo.recentWithdrawalStatus.includes('无提现') ? 'tag-success' : 'tag-warning'}">${assetInfo.recentWithdrawalStatus}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">当前余额</div><div class="summary-item-value">${assetInfo.balance}</div></div>
              <div class="summary-item"><div class="summary-item-label">待结算金额</div><div class="summary-item-value">${assetInfo.pendingSettlement}</div></div>
              <div class="summary-item"><div class="summary-item-label">冻结金额</div><div class="summary-item-value">${assetInfo.frozenAmount}</div></div>
              <div class="summary-item"><div class="summary-item-label">历史提现总额</div><div class="summary-item-value">${assetInfo.withdrawnTotal}</div></div>
              <div class="summary-item"><div class="summary-item-label">最近提现状态</div><div class="summary-item-value">${assetInfo.recentWithdrawalStatus}</div></div>
            </div>
            <div class="evidence-list" style="margin-top:14px;">
              <div class="evidence-item"><div class="evidence-title">封禁影响</div><div class="evidence-desc">${assetInfo.accountBanImpact}</div></div>
              <div class="evidence-item"><div class="evidence-title">主体风控影响</div><div class="evidence-desc">${assetInfo.subjectRiskImpact}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">基础与认证信息</div>
            <div class="info-grid">
              <div class="info-pair"><div class="info-pair-label">手机号</div><div class="info-pair-value">${phoneText}</div></div>
              <div class="info-pair"><div class="info-pair-label">实名认证</div><div class="info-pair-value">${this.renderCertificationField(user, 'realname')}</div></div>
              <div class="info-pair"><div class="info-pair-label">合伙人状态</div><div class="info-pair-value">${user.partner}</div></div>
              <div class="info-pair"><div class="info-pair-label">注册时间</div><div class="info-pair-value">${user.registerTime}</div></div>
              <div class="info-pair"><div class="info-pair-label">学历认证</div><div class="info-pair-value">${this.renderCertificationField(user, 'education')}</div></div>
              <div class="info-pair"><div class="info-pair-label">技能认证</div><div class="info-pair-value">${this.renderCertificationField(user, 'skill')}</div></div>
              <div class="info-pair"><div class="info-pair-label">紧急联系人</div><div class="info-pair-value">${this.renderEmergencyContact(user)}</div></div>
              <div class="info-pair"><div class="info-pair-label">内部备注</div><div class="info-pair-value">${user.notes}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">信用分与账号状态历史</div>
            <div class="split-layout">
              <div class="timeline-panel">
                <div style="font-weight:600; margin-bottom:10px;">状态变动</div>
                <div class="timeline">
                  ${profile.statusHistory.map(item => `
                    <div class="timeline-item">
                      <div class="timeline-dot"></div>
                      <div class="timeline-content">${item}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="timeline-panel">
                <div style="font-weight:600; margin-bottom:10px;">信用分流水</div>
                <div class="bullet-list">
                  ${profile.creditLogs.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta">系统自动记录</div></div>`).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">关联订单记录</div>
            ${profile.relatedOrders.length ? `
              <div class="table-container" style="box-shadow:none; border:1px solid var(--color-border-light);">
                <table class="table">
                  <thead>
                    <tr>
                      <th>订单ID</th>
                      <th>身份</th>
                      <th>项目</th>
                      <th>对手方</th>
                      <th>状态</th>
                      <th>金额</th>
                      <th>订单联动</th>
                      <th class="action-cell">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${profile.relatedOrders.map(order => `
                      <tr>
                        <td>${order.id}</td>
                        <td>${order.role}</td>
                        <td>${order.project}</td>
                        <td>${order.counterpart}</td>
                        <td>${order.status}</td>
                        <td>${order.amount}</td>
                        <td>
                          <div>${order.serviceNode}</div>
                          <div class="table-note">${order.settlement}</div>
                          <div class="table-note">${order.riskLink}</div>
                        </td>
                        <td class="action-cell"><button class="btn btn-sm" type="button" data-route="order/detail.html?${this.getSourceParam()}order=${order.id}">查看订单</button></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : '<div class="empty-note">当前用户暂无可直接跳转的关联订单记录。</div>'}
          </div>
        </div>

        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">风控与登录安全</div></div>
            <div class="evidence-list">
              ${profile.riskItems.map(item => `<div class="evidence-item"><div class="evidence-title">风险标记</div><div class="evidence-desc">${item}</div></div>`).join('')}
              ${profile.security.map(item => `<div class="evidence-item"><div class="evidence-title">安全日志</div><div class="evidence-desc">${item}</div></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
      ${this.renderUserActionModal()}
    `;
  },

  renderBanPage() {
    const filtered = this.filterBanCases();
    const pagination = this.paginate(filtered, this.state.ban.page);
    this.state.ban.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="banUserId" value="${this.state.ban.userId}" placeholder="用户ID" style="min-width:140px;">
          <input class="input" id="banPhoneSuffix" value="${this.state.ban.phoneSuffix}" placeholder="手机号后4位" style="min-width:140px;">
          <select class="select" id="banProcessStatus">
            <option value="">全部封禁处理状态</option>
            <option value="temporary" ${this.state.ban.processStatus === 'temporary' ? 'selected' : ''}>临时封禁</option>
            <option value="permanent" ${this.state.ban.processStatus === 'permanent' ? 'selected' : ''}>永久封禁</option>
            <option value="appeal_pending" ${this.state.ban.processStatus === 'appeal_pending' ? 'selected' : ''}>申诉待处理</option>
            <option value="reviewing" ${this.state.ban.processStatus === 'reviewing' ? 'selected' : ''}>人工复核中</option>
            <option value="resolved" ${this.state.ban.processStatus === 'resolved' ? 'selected' : ''}>已解封</option>
          </select>
          <select class="select" id="banAccountStatus">
            <option value="">全部账号状态</option>
            <option value="active" ${this.state.ban.accountStatus === 'active' ? 'selected' : ''}>正常</option>
            <option value="limited" ${this.state.ban.accountStatus === 'limited' ? 'selected' : ''}>受限</option>
            <option value="banned" ${this.state.ban.accountStatus === 'banned' ? 'selected' : ''}>封禁中</option>
          </select>
          <input class="input" id="banStartDate" type="date" value="${this.state.ban.startDate}" style="min-width:145px;">
          <input class="input" id="banEndDate" type="date" value="${this.state.ban.endDate}" style="min-width:145px;">
          <button class="btn btn-primary" type="button" data-action="search-ban">搜索</button>
          <button class="btn" type="button" data-action="reset-ban">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="user/list.html">返回用户列表</button>
            <button class="btn" type="button" data-action="export-ban-cases">导出封禁/申诉记录</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>用户ID+昵称</th>
              <th>账号状态</th>
              <th>封禁处理</th>
              <th>封禁原因</th>
              <th>生效时间</th>
              <th>到期时间</th>
              <th>处理人</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(item => {
              const account = this.getBanAccountStatus(item);
              const process = this.getBanProcessStatus(item);
              return `
                <tr>
                  <td>${item.userId}<div class="table-note">${item.nickname}</div></td>
                  <td><span class="tag ${this.getUserStatusClass(account.value)}">${account.label}</span></td>
                  <td><span class="tag ${this.getBanStatusClass(item.status)}">${process.label}</span><div class="table-note">${item.id}</div></td>
                  <td>${item.reason}</td>
                  <td>${item.effectiveAt || item.submittedAt}</td>
                  <td>${item.expireAt}</td>
                  <td>${item.processor || '未分配'}</td>
                  <td class="action-cell">
                    <button class="btn btn-sm" type="button" data-route="user/ban-detail.html?case=${item.id}">查看详情</button>
                    ${this.renderBanActionButtons(item, 'btn-sm')}
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条封禁记录`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderBanDetailPage() {
    const selected = this.getSelectedBanCase();
    const punishmentHistory = selected.punishmentHistory || selected.actionHistory || [];
    const riskEvents = selected.riskEvents || [selected.risk || '暂无关联风控事件'];
    const appealMaterials = selected.appealMaterials && selected.appealMaterials.length ? selected.appealMaterials : ['暂未提交图片或附件材料'];
    const process = this.getBanProcessStatus(selected);
    const canClaim = process.value === 'appeal_pending';
    const canKeep = process.value === 'reviewing';
    const canExtendTemporary = process.value === 'temporary';
    const canUnban = ['reviewing', 'temporary', 'permanent'].includes(process.value);
    const canReban = process.value === 'resolved';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">封禁详情页 · 处理人 / 申诉说明 / 申诉材料 / 关联记录 / 处置时间轴</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="user/ban.html">返回封禁列表</button>
            ${this.renderBanActionButtons(selected)}
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div class="card-title">${selected.id}</div>
              <span class="tag ${this.getBanStatusClass(selected.status)}">${process.label}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">用户</div><div class="summary-item-value">${selected.nickname}</div></div>
              <div class="summary-item"><div class="summary-item-label">封禁类型</div><div class="summary-item-value">${selected.banTypeLabel || selected.duration}</div></div>
              <div class="summary-item"><div class="summary-item-label">到期时间</div><div class="summary-item-value">${selected.expireAt}</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">处理信息</div></div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">处理人</div><div class="summary-item-value">${selected.processor || '未分配'}</div></div>
              <div class="summary-item"><div class="summary-item-label">处理状态</div><div class="summary-item-value">${process.label}</div></div>
              <div class="summary-item"><div class="summary-item-label">申诉提交时间</div><div class="summary-item-value">${selected.submittedAt}</div></div>
            </div>
            <div class="section-hint" style="margin-top:12px;">${canClaim ? '' : (canKeep ? '' : (canExtendTemporary ? '' : (canReban ? '' : '')))}</div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">封禁处置说明</div></div>
            <div class="evidence-list">
              <div class="evidence-item"><div class="evidence-title">封禁原因</div><div class="evidence-desc">${selected.reason}</div></div>
              <div class="evidence-item"><div class="evidence-title">内部备注</div><div class="evidence-desc">${selected.internalNote || '暂无内部备注'}</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">用户申诉说明</div></div>
            <div class="evidence-list">
              <div class="evidence-item"><div class="evidence-title">申诉正文</div><div class="evidence-desc">${selected.appealNote || '暂未提交申诉'}</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">用户申诉材料</div></div>
            ${this.renderAppealMaterials(appealMaterials)}
          </div>
          <div class="split-layout">
            ${this.renderRelatedRecordModule('关联订单', selected.relatedOrders, 'order')}
            ${this.renderRelatedRecordModule('关联纠纷', selected.relatedDisputes, 'dispute')}
          </div>
          ${this.renderRelatedRecordModule('信用申诉', selected.relatedCreditAppeals, 'credit')}
          <div class="section-card">
            <div class="detail-group-title">历史触发记录与关联风控事件</div>
            <div class="split-layout">
              <div class="timeline-panel">
                <div style="font-weight:600; margin-bottom:10px;">历史触发记录</div>
                <div class="bullet-list">
                  ${punishmentHistory.length ? punishmentHistory.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta">历史记录</div></div>`).join('') : '<div class="empty-note">暂无本次处罚前的历史触发记录</div>'}
                </div>
              </div>
              <div class="timeline-panel">
                <div style="font-weight:600; margin-bottom:10px;">风控事件</div>
                <div class="bullet-list">
                  ${riskEvents.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta">风控证据</div></div>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">处置时间轴</div></div>
            <div class="bullet-list">
              ${selected.actionHistory.map(item => `<div class="bullet-item"><div>${item}</div><div class="bullet-meta"></div></div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderCreditPage() {
    const filtered = this.filterCreditCases();
    const pagination = this.paginate(filtered, this.state.credit.page);
    this.state.credit.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="creditKeyword" value="${this.state.credit.keyword}" placeholder="搜索申诉单 / 用户ID / 订单ID" style="min-width:220px;">
          <select class="select" id="creditStatus">
            <option value="">全部状态</option>
            <option value="pending" ${this.state.credit.status === 'pending' ? 'selected' : ''}>申诉待处理</option>
            <option value="reviewing" ${this.state.credit.status === 'reviewing' ? 'selected' : ''}>人工复核中</option>
            <option value="approved" ${this.state.credit.status === 'approved' ? 'selected' : ''}>申诉通过</option>
            <option value="rejected" ${this.state.credit.status === 'rejected' ? 'selected' : ''}>申诉驳回</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-credit">搜索</button>
          <button class="btn" type="button" data-action="reset-credit">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-credit">导出信用流水</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>申诉单</th>
              <th>用户</th>
              <th>当前信用分</th>
              <th>触发事件</th>
              <th>限制范围</th>
              <th>状态</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(item => `
              <tr>
                <td>${item.id}<div class="table-note">${item.orderId}</div></td>
                <td>${item.nickname}<div class="table-note">${item.userId}</div></td>
                <td><strong>${item.currentScore}</strong></td>
                <td>${item.event}</td>
                <td>${item.restriction}</td>
                <td><span class="tag ${this.getCreditStatusClass(item.appealStatus)}">${item.appealStatusLabel}</span></td>
                <td class="action-cell">
                  <button class="btn btn-sm" type="button" data-route="user/credit-detail.html?case=${item.id}">查看详情</button>
                  ${this.renderCreditActionButtons(item, 'btn-sm')}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条信用申诉`, pagination.currentPage, pagination.totalPages)}
      ${this.renderUserActionModal()}
    `;
  },

  renderCreditDetailPage() {
    const selected = this.getSelectedCreditCase();
    if (!selected) {
      this.root.innerHTML = `
        <div class="empty-state">
          <div class="empty-title">未找到信用申诉单</div>
          <div class="empty-desc">当前申诉单不存在或已被筛选条件移除，请返回列表重新选择。</div>
          <button class="btn btn-primary" type="button" data-route="user/credit.html">返回信用列表</button>
        </div>
      `;
      return;
    }
    const appealMaterials = selected.appealMaterials && selected.appealMaterials.length ? selected.appealMaterials : ['暂未提交图片或附件材料'];

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">信用申诉详情页 · 申诉说明 / 申诉材料 / 趋势回看 / 处理记录</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="user/credit.html">返回信用列表</button>
            ${this.renderCreditActionButtons(selected)}
          </div>
        </div>
      </div>

      <div class="panel-stack record-detail-full">
        <div class="section-card detail-hero-card">
          <div class="card-header">
            <div class="card-title">${selected.id}</div>
            <span class="tag ${this.getCreditStatusClass(selected.appealStatus)}">${selected.appealStatusLabel}</span>
          </div>
          <div class="summary-grid">
            <div class="summary-item"><div class="summary-item-label">用户</div><div class="summary-item-value">${selected.nickname}<div class="table-note">${selected.userId}</div></div></div>
            <div class="summary-item"><div class="summary-item-label">当前信用分</div><div class="summary-item-value">${selected.currentScore}</div></div>
            <div class="summary-item"><div class="summary-item-label">触发事件</div><div class="summary-item-value">${selected.event}</div></div>
            <div class="summary-item"><div class="summary-item-label">关联订单</div><div class="summary-item-value"><button class="btn btn-sm" type="button" data-route="order/detail.html?order=${selected.orderId}">${selected.orderId}</button></div></div>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">申诉说明</div></div>
          <div class="evidence-list">
            <div class="evidence-item">
              <div class="evidence-title">文字说明</div>
              <div class="evidence-desc">${AdminCore.escapeHTML(selected.evidence || '暂未填写申诉说明')}</div>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">申诉材料</div></div>
          ${this.renderAppealMaterials(appealMaterials)}
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">近 30 天趋势</div></div>
          ${this.renderCreditTrendChart(selected.trend)}
        </div>

        <div class="section-card">
          <div class="card-header"><div class="card-title">限制范围与处理记录</div></div>
          <div class="evidence-list">
            <div class="evidence-item"><div class="evidence-title">限制范围</div><div class="evidence-desc">${AdminCore.escapeHTML(selected.restriction || '-')}</div></div>
            <div class="evidence-item"><div class="evidence-title">处理记录</div><div class="evidence-desc">${(selected.history && selected.history.length ? selected.history : ['暂无人工处理记录']).map(item => `<div>${AdminCore.escapeHTML(item)}</div>`).join('')}</div></div>
          </div>
        </div>
      </div>
      ${this.renderUserActionModal()}
    `;
  },

  renderUserActionModal() {
    if (!this.state.actionModal.show) {
      return '';
    }

    const user = this.users.find(item => item.id === this.state.actionModal.userId) || this.users[0];
    const mode = this.state.actionModal.mode;
    const isBulkBan = mode === 'bulk-ban';
    const isCert = mode === 'cert';
    const certRecord = isCert ? this.getCertificationRecord(user, this.state.actionModal.certType) : null;
    const titleMap = {
      ban: user.accountStatus === 'banned' ? '解除封禁' : '封禁账号',
      'bulk-ban': '批量封禁',
      credit: '手动调整信用分',
      notify: '发送站内通知',
      cert: certRecord ? `${certRecord.type}详情` : '认证详情'
    };

    return `
      <div class="modal-backdrop active" id="userActionBackdrop">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">${titleMap[mode]}</div>
            <div class="modal-close" data-action="close-user-modal">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              ${isBulkBan ? `
                <div style="font-weight:600; margin-bottom:4px;">已选择 ${this.state.list.selectedIds.length} 个用户</div>
                <div class="section-hint">批量封禁仅支持临时封禁。系统会逐个生成封禁记录、站内通知和操作日志。</div>
              ` : `
                <div style="font-weight:600; margin-bottom:4px;">${user.nickname} · ${user.id}</div>
                <div class="section-hint">当前状态：${user.accountStatusLabel}；当前信用分：${user.credit}；风险提示：${user.highRisk}</div>
              `}
            </div>
            ${isCert ? `
              ${Array.isArray(certRecord.certificates) && certRecord.certificates.length
                ? this.renderCertificationDetailRows(certRecord)
                : `<div class="info-grid">${this.renderCertificationDetailRows(certRecord)}</div>`}
            ` : `
              ${mode === 'credit' ? `
                <div class="form-group">
                  <label class="form-label required">调整分值（±20）</label>
                  <input class="input" id="userActionAmount" type="number" min="-20" max="20" placeholder="例如 -6 或 +8" style="width:100%;">
                </div>
              ` : ''}
              ${(mode === 'ban' && user.accountStatus !== 'banned') || isBulkBan ? `
                <div class="form-group">
                  <label class="form-label required">封禁类型</label>
                  <select class="select" id="userBanType" style="width:100%;" ${isBulkBan ? 'disabled' : ''}>
                    <option value="temporary">临时封禁</option>
                    <option value="permanent">永久封禁</option>
                  </select>
                </div>
              ` : ''}
              <div class="form-group">
                <label class="form-label required">${mode === 'notify' ? '通知内容' : '处理原因'}</label>
                <textarea class="input" id="userActionReason" style="width:100%; height:auto; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="请填写本次操作原因，系统会同步写入操作日志"></textarea>
              </div>
            `}
          </div>
          <div class="modal-footer">
            ${isCert ? `
              <button class="btn btn-primary" type="button" data-action="close-user-modal">关闭</button>
            ` : `
              <button class="btn" type="button" data-action="close-user-modal">取消</button>
              <button class="btn btn-primary" type="button" data-action="submit-user-modal">确认提交</button>
            `}
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
      const target = event.target.closest('[data-action], [data-user-select], [data-pagination-page]');
      if (!target) {
        return;
      }

      if (target.disabled || target.getAttribute('aria-disabled') === 'true' || target.classList.contains('disabled')) {
        event.preventDefault();
        return;
      }

      if (target.dataset.userSelect) {
        this.toggleUserSelection(target.dataset.userSelect, target.checked);
        return;
      }

      if (target.dataset.paginationPage) {
        if (target.classList.contains('disabled') || target.classList.contains('active')) {
          return;
        }
        const nextPage = Number(target.dataset.paginationPage);
        const pageKey = this.getPageKey();
        this.state[pageKey].page = nextPage;
        this.render();
        return;
      }

      const action = target.dataset.action;
      switch (action) {
        case 'search-users':
          this.state.list.keyword = document.getElementById('userKeyword').value.trim();
          this.state.list.status = document.getElementById('userStatus').value;
          this.state.list.auth = document.getElementById('userAuth').value;
          this.state.list.creditBand = document.getElementById('userCreditBand').value;
          this.state.list.risk = document.getElementById('userRisk').value;
          this.state.list.partner = document.getElementById('userPartner').value;
          this.state.list.page = 1;
          this.render();
          AdminUI.showMessage('用户列表已刷新筛选结果', 'success');
          break;
        case 'reset-users':
          this.state.list = { keyword: '', status: '', auth: '', risk: '', creditBand: '', partner: '', page: 1, selectedIds: [] };
          this.render();
          AdminUI.showMessage('用户筛选条件已重置', 'success');
          break;
        case 'toggle-all-users':
          this.toggleAllUsers(target.checked);
          break;
        case 'bulk-notify-users':
          AdminUI.showMessage(`已向 ${this.state.list.selectedIds.length} 位用户发送站内通知`, 'success');
          break;
        case 'bulk-ban-users':
          this.bulkBanUsers();
          break;
        case 'export-users':
          AdminUI.showMessage('用户清单导出任务已创建', 'success');
          break;
        case 'open-user-modal':
          this.state.actionModal.show = true;
          this.state.actionModal.mode = target.dataset.mode;
          this.state.actionModal.userId = target.dataset.user;
          this.state.actionModal.certType = '';
          this.render();
          break;
        case 'open-cert-modal':
          this.state.actionModal.show = true;
          this.state.actionModal.mode = 'cert';
          this.state.actionModal.userId = target.dataset.user;
          this.state.actionModal.certType = target.dataset.certType || 'realname';
          this.render();
          break;
        case 'close-user-modal':
          this.state.actionModal.show = false;
          this.state.actionModal.certType = '';
          this.render();
          break;
        case 'submit-user-modal':
          this.submitUserModal();
          break;
        case 'view-full-phone':
          this.state.detail.viewPhone = true;
          this.render();
          AdminUI.showMessage('已获取查看权限，操作已记录日志', 'success');
          break;
        case 'search-ban':
          this.state.ban.userId = document.getElementById('banUserId').value.trim();
          this.state.ban.phoneSuffix = document.getElementById('banPhoneSuffix').value.trim();
          this.state.ban.processStatus = document.getElementById('banProcessStatus').value;
          this.state.ban.accountStatus = document.getElementById('banAccountStatus').value;
          this.state.ban.startDate = document.getElementById('banStartDate').value;
          this.state.ban.endDate = document.getElementById('banEndDate').value;
          this.state.ban.page = 1;
          this.render();
          break;
        case 'reset-ban':
          this.state.ban.userId = '';
          this.state.ban.phoneSuffix = '';
          this.state.ban.processStatus = '';
          this.state.ban.accountStatus = '';
          this.state.ban.startDate = '';
          this.state.ban.endDate = '';
          this.state.ban.page = 1;
          this.render();
          break;
        case 'export-ban-cases':
          AdminUI.showMessage('封禁/申诉记录导出任务已创建', 'success');
          break;
        case 'select-ban-case':
          this.state.ban.selectedCaseId = target.dataset.id;
          AdminCore.routeTo(`user/ban-detail.html?case=${target.dataset.id}`);
          break;
        case 'ban-approve':
          this.resolveBanCase('approved', target.dataset.id || '');
          break;
        case 'ban-claim':
          this.claimSelectedBanCase(target.dataset.id || '');
          break;
        case 'ban-keep':
          this.resolveBanCase('keep', target.dataset.id || '');
          break;
        case 'ban-extend':
          this.extendTemporaryBan(target.dataset.id || '');
          break;
        case 'ban-reban':
          this.rebanSelectedCase(target.dataset.id || '');
          break;
        case 'search-credit':
          this.state.credit.keyword = document.getElementById('creditKeyword').value.trim();
          this.state.credit.status = document.getElementById('creditStatus').value;
          this.state.credit.page = 1;
          this.render();
          break;
        case 'reset-credit':
          this.state.credit.keyword = '';
          this.state.credit.status = '';
          this.state.credit.page = 1;
          this.render();
          break;
        case 'select-credit-case':
          this.state.credit.selectedCaseId = target.dataset.id;
          AdminCore.routeTo(`user/credit-detail.html?case=${target.dataset.id}`);
          break;
        case 'credit-approve':
          this.resolveCreditCase(target.dataset.id, 'approved');
          break;
        case 'credit-reviewing':
          this.resolveCreditCase(target.dataset.id, 'reviewing');
          break;
        case 'credit-reject':
          this.resolveCreditCase(target.dataset.id, 'rejected');
          break;
        case 'export-credit':
          AdminUI.showMessage('信用流水导出任务已创建', 'success');
          break;
        default:
          break;
      }
    });

    this.bound = true;
  },

  toggleUserSelection(id, checked) {
    const selected = new Set(this.state.list.selectedIds);
    if (checked) {
      selected.add(id);
    } else {
      selected.delete(id);
    }
    this.state.list.selectedIds = Array.from(selected);
    this.render();
  },

  toggleAllUsers(checked) {
    const visibleIds = this.paginate(this.filterUsers(), this.state.list.page).items.map(item => item.id);
    const selected = new Set(this.state.list.selectedIds);
    visibleIds.forEach(id => {
      if (checked) selected.add(id);
      else selected.delete(id);
    });
    this.state.list.selectedIds = Array.from(selected);
    this.render();
  },

  createBanCase(user, options = {}) {
    const banType = options.banType || 'temporary';
    const isPermanent = banType === 'permanent';
    const reason = options.reason || '后台人工封禁';
    const now = new Date().toLocaleString('zh-CN');
    const prefix = options.idPrefix || 'BAN';
    const operator = options.processor || this.getCurrentOperator();
    const actionLog = `${now} 操作人：${operator}；动作：管理员手动封禁，原因：${reason}`;

    return {
      id: `${prefix}-${Date.now()}-${user.id.replace(/\D/g, '').slice(-4)}`,
      userId: user.id,
      nickname: user.nickname,
      reason,
      banType,
      banTypeLabel: isPermanent ? '永久封禁' : '临时封禁',
      banSource: 'manual',
      createdBy: operator,
      effectiveAt: now,
      processor: operator,
      duration: isPermanent ? '永久封禁' : '7 天临时封禁',
      status: 'banned',
      statusLabel: '封禁中',
      submittedAt: now,
      expireAt: isPermanent ? this.permanentBanExpireAt : this.addDaysToDateTime(now, 7),
      risk: user.highRisk,
      internalNote: options.internalNote || reason,
      punishmentHistory: [],
      riskEvents: [user.highRisk === '无' ? '暂无高风险命中，人工处置留痕' : user.highRisk],
      relatedRisks: [user.assets, '进行中订单与未结纠纷以订单系统实时校验为准'],
      appealNote: '暂未提交申诉',
      appealMaterials: [],
      relatedOrder: options.relatedOrder || '待补充',
      relatedOrders: this.normalizeRelatedRecords(options.relatedOrders, options.relatedOrder || ''),
      relatedDisputes: this.normalizeRelatedRecords(options.relatedDisputes),
      relatedCreditAppeals: this.normalizeRelatedRecords(options.relatedCreditAppeals),
      actionHistory: [actionLog]
    };
  },

  bulkBanUsers() {
    if (!this.state.list.selectedIds.length) {
      AdminUI.showMessage('请先选择用户', 'warning');
      return;
    }

    const blocked = this.users.filter(user => this.state.list.selectedIds.includes(user.id) && !user.canBulkBan);
    if (blocked.length) {
      AdminUI.showMessage('部分用户存在余额、进行中订单或未结纠纷，不能批量封禁，请拆单处理', 'warning');
      return;
    }

    this.state.actionModal.show = true;
    this.state.actionModal.mode = 'bulk-ban';
    this.state.actionModal.userId = '';
    this.render();
  },

  applyBulkBanUsers(reason) {
    const selectedUsers = this.users.filter(user => this.state.list.selectedIds.includes(user.id) && user.accountStatus !== 'banned');
    if (!selectedUsers.length) {
      AdminUI.showMessage('所选用户已处于封禁中，无需重复封禁', 'warning');
      return;
    }

    this.users.forEach(user => {
      if (selectedUsers.some(selected => selected.id === user.id)) {
        user.accountStatus = 'banned';
        user.accountStatusLabel = '封禁中';
      }
    });
    selectedUsers.forEach(user => {
      this.banCases.unshift(this.createBanCase(user, {
        banType: 'temporary',
        reason,
        operatorLabel: '后台批量封禁',
        internalNote: `批量封禁原因：${reason}`,
        idPrefix: 'BAN-B'
      }));
    });
    this.state.list.selectedIds = [];
    AdminStore.set('user_items', this.users);
    AdminStore.set('user_ban_cases', this.banCases);
    this.state.actionModal.show = false;
    this.render();
    AdminUI.showMessage(`已完成 ${selectedUsers.length} 位用户的批量封禁，并逐条生成封禁记录`, 'success');
  },

  submitUserModal() {
    const user = this.users.find(item => item.id === this.state.actionModal.userId);
    if (!user) {
      return;
    }

    const reason = document.getElementById('userActionReason').value.trim();
    if (!reason) {
      AdminUI.showMessage('请填写处理原因或通知内容', 'error');
      return;
    }

    if (this.state.actionModal.mode === 'notify') {
      this.state.actionModal.show = false;
      this.render();
      AdminUI.showMessage(`通知已发送给 ${user.nickname}`, 'success');
      return;
    }

    if (this.state.actionModal.mode === 'bulk-ban') {
      this.applyBulkBanUsers(reason);
      return;
    }

    if (this.state.actionModal.mode === 'ban') {
      const wasBanned = user.accountStatus === 'banned';
      user.accountStatus = wasBanned ? 'active' : 'banned';
      user.accountStatusLabel = user.accountStatus === 'banned' ? '封禁中' : '正常';
      if (user.accountStatus === 'banned') {
        const banTypeInput = document.getElementById('userBanType');
        this.banCases.unshift(this.createBanCase(user, {
          banType: banTypeInput ? banTypeInput.value : 'temporary',
          reason,
          internalNote: `单用户封禁原因：${reason}`
        }));
        AdminStore.set('user_ban_cases', this.banCases);
      } else if (wasBanned) {
        const activeCase = this.banCases.find(item => item.userId === user.id && item.status !== 'resolved');
        if (activeCase) {
          activeCase.status = 'resolved';
          activeCase.statusLabel = '已解封';
          activeCase.expireAt = this.formatDateTime(new Date());
          activeCase.processor = this.getCurrentOperator();
          activeCase.actionHistory.unshift(this.createBanActionLog(activeCase, `后台人工解封：${reason}`, activeCase.processor));
          AdminStore.set('user_ban_cases', this.banCases);
        }
      }
      AdminStore.set('user_items', this.users);
      this.state.actionModal.show = false;
      this.render();
      AdminUI.showMessage(`用户 ${user.nickname} 的账号状态已更新`, user.accountStatus === 'banned' ? 'warning' : 'success');
      return;
    }

    const amount = Number(document.getElementById('userActionAmount').value);
    if (!Number.isFinite(amount) || amount === 0 || Math.abs(amount) > 20) {
      AdminUI.showMessage('信用分调整值需在 ±20 以内且不能为 0', 'error');
      return;
    }

    const now = new Date().toLocaleString('zh-CN');
    user.credit = Math.max(0, Math.min(100, user.credit + amount));
    if (user.credit < 60) {
      user.accountStatus = 'limited';
      user.accountStatusLabel = '受限';
    } else if (user.accountStatus !== 'banned') {
      user.accountStatus = 'active';
      user.accountStatusLabel = '正常';
    }
    this.recordUserCreditLog(user, `${now} ${this.getCurrentOperator()}：手动调分 ${amount > 0 ? '+' : ''}${amount}，原因：${reason}，调整后 ${user.credit}`);
    AdminStore.set('user_items', this.users);
    this.state.actionModal.show = false;
    this.render();
    AdminUI.showMessage(`用户 ${user.nickname} 信用分已调整为 ${user.credit}`, 'success');
  },

  getBanCaseById(id) {
    return this.banCases.find(item => item.id === id) || null;
  },

  resolveBanCase(action, id = '') {
    const item = id ? this.getBanCaseById(id) : this.getSelectedBanCase();
    if (!item) return;
    const process = this.getBanProcessStatus(item);
    const operator = this.getCurrentOperator();
    if (action === 'approved') {
      if (!['reviewing', 'temporary', 'permanent'].includes(process.value)) {
        AdminUI.showMessage('当前状态不允许解封', 'warning');
        return;
      }
      item.status = 'resolved';
      item.statusLabel = '已解封';
      item.expireAt = this.formatDateTime(new Date());
      item.processor = operator;
      item.actionHistory.unshift(this.createBanActionLog(item, '解封，已同步账号状态与站内通知', operator));
      const user = this.users.find(userItem => userItem.id === item.userId);
      if (user) {
        user.accountStatus = 'active';
        user.accountStatusLabel = '正常';
      }
      AdminUI.showMessage('已解封账号，并同步站内通知与日志', 'success');
    } else {
      if (process.value !== 'reviewing') {
        AdminUI.showMessage('只有人工复核中可以维持当前处置', 'warning');
        return;
      }
      item.status = 'banned';
      item.statusLabel = '封禁中';
      item.processor = operator;
      item.actionHistory.unshift(this.createBanActionLog(item, '维持当前处置', operator));
      AdminUI.showMessage('已维持当前封禁处置', 'success');
    }
    AdminStore.set('user_ban_cases', this.banCases);
    AdminStore.set('user_items', this.users);
    this.render();
  },

  rebanSelectedCase(id = '') {
    const item = id ? this.getBanCaseById(id) : this.getSelectedBanCase();
    if (!item) return;
    if (this.getBanProcessStatus(item).value !== 'resolved') {
      AdminUI.showMessage('只有已解封记录可以再次封禁', 'warning');
      return;
    }
    const operator = this.getCurrentOperator();
    item.status = 'banned';
    item.statusLabel = '封禁中';
    item.banType = item.banType || 'temporary';
    item.banTypeLabel = item.banType === 'permanent' ? '永久封禁' : '临时封禁';
    item.banSource = 'manual';
    item.createdBy = operator;
    item.effectiveAt = new Date().toLocaleString('zh-CN');
    item.processor = operator;
    item.expireAt = item.banType === 'permanent' ? this.permanentBanExpireAt : this.addDaysToDateTime(item.effectiveAt, 7);
    item.actionHistory.unshift(this.createBanActionLog(item, '管理员手动封禁', operator));
    const user = this.users.find(userItem => userItem.id === item.userId);
    if (user) {
      user.accountStatus = 'banned';
      user.accountStatusLabel = '封禁中';
    }
    AdminStore.set('user_ban_cases', this.banCases);
    AdminStore.set('user_items', this.users);
    this.render();
    AdminUI.showMessage('已重新封禁账号，并写入处置时间轴', 'warning');
  },

  extendTemporaryBan(id = '') {
    const item = id ? this.getBanCaseById(id) : this.getSelectedBanCase();
    if (!item) return;
    if (this.getBanProcessStatus(item).value !== 'temporary') {
      AdminUI.showMessage('只有临时封禁记录可以延长封禁', 'warning');
      return;
    }
    const operator = this.getCurrentOperator();
    const previousExpireAt = item.expireAt || this.addDaysToDateTime(item.effectiveAt || item.submittedAt, 7);
    item.expireAt = this.addDaysToDateTime(previousExpireAt, 7);
    item.processor = operator;
    item.actionHistory.unshift(this.createBanActionLog(item, `延长封禁 7 天，到期时间由 ${previousExpireAt} 调整为 ${item.expireAt}`, operator));
    AdminStore.set('user_ban_cases', this.banCases);
    this.render();
    AdminUI.showMessage('已延长封禁 7 天，并写入处置时间轴', 'warning');
  },

  claimSelectedBanCase(id = '') {
    const item = id ? this.getBanCaseById(id) : this.getSelectedBanCase();
    if (!item) return;
    if (!this.hasBanAppeal(item)) {
      AdminUI.showMessage('用户尚未提交申诉，不能认领处理', 'warning');
      return;
    }
    if (!this.isUnassignedProcessor(item.processor)) {
      AdminUI.showMessage(`该申诉已分配给 ${item.processor} 处理`, 'warning');
      return;
    }
    const operator = this.claimBanCase(item);
    item.status = item.status === 'appeal_pending' ? 'reviewing' : item.status;
    item.statusLabel = item.status === 'reviewing' ? '人工复核中' : item.statusLabel;
    AdminStore.set('user_ban_cases', this.banCases);
    this.render();
    AdminUI.showMessage(`已分配给 ${operator} 处理`, 'success');
  },

  resolveCreditCase(id, action) {
    const item = this.creditCases.find(caseItem => caseItem.id === id);
    if (!item) return;
    if (this.isCreditTerminal(item.appealStatus)) {
      AdminUI.showMessage('该信用申诉已完结，不能重复处理', 'warning');
      return;
    }
    if (action === 'reviewing' && item.appealStatus !== 'pending') {
      AdminUI.showMessage('只有待处理申诉可以转人工复核', 'warning');
      return;
    }
    const now = new Date().toLocaleString('zh-CN');
    item.history = item.history || [];
    if (action === 'approved') {
      const rollbackAmount = this.getCreditRollbackAmount(item);
      item.appealStatus = 'approved';
      item.appealStatusLabel = '申诉通过';
      item.history.unshift(`${now} ${this.getCurrentOperator()}：申诉通过，生成信用分冲回流水 +${rollbackAmount}`);
      const user = this.users.find(userItem => userItem.id === item.userId);
      if (user) {
        user.credit = Math.min(100, user.credit + rollbackAmount);
        if (user.credit >= 60 && user.accountStatus !== 'banned') {
          user.accountStatus = 'active';
          user.accountStatusLabel = '正常';
        }
        this.recordUserCreditLog(user, `${now} 信用申诉 ${item.id} 通过，冲回 +${rollbackAmount}，调整后 ${user.credit}`);
      }
      item.currentScore = Math.min(100, item.currentScore + rollbackAmount);
      item.restriction = item.currentScore >= 60 ? '限制已解除' : item.restriction;
      item.trend = (item.trend || []).concat([`申诉通过 ${item.currentScore}`]);
      AdminUI.showMessage(`申诉已通过，已按原扣分冲回 ${rollbackAmount} 分`, 'success');
    } else if (action === 'reviewing') {
      item.appealStatus = 'reviewing';
      item.appealStatusLabel = '人工复核中';
      item.history.unshift(`${now} ${this.getCurrentOperator()}：转人工复核`);
      AdminUI.showMessage('申诉已转人工复核', 'warning');
    } else {
      item.appealStatus = 'rejected';
      item.appealStatusLabel = '申诉驳回';
      item.history.unshift(`${now} ${this.getCurrentOperator()}：驳回申诉，原信用扣分保持有效`);
      AdminUI.showMessage('申诉已驳回，结果将同步消息中心', 'warning');
    }
    AdminStore.set('user_credit_cases', this.creditCases);
    AdminStore.set('user_items', this.users);
    this.render();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  UserModule.init();
});
