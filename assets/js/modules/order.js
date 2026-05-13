const OrderModule = {
  pageSize: 6,

  state: {
    list: {
      keyword: '',
      status: '',
      risk: '',
      page: 1
    },
    dispute: {
      keyword: '',
      status: '',
      priority: '',
      page: 1,
      selectedId: 'DP-7113',
      showPartialModal: false,
      refundMode: 'partial'
    },
    detail: {
      showChatModal: false,
      showCloseOrderModal: false,
      closingId: ''
    },
    sos: {
      keyword: '',
      role: '',
      status: '',
      sla: '',
      page: 1,
      quickFilter: '',
      showCloseModal: false,
      closingId: ''
    }
  },

  records: [
    {
      id: 'TASK-240501-06',
      objectType: 'task',
      objectTypeLabel: '任务',
      project: '上门喂猫',
      category: '陪伴照护类',
      publisher: { name: '林同学', id: 'U-13021', phone: '138****0421', credit: 91, cert: '实名' },
      worker: null,
      amount: '¥120',
      insurance: '已投保',
      urgent: '急单置顶中',
      status: 'waiting',
      statusLabel: '待接单',
      serviceCodeStatus: '未生成',
      proofStatus: '不适用',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 0,
      createdAt: '2026-05-01 09:18',
      updatedAt: '2026-05-01 09:24',
      serviceAt: '2026-05-02 19:00',
      linkedIds: { task_id: 'TASK-240501-06' },
      note: '任务已发布并支付，当前还没有服务者申请。待接单阶段不应展示服务码、打卡或完成凭证动作。',
      matching: ['曝光半径：10km', '急单置顶剩余：5小时32分', '申请人数：0'],
      timeline: [
        { title: '任务发布', time: '2026-05-01 09:18', copy: '发布者支付任务金额、保险费和急单置顶费，任务进入待接单。' },
        { title: '等待申请', time: '当前', copy: '尚未产生接单申请，不生成履约订单。' }
      ],
      finance: ['任务金额 ¥120', '保险费 ¥2', '急单置顶费 ¥5', '订单实收金额暂未进入履约结算']
    },
    {
      id: 'TASK-240426-14',
      objectType: 'task',
      objectTypeLabel: '任务',
      project: '健康陪诊',
      category: '生活服务类',
      publisher: { name: '周阿姨', id: 'U-11092', phone: '136****9220', credit: 94, cert: '实名' },
      worker: null,
      amount: '¥188',
      insurance: '已投保',
      urgent: '普通',
      status: 'applying',
      statusLabel: '已申请',
      serviceCodeStatus: '未生成',
      proofStatus: '不适用',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 3,
      createdAt: '2026-04-26 14:05',
      updatedAt: '2026-04-26 15:18',
      serviceAt: '2026-04-27 09:00',
      linkedIds: { task_id: 'TASK-240426-14' },
      note: '任务已有 3 位服务者申请。发布者确认选人后才会生成 order_id，其余申请转为未接单成功。',
      matching: ['申请人数：3', '候选人排序：认证完整度 > 信用分 > 完单数 > 申请时间', '选人事务尚未执行'],
      applicationSummary: ['APP-240426-09 / 宋栀 / 信用 96 / 已实名+学历', 'APP-240426-11 / 陆明远 / 信用 92 / 已实名', 'APP-240426-13 / 何川 / 信用 89 / 已实名'],
      timeline: [
        { title: '任务发布', time: '2026-04-26 14:05', copy: '任务进入待接单。' },
        { title: '收到申请', time: '2026-04-26 15:18', copy: '已有 3 条有效申请，任务主状态变为已申请。' }
      ],
      finance: ['任务金额 ¥188', '保险费 ¥2', '急单置顶费 ¥0', '选人前不产生服务码和履约结算']
    },
    {
      id: 'APP-240426-09',
      objectType: 'application',
      objectTypeLabel: '接单申请',
      project: '健康陪诊',
      category: '生活服务类',
      publisher: { name: '周阿姨', id: 'U-11092', phone: '136****9220', credit: 94, cert: '实名' },
      worker: { name: '宋栀', id: 'U-23762', phone: '137****3762', credit: 96, cert: '实名+学历', skills: '陪诊经验 12 单' },
      amount: '¥188',
      insurance: '已投保',
      urgent: '普通',
      status: 'application_pending',
      statusLabel: '申请中',
      serviceCodeStatus: '未生成',
      proofStatus: '不适用',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 1,
      createdAt: '2026-04-26 15:09',
      updatedAt: '2026-04-26 15:09',
      serviceAt: '2026-04-27 09:00',
      linkedIds: { task_id: 'TASK-240426-14', application_id: 'APP-240426-09' },
      note: '这是服务者视角的申请记录，只能查看申请状态，不应展示履约按钮。',
      matching: ['申请说明：可陪同挂号、检查、取药', '发布者尚未选人', '若未选中会自动归档为未接单成功'],
      timeline: [
        { title: '提交申请', time: '2026-04-26 15:09', copy: '服务者提交接单申请。' },
        { title: '等待选人', time: '当前', copy: '发布者未确认服务者，申请仍处于申请中。' }
      ],
      finance: ['申请对象不产生资金流水', '资金仍托管在任务支付单下']
    },
    {
      id: 'APP-240420-17',
      objectType: 'application',
      objectTypeLabel: '接单申请',
      project: '宠物照看',
      category: '陪伴照护类',
      publisher: { name: '夏先生', id: 'U-10902', phone: '135****0902', credit: 90, cert: '实名' },
      worker: { name: '乔一然', id: 'U-11571', phone: '139****1571', credit: 88, cert: '实名', skills: '宠物照看 4 单' },
      amount: '¥96',
      insurance: '已投保',
      urgent: '普通',
      status: 'application_failed',
      statusLabel: '未接单成功',
      serviceCodeStatus: '未生成',
      proofStatus: '不适用',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 1,
      createdAt: '2026-04-20 10:12',
      updatedAt: '2026-04-20 11:02',
      serviceAt: '2026-04-21 20:00',
      linkedIds: { task_id: 'TASK-240420-08', application_id: 'APP-240420-17', order_id: 'OD-240321-08' },
      note: '发布者选择了其他服务者，本申请归档为未接单成功。后台只保留链路追溯。',
      matching: ['未选中原因：发布者选择其他服务者', '对应履约订单：OD-240321-08'],
      timeline: [
        { title: '提交申请', time: '2026-04-20 10:12', copy: '服务者提交接单申请。' },
        { title: '未接单成功', time: '2026-04-20 11:02', copy: '发布者选择其他服务者，本申请自动归档。' }
      ],
      finance: ['申请对象不产生资金流水', '履约资金进入 OD-240321-08']
    },
    {
      id: 'OD-240426-07',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '校园资料整理',
      category: '学习辅助类',
      publisher: { name: '许知夏', id: 'U-23541', phone: '138****3541', credit: 92, cert: '实名' },
      worker: { name: '陈泊', id: 'U-23547', phone: '137****3547', credit: 95, cert: '实名+学历', skills: '文档整理 18 单', emergency: '紧急联系人已留存' },
      amount: '¥180',
      insurance: '不投保',
      urgent: '普通',
      status: 'ready',
      statusLabel: '待服务',
      serviceCodeStatus: '服务码 629314 / 未核验',
      proofStatus: '未提交',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 4,
      createdAt: '2026-04-26 16:02',
      updatedAt: '2026-04-26 16:04',
      serviceAt: '2026-04-27 15:00',
      linkedIds: { task_id: 'TASK-240426-07', application_id: 'APP-240426-21', order_id: 'OD-240426-07' },
      note: '选人成功后生成服务码，订单进入待服务。此阶段可聊天、展示精确地址、取消订单。',
      remarks: [
        { operator: '系统', time: '2026-04-26 16:04', text: '服务码已生成，等待服务者核验。' }
      ],
      timeline: [
        { title: '任务发布', time: '2026-04-26 14:30', copy: '发布者发布校园资料整理任务。' },
        { title: '申请提交', time: '2026-04-26 15:40', copy: '陈泊提交申请。' },
        { title: '确认选人', time: '2026-04-26 16:02', copy: '发布者确认陈泊履约，生成 OD-240426-07。' },
        { title: '生成服务码', time: '2026-04-26 16:04', copy: '服务码 629314 已生成，等待服务者核验。' }
      ],
      proofs: ['当前未提交完成凭证'],
      checkins: ['待服务阶段不可打卡'],
      gps: ['未开始服务，无 GPS 轨迹'],
      chat: ['16:06 发布者：资料在图书馆三楼交接', '16:08 服务者：收到，我会提前十分钟到'],
      finance: ['任务金额 ¥180', '优惠券 ¥20', '订单实收金额 ¥160', '服务者预计实得 ¥144']
    },
    {
      id: 'OD-240328-03',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '英语口语陪练',
      category: '技能类',
      publisher: { name: '家长账号 H-2281', id: 'U-9452', phone: '136****2281', credit: 91, cert: '实名' },
      worker: { name: '季明川', id: 'U-10771', phone: '137****0771', credit: 93, cert: '实名+学历', skills: '英语口语 26 单', emergency: '紧急联系人已留存' },
      amount: '¥150',
      insurance: '不投保',
      urgent: '普通',
      status: 'serving',
      statusLabel: '服务中',
      serviceCodeStatus: '服务码已核验 / 19:31 开始',
      proofStatus: '未提交',
      hasDispute: false,
      hasSos: false,
      hasProof: false,
      applicants: 2,
      createdAt: '2026-04-27 07:42',
      updatedAt: '2026-04-27 19:44',
      serviceAt: '2026-04-27 19:30',
      linkedIds: { task_id: 'TASK-240328-03', application_id: 'APP-240328-12', order_id: 'OD-240328-03' },
      note: '线上口语陪练正在服务中，需要关注服务时长打卡。服务完成后由服务者提交完成凭证。',
      remarks: [
        { operator: '客服专员 周知夏', time: '2026-04-27 19:44', text: '已提醒双方保留课程截图和时长记录。' }
      ],
      timeline: [
        { title: '确认选人', time: '2026-04-27 07:42', copy: '发布者确认季明川履约。' },
        { title: '服务码核验通过', time: '2026-04-27 19:31', copy: '双方订单同步进入服务中。' },
        { title: '服务中打卡', time: '2026-04-27 19:44', copy: '服务者上传第一段课程记录。' }
      ],
      proofs: ['当前未提交完成凭证'],
      checkins: [
        { time: '19:44', location: '线上服务', text: '课程开始 13 分钟，上传语音陪练截图 1 张', images: ['语音陪练截图 1 张'] }
      ],
      gps: ['线上服务，不要求 GPS'],
      chat: ['19:25 发布者：今天重点练自我介绍', '19:31 系统：服务码核验通过', '19:44 服务者：第一轮跟读已完成'],
      finance: ['任务金额 ¥150', '优惠券 ¥0', '订单实收金额 ¥150', '服务者预计实得 ¥135']
    },
    {
      id: 'OD-240321-08',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '宠物照看',
      category: '陪伴照护类',
      publisher: { name: '夏先生', id: 'U-10902', phone: '135****0902', credit: 90, cert: '实名' },
      worker: { name: '陈知栀', id: 'U-10382', phone: '139****0382', credit: 96, cert: '实名', skills: '宠物照看 31 单', emergency: '紧急联系人已留存' },
      amount: '¥96',
      insurance: '已投保',
      urgent: '普通',
      status: 'pending_confirm',
      statusLabel: '待确认完成',
      serviceCodeStatus: '服务码已核验 / 19:02 开始',
      proofStatus: '完成凭证已提交',
      hasDispute: false,
      hasSos: false,
      hasProof: true,
      applicants: 5,
      createdAt: '2026-04-25 18:11',
      updatedAt: '2026-04-26 21:24',
      serviceAt: '2026-04-26 19:00',
      linkedIds: { task_id: 'TASK-240420-08', application_id: 'APP-240420-21', order_id: 'OD-240321-08' },
      note: '服务者已提交完成凭证，等待发布者确认。240 小时未处理且无纠纷会自动确认完成。',
      remarks: [
        { operator: '系统', time: '2026-04-26 21:24', text: '完成凭证已提交，自动确认倒计时开始。' }
      ],
      timeline: [
        { title: '确认选人', time: '2026-04-25 18:11', copy: '发布者确认陈知栀履约。' },
        { title: '服务码核验', time: '2026-04-26 19:02', copy: '订单进入服务中。' },
        { title: '提交完成凭证', time: '2026-04-26 21:24', copy: '服务者上传照片和服务说明，订单进入待确认完成。' },
        { title: '自动确认倒计时', time: '截止 2026-05-06 21:24', copy: '发布者 240 小时内未确认且无纠纷时自动完成。' }
      ],
      proofs: ['猫粮补充照片', '猫砂清理照片', '门锁复位照片', '完成说明：猫咪状态正常'],
      checkins: [
        { time: '19:04', location: '小区门口', text: '到达小区门口，GPS 精度 21m', images: ['小区门口打卡照片'] },
        { time: '20:10', location: '屋内', text: '完成喂食换水，照片 2 张', images: ['喂食照片', '换水照片'] },
        { time: '21:20', location: '门口', text: '离场前确认门锁', images: ['门锁复位照片'] }
      ],
      gps: ['19:04 中关村南大街小区北门 21m', '20:10 2号楼 3 单元 28m', '21:20 小区北门 19m'],
      chat: ['19:02 系统：服务码核验通过', '20:13 服务者：猫粮和水都补好了', '21:24 系统：服务者已提交完成凭证'],
      finance: ['任务金额 ¥96', '保险费 ¥2', '优惠券 ¥0', '订单实收金额 ¥96', '服务者预计实得 ¥86.4']
    },
    {
      id: 'OD-240309-02',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '代办跑腿',
      category: '常用任务',
      publisher: { name: '沈枝意', id: 'U-12031', phone: '138****2031', credit: 95, cert: '实名' },
      worker: { name: '顾温澜', id: 'U-9981', phone: '136****9981', credit: 92, cert: '实名', skills: '跑腿代办 42 单', emergency: '紧急联系人已留存' },
      amount: '¥58',
      insurance: '不投保',
      urgent: '普通',
      status: 'completed',
      statusLabel: '已完成',
      serviceCodeStatus: '服务码已核验',
      proofStatus: '完成凭证已确认',
      hasDispute: false,
      hasSos: false,
      hasProof: true,
      applicants: 3,
      createdAt: '2026-04-18 10:12',
      updatedAt: '2026-04-18 16:02',
      serviceAt: '2026-04-18 14:30',
      linkedIds: { task_id: 'TASK-240309-02', application_id: 'APP-240309-05', order_id: 'OD-240309-02' },
      note: '发布者已确认完成，当前等待双方评价。已完成状态不允许再发起新纠纷。',
      remarks: [
        { operator: '运营专员 王芮宁', time: '2026-04-18 16:10', text: '完成凭证和确认节点完整，无需人工跟进。' }
      ],
      timeline: [
        { title: '确认选人', time: '2026-04-18 10:12', copy: '发布者确认顾温澜履约。' },
        { title: '服务码核验', time: '2026-04-18 14:31', copy: '订单进入服务中。' },
        { title: '提交完成凭证', time: '2026-04-18 15:28', copy: '服务者上传取件回执。' },
        { title: '发布者确认完成', time: '2026-04-18 16:02', copy: '订单进入已完成，评价窗口开启。' }
      ],
      proofs: ['取件回执照片', '交付照片', '完成说明：资料已送达'],
      checkins: [
        { time: '14:31', location: '学院路', text: '服务开始', images: ['服务开始定位截图'] },
        { time: '15:04', location: '打印店', text: '到达取件点', images: ['取件点照片'] },
        { time: '15:28', location: '教学楼门口', text: '完成交付', images: ['交付照片'] }
      ],
      gps: ['14:31 学院路 18m', '15:04 打印店 23m', '15:28 教学楼门口 20m'],
      chat: ['15:28 服务者：资料已送到教学楼门口', '16:02 系统：发布者已确认完成'],
      finance: ['任务金额 ¥58', '平台抽佣 ¥5.8', '服务者实得 ¥52.2', '待评价完成后归档']
    },
    {
      id: 'OD-240228-17',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '图书馆占座提醒',
      category: '校园互助类',
      publisher: { name: '何同学', id: 'U-11017', phone: '137****1017', credit: 93, cert: '实名' },
      worker: { name: '陆明远', id: 'U-24031', phone: '139****4031', credit: 97, cert: '实名+学历', skills: '校园互助 67 单', emergency: '紧急联系人已留存' },
      amount: '¥30',
      insurance: '不投保',
      urgent: '普通',
      status: 'rated',
      statusLabel: '已评价',
      serviceCodeStatus: '服务码已核验',
      proofStatus: '完成凭证已确认',
      hasDispute: false,
      hasSos: false,
      hasProof: true,
      applicants: 2,
      createdAt: '2026-04-12 08:05',
      updatedAt: '2026-04-12 11:42',
      serviceAt: '2026-04-12 09:00',
      linkedIds: { task_id: 'TASK-240228-17', application_id: 'APP-240228-20', order_id: 'OD-240228-17' },
      note: '双方已评价，订单已归档。聊天只读，地址重新脱敏。',
      remarks: [
        { operator: '系统', time: '2026-04-12 12:00', text: '订单已评价并完成结算。' }
      ],
      timeline: [
        { title: '服务完成', time: '2026-04-12 10:14', copy: '发布者确认完成。' },
        { title: '双方评价', time: '2026-04-12 11:42', copy: '双方评价均完成，订单进入已评价。' },
        { title: '收益结转', time: '2026-04-12 12:00', copy: '服务者收益已进入钱包可提现余额。' }
      ],
      proofs: ['现场照片', '完成说明：已按时提醒并协助找到座位'],
      checkins: [
        { time: '09:02', location: '图书馆入口', text: '到达图书馆', images: ['图书馆入口打卡照片'] },
        { time: '10:14', location: '阅览区', text: '完成服务', images: ['现场照片'] }
      ],
      gps: ['09:02 图书馆入口 17m'],
      chat: ['11:42 系统：双方已完成评价，聊天输入已关闭'],
      finance: ['任务金额 ¥30', '平台抽佣 ¥3', '服务者实得 ¥27', '已结算']
    },
    {
      id: 'OD-240317-19',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '陪诊协助',
      category: '生活服务类',
      publisher: { name: '陈知栀', id: 'U-10382', phone: '139****0382', credit: 96, cert: '实名' },
      worker: { name: '沈枝意', id: 'U-12031', phone: '138****2031', credit: 91, cert: '实名+学历', skills: '陪诊服务 16 单', emergency: '紧急联系人已留存' },
      amount: '¥138',
      insurance: '已投保',
      urgent: '急单置顶已结束',
      status: 'dispute',
      statusLabel: '纠纷中',
      serviceCodeStatus: '服务码已核验 / 14:02 开始',
      proofStatus: '完成凭证已提交',
      hasDispute: true,
      disputeId: 'DP-7113',
      hasSos: false,
      hasProof: true,
      applicants: 6,
      createdAt: '2026-04-24 09:36',
      updatedAt: '2026-04-26 20:08',
      serviceAt: '2026-04-24 14:00',
      linkedIds: { task_id: 'TASK-240317-19', application_id: 'APP-240317-11', order_id: 'OD-240317-19' },
      note: '发布者质疑完成凭证不足，服务者补交了医院票据和聊天记录。纠纷中可聊天、补充证据，资金争议冻结。',
      remarks: [
        { operator: '客服专员 周知夏', time: '2026-04-26 20:30', text: '已要求双方补充医院票据、导诊单与聊天上下文。' },
        { operator: '风控专员 蒋予安', time: '2026-04-26 21:10', text: '暂未发现站外交易，建议优先核对服务码和 GPS 证据。' }
      ],
      timeline: [
        { title: '订单创建', time: '2026-04-24 09:36', copy: '发布者确认服务者并生成履约订单。' },
        { title: '服务码核验', time: '2026-04-24 14:02', copy: '服务者在医院现场完成服务码核验。' },
        { title: '上传完成凭证', time: '2026-04-24 17:08', copy: '上传缴费票据、导诊单照片与服务说明。' },
        { title: '发起纠纷', time: '2026-04-26 20:08', copy: '发布者认为完成凭证不足，请求退款。' }
      ],
      proofs: ['完成凭证照片 3 张', '缴费票据 1 张', '导诊单照片', '服务说明：陪同挂号、缴费、取药'],
      checkins: [
        { time: '14:06', location: '南山医院门诊楼', text: '到达南山医院门诊楼', images: ['门诊楼到达照片'] },
        { time: '15:12', location: '门诊缴费处', text: '门诊缴费处打卡', images: ['缴费处打卡照片', '缴费票据照片'] },
        { time: '16:01', location: '药房出口', text: '药房出口打卡', images: ['药房出口照片'] }
      ],
      gps: ['14:06 南山医院门诊楼 22m', '15:12 门诊缴费处 31m', '16:01 药房出口 19m'],
      chat: ['14:02 系统：服务码核验通过', '14:08 发布者：老人已经到门诊楼一楼', '14:10 服务者：我已接到老人，开始排队取号', '15:12 服务者：已到缴费处，预计还要等 20 分钟', '16:10 服务者：药已经取好，我把医嘱重点发您', '17:08 系统：服务者上传完成凭证', '20:08 系统：发布者发起纠纷'],
      financeSummary: { taskAmount: '¥138', insuranceFee: '¥2', urgentFee: '¥10', coupon: '-¥8', paidAmount: '¥142', tipAmount: '¥0', commission: '¥13.8', workerIncome: '争议冻结', refundAmount: '待裁定', platformIncome: '争议冻结' }
    },
    {
      id: 'OD-240305-11',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '活动布场协助',
      category: '活动协助类',
      publisher: { name: 'Studio M', id: 'U-10116', phone: '135****0116', credit: 87, cert: '企业实名' },
      worker: { name: '周南栀', id: 'U-10944', phone: '138****0944', credit: 82, cert: '实名', skills: '活动协助 9 单', emergency: '紧急联系人已留存' },
      amount: '¥260',
      insurance: '活动险',
      urgent: '急单置顶已结束',
      status: 'refunded',
      statusLabel: '已退款',
      serviceCodeStatus: '服务码已核验',
      proofStatus: '完成凭证存在争议',
      hasDispute: true,
      disputeId: 'DP-7098',
      hasSos: false,
      hasProof: true,
      applicants: 8,
      createdAt: '2026-04-15 08:22',
      updatedAt: '2026-04-15 22:16',
      serviceAt: '2026-04-15 20:00',
      linkedIds: { task_id: 'TASK-240305-11', application_id: 'APP-240305-18', order_id: 'OD-240305-11' },
      note: '纠纷裁定全额退款，责任方为服务方责任，关联信用扣分已生效。已退款订单不得继续履约或评价。',
      remarks: [
        { operator: '客服专员 周知夏', time: '2026-04-15 22:16', text: '线下支付证据成立，已执行全额退款并同步信用扣分。' }
      ],
      timeline: [
        { title: '服务开始', time: '2026-04-15 20:02', copy: '服务码核验通过。' },
        { title: '纠纷发起', time: '2026-04-15 22:14', copy: '发布者提交跳单与线下支付证据。' },
        { title: '全额退款', time: '2026-04-15 22:16', copy: '平台裁定全额退款，责任方：服务方责任，服务者信用分 -5（87 -> 82）。' }
      ],
      proofs: ['聊天截图', '转账截图', '风控命中日志'],
      checkins: [
        { time: '19:52', location: '活动场馆门口', text: '活动场馆门口 18m', images: ['场馆门口打卡照片'] }
      ],
      gps: ['19:52 活动场馆门口 18m'],
      chat: ['20:02 系统：服务码核验通过', '21:02 [已拦截-风险等级2] 疑似线下支付引导', '21:04 发布者：请按平台流程继续沟通', '22:14 系统：发布者发起纠纷', '22:16 系统：纠纷处理结果为全额退款'],
      financeSummary: { taskAmount: '¥260', insuranceFee: '¥5', urgentFee: '¥10', coupon: '-¥20', paidAmount: '¥255', tipAmount: '¥0', commission: '已冲回', workerIncome: '¥0', refundAmount: '¥240', platformIncome: '急单置顶费 ¥10' }
    },
    {
      id: 'OD-240330-16',
      objectType: 'order',
      objectTypeLabel: '履约订单',
      project: '搬宿舍体力协助',
      category: '体能类',
      publisher: { name: '顾温澜', id: 'U-9981', phone: '136****9981', credit: 92, cert: '实名' },
      worker: { name: '林见川', id: 'U-11816', phone: '139****1816', credit: 90, cert: '实名', skills: '体力协助 11 单', emergency: '紧急联系人已留存' },
      amount: '¥188',
      insurance: '已投保',
      urgent: '急单置顶已结束',
      status: 'cancelled',
      statusLabel: '已取消',
      serviceCodeStatus: '服务前取消 / 未核验',
      proofStatus: '未提交',
      hasDispute: false,
      hasSos: true,
      hasProof: false,
      applicants: 4,
      createdAt: '2026-04-27 11:02',
      updatedAt: '2026-04-27 12:30',
      serviceAt: '2026-04-27 21:00',
      linkedIds: { task_id: 'TASK-240330-16', application_id: 'APP-240330-19', order_id: 'OD-240330-16' },
      note: '服务前触发 SOS 后由平台介入取消，已按取消矩阵回写信用与退款。',
      remarks: [
        { operator: '安全客服 值班组', time: '2026-04-27 12:30', text: '已确认 SOS 为误触，但双方取消诉求一致，按服务前取消处理。' }
      ],
      timeline: [
        { title: '确认选人', time: '2026-04-27 11:02', copy: '订单进入待服务。' },
        { title: 'SOS 记录', time: '2026-04-27 12:12', copy: '用户误触 SOS，平台安全团队回访。' },
        { title: '订单取消', time: '2026-04-27 12:30', copy: '平台确认取消，任务金额和可退保险费原路退回。' }
      ],
      proofs: ['无完成凭证'],
      checkins: ['服务前取消，无打卡'],
      gps: ['SOS 触发定位：宿舍区东门 26m'],
      chat: ['12:12 系统：用户触发 SOS', '12:18 客服：已完成电话回访', '12:30 系统：订单已取消，聊天输入关闭'],
      financeSummary: { taskAmount: '¥188', insuranceFee: '¥2', urgentFee: '¥5', coupon: '¥0', paidAmount: '¥195', tipAmount: '¥0', commission: '¥0', workerIncome: '¥0', refundAmount: '¥190', platformIncome: '急单置顶费 ¥5' }
    }
  ],

  disputes: [
    {
      id: 'DP-7113',
      orderId: 'OD-240317-19',
      type: '完成凭证争议',
      maxRefund: '¥140',
      publisher: '陈知栀',
      worker: '沈枝意',
      submittedAt: '2026-04-26 20:08',
      status: 'frozen',
      statusLabel: '已冻结',
      priority: 'P1',
      priorStatus: 'pending_confirm',
      statements: {
        publisher: { disputeType: '完成凭证不足', description: '发布者认为服务未按约定完成，缺少关键陪诊过程照片，希望平台核查服务是否完整履约。', images: ['发布者上传：医院候诊截图', '发布者上传：沟通截图'] },
        worker: { disputeType: '已按约履约', description: '服务者称已陪同挂号、缴费、取药，并补交医院票据、导诊单与现场打卡照片。', images: ['服务者上传：缴费票据', '服务者上传：导诊单照片', '服务者上传：药房出口照片'] }
      },
      statement: '发布者认为服务未按约定完成，服务者称已陪诊并补交票据。',
      evidence: ['聊天记录 8 条', '完成凭证照片 3 张', 'GPS 打卡 4 条', '医院票据 1 张'],
      gps: ['14:06 南山医院门诊楼 22m', '15:12 门诊缴费处 31m', '16:01 药房出口 19m'],
      currentHolder: '客服专员待处理',
      freezeDeadline: '已超过 24 小时，工单已冻结'
    },
    {
      id: 'DP-7107',
      orderId: 'OD-240328-03',
      type: '服务中提前离场',
      maxRefund: '¥150',
      publisher: '家长账号 H-2281',
      worker: '季明川',
      submittedAt: '2026-04-27 20:16',
      status: 'pending_freeze',
      statusLabel: '待冻结',
      priority: 'P2',
      priorStatus: 'serving',
      statements: {
        publisher: { disputeType: '服务时长不足', description: '发布者反馈课程未达到约定时长，服务者中途离开线上会议，需要核对课程截图和聊天时间。', images: ['发布者上传：会议时长截图'] },
        worker: { disputeType: '已完成主要服务', description: '服务者说明已完成核心口语陪练内容，后续因网络问题提前结束，并愿意接受平台按证据裁定。', images: ['服务者上传：课程记录截图'] }
      },
      statement: '双方对实际陪练时长认定不一致，需要核对课程截图和聊天时间。',
      evidence: ['聊天记录 5 条', '阶段打卡 2 次', '图片凭证 1 张'],
      gps: ['线上服务，无 GPS'],
      currentHolder: '客服专员认领中',
      freezeDeadline: '距冻结还有 6 小时'
    },
    {
      id: 'DP-7101',
      orderId: 'OD-240424-08',
      type: '服务中取消裁定',
      maxRefund: '¥188',
      publisher: '周阿姨',
      worker: '宋栀',
      submittedAt: '2026-04-24 14:28',
      status: 'cancel_arbitration',
      statusLabel: '取消裁定中',
      priority: 'P1',
      priorStatus: 'serving',
      statements: {
        publisher: { disputeType: '客观无法履约', description: '发布者申请服务中取消，称医院临时改号导致后续服务无法继续。', images: ['发布者上传：医院通知截图'] },
        worker: { disputeType: '已部分履约', description: '服务者已完成挂号协助和候诊陪同，要求平台人工裁定部分退款金额。', images: ['服务者上传：候诊区打卡'] }
      },
      statement: '服务中取消进入平台裁定，订单主状态仍保持服务中，待裁定后更新最终结果。',
      evidence: ['聊天记录 6 条', '阶段打卡 2 次', '医院通知截图 1 张'],
      gps: ['09:04 医院门诊楼 24m', '10:16 候诊区 18m'],
      currentHolder: '取消裁定队列待处理',
      freezeDeadline: '取消裁定中，可直接处理'
    },
    {
      id: 'DP-7098',
      orderId: 'OD-240305-11',
      type: '跳单与线下支付',
      maxRefund: '¥240',
      publisher: 'Studio M',
      worker: '周南栀',
      submittedAt: '2026-04-15 22:14',
      status: 'full_refund',
      statusLabel: '已全额退款',
      priority: 'P1',
      priorStatus: 'dispute',
      statements: {
        publisher: { disputeType: '跳单与线下支付', description: '发布者提交聊天截图与转账截图，要求平台核查服务者诱导线下支付。', images: ['发布者上传：聊天截图', '发布者上传：转账截图'] },
        worker: { disputeType: '未有效反证', description: '服务者未能提供有效反证，平台依据聊天与转账材料完成裁定。', images: [] }
      },
      statement: '平台已确认线下支付行为，订单已退款归档。',
      evidence: ['聊天截图', '转账截图', '风控命中日志'],
      gps: ['19:52 活动场馆门口 18m'],
      currentHolder: '已归档',
      resolution: { type: '全额退款', amount: '¥240', responsibility: '服务方责任', creditImpact: '服务方责任，服务者信用分 -5（87 -> 82）', reason: '线下支付证据成立，按平台规则执行退款并同步信用扣分。', decidedAt: '2026-04-15 22:16', operator: '客服专员 周知夏' }
    }
  ],

  sosRecords: [
    {
      id: 'SOS-240427-001',
      orderId: 'OD-240330-16',
      ticketId: 'TK-SOS-9021',
      triggerRole: 'worker',
      triggerRoleLabel: '服务者',
      triggerUser: { name: '林见川', id: 'U-11816', phone: '139****1816' },
      publisher: '顾温澜',
      worker: '林见川',
      project: '搬宿舍体力协助',
      triggeredAt: '2026-04-27 12:12',
      status: 'processing',
      statusLabel: '处理中',
      sla: 'overdue',
      slaLabel: '已超 5 分钟',
      priority: 'P0',
      location: {
        summary: '宿舍区东门 26m',
        coordinate: '22.53312, 113.93045',
        source: 'GPS 当前定位',
        accuracy: '26m',
        missing: false
      },
      contactNotify: '紧急联系人短信已送达',
      handler: '安全客服 值班组',
      firstResponse: '2026-04-27 12:18',
      closeResult: '',
      notes: [
        { operator: '安全客服 值班组', time: '2026-04-27 12:18', text: '已外呼触发用户，用户反馈误触，仍需确认双方取消诉求。' },
        { operator: '安全客服 值班组', time: '2026-04-27 12:30', text: '确认误触，双方同意服务前取消，订单已按规则关闭。' }
      ],
      timeline: [
        { title: 'SOS 触发', time: '2026-04-27 12:12', copy: '服务者点击 SOS，系统写入本地记录并获取 GPS。' },
        { title: '通知联系人', time: '2026-04-27 12:13', copy: '紧急联系人短信发送成功。' },
        { title: '客服首响', time: '2026-04-27 12:18', copy: '安全客服完成电话回访。' }
      ]
    },
    {
      id: 'SOS-240426-004',
      orderId: 'OD-240317-19',
      ticketId: 'TK-SOS-9017',
      triggerRole: 'publisher',
      triggerRoleLabel: '发布者',
      triggerUser: { name: '陈知栀', id: 'U-10382', phone: '139****0382' },
      publisher: '陈知栀',
      worker: '沈枝意',
      project: '陪诊协助',
      triggeredAt: '2026-04-24 15:36',
      status: 'pending',
      statusLabel: '待认领',
      sla: 'urgent',
      slaLabel: '距超时 2 分钟',
      priority: 'P0',
      location: {
        summary: '南山医院门诊楼 22m',
        coordinate: '22.54186, 113.93412',
        source: '最近有效打卡定位',
        accuracy: '22m',
        missing: false
      },
      contactNotify: '紧急联系人短信已送达',
      handler: '待认领',
      firstResponse: '未首响',
      closeResult: '',
      notes: [
        { operator: '系统', time: '2026-04-24 15:36', text: '发布者触发 SOS，已进入安全客服待办。' }
      ],
      timeline: [
        { title: 'SOS 触发', time: '2026-04-24 15:36', copy: '发布者在陪诊订单服务中触发 SOS。' },
        { title: '定位写入', time: '2026-04-24 15:36', copy: '使用最近一次有效打卡定位作为证据。' },
        { title: '通知联系人', time: '2026-04-24 15:37', copy: '紧急联系人短信发送成功。' }
      ]
    },
    {
      id: 'SOS-240415-002',
      orderId: 'OD-240305-11',
      ticketId: 'TK-SOS-8986',
      triggerRole: 'worker',
      triggerRoleLabel: '服务者',
      triggerUser: { name: '周南栀', id: 'U-10944', phone: '138****0944' },
      publisher: 'Studio M',
      worker: '周南栀',
      project: '活动布场协助',
      triggeredAt: '2026-04-15 20:48',
      status: 'closed',
      statusLabel: '已关闭',
      sla: 'normal',
      slaLabel: '5 分钟内首响',
      priority: 'P1',
      location: {
        summary: '活动场馆门口 18m',
        coordinate: '22.54610, 113.92736',
        source: 'GPS 当前定位',
        accuracy: '18m',
        missing: false
      },
      contactNotify: '紧急联系人短信已送达',
      handler: '客服专员 周知夏',
      firstResponse: '2026-04-15 20:51',
      closeResult: '已确认现场安全，后续纠纷转入纠纷管理处理。',
      notes: [
        { operator: '客服专员 周知夏', time: '2026-04-15 20:51', text: '已联系服务者，确认人身安全。' },
        { operator: '客服专员 周知夏', time: '2026-04-15 21:08', text: '安全事项已由本平台闭环处理。' }
      ],
      timeline: [
        { title: 'SOS 触发', time: '2026-04-15 20:48', copy: '服务者反馈现场收款争议并触发 SOS。' },
        { title: '客服首响', time: '2026-04-15 20:51', copy: '客服确认人身安全。' },
        { title: '工单关闭', time: '2026-04-15 21:08', copy: '安全事项关闭，交易争议转纠纷管理。' }
      ]
    },
    {
      id: 'SOS-240427-006',
      orderId: 'OD-240328-03',
      ticketId: 'TK-SOS-9030',
      triggerRole: 'worker',
      triggerRoleLabel: '服务者',
      triggerUser: { name: '季明川', id: 'U-10771', phone: '137****0771' },
      publisher: '家长账号 H-2281',
      worker: '季明川',
      project: '英语口语陪练',
      triggeredAt: '2026-04-27 20:20',
      status: 'pending',
      statusLabel: '待认领',
      sla: 'missing_location',
      slaLabel: '定位失败待跟进',
      priority: 'P0',
      location: {
        summary: '定位失败，需首呼确认口述位置',
        coordinate: '未知',
        source: '定位失败',
        accuracy: '未知',
        missing: true
      },
      contactNotify: '紧急联系人短信已发送，客服需外呼确认口述位置',
      handler: '待认领',
      firstResponse: '未首响',
      closeResult: '',
      notes: [
        { operator: '系统', time: '2026-04-27 20:20', text: '定位失败，已标记 location_missing，客服需优先外呼确认。' }
      ],
      timeline: [
        { title: 'SOS 触发', time: '2026-04-27 20:20', copy: '服务者触发 SOS，但当前定位与最近有效定位均不可用。' },
        { title: '通知联系人', time: '2026-04-27 20:20', copy: '紧急联系人短信已发送，位置待客服首呼确认。' },
        { title: '生成外呼待办', time: '2026-04-27 20:20', copy: '系统要求客服首呼确认口述位置。' }
      ]
    }
  ],

  init() {
    const path = window.location.pathname.replace(/\\/g, '/');
    if (!path.includes('/order/')) {
      return;
    }

    this.root = document.getElementById('page-content');
    if (!this.root) {
      return;
    }

    this.records = AdminStore.get('order_records_v5', this.records)
      .filter(record => record.objectType === 'order');
    this.disputes = AdminStore.get('order_disputes_v4', this.disputes);
    this.sosRecords = AdminStore.get('order_sos_records_v1', this.sosRecords).map(item => this.normalizeSosRecord(item));
    this.saveSosRecords();
    this.render();
    this.bindEvents();
  },

  escape(value) {
    return AdminCore.escapeHTML(value);
  },

  getPath() {
    return window.location.pathname.replace(/\\/g, '/');
  },

  getPageKey() {
    if (this.getPath().endsWith('/order/list.html')) return 'list';
    if (this.getPath().endsWith('/order/detail.html')) return 'detail';
    if (this.getPath().endsWith('/order/sos.html')) return 'sos';
    if (this.getPath().endsWith('/order/dispute-detail.html')) return 'dispute-detail';
    return 'dispute';
  },

  getSourcePrefix() {
    return new URLSearchParams(window.location.search).get('source') === 'workbench' ? 'source=workbench&' : '';
  },

  getStatusClass(status) {
    const map = {
      waiting: 'tag-warning',
      applying: 'tag-warning',
      application_pending: 'tag-info',
      application_failed: 'tag',
      ready: 'tag-info',
      serving: 'tag-info',
      pending_confirm: 'tag-warning',
      completed: 'tag-success',
      rated: 'tag-success',
      dispute: 'tag-danger',
      refunded: 'tag',
      cancelled: 'tag-warning'
    };
    return map[status] || 'tag';
  },

  getObjectTypeClass(type) {
    const map = {
      task: 'tag-info',
      application: 'tag-warning',
      order: 'tag-success'
    };
    return map[type] || 'tag';
  },

  getDisputeStatusClass(status) {
    const map = {
      pending_freeze: 'tag-warning',
      cancel_arbitration: 'tag-warning',
      frozen: 'tag-danger',
      full_refund: 'tag-success',
      partial_refund: 'tag-info',
      rejected: 'tag'
    };
    return map[status] || 'tag';
  },

  getSosStatusClass(status) {
    const map = {
      pending: 'tag-danger',
      processing: 'tag-warning',
      contacted: 'tag-info',
      closed: 'tag-success'
    };
    return map[status] || 'tag';
  },

  getSosSlaClass(sla) {
    const map = {
      overdue: 'tag-danger',
      urgent: 'tag-warning',
      missing_location: 'tag-danger',
      normal: 'tag-success'
    };
    return map[sla] || 'tag';
  },

  getStatusOptions() {
    return [
      ['ready', '待服务'],
      ['serving', '服务中'],
      ['pending_confirm', '待确认完成'],
      ['completed', '已完成'],
      ['rated', '已评价'],
      ['dispute', '纠纷中'],
      ['refunded', '已退款'],
      ['cancelled', '已取消']
    ];
  },

  getRecordSearchText(record) {
    const linked = record.linkedIds ? Object.values(record.linkedIds).join(' ') : '';
    const worker = record.worker ? `${record.worker.name} ${record.worker.id} ${record.worker.phone}` : '';
    return [
      record.id,
      linked,
      record.project,
      record.category,
      record.statusLabel,
      record.objectTypeLabel,
      record.publisher && record.publisher.name,
      record.publisher && record.publisher.id,
      record.publisher && record.publisher.phone,
      worker
    ].filter(Boolean).join(' ').toLowerCase();
  },

  matchRisk(record) {
    switch (this.state.list.risk) {
      case 'dispute':
        return record.hasDispute || !!this.getDisputeIdByOrder(record.id);
      case 'sos':
        return record.hasSos || this.hasSosRecord(record.id);
      case 'proof':
        return record.hasProof;
      case 'no_proof':
        return record.objectType === 'order' && !record.hasProof && !['ready', 'cancelled'].includes(record.status);
      case 'service_code':
        return /未核验|已核验|服务码/.test(record.serviceCodeStatus || '');
      default:
        return true;
    }
  },

  filterRecords() {
    return this.records.filter(record => {
      const keyword = this.state.list.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || this.getRecordSearchText(record).includes(keyword);
      const statusMatched = !this.state.list.status || record.status === this.state.list.status;
      return record.objectType === 'order' && keywordMatched && statusMatched && this.matchRisk(record);
    });
  },

  filterDisputes() {
    return this.disputes.filter(item => {
      const keyword = this.state.dispute.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [item.id, item.orderId, item.publisher, item.worker, item.type].join(' ').toLowerCase().includes(keyword);
      const statusMatched = !this.state.dispute.status || item.status === this.state.dispute.status;
      const priorityMatched = !this.state.dispute.priority || item.priority === this.state.dispute.priority;
      return keywordMatched && statusMatched && priorityMatched;
    });
  },

  filterSosRecords() {
    return this.sosRecords.filter(item => {
      const keyword = this.state.sos.keyword.trim().toLowerCase();
      const keywordMatched = !keyword || [
        item.id,
        item.orderId,
        item.ticketId,
        item.publisher,
        item.worker,
        item.project,
        item.triggerUser?.name,
        item.triggerUser?.id,
        item.triggerUser?.phone
      ].filter(Boolean).join(' ').toLowerCase().includes(keyword);
      const roleMatched = !this.state.sos.role || item.triggerRole === this.state.sos.role;
      const statusMatched = !this.state.sos.status || item.status === this.state.sos.status;
      const slaMatched = !this.state.sos.sla || item.sla === this.state.sos.sla;
      const quickMatched = this.matchSosQuickFilter(item);
      return keywordMatched && roleMatched && statusMatched && slaMatched && quickMatched;
    });
  },

  matchSosQuickFilter(item) {
    switch (this.state.sos.quickFilter) {
      case 'pending':
        return item.status === 'pending';
      case 'urgent':
        return item.sla === 'overdue' || item.sla === 'missing_location';
      case 'closed':
        return item.status === 'closed';
      default:
        return true;
    }
  },

  getDisputeRefundAmount(dispute) {
    if (['pending_freeze', 'frozen'].includes(dispute.status)) {
      return '待裁定';
    }
    return dispute.resolution?.amount || '¥0';
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

  getRecordById(id) {
    if (!id) {
      return null;
    }
    return this.records.find(record => {
      if (record.id === id) {
        return true;
      }
      return record.linkedIds && Object.values(record.linkedIds).includes(id);
    }) || null;
  },

  getSelectedRecord() {
    const query = new URLSearchParams(window.location.search);
    const queryId = query.get('item') || query.get('order') || query.get('task') || query.get('application');
    return this.getRecordById(queryId) || this.records.find(record => record.id === 'OD-240317-19') || this.records[0];
  },

  getSelectedDispute() {
    const queryId = new URLSearchParams(window.location.search).get('dispute');
    return this.disputes.find(item => item.id === queryId)
      || this.disputes.find(item => item.id === this.state.dispute.selectedId)
      || this.disputes[0];
  },

  getDisputeIdByOrder(orderId) {
    const found = this.disputes.find(item => item.orderId === orderId);
    return found ? found.id : '';
  },

  getDisputeByOrder(orderId) {
    return this.disputes.find(item => item.orderId === orderId) || null;
  },

  hasSosRecord(orderId) {
    return this.sosRecords.some(item => item.orderId === orderId);
  },

  getSosByOrder(orderId) {
    return this.sosRecords.find(item => item.orderId === orderId) || null;
  },

  getSelectedSosRecord() {
    const queryId = new URLSearchParams(window.location.search).get('sos');
    return this.sosRecords.find(item => item.id === queryId) || null;
  },

  isSosClaimed(item) {
    return Boolean(item && item.handler && item.handler !== '待认领');
  },

  normalizeSosRecord(item) {
    const allowedKeys = ['id', 'orderId', 'ticketId', 'triggerRole', 'triggerRoleLabel', 'triggerUser', 'publisher', 'worker', 'project', 'triggeredAt', 'status', 'statusLabel', 'sla', 'slaLabel', 'priority', 'location', 'contactNotify', 'handler', 'firstResponse', 'closeResult', 'notes', 'timeline'];
    const next = allowedKeys.reduce((payload, key) => {
      if (key in item) {
        payload[key] = item[key];
      }
      return payload;
    }, {});
    const expectedNotify = next.location?.missing
      ? '紧急联系人短信已发送，客服需外呼确认口述位置'
      : '紧急联系人短信已送达';
    if (next.contactNotify !== expectedNotify) {
      next.contactNotify = next.location?.missing
        ? '紧急联系人短信已发送，客服需外呼确认口述位置'
        : '紧急联系人短信已送达';
    }
    next.notes = (next.notes || []).filter(note => !/外部|同步失败/.test(note.text || ''));
    next.timeline = (next.timeline || []).filter(step => !/外部|同步失败/.test(`${step.title || ''}${step.copy || ''}`));
    if (!next.timeline.some(step => step.title === '通知联系人')) {
      next.timeline = [...next.timeline, {
        title: '通知联系人',
        time: next.triggeredAt || '触发后',
        copy: next.location?.missing ? '紧急联系人短信已发送，位置待客服首呼确认。' : '紧急联系人短信发送成功。'
      }];
    }
    return next;
  },

  renderTextItems(items) {
    return (items || []).map(item => `<div>${this.escape(typeof item === 'string' ? item : item.text || '')}</div>`).join('');
  },

  renderCheckinItems(items, title = '打卡图片') {
    const values = Array.isArray(items) ? items : [];
    if (!values.length) {
      return '<div>暂无打卡记录</div>';
    }
    return `
      <div class="bullet-list">
        ${values.map((item, index) => {
          const normalized = typeof item === 'string'
            ? { time: `打卡 ${index + 1}`, location: '', text: item, images: [] }
            : item;
          return `
            <div class="bullet-item">
              <div>${this.escape(normalized.time || `打卡 ${index + 1}`)} ${normalized.location ? `· ${this.escape(normalized.location)}` : ''}</div>
              <div class="bullet-meta">${this.escape(normalized.text || '暂无说明')}</div>
              ${(normalized.images || []).length ? `<div style="margin-top:8px;">${this.renderMaterialBlock(normalized.images, `${title} ${index + 1}`)}</div>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  renderMaterialBlock(items, title) {
    const values = Array.isArray(items) ? items.filter(Boolean) : [];
    const mediaItems = values.filter(item => AdminCore.isPreviewableMediaLabel(item));
    const textItems = values.filter(item => !mediaItems.includes(item));
    if (!values.length) {
      return '<div>暂无材料</div>';
    }
    return `
      ${mediaItems.length ? AdminCore.renderMediaGallery(mediaItems, { title, note: '当前为后台原型图位，真实环境应接入订单与纠纷原图。' }) : ''}
      ${textItems.length ? `<div style="display:grid; gap:6px; margin-top:${mediaItems.length ? '10px' : '0'};">${this.renderTextItems(textItems)}</div>` : ''}
    `;
  },

  render() {
    switch (this.getPageKey()) {
      case 'list':
        this.renderListPage();
        break;
      case 'detail':
        this.renderDetailPage();
        break;
      case 'dispute-detail':
        this.renderDisputeDetailPage();
        break;
      case 'sos':
        this.renderSosPage();
        break;
      default:
        this.renderDisputePage();
    }
  },

  renderListPage() {
    const filtered = this.filterRecords();
    const pagination = this.paginate(filtered, this.state.list.page);
    this.state.list.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="orderKeyword" style="min-width:260px;" value="${this.escape(this.state.list.keyword)}" placeholder="搜索订单号 / 任务号 / 用户 / 手机号 / 项目">
          <select class="select" id="orderStatus">
            <option value="">全部状态</option>
            ${this.getStatusOptions().map(([value, label]) => `<option value="${value}" ${this.state.list.status === value ? 'selected' : ''}>${label}</option>`).join('')}
          </select>
          <select class="select" id="orderRisk">
            <option value="">全部标签</option>
            <option value="dispute" ${this.state.list.risk === 'dispute' ? 'selected' : ''}>有纠纷</option>
            <option value="sos" ${this.state.list.risk === 'sos' ? 'selected' : ''}>有 SOS</option>
            <option value="proof" ${this.state.list.risk === 'proof' ? 'selected' : ''}>有完成凭证</option>
            <option value="no_proof" ${this.state.list.risk === 'no_proof' ? 'selected' : ''}>履约中无凭证</option>
            <option value="service_code" ${this.state.list.risk === 'service_code' ? 'selected' : ''}>服务码相关</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-orders">搜索</button>
          <button class="btn" type="button" data-action="reset-orders">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-orders">导出订单清单</button>
            <button class="btn btn-primary" type="button" data-route="order/dispute.html">进入纠纷管理</button>
            <button class="btn" type="button" data-route="order/sos.html">查看 SOS 记录</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>订单编号</th>
              <th>任务信息</th>
              <th>双方用户</th>
              <th>金额 / 附加费</th>
              <th>主状态</th>
              <th>订单标签</th>
              <th>创建 / 更新</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(record => this.renderListRow(record)).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 笔订单`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderListRow(record) {
    const workerLabel = record.worker
      ? `${this.escape(record.worker.name)}<div class="table-note">${this.escape(record.worker.id)} · ${this.escape(record.worker.phone || '')}</div>`
      : '<span class="table-note">待选择服务者</span>';
    const dispute = this.getDisputeByOrder(record.id);
    const disputeId = dispute ? dispute.id : '';
    const sosRecord = this.getSosByOrder(record.id);
    const hasDisputeHistory = record.hasDispute || !!disputeId;
    const isPendingDispute = dispute && dispute.status === 'frozen';
    const disputeAction = isPendingDispute
      ? `<button class="btn btn-sm btn-primary" type="button" data-route="order/dispute-detail.html?${this.getSourcePrefix()}dispute=${disputeId}">介入</button>`
      : `<button class="btn btn-sm" type="button" data-route="order/dispute-detail.html?${this.getSourcePrefix()}dispute=${disputeId}">纠纷详情</button>`;
    return `
      <tr>
        <td>
          <div style="font-weight:600; color:var(--color-text-primary);">${this.escape(record.id)}</div>
          <div class="table-note">任务 ${this.escape(record.linkedIds?.task_id || '未关联')}</div>
        </td>
        <td>
          <div style="font-weight:600; color:var(--color-text-primary);">${this.escape(record.project)}</div>
          <div class="table-note">${this.escape(record.category)} · 服务时间 ${this.escape(record.serviceAt)}</div>
        </td>
        <td>
          ${this.escape(record.publisher.name)} <span class="table-note">信用 ${this.escape(record.publisher.credit)}</span>
          <div class="table-note">服务者/申请人：${workerLabel}</div>
        </td>
        <td>
          ${this.escape(record.amount)}
          <div class="table-note">${this.escape(record.insurance)} · ${this.escape(record.urgent)}</div>
        </td>
        <td><span class="tag ${this.getStatusClass(record.status)}">${this.escape(record.statusLabel)}</span></td>
        <td>
          ${hasDisputeHistory ? '<span class="tag tag-danger">有纠纷</span>' : '<span class="tag tag-success">无纠纷</span>'}
          ${record.hasSos || sosRecord ? '<span class="tag tag-warning" style="margin-left:6px;">有 SOS</span>' : ''}
          <div class="table-note" style="margin-top:6px;">服务码：${this.escape(record.serviceCodeStatus)}</div>
          <div class="table-note">凭证：${this.escape(record.proofStatus)}</div>
        </td>
        <td>${this.escape(record.createdAt)}<div class="table-note">更新 ${this.escape(record.updatedAt)}</div></td>
        <td class="action-cell">
          <button class="btn btn-sm" type="button" data-route="order/detail.html?${this.getSourcePrefix()}item=${encodeURIComponent(record.id)}">查看</button>
          ${hasDisputeHistory ? disputeAction : ''}
          ${sosRecord ? `<button class="btn btn-sm" type="button" data-route="order/sos.html?sos=${encodeURIComponent(sosRecord.id)}">SOS</button>` : ''}
        </td>
      </tr>
    `;
  },

  renderDetailPage() {
    const record = this.getSelectedRecord();
    const fromWorkbench = new URLSearchParams(window.location.search).get('source') === 'workbench';
    const disputeId = this.getDisputeIdByOrder(record.id);
    const sosRecord = this.getSosByOrder(record.id);

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">${fromWorkbench ? '来自待办工作台 · 订单处理' : '订单详情 · 履约证据 / 资金汇总 / 纠纷与备注'}</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="order/list.html${fromWorkbench ? '?source=workbench' : ''}">返回订单列表</button>
            ${disputeId ? `<button class="btn" type="button" data-action="open-order-dispute" data-id="${this.escape(record.id)}">进入纠纷页</button>` : ''}
            ${sosRecord ? `<button class="btn" type="button" data-route="order/sos.html?sos=${encodeURIComponent(sosRecord.id)}">查看 SOS 记录</button>` : ''}
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div>
                <div class="card-title">${this.escape(record.project)}</div>
                <div class="table-note">
                  ${this.escape(record.id)} · ${this.escape(record.category)}
                </div>
              </div>
              <span class="tag ${this.getStatusClass(record.status)}">${this.escape(record.statusLabel)}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">任务金额</div><div class="summary-item-value">${this.escape(record.amount)}</div></div>
              <div class="summary-item"><div class="summary-item-label">服务码</div><div class="summary-item-value">${this.escape(record.serviceCodeStatus)}</div></div>
              <div class="summary-item"><div class="summary-item-label">完成凭证</div><div class="summary-item-value">${this.escape(record.proofStatus)}</div></div>
            </div>
          </div>

          ${this.renderOrderInfoCard(record)}
          ${this.renderParticipantCard(record)}
          ${this.renderOrderEvidence(record)}
          ${this.renderFinanceSummary(record)}
          ${this.renderTimelineCard(record)}
        </div>

        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">风控 / 安全信息</div></div>
            <div class="evidence-list">
              <div class="evidence-item"><div class="evidence-title">纠纷状态</div><div class="evidence-desc">${disputeId ? `有关联纠纷单 ${this.escape(disputeId)}` : '当前无纠纷'}</div></div>
              <div class="evidence-item"><div class="evidence-title">SOS</div><div class="evidence-desc">${sosRecord ? `存在 SOS 记录 ${this.escape(sosRecord.id)}，状态：${this.escape(sosRecord.statusLabel)}` : '当前无 SOS 记录'}</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">后台备注与操作</div></div>
            ${this.renderRemarksCard(record)}
            <textarea class="input" id="orderNoteInput" style="width:100%; height:auto; min-height:92px; padding:12px 16px; resize:vertical; margin-top:12px;" placeholder="继续添加新的后台备注，不会覆盖历史备注"></textarea>
            <div class="page-actions action-stack" style="margin-top:16px;">
              ${this.renderDetailActions(record)}
            </div>
          </div>
        </div>
      </div>
      ${this.renderChatModal(record)}
      ${this.renderCloseOrderModal(record)}
    `;
  },

  renderOrderInfoCard(record) {
    const linked = record.linkedIds || {};
    return `
      <div class="section-card">
        <div class="detail-group-title">订单信息</div>
        <div class="info-grid">
          <div class="info-pair"><div class="info-pair-label">订单编号</div><div class="info-pair-value">${this.escape(linked.order_id || record.id)}</div></div>
          <div class="info-pair"><div class="info-pair-label">关联任务</div><div class="info-pair-value">${linked.task_id ? `<button class="btn btn-sm" type="button" data-route="task/detail.html?task=${encodeURIComponent(linked.task_id)}">${this.escape(linked.task_id)}</button>` : '未关联任务'}</div></div>
          <div class="info-pair"><div class="info-pair-label">服务项目</div><div class="info-pair-value">${this.escape(record.project)}</div></div>
          <div class="info-pair"><div class="info-pair-label">服务类目</div><div class="info-pair-value">${this.escape(record.category)}</div></div>
          <div class="info-pair"><div class="info-pair-label">创建时间</div><div class="info-pair-value">${this.escape(record.createdAt)}</div></div>
          <div class="info-pair"><div class="info-pair-label">最近更新</div><div class="info-pair-value">${this.escape(record.updatedAt)}</div></div>
          <div class="info-pair"><div class="info-pair-label">服务时间</div><div class="info-pair-value">${this.escape(record.serviceAt)}</div></div>
          <div class="info-pair"><div class="info-pair-label">订单状态</div><div class="info-pair-value">${this.escape(record.statusLabel)}</div></div>
        </div>
      </div>
    `;
  },

  getUserDetailRoute(user) {
    const params = new URLSearchParams();
    if (new URLSearchParams(window.location.search).get('source') === 'workbench') {
      params.set('source', 'workbench');
    }
    params.set('user', user.id);
    params.set('nickname', user.name || '');
    params.set('phone', user.phone || '');
    params.set('credit', String(user.credit ?? ''));
    params.set('cert', user.cert || '');
    params.set('skill', user.skills || '');
    return `user/detail.html?${params.toString()}`;
  },

  renderParticipantCard(record) {
    const worker = record.worker;
    const publisherRoute = this.getUserDetailRoute(record.publisher);
    const workerRoute = worker ? this.getUserDetailRoute(worker) : '';
    return `
      <div class="section-card">
        <div class="detail-group-title">双方信息</div>
        <div class="info-grid">
          <div class="info-pair"><div class="info-pair-label">发布者</div><div class="info-pair-value">${this.escape(record.publisher.name)} · ${this.escape(record.publisher.id)}<br>信用 ${this.escape(record.publisher.credit)} · ${this.escape(record.publisher.phone)} · ${this.escape(record.publisher.cert)}<br><button class="btn btn-sm" type="button" data-route="${this.escape(publisherRoute)}" style="margin-top:10px;">查看用户详情</button></div></div>
          <div class="info-pair"><div class="info-pair-label">服务者</div><div class="info-pair-value">${worker ? `${this.escape(worker.name)} · ${this.escape(worker.id)}<br>信用 ${this.escape(worker.credit)} · ${this.escape(worker.phone)} · ${this.escape(worker.cert || '')}<br>${this.escape(worker.skills || '暂无技能摘要')}<br><button class="btn btn-sm" type="button" data-route="${this.escape(workerRoute)}" style="margin-top:10px;">查看用户详情</button>` : '未选择'}</div></div>
        </div>
      </div>
    `;
  },

  renderOrderEvidence(record) {
    return `
      <div class="section-card">
        <div class="detail-group-title">履约证据与资金信息</div>
        <div class="split-layout">
          <div class="evidence-list">
            <div class="evidence-item"><div class="evidence-title">完成凭证</div><div class="evidence-desc">${this.renderMaterialBlock(record.proofs, `${record.id} 完成凭证`)}</div></div>
            <div class="evidence-item"><div class="evidence-title">打卡记录</div><div class="evidence-desc">${this.renderCheckinItems(record.checkins, `${record.id} 打卡图片`)}</div></div>
            <div class="evidence-item">
              <div class="evidence-title">聊天资料</div>
              <div class="evidence-desc">
                ${this.renderTextItems((record.chat || []).slice(0, 3))}
                <button class="btn btn-sm" type="button" data-action="open-chat-modal" data-id="${this.escape(record.id)}" style="margin-top:10px;">查看全部聊天</button>
              </div>
            </div>
          </div>
          <div class="evidence-list">
            <div class="evidence-item"><div class="evidence-title">GPS 轨迹</div><div class="evidence-desc">${this.renderTextItems(record.gps)}</div></div>
          </div>
        </div>
      </div>
    `;
  },

  renderFinanceSummary(record) {
    const summary = record.financeSummary || this.parseFinanceSummary(record.finance || [], record.amount);
    const rows = [
      ['任务金额', summary.taskAmount],
      ['保险费', summary.insuranceFee],
      ['急单置顶费', summary.urgentFee],
      ['优惠券抵扣', summary.coupon],
      ['发布者实付', summary.paidAmount],
      ['打赏金额', summary.tipAmount],
      ['平台抽佣', summary.commission],
      ['服务者实得', summary.workerIncome],
      ['退款金额', summary.refundAmount],
      ['平台实收', summary.platformIncome]
    ];
    return `
      <div class="section-card">
        <div class="detail-group-title">资金摘要</div>
        <div class="info-grid">
          ${rows.map(([label, value]) => this.renderInfoPair(label, value || '¥0')).join('')}
        </div>
      </div>
    `;
  },

  parseFinanceSummary(items, amount) {
    return {
      taskAmount: amount,
      insuranceFee: '¥0',
      urgentFee: '¥0',
      coupon: '¥0',
      paidAmount: amount,
      tipAmount: '¥0',
      commission: '待结算',
      workerIncome: '待结算',
      refundAmount: '¥0',
      platformIncome: '待结算'
    };
  },

  renderInfoPair(label, value) {
    return `
      <div class="info-pair">
        <div class="info-pair-label">${this.escape(label)}</div>
        <div class="info-pair-value">${this.escape(value || '未填写')}</div>
      </div>
    `;
  },

  renderTimelineCard(record) {
    return `
      <div class="section-card">
        <div class="detail-group-title">交易时间轴</div>
        <div class="timeline">
          ${(record.timeline || []).map(item => `
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div style="font-weight:600; color:var(--color-text-primary);">${this.escape(item.title)}</div>
                <div>${this.escape(item.copy)}</div>
                <div class="timeline-time">${this.escape(item.time)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  renderDetailActions(record) {
    const disputeId = this.getDisputeIdByOrder(record.id);
    const buttons = [
      `<button class="btn" type="button" data-action="save-order-note" data-id="${this.escape(record.id)}">添加备注</button>`
    ];
    if (disputeId) {
      buttons.push(`<button class="btn" type="button" data-action="open-order-dispute" data-id="${this.escape(record.id)}">查看纠纷处理</button>`);
    }
    if (record.objectType === 'order' && record.status === 'pending_confirm') {
      buttons.push(`<button class="btn btn-primary" type="button" data-action="mark-publisher-confirmed" data-id="${this.escape(record.id)}">人工确认完成</button>`);
    }
    if (!['rated', 'refunded', 'cancelled'].includes(record.status)) {
      buttons.push(`<button class="btn btn-danger" type="button" data-action="close-order" data-id="${this.escape(record.id)}">强制关闭</button>`);
    }
    return buttons.join('');
  },

  renderRemarksCard(record) {
    const remarks = Array.isArray(record.remarks) ? record.remarks : [];
    if (!remarks.length) {
      return '<div class="section-hint">暂无历史备注。</div>';
    }
    return `
      <div class="bullet-list">
        ${remarks.map(item => `
          <div class="bullet-item">
            <div>${this.escape(item.text)}</div>
            <div class="bullet-meta">${this.escape(item.operator)} · ${this.escape(item.time)}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderChatModal(record) {
    if (!this.state.detail.showChatModal) {
      return '';
    }
    return `
      <div class="modal-backdrop active" id="orderChatBackdrop">
        <div class="modal" style="width:680px;">
          <div class="modal-header">
            <div class="modal-title">全部聊天资料 · ${this.escape(record.id)}</div>
            <div class="modal-close" data-action="close-chat-modal">✕</div>
          </div>
          <div class="modal-body">
            <div class="bullet-list">
              ${(record.chat || []).map((item, index) => `
                <div class="bullet-item">
                  <div>${this.escape(item)}</div>
                  <div class="bullet-meta">聊天记录 ${index + 1}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-chat-modal">关闭</button>
            <button class="btn btn-primary" type="button" data-action="export-order-chat" data-id="${this.escape(record.id)}">导出聊天记录</button>
          </div>
        </div>
      </div>
    `;
  },

  renderDisputePage() {
    const filtered = this.filterDisputes();
    const pagination = this.paginate(filtered, this.state.dispute.page);
    this.state.dispute.page = pagination.currentPage;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="disputeKeyword" value="${this.escape(this.state.dispute.keyword)}" style="min-width:240px;" placeholder="搜索纠纷单 / 订单ID / 双方姓名">
          <select class="select" id="disputeStatus">
            <option value="">全部状态</option>
            <option value="pending_freeze" ${this.state.dispute.status === 'pending_freeze' ? 'selected' : ''}>待冻结</option>
            <option value="frozen" ${this.state.dispute.status === 'frozen' ? 'selected' : ''}>已冻结</option>
            <option value="cancel_arbitration" ${this.state.dispute.status === 'cancel_arbitration' ? 'selected' : ''}>取消裁定中</option>
            <option value="full_refund" ${this.state.dispute.status === 'full_refund' ? 'selected' : ''}>已全额退款</option>
            <option value="partial_refund" ${this.state.dispute.status === 'partial_refund' ? 'selected' : ''}>已部分退款</option>
            <option value="rejected" ${this.state.dispute.status === 'rejected' ? 'selected' : ''}>已驳回</option>
          </select>
          <select class="select" id="disputePriority">
            <option value="">全部优先级</option>
            <option value="P1" ${this.state.dispute.priority === 'P1' ? 'selected' : ''}>P1</option>
            <option value="P2" ${this.state.dispute.priority === 'P2' ? 'selected' : ''}>P2</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-disputes">搜索</button>
          <button class="btn" type="button" data-action="reset-disputes">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-disputes">导出纠纷证据包</button>
          </div>
        </div>
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>纠纷单</th>
              <th>关联订单</th>
              <th>类型</th>
              <th>提交时间</th>
              <th>退款金额</th>
              <th>优先级</th>
              <th>状态</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(item => `
              <tr>
                <td>${this.escape(item.id)}<div class="table-note">${this.escape(item.submittedAt)}</div></td>
                <td>${this.escape(item.orderId)}<div class="table-note">${this.escape(item.publisher)} / ${this.escape(item.worker)}</div></td>
                <td>${this.escape(item.type)}</td>
                <td>${this.escape(item.submittedAt)}<div class="table-note">${this.escape(item.freezeDeadline || item.currentHolder)}</div></td>
                <td>${this.escape(this.getDisputeRefundAmount(item))}</td>
                <td><span class="tag ${item.priority === 'P1' ? 'tag-danger' : 'tag-warning'}">${this.escape(item.priority)}</span></td>
                <td><span class="tag ${this.getDisputeStatusClass(item.status)}">${this.escape(item.statusLabel)}</span></td>
                <td class="action-cell"><button class="btn btn-sm" type="button" data-route="order/dispute-detail.html?dispute=${encodeURIComponent(item.id)}">查看详情</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条纠纷`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderDisputeDetailPage() {
    const selected = this.getSelectedDispute();
    const record = this.getRecordById(selected.orderId);
    const actionable = ['frozen', 'cancel_arbitration'].includes(selected.status);
    const resolved = !['pending_freeze', 'frozen', 'cancel_arbitration'].includes(selected.status) || Boolean(selected.resolution);

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">纠纷详情页 · 用户上传证据 / 聊天打卡 / GPS 轨迹 / 裁定动作</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="order/dispute.html">返回纠纷列表</button>
            <button class="btn" type="button" data-route="order/detail.html?order=${encodeURIComponent(selected.orderId)}">查看订单详情</button>
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div>
                <div class="card-title">${this.escape(selected.id)}</div>
                <div class="table-note">关联订单 ${this.escape(selected.orderId)}</div>
              </div>
              <span class="tag ${this.getDisputeStatusClass(selected.status)}">${this.escape(selected.statusLabel)}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">纠纷类型</div><div class="summary-item-value">${this.escape(selected.type)}</div></div>
              <div class="summary-item"><div class="summary-item-label">冻结状态</div><div class="summary-item-value">${this.escape(selected.freezeDeadline || selected.statusLabel)}</div></div>
              <div class="summary-item"><div class="summary-item-label">优先级</div><div class="summary-item-value">${this.escape(selected.priority)}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">用户上传证据</div>
            <div class="evidence-list">
              <div class="evidence-item"><div class="evidence-title">用户上传证据</div><div class="evidence-desc">${this.renderDisputeStatements(selected)}</div></div>
              ${record ? `<div class="evidence-item"><div class="evidence-title">完整聊天记录</div><div class="evidence-desc">${this.renderTextItems((record.chat || []).slice(0, 3))}<button class="btn btn-sm" type="button" data-action="open-chat-modal" data-id="${this.escape(record.id)}" style="margin-top:10px;">查看全部聊天</button></div></div>` : ''}
              ${record ? `<div class="evidence-item"><div class="evidence-title">完整打卡记录</div><div class="evidence-desc">${this.renderCheckinItems(record.checkins || [], `${record.id} 打卡图片`)}</div></div>` : ''}
              ${record ? `<div class="evidence-item"><div class="evidence-title">完整完成凭证</div><div class="evidence-desc">${this.renderMaterialBlock(record.proofs || [], `${record.id} 完成凭证`)}</div></div>` : ''}
              ${record ? `<div class="evidence-item"><div class="evidence-title">订单当前状态</div><div class="evidence-desc">${this.escape(record.statusLabel)} · ${this.escape(record.serviceCodeStatus)} · ${this.escape(record.proofStatus)}</div></div>` : ''}
            </div>
          </div>
        </div>

        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">GPS 轨迹与处理人</div></div>
            <div class="bullet-list">
              ${selected.gps.map(item => `<div class="bullet-item"><div>${this.escape(item)}</div><div class="bullet-meta">GPS / 位置证据</div></div>`).join('')}
              <div class="bullet-item"><div>${this.escape(selected.currentHolder)}</div><div class="bullet-meta">当前处理</div></div>
            </div>
          </div>
          <div class="section-card">
            <div class="card-header"><div class="card-title">${resolved ? '裁定结果' : '裁定动作'}</div></div>
            ${resolved ? this.renderDisputeResolution(selected) : actionable ? `
              <div class="page-actions action-stack">
                <button class="btn" type="button" data-action="dispute-approve-keep" data-id="${this.escape(selected.id)}">驳回退款并恢复原状态</button>
                <button class="btn" type="button" data-action="dispute-refund-partial" data-id="${this.escape(selected.id)}">部分退款</button>
                <button class="btn btn-primary" type="button" data-action="dispute-refund-full" data-id="${this.escape(selected.id)}">全额退款</button>
              </div>
              <div class="section-hint">${selected.status === 'cancel_arbitration' ? '服务中取消裁定可直接处理；订单主状态保持原履约状态，裁定完成后再更新最终结果。' : '工单已冻结，可由工作人员裁定；裁定会同步订单状态、退款流水、结算冲正、佣金扣回、信用分和通知。'}</div>
            ` : '<div class="section-hint">工单尚在 24 小时补证窗口内，暂不允许裁定；冻结后工作人员可处理。</div>'}
          </div>
        </div>
      </div>
      ${this.renderPartialRefundModal(selected)}
      ${record ? this.renderChatModal(record) : ''}
    `;
  },

  renderDisputeStatements(selected) {
    const statements = selected.statements || {};
    const entries = [
      ['发布者上传证据', statements.publisher],
      ['服务者上传证据', statements.worker]
    ].filter(([, item]) => item);

    if (!entries.length) {
      return this.escape(selected.statement || '暂无上传证据');
    }

    return `
      <div class="evidence-list">
        ${entries.map(([title, item]) => `
          <div class="evidence-item">
            <div class="evidence-title">${title}</div>
            <div class="evidence-desc">
              <div>纠纷类型：${this.escape(item.disputeType || selected.type)}</div>
              <div style="margin-top:6px;">详细描述：${this.escape(item.description || '')}</div>
              ${(item.images || []).length ? `<div style="margin-top:10px;">${this.renderMaterialBlock(item.images, `${selected.id} ${title} 图片`)}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderDisputeResolution(selected) {
    const resolution = selected.resolution || {};
    return `
      <div class="info-grid">
        ${this.renderInfoPair('裁定类型', resolution.type || selected.statusLabel)}
        ${this.renderInfoPair('退款金额', resolution.amount || '无退款')}
        ${resolution.responsibility ? this.renderInfoPair('责任方', resolution.responsibility) : ''}
        ${resolution.creditImpact ? this.renderInfoPair('信用处理', resolution.creditImpact) : ''}
        ${this.renderInfoPair('裁定说明', resolution.reason || '已完成裁定')}
        ${this.renderInfoPair('裁定时间', resolution.decidedAt || '刚刚')}
        ${this.renderInfoPair('处理人', resolution.operator || selected.currentHolder)}
      </div>
      <div class="section-hint" style="margin-top:12px;">纠纷处理已完成，退款操作不可再次执行。</div>
    `;
  },

  renderSosPage() {
    const selected = this.getSelectedSosRecord();
    if (selected) {
      this.renderSosDetailPage(selected);
      return;
    }

    const filtered = this.filterSosRecords();
    const pagination = this.paginate(filtered, this.state.sos.page);
    this.state.sos.page = pagination.currentPage;
    const pendingCount = this.sosRecords.filter(item => item.status === 'pending').length;
    const overdueCount = this.sosRecords.filter(item => item.sla === 'overdue' || item.sla === 'missing_location').length;
    const closedCount = this.sosRecords.filter(item => item.status === 'closed').length;

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <input class="input" id="sosKeyword" value="${this.escape(this.state.sos.keyword)}" style="min-width:240px;" placeholder="搜索 SOS / 订单 / 用户 / 工单">
          <select class="select" id="sosRole">
            <option value="">全部触发角色</option>
            <option value="publisher" ${this.state.sos.role === 'publisher' ? 'selected' : ''}>发布者</option>
            <option value="worker" ${this.state.sos.role === 'worker' ? 'selected' : ''}>服务者</option>
          </select>
          <select class="select" id="sosStatus">
            <option value="">全部处理状态</option>
            <option value="pending" ${this.state.sos.status === 'pending' ? 'selected' : ''}>待认领</option>
            <option value="processing" ${this.state.sos.status === 'processing' ? 'selected' : ''}>处理中</option>
            <option value="contacted" ${this.state.sos.status === 'contacted' ? 'selected' : ''}>已联系</option>
            <option value="closed" ${this.state.sos.status === 'closed' ? 'selected' : ''}>已关闭</option>
          </select>
          <select class="select" id="sosSla">
            <option value="">全部 SLA</option>
            <option value="overdue" ${this.state.sos.sla === 'overdue' ? 'selected' : ''}>已超 5 分钟</option>
            <option value="urgent" ${this.state.sos.sla === 'urgent' ? 'selected' : ''}>即将超时</option>
            <option value="missing_location" ${this.state.sos.sla === 'missing_location' ? 'selected' : ''}>定位失败</option>
            <option value="normal" ${this.state.sos.sla === 'normal' ? 'selected' : ''}>正常首响</option>
          </select>
          <button class="btn btn-primary" type="button" data-action="search-sos">搜索</button>
          <button class="btn" type="button" data-action="reset-sos">重置</button>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-action="export-sos">导出 SOS 记录</button>
          </div>
        </div>
      </div>

      <div class="stats-grid" style="margin-bottom:16px;">
        ${this.renderSosSummaryCard('all', 'SOS 总数', this.sosRecords.length, '')}
        ${this.renderSosSummaryCard('pending', '待认领', pendingCount, '')}
        ${this.renderSosSummaryCard('urgent', '需立即跟进', overdueCount, '')}
        ${this.renderSosSummaryCard('closed', '已关闭', closedCount, '')}
      </div>

      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>SOS 记录</th>
              <th>关联订单</th>
              <th>触发用户</th>
              <th>位置与通知</th>
              <th>SLA</th>
              <th>处理状态</th>
              <th class="action-cell">操作</th>
            </tr>
          </thead>
          <tbody>
            ${pagination.items.map(item => this.renderSosRow(item)).join('')}
          </tbody>
        </table>
      </div>
      ${AdminCore.renderPagination(`共 ${filtered.length} 条 SOS 记录`, pagination.currentPage, pagination.totalPages)}
    `;
  },

  renderSosSummaryCard(filter, label, value, hint) {
    const active = (this.state.sos.quickFilter || 'all') === filter;
    return `
      <button
        class="stat-card"
        type="button"
        data-action="filter-sos-summary"
        data-filter="${filter}"
        style="text-align:left; cursor:pointer; border:${active ? '1px solid var(--color-primary)' : '1px solid var(--color-border-light)'}; box-shadow:${active ? '0 8px 20px rgba(47, 125, 232, 0.12)' : 'var(--shadow-sm)'}; background:${active ? 'linear-gradient(180deg, rgba(77, 163, 255, 0.08), rgba(255, 255, 255, 0.96))' : 'var(--color-bg-primary)'};"
      >
        <div class="stat-label">${this.escape(label)}</div>
        <div class="stat-value">${this.escape(value)}</div>
        <div class="stat-meta">${this.escape(hint)}</div>
      </button>
    `;
  },

  renderSosRow(item) {
    return `
      <tr>
        <td>
          <div style="font-weight:600; color:var(--color-text-primary);">${this.escape(item.id)}</div>
          <div class="table-note">${this.escape(item.ticketId)} · ${this.escape(item.triggeredAt)}</div>
        </td>
        <td>
          <button class="btn btn-sm" type="button" data-route="order/detail.html?order=${encodeURIComponent(item.orderId)}">${this.escape(item.orderId)}</button>
          <div class="table-note">${this.escape(item.project)}</div>
          <div class="table-note">${this.escape(item.publisher)} / ${this.escape(item.worker)}</div>
        </td>
        <td>
          <span class="tag ${item.triggerRole === 'worker' ? 'tag-info' : 'tag-warning'}">${this.escape(item.triggerRoleLabel)}</span>
          <div class="table-note" style="margin-top:6px;">${this.escape(item.triggerUser.name)} · ${this.escape(item.triggerUser.phone)}</div>
        </td>
        <td>
          ${this.escape(item.location.summary)}
          <div class="table-note">${this.escape(item.contactNotify)}</div>
        </td>
        <td><span class="tag ${this.getSosSlaClass(item.sla)}">${this.escape(item.slaLabel)}</span></td>
        <td>
          <span class="tag ${this.getSosStatusClass(item.status)}">${this.escape(item.statusLabel)}</span>
          <div class="table-note" style="margin-top:6px;">处理人：${this.escape(item.handler)}</div>
        </td>
        <td class="action-cell">
          <button class="btn btn-sm" type="button" data-route="order/sos.html?sos=${encodeURIComponent(item.id)}">${item.status === 'closed' ? '查看' : '处理'}</button>
        </td>
      </tr>
    `;
  },

  renderSosDetailPage(selected) {
    const record = this.getRecordById(selected.orderId);
    const canHandle = selected.status !== 'closed';
    const claimed = this.isSosClaimed(selected);

    this.root.innerHTML = `
      <div class="filter-panel account-toolbar-panel">
        <div class="filter-row account-toolbar-row">
          <div class="detail-toolbar-note">SOS 记录详情 · 本地工单 / 定位证据 / 联系人通知</div>
          <div class="page-actions account-toolbar-actions">
            <button class="btn" type="button" data-route="order/sos.html">返回 SOS 列表</button>
            <button class="btn" type="button" data-route="order/detail.html?order=${encodeURIComponent(selected.orderId)}">查看订单详情</button>
          </div>
        </div>
      </div>

      <div class="split-layout">
        <div class="panel-stack">
          <div class="section-card detail-hero-card">
            <div class="card-header">
              <div>
                <div class="card-title">${this.escape(selected.id)}</div>
                <div class="table-note">关联订单 ${this.escape(selected.orderId)} · 本地工单 ${this.escape(selected.ticketId)}</div>
              </div>
              <span class="tag ${this.getSosStatusClass(selected.status)}">${this.escape(selected.statusLabel)}</span>
            </div>
            <div class="summary-grid">
              <div class="summary-item"><div class="summary-item-label">触发角色</div><div class="summary-item-value">${this.escape(selected.triggerRoleLabel)}</div></div>
              <div class="summary-item"><div class="summary-item-label">触发时间</div><div class="summary-item-value">${this.escape(selected.triggeredAt)}</div></div>
              <div class="summary-item"><div class="summary-item-label">SLA</div><div class="summary-item-value">${this.escape(selected.slaLabel)}</div></div>
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">触发人与订单上下文</div>
            <div class="info-grid">
              ${this.renderInfoPair('触发用户', `${selected.triggerUser.name} · ${selected.triggerUser.id} · ${selected.triggerUser.phone}`)}
              ${this.renderInfoPair('发布者 / 服务者', `${selected.publisher} / ${selected.worker}`)}
              ${this.renderInfoPair('服务项目', selected.project)}
              ${this.renderInfoPair('订单状态', record ? `${record.statusLabel} · ${record.serviceCodeStatus}` : '订单记录未找到')}
            </div>
          </div>

          <div class="section-card">
            <div class="detail-group-title">定位与通知证据</div>
            <div class="info-grid">
              ${this.renderInfoPair('位置摘要', selected.location.summary)}
              ${this.renderInfoPair('坐标', selected.location.coordinate)}
              ${this.renderInfoPair('定位来源', selected.location.source)}
              ${this.renderInfoPair('定位精度', selected.location.accuracy)}
              ${this.renderInfoPair('紧急联系人通知', selected.contactNotify)}
            </div>
          </div>

          ${record ? `
            <div class="section-card">
              <div class="detail-group-title">订单证据摘要</div>
              <div class="evidence-list">
                <div class="evidence-item"><div class="evidence-title">GPS / 打卡</div><div class="evidence-desc">${this.renderTextItems(record.gps || [])}</div></div>
                <div class="evidence-item"><div class="evidence-title">聊天摘要</div><div class="evidence-desc">${this.renderTextItems((record.chat || []).slice(0, 4))}</div></div>
                <div class="evidence-item"><div class="evidence-title">订单时间轴</div><div class="evidence-desc">${this.renderTextItems((record.timeline || []).slice(-4).map(item => `${item.time} ${item.title}：${item.copy}`))}</div></div>
              </div>
            </div>
          ` : ''}

          <div class="section-card">
            <div class="detail-group-title">SOS 处理时间轴</div>
            <div class="timeline">
              ${(selected.timeline || []).map(item => `
                <div class="timeline-item">
                  <div class="timeline-dot"></div>
                  <div class="timeline-content">
                    <div style="font-weight:600; color:var(--color-text-primary);">${this.escape(item.title)}</div>
                    <div>${this.escape(item.copy)}</div>
                    <div class="timeline-time">${this.escape(item.time)}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="panel-stack sticky-actions">
          <div class="section-card">
            <div class="card-header"><div class="card-title">工单处理</div></div>
            <div class="info-grid">
              ${this.renderInfoPair('当前处理人', selected.handler)}
              ${this.renderInfoPair('首次响应', selected.firstResponse)}
              ${this.renderInfoPair('关闭结果', selected.closeResult || '未关闭')}
            </div>
            ${this.renderSosNotes(selected)}
            ${canHandle && claimed ? '<textarea class="input" id="sosNoteInput" style="width:100%; height:auto; min-height:92px; padding:12px 16px; resize:vertical; margin-top:12px;" placeholder="添加本次处理备注，例如外呼结果、位置确认、关闭原因"></textarea>' : ''}
            <div class="page-actions action-stack" style="margin-top:16px;">
              ${canHandle && !claimed ? `
                <button class="btn" type="button" data-action="assign-sos" data-id="${this.escape(selected.id)}">认领</button>
                <div class="section-hint">请先认领工单，再标记已联系或关闭。</div>
              ` : canHandle ? `
                <button class="btn" type="button" data-action="contact-sos" data-id="${this.escape(selected.id)}">标记已联系</button>
                <button class="btn btn-primary" type="button" data-action="add-sos-note" data-id="${this.escape(selected.id)}">添加备注</button>
                <button class="btn btn-danger" type="button" data-action="close-sos" data-id="${this.escape(selected.id)}">关闭工单</button>
              ` : '<div class="section-hint">SOS 工单已关闭，仅保留查看和导出。</div>'}
            </div>
          </div>
        </div>
      </div>
      ${this.renderSosCloseModal()}
    `;
  },

  renderSosNotes(selected) {
    const notes = Array.isArray(selected.notes) ? selected.notes : [];
    if (!notes.length) {
      return '<div class="section-hint" style="margin-top:12px;">暂无处理备注。</div>';
    }
    return `
      <div class="bullet-list" style="margin-top:12px;">
        ${notes.map(item => `
          <div class="bullet-item">
            <div>${this.escape(item.text)}</div>
            <div class="bullet-meta">${this.escape(item.operator)} · ${this.escape(item.time)}</div>
          </div>
        `).join('')}
      </div>
    `;
  },

  renderSosCloseModal() {
    if (!this.state.sos.showCloseModal) {
      return '';
    }
    const selected = this.getSosRecordById(this.state.sos.closingId);
    if (!selected) {
      return '';
    }
    return `
      <div class="modal-backdrop active" id="sosCloseBackdrop">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">关闭 SOS 工单</div>
            <div class="modal-close" data-action="cancel-close-sos">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              <div style="font-weight:600; margin-bottom:4px;">${this.escape(selected.id)} / ${this.escape(selected.orderId)}</div>
              <div class="section-hint">关闭后工单只读，记录永久留存。</div>
            </div>
            <div class="form-group">
              <label class="form-label required">关闭备注</label>
              <textarea class="input" id="sosCloseNoteInput" style="width:100%; height:auto; min-height:108px; padding:12px 16px; resize:vertical;" placeholder="请填写联系结果、位置确认、关闭原因或后续转交说明"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="cancel-close-sos">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-close-sos" data-id="${this.escape(selected.id)}">确认关闭</button>
          </div>
        </div>
      </div>
    `;
  },

  renderPartialRefundModal(selected) {
    if (!this.state.dispute.showPartialModal) {
      return '';
    }
    const isFullRefund = this.state.dispute.refundMode === 'full';

    return `
      <div class="modal-backdrop active" id="partialRefundBackdrop">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">${isFullRefund ? '全额退款裁定' : '部分退款裁定'}</div>
            <div class="modal-close" data-action="close-partial-refund">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              <div style="font-weight:600; margin-bottom:4px;">${this.escape(selected.id)} / ${this.escape(selected.orderId)}</div>
              ${isFullRefund ? '' : `<div class="section-hint">最高退款上限 ${this.escape(selected.maxRefund)}</div>`}
            </div>
            ${isFullRefund ? '' : `
              <div class="form-group">
                <label class="form-label required">退款金额</label>
                <input class="input" id="partialRefundAmount" type="number" min="0.01" step="0.01" placeholder="请输入部分退款金额" style="width:100%;">
              </div>
            `}
            <div class="form-group">
              <label class="form-label required">责任方</label>
              <select class="input" id="partialRefundResponsibility" style="width:100%;">
                <option value="">请选择责任方</option>
                <option value="none">均无责任</option>
                <option value="publisher">发布方责任</option>
                <option value="worker">服务方责任</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label required">裁定说明</label>
              <textarea class="input" id="partialRefundReason" style="width:100%; height:auto; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="请填写证据判断和处理说明"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="close-partial-refund">取消</button>
            <button class="btn btn-primary" type="button" data-action="submit-partial-refund" data-id="${this.escape(selected.id)}">确认裁定</button>
          </div>
        </div>
      </div>
    `;
  },

  renderCloseOrderModal(currentRecord) {
    if (!this.state.detail.showCloseOrderModal) {
      return '';
    }
    const selected = this.getRecordById(this.state.detail.closingId) || currentRecord;
    if (!selected) {
      return '';
    }

    return `
      <div class="modal-backdrop active" id="closeOrderBackdrop">
        <div class="modal" style="width:560px;">
          <div class="modal-header">
            <div class="modal-title">强制关闭订单</div>
            <div class="modal-close" data-action="cancel-close-order">✕</div>
          </div>
          <div class="modal-body">
            <div class="section-card" style="padding:14px; background:var(--color-bg-secondary); margin-bottom:16px;">
              <div style="font-weight:600; margin-bottom:4px;">${this.escape(selected.id)} / ${this.escape(selected.project)}</div>
              <div class="section-hint">退款类型和金额由运营人工裁定；保险费按产品规则处理，置顶费默认不退。</div>
            </div>
            <div class="form-group">
              <label class="form-label required">退款方式</label>
              <select class="input" id="closeOrderRefundMode" style="width:100%;">
                <option value="">请选择退款方式</option>
                <option value="full">全额退款</option>
                <option value="partial">部分退款</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">部分退款金额</label>
              <input class="input" id="closeOrderRefundAmount" type="number" min="0.01" step="0.01" placeholder="选择部分退款时必填" style="width:100%;">
            </div>
            <div class="form-group">
              <label class="form-label required">责任方</label>
              <select class="input" id="closeOrderResponsibility" style="width:100%;">
                <option value="">请选择责任方</option>
                <option value="none">均无责任</option>
                <option value="publisher">发布方责任</option>
                <option value="worker">服务方责任</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label required">强制关闭原因</label>
              <textarea class="input" id="closeOrderReason" style="width:100%; height:auto; min-height:96px; padding:12px 16px; resize:vertical;" placeholder="请填写关闭原因、证据判断和后续处理说明"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn" type="button" data-action="cancel-close-order">取消</button>
            <button class="btn btn-danger" type="button" data-action="submit-close-order" data-id="${this.escape(selected.id)}">确认关闭</button>
          </div>
        </div>
      </div>
    `;
  },

  getPriorStatusLabel(status) {
    const option = this.getStatusOptions().find(([value]) => value === status);
    return option ? option[1] : status || '未知';
  },

  bindEvents() {
    if (this.bound) {
      return;
    }

    this.root.addEventListener('click', event => {
      const target = event.target.closest('[data-action], [data-pagination-page]');
      if (!target) {
        return;
      }

      if (target.dataset.paginationPage) {
        if (target.classList.contains('disabled') || target.classList.contains('active')) {
          return;
        }
        const nextPage = Number(target.dataset.paginationPage);
        if (this.getPageKey() === 'list') {
          this.state.list.page = nextPage;
        } else if (this.getPageKey() === 'dispute') {
          this.state.dispute.page = nextPage;
        } else if (this.getPageKey() === 'sos') {
          this.state.sos.page = nextPage;
        }
        this.render();
        return;
      }

      const action = target.dataset.action;
      switch (action) {
        case 'search-orders':
          this.state.list.keyword = document.getElementById('orderKeyword').value.trim();
          this.state.list.status = document.getElementById('orderStatus').value;
          this.state.list.risk = document.getElementById('orderRisk').value;
          this.state.list.page = 1;
          this.render();
          AdminUI.showMessage('订单列表已刷新筛选结果', 'success');
          break;
        case 'reset-orders':
          this.state.list = { keyword: '', status: '', risk: '', page: 1 };
          this.render();
          AdminUI.showMessage('订单筛选条件已重置', 'success');
          break;
        case 'export-orders':
          AdminUI.showMessage('订单清单导出任务已创建；超过 1 万条会异步生成', 'success');
          break;
        case 'save-order-note':
          this.saveRecordNote(target.dataset.id);
          break;
        case 'mark-publisher-confirmed':
          this.markPublisherConfirmed(target.dataset.id);
          break;
        case 'close-order':
          this.openCloseOrderModal(target.dataset.id);
          break;
        case 'cancel-close-order':
          this.state.detail.showCloseOrderModal = false;
          this.state.detail.closingId = '';
          this.render();
          break;
        case 'submit-close-order':
          this.submitCloseOrder(target.dataset.id);
          break;
        case 'open-order-dispute':
          this.openRecordDispute(target.dataset.id);
          break;
        case 'open-chat-modal':
          this.state.detail.showChatModal = true;
          this.render();
          break;
        case 'close-chat-modal':
          this.state.detail.showChatModal = false;
          this.render();
          break;
        case 'export-order-chat':
          AdminUI.showMessage(`订单 ${target.dataset.id} 的聊天记录导出任务已创建`, 'success');
          break;
        case 'search-sos':
          this.state.sos.keyword = document.getElementById('sosKeyword').value.trim();
          this.state.sos.role = document.getElementById('sosRole').value;
          this.state.sos.status = document.getElementById('sosStatus').value;
          this.state.sos.sla = document.getElementById('sosSla').value;
          this.state.sos.page = 1;
          this.render();
          AdminUI.showMessage('SOS 记录已刷新筛选结果', 'success');
          break;
        case 'reset-sos':
          this.state.sos = { keyword: '', role: '', status: '', sla: '', page: 1, quickFilter: '', showCloseModal: false, closingId: '' };
          this.render();
          AdminUI.showMessage('SOS 筛选条件已重置', 'success');
          break;
        case 'export-sos':
          AdminUI.showMessage('SOS 记录导出任务已创建，包含定位、通知、工单处理字段', 'success');
          break;
        case 'filter-sos-summary':
          this.state.sos.quickFilter = target.dataset.filter === 'all' ? '' : target.dataset.filter;
          this.state.sos.page = 1;
          this.render();
          break;
        case 'assign-sos':
          this.assignSos(target.dataset.id);
          break;
        case 'contact-sos':
          this.markSosContacted(target.dataset.id);
          break;
        case 'add-sos-note':
          this.addSosNote(target.dataset.id);
          break;
        case 'close-sos':
          this.openSosCloseModal(target.dataset.id);
          break;
        case 'cancel-close-sos':
          this.state.sos.showCloseModal = false;
          this.state.sos.closingId = '';
          this.render();
          break;
        case 'submit-close-sos':
          this.submitCloseSos(target.dataset.id);
          break;
        case 'search-disputes':
          this.state.dispute.keyword = document.getElementById('disputeKeyword').value.trim();
          this.state.dispute.status = document.getElementById('disputeStatus').value;
          this.state.dispute.priority = document.getElementById('disputePriority').value;
          this.state.dispute.page = 1;
          this.render();
          break;
        case 'reset-disputes':
          this.state.dispute.keyword = '';
          this.state.dispute.status = '';
          this.state.dispute.priority = '';
          this.state.dispute.page = 1;
          this.render();
          break;
        case 'dispute-approve-keep':
          this.resolveDispute(target.dataset.id, 'keep');
          break;
        case 'dispute-refund-full':
          this.state.dispute.selectedId = target.dataset.id;
          this.state.dispute.refundMode = 'full';
          this.state.dispute.showPartialModal = true;
          this.render();
          break;
        case 'dispute-refund-partial':
          this.state.dispute.selectedId = target.dataset.id;
          this.state.dispute.refundMode = 'partial';
          this.state.dispute.showPartialModal = true;
          this.render();
          break;
        case 'close-partial-refund':
          this.state.dispute.showPartialModal = false;
          this.render();
          break;
        case 'submit-partial-refund':
          this.submitPartialRefund(target.dataset.id);
          break;
        case 'export-disputes':
          AdminUI.showMessage('纠纷证据包导出任务已创建', 'success');
          break;
        default:
          break;
      }
    });

    this.bound = true;
  },

  saveRecords() {
    AdminStore.set('order_records_v5', this.records);
  },

  saveDisputes() {
    AdminStore.set('order_disputes_v4', this.disputes);
  },

  saveSosRecords() {
    AdminStore.set('order_sos_records_v1', this.sosRecords);
  },

  saveRecordNote(id) {
    const record = this.getRecordById(id);
    if (!record) return;
    const note = document.getElementById('orderNoteInput').value.trim();
    if (!note) {
      AdminUI.showMessage('请填写备注内容', 'warning');
      return;
    }
    record.remarks = Array.isArray(record.remarks) ? record.remarks : [];
    record.remarks.unshift({
      operator: '当前管理员',
      time: '刚刚',
      text: note
    });
    record.updatedAt = '刚刚';
    this.saveRecords();
    this.render();
    AdminUI.showMessage('后台备注已追加，并同步写入操作日志', 'success');
  },

  markPublisherConfirmed(id) {
    const record = this.getRecordById(id);
    if (!record || record.objectType !== 'order' || record.status !== 'pending_confirm') {
      AdminUI.showMessage('仅待确认完成的履约订单可人工确认完成', 'warning');
      return;
    }
    record.status = 'completed';
    record.statusLabel = '已完成';
    record.updatedAt = '刚刚';
    record.timeline = [...(record.timeline || []), { title: '后台人工确认完成', time: '刚刚', copy: '运营确认发布者无法操作后，按规则人工标记发布者已确认。' }];
    this.saveRecords();
    this.render();
    AdminUI.showMessage(`订单 ${id} 已人工确认完成，评价窗口已开启`, 'success');
  },

  parseResponsibility(value) {
    const raw = String(value || '').trim();
    const normalized = raw.toLowerCase();
    if (['1', 'none', 'no', '无责任', '均无责任'].includes(normalized) || raw === '均无责任') {
      return { value: 'none', label: '均无责任', deduction: 0 };
    }
    if (['2', 'publisher', 'client', '发布方', '发布者', '发布方责任', '发布者责任'].includes(normalized) || raw === '发布方责任' || raw === '发布者责任') {
      return { value: 'publisher', label: '发布方责任', deduction: 5 };
    }
    if (['3', 'worker', 'service', 'provider', '服务方', '服务者', '服务方责任', '服务者责任'].includes(normalized) || raw === '服务方责任' || raw === '服务者责任') {
      return { value: 'worker', label: '服务方责任', deduction: 5 };
    }
    return null;
  },

  applyResponsibilityCredit(record, responsibility) {
    if (!responsibility || responsibility.value === 'none') {
      return '均无责任，不扣信用分';
    }
    const target = responsibility.value === 'publisher' ? record?.publisher : record?.worker;
    const targetLabel = responsibility.value === 'publisher' ? '发布者' : '服务者';
    if (!target) {
      return `${responsibility.label}，但当前记录未生成${targetLabel}，不扣信用分`;
    }
    const before = Number(target.credit);
    if (!Number.isFinite(before)) {
      return `${responsibility.label}，${targetLabel}信用分 -${responsibility.deduction}`;
    }
    const after = Math.max(0, before - responsibility.deduction);
    target.credit = after;
    return `${responsibility.label}，${targetLabel}信用分 -${before - after}（${before} -> ${after}）`;
  },

  openCloseOrderModal(id) {
    const record = this.getRecordById(id);
    if (!record) return;
    if (['rated', 'refunded', 'cancelled'].includes(record.status)) {
      AdminUI.showMessage('终态记录不可重复关闭', 'warning');
      return;
    }
    this.state.detail.showCloseOrderModal = true;
    this.state.detail.closingId = id;
    this.render();
  },

  submitCloseOrder(id) {
    const record = this.getRecordById(id);
    if (!record) return;
    const reasonInput = document.getElementById('closeOrderReason');
    const responsibilityInput = document.getElementById('closeOrderResponsibility');
    const refundModeInput = document.getElementById('closeOrderRefundMode');
    const refundAmountInput = document.getElementById('closeOrderRefundAmount');
    const reason = reasonInput ? reasonInput.value.trim() : '';
    const responsibility = this.parseResponsibility(responsibilityInput?.value);
    const refundMode = refundModeInput ? refundModeInput.value : '';
    const maxRefund = this.parseMoney(record.amount);
    const refundAmount = refundMode === 'full' ? maxRefund : Number(refundAmountInput?.value);
    const refundDecision = refundMode ? {
      mode: refundMode,
      label: refundMode === 'full' ? '全额退款' : '部分退款',
      amountLabel: `¥${refundAmount.toFixed(2)}`
    } : null;
    if (!reason) {
      AdminUI.showMessage('强制关闭必须填写原因', 'error');
      return;
    }
    if (!refundMode) {
      AdminUI.showMessage('强制关闭必须选择退款方式', 'error');
      return;
    }
    if (!Number.isFinite(refundAmount) || refundAmount <= 0) {
      AdminUI.showMessage(refundMode === 'full' ? '订单金额异常，无法生成全额退款' : '请输入有效的部分退款金额', 'error');
      return;
    }
    if (refundMode === 'partial' && maxRefund > 0 && refundAmount > maxRefund) {
      AdminUI.showMessage('部分退款金额不可超过订单任务金额', 'error');
      return;
    }
    if (!responsibility) {
      AdminUI.showMessage('强制关闭必须选择责任方', 'error');
      return;
    }
    this.closeRecord(id, reason, responsibility, refundDecision);
  },

  closeRecord(id, reason, responsibility, refundDecision) {
    const record = this.getRecordById(id);
    if (!record) return;
    if (['rated', 'refunded', 'cancelled'].includes(record.status)) {
      AdminUI.showMessage('终态记录不可重复关闭', 'warning');
      return;
    }
    const creditImpact = this.applyResponsibilityCredit(record, responsibility);
    record.status = 'cancelled';
    record.statusLabel = '已取消';
    record.updatedAt = '刚刚';
    this.syncOrderRefundAmount(record, refundDecision.amountLabel, `强制关闭${refundDecision.label}`);
    record.timeline = [...(record.timeline || []), { title: '后台强制关闭', time: '刚刚', copy: `退款方式：${refundDecision.label} ${refundDecision.amountLabel}。责任方：${responsibility.label}。原因：${reason}。保险费按产品退款规则处理，置顶费默认不退。信用处理：${creditImpact}。` }];
    record.finance = Array.from(new Set([
      ...(record.finance || []),
      `后台强制关闭：${refundDecision.label} ${refundDecision.amountLabel}`,
      '保险费按产品退款规则处理，置顶费默认不退',
      '平台不收技术服务费，必要时生成冲正流水',
      `责任方：${responsibility.label}`,
      `信用处理：${creditImpact}`
    ]));
    this.state.detail.showCloseOrderModal = false;
    this.state.detail.closingId = '';
    this.saveRecords();
    this.render();
    AdminUI.showMessage(`订单 ${id} 已强制关闭，已写入资金、通知和操作日志口径`, 'warning');
  },

  openRecordDispute(id) {
    const disputeId = this.getDisputeIdByOrder(id);
    if (!disputeId) {
      AdminUI.showMessage('当前记录暂无纠纷单', 'warning');
      return;
    }
    AdminCore.routeTo(`order/dispute-detail.html?${this.getSourcePrefix()}dispute=${disputeId}`);
  },

  getSosRecordById(id) {
    return this.sosRecords.find(item => item.id === id) || null;
  },

  appendSosNote(item, text, operator = '当前管理员') {
    item.notes = Array.isArray(item.notes) ? item.notes : [];
    item.notes.unshift({
      operator,
      time: '刚刚',
      text
    });
    item.timeline = [...(item.timeline || []), {
      title: '后台处理',
      time: '刚刚',
      copy: text
    }];
  },

  assignSos(id) {
    const item = this.getSosRecordById(id);
    if (!item || item.status === 'closed') return;
    if (this.isSosClaimed(item)) {
      AdminUI.showMessage('该 SOS 工单已认领，可继续处理', 'warning');
      return;
    }
    item.handler = '当前管理员';
    item.status = 'processing';
    item.statusLabel = '处理中';
    if (item.firstResponse === '未首响') {
      item.firstResponse = '刚刚';
      item.sla = item.location.missing ? 'missing_location' : 'normal';
      item.slaLabel = item.location.missing ? '定位失败待跟进' : '已首响';
    }
    this.appendSosNote(item, '已认领 SOS 工单，开始人工跟进。');
    this.saveSosRecords();
    this.render();
    AdminUI.showMessage(`${id} 已由当前管理员认领`, 'success');
  },

  markSosContacted(id) {
    const item = this.getSosRecordById(id);
    if (!item || item.status === 'closed') return;
    if (!this.isSosClaimed(item)) {
      AdminUI.showMessage('请先认领工单，再标记已联系', 'warning');
      return;
    }
    item.status = 'contacted';
    item.statusLabel = '已联系';
    item.handler = item.handler === '待认领' ? '当前管理员' : item.handler;
    if (item.firstResponse === '未首响') {
      item.firstResponse = '刚刚';
    }
    this.appendSosNote(item, '已完成电话/消息联系，并确认用户当前状态。');
    this.saveSosRecords();
    this.render();
    AdminUI.showMessage(`${id} 已标记为已联系`, 'success');
  },

  addSosNote(id) {
    const item = this.getSosRecordById(id);
    if (!item || item.status === 'closed') return;
    if (!this.isSosClaimed(item)) {
      AdminUI.showMessage('请先认领工单，再添加处理备注', 'warning');
      return;
    }
    const noteInput = document.getElementById('sosNoteInput');
    const note = noteInput ? noteInput.value.trim() : '';
    if (!note) {
      AdminUI.showMessage('请填写 SOS 处理备注', 'warning');
      return;
    }
    item.handler = item.handler === '待认领' ? '当前管理员' : item.handler;
    item.status = item.status === 'pending' ? 'processing' : item.status;
    item.statusLabel = item.status === 'processing' ? '处理中' : item.statusLabel;
    this.appendSosNote(item, note);
    this.saveSosRecords();
    this.render();
    AdminUI.showMessage('SOS 处理备注已追加', 'success');
  },

  openSosCloseModal(id) {
    const item = this.getSosRecordById(id);
    if (!item || item.status === 'closed') return;
    if (!this.isSosClaimed(item)) {
      AdminUI.showMessage('请先认领工单，再关闭', 'warning');
      return;
    }
    this.state.sos.showCloseModal = true;
    this.state.sos.closingId = id;
    this.render();
  },

  submitCloseSos(id) {
    const item = this.getSosRecordById(id);
    if (!item || item.status === 'closed') return;
    if (!this.isSosClaimed(item)) {
      AdminUI.showMessage('请先认领工单，再关闭', 'warning');
      return;
    }
    const noteInput = document.getElementById('sosCloseNoteInput');
    const closeText = noteInput ? noteInput.value.trim() : '';
    if (!closeText) {
      AdminUI.showMessage('请填写关闭备注', 'error');
      return;
    }
    item.status = 'closed';
    item.statusLabel = '已关闭';
    item.closeResult = closeText;
    item.handler = item.handler === '待认领' ? '当前管理员' : item.handler;
    if (item.firstResponse === '未首响') {
      item.firstResponse = '刚刚';
    }
    this.appendSosNote(item, closeText);
    this.state.sos.showCloseModal = false;
    this.state.sos.closingId = '';
    this.saveSosRecords();
    this.render();
    AdminUI.showMessage(`${id} 已关闭，记录永久留存`, 'success');
  },

  resolveDispute(id, type) {
    const dispute = this.disputes.find(item => item.id === id);
    if (!dispute) return;
    if (!['frozen', 'cancel_arbitration'].includes(dispute.status)) {
      AdminUI.showMessage('仅已冻结或取消裁定中的工单允许处理', 'warning');
      return;
    }
    dispute.status = 'rejected';
    dispute.statusLabel = '已驳回';
    dispute.currentHolder = '已归档';
    dispute.resolution = {
      type: '驳回退款',
      amount: '¥0',
      reason: '平台核验证据后驳回退款，订单恢复至纠纷前状态。',
      decidedAt: '刚刚',
      operator: '当前管理员'
    };
    const record = this.getRecordById(dispute.orderId);
    if (record) {
      record.hasDispute = false;
      record.updatedAt = '刚刚';
      record.status = dispute.priorStatus || 'completed';
      record.statusLabel = this.getPriorStatusLabel(record.status);
      this.syncOrderRefundAmount(record, '¥0', '驳回退款');
      record.timeline = [...(record.timeline || []), { title: '纠纷驳回', time: '刚刚', copy: `平台驳回退款，订单恢复为${record.statusLabel}。` }];
      AdminUI.showMessage(`已驳回退款，订单恢复为${record.statusLabel}`, 'success');
    }
    this.saveDisputes();
    this.saveRecords();
    this.state.dispute.showPartialModal = false;
    this.render();
  },

  submitPartialRefund(id) {
    const isFullRefund = this.state.dispute.refundMode === 'full';
    const amount = isFullRefund ? this.parseMoney(this.disputes.find(item => item.id === id)?.maxRefund) : Number(document.getElementById('partialRefundAmount').value);
    const responsibility = this.parseResponsibility(document.getElementById('partialRefundResponsibility')?.value);
    const reason = document.getElementById('partialRefundReason').value.trim();
    if (!Number.isFinite(amount) || amount <= 0) {
      AdminUI.showMessage('请输入有效的部分退款金额', 'error');
      return;
    }
    if (!responsibility) {
      AdminUI.showMessage('请选择责任方', 'error');
      return;
    }
    if (!reason) {
      AdminUI.showMessage('请填写裁定说明', 'error');
      return;
    }

    const dispute = this.disputes.find(item => item.id === id);
    if (!dispute) return;
    if (!['frozen', 'cancel_arbitration'].includes(dispute.status)) {
      AdminUI.showMessage('仅已冻结或取消裁定中的工单允许处理', 'warning');
      return;
    }
    const amountLabel = `¥${amount.toFixed(2)}`;
    const record = this.getRecordById(dispute.orderId);
    const creditImpact = this.applyResponsibilityCredit(record, responsibility);
    dispute.status = isFullRefund ? 'full_refund' : 'partial_refund';
    dispute.statusLabel = isFullRefund ? '已全额退款' : '已部分退款';
    dispute.currentHolder = '已归档';
    dispute.resolution = {
      type: isFullRefund ? '全额退款' : '部分退款',
      amount: amountLabel,
      responsibility: responsibility.label,
      creditImpact,
      reason,
      decidedAt: '刚刚',
      operator: '当前管理员'
    };
    if (record) {
      record.status = 'refunded';
      record.statusLabel = '已退款';
      record.hasDispute = true;
      record.updatedAt = '刚刚';
      this.syncOrderRefundAmount(record, amountLabel, isFullRefund ? '全额退款裁定' : '部分退款裁定');
      record.finance = Array.from(new Set([...(record.finance || []), `责任方：${responsibility.label}`, `信用处理：${creditImpact}`]));
      record.timeline = [...(record.timeline || []), { title: isFullRefund ? '纠纷全额退款' : '纠纷部分退款', time: '刚刚', copy: `平台裁定${isFullRefund ? '全额' : '部分'}退款 ${amountLabel}，责任方：${responsibility.label}，信用处理：${creditImpact}，订单进入已退款归档。` }];
    }
    this.saveDisputes();
    this.saveRecords();
    this.state.dispute.showPartialModal = false;
    this.render();
    AdminUI.showMessage(`已完成${isFullRefund ? '全额' : '部分'}退款裁定，退款金额 ${amountLabel}`, 'success');
  },

  parseMoney(value) {
    const amount = Number(String(value || '').replace(/[^\d.]/g, ''));
    return Number.isFinite(amount) ? amount : 0;
  },

  syncOrderRefundAmount(record, amountLabel, reason) {
    record.financeSummary = {
      ...(record.financeSummary || this.parseFinanceSummary(record.finance || [], record.amount)),
      refundAmount: amountLabel,
      workerIncome: amountLabel === '¥0' ? (record.financeSummary?.workerIncome || '待结算') : '退款后重算',
      platformIncome: amountLabel === '¥0' ? (record.financeSummary?.platformIncome || '待结算') : '退款后重算'
    };
    record.finance = Array.from(new Set([...(record.finance || []), `${reason}：退款金额 ${amountLabel}`]));
  }
};

document.addEventListener('DOMContentLoaded', () => {
  OrderModule.init();
});
