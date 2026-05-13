const TaskModule = {
  pageSize: 5,
  taskPageSize: 10,
  taskMockVersion: '2026-05-07-task-list-expanded-v2',

  state: {
    list: {
      tab: 'all',
      keyword: '',
      category: '',
      project: '',
      status: '',
      page: 1,
      selectedTaskId: 'TK-77821',
      selectedIds: [],
      applicantModalTaskId: ''
    },
    configList: {
      keyword: '',
      categoryKeyword: '',
      category: '',
      project: '',
      status: '',
      risk: '',
      page: 1
    }
  },

  catalogCategories: [
    { key: 'common', label: '常用任务', desc: 'C端快捷入口，聚合高频项目' },
    { key: 'skill', label: '技能类', desc: '线上交付、知识辅导与内容输出' },
    { key: 'physical', label: '体能类', desc: '跑腿、排队、陪跑等即时体力任务' },
    { key: 'professional', label: '专业服务类', desc: '需明确流程或专业配合的服务' },
    { key: 'activity', label: '活动协助类', desc: '婚庆、展会、拍摄等现场协作' },
    { key: 'life', label: '生活服务类', desc: '搬运、清洁、收纳等居家任务' },
    { key: 'companion', label: '陪伴照护类', desc: '陪伴、接送、宠物与照护支持' }
  ],

  commonProjectKeys: ['errand', 'queue', 'ppt', 'tutoring', 'cat_care', 'moving_help'],

  insuranceOptions: ['基础责任险', '交付保障', '授课保障', '运动人身险', '上门服务保障', '陪诊责任险', '活动履约保障', '搬运责任险', '宠物服务保障', '陪护责任险', '接送责任险', '不投保'],

  applicantProfiles: [
    { id: 'U-22031', nickname: '王同学', phone: '138****2031', credit: 96, cert: '实名+学历', skills: '宠物照看 / 上门服务', orders: '31 单', rate: '98%', appliedAt: '今天 09:51', note: '有同类服务经验，可按时到达。' },
    { id: 'U-22318', nickname: '李同学', phone: '137****2318', credit: 94, cert: '实名+技能', skills: '展会协助 / 搬运', orders: '24 单', rate: '96%', appliedAt: '今天 10:06', note: '可携带手套，接受现场分工。' },
    { id: 'U-22901', nickname: '陈同学', phone: '139****2901', credit: 92, cert: '实名', skills: '跑腿 / 校园互助', orders: '42 单', rate: '97%', appliedAt: '今天 10:18', note: '距离近，预计 15 分钟可到。' },
    { id: 'U-23762', nickname: '宋栀', phone: '137****3762', credit: 96, cert: '实名+学历', skills: '陪诊 / 沟通协助', orders: '12 单', rate: '100%', appliedAt: '今天 10:25', note: '熟悉医院流程，可陪同缴费取药。' },
    { id: 'U-24031', nickname: '陆明远', phone: '139****4031', credit: 97, cert: '实名+学历', skills: '校园互助 / 家教', orders: '67 单', rate: '99%', appliedAt: '今天 10:31', note: '时间匹配，已阅读任务要求。' },
    { id: 'U-11816', nickname: '林见川', phone: '139****1816', credit: 90, cert: '实名', skills: '体力协助 / 搬运', orders: '11 单', rate: '94%', appliedAt: '今天 10:44', note: '可自带搬运小推车。' }
  ],

  catalogProjects: [
    { key: 'ppt', name: '做PPT', categoryKey: 'skill', avgRangeText: '¥80-300', rewardMin: 80, rewardMax: 300, highRisk: false, insuranceType: '交付保障', forceInsurance: false, needsDegree: false, needsSkill: true, needEmergency: false, fields: [{ name: '交付形式', type: '单选', required: '是' }, { name: '预计页数', type: '单选', required: '是' }] },
    { key: 'resume', name: '写简历', categoryKey: 'skill', avgRangeText: '¥60-180', rewardMin: 60, rewardMax: 180, highRisk: false, insuranceType: '交付保障', forceInsurance: false, needsDegree: false, needsSkill: true, needEmergency: false, fields: [{ name: '目标岗位', type: '文本', required: '是' }, { name: '现有材料情况', type: '单选', required: '是' }] },
    { key: 'tutoring', name: '家教', categoryKey: 'skill', avgRangeText: '¥100-260', rewardMin: 100, rewardMax: 260, highRisk: false, insuranceType: '授课保障', forceInsurance: false, needsDegree: true, needsSkill: true, needEmergency: true, fields: [{ name: '辅导科目', type: '单选', required: '是' }, { name: '学生年级', type: '单选', required: '是' }] },
    { key: 'coach', name: '教练', categoryKey: 'skill', avgRangeText: '¥120-320', rewardMin: 120, rewardMax: 320, highRisk: false, insuranceType: '授课保障', forceInsurance: false, needsDegree: false, needsSkill: true, needEmergency: true, fields: [{ name: '训练目标', type: '单选', required: '是' }, { name: '授课形式', type: '单选', required: '是' }] },
    { key: 'errand', name: '跑腿', categoryKey: 'physical', avgRangeText: '¥20-80', rewardMin: 20, rewardMax: 80, highRisk: false, insuranceType: '基础责任险', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '跑腿类型', type: '单选', required: '是' }, { name: '物品/事项说明', type: '文本', required: '是' }] },
    { key: 'running', name: '陪跑步', categoryKey: 'physical', avgRangeText: '¥60-180', rewardMin: 60, rewardMax: 180, highRisk: true, insuranceType: '运动人身险', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '目标距离', type: '单选', required: '是' }, { name: '目标配速', type: '单选', required: '是' }] },
    { key: 'queue', name: '排队', categoryKey: 'physical', avgRangeText: '¥40-120', rewardMin: 40, rewardMax: 120, highRisk: false, insuranceType: '基础责任险', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '排队事项', type: '文本', required: '是' }, { name: '预计排队时长', type: '单选', required: '是' }] },
    { key: 'cat_care', name: '上门喂猫', categoryKey: 'professional', avgRangeText: '¥60-180', rewardMin: 60, rewardMax: 180, highRisk: true, insuranceType: '上门服务保障', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '猫咪数量', type: '单选', required: '是' }, { name: '入户方式', type: '单选', required: '是' }] },
    { key: 'medical_companion', name: '医疗陪诊', categoryKey: 'professional', avgRangeText: '¥120-300', rewardMin: 120, rewardMax: 300, highRisk: true, insuranceType: '陪诊责任险', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '医院名称', type: '文本', required: '是' }, { name: '就诊科室', type: '单选', required: '是' }] },
    { key: 'wedding_assist', name: '婚庆协助', categoryKey: 'activity', avgRangeText: '¥300-900', rewardMin: 300, rewardMax: 900, highRisk: true, insuranceType: '活动履约保障', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '协助角色', type: '多选', required: '是' }, { name: '着装要求', type: '文本', required: '是' }] },
    { key: 'expo_assist', name: '展会协助', categoryKey: 'activity', avgRangeText: '¥150-400', rewardMin: 150, rewardMax: 400, highRisk: false, insuranceType: '活动履约保障', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '现场职责', type: '单选', required: '是' }, { name: '统一着装', type: '单选', required: '是' }] },
    { key: 'photo_assist', name: '摄影助理', categoryKey: 'activity', avgRangeText: '¥120-360', rewardMin: 120, rewardMax: 360, highRisk: false, insuranceType: '活动履约保障', forceInsurance: false, needsDegree: false, needsSkill: true, needEmergency: true, fields: [{ name: '拍摄类型', type: '单选', required: '是' }, { name: '是否需自带装备', type: '单选', required: '是' }] },
    { key: 'moving_help', name: '搬家帮手', categoryKey: 'life', avgRangeText: '¥100-260', rewardMin: 100, rewardMax: 260, highRisk: true, insuranceType: '搬运责任险', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '物品重量级别', type: '单选', required: '是' }, { name: '楼层/电梯情况', type: '文本', required: '是' }] },
    { key: 'cleaning', name: '家电清洁', categoryKey: 'life', avgRangeText: '¥80-220', rewardMin: 80, rewardMax: 220, highRisk: false, insuranceType: '上门服务保障', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '清洁对象', type: '单选', required: '是' }, { name: '工具准备情况', type: '单选', required: '是' }] },
    { key: 'storage', name: '居家收纳', categoryKey: 'life', avgRangeText: '¥100-260', rewardMin: 100, rewardMax: 260, highRisk: false, insuranceType: '上门服务保障', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '收纳区域', type: '单选', required: '是' }, { name: '房间面积', type: '单选', required: '是' }] },
    { key: 'dog_walking', name: '遛狗', categoryKey: 'companion', avgRangeText: '¥40-100', rewardMin: 40, rewardMax: 100, highRisk: false, insuranceType: '宠物服务保障', forceInsurance: false, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '狗狗数量', type: '单选', required: '是' }, { name: '狗狗性格', type: '多选', required: '是' }] },
    { key: 'elder_companion', name: '老人陪伴', categoryKey: 'companion', avgRangeText: '¥120-280', rewardMin: 120, rewardMax: 280, highRisk: true, insuranceType: '陪护责任险', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '行动状态', type: '单选', required: '是' }, { name: '重点照看事项', type: '文本', required: '是' }] },
    { key: 'child_pickup', name: '接送陪同', categoryKey: 'companion', avgRangeText: '¥80-200', rewardMin: 80, rewardMax: 200, highRisk: true, insuranceType: '接送责任险', forceInsurance: true, needsDegree: false, needsSkill: false, needEmergency: true, fields: [{ name: '接送对象', type: '单选', required: '是' }, { name: '接送方式', type: '单选', required: '是' }] }
  ],

  tasks: [
    {
      id: 'TK-77821',
      project: '医疗陪诊',
      projectKey: 'medical_companion',
      category: '专业服务类',
      categoryKey: 'professional',
      publisher: '雇主 陈女士',
      publisherId: 'U-10382',
      reward: '¥138',
      insurance: '已投保',
      insuranceName: '陪诊责任险',
      urgent: '急单置顶',
      urgentTop: [
        { range: '10km', duration: '2小时' },
        { range: '20km', duration: '1小时' },
        { range: '30km', duration: '2小时' }
      ],
      status: 'risk_flagged',
      statusLabel: '风险命中',
      risk: '高风险地点 + AI 命中线下转账',
      createdAt: '今天 09:42',
      aiDecision: '命中“医院停车场现金结算”“脱离平台联系”双重风险词。',
      fields: ['医院名称：南山医院', '就诊科室：神经内科'],
      title: '南山医院下午陪诊挂号',
      taskRequirements: '熟悉医院流程，沟通耐心，可协助手机缴费。',
      detailDescription: '陪同老人完成挂号、取号、候诊和缴费指引，需全程在医院内完成。',
      startDateTime: '今天 14:00',
      endDateTime: '今天 17:00',
      durationText: '约 3 小时',
      roughLocation: '深圳市南山区南山医院',
      detailLocation: '深圳市南山区桃园路89号南山医院门诊楼一楼服务台',
      detailImages: ['就诊单截图 1 张'],
      validityLabel: '12小时',
      feeDetail: { reward: '¥138', insuranceFee: '¥3', urgentFee: '¥10', coupon: '-¥8', payable: '¥143', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '6 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '建议保留高风险并要求发布者补充实名联系人。'
    },
    {
      id: 'TK-77794',
      project: '展会协助',
      projectKey: 'expo_assist',
      category: '活动协助类',
      categoryKey: 'activity',
      publisher: '品牌方 Studio M',
      publisherId: 'U-10116',
      reward: '¥260',
      insurance: '待投保',
      insuranceName: '活动履约保障',
      urgent: '普通',
      urgentTop: null,
      status: 'risk_flagged',
      statusLabel: '风险命中',
      risk: '大额酬劳，需核对安全说明',
      createdAt: '今天 08:31',
      aiDecision: 'AI 判定基本合规，但酬劳超类目均值 32%，建议人工确认。',
      fields: ['现场职责：布场撤场', '统一着装：需要'],
      title: '展会撤场物料协助',
      taskRequirements: '执行力强、能长时间站立，需能搬运 10kg 左右物料。',
      detailDescription: '协助展台撤场、物料分类和搬运到指定货车，现场有负责人统一分工。',
      startDateTime: '今天 18:00',
      endDateTime: '今天 23:00',
      durationText: '约 5 小时',
      roughLocation: '深圳市福田区会展中心',
      detailLocation: '深圳市福田区福华三路会展中心北登录大厅',
      detailImages: ['现场示意图 2 张'],
      validityLabel: '6小时',
      feeDetail: { reward: '¥260', insuranceFee: '¥0', urgentFee: '¥0', coupon: '¥0', payable: '¥260', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '11 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '建议补充场地方联系人，若无法补充则人工下架。'
    },
    {
      id: 'TK-77720',
      project: '上门喂猫',
      projectKey: 'cat_care',
      category: '专业服务类',
      categoryKey: 'professional',
      publisher: '雇主 夏先生',
      publisherId: 'U-10902',
      reward: '¥96',
      insurance: '已投保',
      insuranceName: '上门服务保障',
      urgent: '普通',
      urgentTop: null,
      status: 'settled',
      statusLabel: '已结单',
      risk: '无明显风险',
      createdAt: '昨天 22:15',
      aiDecision: '合规，已自动展示到前台。',
      fields: ['猫咪数量：2只', '入户方式：密码锁'],
      title: '上门喂猫并清理猫砂',
      taskRequirements: '有养猫经验，进门后按清单操作并视频打卡。',
      detailDescription: '给两只猫补粮换水，清理猫砂并拍摄视频打卡。',
      startDateTime: '明天 19:00',
      endDateTime: '明天 22:00',
      durationText: '约 1 小时',
      roughLocation: '深圳市南山区科技园',
      detailLocation: '深圳市南山区科苑南路深南花园 3 栋 1802',
      detailImages: ['猫粮位置图 1 张'],
      validityLabel: '24小时',
      feeDetail: { reward: '¥96', insuranceFee: '¥2', urgentFee: '¥0', coupon: '¥0', payable: '¥98', paymentStatus: '已支付', fundStatus: '关联订单进行中' },
      applicants: '9 人申请',
      relatedOrderId: 'OD-240317-19',
      acceptedProvider: '服务者 王同学 / U-22031',
      acceptedAt: '昨天 23:10',
      notes: '后续关注完成凭证质量。'
    },
    {
      id: 'TK-77680',
      project: '做PPT',
      projectKey: 'ppt',
      category: '技能类',
      categoryKey: 'skill',
      publisher: '创业团队 A17',
      publisherId: 'U-10771',
      reward: '¥320',
      insurance: '不投保',
      insuranceName: '不投保',
      urgent: '普通',
      urgentTop: null,
      status: 'takedown',
      statusLabel: '已下架',
      risk: '描述含“线下全款”字样',
      createdAt: '昨天 16:08',
      aiDecision: 'AI 建议下架，发布说明中出现“私下给定金”。',
      fields: ['交付形式：改稿优化', '预计页数：20-40页'],
      title: '商业计划书路演 PPT 美化',
      taskRequirements: '需有 PPT 作品集，熟悉商业计划书结构，能接受 2 轮小修改。',
      detailDescription: '需要基于现有文档美化 20 页左右路演 PPT，要求商务风格。',
      startDateTime: '明天 10:00',
      endDateTime: '明天 22:00',
      durationText: '线上交付',
      roughLocation: '线上远程协作',
      detailLocation: '飞书文档协作，腾讯会议沟通',
      detailImages: ['参考风格图 3 张'],
      validityLabel: '2小时',
      feeDetail: { reward: '¥320', insuranceFee: '¥0', urgentFee: '¥0', coupon: '¥0', payable: '¥320', paymentStatus: '已退款', fundStatus: '下架后原路退回' },
      applicants: '0 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '已通知发布者修改支付方式后重发。'
    },
    {
      id: 'TK-77641',
      project: '搬家帮手',
      projectKey: 'moving_help',
      category: '生活服务类',
      categoryKey: 'life',
      publisher: '学生用户 U-9981',
      publisherId: 'U-9981',
      reward: '¥188',
      insurance: '已投保',
      insuranceName: '搬运责任险',
      urgent: '急单置顶',
      urgentTop: { range: '10km', duration: '2小时' },
      status: 'risk_flagged',
      statusLabel: '风险命中',
      risk: '夜间时段 + 高体力',
      createdAt: '今天 11:02',
      aiDecision: '任务本身合规，但需校验紧急联系人和地点安全提示。',
      fields: ['物品重量级别：中等（20kg内）', '楼层/电梯情况：7楼无电梯'],
      title: '宿舍搬家帮手两人',
      taskRequirements: '体力好、守时，需能搬运中等重量纸箱。',
      detailDescription: '从宿舍搬纸箱和小件家具到校外公寓，需走楼梯。',
      startDateTime: '今晚 21:00',
      endDateTime: '今晚 23:00',
      durationText: '约 2 小时',
      roughLocation: '广州大学城学生宿舍区',
      detailLocation: '广州大学城北亭村学生公寓 7 栋 703',
      detailImages: ['物品照片 4 张'],
      validityLabel: '6小时',
      feeDetail: { reward: '¥188', insuranceFee: '¥4', urgentFee: '¥26', coupon: '¥0', payable: '¥218', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '3 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '建议开启强制保险和服务前确认。'
    },
    {
      id: 'TK-77593',
      project: '家教',
      projectKey: 'tutoring',
      category: '技能类',
      categoryKey: 'skill',
      publisher: '家长账号 H-2281',
      publisherId: 'U-9452',
      reward: '¥150',
      insurance: '不投保',
      insuranceName: '不投保',
      urgent: '普通',
      urgentTop: null,
      status: 'risk_flagged',
      statusLabel: '风险命中',
      risk: '需要技能认证',
      createdAt: '今天 07:55',
      aiDecision: '要求口语证书，需确认技能认证字段已经配置。',
      fields: ['辅导科目：英语', '学生年级：高中'],
      title: '线上英语口语陪练',
      taskRequirements: '雅思 6.5+ 或同等英语能力，有教学经验优先。',
      detailDescription: '面向高中生做 90 分钟口语陪练，重点纠正发音和回答结构。',
      startDateTime: '本周六 10:00',
      endDateTime: '本周六 11:30',
      durationText: '90 分钟',
      roughLocation: '线上视频',
      detailLocation: '腾讯会议，发布者会在接单后发送会议号',
      detailImages: ['课程目标截图 1 张'],
      validityLabel: '12小时',
      feeDetail: { reward: '¥150', insuranceFee: '¥0', urgentFee: '¥0', coupon: '-¥10', payable: '¥140', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '5 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '已自动展示，建议在申请页突出技能标签。'
    },
    {
      id: 'TK-77562',
      project: '跑腿',
      projectKey: 'errand',
      category: '体能类',
      categoryKey: 'physical',
      publisher: '学生用户 林同学',
      publisherId: 'U-11208',
      reward: '¥42',
      insurance: '不投保',
      insuranceName: '不投保',
      urgent: '普通',
      urgentTop: null,
      status: 'visible',
      statusLabel: '展示中',
      risk: '无明显风险',
      createdAt: '今天 12:18',
      aiDecision: '合规，地址与物品说明完整。',
      fields: ['跑腿类型：代取代送', '物品/事项说明：文件袋1份'],
      title: '校医院代取报告送宿舍',
      taskRequirements: '准时取件，送达后拍照确认。',
      detailDescription: '下午到校医院一楼服务台代取检查报告，再送到学生公寓楼下。',
      startDateTime: '今天 16:00',
      endDateTime: '今天 17:00',
      durationText: '约 1 小时',
      roughLocation: '深圳大学粤海校区',
      detailLocation: '深圳大学粤海校区校医院一楼服务台至桂庙宿舍 5 栋',
      detailImages: ['取件码截图 1 张'],
      validityLabel: '2小时',
      feeDetail: { reward: '¥42', insuranceFee: '¥0', urgentFee: '¥0', coupon: '¥0', payable: '¥42', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '2 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '常规任务，继续展示。'
    },
    {
      id: 'TK-77540',
      project: '排队',
      projectKey: 'queue',
      category: '体能类',
      categoryKey: 'physical',
      publisher: '雇主 何同学',
      publisherId: 'U-11882',
      reward: '¥68',
      insurance: '不投保',
      insuranceName: '不投保',
      urgent: '急单置顶',
      urgentTop: [
        { range: '5km', duration: '1小时' },
        { range: '10km', duration: '1小时' }
      ],
      status: 'visible',
      statusLabel: '展示中',
      risk: '无明显风险',
      createdAt: '今天 10:46',
      aiDecision: '合规，已自动展示到前台。',
      fields: ['排队事项：窗口取号', '预计排队时长：1-2小时'],
      title: '政务大厅窗口取号排队',
      taskRequirements: '需要持续在现场排队，取到号后电话联系。',
      detailDescription: '帮忙在南山区政务大厅排队取号，不需要代办业务。',
      startDateTime: '今天 13:30',
      endDateTime: '今天 15:30',
      durationText: '约 2 小时',
      roughLocation: '深圳市南山区政务服务中心',
      detailLocation: '深圳市南山区滨海大道辅路政务服务中心 A 区 3 号窗口',
      detailImages: [],
      validityLabel: '2小时',
      feeDetail: { reward: '¥68', insuranceFee: '¥0', urgentFee: '¥10', coupon: '¥0', payable: '¥78', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '4 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '急单置顶范围较小，继续观察申请转化。'
    },
    {
      id: 'TK-77521',
      project: '写简历',
      projectKey: 'resume',
      category: '技能类',
      categoryKey: 'skill',
      publisher: '求职用户 Bella',
      publisherId: 'U-11362',
      reward: '¥120',
      insurance: '已投保',
      insuranceName: '交付保障',
      urgent: '普通',
      urgentTop: null,
      status: 'completed',
      statusLabel: '已完成',
      risk: '无明显风险',
      createdAt: '昨天 13:20',
      aiDecision: '合规，交付型任务已完成。',
      fields: ['目标岗位：产品运营', '现有材料情况：已有旧简历'],
      title: '互联网运营岗简历优化',
      taskRequirements: '熟悉校招简历和运营岗位表达，能给修改建议。',
      detailDescription: '基于旧简历优化一版产品运营方向简历，并输出修改建议。',
      startDateTime: '昨天 15:00',
      endDateTime: '昨天 21:00',
      durationText: '线上交付',
      roughLocation: '线上远程协作',
      detailLocation: '飞书文档协作，邮箱交付 PDF 和 Word',
      detailImages: ['旧简历脱敏版 1 份'],
      validityLabel: '12小时',
      feeDetail: { reward: '¥120', insuranceFee: '¥1', urgentFee: '¥0', coupon: '-¥20', payable: '¥101', paymentStatus: '已支付', fundStatus: '待结算' },
      applicants: '7 人申请',
      relatedOrderId: 'OD-240321-08',
      acceptedProvider: '服务者 李同学 / U-22318',
      acceptedAt: '昨天 14:02',
      notes: '订单已完成，等待评价或结算。'
    },
    {
      id: 'TK-77488',
      project: '陪跑步',
      projectKey: 'running',
      category: '体能类',
      categoryKey: 'physical',
      publisher: '用户 Kay',
      publisherId: 'U-11608',
      reward: '¥160',
      insurance: '已投保',
      insuranceName: '运动人身险',
      urgent: '急单置顶',
      urgentTop: { range: '10km', duration: '3小时' },
      status: 'cancelled',
      statusLabel: '已取消',
      risk: '夜间户外 + 高风险项目',
      createdAt: '前天 20:12',
      aiDecision: '高风险项目已触发安全须知和强制保险。',
      fields: ['目标距离：8km', '目标配速：6\'00"-7\'00"/km'],
      title: '深圳湾夜跑陪跑 8km',
      taskRequirements: '熟悉深圳湾夜跑路线，能陪同热身和收操。',
      detailDescription: '希望找一位跑步搭子陪跑 8km，控制在舒适配速。',
      startDateTime: '前天 21:30',
      endDateTime: '前天 23:00',
      durationText: '约 1.5 小时',
      roughLocation: '深圳湾公园',
      detailLocation: '深圳湾公园日出剧场入口集合',
      detailImages: [],
      validityLabel: '2小时',
      feeDetail: { reward: '¥160', insuranceFee: '¥4', urgentFee: '¥12', coupon: '¥0', payable: '¥176', paymentStatus: '已退款', fundStatus: '取消后任务金额已退回' },
      applicants: '3 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '发布者主动取消，保险按产品规则退回。'
    },
    {
      id: 'TK-77452',
      project: '摄影助理',
      projectKey: 'photo_assist',
      category: '活动协助类',
      categoryKey: 'activity',
      publisher: '摄影工作室 Luma',
      publisherId: 'U-10988',
      reward: '¥220',
      insurance: '已投保',
      insuranceName: '活动履约保障',
      urgent: '普通',
      urgentTop: null,
      status: 'settled',
      statusLabel: '已结单',
      risk: '无明显风险',
      createdAt: '2026-04-29 09:18',
      aiDecision: '合规，订单已完成结算。',
      fields: ['拍摄类型：活动跟拍', '是否需自带装备：不需要'],
      title: '校园开放日摄影助理',
      taskRequirements: '能协助搬运灯架、整理素材卡，听从主摄影安排。',
      detailDescription: '活动现场协助主摄影布光、递设备和整理素材。',
      startDateTime: '2026-04-30 08:00',
      endDateTime: '2026-04-30 14:00',
      durationText: '约 6 小时',
      roughLocation: '广州大学城中心体育馆',
      detailLocation: '广州大学城中心体育馆东门签到台',
      detailImages: ['场地图 1 张'],
      validityLabel: '24小时',
      feeDetail: { reward: '¥220', insuranceFee: '¥2', urgentFee: '¥0', coupon: '¥0', payable: '¥222', paymentStatus: '已支付', fundStatus: '已结算' },
      applicants: '8 人申请',
      relatedOrderId: 'OD-240305-11',
      acceptedProvider: '服务者 陈同学 / U-22901',
      acceptedAt: '2026-04-29 11:26',
      notes: '已结单，结算流水已生成。'
    },
    {
      id: 'TK-77420',
      project: '家电清洁',
      projectKey: 'cleaning',
      category: '生活服务类',
      categoryKey: 'life',
      publisher: '雇主 孙女士',
      publisherId: 'U-12066',
      reward: '¥180',
      insurance: '已投保',
      insuranceName: '上门服务保障',
      urgent: '普通',
      urgentTop: null,
      status: 'visible',
      statusLabel: '展示中',
      risk: '入户服务，需确认安全须知',
      createdAt: '今天 09:05',
      aiDecision: '高风险入户场景，已展示安全须知，未命中违规词。',
      fields: ['清洁对象：空调挂机', '工具准备情况：服务者自带'],
      title: '上门清洗挂机空调一台',
      taskRequirements: '有家电清洁经验，工具自带，动作细致。',
      detailDescription: '清洗卧室挂机空调，包含滤网、外壳和基础除尘。',
      startDateTime: '明天 10:00',
      endDateTime: '明天 12:00',
      durationText: '约 2 小时',
      roughLocation: '深圳市福田区香蜜湖',
      detailLocation: '深圳市福田区香蜜湖街道侨香路 168 号 6 栋 1201',
      detailImages: ['空调型号照片 1 张'],
      validityLabel: '24小时',
      feeDetail: { reward: '¥180', insuranceFee: '¥2', urgentFee: '¥0', coupon: '-¥15', payable: '¥167', paymentStatus: '已支付', fundStatus: '任务金额已冻结' },
      applicants: '1 人申请',
      relatedOrderId: '',
      acceptedProvider: '',
      acceptedAt: '',
      notes: '入户类任务，关注接单人认证状态。'
    }
  ],

  configs: [
    {
      key: 'common',
      label: '常用任务',
      projectId: 'CFG-COM-01',
      projectName: '快递代取 / 资料代办',
      highRisk: false,
      insuranceType: '按需投保',
      forceInsurance: false,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '允许服务中取消，需上传证据',
      status: '启用中',
      updatedAt: '2026-04-24 18:20',
      owner: '林清越',
      priceMin: '18',
      priceMax: '60',
      fields: [
        { name: '服务时段', type: '时间范围', required: '是' },
        { name: '服务地点', type: '地址', required: '是' },
        { name: '补充说明', type: '多行文本', required: '否' }
      ],
      history: ['2026-04-24 林清越：开启紧急联系人必填', '2026-04-20 宋知微：调整参考价到 18-60']
    },
    {
      key: 'skill',
      label: '技能类',
      projectId: 'CFG-SKL-03',
      projectName: '口语陪练 / 设计协助',
      highRisk: false,
      insuranceType: '可选投保',
      forceInsurance: false,
      needsDegree: false,
      needsSkill: true,
      needEmergency: true,
      cancelStrategy: '默认不允许服务中取消，未命中则转纠纷',
      status: '启用中',
      updatedAt: '2026-04-25 16:40',
      owner: '王芮宁',
      priceMin: '80',
      priceMax: '240',
      fields: [
        { name: '技能要求', type: '标签多选', required: '是' },
        { name: '作品集链接', type: '文本', required: '否' },
        { name: '交付节点', type: '多行文本', required: '是' }
      ],
      history: ['2026-04-25 王芮宁：技能认证改为必填', '2026-04-21 宋知微：调整交付节点字段']
    },
    {
      key: 'physical',
      label: '体能类',
      projectId: 'CFG-PHY-06',
      projectName: '搬运 / 派发 / 跑腿',
      highRisk: true,
      insuranceType: '基础意外险',
      forceInsurance: true,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '允许服务中取消，必须上传证据',
      status: '启用中',
      updatedAt: '2026-04-26 11:12',
      owner: '林清越',
      priceMin: '60',
      priceMax: '220',
      fields: [
        { name: '体力要求', type: '单选', required: '是' },
        { name: '楼层 / 电梯情况', type: '文本', required: '是' },
        { name: '装备说明', type: '文本', required: '否' }
      ],
      history: ['2026-04-26 林清越：强制保险开启', '2026-04-22 周知夏：新增电梯字段']
    },
    {
      key: 'pro',
      label: '专业服务类',
      projectId: 'CFG-PRO-09',
      projectName: 'PPT / 剪辑 / 翻译',
      highRisk: false,
      insuranceType: '不投保',
      forceInsurance: false,
      needsDegree: false,
      needsSkill: true,
      needEmergency: false,
      cancelStrategy: '服务中默认转纠纷',
      status: '启用中',
      updatedAt: '2026-04-23 14:08',
      owner: '王芮宁',
      priceMin: '120',
      priceMax: '600',
      fields: [
        { name: '交付格式', type: '单选', required: '是' },
        { name: '作品风格参考', type: '附件', required: '否' },
        { name: '里程碑节点', type: '多行文本', required: '是' }
      ],
      history: ['2026-04-23 王芮宁：新增里程碑交付字段']
    },
    {
      key: 'event',
      label: '活动协助类',
      projectId: 'CFG-EVT-11',
      projectName: '布场 / 物料协助 / 引导',
      highRisk: true,
      insuranceType: '活动险',
      forceInsurance: true,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '允许特殊场景取消，否则转纠纷',
      status: '启用中',
      updatedAt: '2026-04-19 17:48',
      owner: '宋知微',
      priceMin: '100',
      priceMax: '300',
      fields: [
        { name: '现场职责', type: '单选', required: '是' },
        { name: '统一着装', type: '单选', required: '是' }
      ],
      history: ['2026-04-19 宋知微：增加活动险强制投保']
    },
    {
      key: 'life',
      label: '生活服务类',
      projectId: 'CFG-LIF-14',
      projectName: '陪诊 / 代办 / 家政协助',
      highRisk: true,
      insuranceType: '基础意外险',
      forceInsurance: true,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '服务中不允许直接取消，优先走纠纷',
      status: '启用中',
      updatedAt: '2026-04-27 09:36',
      owner: '林清越',
      priceMin: '60',
      priceMax: '180',
      fields: [
        { name: '清洁对象', type: '单选', required: '是' },
        { name: '工具准备情况', type: '单选', required: '是' }
      ],
      history: ['2026-04-27 林清越：提高高风险等级并加入安全须知']
    },
    {
      key: 'care',
      label: '陪伴照护类',
      projectId: 'CFG-CAR-17',
      projectName: '宠物照看 / 老人陪伴',
      highRisk: true,
      insuranceType: '基础意外险',
      forceInsurance: false,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '服务中允许补证据取消，否则转纠纷',
      status: '停用中',
      updatedAt: '2026-04-18 13:52',
      owner: '周知夏',
      priceMin: '50',
      priceMax: '160',
      fields: [
        { name: '照护对象', type: '文本', required: '是' },
        { name: '是否需视频打卡', type: '单选', required: '否' },
        { name: '注意事项', type: '多行文本', required: '否' }
      ],
      history: ['2026-04-18 周知夏：补充视频打卡字段']
    }
  ],

  getCategory(key) {
    const categories = this.categoryConfigs && this.categoryConfigs.length ? this.categoryConfigs : this.catalogCategories;
    return categories.find(category => category.key === key) || null;
  },

  getProject(key) {
    return this.catalogProjects.find(project => project.key === key) || null;
  },

  getProjectCategory(project) {
    return project ? this.getCategory(project.categoryKey) : null;
  },

  getProjectsByCategory(categoryKey) {
    if (!categoryKey) return this.catalogProjects;
    if (categoryKey === 'common') {
      return this.commonProjectKeys.map(key => this.getProject(key)).filter(Boolean);
    }
    return this.catalogProjects.filter(project => project.categoryKey === categoryKey);
  },

  matchCatalogCategory(projectKey, categoryKey) {
    if (!categoryKey) return true;
    if (categoryKey === 'common') return this.commonProjectKeys.includes(projectKey);
    const project = this.getProject(projectKey);
    return project ? project.categoryKey === categoryKey : false;
  },

  getProjectOptions(categoryKey, selectedKey) {
    return this.getProjectsByCategory(categoryKey).map(project => `
      <option value="${project.key}" ${selectedKey === project.key ? 'selected' : ''}>${project.name}</option>
    `).join('');
  },

  getCategoryProjectCount(categoryKey) {
    const catalogCount = this.getProjectsByCategory(categoryKey).length;
    const customCount = (this.configs || []).filter(config => {
      const isCatalogProject = this.catalogProjects.some(project => project.key === config.projectKey);
      return config.categoryKey === categoryKey && !isCatalogProject;
    }).length;
    return catalogCount + customCount;
  },

  getCategoryOptions(selectedKey) {
    const categories = this.categoryConfigs && this.categoryConfigs.length ? this.categoryConfigs : this.catalogCategories;
    return categories.map(category => `
      <option value="${category.key}" ${selectedKey === category.key ? 'selected' : ''}>${category.label}</option>
    `).join('');
  },

  getInsuranceOptions(selectedValue) {
    return this.insuranceOptions.map(option => `
      <option value="${option}" ${selectedValue === option ? 'selected' : ''}>${option}</option>
    `).join('');
  },

  renderConfigFieldRows(config) {
    return config.fields.map((field, index) => `
      <div class="field-row" style="grid-template-columns: 180px 1fr 120px;">
        <select class="select" data-field-index="${index}" data-field-key="type">
          ${['文本', '多行文本', '单选', '多选', '数字', '日期', '地址', '附件', '布尔'].map(type => `<option value="${type}" ${field.type === type ? 'selected' : ''}>${type}</option>`).join('')}
        </select>
        <input class="input" data-field-index="${index}" data-field-key="name" value="${field.name}" placeholder="对应内容，例如：医院名称 / 猫咪数量 / 楼层电梯情况">
        <select class="select" data-field-index="${index}" data-field-key="required">
          <option value="是" ${field.required === '是' ? 'selected' : ''}>必填</option>
          <option value="否" ${field.required === '否' ? 'selected' : ''}>选填</option>
        </select>
      </div>
    `).join('');
  },

  buildConfigFromProject(project) {
    const category = this.getProjectCategory(project);
    return {
      key: `project_${project.key}`,
      projectKey: project.key,
      categoryKey: project.categoryKey,
      label: category ? category.label : '未分类',
      categoryDesc: category ? category.desc : '',
      projectId: `CFG-${project.key.toUpperCase().replace(/_/g, '-')}`,
      projectName: project.name,
      highRisk: project.highRisk,
      insuranceType: project.insuranceType,
      forceInsurance: project.forceInsurance,
      needsDegree: project.needsDegree,
      needsSkill: project.needsSkill,
      needEmergency: project.needEmergency,
      cancelStrategy: project.highRisk ? '服务中取消需上传证据，未命中则转纠纷' : '允许服务中取消，需记录原因',
      status: '启用中',
      updatedAt: '2026-05-06 10:00',
      owner: '运营配置组',
      priceMin: String(project.rewardMin),
      priceMax: String(project.rewardMax),
      fields: project.fields.map(field => ({ ...field })),
      safetyNotice: project.highRisk ? '该项目存在较高履约或人身/财物风险，发布者需确认服务边界、紧急联系人与保险提示。' : '请明确服务时间、地点、交付标准和双方责任边界。',
      history: ['2026-05-06 运营配置组：按C端发布项目目录初始化配置']
    };
  },

  buildCategoryConfigs() {
    return this.catalogCategories.map((category, index) => ({
      key: category.key,
      label: category.label,
      desc: category.desc,
      status: '启用中',
      showInClient: true,
      sort: index + 1,
      projectCount: this.getCategoryProjectCount(category.key),
      updatedAt: '2026-05-06 10:00',
      owner: '运营配置组',
      history: ['2026-05-06 运营配置组：按C端一级入口初始化配置']
    }));
  },

  buildDefaultConfigs() {
    return this.catalogProjects.map(project => this.buildConfigFromProject(project));
  },

  normalizeConfigs(savedConfigs) {
    const savedByProject = (savedConfigs || []).reduce((map, config) => {
      if (config.projectKey) {
        map[config.projectKey] = config;
      }
      return map;
    }, {});
    const customConfigs = (savedConfigs || []).filter(config => config.key && config.key.startsWith('custom_')).map(config => ({
      ...config,
      fields: Array.isArray(config.fields) ? config.fields.map(field => this.normalizeFieldRule(field)) : [],
      safetyNotice: config.safetyNotice || '请明确服务边界、时间地点、交付标准和风险提示。'
    }));
    return this.catalogProjects.map(project => {
      const base = this.buildConfigFromProject(project);
      const saved = savedByProject[project.key] || {};
      return {
        ...base,
        ...saved,
        key: base.key,
        projectKey: project.key,
        categoryKey: project.categoryKey,
        label: base.label,
        projectName: project.name,
        fields: Array.isArray(saved.fields) && saved.fields.length ? saved.fields.map(field => this.normalizeFieldRule(field)) : base.fields.map(field => this.normalizeFieldRule(field)),
        safetyNotice: saved.safetyNotice || base.safetyNotice,
        history: Array.isArray(saved.history) && saved.history.length ? saved.history : base.history
      };
    }).concat(customConfigs);
  },

  normalizeCategoryConfigs(savedConfigs) {
    const savedByKey = (savedConfigs || []).reduce((map, config) => {
      map[config.key] = config;
      return map;
    }, {});
    const standardConfigs = this.buildCategoryConfigs().map(base => ({
      ...base,
      ...(savedByKey[base.key] || {}),
      projectCount: this.getCategoryProjectCount(base.key),
      history: Array.isArray(savedByKey[base.key] && savedByKey[base.key].history) ? savedByKey[base.key].history : base.history
    }));
    const customConfigs = (savedConfigs || []).filter(config => config.key && !this.catalogCategories.some(category => category.key === config.key)).map(config => ({
      ...config,
      projectCount: this.getCategoryProjectCount(config.key),
      history: Array.isArray(config.history) ? config.history : []
    }));
    return standardConfigs.concat(customConfigs);
  },

  normalizeFieldRule(field) {
    const fieldKey = field.key || field.name || `field_${Date.now()}`;
    return {
      key: fieldKey,
      name: field.name || field.label || '字段名',
      type: field.type || '文本',
      required: field.required || '否'
    };
  },

  normalizeTask(task) {
    const aliasMap = {
      '陪诊协助': 'medical_companion',
      '医疗陪诊': 'medical_companion',
      '活动布场协助': 'expo_assist',
      '展会协助': 'expo_assist',
      '宠物照看': 'cat_care',
      '上门喂猫': 'cat_care',
      'PPT 代做辅导': 'ppt',
      '做PPT': 'ppt',
      '搬宿舍体力协助': 'moving_help',
      '搬家帮手': 'moving_help',
      '英语口语陪练': 'tutoring',
      '家教': 'tutoring'
    };
    const projectKey = task.projectKey || aliasMap[task.project] || '';
    const project = this.getProject(projectKey);
    const category = project ? this.getProjectCategory(project) : this.getCategory(task.categoryKey);
    const statusMap = {
      pending: ['risk_flagged', '风险命中'],
      reviewing: ['risk_flagged', '风险命中'],
      approved: ['visible', '展示中'],
      rejected: ['takedown', '已下架']
    };
    const mappedStatus = statusMap[task.status];
    return {
      ...task,
      status: mappedStatus ? mappedStatus[0] : task.status,
      statusLabel: mappedStatus ? mappedStatus[1] : task.statusLabel,
      publisherCredit: task.publisherCredit || '90',
      projectKey,
      project: project ? project.name : task.project,
      categoryKey: project ? project.categoryKey : task.categoryKey,
      category: category ? category.label : task.category
    };
  },

  init() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (!path.includes('/task/')) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    const defaultTasks = this.tasks.map(task => this.normalizeTask(task));
    const storedTasks = AdminStore.get('task_items', defaultTasks).map(task => this.normalizeTask(task));
    const storedMockVersion = AdminStore.get('task_items_mock_version', '');
    this.tasks = storedMockVersion === this.taskMockVersion && storedTasks.length >= defaultTasks.length
      ? storedTasks
      : defaultTasks;
    this.configs = this.normalizeConfigs(AdminStore.get('task_configs', this.buildDefaultConfigs()));
    this.categoryConfigs = this.normalizeCategoryConfigs(AdminStore.get('task_category_configs', this.buildCategoryConfigs()));
    AdminStore.set('task_items', this.tasks);
    AdminStore.set('task_items_mock_version', this.taskMockVersion);
    AdminStore.set('task_configs', this.configs);
    AdminStore.set('task_category_configs', this.categoryConfigs);
    this.render();
    this.bindEvents();
  },

  getPageKey() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.endsWith('/task/list.html')) {
      return 'list';
    }
    if (path.endsWith('/task/detail.html')) {
      return 'detail';
    }
    if (path.endsWith('/task/config-detail.html')) {
      return 'config-detail';
    }
    if (path.endsWith('/task/category-config.html')) {
      return 'category-config';
    }
    if (path.endsWith('/task/category-detail.html')) {
      return 'category-detail';
    }
    return 'config-list';
  },

  getStatusClass(status) {
    const map = {
      visible: 'tag-success',
      risk_flagged: 'tag-warning',
      takedown: 'tag-danger',
      completed: 'tag-info',
      settled: 'tag-success',
      cancelled: 'tag'
    };
    return map[status] || 'tag';
  },

  getUrgentTopEntries(task) {
    if (!task || !task.urgentTop) {
      return [];
    }
    return (Array.isArray(task.urgentTop) ? task.urgentTop : [task.urgentTop]).filter(item => item && item.range && item.duration);
  },

  renderUrgentTopSummary(task) {
    const entries = this.getUrgentTopEntries(task);
    if (!entries.length) {
      return '未置顶';
    }
    return entries.map(item => `${item.range} · ${item.duration}`).join('<br>');
  },

  filterTasks() {
    return this.tasks.filter(task => {
      const keyword = this.state.list.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [
        task.id,
        task.project,
        task.projectKey,
        task.category,
        task.publisher,
        task.publisherId
      ].join(' ').toLowerCase().includes(keyword);
      const categoryMatched = this.matchCatalogCategory(task.projectKey, this.state.list.category);
      const projectMatched = !this.state.list.project || task.projectKey === this.state.list.project;
      const statusMatched = !this.state.list.status || task.status === this.state.list.status;
      const tabMatched = this.matchTaskTab(task);
      return keywordMatched && categoryMatched && projectMatched && statusMatched && tabMatched;
    }).sort((a, b) => {
      const weight = task => task.status === 'risk_flagged' ? 0 : 1;
      return weight(a) - weight(b) || String(b.createdAt).localeCompare(String(a.createdAt));
    });
  },

  matchTaskTab(task) {
    switch (this.state.list.tab) {
      case 'risk_flagged':
        return task.status === 'risk_flagged';
      case 'high_risk':
        return task.risk.includes('高风险') || task.risk.includes('线下转账') || task.risk.includes('夜间');
      case 'visible':
        return task.status === 'visible';
      default:
        return true;
    }
  },

  paginate(items, page, pageSize = this.pageSize) {
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    const currentPage = Math.min(page, totalPages);
    const start = (currentPage - 1) * pageSize;
    return {
      items: items.slice(start, start + pageSize),
      totalPages,
      currentPage
    };
  },

  getSelectedTask() {
    return this.tasks.find(task => task.id === this.state.list.selectedTaskId) || this.tasks[0];
  },

  getCurrentConfig() {
    const configKey = new URLSearchParams(window.location.search).get('config');
    return this.configs.find(config => config.key === configKey) || this.configs[0];
  },

  getCurrentCategoryConfig() {
    const categoryKey = new URLSearchParams(window.location.search).get('category');
    return this.categoryConfigs.find(category => category.key === categoryKey) || this.categoryConfigs[0];
  },

  filterCategoryConfigs() {
    const keyword = String(this.state.configList.categoryKeyword || '').trim().toLowerCase();
    return this.categoryConfigs
      .filter(category => {
        if (!keyword) return true;
        return [category.label, category.status, category.owner].join(' ').toLowerCase().includes(keyword);
      })
      .sort((a, b) => Number(a.sort) - Number(b.sort));
  },

  filterConfigs() {
    return this.configs.filter(config => {
      const keyword = this.state.configList.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [
        config.projectId,
        config.projectName,
        config.projectKey,
        config.label,
        config.owner
      ].join(' ').toLowerCase().includes(keyword);
      const categoryMatched = this.matchCatalogCategory(config.projectKey, this.state.configList.category);
      const projectMatched = !this.state.configList.project || config.projectKey === this.state.configList.project;
      const statusMatched = !this.state.configList.status || config.status === this.state.configList.status;
      const riskMatched = !this.state.configList.risk
        || (this.state.configList.risk === 'high' ? config.highRisk : !config.highRisk);
      return keywordMatched && categoryMatched && projectMatched && statusMatched && riskMatched;
    });
  },

  render() {
    if (this.getPageKey() === 'list') {
      this.renderListPage();
      return;
    }

    if (this.getPageKey() === 'detail') {
      this.renderDetailPage();
      return;
    }

    if (this.getPageKey() === 'config-detail') {
      this.renderConfigDetailPage();
      return;
    }

    if (this.getPageKey() === 'category-config') {
      this.renderCategoryConfigPage();
      return;
    }

    if (this.getPageKey() === 'category-detail') {
      this.renderCategoryDetailPage();
      return;
    }

    this.renderConfigListPage();
  },

  renderListPage() {
    const filtered = this.filterTasks();
    const pagination = this.paginate(filtered, this.state.list.page, this.taskPageSize);
    this.state.list.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="taskKeyword" style="min-width:220px;" value="${this.state.list.keyword}" placeholder="搜索任务ID / 项目名称 / 发布者">
          <select class="select" id="taskCategory">
            <option value="">全部大类</option>
            ${this.getCategoryOptions(this.state.list.category)}
          </select>
          <select class="select" id="taskProject">
            <option value="">全部任务项目</option>
            ${this.getProjectOptions(this.state.list.category, this.state.list.project)}
          </select>
          <select class="select" id="taskStatus">
            <option value="">全部状态</option>
            <option value="visible" ${this.state.list.status === 'visible' ? 'selected' : ''}>展示中</option>
            <option value="risk_flagged" ${this.state.list.status === 'risk_flagged' ? 'selected' : ''}>风险命中</option>
            <option value="takedown" ${this.state.list.status === 'takedown' ? 'selected' : ''}>已下架</option>
            <option value="completed" ${this.state.list.status === 'completed' ? 'selected' : ''}>已完成</option>
            <option value="settled" ${this.state.list.status === 'settled' ? 'selected' : ''}>已结单</option>
            <option value="cancelled" ${this.state.list.status === 'cancelled' ? 'selected' : ''}>已取消</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-tasks">搜索</button>
          <button class="btn" type="button" data-action="reset-tasks">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-tasks">导出任务清单</button>
          </div>
        </div>
      </div>

      <div class="bulk-bar ${this.state.list.selectedIds.length ? 'active' : ''}">
        <div>已选择 <strong>${this.state.list.selectedIds.length}</strong> 条任务。任务发布后默认展示，批量操作仅用于人工下架。</div>
        <div class="page-actions">
          <button class="btn btn-sm btn-danger" type="button" data-action="batch-takedown-tasks">批量下架</button>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th class="checkbox-cell"><input type="checkbox" data-action="toggle-all-tasks" ${pagination.items.length && pagination.items.every(item => this.state.list.selectedIds.includes(item.id)) ? 'checked' : ''}></th>
              <th>任务信息</th>
              <th>发布者</th>
              <th>酬劳 / 保险</th>
              <th>急单置顶</th>
              <th>状态</th>
              <th>接单状态</th>
              <th>风险信号</th>
              <th>创建时间</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(task => `
              <tr>
                <td class="checkbox-cell"><input type="checkbox" data-task-select="${task.id}" ${this.state.list.selectedIds.includes(task.id) ? 'checked' : ''}></td>
                <td>
                  <div style="font-weight:600; color:var(--color-text-primary);">${task.project}</div>
                  <div class="table-note">${task.id} · ${task.category}</div>
                </td>
                <td>${task.publisher}<div class="table-note">${task.publisherId} · 信用 ${task.publisherCredit || '90'}</div></td>
                <td>${task.reward}<div class="table-note">${task.insurance}</div></td>
                <td>${task.urgent}</td>
                <td><span class="tag ${this.getStatusClass(task.status)}">${task.statusLabel}</span></td>
                <td>${this.renderAcceptedStatus(task)}</td>
                <td>${task.risk}</td>
                <td>${task.createdAt}</td>
                <td class="action-cell">
                  <button class="btn btn-sm" type="button" data-route="task/detail.html?task=${task.id}">查看详情</button>
                  ${task.status === 'takedown' ? '' : `<button class="btn btn-sm btn-danger" type="button" data-action="takedown-task" data-id="${task.id}">下架</button>`}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条任务`, pagination.currentPage, pagination.totalPages)}
      ${this.renderApplicantsModal()}
    `;
  },

  renderDetailPage() {
    const taskId = new URLSearchParams(window.location.search).get('task');
    const selectedTask = this.tasks.find(task => task.id === taskId) || this.getSelectedTask();
    const fee = selectedTask.feeDetail || {};
    const insuranceFeeText = fee.insuranceFee || '¥0';
    const insuranceName = selectedTask.insuranceName || (selectedTask.insurance === '已投保' ? '保险产品' : '不投保');
    const insuranceSummary = selectedTask.insurance === '已投保' ? insuranceName : '不投保';
    const urgentSummary = this.renderUrgentTopSummary(selectedTask);
    const urgentMeta = this.getUrgentTopEntries(selectedTask).length ? '已置顶' : '未置顶';

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">任务详情页 · 用户发布后自动上架 / 风控信号 / 人工下架处置</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="task/list.html">返回任务列表</button>
            <button class="btn" type="button" data-route="user/detail.html?user=${selectedTask.publisherId}">查看发布者</button>
            ${selectedTask.status === 'takedown' ? '' : `<button class="btn btn-danger" type="button" data-action="takedown-task" data-id="${selectedTask.id}">人工下架</button>`}
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div class="card-title">${selectedTask.project}</div>
              <span class="tag ${this.getStatusClass(selectedTask.status)}">${selectedTask.statusLabel}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">任务ID</div><div class="summary-item-value">${selectedTask.id}</div></div>
              <div class="summary-item"><div class="summary-item-label">任务标题</div><div class="summary-item-value">${selectedTask.title || selectedTask.project}</div></div>
              <div class="summary-item"><div class="summary-item-label">任务大类</div><div class="summary-item-value">${selectedTask.category}</div></div>
              <div class="summary-item"><div class="summary-item-label">任务项目</div><div class="summary-item-value">${selectedTask.project}</div></div>
              <div class="summary-item"><div class="summary-item-label">酬劳</div><div class="summary-item-value">${selectedTask.reward}</div></div>
              <div class="summary-item"><div class="summary-item-label">应付金额</div><div class="summary-item-value">${fee.payable || selectedTask.reward}</div></div>
              <div class="summary-item"><div class="summary-item-label">申请情况</div><div class="summary-item-value">${this.renderApplicantEntry(selectedTask)}</div></div>
              <div class="summary-item"><div class="summary-item-label">接单状态</div><div class="summary-item-value">${selectedTask.acceptedProvider ? '已有人接单' : '暂未接单'}</div></div>
              <div class="summary-item"><div class="summary-item-label">接单人</div><div class="summary-item-value">${selectedTask.acceptedProvider || '未选择'}</div></div>
              <div class="summary-item"><div class="summary-item-label">接单时间</div><div class="summary-item-value">${selectedTask.acceptedAt || '未接单'}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">用户发布任务信息</div>
            <div class="info-grid">
              ${this.renderInfoPair('任务开始时间', selectedTask.startDateTime || '未填写')}
              ${this.renderInfoPair('任务结束时间', selectedTask.endDateTime || '未填写')}
              ${this.renderInfoPair('预计时长', selectedTask.durationText || '未填写')}
              ${this.renderInfoPair('任务地点', selectedTask.roughLocation || '未填写')}
              ${this.renderInfoPair('详细地点', selectedTask.detailLocation || '未填写')}
              ${this.renderInfoPair('任务要求', selectedTask.taskRequirements || '未填写')}
              ${this.renderInfoPair('详细说明', selectedTask.detailDescription || selectedTask.notes)}
              <div class="info-pair" style="grid-column:1 / -1;">
                <div class="info-pair-label">补充图片</div>
                <div class="info-pair-value">${this.renderTaskImages(selectedTask)}</div>
              </div>
              ${this.renderInfoPair('接单有效期', selectedTask.validityLabel || '未填写')}
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">费用与支付信息</div>
            <div class="info-grid">
              ${this.renderInfoPair('任务酬劳', fee.reward || selectedTask.reward)}
              ${this.renderInfoPair('保险费', `${insuranceFeeText}（${insuranceName}）`)}
              ${this.renderInfoPair('急单置顶费', fee.urgentFee || '¥0')}
              ${this.renderInfoPair('优惠券抵扣', fee.coupon || '¥0')}
              ${this.renderInfoPair('发布者应付', fee.payable || selectedTask.reward)}
              ${this.renderInfoPair('支付状态', fee.paymentStatus || '已支付')}
              ${this.renderInfoPair('资金状态', fee.fundStatus || '任务金额已冻结')}
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">项目动态字段</div>
            <div class="evidence-list">
              <div class="evidence-item"><div class="evidence-title">用户填写的项目字段</div><div class="evidence-desc">${selectedTask.fields.join(' / ')}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">风险判断</div>
            <div class="evidence-list">
              <div class="risk-panel"><div class="risk-title">风控风险信号</div><div class="evidence-desc">${selectedTask.risk}</div></div>
              <div class="evidence-item"><div class="evidence-title">AI扫描结果</div><div class="evidence-desc">${selectedTask.aiDecision}</div></div>
              <div class="evidence-item"><div class="evidence-title">审核备注</div><div class="evidence-desc">${selectedTask.notes}</div></div>
            </div>
          </div>
        </div>

        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">关联信息</div></div>
            <div class="bullet-list">
              <div class="bullet-item"><div>发布者：${selectedTask.publisher}</div><div class="bullet-meta">${selectedTask.publisherId}</div></div>
              <div class="bullet-item"><div>保险：${insuranceSummary}</div><div class="bullet-meta">${selectedTask.insurance}</div></div>
              <div class="bullet-item"><div>急单置顶：${urgentSummary}</div><div class="bullet-meta">${urgentMeta}</div></div>
              <div class="bullet-item">
                <div>${this.renderRelatedOrder(selectedTask.relatedOrderId)}</div>
                <div class="bullet-meta">关联订单</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ${this.renderApplicantsModal()}
    `;
  },

  renderInfoPair(label, value) {
    return `
      <div class="info-pair">
        <div class="info-pair-label">${label}</div>
        <div class="info-pair-value">${value || '未填写'}</div>
      </div>
    `;
  },

  renderAcceptedStatus(task) {
    if (task.acceptedProvider) {
      return `已接单<div class="table-note">${task.acceptedProvider}</div><div class="table-note">${this.renderApplicantEntry(task)}</div>`;
    }
    return `未接单<div class="table-note">${this.renderApplicantEntry(task)}</div>`;
  },

  renderApplicantEntry(task) {
    const count = this.getTaskApplicantCount(task);
    if (!count) {
      return '<span class="table-note">0 人申请</span>';
    }
    return `<button class="btn btn-sm" type="button" data-action="view-task-applicants" data-id="${task.id}">${task.applicants || `${count} 人申请`}</button>`;
  },

  getTaskApplicantCount(task) {
    const count = Number.parseInt(String(task.applicants || '0'), 10);
    return Number.isFinite(count) ? count : 0;
  },

  getTaskApplicants(task) {
    const count = this.getTaskApplicantCount(task);
    return this.applicantProfiles.slice(0, count).map((profile, index) => ({
      ...profile,
      appliedAt: index === 0 && task.acceptedAt ? task.acceptedAt : profile.appliedAt
    }));
  },

  renderApplicantsModal() {
    const taskId = this.state.list.applicantModalTaskId;
    if (!taskId) {
      return '';
    }
    const task = this.tasks.find(item => item.id === taskId);
    if (!task) {
      return '';
    }
    const applicants = this.getTaskApplicants(task);
    return `
      <div class="modal-backdrop active" id="taskApplicantsBackdrop">
        <div class="modal" style="width:860px;">
          <div class="modal-header">
            <div class="modal-title">申请人员信息 · ${task.id}</div>
            <div class="modal-close" data-action="close-task-applicants">✕</div>
          </div>
          <div class="modal-body">
            <div class="table-container">
              <table class="table">
                <thead>
                  <tr>
                    <th>用户</th>
                    <th>手机号</th>
                    <th>信用 / 认证</th>
                    <th>技能与履约</th>
                    <th>申请时间</th>
                    <th>接单说明</th>
                    <th class="action-cell">操作</th>
                  </tr>
                </thead>
                <tbody>
                  ${applicants.map(user => `
                    <tr>
                      <td>${user.nickname}<div class="table-note">${user.id}</div></td>
                      <td>${user.phone}</td>
                      <td>信用 ${user.credit}<div class="table-note">${user.cert}</div></td>
                      <td>${user.skills}<div class="table-note">完单 ${user.orders} · 好评率 ${user.rate}</div></td>
                      <td>${user.appliedAt}</td>
                      <td>${user.note}</td>
                      <td class="action-cell"><button class="btn btn-sm" type="button" data-route="user/detail.html?user=${user.id}">查看用户</button></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-task-applicants">关闭</button>
          </div>
        </div>
      </div>
    `;
  },

  renderTaskImages(task) {
    const images = Array.isArray(task.detailImages) ? task.detailImages : [];
    if (!images.length) {
      return '无';
    }
    return AdminCore.renderMediaGallery(images, {
      title: `${task.title || task.project} 补充图片`,
      note: '当前为后台原型图位，真实环境应展示用户上传原图。'
    });
  },

  isCategoryEnableAction(category) {
    return category.status === '停用中' || category.status === '草稿';
  },

  getCategoryStatusClass(status) {
    if (status === '停用中') {
      return 'tag-danger';
    }
    if (status === '草稿') {
      return 'tag-info';
    }
    return 'tag-success';
  },

  renderRelatedOrder(orderId) {
    if (!orderId) {
      return '未生成订单';
    }
    return `<button class="btn btn-sm" type="button" data-route="order/detail.html?order=${orderId}">${orderId}</button>`;
  },

  renderCategoryConfigPage() {
    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="taskCategoryKeyword" style="min-width:220px;" value="${this.state.configList.categoryKeyword || ''}" placeholder="搜索大类名称 / 状态 / 维护人">
          <div class="page-actions account-toolbar-actions">
            <button class="btn btn-primary" type="button" data-action="search-task-categories">搜索</button>
            <button class="btn" type="button" data-action="reset-task-categories">重置</button>
            <button class="btn" type="button" data-action="export-task-categories">导出大类配置</button>
            <button class="btn btn-primary" type="button" data-action="create-task-category">新建任务大类</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>任务大类</th>
              <th>子项目数</th>
              <th>排序</th>
              <th>状态</th>
              <th>最近更新</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${this.filterCategoryConfigs().map(category => `
              <tr>
                <td>
                  <div class="account-primary">${category.label}</div>
                  <div class="table-note">${category.owner}</div>
                </td>
                <td>${category.projectCount}</td>
                <td>${category.sort}</td>
                <td><span class="tag ${this.getCategoryStatusClass(category.status)}">${category.status}</span></td>
                <td>${category.updatedAt}<div class="table-note">${category.owner}</div></td>
                <td class="action-cell">
                  <button class="btn btn-sm" type="button" data-route="task/category-detail.html?category=${category.key}">配置详情</button>
                  <button class="btn btn-sm" type="button" data-action="toggle-task-category-status" data-key="${category.key}">${this.isCategoryEnableAction(category) ? '启用' : '停用'}</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  },

  renderCategoryDetailPage() {
    const category = this.getCurrentCategoryConfig();
    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">任务大类配置详情 · 基础信息 / 排序 / 状态</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="task/category-config.html">返回大类配置</button>
            <button class="btn" type="button" data-action="toggle-task-category-status" data-key="${category.key}">${this.isCategoryEnableAction(category) ? '启用大类' : '停用大类'}</button>
            <button class="btn btn-primary" type="button" data-action="save-task-category">保存配置</button>
          </div>
        </div>
      </div>

      <div class="panel-stack">
        <div class="section-card">
          <div class="card-header">
            <div class="card-title">${category.label}</div>
            <span class="tag ${this.getCategoryStatusClass(category.status)}">${category.status}</span>
          </div>
          <div class="info-grid">
            <div class="info-pair">
              <div class="info-pair-label">大类名称</div>
              <div class="info-pair-value"><input class="input" data-category-key="${category.key}" data-category-field="label" value="${category.label}" style="width:100%;"></div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">展示排序</div>
              <div class="info-pair-value"><input class="input" type="number" data-category-key="${category.key}" data-category-field="sort" value="${category.sort}" style="width:100%;"></div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">关联子项目数</div>
              <div class="info-pair-value">${category.projectCount}</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  renderConfigListPage() {
    const filtered = this.filterConfigs();
    const pagination = this.paginate(filtered, this.state.configList.page);
    this.state.configList.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="taskConfigKeyword" style="min-width:220px;" value="${this.state.configList.keyword}" placeholder="搜索项目ID / 项目名称 / 类目 / 维护人">
          <select class="select" id="taskConfigCategory">
            <option value="">全部大类</option>
            ${this.getCategoryOptions(this.state.configList.category)}
          </select>
          <select class="select" id="taskConfigProject">
            <option value="">全部任务项目</option>
            ${this.getProjectOptions(this.state.configList.category, this.state.configList.project)}
          </select>
          <select class="select" id="taskConfigStatus">
            <option value="">全部状态</option>
            <option value="启用中" ${this.state.configList.status === '启用中' ? 'selected' : ''}>启用中</option>
            <option value="停用中" ${this.state.configList.status === '停用中' ? 'selected' : ''}>停用中</option>
            <option value="草稿" ${this.state.configList.status === '草稿' ? 'selected' : ''}>草稿</option>
          </select>
          <select class="select" id="taskConfigRisk">
            <option value="">风险类型</option>
            <option value="high" ${this.state.configList.risk === 'high' ? 'selected' : ''}>高风险</option>
            <option value="normal" ${this.state.configList.risk === 'normal' ? 'selected' : ''}>常规</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-task-configs">搜索</button>
          <button class="btn" type="button" data-action="reset-task-configs">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-task-configs">导出规则列表</button>
            <button class="btn btn-primary" type="button" data-action="create-task-config">新建配置规则</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>任务大类 / 子分类</th>
              <th>项目编号</th>
              <th>认证要求</th>
              <th>价格区间</th>
              <th>风险 / 保险</th>
              <th>状态</th>
              <th>最近更新</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(config => `
              <tr>
                <td>
                  <div class="account-primary">${config.projectName}</div>
                  <div class="table-note">${config.label}</div>
                </td>
                <td>${config.projectId}<div class="table-note">${config.owner}</div></td>
                <td>${[
                  '实名',
                  config.needsDegree ? '学历' : null,
                  config.needsSkill ? '技能' : null,
                  config.needEmergency ? '紧急联系人' : null
                ].filter(Boolean).join(' / ')}</td>
                <td>¥${config.priceMin} - ¥${config.priceMax}</td>
                <td>${config.highRisk ? '高风险' : '常规'}<div class="table-note">${config.insuranceType}${config.forceInsurance ? ' · 强制保险' : ''}</div></td>
                <td><span class="tag ${config.status === '停用中' ? 'tag-danger' : config.status === '' ? 'tag-warning' : config.status === '草稿' ? 'tag-info' : 'tag-success'}">${config.status}</span></td>
                <td>${config.updatedAt}<div class="table-note">${config.owner}</div></td>
                <td class="action-cell">
                  <button class="btn btn-sm" type="button" data-route="task/config-detail.html?config=${config.key}">配置详情</button>
                  <button class="btn btn-sm" type="button" data-action="toggle-task-config-status" data-key="${config.key}">${config.status === '停用中' ? '启用' : '停用'}</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条服务子项目配置`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderConfigDetailPage() {
    const config = this.getCurrentConfig();

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">服务子项目配置详情 · 基础信息 / 保险与安全须知 / 动态字段规则</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="task/config.html">返回子项目配置</button>
            <button class="btn" type="button" data-action="add-config-field">新增动态字段</button>
            <button class="btn" type="button" data-action="toggle-task-config-status" data-key="${config.key}">${config.status === '停用中' ? '启用规则' : '停用规则'}</button>
            <button class="btn btn-primary" type="button" data-action="save-config">保存并生效</button>
          </div>
        </div>
      </div>

      <div class="panel-stack">
        <div class="section-card">
          <div class="card-header">
            <div class="card-title">项目基础信息</div>
            <span class="tag ${config.highRisk ? 'tag-danger' : 'tag-success'}">${config.highRisk ? '高风险项目' : '常规项目'}</span>
          </div>
          <div class="info-grid">
            <div class="info-pair">
              <div class="info-pair-label">任务大类</div>
              <div class="info-pair-value">
                <select class="select" data-config-key="categoryKey" style="width:100%;">${this.getCategoryOptions(config.categoryKey)}</select>
              </div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">服务子项目名称</div>
              <div class="info-pair-value"><input class="input" data-config-key="projectName" value="${config.projectName}" style="width:100%;"></div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">项目ID</div>
              <div class="info-pair-value"><input class="input" data-config-key="projectId" value="${config.projectId}" style="width:100%;"></div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">展示状态</div>
              <div class="info-pair-value">
                <select class="select" data-config-key="status" style="width:100%;">
                  <option value="启用中" ${config.status === '启用中' ? 'selected' : ''}>启用中</option>
                  <option value="停用中" ${config.status === '停用中' ? 'selected' : ''}>停用中</option>
                  <option value="草稿" ${config.status === '草稿' ? 'selected' : ''}>草稿</option>
                </select>
              </div>
            </div>
            <div class="info-pair">
              <div class="info-pair-label">参考价格区间</div>
              <div class="info-pair-value">
                <input class="input" type="number" data-config-key="priceMin" value="${config.priceMin}" style="width:96px;"> -
                <input class="input" type="number" data-config-key="priceMax" value="${config.priceMax}" style="width:96px; margin-left:8px;"> 元
              </div>
            </div>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header">
            <div class="card-title">保险、安全与认证</div>
          </div>
          <div class="switch-line">
            <div>
              <div style="font-weight:600; color:var(--color-text-primary);">高风险标识</div>
              <div class="switch-copy">高风险任务会触发更严格的审核与保险提示。</div>
            </div>
            <label><input type="checkbox" data-config-check="highRisk" ${config.highRisk ? 'checked' : ''}> 开启</label>
          </div>
          <div class="switch-line">
            <div>
              <div style="font-weight:600; color:var(--color-text-primary);">强制GPS打卡</div>
              <div class="switch-copy">会强制要求在任务执行过程中进行GPS打卡。</div>
            </div>
            <label><input type="checkbox" data-config-check="highRisk" ${config.highRisk ? 'checked' : ''}> 开启</label>
          </div>
          <div class="switch-line">
            <div>
              <div style="font-weight:600; color:var(--color-text-primary);">保险策略</div>
              <div class="switch-copy">勾选强制投保后，必须选择对应保险产品。</div>
            </div>
            <div class="inline-checks">
              <label><input type="checkbox" data-config-check="forceInsurance" ${config.forceInsurance ? 'checked' : ''}> 强制投保</label>
              <select class="select" data-config-key="insuranceType" style="min-width:180px;">
                ${this.getInsuranceOptions(config.insuranceType)}
              </select>
            </div>
          </div>
          <div class="switch-line">
            <div>
              <div style="font-weight:600; color:var(--color-text-primary);">认证要求</div>
              <div class="switch-copy">按项目要求触发学历、技能和紧急联系人校验。</div>
            </div>
            <div class="inline-checks">
              <label><input type="checkbox" data-config-check="needsDegree" ${config.needsDegree ? 'checked' : ''}> 学历认证</label>
              <label><input type="checkbox" data-config-check="needsSkill" ${config.needsSkill ? 'checked' : ''}> 技能认证</label>
              <label><input type="checkbox" data-config-check="needEmergency" ${config.needEmergency ? 'checked' : ''}> 紧急联系人</label>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">安全须知配置（高风险项目必填）</label>
            <textarea class="input" data-config-key="safetyNotice" style="width:100%; min-height:108px; padding:12px 16px; resize:vertical;">${config.safetyNotice || ''}</textarea>
          </div>
        </div>

        <div class="section-card">
          <div class="card-header">
            <div class="card-title">动态字段模板</div>
            <div class="table-note">维护字段类型、对应内容和是否必填；退款类型与金额统一由取消、强制关闭或纠纷裁定时人工确定。</div>
          </div>
          ${this.renderConfigFieldRows(config)}
        </div>
      </div>
    `;
  },

  bindEvents() {
    if (this.bound) {
      return;
    }

    this.root.addEventListener('click', event => {
      const target = event.target.closest('[data-action], [data-task-select], [data-pagination-page]');
      if (!target) {
        return;
      }
      if (target.disabled || target.getAttribute('aria-disabled') === 'true' || target.classList.contains('disabled')) {
        event.preventDefault();
        return;
      }

      if (target.dataset.taskSelect) {
        this.toggleTaskSelection(target.dataset.taskSelect, target.checked);
        return;
      }

      if (target.dataset.paginationPage) {
        if (target.classList.contains('disabled') || target.classList.contains('active')) {
          return;
        }
        if (this.getPageKey() === 'config-list') {
          this.state.configList.page = Number(target.dataset.paginationPage);
        } else {
          this.state.list.page = Number(target.dataset.paginationPage);
        }
        this.render();
        return;
      }

      const action = target.dataset.action;
      switch (action) {
        case 'search-tasks':
          this.state.list.keyword = document.getElementById('taskKeyword').value.trim();
          this.state.list.category = document.getElementById('taskCategory').value;
          this.state.list.project = document.getElementById('taskProject').value;
          this.state.list.status = document.getElementById('taskStatus').value;
          this.state.list.page = 1;
          this.render();
          AdminUI.showMessage('任务列表已刷新筛选结果', 'success');
          break;
        case 'reset-tasks':
          this.state.list.keyword = '';
          this.state.list.category = '';
          this.state.list.project = '';
          this.state.list.status = '';
          this.state.list.tab = 'all';
          this.state.list.page = 1;
          this.state.list.selectedIds = [];
          this.render();
          AdminUI.showMessage('任务筛选条件已重置', 'success');
          break;
        case 'toggle-all-tasks':
          this.toggleAllTasks(target.checked);
          break;
        case 'select-task':
          this.state.list.selectedTaskId = target.dataset.id;
          AdminCore.routeTo(`task/detail.html?task=${target.dataset.id}`);
          break;
        case 'takedown-task':
          this.updateTaskStatus(target.dataset.id, 'takedown', '已下架');
          AdminUI.showMessage(`任务 ${target.dataset.id} 已人工下架，相关日志已记录`, 'warning');
          break;
        case 'batch-takedown-tasks':
          this.batchUpdateTasks('takedown', '已下架');
          break;
        case 'export-tasks':
          AdminUI.showMessage('任务导出任务已创建', 'success');
          break;
        case 'view-task-applicants':
          this.state.list.applicantModalTaskId = target.dataset.id;
          this.render();
          break;
        case 'close-task-applicants':
          this.state.list.applicantModalTaskId = '';
          this.render();
          break;
        case 'search-task-configs':
          this.state.configList.keyword = document.getElementById('taskConfigKeyword').value.trim();
          this.state.configList.category = document.getElementById('taskConfigCategory').value;
          this.state.configList.project = document.getElementById('taskConfigProject').value;
          this.state.configList.status = document.getElementById('taskConfigStatus').value;
          this.state.configList.risk = document.getElementById('taskConfigRisk').value;
          this.state.configList.page = 1;
          this.render();
          AdminUI.showMessage('服务项目规则已刷新筛选结果', 'success');
          break;
        case 'reset-task-configs':
          this.state.configList.keyword = '';
          this.state.configList.category = '';
          this.state.configList.project = '';
          this.state.configList.status = '';
          this.state.configList.risk = '';
          this.state.configList.page = 1;
          this.render();
          AdminUI.showMessage('服务项目规则筛选条件已重置', 'success');
          break;
        case 'export-task-configs':
          AdminUI.showMessage('服务子项目配置导出任务已创建', 'success');
          break;
        case 'export-task-categories':
          AdminUI.showMessage('任务大类配置导出任务已创建', 'success');
          break;
        case 'search-task-categories':
          this.state.configList.categoryKeyword = document.getElementById('taskCategoryKeyword').value.trim();
          this.render();
          AdminUI.showMessage('任务大类配置已刷新筛选结果', 'success');
          break;
        case 'reset-task-categories':
          this.state.configList.categoryKeyword = '';
          this.render();
          AdminUI.showMessage('任务大类筛选条件已重置', 'success');
          break;
        case 'create-task-category':
          this.createTaskCategory();
          break;
        case 'create-task-config':
          this.createTaskConfig();
          break;
        case 'add-config-field': {
          const config = this.getCurrentConfig();
          config.fields.push(this.normalizeFieldRule({ key: `custom_${Date.now()}`, name: '新增字段', type: '文本', required: '否' }));
          AdminStore.set('task_configs', this.configs);
          this.render();
          AdminUI.showMessage('已新增一个字段模板，请继续完善字段信息', 'success');
          break;
        }
        case 'toggle-task-config-status': {
          const config = this.configs.find(item => item.key === target.dataset.key);
          if (!config) {
            return;
          }
          config.status = config.status === '停用中' ? '启用中' : '停用中';
          config.updatedAt = new Date().toLocaleString('zh-CN');
          config.history.unshift(`${config.updatedAt} 超级管理员：${config.status === '停用中' ? '停用' : '启用'}配置规则`);
          AdminStore.set('task_configs', this.configs);
          this.render();
          AdminUI.showMessage(`配置规则已${config.status === '停用中' ? '停用' : '启用'}`, 'success');
          break;
        }
        case 'toggle-task-category-status': {
          const category = this.categoryConfigs.find(item => item.key === target.dataset.key);
          if (!category) {
            return;
          }
          const enabled = this.isCategoryEnableAction(category);
          category.status = enabled ? '启用中' : '停用中';
          category.updatedAt = new Date().toLocaleString('zh-CN');
          category.history.unshift(`${category.updatedAt} 超级管理员：${enabled ? '启用' : '停用'}任务大类`);
          AdminStore.set('task_category_configs', this.categoryConfigs);
          this.render();
          AdminUI.showMessage(`任务大类已${enabled ? '启用' : '停用'}`, 'success');
          break;
        }
        case 'save-task-category': {
          const category = this.getCurrentCategoryConfig();
          if (!String(category.label || '').trim()) {
            AdminUI.showMessage('任务大类名称不能为空', 'error');
            return;
          }
          category.updatedAt = new Date().toLocaleString('zh-CN');
          category.history = category.history || [];
          category.history.unshift(`${category.updatedAt} 超级管理员：保存任务大类配置`);
          AdminStore.set('task_category_configs', this.categoryConfigs);
          AdminUI.showMessage(`任务大类 ${category.label} 已保存`, 'success');
          this.render();
          break;
        }
        case 'save-config': {
          if (!window.confirm('确认保存当前服务子项目配置？保存后会对新发布任务立即生效。')) {
            return;
          }
          const config = this.getCurrentConfig();
          if (config.forceInsurance && (!config.insuranceType || config.insuranceType === '不投保')) {
            AdminUI.showMessage('强制投保时必须选择具体保险产品', 'error');
            return;
          }
          if (config.highRisk && !String(config.safetyNotice || '').trim()) {
            AdminUI.showMessage('高风险子项目必须填写安全须知', 'error');
            return;
          }
          config.updatedAt = new Date().toLocaleString('zh-CN');
          config.history.unshift(`${config.updatedAt} 超级管理员：保存配置并同步操作日志`);
          AdminStore.set('task_configs', this.configs);
          AdminUI.showMessage(`配置 ${config.projectId} 已保存并立即生效`, 'success');
          this.render();
          break;
        }
        default:
          break;
      }
    });

    this.root.addEventListener('change', event => {
      const target = event.target;
      if (target.id === 'taskCategory') {
        this.state.list.category = target.value;
        this.state.list.project = '';
        this.state.list.page = 1;
        this.render();
        return;
      }
      if (target.id === 'taskConfigCategory') {
        this.state.configList.category = target.value;
        this.state.configList.project = '';
        this.state.configList.page = 1;
        this.render();
        return;
      }
      if (target.dataset.categoryKey) {
        const category = this.categoryConfigs.find(item => item.key === target.dataset.categoryKey);
        if (!category) {
          return;
        }
        if (target.dataset.categoryCheck) {
          category[target.dataset.categoryCheck] = target.checked;
        } else if (target.dataset.categoryField) {
          category[target.dataset.categoryField] = target.type === 'number' ? Number(target.value) : target.value;
        }
        category.updatedAt = new Date().toLocaleString('zh-CN');
        AdminStore.set('task_category_configs', this.categoryConfigs);
        return;
      }
      const config = this.getCurrentConfig();
      if (target.dataset.configKey) {
        config[target.dataset.configKey] = target.value;
        if (target.dataset.configKey === 'categoryKey') {
          const category = this.getCategory(target.value);
          config.label = category ? category.label : config.label;
        }
        AdminStore.set('task_configs', this.configs);
        return;
      }

      if (target.dataset.configCheck) {
        config[target.dataset.configCheck] = target.checked;
        AdminStore.set('task_configs', this.configs);
        return;
      }

      if (target.dataset.fieldIndex) {
        const field = config.fields[Number(target.dataset.fieldIndex)];
        if (!field) {
          return;
        }
        field[target.dataset.fieldKey] = target.value;
        AdminStore.set('task_configs', this.configs);
      }
    });

    this.bound = true;
  },

  toggleTaskSelection(id, checked) {
    const selected = new Set(this.state.list.selectedIds);
    if (checked) {
      selected.add(id);
    } else {
      selected.delete(id);
    }
    this.state.list.selectedIds = Array.from(selected);
    this.state.list.selectedTaskId = id;
    this.render();
  },

  toggleAllTasks(checked) {
    const visibleIds = this.paginate(this.filterTasks(), this.state.list.page, this.taskPageSize).items.map(item => item.id);
    const selected = new Set(this.state.list.selectedIds);
    visibleIds.forEach(id => {
      if (checked) {
        selected.add(id);
      } else {
        selected.delete(id);
      }
    });
    this.state.list.selectedIds = Array.from(selected);
    this.render();
  },

  updateTaskStatus(id, status, label) {
    const task = this.tasks.find(item => item.id === id);
    if (!task) {
      return;
    }
    task.status = status;
    task.statusLabel = label;
    this.state.list.selectedTaskId = id;
    AdminStore.set('task_items', this.tasks);
    this.render();
  },

  batchUpdateTasks(status, label) {
    if (!this.state.list.selectedIds.length) {
      AdminUI.showMessage('请先选择需要批量处理的任务', 'warning');
      return;
    }
    this.tasks.forEach(task => {
      if (this.state.list.selectedIds.includes(task.id)) {
        task.status = status;
        task.statusLabel = label;
      }
    });
    this.state.list.selectedIds = [];
    AdminStore.set('task_items', this.tasks);
    this.render();
    AdminUI.showMessage(`已完成 ${label} 批量处理`, 'success');
  }
,

  createTaskCategory() {
    const timestamp = new Date().toLocaleString('zh-CN');
    const key = `custom_category_${Date.now()}`;
    const category = {
      key,
      label: '新任务大类',
      desc: '',
      status: '草稿',
      showInClient: false,
      sort: this.categoryConfigs.length + 1,
      projectCount: 0,
      updatedAt: timestamp,
      owner: '超级管理员',
      history: [`${timestamp} 超级管理员：新建任务大类配置`]
    };
    this.categoryConfigs.unshift(category);
    AdminStore.set('task_category_configs', this.categoryConfigs);
    AdminCore.routeTo(`task/category-detail.html?category=${key}`);
  },

  createTaskConfig() {
    const timestamp = new Date().toLocaleString('zh-CN');
    const nextIndex = String(this.configs.length + 1).padStart(2, '0');
    const config = {
      key: `custom_${Date.now()}`,
      projectKey: `custom_${Date.now()}`,
      categoryKey: 'skill',
      label: '技能类',
      projectId: `CFG-NEW-${nextIndex}`,
      projectName: '待命名服务子项目',
      highRisk: false,
      insuranceType: '不投保',
      forceInsurance: false,
      needsDegree: false,
      needsSkill: false,
      needEmergency: true,
      cancelStrategy: '默认不允许服务中取消，未命中则转纠纷',
      status: '草稿',
      updatedAt: timestamp,
      owner: '超级管理员',
      priceMin: '0',
      priceMax: '0',
      fields: [
        this.normalizeFieldRule({ key: 'serviceTime', name: '服务时段', type: '日期', required: '是' })
      ],
      safetyNotice: '请明确服务边界、时间地点、交付标准和风险提示。',
      history: [`${timestamp} 超级管理员：新建配置规则`]
    };
    this.configs.unshift(config);
    AdminStore.set('task_configs', this.configs);
    AdminCore.routeTo(`task/config-detail.html?config=${config.key}`);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  TaskModule.init();
});
