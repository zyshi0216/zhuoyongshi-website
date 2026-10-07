import type { SiteContent } from "./types";

export const chineseContent: SiteContent = {
  nav: {
    about: "关于",
    research: "研究",
    projects: "项目",
    publications: "论文",
    news: "动态",
    cv: "简历",
  },
  hero: {
    eyebrow: "博士研究生 · 新加坡国立大学",
    firstName: "ZHUOYONG",
    lastName: "SHI",
    tagline: "面向人、机器与环境的智能感知与物理建模。",
    description: "融合传感、机器智能与物理模型，理解并优化数字健康、自主机器与复杂环境中的动态系统。",
    viewCV: "查看简历",
    scholar: "Google Scholar",
    orcid: "ORCID",
    github: "GitHub",
    labels: ["人体", "机器", "环境"],
    bottom: ["智能感知", "物理建模", "机器智能"],
  },
  about: {
    label: "关于",
    statement: ["感知物理世界。", "建模动态过程。", "赋能智能决策。"],
    ccurrentLabel: "目前",
    currentRole: "博士研究生",
    currentInstitution: "新加坡国立大学",
    currentPeriod: "2025 — 至今",

    backgroundLabel: "教育背景",
    backgroundField: "电子科学与技术",
    backgroundDegrees: "2022 工学学士 · 2025 工学硕士",
    backgroundInstitutions: "",

    honorsLabel: "荣誉",
    honors: [
      "国家奖学金 ×2",
      "宝钢优秀学生奖学金",
      "优秀毕业生",
      "优秀毕业研究生",
    ],
    lead: "石卓勇现为新加坡国立大学博士研究生，研究聚焦于智能感知、机器智能与物理建模的交叉领域。",
    body: "其研究关注如何通过传感与计算方法理解并交互于动态物理系统，当前工作涵盖可穿戴感知与数字健康、人体运动评估与自适应康复、自主无人机系统、环境重建以及智能大气取水等方向。",
    questionLabel: "核心研究问题",
    question: "如何对物理系统进行有效感知、建模与理解，并进一步实现智能、自适应的决策？",
  },
  research: {
    label: "研究框架",
    heading: "通过感知、智能与物理模型理解动态系统。",
    intro: "我的研究将智能感知与计算及物理模型相结合，用于表征、理解和优化人、机器与环境三个相互关联领域中的动态状态。",
    areas: [
      { number: "01", title: "人体", subtitle: "Human Intelligence", items: ["可穿戴感知", "运动功能评估", "自适应康复", "人体数字孪生"] },
      { number: "02", title: "机器", subtitle: "Machine Intelligence", items: ["自主无人机", "集群智能", "轨迹规划", "智能决策"] },
      { number: "03", title: "环境", subtitle: "Environmental Intelligence", items: ["环境感知", "湍流重建", "物理建模", "大气取水"] },
    ],
  },
  featured: {
    label: "重点研究",
    heading: "代表性研究方向",
    intro: "围绕人体健康、自主机器与物理环境，以感知、建模和智能方法建立相互贯通的研究体系。",
    projects: [
      { number: "01", domain: "人体", status: "在研", title: "连续运动评估驱动的自适应康复", keywords: "可穿戴感知 · 帕金森病 · 闭环康复", description: "将连续运动功能评估嵌入康复交互过程，实现个体化、自适应训练。通过多模态感知持续捕捉多次康复过程中的运动表现变化，使训练任务能够依据个体能力与进展动态调整。", highlight: "评估 → 自适应 → 康复" },
      { number: "02", domain: "人体", status: "在研", title: "面向高效人体运动感知的数字孪生", keywords: "人体数字孪生 · 虚拟传感 · 传感器拓扑 · 运动评估", description: "研究如何利用数字孪生与虚拟传感降低实体传感需求，同时保留具有评估价值的运动信息，并通过大规模拓扑筛选识别高效的非对称人体运动传感配置。", highlight: "70,000+ 传感器配置" },
      { number: "03", domain: "机器 × 环境", status: "MEASUREMENT · 2026", title: "从环境观测到自主决策", keywords: "湍流感知 · 环境重建 · 无人机航路规划", description: "面向低空无人机运行，将环境感知与自主决策相连接：由观测信息重建复杂湍流场，并进一步将环境信息传递至下游航路规划，实现从观测到决策的一体化框架。", highlight: "观测 → 重建 → 决策" },
      { number: "04", domain: "环境", status: "在研", title: "智能大气取水系统", keywords: "环境感知 · 冷凝 · 自适应控制 · 嵌入式系统", description: "开发能够响应动态环境变化的感知驱动型大气取水系统，通过温湿度、气压、光照、气流及表面状态等环境与系统测量，为冷凝过程优化和自适应控制提供物理依据。", highlight: "感知 → 物理 → 自适应控制" },
    ],
  },
  publications: {
    label: "代表性论文",
    heading: "研究成果",
    viewAll: "查看全部论文 →",
    items: [
      { year: "2026", journal: "Measurement", title: "An Observation-to-Decision Framework for Low-Altitude Turbulence Reconstruction and UAV Route Planning" },
      { year: "2024", journal: "IEEE Sensors Journal", title: "Design of Motor Skill Recognition and Hierarchical Evaluation System for Table Tennis Players" },
      { year: "2024", journal: "IEEE Sensors Journal", title: "Design of UAV Flight State Recognition System for Multi-Sensor Data Fusion" },
      { year: "2023", journal: "IEEE Transactions on Aerospace and Electronic Systems", title: "UAV Trajectory Prediction Based on Flight State Recognition" },
    ],
  },
  news: {
    label: "最新动态",
    heading: "动态",
    items: [
      { date: "2026.09", text: "受邀加入 CMC 审稿人团队。" },
      { date: "2026.08", text: "低空湍流重建与无人机航路规划研究被 Measurement 接收。" },
      { date: "2025.08", text: "进入新加坡国立大学攻读博士学位。" },
    ],
  },
  footer: {
    role: "博士研究生 · 新加坡国立大学",
    themes: "智能感知 · 物理建模 · 机器智能",
    copyright: "© 2026 Zhuoyong Shi",
  },
};